import '../styles/swap-text-card.css';

function SwapTextCard({ initialText, finalText }) {
  return (
    <div className="swap-card">
      <p className="swap-card-label">
        A LITTLE MORE ABOUT ME
      </p>

      <div className="swap-card-content">
        <p className="swap-card-initial">
          {initialText}
        </p>

        <p className="swap-card-final">
          {finalText}
        </p>
      </div>

      <p className="swap-card-label">
        HOVER TO EXPLORE ↗
      </p>
    </div>
  );
}

export default SwapTextCard;