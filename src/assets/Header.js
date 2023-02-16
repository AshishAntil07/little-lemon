export default function Header(){
  return(
    <nav>
      <section className='navLogo'>
        <img src='./pictures/navLogo.png' />
      </section>
      <ul>
        {
          ['Home','About','Menu','Reservations', 'Order Online', 'Login'].map((str, index) => {
            return(
              <li key={index}>
                <a href={str==='Reservations'?'/book':str==='Home'?'/':`#${str.toLowerCase()}`}>{str}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}