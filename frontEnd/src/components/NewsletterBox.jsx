import React from "react";

function NewsletterBox() {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        <strong> Subscribe now & get 20% off</strong>
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        nisi quibusdam facere? Aliquam dolores, suscipit consectetur similique
        veniam necessitatibus rem dolorum laborum inventore minima repellat
        veritatis molestiae! Ipsa, sed vel?
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        action=""
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          {" "}
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsletterBox;