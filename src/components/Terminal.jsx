
import '../styles/terminal.css';

function Terminal() {
  return (
    <div className="terminal-window">
      <div className="terminal-header">
        <div className="terminal-dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>

        <span className="terminal-title">jeevan@developer: ~</span>
      </div>

      <div className="terminal-body">

        <p className="terminal-command">
          <span className="terminal-prompt">&gt;</span>
          <span className="typing first">whoami</span>
        </p>

        <p className="terminal-output name-output">
          Jeevan A. — Full Stack Developer
        </p>

        <p className="terminal-command second-command">
          <span className="terminal-prompt">&gt;</span>
          <span className="typing second">currently_learning</span>
        </p>

        <div className="terminal-success">
          <p>✔ React.js</p>
          <p>✔ Node.js</p>
          <p>✔ Express.js</p>
          <p>✔ MongoDB</p>
        </div>

        <p className="terminal-command third-command">
          <span className="terminal-prompt">&gt;</span>
          <span className="typing third">status</span>
        </p>

        <div className="terminal-status">
          <p>Building projects...</p>
          <p>Learning every day...</p>
          <p>Turning ideas into reality.</p>
        </div>

        <span className="terminal-cursor"></span>

      </div>
    </div>
  );
}

export default Terminal;
