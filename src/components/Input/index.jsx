import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';


const InputBase = styled.input`
    //margin: 50px 0 30px 20px;
    display: block;
    width: 300px;
    height: 40px;
    padding-left: 20px;
    margin-top: 30px;
    margin-right: auto;
    margin-left: auto;
    background: #FFFFFF;
    border:0;
    border-radius: 8px;

::placeholder{

    color: rgba(58, 155, 240, 0.767);
}

`;

const Input = ({ onChange, placeholder }) => {
    return (
        <>
            <InputBase 
            className="inputScreen"
            onChange={ onChange}
            placeholder="Search"
             />
        </>
    );
}

//Input.propTypes = {
//    onChange: PropTypes.func.isRequired,
//    placeholder: PropTypes.string.isRequired,
//};
//
export default Input;
