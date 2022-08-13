import './Voucher.scss'
import { Container, Grid } from '@mui/material';
import mobileApp from '../img/mobileApp.png'
import googlePlay from '../img/googlePlay.png'
import appStore from '../img/appStore.png'
import details from '../img/details.png'


function Voucher()
{

    return(
        <Container maxWidth='xxl'>
            <Grid container sx={{marginTop: '13.75em'}}>
                <Grid item xs={12} lg={4} sx={{display: 'flex', alignItems: 'center'}}>
                    <div className="voucher-textBlock">
                        <div className="voucher-title">DOWNLOAD APP & GET THE VOUCHER!</div>
                        <div className="voucher-subtitle">Get 30% off for first transaction using 
                        Rondovision mobile app for now.</div>
                        <div className="voucher-apps">
                            <img src={appStore} alt='appstore'></img>
                            <img src={googlePlay} alt='googleplay'></img>
                        </div>
                    </div>
                </Grid>
                <Grid item  xs={12} lg={7} sx={{display: 'flex', justifyContent:{lg: 'flex-end', xs:'center'}}}>
                    <div className="voucher-imgBlock">
                        <img className="voucher-imgBack" src={details} alt='details'></img>
                        <img className="voucher-imgApp" src={mobileApp} alt='img'></img>
                    </div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Voucher