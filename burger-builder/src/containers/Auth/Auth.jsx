import React, { Component } from 'react';
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import { Redirect } from 'react-router-dom'
import { checkValidity } from '../../shared/utility';

class Auth extends Component {
    state = {
        controls : {
            email : {
                elementType: 'input',
                elementConfig : {
                    type : 'email',
                    placeholder: 'Your email'
                },
                value : '',
                validation : {
                    required: true,
                    isEmail : true
                },
                valid : false,
                touched : false
            },
            password : {
                elementType: 'input',
                elementConfig : {
                    type : 'password',
                    placeholder: 'Your password'
                },
                value : '',
                validation : {
                    required: true,
                   minLength : 6
                },
                valid : false,
                touched : false
            },
        },
        isSignUp : true
    };

    componentDidMount() {
        if(!this.props.buildingBurger && this.props.authRedirectPath !== '/') {
            this.props.onSetAuthRedirectPath()
        }
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls =  {
            ...this.state.controls,
            [controlName] : {
                ...this.state.controls[controlName],
                value : event.target.value,
                valid : checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched : true
            }
        };
        this.setState({controls : updatedControls})
    };

    switchAuthModeHandler = () => {
        this.setState( prevState => {
            return {
                isSignUp : !prevState.isSignUp
            }
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignUp);
    }

    render() {
        const formElementArray = [];
        for(let key in this.state.controls) {
            formElementArray.push({
                id: key,
                config : this.state.controls[key]
            });
        }
        let form = (
                formElementArray.map(el => {
                    return <Input key={el.id}
                        elementType={el.config.elementType} 
                        elementConfig={el.config.elementConfig} 
                        value={el.config.value} 
                        invalid={!el.config.valid}
                        shouldValidate={el.config.validation}
                        touched={el.config.touched}
                        changed={(event) => this.inputChangedHandler(event, el.id)}
                        />
                })
        );
        let errorMessage = null;
        if(this.props.error) {
            errorMessage = <p style={{color:'red', fontWeight:"bold"}}>{this.props.error.message.replace('_', ' ')}</p>
        }

        let content = (
                <form onSubmit={this.submitHandler}>
                    {form}
                    <Button btnType='Success'>Submit</Button>
                </form>
        );

        if(this.props.loading) {
            content = <Spinner />
        }

        let authRedirect = null;
        if(this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <div className={classes.Auth}>
                {authRedirect}
                {errorMessage}
                {content}
                <Button 
                    clicked={this.switchAuthModeHandler}
                    btnType='Danger'>Switch to {this.state.isSignUp ? 'Sign in' : 'Sign up'}</Button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading : state.auth.loading,
        error : state.auth.error,
        isAuthenticated : state.auth.token != null,
        buildingBurger : state.burgerBuilder.building,
        authRedirectPath : state.auth.authRedirectPath    
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth : (email, password, isSignUp) => dispatch(actions.auth(email, password, isSignUp)),
        onSetAuthRedirectPath : () => dispatch(actions.setAuthRedirectPath('/'))
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Auth);