import React , { useState} from "react";
import {Box, Button, TextField, Typography} from "@mui/material";
import {method} from "../api/methods";

const DeleteUser = () => {
    const [userID, setUserID] = useState<number | null>(null);

    const deleteRequestHandle = () => {
        if(!userID){
            alert("Invalid UserID");
            return
        }

        method.deleteUserByIdAPI(userID);

        alert('user was deleted');

        setUserID(0);
    }

    return(
        <Box>
            <Typography>Delete use by ID</Typography>
            <Box sx={{
                marginTop:'30px',
                marginBottom:"30px"
            }}>
                <TextField value={userID} onChange={e => setUserID(Number(e.target.value))} id="filled-basic" label="ID user:" variant="filled" />
            </Box>

            <Box>
                <Button onClick={deleteRequestHandle} variant="contained">click</Button>
            </Box>
        </Box>
    )
}

export default DeleteUser;