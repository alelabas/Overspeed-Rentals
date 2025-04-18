import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import React from 'react'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <App />
)