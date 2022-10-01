import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MobileProvider } from './context/nav_context';
import { PropertiesProvider } from './context/property_context';
import { FilterProvider } from './context/filter_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PropertiesProvider>
      <FilterProvider>
        <MobileProvider>
            <App />
         </MobileProvider>
      </FilterProvider>
    </PropertiesProvider>
  </React.StrictMode>
);


