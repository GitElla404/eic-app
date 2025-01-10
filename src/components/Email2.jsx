import React, { useState } from 'react';

const Email2 = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(""); 
    setMessageVisible(false);

    try {
      const response = await fetch("https://assets.mailerlite.com/jsonp/1246098/forms/142953895734282178/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Thank you for signing up, ${email}! An email has been sent.`);
      } else {
        setMessage(data.detail || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Error: Unable to send email. Please try again later.");
    }

    setLoading(false);
    setEmail(""); 

    setMessageVisible(true);
    setTimeout(() => {
      setMessageVisible(false); // Hide message after 3 seconds
    }, 3000);
  };

  return (
    <div className="bg-background py-4">
      {messageVisible && message && (
        <div className="flex items-center justify-center">
          <div className="mt-4 text-center w-[50%] text-secondarytxt p-4 bg-secondary rounded-md shadow-md">
            <p className="text-sm">{message}</p>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex justify-center shadow-lg border-none rounded-lg items-center mt-4 px-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="p-3 rounded-l-lg text-sm text-primarytxt w-80 focus:outline-none md:p-4 md:text-lg"
        />
        <button
          type="submit"
          className="bg-secondary text-white px-4 py-3 w-[40%] rounded-r-lg text-xs font-semibold hover:bg-accent-dark focus:outline-none md:py-3.5 md:px-5 md:w-[30%] md:text-lg"
        >
          {loading ? "Signing..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Email2;
