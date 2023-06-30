import React, { useCallback, useMemo } from 'react';
import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { method } from "../api/methods";

const GetCounter = () => {
    const [counter, setCounter] = useState<number>(0);
    const [isUpdate, setIsUpdate] = useState<boolean>(false)
    const [count,setCount] = useState<number>(0);

    useEffect(() => {
        (async () => {
            try {
                const count = await method.getCounterAPI();
                setCounter(count.requestCount);
                console.log("get counter");
            } catch (error){
                console.log(error);
                throw error;
            }
        })()
    }, [isUpdate]);

    // useMemo(() => {}, [])
    // useCallback(() => {}, [])
    // useContext();
    // memo()

    return(
        <Box>
            <Typography variant="h3" sx={{marginTop:"50px"}}>Counter of request to API: </Typography>

            <Box sx={{
                margin:"20px 0"
            }}>
                <Button onClick={() => setIsUpdate((prev) => !prev)} variant="contained">click</Button>
            </Box>

            <Box>
                Counter size is {counter}
            </Box>

            <Box sx={{display: "flex" ,flexDirection: "column", alignItems: "center" }}>
                <Box sx={{marginTop:"50px"}}>
                    <Typography variant="h3">Own clicker : </Typography>
                </Box>

                <Box sx={{display: "flex", gap: "20px"}}>
                    <Box sx={{
                        margin:"20px 0"
                    }}>
                        <Button onClick={() => setCount(count + 1 )} variant="contained">+1</Button>
                    </Box>

                    <Box sx={{
                        margin:"20px 0"
                    }}>
                        <Button onClick={() => setCount(count - 1 )} variant="contained">-1</Button>
                    </Box>
                </Box>

                <Box>
                    Counter size is {count}
                </Box>
            </Box>


        </Box>
    )
}

export default GetCounter;