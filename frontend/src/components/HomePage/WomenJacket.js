import { Link } from 'react-router-dom'
import './MenJacket.css'

const WomenJacket = () => {

  return (
    <section className="main_homepage_jacket_container">
      <div className='homepage_jacket_content_container'>
        <div className='men_snowboard_link_image_container'>
          <img width='900px' height='590px' src="https://www.dopesnow.com/images/3PMxGAWZuGYxRFIp1nLSRM/8e5a3602edbc58d757a243e4be5e365b/JOH00115_2x.jpg?fit=cover&w=1035&dpr=2&h=594" />
        </div>
        <div className='women_homepage_jacket_text_container'>
          <div className='women_dope_legacy_text'>Sick Annok W</div>
          <div className='women_snowboard_jacket_text'>Snowboard Jacket</div>
          {/* <div> */}
            <Link className='women_snowboard_link_main_page' exact to="/products/W/Womens-Snowboard-Jackets">
              Women's Snowboard Jackets
            </Link>

          {/* </div> */}
        </div>
      </div>
    </section>
  )
}

export default WomenJacket