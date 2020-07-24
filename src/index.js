import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import App from './App.jsx'
import CanvasPortal from './components/canvas/View'

ReactDOM.render(<App/>, document.getElementById('root'));
// ReactDOM.createPortal(<CanvasPortal />, document.getElementById('canvas-portal'));