import React from 'react';
import {Card} from "antd";
import {UserType} from "../api/methods";

const CardUser  = ( props: UserType  ) =>{

    return(
        <Card key={props.id} size="small" title={props.username} extra={<a href="src/pages/GetUsers#GetUsers.tsx">More</a>} style={{ width: 300 }}>
            <p>Age is {props.age}</p>
            <p>ID is {props.id}</p>
        </Card>
    )
}
export default CardUser;