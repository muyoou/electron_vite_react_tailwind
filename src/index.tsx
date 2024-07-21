import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <h2 className=' text-blue-500'>React hear</h2>
        </React.StrictMode>
    );
} else {
    console.error('Root element not found');
}
