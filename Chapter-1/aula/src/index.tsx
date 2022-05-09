import { App } from './App'
import { createRoot } from 'react-dom/client'
import React from 'react'

const container = document.getElementById('root')
if (container === null) throw new Error('Root container missing in index.html')
const root = createRoot(container)
root.render(<React.StrictMode>
  <App/>
</React.StrictMode>)
