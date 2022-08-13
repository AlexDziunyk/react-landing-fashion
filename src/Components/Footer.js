import './Footer.scss'
import { Container, Grid, Box } from '@mui/material';
import facebook from '../img/facebook.png'
import instagram from '../img/instagram.png'
import twitter from '../img/twitter.png'
import linkedin from '../img/linkedin.png'



function Footer ()
{


    return (
        <div className="footer-wrapper">
            <Container maxWidth="xxl" >
                
                <Grid spacing={3} container className="footer-cont" sx={{display: 'flex', justifyContent: 'center'}}>
                    <Grid item xs={12} smd={6} lg={3} >
                        <div>
                            <div className="footer-title">FASHION</div>
                            <div className="footer-subtitle">Complete your style with awesome clothes from us.</div>
                            <div className="footer-links">
                                <img src={facebook} alt='facebook'></img>
                                <img src={instagram} alt='instagram'></img>
                                <img src={twitter} alt='twitter'></img>
                                <img src={linkedin} alt='linkedin'></img>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} smd={6} lg={3} sx={{display: 'flex', justifyContent: {xs: 'flex-start', lg:'center'}}}>
                        <div className="footer-company">
                            <h6>Company</h6>
                            <div>About</div>
                            <div>Contact us</div>
                            <div>Support</div>
                            <div>Careers</div>

                        </div>
                    </Grid>

                    <Grid item xs={12} smd={6} lg={3} sx={{display: 'flex', justifyContent: {xs: 'flex-start', lg:'center'}}}>
                        <div className="footer-quickLink">
                            <h6>Quick Link</h6>
                            <div>Share Location</div>
                            <div>Orders Tracking</div>
                            <div>Size Guide</div>
                            <div>FAQs</div>
                        </div>
                    </Grid>

                    <Grid item xs={12} smd={6} lg={3} sx={{display: 'flex', justifyContent: {xs: 'flex-start', lg:'center'}}}>
                        <div className="footer-legal">
                            <h6>Legal</h6>
                            <div>Terms & Conditions</div>
                            <div>Privacy Policy</div>
                        </div>
                    </Grid>

                </Grid>
                
            </Container>
        </div>
    )
}

export default Footer