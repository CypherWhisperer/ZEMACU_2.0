import './Nav.css'

// React Stuff 
import { useState } from  "react"
import { Link } from "react-router-dom"

export default function Nav({ expanded, toggle }){
  // State Management 
  const [isSideBarOpen, setIsSideBarOpen] = useState(false) 
  const [activeModal, setActiveModal] = useState(null) 
  const [activeDropDown, setActiveDropDown] = useState(null)

  const toggleSidebar = () => setIsSideBarOpen(!isSideBarOpen) 
  const openModal = (id) => setActiveModal(id) 
  const closeModal = () => setActiveModal(null)
  const toggleDropDown = (dropdownID) => {
    // Curr setup allows for more than one elements bearing the 'has-dropdown' class
    // If the clicked dropdown is active, close it (set to null)
    // If any other, OR NONE, is active, open this one
    setActiveDropDown(activeDropDown === dropdownID ? null : dropdownID)
  }

  const handleLinkClick = () => {
    setIsSideBarOpen(false);   // closes the sidebar
    if (expanded) toggle();    // collapse if parent also tracks expanded
  };

  return(
    <>
      <div 
      className={`sidebar ${isSideBarOpen ? "expanded" : ""} ${expanded ? 'expanded' : 'collaped'}`} 
      id="sidebar"
      aria-expanded={expanded}
      >  
        <div className="sidebar-widget">
          <button 
          className="toggle-btn" 
          type="button" 
          aria-controls='sidebar'
          aria-expanded={expanded}
          onClick={() => {toggleSidebar(); toggle();}}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"  width="20" height="20" ><path d="M288 64c0 17.7-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l224 0c17.7 0 32 14.3 32 32zm0 256c0 17.7-14.3 32-32 32L32 352c-17.7 0-32-14.3-32-32s14.3-32 32-32l224 0c17.7 0 32 14.3 32 32zM0 192c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 224c-17.7 0-32-14.3-32-32zM448 448c0 17.7-14.3 32-32 32L32 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
            </svg>
          </button>
          <div className="sidebar-logo">
            <Link to="/"> ZEMACU </Link>
          </div>
        </div>  
        
        <div className="navigation">
          <ul className="sidebar-nav">
            
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/home" onClick={handleLinkClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"/>
                  </svg>
                  <span> Home </span>
                </Link>
              </li>
            
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/weekly" onClick={handleLinkClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M21 20V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2zM9 18H7v-2h2v2zm0-4H7v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm4 4h-2v-2h2v2zm0-4h-2v-2h2v2zm2-5H5V7h14v2z"/>
                </svg>
                  <span> Weekly Program </span>
                </Link>
              </li>

              <li className="sidebar-item">
                <Link className="sidebar-link" to="/leaders" onClick={handleLinkClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48Zm-3.68,152.11c.21-1.2.44-2.4.71-3.59a66.46,66.46,0,0,1,16.29-31.21C285.11,151.58,303.38,144,323.67,144a74.05,74.05,0,0,1,25.06,4.26A66.69,66.69,0,0,1,375,165.46a68.15,68.15,0,0,1,18,42.14A78.46,78.46,0,0,1,393,219h0a86.19,86.19,0,0,1-8.2,31q-.76,1.59-1.59,3.15c-1.11,2.07-2.3,4.1-3.58,6.06a79.47,79.47,0,0,1-8.63,11c-13.12,14-29.92,21.73-47.31,21.73a59.61,59.61,0,0,1-19.17-3.18,63.47,63.47,0,0,1-6.1-2.43,70.76,70.76,0,0,1-22.07-16.12,83.76,83.76,0,0,1-22-51.32q-.27-3.88-.18-7.68A75.62,75.62,0,0,1,255.22,200.13ZM105.49,224.45a59.87,59.87,0,0,1,5.2-20.64,56.76,56.76,0,0,1,2.78-5.3,54.49,54.49,0,0,1,7.19-9.56,55.62,55.62,0,0,1,14-10.82,56.84,56.84,0,0,1,8.11-3.64,63.85,63.85,0,0,1,33.35-2.39,57,57,0,0,1,30.78,17,57.86,57.86,0,0,1,15.41,38.62c.05,2.11,0,4.23-.15,6.38a71.58,71.58,0,0,1-6,23.84,69.49,69.49,0,0,1-5.73,10.42,65.39,65.39,0,0,1-15.76,16.57C193.17,286,191.61,287,190,288a54.21,54.21,0,0,1-10,4.65,49.31,49.31,0,0,1-16.2,2.76c-.93,0-1.86,0-2.78-.08a47.6,47.6,0,0,1-5.48-.62,51.19,51.19,0,0,1-5.35-1.23,53.54,53.54,0,0,1-7.72-2.89c-.84-.39-1.66-.8-2.48-1.23-18-9.49-31.57-29.16-34.23-52.12-.12-1.05-.22-2.1-.29-3.16A66.59,66.59,0,0,1,105.49,224.45Zm53.92,178.6A177.27,177.27,0,0,1,97.47,332.4a4,4,0,0,1,1.62-5.26C117.67,316.69,141.4,311,163.82,311c17,0,30.7,2,42.69,5.88a8,8,0,0,1,2.59,13.77c-23.35,19-38.4,42.54-45.47,70.75v0A2.77,2.77,0,0,1,159.41,403.05ZM256,432a175.12,175.12,0,0,1-65.7-12.72,4,4,0,0,1-2.4-4.46c.4-2.05.84-3.92,1.23-5.48,7.12-28.43,24.76-52,51-68.18,23.29-14.35,53-22.25,83.52-22.25,31.16,0,60,7.58,83.48,21.91h0a2.72,2.72,0,0,1,.91,3.67A176.1,176.1,0,0,1,256,432Z"/><path d="M161,295.28a47.6,47.6,0,0,1-5.48-.62A47.6,47.6,0,0,0,161,295.28Z"/><path d="M134.64,178.13a55.62,55.62,0,0,0-14,10.82,54.49,54.49,0,0,0-7.19,9.56,54.49,54.49,0,0,1,7.19-9.56A55.62,55.62,0,0,1,134.64,178.13Z"/><path d="M216.17,257.89a71.58,71.58,0,0,0,6-23.84c.15-2.15.2-4.27.15-6.38q.08,3.15-.15,6.38A71.58,71.58,0,0,1,216.17,257.89Z"/><path d="M134.64,178.13a56.84,56.84,0,0,1,8.11-3.64A56.84,56.84,0,0,0,134.64,178.13Z"/><path d="M150.21,293.43a53.54,53.54,0,0,1-7.72-2.89A53.54,53.54,0,0,0,150.21,293.43Z"/><path d="M105.78,237.19c2.66,23,16.26,42.63,34.23,52.12C122,279.82,108.44,260.15,105.78,237.19Z"/><path d="M254.34,219a83.76,83.76,0,0,0,22,51.32,70.76,70.76,0,0,0,22.07,16.12,70.76,70.76,0,0,1-22.07-16.12,83.76,83.76,0,0,1-22-51.32q-.27-3.88-.18-7.68Q254.07,215.07,254.34,219Z"/><path d="M304.5,288.82a63.47,63.47,0,0,1-6.1-2.43A63.47,63.47,0,0,0,304.5,288.82Z"/><path d="M255.93,196.54a66.46,66.46,0,0,1,16.29-31.21A66.46,66.46,0,0,0,255.93,196.54Z"/><path d="M375,165.46a68.15,68.15,0,0,1,18,42.14,68.15,68.15,0,0,0-18-42.14,66.69,66.69,0,0,0-26.27-17.2A66.69,66.69,0,0,1,375,165.46Z"/><path d="M393,219h0a86.19,86.19,0,0,1-8.2,31A86.19,86.19,0,0,0,393,219Z"/><path d="M254.16,211.27a75.62,75.62,0,0,1,1.06-11.14A75.62,75.62,0,0,0,254.16,211.27Z"/><path d="M383.19,253.16c-1.11,2.07-2.3,4.1-3.58,6.06C380.89,257.26,382.08,255.23,383.19,253.16Z"/><path d="M206.88,189.05a57.86,57.86,0,0,1,15.41,38.62,57.86,57.86,0,0,0-15.41-38.62,57,57,0,0,0-30.78-17A57,57,0,0,1,206.88,189.05Z"/><path d="M190,288a54.21,54.21,0,0,1-10,4.65A54.21,54.21,0,0,0,190,288Z"/><path d="M105.49,224.45a59.87,59.87,0,0,1,5.2-20.64A59.87,59.87,0,0,0,105.49,224.45Z"/><path d="M194.68,284.88C193.17,286,191.61,287,190,288,191.61,287,193.17,286,194.68,284.88Z"/><path d="M216.17,257.89a69.49,69.49,0,0,1-5.73,10.42A69.49,69.49,0,0,0,216.17,257.89Z"/><path d="M110.69,203.81a56.76,56.76,0,0,1,2.78-5.3A56.76,56.76,0,0,0,110.69,203.81Z"/><path d="M194.68,284.88a65.39,65.39,0,0,0,15.76-16.57A65.39,65.39,0,0,1,194.68,284.88Z"/>
                  </svg>                
                  <span> Our Leaders </span>
                </Link>
              </li>

              <li className="sidebar-item">
                <Link className="sidebar-link" to="/resources" onClick={handleLinkClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z"/>
                  </svg>
                  <span> Resources </span>
                </Link>
              </li>

              <li className="sidebar-item">
                
                <a 
                  className={`sidebar-link has-dropdown ${activeDropDown === 'talk2us' ? 'active' : ''}`}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault(); // Prevents the # from being added to the URL 
                    toggleDropDown('talk2us')
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M60.44,389.17c0,.07,0,.2-.08.38C60.39,389.43,60.41,389.3,60.44,389.17Z"/><path d="M439.9,405.6a26.77,26.77,0,0,1-9.59-2l-56.78-20.13-.42-.17a9.88,9.88,0,0,0-3.91-.76,10.32,10.32,0,0,0-3.62.66c-1.38.52-13.81,5.19-26.85,8.77-7.07,1.94-31.68,8.27-51.43,8.27-50.48,0-97.68-19.4-132.89-54.63A183.38,183.38,0,0,1,100.3,215.1a175.9,175.9,0,0,1,4.06-37.58c8.79-40.62,32.07-77.57,65.55-104A194.76,194.76,0,0,1,290.3,32c52.21,0,100.86,20,137,56.18,34.16,34.27,52.88,79.33,52.73,126.87a177.86,177.86,0,0,1-30.3,99.15l-.19.28-.74,1c-.17.23-.34.45-.5.68l-.15.27a21.63,21.63,0,0,0-1.08,2.09l15.74,55.94a26.42,26.42,0,0,1,1.12,7.11A24,24,0,0,1,439.9,405.6Z"/><path d="M299.87,425.39a15.74,15.74,0,0,0-10.29-8.1c-5.78-1.53-12.52-1.27-17.67-1.65a201.78,201.78,0,0,1-128.82-58.75A199.21,199.21,0,0,1,86.4,244.16C85,234.42,85,232,85,232a16,16,0,0,0-28-10.58h0S49.12,230,45.4,238.61a162.09,162.09,0,0,0,11,150.06C59,393,59,395,58.42,399.5c-2.73,14.11-7.51,39-10,51.91a24,24,0,0,0,8,22.92l.46.39A24.34,24.34,0,0,0,72,480a23.42,23.42,0,0,0,9-1.79l53.51-20.65a8.05,8.05,0,0,1,5.72,0c21.07,7.84,43,12,63.78,12a176,176,0,0,0,74.91-16.66c5.46-2.56,14-5.34,19-11.12A15,15,0,0,0,299.87,425.39Z"/>
                  </svg>
                  <span> Talk 2 Us </span>
                </a>
                
                <ul className="sidebar-dropdown"> 
                  <li className="sidebar-item">
                    <button className="modal-trigger" data-target="prayerModal" onClick={() => {openModal("prayer"); handleLinkClick();}}> 
                        Prayer Request
                    </button>
                  </li>

                  <li className="sidebar-item">
                    <button className="modal-trigger" data-target="testimonyModal" onClick={() => {openModal("testimonies"); handleLinkClick();}}>
                        Testimonies
                    </button>
                  </li>

                  <li className="sidebar-item">
                    <button className="modal-trigger" data-target="feedBackModal" onClick={() => {openModal("feedback"); handleLinkClick();}}>
                        FeedBack
                    </button>
                  </li> 
                </ul>
              
              </li>


              <li className="sidebar-item">
                <Link className="sidebar-link" to="/support" onClick={handleLinkClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.726 13.02 14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A1.995 1.995 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a2.998 2.998 0 0 0-2.822.504zm1.532-5.63c.451-.465.73-1.108.73-1.818s-.279-1.353-.73-1.818A2.447 2.447 0 0 0 17.494 3S16.25 2.997 15 4.286C13.75 2.997 12.506 3 12.506 3a2.45 2.45 0 0 0-1.764.753c-.451.466-.73 1.108-.73 1.818s.279 1.354.73 1.818L15 12l4.258-4.61z"/>  
                  </svg>
                  <span> Support US </span>
                </Link>
                
              </li>

          </ul>        

          <div className="sidebar-footer">    
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M4.5 8.552c0 1.995 1.505 3.5 3.5 3.5s3.5-1.505 3.5-3.5-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5zM19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2z"/>
              </svg>

              <span>
                <button className="register modal-trigger" data-target="registerModal" onClick={() => {openModal("register"); handleLinkClick();}}>
                  Register
                </button>
              </span> 
          </div>
        
        </div>

      </div>
      
      {/*  This Code */}
      {activeModal && (
        <div className="modal">
          <div className="modal-content">
             <button className="close-btn" onClick={closeModal}>
               ✖
            </button>
            {activeModal === "prayer" &&(
              <iframe src="https://form.jotform.com/your-prayer-form-id"></iframe>
            )}
            {activeModal === "testimony" &&(
              <iframe src="https://form.jotform.com/your-testimony-form-id"></iframe>
            )}
            {activeModal === "feedback" &&(
              <iframe src="https://form.jotform.com/your-feedback-form-id"></iframe>
            )}
            {activeModal === "register" &&(
              <iframe src="https://form.jotform.com/your-register-form-id"></iframe>
            )}
          </div>
        </div>
      )} 
      
    </>
  )
}
