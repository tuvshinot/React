import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import { connect } from 'react-redux';
import withErrorHandler from '../../../hoc/ErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/index';
import { checkValidity } from '../../../shared/utility';


class ContactData extends Component {
    state = {
        orderForm : {
            name : {
                elementType: 'input',
                elementConfig : {
                    type : 'text',
                    placeholder: 'Your Name'
                },
                value : '',
                validation : {
                    required: true
                },
                valid : false,
                touched : false
            },
            country : {
                elementType: 'input',
                elementConfig : {
                    type : 'text',
                    placeholder: 'Country'
                },
                value : '',
                validation : {
                    required: true
                },
                valid : false,
                touched : false
            },
            street : {
                elementType: 'input',
                elementConfig : {
                    type : 'text',
                    placeholder: 'Street'
                },
                value : '',
                validation : {
                    required: true
                },
                valid : false,
                touched : false
            },
            postalcode: {
                elementType: 'input',
                elementConfig : {
                    type : 'text',
                    placeholder: 'Zipcode'
                },
                value : '',
                validation : {
                    required: true,
                    minLength : 5,
                    maxLength : 5
                },
                valid : false,
                touched : false
            },
            email : {
                elementType: 'input',
                elementConfig : {
                    type : 'email',
                    placeholder: 'Your Email'
                },
                value : '',
                validation : {
                    required: true
                },
                valid : false,
                touched : false
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig : {
                    options : [
                        {value : 'fastest', displayValue : 'Fastest'},
                        {value : 'cheapest', displayValue : 'Cheapest'}
                    ]
                },
                validation : {},
                value : 'fastest',
                valid : true
            },
        },
        formIsValid : false
    }; 

    orderHandler = (event) => {
        event.preventDefault(); // not submission and reload
        const formData = {};
        for(let formElID in this.state.orderForm) {
            formData[formElID] = this.state.orderForm[formElID].value
        }
        
        const order = {
            ingredients: this.props.ings,
            price : this.props.price.toFixed(2),
            orderData : formData,
            userId : this.props.userId
        }

        // redux
        this.props.onBurgerOrder(order, this.props.token);
    };

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm =  {
            ...this.state.orderForm
        };
        const updatedFormElement = {...updatedOrderForm[inputIdentifier]};
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for(let inputID in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputID].valid && formIsValid;
        }

        this.setState({orderForm : updatedOrderForm, formIsValid : formIsValid})
    };

    render() {
        const formElementArray = [];
        for(let key in this.state.orderForm) {
            formElementArray.push({
                id: key,
                config : this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementArray.map(el => {
                    return <Input key={el.id}
                        elementType={el.config.elementType} 
                        elementConfig={el.config.elementConfig} 
                        value={el.config.value} 
                        invalid={!el.config.valid}
                        shouldValidate={el.config.validation}
                        touched={el.config.touched}
                        changed={(event) => this.inputChangedHandler(event, el.id)}
                        />

                })}
                <Button btnType='Success' disabled={!this.state.formIsValid}>ORDER</Button>
            </form>
        );

        if(this.props.loading) {
            form = <Spinner />
        }

        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                {form}
            </div>
        );
    };
};


const mapStateToProps = state => {
    return {
        ings : state.burgerBuilder.ingredients,
        price : state.burgerBuilder.totalPrice,
        loading : state.order.loading,
        token : state.auth.token,
        userId : state.auth.userId
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onBurgerOrder : (orderData, token) => dispatch(actions.purchaseBurger(orderData, token)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(ContactData, axios));
