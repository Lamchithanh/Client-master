import React, { useEffect } from "react";
import "./AdminUser.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../../State/Auth/Action";
import UserDetail from "./UserDetail";
const AdminUser = () => {
    const dispatch = useDispatch();
    const { auth } = useSelector((store) => store);

    useEffect(() => {
        dispatch(getAllUser());
    }, []);
    return (
        <div className="Admin-check-user">
            <div className="Admin-table-user">
                <div class="container mt-3 container-user">
                    <h2>Thông tin người dùng</h2>
                    <p>Danh sách người dùng hiện đang có:</p>
                    <form className="Form-show-user ">
                        <table class="table-user ">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {auth.user &&
                                    Array.isArray(auth.user) &&
                                    auth.user.map((user) => (
                                        <UserDetail key={user.id} auth={user} />
                                    ))}
                            </tbody>
                        </table>
                    </form>
                    <br />
                </div>
            </div>
        </div>
    );
};

export default AdminUser;
