
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">
        <a href="#home" className="footer-logo">
          Jeevan<span>.A</span>
        </a>

        <p>Designed & built by Jeevan.</p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Jeevan.A</p>

        <p>Built with React & Motion</p>
      </div>

    </footer>
  );
}

export default Footer;
