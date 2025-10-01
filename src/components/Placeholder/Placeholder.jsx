import './Placeholder.css'

import { useNavigate, useParams, useLocation } from 'react-router-dom'

export default function Placeholder({ formsData }){
    // This component reads :formId, looks up the entry in formsData, computes the src for the iframe and renders.
    //  It uses location.state.from (if present) to go back to the originating route — otherwise it falls back to safe alternatives.
    
    const { formId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    // Validate / Whitelist the id
    const config = formsData?.[formId]
    // Build src (prefer explicit link)
    const src =
      config?.link ??
      (config?.formID
        ? `https://docs.google.com/forms/d/e/${config.formID}/viewform?embedded=true`
        : null);

    function handleClose(){
        // prefer explicit from path if provided by the navigator
        if (location.state && location.state.from) {
            navigate(location.state.from);
            return;
        }

        // otherwise try go back one entry (if user actually has history)
        //NOTE: navigate(-1) might leave the SPA if user arrived directly. So provide safe fallback.
        try {
            navigate(-1)
        } catch {
            navigate('/', { replace: true })
        }
    }

    if (!config || !src) {
      return (
        <div style={{ padding: 20 }}>
            <p>Form not found.</p>
            <button onClick={() => navigate('/')}>Go home</button>
        </div>
      )
    }

    return(
        <>
          <div className="placeholder-page">
            <div className="placeholder-header">
                <button type="button" onClick={handleClose}>← Back</button>
                <h2>{formId.replace(/_/g, ' ')}</h2>
            </div>

            <div className="form-container">
              <iframe
                    src={src}
                    width="100%"
                    height="700"
                    frameBorder="0"
                    marginHeight="0"
                    marginWidth="0"
                    title={formId}
              >
                    Loading…
              </iframe>
            </div>
          </div>
        </>
    )
}