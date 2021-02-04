import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FiSearch } from "react-icons/fi";

const InputBase = styled.input`
    //margin: 50px 0 30px 20px;
    display: block;
    margin-top: 50px;
    margin-right: auto;
    margin-left: auto;
    width: 300px;
    padding: 15px 10px 15px 40px;
    background: #FFFFFF;
    border: 1px solid #D9D0E3;
    border-radius: 8px;
`;

const Input = ({ onChange, placeholder }) => {
    return (
        <>
            <InputBase 
            onChange={ onChange}
            placeholder="Search"
             />
             <FiSearch style={{position: 'absolute', marginTop: -32, marginLeft: 45}}/>
        </>
    );
}

//Input.propTypes = {
//    onChange: PropTypes.func.isRequired,
//    placeholder: PropTypes.string.isRequired,
//};
//
export default Input;
