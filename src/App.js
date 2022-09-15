
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductD from "./pages/ProductD";
import Products from "./pages/Products";
import SearchPage from "./pages/SearchPage";
import Home from "./pages/Home";
import { Box, Button, IconButton, Paper,styled, Typography } from "@mui/material";
import { Email, Facebook, Instagram, Send } from "@mui/icons-material";
import { Stack } from "@mui/system";
import SearchBar from "./components/searchbar";
import LogoClick from "./components/logoClick";


function App() {

    const Botona = styled(Button)({
        width : "200px",
        borderRadius : "20px",
        color : "white"
    });

    return ( 
           <BrowserRouter>

               <Box sx={{ position: "relative" }}>
                    <Box width={"100%"} sx={{
                    backgroundColor : "#c0392b",
                    height :"80px",
                    p: {xs : "0 5px" ,sm : "0 20px"},
                    display : "flex",
                    justifyContent: "space-between",
                    alignItems : "center"
                }}>
                    {/* logo */}
                    <LogoClick />

                    {/* searchbox */}
                    <SearchBar />

                    {/* contact Button */}

                    <Botona sx={{width:{ xs: "60px",sm : "100px", md : "150px", ml : "7px" }, fontSize: {xs: "10px" ,md : "14px" } }} color="third" variant="contained">Contact</Botona>

                    </Box>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductD />} />
                    <Route path="/searched/q=:searchTerm" element={<SearchPage />} />
                </Routes>

                    <Stack position={"relative"} direction={{lg : "row"}} alignItems="center" justifyContent="space-between" spacing={2} p="40px" sx={{position:"relative",bottom:0, bgcolor:"#c0392b", color : "white" }} >
                    <Box sx={{width : { xs : "90%" , sm : "70%" ,md : "50%" , lg :"30%"}, m : "20px 0"}}>
                        <Typography mb="15px" variant="h4">About us</Typography>
                        <Typography variant="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem obcaecati eos nam mollitia vero sint voluptas totam incidunt deleniti.</Typography>
                    </Box>
                    <Stack sx={{width : { xs : "90%" , sm : "70%" ,md : "50%" , lg :"30%"}, m : "20px 0"}}>
                        <Typography mb="15px" variant="h4">Contact us</Typography>
                        <Paper mt="10px" sx={{p : 1, borderRadius : "20px", display : "flex" , alignItems:"center" }}> <input type="text" placeholder="Email" style={{ width:"100%" ,outline: "none", border:"none", padding : "0 10px"}} /> </Paper>
                         <Botona sx={{width:"100%", marginTop:"20px" }} color="third" variant="contained" endIcon={ <Send /> } >Send</Botona>
                    </Stack>
                    <Stack sx={{ m : "20px 0", width : { xs : "90%" , sm : "70%" ,md : "50%" , lg :"20%"} }}>
                        <Typography mb="15px" variant="h4">Contact us</Typography>
                        <Box>
                           <IconButton>
                              <Facebook sx={{color:"#DF9A8C"}} />
                           </IconButton>
                           Facebook
                        </Box>
                        <Box>
                           <IconButton>
                              <Instagram sx={{color:"#DF9A8C"}} />
                           </IconButton>
                           Instagram
                        </Box>
                        <Box>
                           <IconButton>
                              <Email sx={{color:"#DF9A8C"}} />
                           </IconButton>
                           Gmail
                        </Box>
                    </Stack>
                    </Stack>
               </Box>

           </BrowserRouter>
    );
}

export default App;