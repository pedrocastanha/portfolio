import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const container = document.getElementById('root');
const app = (
  <StrictMode>
    <App url={window.location.pathname} />
  </StrictMode>
);

// Pages are prerendered at build time; in dev the root starts empty.
if (!document.title) document.title = 'Pedro Castanheira';
if (container.firstElementChild) hydrateRoot(container, app);
else createRoot(container).render(app);
