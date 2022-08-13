import './HeaderLogos.scss'
import logo1 from '../img/logo1.png'
import logo2 from '../img/logo2.png'
import logo3 from '../img/logo3.png'
import logo4 from '../img/logo4.png'
import logo5 from '../img/logo5.png'
import logo6 from '../img/logo6.png'
import { Container, Grid } from '@mui/material';


function HeaderLogos()
{

    return (
        <div>
            <div className="header-logosContainer">
                <Container maxWidth="xxl">
                    <div className="header-logos">
                        <Grid container sx={{display: 'flex', justifyContent:'space-between', flexWrap: 'wrap', alignItems: 'center'}}>

                            <Grid item><img src={logo1} alt="logo1"></img></Grid>
                            <Grid item><img src={logo2} alt="logo2"></img></Grid>
                            <Grid item><img src={logo3} alt="logo3"></img></Grid>
                            <Grid item><img src={logo4} alt="logo4"></img></Grid>
                            <Grid item><img src={logo5} alt="logo5"></img></Grid>
                            <Grid item><img src={logo6} alt="logo6"></img></Grid>
                            
                        </Grid>
                    </div>
                    
                </Container>
                
            </div>
        </div>
    )
}

export default HeaderLogos