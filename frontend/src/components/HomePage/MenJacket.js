import { Link } from 'react-router-dom'
import './MenJacket.css'

const MenJacket = () => {

  return(
    <section className="main_homepage_jacket_container">
      <div className='homepage_jacket_content_container'>
        <div className='homepage_jacket_text_container'>
          <div className='dope_legacy_text'>Dope Legacy</div>
          <div className='men_snowboard_jacket_text'>Snowboard Jacket</div>
          <Link className='men_snowboard_link_main_page' exact to="/products/M/Mens-Snowboard-Jackets">
            <div>Men's Snowboard Jackets</div>
          </Link>
        </div>
        <div className='men_snowboard_link_image_container'>
            <img width='900px' height='590px' src="https://www.dopesnow.com/images/3S8CS1ehzF8Q0jidZFbgXa/2c87a6d37c4595dc176916473bf41766/JOH07419_v2_2x.jpg?fit=cover&w=1035&dpr=1&h=594" />
        </div>
      </div>
    </section>
  )
}

export default MenJacket