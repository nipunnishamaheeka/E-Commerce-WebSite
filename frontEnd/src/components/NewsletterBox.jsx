import React from "react";

function NewsletterBox() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center py-8">
      <p className="text-2xl font-semibold text-gray-900">
        <strong>Subscribe now & get 20% off</strong>
      </p>
      <p className="text-gray-500 mt-2">
        Stay updated with our latest news and promotions.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
      >
        <div className="relative w-full sm:w-2/3">
          <input
            className="block w-full p-3 rounded-lg border border-gray-300 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white font-medium text-sm px-5 py-3 rounded-lg shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default NewsletterBox;
