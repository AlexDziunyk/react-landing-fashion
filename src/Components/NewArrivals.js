import './NewArrivals.scss'
import { Container, Box, Grid } from '@mui/material';
import Card from './Card'
import cardimg1 from '../img/cardimg1.png'
import cardimg2 from '../img/cardimg2.png'
import cardimg3 from '../img/cardimg3.png'
import figure1 from '../img/figure1.png'





const arr = [
    {
        
        title: 'Hoodies & Sweetshirt',
        subtitle: 'Explore Now!',
        img: cardimg1,
    },
    {
        
        title: 'Coats & Parkas',
        subtitle: 'Explore Now!',
        img: cardimg2,
    },
    {
        
        title: 'Tees & T-Shirt',
        subtitle: 'Explore Now!',
        img: cardimg3,
        
    },
    
]


function NewArrivals()
{

    return (
        <div>
            <Container maxWidth="xxl">
                <div className="newArrivals-title">NEW ARRIVALS</div>
                <img className="newArrivals-figure1" src={figure1} alt="figure"></img>
                
                
                <Grid container sx={{display: 'flex', justifyContent: {xs: 'center', slg:'space-around'}}}>
                    {arr.map(item =>
                     <Grid key={item.title} sx={{display: 'flex', justifyContent: 'center'}} item  >
                        <Card  title={item.title} subtitle={item.subtitle} img={item.img}></Card>
                    </Grid>
                    )}
                    
                </Grid>
                
            </Container>
        </div>
    )
}

export default NewArrivals