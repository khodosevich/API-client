import React, { useCallback, useMemo } from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { method } from "../api/methods";

const GetCounter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [isUpdate, setIsUpdate] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            try {
                const count = await method.getCounterAPI();
    
                setCounter(count.requestCount);
    
            } catch (error){
                console.log(error);
                throw error;
            }
        })()

        return () => {
            console.log("i am unmount")
        }
        
    }, [isUpdate]);

    // useMemo(() => {}, [])
    // useCallback(() => {}, [])
    // useContext();
    // memo()

    return(
        <Box>
            <Typography>Counter</Typography>

            <Box sx={{
                margin:"20px 0"
            }}>
                <Button onClick={() => setIsUpdate((prev) => !prev)} variant="contained">click</Button>
            </Box>

            <Box>
                Counter size is {counter}
            </Box>
        </Box>
    )
}

export default GetCounter;