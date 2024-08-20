import ReactDOM from 'react-dom/client'
import App from './App'

function A({name}) {
  return <h1>Hi dear {name}</h1>
}

ReactDOM.createRoot(document.getElementById('root')).render(
<App />
)
