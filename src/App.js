import {Box} from "@mui/material";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Delete from "./pages/DeleteUser/Delete";
import Header from "./Header/Header";
import Home from "./pages/Home/Home";
import GetUserById from "./pages/GetUserById/GetUserById";
import GetUsers from "./pages/GetUsers/GetUsers";
import GetCounter from "./pages/GetCounter/GetCounter";
import CreateUsers from "./pages/CreateUser/CreateUsers";



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
                    <Route path="/delete" element={<Delete/>}/>
                </Routes>
            </BrowserRouter>
        </Box>
      </Box>

  );
}

export default App;
