import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {method, UserType} from "../api/methods";
import CardUser from "./CardUser";

const GetUserById = () => {
    const [state, setState] = useState<UserType>({username: "", id: 0, age: 0});
    const [userID, setUserId] = useState<number | null>(null);

    const getUserIdRequest = async () => {
        try {
            const user = await method.getUserByIdAPI(userID);
            setState(user.user);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUserIdRequest();
    }, []);

    return(
        <Box>
            <Typography variant="h3">Get User By Id</Typography>

            <Box sx={{margin:"20px 0"}}>
                <TextField value={userID} onChange={e => setUserId(Number(e.target.value))} id="filled-basic" label="ID user:" variant="filled" />
            </Box>

            <Box>
                <Button onClick={getUserIdRequest} variant="contained">click</Button>
            </Box>

            {state !== null
                ?
                (
                    <Box sx={{margin:"20px 0"}}>
                        <CardUser
                            username={state?.username}
                            age={state?.age}
                            id={state?.id}
                        />
                    </Box>
                )
                :
                (
                    <Box sx={{marginTop:"50px"}}>
                       <Typography variant="h5">User is not found</Typography>
                    </Box>
                )
            }
        </Box>
    )
}

export default GetUserById;