
import '../styles/button.css';

function Button({ text = "Let's Talk", onClick, href, type = 'button', className = '' }) {
  const letters = text.split('');

  const content = (
    <>
      <span className="original">{text}</span>

      <span className="letters" aria-hidden="true">
        {letters.map((letter, index) => (
          <span key={index}>
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`btn-53 ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-53 ${className}`}
    >
      {content}
    </button>
  );
}

export default Button;
