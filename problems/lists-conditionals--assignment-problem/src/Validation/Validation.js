import React from 'react';

const Validation = (props) => {
    let validMessage = 'Text is too short!';
    if(props.userInput.length >  5)
        validMessage = 'Text is long enough!'

    if(props.userInput.length == 0)
        validMessage = null;

    return(
        <div>
            <p>{validMessage}</p>
        </div>
    );
};

export default Validation;