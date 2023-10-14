import React from 'react'
import Slider from 'react-slick';

const SliderComp = () => {
  const settings = {
    //dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Slider {...settings}>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur atque veniam fugit! Blanditiis sed deleniti perferendis quidem atque quas, iusto accusamus et ducimus suscipit? Vero assumenda maxime facilis optio?</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
          </div>
          <img width={300} height={300} src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4621066a-6e19-49e5-a2d7-4e7e5eade298/air-force-1-shadow-ayakkab%C4%B1s%C4%B1-lW4FDD.png" alt="Ayakkabı Resmi" />
        </div>
        <div className='!flex items-center bg-gray-100 px-6'>
          <div>
            <div className='text-6xl font-bold'>En Kaliteli Ayakkabılar Burada</div>
            <div className='text-lg my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur atque veniam fugit! Blanditiis sed deleniti perferendis quidem atque quas, iusto accusamus et ducimus suscipit? Vero assumenda maxime facilis optio?</div>
            <div className='border rounded-full cursor-pointer text-2xl w-[200px] h-16 flex items-center justify-center bg-gray-200'>İncele</div>
          </div>
          <img width={300} height={300} src='https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/57558712-5ebe-4abb-9984-879f9e896b4c/air-force-1-07-easyon-ayakkab%C4%B1s%C4%B1-snmJ3T.png' alt="Ayakkabı Resmi" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComp
