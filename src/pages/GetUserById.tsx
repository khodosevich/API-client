import React from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {getUserByIdAPI, UserType} from "../api/methods";
import CardUser from "./CardUser";

const GetUserById = () => {

    const [state, setState] = useState<UserType>({username : "", id : 0 , age : 0});
    const [userID,setUserId] = useState<string>("" );

    const getUserIdRequest = async () => {

        const id : number = Number(userID);

        if(isNaN(id)){
            alert("Invalid input");
            setUserId('');
            return;
        }

        try {
            const user = await getUserByIdAPI(id);
            setState(user.user);
            setUserId('');
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUserIdRequest();
    }, []);

    return(
        <Box>
            <Box>
                Get User By Id
            </Box>
            <Box sx={{margin:"20px 0"}}>
                <TextField value={userID} onChange={e => setUserId(e.target.value)} id="filled-basic" label="ID user:" variant="filled" />
            </Box>
            <Box>
                <Button onClick={getUserIdRequest} variant="contained">click</Button>
            </Box>
            <Box sx={{margin:"20px 0"}}>
                 <CardUser {...state} />
            </Box>
        </Box>
    )
}

export default GetUserById;