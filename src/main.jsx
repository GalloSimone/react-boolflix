import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/index.css"
import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/index.css";
import * as bootstrap from "bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'; 
import { fab } from '@fortawesome/free-brands-svg-icons'; 
import { far } from '@fortawesome/free-regular-svg-icons';
import { GlobalContextProvider } from './contexts/GlobalContext.jsx';
library.add(fas, fab, far);

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <GlobalContextProvider>
    <App />
    </GlobalContextProvider>
  </StrictMode>,
)
