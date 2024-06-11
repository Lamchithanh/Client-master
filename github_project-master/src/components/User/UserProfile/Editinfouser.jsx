import React from "react";
import "./Editinfouser.css";
const Editinfouser = () => {
    return (
        <div className=" container">
            <div className="head-edituser">
                <div className="editsuer-name">
                    <div className="" style={{ fontSize: "16px" }}>
                        {" "}
                        <h3>Chí Thành</h3>
                    </div>
                    <button>Nâng cấp vip</button>{" "}
                    <span>Quyền lợi thành viên</span>
                    
                </div>
                <div className="edituser-loyalty-point">
                    <div>
                        <span>Loyalty Points</span>
                        <div className="value-edituser-loyalty">50</div>
                    </div>
                    <div>
                        <span>T&TPay</span>
                        <div className="edituser-loyalty-Ttpay">0</div>
                    </div>
                </div>
            </div>
            <main className="main-edituser ">
                
            </main>
        </div>
    );
};

export default Editinfouser;
