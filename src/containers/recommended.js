import React, { useState } from 'react'
import * as ROUTES from '../constants/routes'
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import "../global.css"
import {

  Card, CardImg, CardText, CardBody,

  CardTitle, CardSubtitle

} from 'reactstrap';


const free = { color: "#FD4255" }

const Recommended = () => {
  const [state, setstate] = useState([{

    id: "1",
    src: "../images/learn/1.jpg",
    title: "Software Engineering",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam adipisci recusandae doloremque exercitationem ',
    sales: "free"
  },
  {
    id: "2",
    src: "../images/learn/2.jpg",
    title: "C++",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam adipisci recusandae doloremque exercitationem ',
    sales: "free"
  },
  {
    id: "3"
    , src: "../images/learn/3.jpg",
    title: "Java OOP",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam adipisci recusandae doloremque exercitationem ',
    sales: "free"
  },
  {
    id: "4",
    src: "../images/learn/4.jpg",
    title: "operating system ",
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam adipisci recusandae doloremque exercitationem ',
    sales: "free"
  }])
     const [option, setoption] = useState( {

      0: {
      
      items: 1
      
      },
      
      450: {
      items: 1
      },
      600: {
      items: 2
      },
      1000: {
      items:3
      }
      
      })
  return (
    <section className="py-5 Carousel" >
      <div className="container  py-5" >
        <header>
          <h2 className="text-center mb-5 text-light"> Recommended Courses</h2>
        </header>

        <div >
          <OwlCarousel className='owl-theme owl-slider'responsive={option} autoplay  loop margin={10} >
            {state.map(item =>
              <div className='item' key={item.id}>
                 <Link  to={ROUTES.BROWSE} style={{ textDecoration: 'none'}}>
                <Card >
                  <CardImg top width="100%" src={item.src} alt="Card image cap" />
                  <CardBody>
                    <CardTitle tag="h5">{item.title}</CardTitle>
                    <CardText>{item.text}</CardText>
                    <CardSubtitle tag="h6" className="mb-2 text-uppercase font-weight-bold" style={free}>{item.sales}</CardSubtitle>
                  </CardBody>
                </Card>
                </Link>
              </div>

            )}
          </OwlCarousel>
        </div>
       
      </div>
    </section>

  )

}


export default Recommended
