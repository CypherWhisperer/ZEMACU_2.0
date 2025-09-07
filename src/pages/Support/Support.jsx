import './Support.css'

// Components 
import { Footer } from '../../components/components.js'

export default function Support(){
  return(
    <>
      <main id="supportMainContainer" className="support-container">
        {/* General Support Section */}
        <section className="section-title">
          <h1 className="title-text">GENERAL SUPPORT</h1>
          <div className="title-line" />
        </section>
        <div className="content-grid">
          <div className="content-card">
            <h2 className="card-title">Community Assistance</h2>
            <p className="card-description">
              We provide comprehensive support to our community members through various programs,
              counseling services, and spiritual guidance. Our team is here to help you navigate
              life's challenges with faith and hope.
            </p>
            <button className="cta-button" onclick="handleGeneralSupport()">
              <span>Get Support</span>
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
            <h2 className="card-title">Ministry Projects</h2>
            <p className="card-description">
              Support our ongoing ministry projects that make a real difference in our community.
              From youth programs to outreach initiatives, your contribution helps us expand
              our impact and serve more people.
            </p>
            <button className="cta-button" onclick="handleProjectSupport()">
              <span>Support Projects</span>
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        {/* Payment Methods Section */}
        <section id="payment-section" className="section-title">
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

