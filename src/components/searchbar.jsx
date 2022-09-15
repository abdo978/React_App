import { Search } from "@mui/icons-material";
import { IconButton, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {

    const [searchTerm,setSearchTerm] = useState("");
    const nav = useNavigate();



    return ( 
        
        <Paper component='form' onSubmit={() => nav(`/searched/q=${searchTerm}`)} sx={{borderRadius:"20px", overflow:"hidden",display:"flex", alignItems:"center", width:{ xs : "30%" , sm : "35%"  } , height:"40px", pl: "20px"  }}>
        <input placeholder="Search..." type="text" value={searchTerm} style={{
            width:"90%" , border:"none", outline:"none", color:"#2c3e50"
         }} onChange={(e) => setSearchTerm(e.target.value)} />
        <IconButton onClick={() => nav(`/searched/q=${searchTerm}`)}>
            <Search />
        </IconButton>
        </Paper>
     );
}

export default SearchBar;