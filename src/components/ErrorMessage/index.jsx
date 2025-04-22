import './styles.css';

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <span>⚠️ {message}</span>
      <button 
        onClick={() => window.location.reload()}
        className="error-button"
      >
        Try again
      </button>
    </div>
  );
}

export default ErrorMessage;