import './App.scss';
import Navbar from './Components/Navbar'
import HeaderLogos from './Components/HeaderLogos'
import NewArrivals from './Components/NewArrivals'
import faceimg from  './img/FaceImg.png'
import PayDay from './Components/PayDay'
import YoungsFavourite from './Components/YoungsFavourite'
import { Container, createTheme, ThemeProvider } from '@mui/material';
import Voucher from './Components/Voucher'
import Email from './Components/Email'
import Footer from './Components/Footer'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      smd: 700,
      md: 900,
      slg: 1000,
      lg: 1200,
      xl: 1536,
      xxl: 1720,
      xxx: 1920,
    },
  },
});


function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container maxWidth="xxl">
          <Navbar></Navbar>
          <img className="header-image" src={faceimg} alt="faceimg"></img>
          </Container>
        <HeaderLogos></HeaderLogos>
        <NewArrivals></NewArrivals>
        <PayDay></PayDay>
        <YoungsFavourite></YoungsFavourite>
        <Voucher></Voucher>
        <Email></Email>
        <Footer></Footer>
      </ThemeProvider>
    </div>
  );
}

export default App;
