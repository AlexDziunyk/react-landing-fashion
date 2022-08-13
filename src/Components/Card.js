import './Card.scss'
import arrow from '../img/arrow.png'
import { Grid , Box} from '@mui/material';


function Card(props)
{

    const {title, subtitle, img} = props

    return(
        <div className="card-cont">
            
            <img className="card-image" src={img} alt="card"></img>
            <Grid container >
                <Grid item xs={8} >
                    <div>
                        <div className="card-title">{title}</div>
                        <div className="card-subtitle">{subtitle}</div>
                    </div>
                </Grid>
  
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end'}}>
                    <div className="card-arrow">
                        <img src={arrow}></img>
                    </div>
                </Grid>
            
            </Grid> 
            
            
            
        </div>
    )
}

export default Card