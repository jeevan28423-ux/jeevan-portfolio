import '../styles/ambient-background.css';

function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-glow ambient-glow-one"></div>
      <div className="ambient-glow ambient-glow-two"></div>
      <div className="ambient-glow ambient-glow-three"></div>
    </div>
  );
}

export default AmbientBackground;