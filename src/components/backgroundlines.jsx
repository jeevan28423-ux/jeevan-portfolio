
const LANES = 40;

function randomValue(n) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function lerp(min, max, value) {
  return min + (max - min) * value;
}

function Beam({ index }) {
  const fast = randomValue(index + 91) < 0.3;

  const duration = fast
    ? lerp(2, 4, randomValue(index))
    : lerp(6, 12, randomValue(index));

  const delay = lerp(0, 9, randomValue(index + 13));
  const length = Math.round(
    lerp(25, 65, randomValue(index + 29))
  );

  const opacity = lerp(
    0.2,
    0.65,
    randomValue(index + 71)
  );

  return (
    <div
      className="ab-beam"
      style={{
        '--duration': `${duration.toFixed(2)}s`,
        '--delay': `${delay.toFixed(2)}s`,
        '--length': `${length}px`,
        '--opacity': opacity.toFixed(2),
        animation: 'meteor var(--duration) var(--delay) ease-in-out infinite backwards',
      }}
    >
      <div className="ab-beam-trail" />
    </div>
  );
}

function Background() {
  return (
    <div className="background-beams" aria-hidden="true">
      <div className="beam-glow" />

      {Array.from({ length: LANES }, (_, i) => (
        <div className="beam-lane" key={i}>
          {randomValue(i + 7) < 0.3 && (
            <Beam index={i + 1} />
          )}
        </div>
      ))}
    </div>
  );
}

export default Background;
