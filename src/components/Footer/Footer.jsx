import './Footer.css'

// Assets
import { developerData, zemacu_logo, youtube_logo, facebook_logo, tiktok_logo, gmail_logo, whatsapp_logo, instagram_logo, map_icon } from '../../assets/assets.js'
// import { developerData } from '../../assets/assets.js'
// SVGs
const youtube = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"/></svg>`
const facebook= `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"/></svg>`
const instagram=  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"/><circle cx="16.806" cy="7.207" r="1.078"/><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"/></svg>`
const x=  `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.33349 6.92867L14.5459 1H13.3109L8.78291 6.14671L5.16908 1H1L6.46604 8.78342L1 15H2.235L7.01369 9.56363L10.8309 15H15L9.33349 6.92867ZM7.64142 8.85175L7.08675 8.07621L2.68037 1.91103H4.57759L8.13472 6.88838L8.68705 7.66391L13.3103 14.1334H11.4131L7.64142 8.85175Z" fill="black"/></svg>`
const tiktok= `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>`
const gmail= `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z"/></svg>`
const whatsapp= `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"/></svg>`
const linkedin= `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="4.983" cy="5.009" r="2.188"/><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"/></svg>`
const github= `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"/></svg>`


// Functional components
 
function EmailLink({ email }) {
  const handleClick = (e) => {
    // Optional copy to clipboard when clicked 
    navigator.clipboard.writeText(email).catch(() => {});

    // We could optionally have an alert of the same, 
    //navigator.clipboard.writeText(email).then(() => {
    //  alert(`Copied ${email} to clipboard`);
    //});
    //in the case the user has not an Email client configured  
  };

  return(
    // The mailto option is more robust than: href="https://mail.google.com/mail/?view=cm&fs=1&to=zecumangucampus2022@gmail.com"
    // this is because it works with all email clients (desktop, mobile, Gmail, Outlook, Apple Mail).
    //They’ll try to open whatever the user has configured as their default mail client:
    // If no email client is set up → nothing happens, or the OS prompts the user to configure one.
    <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
      <img src={gmail_logo} alt="Gmail Logo" />
    </a>
  );
}

function Handle({link, logo, alt}){
    return(
        <li>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img 
                  src={logo} 
                  alt={alt} 
                />
            </a>
        </li>
    )
}

function Developer({name, handles}){
    return(
        <div className="dev-item">
            <div className="dev-text">{name}</div>
            <span>
                <div className="dev-links">
                    <ul className="links">
                        {/* Social/Official Handles dynamically rendered here*/}
                        {/* We'll map over the handles (from the developer handles data) and render a `Handle` for each */}
                        {handles.map((handle, index) => (
                            <Handle 
                              key={index}
                              link={handle.link}
                              logo={handle.img.src}
                              alt={handle.img.alt}
                            />
                        ))}
                    </ul>
                </div>
            </span>
        </div>
    )
}

export default function Footer(){
    {/*
      * Both the Number of Developer and Handle functional components are Dynamic
      * (i.e Number of Developer Varies, and Number of Handles for each also varies)
      * We need to Render accordingly*/}
    const developerElements = developerData.map((developer) => {
        return(
            <Developer 
              key={developer.id}
              name={developer.name}
              handles={developer.handles} // We pass in the handles array - Developer maps over it
            />
        )
    })

    return( 
      <footer className="main-container">
           <h1>Contact Us !</h1>
          
           <div className="upper-container">
             
             <div className="logo-container">
               <div className="logo-image">
                 <img src={zemacu_logo} alt="ZEMACU Logo" />
               </div>
               <h2 className="logo-text">ZEMACU</h2>
             </div>

             <div className="zemacu-contacts">
               <h3>Our contacts</h3>
               <p> Mail Us: 
                 {/* Gmail: zecumangucampus2022@gmail.com 
                   * Probably a redirect to Gmail with the 'to' field auto-filled 
                   * OR simply copy the Gmail to clipboard on click */}
                 <span>
                   <EmailLink email="zecumangucampus2022@gmail.com"/>
                 </span>
               </p>
               <p>
                 Secretary: 
                 <span>
                   <ul className="links">
                     <li> 
                       <EmailLink email="secretaryhandle@gmail.com"/>
                     </li>
                     <li>
                       <a href="https://web.whatsapp.com/send?phone=254702788971&text=hello">
                         <img src={whatsapp_logo} alt="WhatsApp Logo" />                
                       </a>                
                     </li>              
                   </ul> 
                 </span>              
               </p>

               <p>
                 Location: 
                 <span>
                   <img src={map_icon} alt="map icon" />                
                 </span> 
               </p>
             </div>
                
             <div className="developer-contacts">
               <h3>Contact Our Developers</h3>
               <div className="dev-list">
                    {developerElements}
               </div>
             </div>
            
           </div>

           <hr className="fancy-line" />

           <div className="lower-container">
             <div className="links-container">
               <ul className="zemacu-links">
                 <li><a href="https://youtube.com/yourhandle"><img src={youtube_logo} alt="X" /></a></li>
                 {/* <li><a href="https://youtube.com/yourhandle">{youtube}</a></li> */}
                 <li><a href="https://facebook.com/yourhandle"><img src={facebook_logo} alt="FaceBook Logo" /></a></li>
                 <li><a href="https://instagram.com/yourhandle"><img src={instagram_logo} alt="Instagram Logo" /></a></li>
                 <li><a href="https://tiktok.com/yourhandle"><img src={tiktok_logo} alt="TikTok Logo" /></a></li>
               </ul>
             </div>
             <small>Copyright all rights reserved </small>
           </div>
    </footer>
  )
}
