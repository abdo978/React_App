import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { list } from "../ProList";

function SearchPage() {

    const {searchTerm} = useParams();

    const searchedProds = list.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return ( 
        <Container sx={{p : "50px 40px",minHeight : "calc(100vh - 300px)"}}>

            <h1 id="zft">{searchedProds.length === 0 ? "Searching for : " + searchTerm + " ...No items Found" : "Searching for : " + searchTerm }</h1>

                    <Grid container spacing={4}  mt={3} mb={3} >
                        
                        {searchedProds.length === 0 ? null :
                         
                         searchedProds.map(item => 
                                <Grid item xs={12} sm={6} md={4} lg={3} >
                                    <ProductCard key={item.id} id={item.id} imageUrl={item.imgUrl} title={item.title} desc= {item.description} />
                                </Grid>)
                        }

                    </Grid>

        </Container>
     );
}

export default SearchPage;