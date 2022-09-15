import { Box, Button, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import ProductCard from "../components/ProductCard";
import banner from "../images/bgBanner.jpg";
import { list } from "../ProList";


function Home() {

    return ( 
        <Box>
            {/* banner */}
            <Box sx={{
                backgroundImage : `url(${banner})`,
                p : "60px 0",
                position : "relative",
                width : "100%",
                backgroundRepeat : "no-repeat",
                backgroundSize : "100%",
                backgroundPosition: "center center",
                display : "flex",
                justifyContent : "center",
                alignItems : "center"
            }}>
                 <Box sx={{
                        position : "relative",
                        width : "40%",
                        borderRadius : "20px",
                        display : "flex",
                        flexDirection : "column",
                        justifyContent : "center",
                        alignItems : "center",
                        bgcolor : "white",
                        textAlign : "center",
                        p : 4,
                        boxShadow : "0px 0px #c0392b",
                        transition : "all 0.2s linear",
                        "&:hover" : {
                            boxShadow : "-9px -10px #c0392b",
                        }
                    }}>
                    <Typography variant="h6" mb={2}>Our Store</Typography>
                    <Typography variant="p" mb={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt autem obcaecati eos nam mollitia vero sint voluptas totam incidunt deleniti.Lorem ipsum dolor sit amet consectetur adipisicing elit.</Typography>
                    <Stack direction={"row"}>
                        <Button variant="contained" color="primary" sx={{borderRadius : "20px", mr : "10px"}}>Our Products</Button>
                        <Button variant="outlined" color="primary" sx={{borderRadius : "20px"}}>Contact</Button>
                    </Stack>
                 </Box>
            </Box>

            {/* prods */}
            <Container sx={{p : "50px 40px"}}>

                <Typography variant="h3">Most Sold</Typography>

                    <Grid container spacing={4}  mt={3} mb={3} >
                        
                        {list.map(item => 
                            <Grid item xs={12} sm={6} md={4} lg={3} >
                                <ProductCard key={item.id} id={item.id} imageUrl={item.imgUrl} title={item.title} desc={item.description} />
                            </Grid>
                        )}
                    </Grid>

            </Container>

        </Box>

     );
}

export default Home;