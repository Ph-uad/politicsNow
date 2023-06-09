import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container flex">

        <section>
          <h2 className='heading-secondary'>Sections</h2>
          <ul>
            <li>News</li>
            <li>Plotics</li>
            <li>Feautues</li>
            <li>Opinion</li>
            <li>Backpage</li>
          </ul>
        </section>

        <section>
          <h2 className='heading-secondary'>Socials</h2>
          <ul>
            <li>Twitter</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </section>

        <section>
          <h2 className='heading-secondary'>More info</h2>
          <ul>
            <li>About us </li>
            <li>Adevertising</li>
            <li>Careers</li>
            <li>Photos</li>
            <li>Request correction(s)</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
          </ul>
        </section>

      </div>
        <p className='text-center'> &copy; 2023 PoliticsNow ng </p>
    </footer>
  )
}

export default Footer