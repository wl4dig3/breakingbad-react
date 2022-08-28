import React from 'react'
import ReactDOM from 'react-dom/client'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FormWithCustomHook } from './02-useEfect/FormWithCutomHook'
// import { SimpleForm } from './02-useEfect/SimpleForm'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { HookApp } from './HookApp'
// import { CounterApp } from './01-useState/CounterApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <MultipleCustomHook />
  // </React.StrictMode>
)
