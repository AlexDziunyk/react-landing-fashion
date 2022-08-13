import './YoungsFavourite.scss'
import { Container, Grid } from '@mui/material';
import figure1 from '../img/figure1.png'
import Card from './Card'
import cardimg4 from '../img/cardimg4.png'
import cardimg5 from '../img/cardimg5.png'





function YoungsFavourite()
{


    const arr = [
        {
            
            title: 'Trending on instagram',
            subtitle: 'Explore Now!',
            img: cardimg4,
        },
        {
            
            title: 'All Under $40',
            subtitle: 'Explore Now!',
            img: cardimg5,
        },
        
        
    ]

    return (
        <Container maxWidth='xxl'>
            <div className='young-title'>Young’s Favourite</div>
            <img className="young-figure1" src={figure1} alt="figure"></img>
            <Grid container sx={{display: 'flex', justifyContent: {xs: 'center', xxl:'space-between'}}}>
                    {arr.map(item =>
                     <Grid key={item.title} sx={{display: 'flex', justifyContent: 'center'}} item  >
                        <Card  title={item.title} subtitle={item.subtitle} img={item.img}></Card>
                    </Grid>
                    )}
                    
                </Grid>
        </Container>
    )
}

export default YoungsFavourite