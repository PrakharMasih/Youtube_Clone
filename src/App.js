
import { Provider } from 'react-redux';
import './App.css';
import Head from './components/Head';
import MainBody from './components/MainBody';
import store from './utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import VideoContainer from './components/VideoContainer';
import WatchPage from './components/WatchPage';

const appRouter = createBrowserRouter([{
  path:"/",
  element:<MainBody/>,
  children: [
    {
      path:"/",
      element:<VideoContainer/> ,
    },
    {
      path:"watch",
      element: <WatchPage/>
    }
  ]
}])

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
