import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* About Us Section */}
      <div className="text-2xl text-center pt-8 border-t border-gray-200">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row items-center gap-16 px-6 md:px-16">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-lg"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-700 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            ea placeat dolorum recusandae maxime non ipsa, in corporis
            consequatur voluptatum consectetur sunt voluptates numquam
            temporibus earum quo impedit, vitae eveniet.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
            voluptates placeat cum nesciunt dicta nisi accusamus, ipsum eos
            distinctio aliquid ducimus nemo veritatis harum impedit sed amet
            eveniet sit qui.
          </p>
          <b className="text-gray-800 text-lg">Our Mission</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident
            at officia deleniti architecto? Illum libero pariatur reprehenderit,
            soluta animi culpa, est quos delectus nisi, architecto voluptatem
            ratione et necessitatibus quam!
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-xl text-center py-8 bg-gradient-to-b from-white to-gray-100">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20 gap-6 px-6 md:px-16">
        {/* Quality Assurance */}
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-4 bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow">
          <b className="text-lg text-gray-800">Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            dolor, aperiam beatae velit eos laudantium dolore! Natus ex dicta
            cumque, est exercitationem alias quas quos labore adipisci mollitia
            similique provident!
          </p>
        </div>
        {/* Convenience */}
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-4 bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow">
          <b className="text-lg text-gray-800">Convenience</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            dolor, aperiam beatae velit eos laudantium dolore! Natus ex dicta
            cumque, est exercitationem alias quas quos labore adipisci mollitia
            similique provident!
          </p>
        </div>
        {/* Customer Service */}
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-12 flex flex-col gap-4 bg-white shadow-sm rounded-lg hover:shadow-md transition-shadow">
          <b className="text-lg text-gray-800">Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            dolor, aperiam beatae velit eos laudantium dolore! Natus ex dicta
            cumque, est exercitationem alias quas quos labore adipisci mollitia
            similique provident!
          </p>
        </div>
      </div>

      {/* Newsletter Box */}
      <div className="bg-gradient-to-t from-gray-50 to-white py-10">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default About;
