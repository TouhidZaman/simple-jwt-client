import React from "react";

const Input = ({ label, register, required }) => {
    return (
        <>
            <label>{label}</label>
            <input {...register(label, { required })} />
        </>
    );
};

export default Input;
