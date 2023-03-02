import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

import './App.css';
import './App.scss';
import MovieDetails from './MovieDetails';
import RootLayout from './RootLayout';
import Home from './Home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="movie-details" element={<MovieDetails />} />
    </Route>
  )
)

function App() {
  return (
    <div className="App">
      <section className='overflow-hidden main-container mx-auto'>
        <div className='max-w-5xl 2xl:max-w-6xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </section>
    </div>
  );
}

export default App;
