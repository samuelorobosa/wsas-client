import { Provider } from 'react-redux'
import store from './store';
import { RouterProvider } from 'react-router-dom';
import appRouter from './core/navigation/approuter';
import './core/uikit/GlobalStyleSheets/GlobalStyleSheets.css';

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App
