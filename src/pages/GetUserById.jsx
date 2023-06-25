import {Box, Button, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {Card} from "antd";
import {GetUserByIdAPI} from "../api/methods";

const GetUserById = () => {

    const [state, setState] = useState ("" );
    const [userID,setUserId] = useState("" );

    const getUserIdRequest = async () => {
        try {
            const user = await GetUserByIdAPI(userID);
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
                <Card size="small" title={state.username} extra={<a href="src/pages/GetUserById#">More</a>} style={{ width: 300 }}>
                    <p>Age is {state.age}</p>
                    <p>ID is {state.id}</p>
                </Card>
            </Box>

        </Box>
    )
}

export default GetUserById;