import './Leaders3.css'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

// components 
import { Footer, WhatsAppButton } from '../../components/components'
// Assets
import { leadersData } from '../../assets/assets'

// GLOBAL CONSTANTS
const DRAG_BUFFER = 200; // determines how far we gotta drag b4 snapping to the next leader card - in px
const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10; // for that automatic switch
const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

// Functional Components
function GradientEdges(){
    return(
        <>
          <div className="gradient-edge-left" />
          <div className="gradient-edge-right" />
        </>
    )
}

function Dots({ imgIndex, setImgIndex }) {
    return(
        <div className="dots-container">
            {leadersData.map((_, index) => { // 'leader' to '_' since we aint using it
                return(
                    <button type="button" className={`nav-button ${index === imgIndex ? "active" : ""}`}
                      key={index} // Or we could use the leader.id
                      onClick={() => setImgIndex(index)}
                    />
                )
            })}
        </div>
    )
}

function Handle({link, logo, alt}) {
  return(
    <a href={link} className="social-handle" target="_blank" rel="noopener noreferrer">
      <img src={logo} alt={alt} />
    </a>
  )
}

const Leader = React.memo(function Leader({ bgImage, leaderImage, rank, leaderName, leaderHandles, leaderInfo, leaderPhone, imgIndex, index }){
    return(
        <motion.div className="leader-card"
          animate={{
            scale: imgIndex === index ? 1 : 0.85,
          }}
          transition={SPRING_OPTIONS}
        >
            <motion.img draggable={false} src={bgImage.src} alt={bgImage.alt} className="bg-image" />
            <motion.img draggable={false} src={leaderImage.src} alt={leaderImage.alt} className="main-image" />
            <motion.article draggable={false} className="text-content">
              <h2 className="title">ZEMACU</h2>
              <h1 className="rank">{rank}</h1>
              <div className="leader-info">
                {leaderName}

                {/* <div className="handles-container"> 
                  {leaderHandles.map((handle) => {
                    return(
                      <Handle 
                        key={handle.id}
                        link={handle.handle}
                        logo={handle.handleLogo.src}
                        alt={handle.handleLogo.alt} 
                      />
                    )
                  })}
                </div> */}

              </div>
              <p className="description"> {leaderInfo}</p>
              
              <div className="buttons">
                <WhatsAppButton 
                  btnClassName={"whatsapp-btn"}
                  btnText={"Chat"}
                  targetName={leaderName}
                  targetPhone={leaderPhone}
                />
                
                {/* <button type="button">Committee</button>                           */}
              </div>
            </motion.article>
        </motion.div>
    )
});



export default function Leaders3(){
    // State setup
    const [dragging, setDragging] = useState(false)
    const [imgIndex, setImgIndex] = useState(0)
    const [dragX, setDragX] = useState(0)

    // EFFECT
    useEffect(() =>{
        // setInterval takes in 1. a call back function 2. a number representing time in milliseconds
        // the callback function is called after every interval of the passed in time (in milliseconds)
        const intervalRef = setInterval(() => {
            // const x = dragX.get();

            if (!dragging) {  // Don't auto-advance while dragging 
              setImgIndex((pv) => {
                if (pv === leadersData.length - 1) {
                   return 0;
                }
                return pv + 1;
              });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef)
    }, [dragging, imgIndex])  // the imgIndex dependency allows resetting interval after a change in image index

    // Functions 
    const handleDragStart = () => {
        setDragging(true);
    }

    const handleDragEnd = (e, info) => {
         setDragging(false);
         setDragX(0); // resetting drag position
        const x = info.offset.x;

         // drag x value decreases on drag to the left, hence the negative
         // Right dragging:  if x value is less than draag buffer, increment imgIndex (snap it to next)
         if (x <= -DRAG_BUFFER && imgIndex < leadersData.length -1){
             setImgIndex((pv) => pv + 1);
         } else if (x >= DRAG_BUFFER && imgIndex > 0) { // Left Dragging 
             setImgIndex((pv) => pv - 1);
         }
    }

    return(
      <>
         <section className="page-container">
            <motion.article
               drag="x"
               dragConstraints={{
                 left: 0,
                 right: 0,
               }}  // These allow dragging, and then snaps the card back to position
               style={{
                //  x: dragX,
                x: dragging ? dragX : 0, // only apply dragX when actively dragging
               }}
               animate={{
                 translateX: `-${imgIndex * 100}%`,
               }}
               transition={SPRING_OPTIONS}
               onDragStart={handleDragStart}
               onDragEnd={handleDragEnd}
               whileDrag={{cursor : "grabbing"}}

               // props for better mobile interactivity
               //dragElastic={0.2}
               //dragMomentum={false}
               className="slider"
            >
                {/* Mapping over the leader cards  */}
                 {leadersData.map((leader, index) => {
                    return(
                        <Leader 
                          key={leader.id}
                          bgImage={leader.bgImage}
                          leaderImage={leader.mainImage}
                          rank={leader.rank}
                          leaderName={leader.name}
                          leaderInfo={leader.info}
                          leaderHandles={leader.socialHandles}
                          leaderPhone={leader.phone}
                          imgIndex={imgIndex}
                          index={index}
                        />
                    )
                 })}
            </motion.article>
             
            <Dots 
               imgIndex={imgIndex}
               setImgIndex={setImgIndex}
            />   
            {/* <GradientEdges /> */}
         </section>
         <Footer />
     </>         
    )
}

// A MORE GRANULAR APPROACH FOR RESETTING THE INTERVAL AFTER A SWITCH
// import { useRef } from 'react'; // Add this import

// // In your component:
// const intervalRef = useRef(null);

// const resetInterval = () => {
//     if (intervalRef.current) {
//         clearInterval(intervalRef.current);
//     }
//     intervalRef.current = setInterval(() => {
//         setImgIndex((pv) => {
//             if (pv === leadersData.length - 1) {
//                 return 0;
//             }
//             return pv + 1;
//         });
//     }, AUTO_DELAY);
// };

// useEffect(() => {
//     resetInterval();
//     return () => {
//         if (intervalRef.current) {
//             clearInterval(intervalRef.current);
//         }
//     };
// }, []);

// // Then in your Dots component's onClick:
// <button type="button" className={`nav-button ${index === imgIndex ? "active" : ""}`}
//   key={index}
//   onClick={() => {
//       setImgIndex(index);
//       resetInterval(); // Reset the timer when manually switching
//   }}
// />

// // And in handleDragEnd:
// const handleDragEnd = (e, info) => {
//      setDragging(false);
//      const x = dragX.get();

//      if (x <= -DRAG_BUFFER && imgIndex < leadersData.length -1){
//          setImgIndex((pv) => pv + 1);
//          resetInterval(); // Reset after drag switch
//      } else if (x >= DRAG_BUFFER && imgIndex > 0) {
//          setImgIndex((pv) => pv - 1);
//          resetInterval(); // Reset after drag switch
//      }
// }