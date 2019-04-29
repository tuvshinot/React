import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Sum : <strong>{props.totalPrice.toFixed(2)}$</strong></p>
        {controls.map(ctrl => {
            return <BuildControl 
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
                />
        })}
        <button 
            onClick={props.order}
            className={classes.OrderButton}
            disabled={!props.purchasable}
            >{props.isAuth ? 'ORDER NOW' : 'Sign up to order'}
        </button>
    </div>
);

export default buildControls;