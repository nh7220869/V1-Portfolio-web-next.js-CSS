import Link from 'next/link';
import Image from 'next/image';
import './project.css'; // Import your styles

const Project = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>My Projects</h1>
      </div>

      {/* Project containers */}
      <div className="grid">
        
        {/* Project 1: Number Game */}
        <div className="project-card">
          <h2>Number Game</h2>
          <img src="/game.png" alt="Number Game" />
          <div className="project-link">
            <a href="https://updatednumbergame.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

        {/* Project 2: Word Counter */}
        <div className="project-card">
          <h2>Word Counter</h2>
          <img src="/wordcounter.png" alt="Word Counter" />
          <div className="project-link">
            <a href="https://counterword.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

        {/* Project 3: Quiz */}
        <div className="project-card">
          <h2>Quiz</h2>
          <img src="/quize.png" alt="Quiz" />
          <div className="project-link">
            <a href="https://updated-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

        {/* Project 4: Calculator */}
        <div className="project-card">
          <h2>Calculator</h2>
          <img src="/calcu.png" alt="Calculator" />
          <div className="project-link">
            <a href="https://calculator-lyart-eta.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

        {/* Project 5: Currency Converter */}
        <div className="project-card">
          <h2>Currency Converter</h2>
          <img src="/currency.png" alt="Currency Converter" />
          <div className="project-link">
            <a href="https://currencyconverter-teal.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

        {/* Project 6: ATM Machine */}
        <div className="project-card">
          <h2>ATM Machine</h2>
          <img src="/ATM.png" alt="ATM Machine" />
          <div className="project-link">
            <a href="https://atmmeachain.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

        {/* Project 7: My Bank */}
        <div className="project-card">
          <h2>MY BANK</h2>
          <img src="/bank.png" alt="My Bank" />
          <div className="project-link">
            <a href="https://mybank-three.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

        {/* Project 8: To-Do List */}
        <div className="project-card">
          <h2>To-Do List</h2>
          <img src="/todo.png" alt="To-Do List" />
          <div className="project-link">
            <a href="https://todo-list-alpha-one-82.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

        {/* Project 9: Student Management */}
        <div className="project-card">
          <h2>Student Management</h2>
          <img src="/mng.png" alt="Student Management" />
          <div className="project-link">
            <a href="https://studentma.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

        {/* Project 10: Countdown Timer */}
        <div className="project-card">
          <h2>Countdown Timer</h2>
          <img src="/count.png" alt="Countdown Timer" />
          <div className="project-link">
            <a href="https://countdowntimer-taupe.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

        {/* Project 11: Resume Builder */}
        <div className="project-card">
          <h2>Resume Builder</h2>
          <img src="/pdfresume.png" alt="Resume Builder" />
          <div className="project-link">
            <a href="https://pdf-downloader-resume.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        </div>

        {/* Project 12: My Resume */}
        <div className="project-card">
          <h2>My Resume</h2>
          <img src="/resume.png" alt="My Resume" />
          <div className="project-link">
            <a href="https://resume-six-rose.vercel.app/" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>

        </div>
          {/* Project 13: My website */}
          <div className="project-card">
          <h2>1 page website using Next.js</h2>
          <img src="/web.PNG" alt="My Resume" />
          <div className="project-link">
            <a href="https://nextjs1website.vercel.app//" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>

          
      </div>

      </div>
    </div>
  );
};

export default Project;
