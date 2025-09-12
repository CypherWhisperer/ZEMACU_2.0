import './Home.css'
import './InfiniteSlider.css'

import React from 'react'
// Assets 
import { testimonials } from '../../assets/assets.js'

// components 
import { Footer } from '../../components/components.js'

// Functional Components
export default function Home(){
  return(
    <>
      <main className="home-container">
        <h1> Basically a trial and error play ground </h1>
        <InfiniteSlider />
      </main>      
      <Footer />
    </>
  )
}

// INFINITE SLIDER COMPONENT
function InfiniteSlider() {

  function theJS() {
    const scrollers = document.querySelectorAll('.scroller');
    // Infinite sliders - and really any moving stuff on a page can be disorienting to some pple
    // Hence why we are checking if the user has enabled prefers-reduced-motion
    // if NOT, then we can go ahead and have the moving parts (matchMedia looks for media queries)
    if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // Adding a data attribute - if user has not enabled prefers-reduced-motion 
      addAnimation();
    }
    
    function addAnimation(){      
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);

        // Now to duplicate each of them
        const innerScroller = scroller.querySelector('.scroller__inner');
        // Get the content within each of the returned inner sliders
        const innerScrollerContent = Array.from(innerScroller.children);
        // `innerScroller.children` of itself returns an HTML collection which we don't want 
        // since the collection will be updated if the DOM is updated, hence the `Array.from()`
        // Which creates a copy in that initial state that won'r get changed later ...aaah it fixes the problem

        innerScrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          // Making each duplicate screen reader friendly
          duplicatedItem.setAttribute('aria-hidden', true);
          // Now Appending each to the inner scroller
          innerScroller.appendChild(duplicatedItem);
        })
      })
    }
  }

  return(
    <div className="scroller">
      <div className="testimonials-slider scroller__inner">
      {testimonials.map((testimonial) => {
          return(
            <Testimonial 
            key={testimonial.id}
            testimonialName={testimonial.name}
            testimonialImage={testimonial.image}
            testimonialText={testimonial.text}
            />
          )
        })         
      }
      {testimonials.map((testimonial) => {
          return(
            <Testimonial 
            key={testimonial.id}
            testimonialName={testimonial.name}
            testimonialImage={testimonial.image}
            testimonialText={testimonial.text}
            />
          )
        })         
      }
      </div>
    </div>      
  )
}

const Testimonial = React.memo(function Testimonial({ testimonialImage, testimonialName, testimonialText}){
  return(
    <div className="testimonial-container">
      <div className="testimonial-contact"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1rem",
        }}
      >
        <div className="testimonial-img-container">
           <img src={testimonialImage} alt="testimonial image" 
             style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
              flexShrink: 0,
             }}
           />
        </div>
        <p className="testimonial-name"> {testimonialName} </p>
      </div>
      
      <div className="testimonial-text">
        { testimonialText } 
      </div>
    </div>
  )
})

