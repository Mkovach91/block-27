const Authenticate = ({ token }) => {

  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  async function handleClick() {
    try { 
      fetch('https://fsa-jwt-practice.herokuapp.com/authenticate', { 
        method: "GET", 
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `${your-token-here}` 
        }
      })
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <div>
            <h2>Authenticate</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <button onClick={handleClick}>Authenticate Token!</button>
    </div>
  );
}

export default Authenticate