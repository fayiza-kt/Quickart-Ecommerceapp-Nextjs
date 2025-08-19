import React from 'react'
import CarousalSection from './components/CarousalSection/CarousalSection';
import './styles/CommonLayout.css'
import { Metadata } from 'next';
import Image from 'next/image';


export const metadata: Metadata = {
  title: "Quickart - Home",
  description: "Welcome to Quickart - Your Stylish Destination for Smart Shopping!",
};

const offers = [
  { title: "50% Off on School Bags", description: "Grab the deal before it ends!" },
  { title: "Fashion Bonanza", description: "Flat 40% Off on Clothing" }
];

const CaptionStyle:any = {
  color:"blue",
  fontStyle:"italic",
  textAlign:"center",
  textDecoration:"underline"
}


export default function Home() {
  return (
    <div>
      <CarousalSection />
      <h2 style={CaptionStyle}>Kart It Quick, Love It Long.</h2>
      <h4 className="text-3xl font-bold text-center">Welcome to Quickart – Your Stylish Destination for Smart Shopping!</h4>
      <p>Discover a world of fashion, electronics, beauty, and lifestyle products curated just for you. At QuicKart, we combine luxury, style, and affordability in one seamless shopping experience.Browse our collection of quality products. Free delivery on first order</p>
      
      <div className="container mt-4">
      <h3> Today's Offers </h3>
      <div className="row">
        {offers.map((offer, index) => (
          <div key={index} className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">{offer.title}</h5>
                <p className="card-text">{offer.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
      <div className="col-md-4">
          <Image src="/images/b2s.jpg" alt="Offer Image3" className="img-fluid" width={500} height={100} />
      </div>
      <div className="col-md-4">
          <Image src="/images/fashion.jpeg" alt="Offer Image3" className="img-fluid" width={500} height={100} />
      </div>
      <div className="col-md-4">
          <Image src="/images/b2s.jpg" alt="Offer Image4" className="img-fluid" width={500} height={100} />
      </div>
      </div>

    </div>

    </div>
  );
}
