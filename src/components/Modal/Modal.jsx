import './Modal.css'
import { motion } from 'framer-motion'

// Components
import { Backdrop } from '../components'

const modalAnimationVariants ={
    hidden: { 
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
             duration: 0.1,
             type: "spring",
             damping: 25,
             stiffness: 500
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
}

export default function Modal({ handleClose, content }) {
    return(
        <Backdrop
          // Let's us tie the same trigger meant for closing the Modal to tapping this component
          onClick={handleClose}
        >
            <motion.div
              variants={modalAnimationVariants}
              initial={"hidden"}
              animate={"visible"}
              exit={"exit"}
              
              className="reusable-modal"
              onClick={(e) => e.stopPropagation()}
            >      
              <div className="modal-content">
                <button 
                  className="close-btn"                                            
                  onClick={handleClose}
                >             
                  ✖
                </button>

                <div className="modal-actual-content">
                  {content}
                </div>                                    
              </div>                
            </motion.div>
        </Backdrop>
    )
}