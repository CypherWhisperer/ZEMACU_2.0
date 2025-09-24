import './Weekly.css'

// Components 
import { Footer } from '../../components/components.js'

export default function Weekly(){
  return(
    <>
      <main id="weeklyMainContainer" className="main-container">
        <div className="hero-section">
          <h1 className="hero-title">Our Weekly Program</h1>
          <p className="hero-description">
            Join us Monday–Friday, 4:30–6:00 PM for transformative sessions filled with prayer,
            Bible study, worship, and fellowship. Experience spiritual growth in a vibrant,
            welcoming community where everyone belongs.
          </p>
        </div>
        <div className="slider-container">
          <div className="slider-wrapper">
            <div className="slider-track" id="sliderTrack">
              <div className="program-card active" data-day="monday">
                <div className="card-image-container">
                  <img src="https://images.pexels.com/photos/268131/pexels-photo-268131.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Praise and Worship Practice" className="card-image" />
                  <div className="card-overlay" />
                </div>
                <div className="card-content">
                  <div className="day-indicator">MON</div>
                  <h3 className="card-title">Praise &amp; Worship Practice</h3>
                  <p className="card-description">
                    Start your week with uplifting worship and praise. Practice together,
                    learn new songs, and prepare your heart for worship.
                  </p>
                  <div className="card-details">
                    <span className="time">4:30 PM - 6:00 PM</span>
                    <span className="location">Seminar Room 3</span>
                  </div>
                </div>
              </div>
              <div className="program-card" data-day="tuesday">
                <div className="card-image-container">
                  <img src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Families Bible Study" className="card-image" />
                  <div className="card-overlay" />
                </div>
                <div className="card-content">
                  <div className="day-indicator">TUE</div>
                  <h3 className="card-title">Families Bible Study</h3>
                  <p className="card-description">
                    Dive deep into God's Word together as a family. Interactive discussions
                    and meaningful insights for all ages and backgrounds.
                  </p>
                  <div className="card-details">
                    <span className="time">4:30 PM - 6:00 PM</span>
                    <span className="location">Seminar Room 3</span>
                  </div>
                </div>
              </div>
              <div className="program-card" data-day="wednesday">
                <div className="card-image-container">
                  <img src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Devotion and Fasting" className="card-image" />
                  <div className="card-overlay" />
                </div>
                <div className="card-content">
                  <div className="day-indicator">WED</div>
                  <h3 className="card-title">Devotion &amp; Fasting</h3>
                  <p className="card-description">
                    A sacred time of prayer, reflection, and spiritual discipline.
                    Draw closer to God through devotion and fasting practices.
                  </p>
                  <div className="card-details">
                    <span className="time">4:30 PM - 6:00 PM</span>
                    <span className="location">Seminar Room 3</span>
                  </div>
                </div>
              </div>
              <div className="program-card" data-day="thursday">
                <div className="card-image-container">
                  <img src="https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Discipleship Program" className="card-image" />
                  <div className="card-overlay" />
                </div>
                <div className="card-content">
                  <div className="day-indicator">THU</div>
                  <h3 className="card-title">Discipleship &amp; Creative Ministry</h3>
                  <p className="card-description">
                    Grow as a disciple through mentorship and creative expression.
                    Develop your gifts while building lasting relationships.
                  </p>
                  <div className="card-details">
                    <span className="time">4:30 PM - 6:00 PM</span>
                    <span className="location">Seminar Room 3</span>
                  </div>
                </div>
              </div>
              <div className="program-card" data-day="friday">
                <div className="card-image-container">
                  <img src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Main Service" className="card-image" />
                  <div className="card-overlay" />
                </div>
                <div className="card-content">
                  <div className="day-indicator">FRI</div>
                  <h3 className="card-title">Main Service</h3>
                  <p className="card-description">
                    End your week with our main worship service. Experience powerful
                    messages, community fellowship, and spiritual renewal.
                  </p>
                  <div className="card-details">
                    <span className="time">4:30 PM - 6:00 PM</span>
                    <span className="location">Seminar Room 3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="slider-controls">
            <button className="slider-nav prev" id="prevBtn" aria-label="Previous slide">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <polyline points="15,18 9,12 15,6" />
              </svg>
            </button>
            <div className="slider-indicators">
              <button className="indicator active" data-slide={0} aria-label="Monday" />
              <button className="indicator" data-slide={1} aria-label="Tuesday" />
              <button className="indicator" data-slide={2} aria-label="Wednesday" />
              <button className="indicator" data-slide={3} aria-label="Thursday" />
              <button className="indicator" data-slide={4} aria-label="Friday" />
            </div>
            <button className="slider-nav next" id="nextBtn" aria-label="Next slide">
              <svg width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <polyline points="9,18 15,12 9,6" />
              </svg>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
