import './styles.css';

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <span>⚠️ {message}</span>
      <button onClick={() => window.location.reload()}>
        Try again
      </button>
    </div>
  );
}

export default ErrorMessage;