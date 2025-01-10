import { div } from 'motion/react-m';
import React, { useState } from 'react';

const Email = () => {
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
    <div>
      {messageVisible && message && (
        <div className="flex items-center justify-center">
          <div className="mt-4 text-center w-[50%] text-secondarytxt p-4 bg-secondary rounded-md shadow-md mx-auto">
            <p className="text-sm">{message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex justify-center items-center mt-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="p-2.5 rounded-l-lg text-sm text-primarytxt w-80 focus:outline-none md:p-3 md:text-lg"
        />
        <button
          type="submit"
          className="bg-secondary text-white px-2 py-3 w-[40%] rounded-r-lg text-xs font-semibold hover:bg-primary-dark focus:outline-none md:px-7 md:py-3 md:text-lg md:w-auto"
        >
          {loading ? "Signing..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default Email;
