export default function Testimonials(){
  return(
    <section className='testimonials'>
      <header>
        <h1>Testimonials</h1>
      </header>
      <section className='blocks'>
        <section>
          <p>Rating: &#x2605;&#x2605;&#x2605;&#x2605;&#x2605; (5)</p>
          <div><img src='./pictures/userIcon.png' alt='' />Mike Smith</div>
          <article>
            Little Lemon is a very good restaurant that helped me to have a good meal.
          </article>
        </section>
        <section>
          <p>Rating: &#x2605;&#x2605;&#x2605;&#x2605;&#x2605; (5)</p>
          <div><img src='./pictures/userIcon.png' alt='' />John Doe</div>
          <article>
            The best thing that got me here was that Little Lemon restaurant serves with love.
          </article>
        </section>
        <section>
          <p>Rating: &#x2605;&#x2605;&#x2605;&#x2605;&#x2606; (4)</p>
          <div><img src='./pictures/userIcon.png' alt='' />Sofia Maxwell</div>
          <article>
            Good restaurant, the meals tasted very much delicious.
          </article>
        </section>
      </section>
    </section>
  )
}