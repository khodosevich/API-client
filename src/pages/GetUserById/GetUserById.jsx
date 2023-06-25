import {Box, Button, TextField} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";
import {Card} from "antd";

const GetUserById = (props) => {

    const [state,setState] = useState({});
    const [userID,setUserId] = useState({});

    useEffect(() => {
        getUserIdRequest();
    }, []);

    let getUserIdRequest = () => {
        axios.get(`http://localhost:5001/api/user/getUserById?id=${userID}`)
            .then(res => {
                setState(res.data.user)
                console.log(res)
            })
            .catch(e => {console.log(e)})
    }

    let setValue = (e) => {
        console.log(e.target.value)
        setUserId(e.target.value);
    }

    return(
        <Box>

            <Box>
                Get User By Id
            </Box>
            <Box sx={{margin:"20px 0"}}>
                <TextField onChange={e => setValue(e)} id="filled-basic" label="ID user:" variant="filled" />
            </Box>
            <Box>
                <Button onClick={getUserIdRequest} variant="contained">click</Button>
            </Box>

            <Box sx={{margin:"20px 0"}}>
                <Card size="small" title={state.username} extra={<a href="#">More</a>} style={{ width: 300 }}>
                    <p>Age is {state.age}</p>
                    <p>ID is {state.id}</p>
                </Card>
            </Box>

        </Box>
    )
}

export default GetUserById;