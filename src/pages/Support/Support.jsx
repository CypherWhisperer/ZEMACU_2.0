import './Support.css'
import { useRef } from 'react'

// Components 
import { Footer } from '../../components/components.js'

export default function Support(){
  
  const paymentRef = useRef(null);
  
  return(
    <>
      <main id="supportMainContainer" className="support-container">
        {/* General Support Section */}
        <section className="section-title">
          <h1 className="title-text">Partner With Us in Faith</h1>
          <div className="title-line" />
        </section>
        <div className="content-grid">
          <div className="content-card">
            <h2 className="card-title">Sustaining Our Ministry</h2>
            <p className="card-description">
              Help us maintain the heartbeat of our Christian Union as we gather, grow, and serve together. Your general support covers the essential foundations that make our weekly activities possible: from venue costs and study materials to hospitality and outreach efforts.
              <br/> <br/> When you contribute to our general fund, you're investing in every aspect of our ministry - the quiet moments of prayer devotion, the joyful sounds of praise practice, the deep discussions in Bible study, the creative expressions of faith, and the powerful messages from visiting ministers. Your support ensures that our doors remain open and our programs continue to thrive, creating space where lives are transformed and community is built.
            </p>
            <button className="cta-button" 
              onClick={() => {
                // Querying the element by ID - say in a case where the element is dynamically rendered
                // const element = document.getElementById("payment-section");
                // element?.scrollIntoView();

                // For this one, we'll go for useRef approach
                paymentRef.current?.scrollIntoView({
                    behavior: "smooth",
                });
              }}
            >
              <span>Support Us</span>
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="image-card general-card">
            <div className="card-overlay">
              <span className="card-label">Community</span>
            </div>
          </div>
        </div>
        {/* Project Support Section */}
        <section className="section-title">
          <h1 className="title-text">PROJECT SUPPORT</h1>
          <div className="title-line" />
        </section>
        <div className="content-grid reverse">
          <div className="image-card project-card">
            <div className="card-overlay">
              <span className="card-label">Projects</span>
            </div>
          </div>
          <div className="content-card">
            <h2 className="card-title">Media Ministry Project</h2>
            <p className="card-description">
              We have a vision to amplify God's message through modern technology and professional-quality media instruments. This specialized project aims to equip our ministry with the tools needed to record, stream, and share our worship, teaching, and testimonies with a broader audience.
              <br/> <br/>Your contribution to our Media Ministry Project will help us acquire essential equipment including audio recording systems, cameras, lighting, and broadcasting tools. This investment extends our reach beyond our physical gathering space, allowing us to touch hearts across digital platforms, preserve powerful moments of ministry, and create resources that can bless others long after the service ends.
            </p>
            <button className="cta-button" 
              onClick={() => {
                paymentRef.current.scrollIntoView({
                    behavior: "smooth",
                });
              }}
            >
              <span>Support Projects</span>
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        {/* Payment Methods Section */}
        <section ref={paymentRef} id="payment-section" className="section-title">
          <h1 className="title-text">PAYMENT METHODS</h1>
          <div className="title-line" />
        </section>
        <div className="payment-grid">
          <div className="payment-card">
            <div className="payment-header">
              <h3 className="payment-title">Secure Payment Options</h3>
              <p className="payment-subtitle">Choose your preferred method to contribute</p>
            </div>
            <div className="payment-methods">
              <div className="payment-method">
                <div className="method-icon mpesa-icon">M</div>
                <div className="method-details">
                  <h4>M-PESA (Pochi la Biashara)</h4>
                  <p className="method-number">1237959320</p>
                </div>
              </div>
              <div className="payment-method">
                <div className="method-icon paybill-icon">P</div>
                <div className="method-details">
                  <h4>Paybill Service</h4>
                  <p className="method-info">Paybill: <span className="highlight">522533</span></p>
                  <p className="method-info">Account: <span className="highlight">7959320</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gratitude-section">
          <p className="gratitude-text">
            Your generous support enables us to continue our mission of spreading God's love
            and serving our community. Every contribution, no matter the size, makes a meaningful difference.
          </p>
          <div className="gratitude-accent" />
        </div>
      </main>

      <Footer />
    </>
  )
}

