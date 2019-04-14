import React from 'react';

const Char = (props) => {
    const style = {
        display:'inline-block',
        padding:'16px',
        margin:'16px',
        textAlign:'center',
        border:'solid 1px black'
    };


    return(
        <div style={style} onClick={props.remove}>
            <p>{props.char}</p>
        </div>
    );
};

export default Char;