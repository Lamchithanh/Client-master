import React from "react";
import MoreUser from "./MoreUser";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserById } from "../../../State/Auth/Action";
import { getAddressByUserId } from "../../../State/Auth/Action";

const UserDetail = ({ auth }) => {
    const dispatch = useDispatch();
    const handlerFind = (userId) => {
        dispatch(getUserById(userId));
        dispatch(getAddressByUserId(userId));
    };

    return (
        <tr>
            <td>{auth.id}</td>
            <td>{auth.fullName}</td>
            <td>{auth.email}</td>
            <td>
                <button class=" btn-outline-user">
                <NavLink to="/MoreUser" style={{ textDecoration: "none"}}>
                        <li
                            className="li-login-more"
                            onClick={() => handlerFind(auth.id)}
                        >
                            More
                        </li>
                    </NavLink>
                </button>
            </td>
        </tr>
    );
};
export default UserDetail;
