import { useState } from 'react';
import './App.css';
import Main from './components/Main';
import QuizPage from './components/QuizPage';

function App() {

  const [page, setPage] = useState('main')

  function changePage(display) {
    setPage(display)
  }

  return (
    <div className="App">
      {page === 'main' && <Main onClick={changePage}/>}
      {page === 'quiz' && <QuizPage />}
    </div>
  );
}

export default App;
