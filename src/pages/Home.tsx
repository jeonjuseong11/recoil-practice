import React from 'react';
import Slider from '../components/Slider';
import BookList from '../components/Book/BookList';
// import { BsSearch } from 'react-icons/bs';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col m-auto">
      <Slider />
      <div className="w-9/12 my-8 m-auto">
        <h1 className="text-center mb-10">타임 세일</h1>
        <BookList />
      </div>
    </div>
  );
};

export default Home;
