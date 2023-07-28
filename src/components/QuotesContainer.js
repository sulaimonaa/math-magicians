import React, { useState, useEffect } from 'react';
import Quotes from './Quotes';

const QuotesContainer = () => {
  const [quote, setQuote] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const apiKey = 'YXZMbPY39tJuhrRnIYl4Bg==p72O4XZxbMn5OqFK';
      const apiUrl = 'https://api.api-ninjas.com/v1/quotes';

      try {
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json', // Set the Content-Type header if required by the API
          },
        });

        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }

        const data = await response.json();
        setQuote(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message || 'Error fetching the quote.');
        setIsLoading(false);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="quote-container">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {quote.length > 0 && <Quotes quote={quote} />}
    </div>
  );
};

export default QuotesContainer;
