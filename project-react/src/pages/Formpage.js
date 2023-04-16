import React, { useState } from "react";
import { useLocation } from "react-router-dom";
function FormPage() {
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const location = useLocation();
  const selectedItem = location.state?.item;
  const isFormValid = fullName !== "" && mobileNumber !== "" && message !== "";

  function handleSubmit(event) {
    event.preventDefault();
    setIsFormSubmitted(true);
  }

  function handleReset() {
    setFullName("");
    setMobileNumber("");
    setMessage("");
    setIsFormSubmitted(false);
  }

  return (
    <>
      {selectedItem && (
        <h2 className="header-new">Boka besök för {selectedItem.name}</h2>
      )}
      <div>
        {isFormSubmitted ? (
          <div>
            <p className="check">
              Tack {fullName}, din förfrågan är nu skickad! Vi hör av oss till
              dig inom ett par dagar.
            </p>

            <button className="new-btn inp" onClick={handleReset}>
              Skicka en ny förfrågan
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form">
            <input
              className="inp"
              type="text"
              placeholder="Fullständigt namn"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              className="inp"
              type="number"
              placeholder="Mobilnummer"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <br />
            <textarea
              className="inp"
              placeholder="Berätta lite om dig själv och din levnadssituation"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <br />
            <button className="inp" type="submit" disabled={!isFormValid}>
              {isFormValid ? "Skicka förfrågan" : "Fyll i formuläret"}
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default FormPage;
