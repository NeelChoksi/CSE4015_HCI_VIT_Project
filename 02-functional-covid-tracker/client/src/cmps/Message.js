import React from "react";


const getStyle = (props)=>{
    let baseClass = "alert";
    if(props.message.msgError){
        baseClass = baseClass + " alter-danger";
    }else{
        baseClass = baseClass + " alter-primary";
    }
    return baseClass + " text-center"

}

const Message = (props)=>{
    return(
        <div className={getStyle(props)} role="alert">
            {props.message.msgBody}
        </div>
    )
}

export default Message;