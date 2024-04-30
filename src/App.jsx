import { Provider } from 'react-redux';
import store from './store';
import { RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import appRouter from './core/navigation/approuter';
import './core/uikit/GlobalStyleSheets/GlobalStyleSheets.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
