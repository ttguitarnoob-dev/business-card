import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://media.licdn.com/dms/image/C5603AQECCn5SY0JTCQ/profile-displayphoto-shrink_800_800/0/1641315542431?e=1721865600&v=beta&t=Im2XxopP5q2hiMJkF8Fl6CvnrBEnyanzRL6VZ9M8a4A" className="App-logo" alt="logo" />
        <h1>Travis Thompson</h1>
        <p>
          React Developer/IT Generalist
        </p>
        <div className='contact'>
          <a className='contact' target='_blank' href='tel:7376665284'>Phone</a>
          <a className='contact' target='_blank' href='mailto:travisthompsondev@gmail.com'>Email</a>
        </div>
        <a
          className="App-link"
          href="https://portfolio.travisty-creations.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/travisthompsondev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </header>
    </div>
  );
}

export default App;
