import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {useState} from "react";
import {UserType, method} from "../api/methods";


const CreateUsers = () => {
    const [user, setUser] = useState<UserType>({username: "" , age: 0});

    const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const createUserHandle = async () => {
        try {
            await method.createUserAPI(user);

            setUser({ username: "", age: 0 });
            
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
                    value={user.username}
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