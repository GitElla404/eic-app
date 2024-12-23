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
      const response = await fetch("http://localhost:8000/user/", {
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
      <div className="mt-4 text-center text-gray-700 p-4 bg-green-100 rounded-md shadow-md">
        <p className='text-sm md:text-base'>{message}</p>
      </div>
    )}
    <form onSubmit={handleSubmit} className="flex justify-center shadow-md shadow-black border-none rounded-lg items-center mt-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="p-2.5 rounded-l-lg text-sm text-gray-800 w-80 focus:outline-none focus:ring-2 md:p-3 md:text-lg"
      />
      <button
        type="submit"
        className="bg-indigo-600 text-white px-2 py-3 w-[40%] rounded-r-lg text-xs font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 md:py-3.5 md:px-3 md:w-[30%] md:text-lg"
      >
        {loading ? "Signing..." : "Sign Up"}
      </button>
      
    </form>
    </div>
  );
};

export default Email2;
