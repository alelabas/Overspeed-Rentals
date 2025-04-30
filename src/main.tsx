import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'
import React from 'react'
import { LangProvider } from './context/langContext.js'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <LangProvider>
            <App />
    </LangProvider>
)