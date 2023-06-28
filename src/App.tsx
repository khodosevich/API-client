import React from 'react';
import {Box} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import DeleteUser from "./pages/DeleteUser";
import Header from "./header/Header";
import Home from "./pages/Home";
import GetUserById from "./pages/GetUserById";
import GetUsers from "./pages/GetUsers";
import GetCounter from "./pages/GetCounter";
import CreateUsers from "./pages/CreateUsers";

function App() {
  return (
      <Box>
        <Box
            sx={{
                width:"1200px",
                margin:"0 auto"
            }}
        >
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/getUsers" element={<GetUsers/>}/>
                    <Route path="/getUserById" element={<GetUserById/>}/>
                    <Route path="/getCounter" element={<GetCounter/>}/>
                    <Route path="/createUser" element={<CreateUsers/>}/>
                    <Route path="/delete" element={<DeleteUser/>}/>
                </Routes>
            </BrowserRouter>
        </Box>
      </Box>
  );
}

export default App;
