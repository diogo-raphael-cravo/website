import './App.css';
import photo from './photo.jpg';
import hp from './hp.png';
import tub from './tub.png';
import ufrgs from './ufrgs.png';
import github from './github.svg';
import linkedin from './linkedin.svg';
import solitaire from './solitaire.png';

function App() {
  return (
    <div className='app'>
      <header className='header'>
        <a href='#cv' className='link'>CV</a>
        <a href='#career' className='link'>CAREER</a>
        <a href='#education' className='link'>EDUCATION</a>
        <a href='#projects' className='link'>PROJECTS</a>
      </header>
      <div className='content'>
        <div className='cv'>
          <div id='self' className='panel'>
            <div id='cv' className='card'>
              <div id='name'>
                <img id='avatar' src={photo}/>
                <span>Diogo Raphael Cravo</span>
              </div>
              <span id='description'>I'm a fullstack web developer. My main skills are Typescript, React and NodeJS.</span>
              <a id='download' href='/cv-diogo.pdf' download='cv-diogo-raphael-cravo.pdf'>Download CV</a>
              <div className='icons'>
                <a href='https://github.com/diogo-raphael-cravo'><img className='icon' src={github}/></a>
                <a href='https://www.linkedin.com/in/diogo-cravo/'><img className='icon' src={linkedin}/></a>
              </div>
            </div>
          </div>
          <div className='panel'>
            <div id='career' className='card'>
              <ol>
                <li><img src={hp}/>
                  <div>
                    <span><strong>Software developer</strong></span>
                    <span>HP</span>
                    <span>2015 - present</span>
                  </div>
                </li>
                <li><img src={ufrgs}/>
                  <div>
                    <span><strong>Undergraduate Research</strong></span>
                    <span>UFRGS</span>
                    <span>2018 - 2021</span>
                  </div>
                </li>
              </ol>
            </div>
            <div id='education' className='card'>
              <ol>
                <li><img src={ufrgs}/>
                  <div>
                    <span><strong>Master's degree</strong></span>
                    <span>Computer Science</span>
                    <span>2018 - 2021, UFRGS</span>
                  </div>
                </li>
                <li><img src={tub}/> 
                  <div>
                    <span><strong>Bachelor's degree</strong></span>
                    <span>Computer Science</span>
                    <span>2013 - 2015, TUB</span>
                  </div>
                </li>
                <li><img src={ufrgs}/>
                  <div>
                    <span><strong>Bachelor's degree</strong></span>
                    <span>Computer Science</span>
                    <span>2009 - 2015, UFRGS</span>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div id='projects' className='panel'>
          <div className='card'>
            <div id='projects-accordion'>
              <img style={{ width: '100%', height: '100%' }} src={solitaire}></img>
              <div id='projects-accordion-buttons'>
                <button>Live demo</button>
                <button>Source code</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
