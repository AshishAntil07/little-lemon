export default function Header(){
  return(
    <nav>
      <img src='../pictures/logo.png' />
      <ul>
        {
          ['Home','About','Order','Testimonials'].map(str => {
            return(
              <li>
                <a href={`#${str.toLowerCase()}`}>{str}</a>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}