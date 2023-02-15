export default function Header(){
  return(
    <nav>
      <img src='./pictures/navLogo.png' />
      <ul>
        {
          ['Home','About','Menu','Reservations', 'Order Online', 'Login'].map((str, index) => {
            return(
              <li key={index}>
                <a href={`#${str.toLowerCase()}`}>{str}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}