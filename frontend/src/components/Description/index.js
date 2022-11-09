import './index.css'

const Description = ({product}) =>{

  const REMOVEWORDS = ['Snowboard Jacket Men', 'Snowboard Pants Men', 'Hoodie Men', 'T-shirt Men', 'Snowboard Jacket Women', 'Snowboard Pants Women', 'Hoodie Women', 'T-shirt Women']

  const wordReplace = () => {
    let name = product.name
    REMOVEWORDS.forEach(word => {
      name = name.replace(word, '')
    })
    return name
  }
  return(
    <>
      <div className='description_main_container'>
        <div className="description_product_name_container">
          <div className="description_product_name">{wordReplace()}</div>
        </div>
        <div className='description_text_main_container'>
          <p className='description_text'>{product.description}</p>
        </div>
        <div className='description_text_main_container'>
          <h3>Freedom</h3>
          <p className='description_text'>Built around a lightweight and bombproof shell fabric platform with built in 4-way stretch, the Freedom collection is designed for maximum mobility.A minimalist approach keeps you light on your feet so you can truly push your riding.</p>
        </div>
        <div className='description_text_main_container'>
          <h3>Insulated/Shell Option</h3>
          <p className='description_text'>This comes with two insulation choices depending on your riding style. The 'Insulated' option comes with a versatile 60/40g insulation split for an excellent warmth to weight ratio, while our 'Lined Shell' option is insulation-free to keep you light on your feet, and the layering power in your hands.</p>
        </div>
        <div>
          <div className='detail_icon_container'>
            <div class="blue_sign_container">
              <img fetchpriority="low" loading="lazy" src="https://www.dopesnow.com/assets/icons/product-props/bluesign.svg" alt="Bluesign® " width="24" height="24"/>
              <span className='detail_icon_text'>Bluesign®</span>
            </div>
            <div class="recycle_sign_container">
              <img fetchpriority="low" loading="lazy" src="https://www.dopesnow.com/assets/icons/product-props/recycled.svg" alt="Bluesign® " width="24" height="24" />
              <span className='detail_icon_text'>Recycled</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Description;