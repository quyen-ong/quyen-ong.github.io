import './App.css';

function App() {
  return (
    <div className="App">

      {/*<h1>Quyen Ong</h1>
        <body><a href="quyenong1@gmail.com">quyenong1@gmail.com</a> | <a href="https://github.com/quyen-ong">GitHub</a> | <a href="https://www.linkedin.com/in/quyen-ong">LinkedIn</a></body>
      */}

      <header className="App-header"> 
      
        <h1>Quyen Ong</h1>
        <body><a href="tel:678-997-4880">678-997-4880</a> | <a href="quyenong1@gmail.com">quyenong1@gmail.com</a> | <a href="https://github.com/quyen-ong">GitHub</a> | <a href="https://www.linkedin.com/in/quyen-ong">LinkedIn</a></body>
      </header> 
      <body>
    <div>
        <h2>Skills</h2>
        <ul>
          <li><b>Web Development:</b> HTML, CSS, Javascript</li>
          <li><b>App Development:</b> Flutter, Android Studio, Dart</li>
          <li><b>Coding Languages:</b> Java, C++, Python, C, Bash, VHDL</li>
          <li><b>Software Programs:</b> Azure DevOps, Synergis Adept, Excel, Docker, Eclipse, VsCode, Visio, PowerPoint</li>
          <li><b>Lab:</b> Soldering,  DE2-115 FPGA board, Keil uVision5, Arduino</li>
        </ul>
    </div>
    <div>
        <h2>Work Experience</h2>
        <div>
          <h3>Electrical Engineer Intern: 5/13/24 - 8/8/24</h3>
          <b><i>Tyonek Native Corporation</i></b>
          <ul>
            <li>Created 37 tests in C code  for connections that weren’t tested yet after checking the wire list</li>
            <li>Corrected {'>'}400 lines of C code with incorrect logic, comments, limits, and instructions</li>
            <li>Leveraged Synergis Adept  to access and update official project documents</li>
            <li>Implemented Azure DevOps to access and compare previous project code</li>
            <li>Utilized Excel to analyze {'>'}1758 wire connections to ensure they are being tested in test programs</li>
          </ul>
        </div>
        <div>
          <h3>Research Assistant: 9/4/23 - 12/6/24</h3>
          <b><i>Mercer University</i></b>
          <ul>
            <li>Design and implement a GPS solution for a weather balloon using Arduino components</li>
            <li>Design a Windows application employing Java in Eclipse for remote EMG data access</li>
            <li>Maintain servers for a supercomputer</li>
            <li>Solder circuit boards</li>
            <li>Capture body motions using Vicon equipment</li>
          </ul>
        </div>
        <div>
          <h3>Software Engineer Intern: 6/5/23 - 1/3/24</h3>
          <b><i>Warner Robins Air Force Base</i></b>
          <ul>
            <li>Resolved {'>'}2100 warnings, bugs, and errors in C code</li>
            <li>Performed {'>'}34  Calibration/Self Tests on VDATS machines (AB-21, DA-1, DA-2, etc.)</li>
            <li>Worked with PATEC machines to perform tests and adjustments on VDATS machines</li>
            <li>Ensured all 374 items on a list  in the lab were accounted for in preparation for an inspection</li>
          </ul>
        </div>
    </div>
    <div>
        <h2>Education</h2>
        <h3>Mercer University (Macon, GA):	December 2024</h3>
        <b>Major: Computer Engineering</b>
        <b>GPA: 3.76</b>
        <b>Completed Courses:</b>
        <ul>
          <li>Application Development & Deployment (using Dart in Flutter)</li>
          <li>Operating Systems (using C++ in a Linux environment)</li>
          <li>Data Structures and Algorithms (using C++ in a Linux environment)</li>
          <li>Digital Design with VHDL (using Quartus)</li>
          <li>Embedded Systems</li>
        </ul>
        <b>Current Courses:</b>
        <ul>
          <li>Computer Architecture</li>
          <li>Engineering Economics</li>
        </ul>
    </div>
    <div>
        <h2>Projects</h2>
        <div>
          <h3>Temporary Immersion Bioreactor (TIB):	1/8/24 - 12/6/24</h3>
          <ul>
            <li>Engineered a robust web application to facilitate remote monitoring of Arduino-controlled TIB, combining HTML, CSS, and JavaScript</li>
            <li>Implemented a system to control the pump of the TIB remotely</li>
            <li>Designed the circuitry of the TIB to utilize a pump, temperature sensor, and gas sensor</li>
          </ul>
        </div>
        <div>
          <h3>EMG Controlled Car:	1/9/23 - 5/1/23</h3>
          <ul>
            <li>Worked with an Arduino, electromyography (EMG) sensor, buzzer, ultrasonic sensor, motor driver, and motors</li>
            <li>Used EMG signals and Arduino code to move  the car according to the EMG signal strength</li>
            <li>Utilized an ultrasonic sensor to stop the car from bumping into anything within 5”</li>
          </ul>
        </div>
        <div>
          <h3>Prosthetic Hand Research:	10/3/21 - 12/15/23</h3>
          <ul>
            <li>Researched and applied EMG signals to a 3D-printed robotic hand</li>
            <li>Built a 3D-printed robotic forearm to control using EMG signals</li>
            <li>Setup and operated Vicon equipment to retrieve hand movement data</li>
          </ul>
        </div>
    </div>
  </body>
    </div>
  );
}

export default App;