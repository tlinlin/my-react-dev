import React from 'react';
import PropTypes from 'prop-types';
function NumberList(props) {
    const numbers = props.numbers;
    return (
        <ul>
            {numbers.map((number) =>
                <li id={number} key={number.toString()}>{number}</li>
            )}
        </ul>
    );
}

NumberList.propTypes = {
    numbers: PropTypes.array
};
export default NumberList;