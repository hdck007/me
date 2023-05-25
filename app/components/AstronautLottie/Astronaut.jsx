'use client';

import Lottie from 'lottie-react';
import astroAnimation from './book-astro-color.json';

const Astronaut = () => (
	<div className=' h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] height-opacity absolute astronaut bottom-0 right-0'>
		<div className='relative w-full h-full'>
			<div className='absolute blur-3xl bottom-0 right-0 rounded-full bg-gradient-radial from-purple-800 to-fuchsia-950 via-pink-900 h-full w-full'></div>
			<Lottie animationData={astroAnimation} loop={true} />
		</div>
	</div>
);


export default Astronaut;