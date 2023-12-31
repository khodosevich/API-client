import {Box, Button, Typography} from "@mui/material";
import React , {useEffect, useState} from "react";
import {method, UserType} from "../api/methods";
import CardUser from "./CardUser";

const GetUsers = () => {
    const [users, setUsers] = useState<UserType[]>([]);

    const getUsersRequest = async ()  => {
        try {
            const data = await method.getUsersAPI()

            setUsers(data);
        } catch (error){
            console.log(error)

            throw error;
        }
    }

    useEffect(() => {
        getUsersRequest();
    }, []);

    return(
        <Box>
            <Typography variant="h3">
                All our users:
            </Typography>

            {/*<Box sx={{*/}
            {/*    marginTop:"40px"*/}
            {/*}}>*/}
            {/*    <Button onClick={getUsersRequest} variant="contained">click</Button>*/}
            {/*</Box>*/}

            <Box
                sx={{
                    background: "grey",
                    padding: "20px",
                    marginTop: "20px",
                    borderRadius: "20px"
                }}
            >
                <Box sx={{
                    display:"flex",
                    flexWrap:"wrap",
                    gap:"10px",
                    justifyContent:"center"
                }}>
                    {users.map(x => <CardUser id={x.id} username={x.username} age={x.age} />)}
                </Box>
            </Box>
        </Box>
    )
}

export default GetUsers;