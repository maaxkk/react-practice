import React from 'react';
import MyInput from "../Input/MyInput.jsx";

function MyRadio(props) {
    return (
        <MyInput category={props.category} type={'radio'} name={props.name}></MyInput>
    );
}

export default MyRadio;