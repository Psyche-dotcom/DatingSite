import React, { useState } from "react";

const IframePage = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleButtonClick = () => {
    setShowIframe(true);
  };
  const handleButtonCloseClick = () => {
    setShowIframe(false);
  };

  return (
    <div>
      <h1>Iframe Page</h1>
      <button onClick={handleButtonClick}>Show Iframe</button>
      <button onClick={handleButtonCloseClick}>Close iframe</button>
      {showIframe && (
        <iframe src="https://www.example.com" width="600" height="400"></iframe>
      )}
    </div>
  );
};

export default IframePage;
