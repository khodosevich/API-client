import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";
import { method } from "../api/methods";


const CreateUsers = () => {

    const [user,setUser] = useState<{name: string, age: string}>({name:"" , age:""});

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;

        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const createUserHandle = async () => {
        try {
            await method.createUserAPI(user);
            setUser({ name: "", age: "" });
            
        } catch (error){
            console.log(error);
            throw error;
        }
    }

    return (
        <Box>
            <Typography variant='h2'>Create Users</Typography>

            <Box sx={{ marginTop: "20px" }}>
                <TextField
                    name="name"
                    label="Name"
                    value={user.name}
                    onChange={handleInputChange}
                />
            </Box>

            <Box sx={{ marginTop: "20px" }}>
                <TextField
                    name="age"
                    label="Age"
                    value={user.age}
                    onChange={handleInputChange}
                />
            </Box>

            <Box sx={{ marginTop: "20px" }}>
                <Button onClick={createUserHandle} variant="contained">
                    Create User
                </Button>
            </Box>
        </Box>
    );
};

export default CreateUsers;