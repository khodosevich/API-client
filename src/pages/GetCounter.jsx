import {Box, Button} from "@mui/material";
import {useEffect, useState} from "react";
import {GetCounterAPI} from "../api/methods";

const GetCounter = () => {

    const [counter,setCounter] = useState();

    const GetCountRequest = async () => {
        try{
            const count = await GetCounterAPI();
            setCounter(count.requestCount);
        }catch (error){
            console.log(error);
            throw error;
        }
    }

    useEffect(() => {
        GetCountRequest();
    }, []);

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