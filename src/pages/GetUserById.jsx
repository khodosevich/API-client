import {Box, Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {getUserByIdAPI} from "../api/methods";
import CardUser from "./CardUser";

const GetUserById = () => {

    const [state, setState] = useState ("" );
    const [userID,setUserId] = useState("" );

    const getUserIdRequest = async () => {
        try {
            const user = await getUserByIdAPI(userID);
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
            <Box>
                Get User By Id
            </Box>
            <Box sx={{margin:"20px 0"}}>
                <TextField onChange={e => setUserId(e.target.value)} id="filled-basic" label="ID user:" variant="filled" />
            </Box>
            <Box>
                <Button onClick={getUserIdRequest} variant="contained">click</Button>
            </Box>
            <Box sx={{margin:"20px 0"}}>
                 <CardUser state={state} />
            </Box>
        </Box>
    )
}

export default GetUserById;