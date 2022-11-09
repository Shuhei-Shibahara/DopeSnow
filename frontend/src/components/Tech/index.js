import './index.css'

const Tech = () => {


  return (
    <>
      <div className='tech_main_container'>
        <div className="description_product_name_container">
          <div className="description_product_name">Tech</div>
        </div>
        <div className='tech_information_main_container'>
          <div className='softshell_info_container'>
            <img width='272px' height='272px' src="https://www.dopesnow.com/images/u5Ux9GexXzX5X9ZJcFn89/048fc1a9c16400d64570ce1a70c314fb/drytech33.jpeg?w=272&dpr=1"/>
            <div class="tech_title">DRYTECH Softshell 15K</div>
            <p class="softshell_text">Our 2-way stretch softshell is a tri-layer bonded fabric that has a super-tough woven outer and our Dope DRYTECH 15K membrane for superior waterproofing and breathability. Finished with a soft touch terry loop backer for enhanced warmth and softness. Our softshells are designed to seamlessly blend style without compromising on versatility.</p>
            <div className='tech_info_icon_main_container'>
              <div className='tech_info_icon_individual_container'>
                <img height='46px' width='46px' src='https://www.dopesnow.com/assets/icons/product-props/waterproof.svg'/>
                <div className='tech_info_text_num'>
                  <p className='icon_text'>Waterproofing</p>
                  <p className='icon_num'>10.000 mm</p>
                </div>
              </div>
              <div className='tech_info_icon_individual_container bottom_of_icon'>
                <img height='46px' width='46px' src='https://www.dopesnow.com/assets/icons/product-props/breathability.svg' />
                <div className='tech_info_text_num'>
                  <p className='icon_text'>Breathability</p>
                  <p className='icon_num'>25.000 g</p>
                </div>
              </div>
            </div>
          </div>
          <div className='softshell_info_container'>
            <img width='272px' height='272px' src="https://www.dopesnow.com/images/4SlklnRVXXxTJxb9JMLgcq/fd73acad50634ed703d1deb76ccb9174/dwr33.jpeg?w=272&dpr=1" />
            <div class="tech_title">Durable Water Repellent (DWR)</div>
            <p class="softshell_text">All of our fabrics are treated using a PFAS-free, eco-friendly DWR treatment from HeiQ EcoDry. Water beads off instead of soaking in, improving waterproofing, and keep the fabric working at maximum breathability.</p>
          </div>
          <div className='softshell_info_container'>
            <img width='272px' height='272px' src="https://www.dopesnow.com/images/49rttfytSUXnwfMpHeo5J4/179574f1edf72be9e9b0c1ac7131da50/fabricnormal33.jpeg?w=272&dpr=1" />
            <div class="tech_title">Dope Adventure Shell Fabric</div>
            <p class="softshell_text">The Dope Adventure shell is highly durable with an 80,000+ Martindale score. It has been designed with your next adventure in mind, and offers solid waterproofing enhanced by an ECO-DWR treatment, as well as an extremely high 25K breathability rating. This means you stay cool and dry even in challenging situations.</p>
          </div>
          <div className='softshell_info_container'>
            <img width='272px' height='272px' src="https://www.dopesnow.com/images/5hnmof84GQn9O6lseHKzAd/a2c02f70d47414525c0df246ca202dbf/insulationrecycled.jpg?w=272&dpr=1" />
            <div class="tech_title">Insulation</div>
            <p class="softshell_text">Comfortemp® thermal Insulation made by Freudenberg is a range of advanced technology materials, combining perfect comfort with high thermal insulation properties, for true all-day comfort.</p>
          </div>
        </div>
      </div>
    </>
  )

}

export default Tech;