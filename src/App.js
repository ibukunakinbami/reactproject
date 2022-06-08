import './App.css';
import Courses from './components/Courses';
import Headers from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// functional component

function App() {
  return (
    <div className="App">
      <Headers />
      <Main />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;
