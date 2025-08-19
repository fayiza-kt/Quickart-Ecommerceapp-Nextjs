'use client'
import React from 'react'
import { Carousel } from 'react-bootstrap'

function CarousalSection() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-10" src="https://m.media-amazon.com/images/I/71cJffyWqkL._SX3000_.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-10" src="https://m.media-amazon.com/images/I/71a8+gOXm+L._SX3000_.jpg" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarousalSection
