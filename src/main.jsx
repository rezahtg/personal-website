/**
 * @copyright 2024 - Reza Reynaldo Hutagaol
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Components and CSS Links
 */
import './index.css';
import 'lenis/dist/lenis.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
