import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import App from './App.jsx'
import './bootstrap.min.css';
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import ContextShare from './ContextAPI/ContextShare.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextShare>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextShare>
  </React.StrictMode>,
)
