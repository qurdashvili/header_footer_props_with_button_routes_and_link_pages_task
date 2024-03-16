import React, {Fragment} from "react";


function Notification(props){
    return(
        <Fragment>
            {
                window.alert(props.name )
            }
        </Fragment>
    )
}

export default Notification;