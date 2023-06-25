import {Box, Button, TextField} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";

const Delete = () => {

    const [userID,setUserID] = useState("");

    let DeleteRequest = () => {
        axios.delete("http://localhost:5001/api/user/delete",{
            data: {
                id:userID
            }
        })
            .then(res => {
                console.log(res)
                setUserID("");
            })
            .catch(e => {console.log(e)})
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

export default Delete;