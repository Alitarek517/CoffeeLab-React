import LandingImage from '../images/Coffee.webp';
import { useState , useEffect } from 'react';
function Landing() {
  
  const textArray = [
    'Welcome to Coffee Lab!',
    'At Coffee Lab, we believe that every cup tells a story.',
    'Ready to join us?'
  ];
  
  const [currentText, setCurrentText] = useState(0);

  const goNext = () => {
    setCurrentText((prevText) => (prevText + 1) % textArray.length);
  };

  const handlePaginationClick = (index) => {
    setCurrentText(index);
  };

  useEffect( () =>{
    const interval = setInterval(() => {
      goNext();
    }, 5000);
    return () => clearInterval(interval);
  })

  return (
    <div className='relative h-[500px] w-full'>

      <img src={LandingImage} alt='Coffee Lab' className=' w-full object-cover' />

      <div className='absolute left-[50px] top-[20%] max-w-[50%]'>
        <p className='px-[20px] text-white text-6xl'>
          {textArray[currentText]}
        </p>   
      </div>

      <div className='absolute space-x-[10px] left-[15%] bottom-[20%]'>
        {textArray.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${currentText === index ? 'bg-white' : 'bg-gray-500'}`}
            onClick={() => handlePaginationClick(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Landing;
