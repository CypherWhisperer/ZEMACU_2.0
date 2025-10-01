import './Form.css'
import { useState, useEffect } from 'react'

// Functional Components
export default function Form(props) {
    // Destructuring the props
    const {contactRequired, hasMessage, messageLabel, formType } = props;

    // Directly setting them without wrapping in the useEffect hook caused infinite re-renders
    useEffect(() => {
        setContactIsRequired(contactRequired);
        setHasTextArea(hasMessage);
    }, [contactRequired, hasMessage]);


    // Pieces of state
    const [loading, setLoading] = useState(false);
    const [hasTextArea, setHasTextArea] = useState(true);
    const [contactIsRequired, setContactIsRequired] = useState(false);
    const [values, setValues] = useState({
        formType: '',
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
      // Considers all default values - as specified above -
      // And updates accordingly as needed
      setValues({...values, [e.target.name]: e.target.value});
    }

    async function handleSubmit(e)  {
        // First things first. Prevent the default submission to current page
        e.preventDefault();

        // Shaping the data object as the backend expects it
        const formData = {
            formType: values.formType,   // Which form it is
            name: `${values.firstName} ${values.lastName}`, // Combining Names    
            phone: values.phone,  // phone number
            email: values.email,  // Email Address            
            message: values.message, //textArea value (Prayer, testimony, feedback)
        }

        // Helpfull debug before sending the Data
        console.log(formData);

        // Handle the data. e.g using axios
        // axios.post('url', values)
        
        // show a Loading State in UI (e.g disable button, show spinner)
        setLoading(true);
        
        try {
            // Make a POST request to Google Apps script
          const response = await fetch("https://script.google.com/macros/s/AKfycbzh7AlK-pEwvsWHheLDB46RX-o_wk97foeiE4YqR6Vyt6z2RIzsuqwMjSJyU8NUdrFU/exec", {
              method: "POST",
              body: JSON.stringify(formData), // send as JSON
              headers: { "Content-Type": "application/json" },
            });
            
            // Parsing the JSON response from GAS
            const result = await response.json();

            // Handling the Success case
            if (result.status === "success") {
                //TODO: Define the function `onSuccess` or drop it entirely
                // Notify Parent that submission worked
                // onSuccess?.(); // trigger parent function e.g. show toast/notification
                
                // Resetting all fields
                setValues({
                    formType: values.formType,
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    message: "",
                }); 
            } else {
                // Backend responded but indicated an error
                console.error("Error from server:", result.message);
            }
        } catch (error) {
            // network Error (e.g CORS, server down, no internet)
            console.error("Network error:", error);
        } finally {
            // Clean Up, removal of of loading state regardless of success or failure
            setLoading(false);
        }

    }

    return(
        <form onSubmit={handleSubmit} method='POST'>
            <div className="name">
                <div className="first-name">
                    <label htmlFor="firstName">First Name 
                        {contactIsRequired && <span className='asterisk'>*</span> } 
                    </label> 
                    <input type="text" name='firstName' id='firstName' placeholder='e.g John'
                    required = {contactIsRequired}
                    onChange={handleChange}
                    />
                </div>
            
                <div className="last-name">
                        <label htmlFor="lastName"> Last Name 
                            {contactIsRequired && <span className='asterisk'>*</span> } 
                        </label> 
                        <input type="text" name='lastName' id='lastName' placeholder='e.g Doe'
                        required = {contactIsRequired}
                        onChange={handleChange} 
                        />
                </div>
            </div>

            <div className="contact">
                <div className="phone">
                    <label htmlFor="phone"> Phone Number 
                        {contactIsRequired && <span className='asterisk'>*</span> } 
                    </label> 
                    <input type="tel" name="phone" id='phone' placeholder='e.g 2547xxxxxxxx'
                    required = {contactIsRequired}
                    onChange={handleChange} 
                    />
                </div>    
                <div className="email">
                    <label htmlFor="email"> Email 
                        {contactIsRequired && <span className='asterisk'>*</span> } 
                    </label> 
                    <input type="email" name="email" id='email' placeholder='e.g johndoe@example.com'
                    required = {contactIsRequired}
                    onChange={handleChange} 
                    />
                </div>
            </div>
            
            {hasTextArea &&
                <div className="message">
                    <label htmlFor="message"> { messageLabel } <span className='asterisk'>*</span> </label> <br />
                    <textarea name="message" id="message" rows={6} placeholder={`input your ${formType}`} required
                    onChange={handleChange}></textarea>
                </div>
            }

            <input type="hidden" name="formType" id='formType' value={formType} onChange={handleChange}/>

            <div className="buttons">
                <button type='reset'>Reset</button>
                <button type='submit'> Submit</button> 
            </div>            
        </form>
    )
}