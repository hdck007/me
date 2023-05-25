import Astronaut from './components/AstronautLottie/Astronaut';

export default function Home() {
	return (
		<main className='min-h-screen items-center justify-center overflow-hidden bg-stone-950'>
			<div className='w-full top-0 left-0 h-screen overflow-hidden absolute opacity-60 blur-xl  bg-gradient-radial from-zinc-800 to-stone-950'></div>
			<div className='w-full absolute top-0 left-0 blur-3xl'>
				<div className='w-full md:w-1/2 mx-auto h-[300px] -translate-y-16 rounded-b-full overflow-hidden opacity-70 blur-3xl bg-gradient-conic from-purple-800 to-fuchsia-950 via-rose-900 '></div>
			</div>
			<nav className='w-full relative py-6 px-4 sm:px-24 mb-12 z-50'>
				<div className='w-full flex items-center sm:w-[700px] mx-auto'>
					<a
						target='_blank'
						href='https://www.linkedin.com/in/haridarshan-choudhary/'
						className='text-2xl pr-1'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							className='hover:opacity-100 opacity-50 fill-white transition-all ease-linear cursor-pointer'
							viewBox='0 0 256 256'
						>
							<rect width='256' height='256' fill='none'></rect>
							<rect
								x='36'
								y='36'
								width='184'
								height='184'
								rx='8'
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='24'
							></rect>
							<line
								x1='124'
								y1='120'
								x2='124'
								y2='176'
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='24'
							></line>
							<line
								x1='84'
								y1='120'
								x2='84'
								y2='176'
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='24'
							></line>
							<path
								d='M124,148a28,28,0,0,1,56,0v28'
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='24'
							></path>
							<circle cx='84' cy='80' r='16'></circle>
						</svg>
					</a>
					<a
						target='_blank'
						href='https://github.com/hdck007'
						className='text-2xl'
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='24'
							height='24'
							className='hover:opacity-100 opacity-50 fill-white transition-all ease-linear cursor-pointer'
							viewBox='0 0 256 256'
						>
							<rect width='256' height='256' fill='none'></rect>
							<path
								d='M84,240a23.9,23.9,0,0,0,24-24V168'
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='24'
							></path>
							<path
								d='M172,240a23.9,23.9,0,0,1-24-24V168'
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='24'
							></path>
							<path
								d='M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24'
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='24'
							></path>
							<path
								d='M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24'
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='24'
							></path>
							<path
								d='M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z'
								fill='none'
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='24'
							></path>
						</svg>
					</a>
				</div>
			</nav>
			<div className='w-full relative'>
				<div className='px-4 sm:px-24 w-full mb-10'>
					<div className='text-center relative'>
						<h1 className='text-3xl text-white font-bold'>
							Haridarshan Choudhary
						</h1>
						<p className=' mt-4 text-base hover:bg-clip-text hover:bg-gradient-to-r text-gray-200 '>
							Fullstack Developer
						</p>
					</div>
					<div className=' mx-auto mt-16 text-white w-full lg:w-[700px] md:w-[580px]'>
						<p className='my-10'>
							From aspiring{' '}
							<span className=' bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-fuchsia-600 via-rose-500  '>
								astronaut to orbiting code wizard
							</span>
							, I navigate the celestial realm of software development with{' '}
							<span className='text-shadows text-emerald-400'>
								cosmic curiosity
							</span>{' '}
							and{' '}
							<span className='animate-text-shimmer bg-[linear-gradient(110deg,#0ea5e9,45%,#0e0e0e,55%,#0ea5e9)] bg-[length:250%_100%] inline-block bg-clip-text text-transparent'>
								stellar solutions.
							</span>
						</p>
						<p>
							Working at{' '}
							<span className='wave'>
								<a href='https://tealfeed.com/' target='_blank'>
									Tealfeed
								</a>
							</span>
						</p>
					</div>
				</div>
			</div>

			<Astronaut />
		</main>
	);
}
