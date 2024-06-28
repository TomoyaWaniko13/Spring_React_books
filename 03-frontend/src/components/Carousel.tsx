import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';

const Carousel = () => {
  const slides = [
    { url: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Felis_catus-cat_on_snow.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Gato_enervado_pola_presencia_dun_can.jpg' },
    { url: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Black_Cat_%287983739954%29.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={'bg-black text-white py-12 px-4 w-full flex flex-col'}>
      <h3 className={'text-center font-bold font-mono text-5xl pb-10'}>
        find your next "I stayed up too late reading" book.
      </h3>
      <div className={'w-full max-w-[1400px] h-[780px] m-auto relative group'}>
        {/*TODO make this image responsive when the screen gets smaller*/}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url}` }}
          className={'w-full h-full rounded-2xl bg-cover duration-300'}
        ></div>
        <div
          className={
            'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
          }
          onClick={prevSlide}
        >
          <FaChevronLeft size={30} />
        </div>
        <div
          className={
            'hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
          }
          onClick={nextSlide}
        >
          <FaChevronRight size={30} />
        </div>
        <div className={'flex top-4 justify-center py-2'}>
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className={'text-2xl cursor-pointer'}>
              <RxDotFilled size={20} />
            </div>
          ))}
        </div>
      </div>
      <div className={'flex justify-center space-x-4 pt-14'}>
        <button className={'bg-white text-black p-3 rounded'}>reserve</button>
        <button className={'bg-white text-black p-3 rounded'}>view more</button>
      </div>
    </div>
  );
};

export default Carousel;
