import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateName, updateEmail } from "./Actions";

const UserForm = () => {
    let dispatch = useDispatch();
    let name = useSelector(state => state.name);  // ✅ Ensure correct state structure
    let email = useSelector(state => state.email);

    return (
        <div>
            <h2>Enter Your Information</h2>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => dispatch(updateName(e.target.value))} // ✅ Correctly dispatch action
            />
            <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => dispatch(updateEmail(e.target.value))} // ✅ Correctly dispatch action
            />
            <div className="output">
                <p>Name - {name}</p>
                <p>Email - {email}</p>
            </div>
        </div>
    );
};

export default UserForm;
