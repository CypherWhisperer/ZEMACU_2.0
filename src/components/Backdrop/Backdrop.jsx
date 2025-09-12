import './Backdrop.css'
import { motion } from 'framer-motion'

// Functional Components
export default function Backdrop({ children, onClick}){
    // The  children Prop allows us to embed more components in btn this component tags
    // The onclick one just allows us to define how we handle click evenets on the component -
    // It simply allows ud to pass a custom event handler to update the global state when clicked
    // Allowing us to think of it as a dumb components that doesn't have its internal state to manage    
    return(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClick}  
          className="backdrop"
        >
            {children}
        </motion.div>        
    )
}