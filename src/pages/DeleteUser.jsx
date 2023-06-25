import {Box, Button, TextField} from "@mui/material";
import { useState} from "react";
import {DeleteUserByIdAPI} from "../api/methods";

const DeleteUser = () => {
    const [userID,setUserID] = useState("");

    const DeleteRequest = () => {
        DeleteUserByIdAPI(userID);
        setUserID("");
    }

    return(
        <Box>
            <Box>
                Delete use by ID
            </Box>
            <Box sx={{
                marginTop:'30px',
                marginBottom:"30px"
            }}>
                <TextField value={userID} onChange={e => {setUserID(e.target.value)}} id="filled-basic" label="ID user:" variant="filled" />
            </Box>
            <Box>
                <Button onClick={DeleteRequest} variant="contained">click</Button>
            </Box>
        </Box>
    )
}

export default DeleteUser;