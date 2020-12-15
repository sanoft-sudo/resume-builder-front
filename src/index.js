import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider} from "react-redux";
import { BrowserRouter as Router} from "react-router-dom";

import './i18nextConfig'
import store from './stores/store';

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Suspense fallback={(<div>Loding...</div>)}>
      <Provider store={store}>
        <Router>
          <div className="container-fluid container-lg">
            <App />
          </div>
      </Router>
      </Provider>
      
  </Suspense>,
    
  rootElement
  
);

