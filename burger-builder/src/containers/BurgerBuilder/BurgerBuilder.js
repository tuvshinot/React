import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from '../../axios-order';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/ErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad:0.5,
    bacon:0.7,
    cheese:0.4,
    meat:1.3
};


class BurgerBuilder extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {...};
    // }

    state = {
        ingredients:null,
        totalPrice:4,
        purchasable:false,
        purchasing:false,
        loading:false,
        error:false
    };

    componentDidMount() {
        axios.get('ingredients.json')
        .then(response => {
            this.setState({
                ingredients : response.data
            })
        })
        .catch(err => {
            this.setState({error:true})
        })
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el)=>{
                return sum + el
            }, 0);
        this.setState({purchasable:sum > 0});
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients:updatedIngredient,
            totalPrice:newPrice
        });
        this.updatePurchaseState(updatedIngredient);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;

        this.setState({
            ingredients:updatedIngredient,
            totalPrice:newPrice
        });
        this.updatePurchaseState(updatedIngredient);
    };

    purchaseHandler = () => {
        this.setState({purchasing:true})
    };
    purchaseCancelHandler = () => {
        this.setState({purchasing:false})
    };
    purchaseContinueHandler = () => {
        this.setState({loading:true})
        const order = {
            ingredients: this.state.ingredients,
            price : this.state.totalPrice,
            custumer : {
                name:'tuvshin',
                address: {
                    street : 'kosmonovtov 15',
                    zipCode:'41351',
                    country : 'Mongolia',
                },
                email:'test@gmail.com'
            },
            deliveryMethod:'fastest'
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading:false, purchasing:false})
        })
        .catch(err => {
            console.log(err);
            this.setState({loading:false, purchasing:false })
        })
    };

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        
        let orderSummary = null;
        let burger = this.state.error ? <h1>Ingredients could not loaded!!!</h1> : <Spinner />
        if(this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        order={this.purchaseHandler}
                        totalPrice={this.state.totalPrice}
                        purchasable={this.state.purchasable}
                    />
                </Aux>
            );

            orderSummary = <OrderSummary 
                ingredients={this.state.ingredients} 
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
                totalPrice={this.state.totalPrice}
            />
        }
        
        if(this.state.loading) {
            orderSummary = <Spinner />
        }

        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);