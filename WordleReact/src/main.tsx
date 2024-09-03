
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { WordleProvider } from './context/WordleContext.tsx'

createRoot(document.getElementById('root')!).render(
  <WordleProvider>
    <App />,
  </WordleProvider>
)
