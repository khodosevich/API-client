import {Box, Button} from "@mui/material";
import axios from "axios";
import {useEffect, useState} from "react";

const GetCounter = () => {

    const [counter,setCounter] = useState();

    useEffect(() => {
        GetCountRequest();
    }, []);

    let GetCountRequest = () => {
        axios.get("http://localhost:5001/api/getRequestsCount")
            .then(res => {
                setCounter(res.data.requestCount)
                console.log(res)
            })
            .catch(e => {console.log(e)})
    }

    return(
        <Box>
            <Box>
                Counter
            </Box>
            <Box sx={{
                margin:"20px 0"
            }}>
                <Button onClick={GetCountRequest} variant="contained">click</Button>
            </Box>
            <Box>
                Counter size is {counter}
            </Box>
        </Box>
    )

}

export default GetCounter;