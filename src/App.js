import './App.css';
import './App.scss';
import Carousel from './Carousel';
import Catalog from './Catalog';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <section className='overflow-hidden main-container mx-auto'>
        <div className='max-w-5xl 2xl:max-w-6xl mx-auto'>
          <Navbar />
          <Carousel />
          <Catalog />
        </div>
      </section>
    </div>
  );
}

export default App;
