export default function Footer(){
  return(
    <footer>
      <section className='fooLogo'>
        <img src='./pictures/fooLogo.png' alt='Logo' />
      </section>
      <section className='doormat'>
        <b>Doormat Navigation</b>
        <a href='/'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Menu</a>
        <a href='/book'>Reservations</a>
        <a href='#'>Order Online</a>
        <a href='#'>Login</a>
      </section>
      <section className='contact'>
        <b>Contact</b>
        <p>Address</p>
        <p>Phone no.</p>
        <p>E-mail</p>
      </section>
      <section className='socialMedia'>
        <b>Social Media Links</b>
        <p>Twitter</p>
        <p>Facebook</p>
        <p>Instagram</p>
      </section>
    </footer>
  )
}