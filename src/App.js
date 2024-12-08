import './App.css';
import {Gallery} from './components/Gallery/Gallery'
import { Main } from './components/Main/Main';
import { Footer } from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Review from './components/Review/Review';
import logotype from './Logotype.png'; // Импортируйте изображение
import { Quiz } from './components/Quiz/Quiz';
import { Blog } from './components/Blog/Blog';
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <div className="header-left">
            <img src={logotype} alt="Logotype" className="logotype" />
            <Link to="/" className="anomaly-button">ANOM</Link>
          </div>
          <div className="header-right">
            <Link className="menu" to="/login">Регистрация</Link>
            <Link className="menu" to="/review">Отзывы</Link>
            <Link className="menu" to="/quiz">Квиз</Link>
            <Link className="menu" to="/blog">Блог</Link>
            <Link className="menu" to="/gallery">Галерея</Link>
          </div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/review" element={<Review />} />
            <Route path="/quiz" element={<Quiz/>} />
            <Route path="/blog" element={<Blog/>} />
           {/* <Route path="/gallery" element = {<Gallery/>}/>*/}
          </Routes>
        </main>
        <Footer year={new Date().getFullYear()} />
      </div>
    </Router>
  );
}

export default App;
