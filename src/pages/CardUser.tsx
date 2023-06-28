import React from 'react';
import {Card} from "antd";
import {UserType} from "../api/methods";
import { Typography } from '@mui/material';

const CardUser: React.FC<UserType>  = ({username, age, id}) =>{
    return(
        <Card key={id} size="small" title={username} extra={<a href="src/pages/GetUsers#GetUsers.tsx">More</a>} style={{ width: 300 }}>
            <Typography>Age is {age}</Typography>
            <Typography>ID is {id}</Typography>
        </Card>
    )
}
export default CardUser;