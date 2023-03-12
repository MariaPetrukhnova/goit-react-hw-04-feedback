import React from "react";
import css from "./Notification.module.css";


const Notification = ({ message }) => { 
    return(
        <div className={css.notificationNoFeedback}>
            <p className={css.notification_msg}>{message}</p>
        </div>
    )
}

export default Notification;