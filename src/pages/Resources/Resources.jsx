import './Resources.css'

// Components 
import { Footer } from '../../components/components.js'

export default function Resources(){
  return(
    <>
      <main className="container" style={{marginTop: '2rem'}}>
        <h1 className="animate-fadeIn">Gallery &amp; Blog</h1>
        <div id="galleryGrid" className="gallery-grid">
          {/* Row 1 */}
          <div className="gallery-item-container">
            <div className="gallery-item">
              <img src="https://i.ibb.co/ks3FYzL0/IMG-20250407-WA0023.jpg" alt="Gallery Image 1" onclick="openModal(this.src, 'image')" />
            </div>
            <p className="gallery-caption">Community Gathering - A joyful worship session from last Sunday.</p>
          </div>
          <div className="gallery-item-container">
            <div className="gallery-item"><img src="https://i.ibb.co/9mx7ncbC/IMG-20250407-WA0025.jpg" alt="Gallery Image 2" onclick="openModal(this.src, 'image')" /></div>
            <p className="gallery-caption">Faith Event - A moment of unity during our latest gathering.</p>
          </div>
          {/* Row 2 */}
          <div className="gallery-item-container">
            <div className="gallery-item">
              <iframe src="https://drive.google.com/file/d/1kCxQfVdpmVipIzy5V6afBafZqsFfWLF1/preview" frameBorder={0} allowFullScreen onclick="openModal(this.src, 'video')">
              </iframe>
            </div>
            <p className="gallery-caption">Video Highlight - Highlights from our recent outreach program.</p>
          </div>
          <div className="gallery-item-container">
            <div className="gallery-item">
              <img src="https://i.ibb.co/m5C10vxn/IMG-20250407-WA0039.jpg" alt="Gallery Image 3" onclick="openModal(this.src, 'image')" />
            </div>
            <p className="gallery-caption">Bible Study - An inspiring session with our members.</p>
          </div>
          <div className="gallery-item-container">
            <div className="gallery-item">
              <iframe src="https://drive.google.com/file/d/1kCxQfVdpmVipIzy5V6afBafZqsFfWLF1/preview" frameBorder={0} allowFullScreen onclick="openModal(this.src, 'video')">
              </iframe>
            </div>
            <p className="gallery-caption">Video Highlight - Recap of our worship practice.</p>
          </div>
        </div>
        <div className="mt-8">
          <a href="https://drive.google.com/file/d/1qsxHSHMEaGxmcgUGJqzJLMp_WK4Gcg6F/view?usp=drive_link" target="_blank" className="inline-block bg-[#a117a4] text-white font-inter text-lg px-6 py-3 rounded-lg hover:bg-[#990bbf] transition-colors">Download
            Our Weekly program (PDF)</a><br /><br />
        </div>
        <div className="mt-8">
          <a href="https://drive.google.com/file/d/1qsxHSHMEaGxmcgUGJqzJLMp_WK4Gcg6F/view?usp=drive_link" target="_blank" className="inline-block bg-[#a117a4] text-white font-inter text-lg px-6 py-3 rounded-lg hover:bg-[#990bbf] transition-colors">Download
            our Christian Union Constitution (PDF)</a>
        </div>
      </main>

      <Footer />
    </>
  )
}


