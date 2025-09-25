import './Landing.css'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// Components 
import { Footer, WhatsAppButton, Modal } from '../../components/components.js'
// Assets
import { leadersData, testimonials, landscapeImage1, landscapeImage2, portraitImage1 } from '../../assets/assets.js'


// Function to handle launching a modal
// Could take in inputs such as:
//   - the actual content to render on the modal
//   - Typically the props to the modal
// We could then have it as the event triggered by the buttons.
// const launchModal = ({content}) => {
//   return(
//     <AnimatePresence
//       initial={false}
//       exitBeforeEnter={true}
//       onExitComplete={() => null}
//     >
//        {modalOpen && 
//           <Modal
//             modalOpen={modalOpen}
//             handleClose={close} 
//             content={content}
//           />
//         }            
//     </AnimatePresence>
//   )
// }


// Functional Components
export default function Landing() {
  return (
    <>
      <main className="landing-container">
        <section className="hero-section">
          <MainPortion />
          <ImageSlider orientation={"landscape"} image={landscapeImage1} />
          <Stats />
          <ImageSlider orientation={"portrait"} image={portraitImage1} />
          <div className="landing-hero-item testimonial-heading">
            What Our Members Say About US
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#c5c6c8">
                <path d="M16.939 10.939 12 15.879l-4.939-4.94-2.122 2.122L12 20.121l7.061-7.06z" /><path d="M16.939 3.939 12 8.879l-4.939-4.94-2.122 2.122L12 13.121l7.061-7.06z" />
              </svg>
            </span>
          </div>
          <Testimonials />
          <button className="landing-hero-item button1" > View Gallery </button>
          <WhatsAppButton
            btnClassName={"landing-hero-item button2"}
            btnText={"Chat"}
            //TODO: FIND OUT WHICH OF THE LEADERS IS MORE FIT FOR SUCH
            targetName={leadersData[9].name}
            targetPhone={leadersData[9].phone}
          />
        </section>
      </main>      
      <Footer />
    </>
  )
}

function MainPortion() {
  const [modalOpen, setModalOpen] = useState(false)
  const open = () => setModalOpen(true)
  const close = () => setModalOpen(false)

  return (
    <>
      <article className="landing-hero-item main-portion">
        {/* <div className="landing-hero-bg"
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
          }}
        >
          <img src={landscapeImage2} alt="Background image" className="landing-hero-main-portion-bg" 
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "blur(6px)",
            }}
          />
        </div>        
         */}
        <div
          className="landing-hero-title"
          style={{
            // display: "none",
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-end",
            fontWeight: 600,
            fontSize: "1rem",
            letterSpacing: "0.2rem",
          }}
        >
          <h2 style={{ display: "none", }}> ZEMACU </h2>
          {/* <div className="landing-hero-title-line"
            style={{
              height: "3px",
              width: "100%",
              backgroundColor: "black",
            }}
          /> */}
        </div>

        <div className="landing-hero-text-content">
          <h1 className="landing-hero-heading"> WELCOME TO ZEMACU <br /> WHERE <br /> <span>ANYBODY IS SOMEBODY </span> </h1>
          <p className="landing-hero-text">Be part of a vibrant community of faith, hope & love. Enjoy powerful worship, deep Bible studies, warm fellowship & life-changing outreach. Grow spiritually and connect with like-minded believers. All are welcome — come experience God’s love!!</p>
        </div>

        <div className="landing-hero-btn-container">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen ? close() : open())}
            className="landing-hero-button"
          >
            REGISTER
          </motion.button>

          <AnimatePresence
            // Disabling any initial animations on children that
            // are present when the component is first rendered
            initial={false}
            // Only render one component at a time
            // The exiting component will finish its exit
            // animation before entering component is rendered
            exitBeforeEnter={true}
            // fires when all exiting nodes have completed animating out
            onExitComplete={() => null}
          >
            {modalOpen &&
              <Modal
                modalOpen={modalOpen}
                handleClose={close}
                content={"Appologies: Feature still Under Development ..."}
              />
            }
          </AnimatePresence>
        </div>

      </article>
    </>
  )
}

function ImageSlider({ orientation, image }) {
  return (
    <div className={`landing-hero-item image-slider ${orientation}`}>
      {/* {orientation} Image Slider. */}
      <img src={image} alt="Slider Image" />
    </div>
  )
}

function Stats() {
  return (
    <div className="landing-hero-item stats">
      {/* TODO: IMPLEMENT THE TAPE .... COMPONENT  */}
      <h2> 100+ <span> MEMBERS </span> <br /> 500+ <span> SOULS WON</span></h2>
    </div>
  )
}

const Testimonial = React.memo(function Testimonial({ testimonialImage, testimonialName, testimonialText, 'aria-hidden': ariaHidden }) {
  return (
    <div className="landing-testimonial-container" aria-hidden={ariaHidden}>
      <div className="landing-testimonial-contact"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "1rem",
        }}
      >
        <div className="landing-testimonial-img-container">
          <img src={testimonialImage} alt="testimonial image" className="landing-testimonial-img"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              aspectRatio: "1/1", // Keeps it a square and prevents reflow
              borderRadius: "50%",
              flexShrink: 0,
            }}
          />
        </div>
        <p className="landing-testimonial-name"> {testimonialName} </p>
      </div>

      <div className="landing-testimonial-text">
        {testimonialText}
      </div>
    </div>
  )
})

function Testimonials() {
  // const doubled = [...testimonials, ...testimonials];
  return (
    <div className="landing-hero-item testimonial-slider">
      <div className="slider__inner">
        {/* {doubled.map((t, idx) => (
              <Testimonial 
              key={`${t.id}-${idx}`} // A unique key per rendered element
              testimonialName={t.name}
              testimonialImage={t.image}
              testimonialText={t.text}
              aria-hidden={idx >= testimonials.length} // Hide duplicates from screen readers
              />
          ))} */}

        {testimonials.map((testimonial) => {
          return (
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
          return (
            <Testimonial
              key={testimonial.id + 5}
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


// More Robust approach to figuring out the width of each of the testimonials
// import { useRef, useEffect } from "react";

// function Testimonials(){
//   const sliderEl = useRef(null);

//   useEffect(() => {
//     const el = sliderEl.current;
//     if (!el) return;
//     const scroller = el.closest('.testimonial-slider') || el;
//     const scrollerWidth = scroller.clientWidth || 0;
//     // e.g. each card = 80% of the scroller's width (or whatever ratio you want)
//     const cardWidth = Math.round(scrollerWidth * 0.8);
//     el.style.setProperty('--card-width', `${cardWidth}px`);
//     // optional: watch resize if you want fully responsive
//     const onResize = () => {
//       const w = scroller.clientWidth || 0;
//       el.style.setProperty('--card-width', `${Math.round(w * 0.8)}px`);
//     };
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   return (
//     <div className="landing-hero-item testimonial-slider">
//       <div className="slider__inner" ref={sliderEl} style={{ "--_animation-duration": "30s" }}>
//         {/* doubled mapping here */}
//       </div>
//     </div>
//   );
// }

// in CSS:

// .landing-testimonial-container {
//   flex: 0 0 auto;
//   width: var(--card-width); /* computed from the scroller width */
// }

// Note: this ensures original and duplicate use the same widths because they both read the same CSS var from the same parent container.
