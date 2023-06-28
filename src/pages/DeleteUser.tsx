import React , { useState} from "react";
import {Box, Button, TextField} from "@mui/material";
import {deleteUserByIdAPI} from "../api/methods";

const DeleteUser = ()  => {
    const [userID ,setUserID] = useState<string>();

    const DeleteRequest = () => {

        const id : number = Number(userID);

        if(isNaN(id)){
            alert("Invalid UserID");
            setUserID('');
            return;
        }

        deleteUserByIdAPI(Number(userID));
        alert('user was deleted')
        setUserID('');
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