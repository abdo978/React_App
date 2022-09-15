import { Box, Typography } from "@mui/material";
import { list } from "../ProList";
import { useParams } from "react-router-dom";
import { Container } from "@mui/system";

function ProductD() {

    const {id} = useParams();
    const prodInfo = list.filter(item => item.id == id)

    return ( 
        <Container>
            <Box sx={{width : "60%"}}>

                <Typography variant="h3" m="20px 0" >{prodInfo[0].title}</Typography>

                <img src={prodInfo[0].imgUrl} alt={prodInfo[0].title} style={{width: "100%", m : "20px 0"}} />

                <Typography variant="p" component="p" m="20px 0">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam nemo velit doloremque ad nam mollitia vero    explicabo totam recusandae? Quas molestias, officiis eum voluptate consequuntur animi quos blanditiis nemo. Earum  ipsum itaque voluptate explicabo commodi dicta, quaerat vitae eaque non doloribus iste id voluptatem deserunt    officiis totam aliquam temporibus unde cupiditate esse rem laboriosam porro labore ipsa? Quidem inventore  exercitationem hic culpa corporis veritatis incidunt in enim similique neque ut architecto fugiat, totam commodi     illum debitis saepe! Quae corporis laboriosam beatae repellat odio a dolorum quibusdam officiis! Odit labore et     repellat corporis laborum, similique assumenda eveniet ratione voluptatibus, ea ab nobis eum. Facere suscipit   perspiciatis voluptatibus officiis voluptate tempora. Harum ipsum tenetur natus minus, maiores repellat aliquid   similique alias maxime totam atque libero voluptate praesentium, reiciendis neque aperiam tempora accusamus?  Doloribus dolores ipsa veritatis eius assumenda corporis itaque minus neque illum expedita fugiat voluptates     quibusdam non officia praesentium aliquam eaque facere voluptatibus iusto repellendus labore, pariatur quas error   odit. Perferendis, inventore animi! Dicta officiis iste rerum fugiat, atque maiores. Aspernatur doloribus non     repellat necessitatibus quia eum hic autem neque, voluptas quam id quas facere blanditiis aperiam, minus    excepturi! Eum veritatis quas quia ea nihil eius, enim sed impedit ipsum illo!
                </Typography>

            </Box>
            
        </Container>
     );
}

export default ProductD;