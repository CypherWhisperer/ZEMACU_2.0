import './Home.css'
import { Link } from 'react-router-dom'

// components 
import { Footer } from '../../components/components.js'
// Assets
import { people_icon, calendar_icon, download_icon, support_us_icon } from '../../assets/assets.js'

export default function Home(){
  return(
    <>  
      <div className="hero">
        <h1>Hello and Welcome Back!</h1>
        <p>
          This page is your guide to exploring our site. From here, you can quickly access our weekly program, meet our
          leaders, find useful resources, and support our mission.
        </p>
      </div>
  
      <main className="cards-container">
        <div className="card">
          <img src={calendar_icon} alt="Our Weekly Program" />
          <h2>Our Weekly Program</h2>
          <p>Stay up to date with our weekly events, activities, and gatherings. We have something for everyone!</p>
          <Link to="/weekly" className="btn">View Program</Link>
        </div>
    
        <div className="card">
          <img src={people_icon} alt="Our Leaders" />
          <h2>Our Leaders</h2>
          <p>Meet the dedicated individuals guiding our vision and making everything possible.</p>
          <Link to="/leaders" className="btn">Meet Our Leaders</Link>
        </div>
    
        <div className="card">
          <img src={download_icon} alt="Resources" />
          <h2>Resources</h2>
          <p>Explore helpful materials, guides, and information to support you in your journey.</p>
          <Link to="/resources" className="btn">Explore Resources</Link>
        </div>
        
        <div className="card">
          <img src={support_us_icon} alt="Support Us" />
          <h2>Support Us</h2>
          <p>Your contributions help us continue our mission. Every bit of help makes a difference.</p>
          <Link to="/support" className="btn">Donate</Link>
        </div>
      </main>
      
      {/* Verse Display */}
      <div id="indexMainVerseDisplay" />

      <Footer />
    </>
  )
}


