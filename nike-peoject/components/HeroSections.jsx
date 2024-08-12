import React from 'react'

function HeroSections() {
  return (
   <>
   
   <main className='hero container'>

    <div className="hero-content">
            <h1 id='heading'>
            YOUR FEET DESERVE THE BEST
            </h1>
            <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>

            <div className="hero-btn">
              <button className='btn'> Shop Now </button>
              <button className='btn secondary-btn '> Category </button>
            </div>
            <div className='shop'>
              <p>Also Available On</p>

              <div className='brand-icon'>
                <img src="../src/assets/flipkart.png" alt="flipcart" />
                <img src="../src/assets/amazon.png" alt="amazone" />
              </div>
            </div>
    </div>

    <div className="hero-image">
    <img src="https://firebasestorage.googleapis.com/v0/b/fir-ef23f.appspot.com/o/shoe_image.png?alt=media&token=5f2070cf-0b14-4a56-a824-660083a25138" alt="hero" />
      
    </div>
   </main>

   </>
  )
}

export default HeroSections