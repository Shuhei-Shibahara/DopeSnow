import linkedIn from '../../images/linkedIn_img.png'
import GitHub from '../../images/GitHub-logo.png'
import './Footer.css'

const Footer = () => {

  return(
    <>
      <div className="main_footer_container">
        <a href="https://github.com/Shuhei-Shibahara/Sick-Snow" target='_blank'>
          <img className='footer_icon2' src={GitHub} />
        </a>
        <a href="https://www.linkedin.com/in/shuhei-shibahara/" target="_blank">
          <img className='footer_icon' src={linkedIn}/>
        </a>
      </div>
    </>
  )
}

export default Footer;