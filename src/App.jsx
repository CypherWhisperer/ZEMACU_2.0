import './App.css'
import './variables.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Pages 
import { Landing, Home, Leaders, Weekly, Resources, Support } from './pages/pages.js'
// components
import { Nav } from './components/components.js'

export default function App() {
  // State Management 
  const [expanded, setExpanded] = useState(false)

  // set CSS variable to reference the responsive variables defined in ./variables.css (sidebar-w)
  const style = {
    // React accepts CSS custom properties as string keys, like 'sidebar-w' 
    // Leveraging the responsive variables defined in variables.css
    // inlining sidebar-w makeds a single source of truth set by React state
    // Leveraging --sidebar_width,--sidebar_expanded_width (responsive via media queries) so React doesn't need window checks
    '--sidebar-w' : expanded ? 'var(--sidebar_expand_width)' : 'var(--sidebar_width)'
  }
  return (
    <div className="app-container" style={style}> 
      <Nav expanded={expanded} toggle={() => setExpanded(e => !e)}/>
      <main className="page-content" role="main">
        <Routes>
          <Route path="/" element={<Landing />} /> 
          <Route path="/home" element={<Home />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/weekly" element={<Weekly />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
    </div>
  )
}
