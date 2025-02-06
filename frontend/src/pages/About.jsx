import React from 'react';
import Title from '../components/Title';
import assets from '../assets/frontend_assets/assets';

const About = () => {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-10 bg-gray-50 text-gray-900">
      <div className="text-center py-8 border-t border-gray-300">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16 items-center">
        <img className='w-full md:max-w-[450px] rounded-lg shadow-md' src={assets.about_img} alt="About Us" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-lg leading-relaxed">
          <p>Forever born out of a passion for innovation and desire to revolutionize. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis harum dolorum aliquid numquam cupiditate. Iusto recusandae quidem, laborum reprehenderit aliquid qui natus eos ratione ipsum eveniet maxime possimus optio deleniti.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi adipisci earum, molestias est quo ipsum explicabo? Quam placeat soluta, modi possimus veniam sint, perspiciatis distinctio sed exercitationem ea voluptate hic.</p>
          <b className='text-blue-800 text-xl'>Our Mission</b>
          <p>Our Mission forever is to empower our customers with choice, convenience, innovation, and knowledge. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ipsam facere adipisci corporis deleniti quidem repudiandae ipsum ut suscipit, at fugiat cumque ducimus consequuntur. Dolorum earum eveniet ex reprehenderit rem?</p>
        </div>
      </div>
      <div className="text-center text-2xl font-semibold py-6 border-t border-gray-300">
        <Title text1={"WHY"} text2={'CHOOSE US'} />
      </div>
      <div className="flex flex-col md:flex-row text-base gap-8 mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-10 sm:py-20 flex flex-col gap-5 bg-white shadow-md rounded-lg">
          <b className='text-lg'>Assurance</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent standards. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae recusandae sunt officiis. Inventore non delectus nostrum atque natus officia odit saepe porro repudiandae excepturi, voluptatem voluptate expedita quae rerum animi!</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-10 sm:py-20 flex flex-col gap-5 bg-white shadow-md rounded-lg">
          <b className='text-lg'>Convenience</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent standards, making your experience seamless and hassle-free.</p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-10 sm:py-20 flex flex-col gap-5 bg-white shadow-md rounded-lg">
          <b className='text-lg'>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you every step of the way, ensuring efficient and quality service for our valued clients.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
