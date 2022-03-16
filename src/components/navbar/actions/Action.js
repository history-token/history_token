import React from "react";
import './action.css';
import { ButtonOutlined, ButtonContained} from "../../button/Button"

function Action(){
    return <div className="action">
        <ButtonOutlined label="Login"/>
        <ButtonContained label="Sign up"/>
       
    </div>;
}

export default Action;