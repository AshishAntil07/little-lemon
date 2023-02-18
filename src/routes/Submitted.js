import Header from '../assets/Header';
import Footer from '../assets/Footer';

export default function Submitted(){
  return(
    <>
      <Header />
      <header style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><h1>Your form has been Submitted!</h1></header>
      <Footer />
    </>
  )
}