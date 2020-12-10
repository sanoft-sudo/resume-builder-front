import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router} from "react-router-dom";

import './i18nextConfig'

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Suspense fallback={(<div>Loding...</div>)}>
      <Router>
        <div className="container">
          <App />
        </div>
      </Router>
  </Suspense>,
    
  rootElement
  
);

