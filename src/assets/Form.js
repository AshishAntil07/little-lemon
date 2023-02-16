export default function(){
  return(
    <section className='form'>
      <form>
        <input type='text' />
        <input type='text' pattern="/^(\+\d{2,3}\s)?\(?\d{3}\)?[\s.-]\d{2}[\s.-]\d{3}[\s.-]\d{4}$/" />
      </form>
    </section>
  )
}