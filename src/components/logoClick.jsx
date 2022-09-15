import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import logo from "../images/Kaby-Logo-white.png";

function LogoClick() {

    const nav = useNavigate();

    return ( 
        <Box sx={{width:{xs:"110px", mobile:"150px"}, cursor : "pointer"}}>
            <img onClick={() => nav("/")} src={logo} alt="Logo" style={{
                width : "100%"
            }} ></img>
        </Box>
     );
}

export default LogoClick;