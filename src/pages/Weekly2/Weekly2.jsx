import './Weekly2.css'
import { useState } from 'react';
import React from 'react';
// Assets
import { monImage, tueImage, wedImage, thurImage, friImage } from '../../assets/assets.js';

// components
import { Footer, WhatsAppButton } from '../../components/components.js'

export default function Weekly2(){
    // Data

    //TODO: There must be a dynamic way of fetching the coordinator data from /src/assets/data/leaders.js. Find it
    const cardsArray = [
        {id: 1, dayLetter: "M", image: { src: monImage, alt: "day Image"}, activity: { name: "PRAISE & WORSHIP PRACTISE",        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem, assumenda nisi accusantium odit totam eligendi exercitationem officia a distinctio, nulla debitis, nihil excepturi dicta cum maxime cupiditate earum quo?", coordinator: { name: "Margaret",         phone: "254745208720"}, }, title: "Monday"},
        {id: 2, dayLetter: "T", image: { src: tueImage, alt: "day Image"}, activity: { name: "BIBLE STUDY",                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem, assumenda nisi accusantium odit totam eligendi exercitationem officia a distinctio, nulla debitis, nihil excepturi dicta cum maxime cupiditate earum quo?", coordinator: { name: "Christine Murugi", phone: "254790306571"}, }, title: "Tuesday"},
        {id: 3, dayLetter: "W", image: { src: wedImage, alt: "day Image"}, activity: { name: "PRAYER & DEVOTION",                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem, assumenda nisi accusantium odit totam eligendi exercitationem officia a distinctio, nulla debitis, nihil excepturi dicta cum maxime cupiditate earum quo?", coordinator: { name: "Gideon Moikan",    phone: "254112388656"}, }, title: "Wednesday"},
        {id: 4, dayLetter: "T", image: { src: thurImage, alt: "day Image"},activity: { name: "DISCIPLESHIP & CREATIVE MINISTRY", description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem, assumenda nisi accusantium odit totam eligendi exercitationem officia a distinctio, nulla debitis, nihil excepturi dicta cum maxime cupiditate earum quo?", coordinator: { name: "Ann Michael",      phone: "254748736006"}, }, title: "Thursday"},
        {id: 5, dayLetter: "F", image: { src: friImage, alt: "day Image"}, activity: { name: "SERVICE MINISTRY",                 description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum voluptatem, assumenda nisi accusantium odit totam eligendi exercitationem officia a distinctio, nulla debitis, nihil excepturi dicta cum maxime cupiditate earum quo?", coordinator: { name: "Meshack Abwolo",   phone: "254748390059"}, }, title: "Friday"},
    ];

    // State Management
    const [activeIndex, setActiveIndex] = useState(0) // defaults to the first

    // Functional components
    
    const Card = React.memo(function Card({title, image, activityName, activityDescription, coordinatorName, coordinatorPhone}){
      return(
        <div className="content">          
          
          <div className="image-container">
            <img src={image.src} alt={Image.src} className="card-image" />
          </div>
          
          <div className="text-content">
            <div className="text-container">
              <h3 className="card-title">{title}</h3>
              <h1 className="activity">{activityName}</h1>
              <p className="description">{activityDescription}</p>
              <div className="buttons">
                <WhatsAppButton 
                   btnClassName={"whatsap"}
                   btnText={"Chat Cordinator"}
                   targetName={coordinatorName}
                   targetPhone={coordinatorPhone}
                />
              </div>
            </div>
          </div>
        
        </div>
      )
    });

    // React.memo ensures that the component doesn't re-render unless props change
    // Helpfull when the component is heavy on images, videos and such content
    const CardContainer = React.memo(function CardContainer({ title, image, activity, dayLetter, isActive, onActivate }){            
        return(
            <div 
            role="button"
            tabIndex={0}
            onClick={(e) => { e.stopPropagation(); onActivate();}}
            onKeyDown={(e) => e.key === "Enter" && onActivate()}
            className={`card-container ${isActive ? "active" : ""}`}
            >            
              <Card 
                title={title}
                image={image}
                activityName={activity.name}
                activityDescription={activity.description}
                coordinatorName={activity.coordinator.name}
                coordinatorPhone={activity.coordinator.phone}
              />
              <button className="icon"> {dayLetter} </button>
            </div>
        )
    });
 
    // Mapping out the cards
    const cardElements = cardsArray.map((card, index) => {
        return(
            <CardContainer 
              key={card.id}
              title={card.title}
              image={card.image}
              activity={card.activity}
              dayLetter={card.dayLetter}  

              isActive={activeIndex === index}
              onActivate={() => setActiveIndex(index)}
            />
        )
    })

    return(
      <>
        <main className="cards-container">
            {cardElements}
        </main>
        <Footer />
      </>
    )
}