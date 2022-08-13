import logo from '../img/logo.png'
import { Box , Grid, Typography} from '@mui/material';
import './Navbar.scss'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import {useState, useEffect} from 'react'

function Navbar()
{

    const [menu, setMenu] = useState(false)

    function handleMenu (){
        setMenu(!menu)
    }


    

    return (
        <Box mt={5}>
            <Grid container>
                <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: {xs: 'center', slg: 'flex-start'} }} item xs={12} slg={3}>
                    <div>
                        <img src={logo} alt="logo"></img>
                        <div className="navbar-logoTitle">FASHION</div>
                    </div>
                </Grid>

                <Grid item xs={12} slg={9}>
                    <Box sx={{display: {xs: 'flex', smd: 'none'}, justifyContent: 'center'}}>
                        {menu ? <ImCross onClick={handleMenu} size={30}></ImCross>
                        : <GiHamburgerMenu onClick={handleMenu} size={40}></GiHamburgerMenu>}
                        
                    </Box>

                    <Box sx={{display: {xs: menu ? 'flex' : 'none', smd:'flex'}, flexDirection: {xs: 'column', smd:'row'}, alignContent: 'space-between', justifyContent: 'space-around', alignItems: 'center' }} className="navbar-linksSection">
                        <div>CATALOGUE</div>
                        <div>FASHION</div>
                        <div>FAVOURITE</div>
                        <div>LIFESTYLE</div>  
                        <button className="navbar-button">SIGN UP</button>
                        
                    
                    </Box>
                </Grid>



            </Grid>
        </Box>
    )

}

export default Navbar