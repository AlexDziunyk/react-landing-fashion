import girl from '../img/girl.png'
import './PayDay.scss'
import { Container, Box, Grid } from '@mui/material';


function PayDay()
{

    return (
        
        <Box mt={10} sx={{display: 'flex', justifyContent: 'center'}}>
            <img className="payday-img" src={girl} alt="girl"></img>
            
                <div className="payday-textCont" >
                    <Box sx={{ lineHeight: {xs: '6.5vw', xxx: '130px'}}} className="payday-title">PAYDAY SALE NOW</Box>
                    <div className="payday-white"></div>
                    <div className="payday-subtitle">Spend minimal $100 get 30% off
                    voucher code for your next purchase</div>
                    <div className="payday-date">1 June - 10 June 2021</div>
                    <div className="payday-terms">*Terms & Conditions apply</div>
                    <button className="payday-button">SHOP NOW</button>
                </div>
            
            
        </Box>
    
    )
}

export default PayDay