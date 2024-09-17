import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (
  <a href="https://google.com" target='_blank'>Click on me to go google</a>
)
// const reactElement = React.createElement(
//   'a',
//   {
//     href : "https://google.com",
//     target : _blank
//   },
//   "Click on me Bankai"
// )
createRoot(document.getElementById('root')).render(  
  // anotherElement
  <App />
)
