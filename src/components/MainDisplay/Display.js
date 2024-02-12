import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import TUImage from '../../resource/csed.jpg'
import TUImage2 from '../../resource/TUImage2.jpeg'
import './Display.css'


const Display = () => {
  return (
    <div className='carousal-box'>
      <Carousel>
      <Carousel.Item>
        <Image src={TUImage} fluid style={{ 
          borderRadius:'15px'
         }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      {/* <Carousel.Item>

        <Image src={TUImage2} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item> */}
      
    </Carousel>

    </div>
    
)
}

export default Display