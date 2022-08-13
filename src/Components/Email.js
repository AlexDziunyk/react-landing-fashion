import './Email.scss'
import { Container, Box } from '@mui/material';

function Email()
{


    return (
        <div className="email-wrapper">
            <Container maxWidth="xxl">
                <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems:'center'}}>
                    <div className="email-title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</div>
                    <div className="email-subtitle">Type your email down below and be young wild generation</div>
                    
                    <Box sx={{display: {xs:'flex', smd: 'block'}, flexDirection :'column', alignItems: 'center'}} className="email-form">
                        <input type="text" placeholder="Add your email here" className="email-input"></input>
                        <button type="submit" className="email-button">SEND</button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default Email