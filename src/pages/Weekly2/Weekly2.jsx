import './Weekly2.css'
import { useState } from 'react';
import React from 'react';
// Assets
import { ImLocation, MdOutlineAccessTimeFilled, monImage, tueImage, wedImage, thurImage, friImage } from '../../assets/assets.js';
// components
import { Footer, WhatsAppButton } from '../../components/components.js'

export default function Weekly2(){
    // Data

    //TODO: There must be a dynamic way of fetching the coordinator data from /src/assets/data/leaders.js. Find it
    const cardsArray = [
        {id: 1, dayLetter: "M", image: { src: monImage, alt: "day Image"}, activity: { name: "PRAISE & WORSHIP PRACTISE",        description: "Let your voice rise in joyful celebration as we prepare our hearts and harmonies for worship. Whether you're a seasoned musician or just love to sing, come experience the power of collective praise as we rehearse songs that will lift spirits and honor God.",                                 coordinator: { name: "Margaret",         phone: "254745208720"}, location: "Seminar Room 3", time: "4:30 -6:00 PM, EAT", }, title: "Monday"},
        {id: 2, dayLetter: "T", image: { src: tueImage, alt: "day Image"}, activity: { name: "BIBLE STUDY",                      description: "Dive deep into Scripture as we explore God's Word together. Through thoughtful discussion and shared insights, we uncover timeless truths that speak into our daily lives. Bring your questions, your curiosity, and an open heart ready to be transformed by divine wisdom.",                     coordinator: { name: "Christine Murugi", phone: "254790306571"}, location: "Seminar Room 3", time: "4:30 -6:00 PM, EAT", }, title: "Tuesday"},
        {id: 3, dayLetter: "W", image: { src: wedImage, alt: "day Image"}, activity: { name: "PRAYER & DEVOTION",                description: "Find peace in the presence of the Almighty as we gather for focused prayer and reflection. This sacred time allows us to bring our burdens, gratitude, and intercessions before God, strengthening our spiritual foundation for the week ahead",                                                   coordinator: { name: "Gideon Moikan",    phone: "254112388656"}, location: "Seminar Room 3", time: "4:30 -6:00 PM, EAT", }, title: "Wednesday"},
        {id: 4, dayLetter: "T", image: { src: thurImage, alt: "day Image"},activity: { name: "DISCIPLESHIP & CREATIVE MINISTRY", description: "Grow in your faith journey while expressing your God-given creativity. From mentorship opportunities to artistic expressions of worship, discover how your unique gifts can serve the kingdom and inspire others in their walk with Christ.",                                                      coordinator: { name: "Ann Michael",      phone: "254748736006"}, location: "Seminar Room 3", time: "4:30 -6:00 PM, EAT", }, title: "Thursday"},
        {id: 5, dayLetter: "F", image: { src: friImage, alt: "day Image"}, activity: { name: "SERVICE MINISTRY",                 description: "Be refreshed and challenged as we welcome guest ministers who bring fresh perspectives and powerful messages. Experience dynamic preaching, teaching, and ministry that will inspire your faith and equip you for the journey ahead. Each week brings a new voice with unique insights to share.", coordinator: { name: "Meshack Abwolo",   phone: "254748390059"}, location: "Seminar Room 3", time: "4:30 -6:00 PM, EAT", }, title: "Friday"},
    ]; 

    // State Management
    const [activeIndex, setActiveIndex] = useState(0) // defaults to the first

    // Functional components
    
    const Card = React.memo(function Card({title, image, activityName, activityDescription, activityLocation, activityTime, coordinatorName, coordinatorPhone}){
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
              <p> <ImLocation /> <span>{activityLocation}</span> <br/> <MdOutlineAccessTimeFilled /> <span>{activityTime}</span></p>
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
                activityLocation={activity.location}
                activityTime={activity.time}
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