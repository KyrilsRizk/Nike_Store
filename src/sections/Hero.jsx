import { arrowRight } from '../assets/icons'
import { bigShoe1 } from '../assets/images'
import Button from '../components/Button'
import ShoeCard from '../components/ShoeCard'
import { shoes, statistics } from '../constants'
import { useState } from 'react'

const Hero = () => {
	const [bigShoeImg, setBigShoeImg] = useState(bigShoe1)
	return (
		<section
			id='Home'
			className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container '
		>
			<div className='relative xl:w-2/5  flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
				<p className=' text-xl font-montserrat text-coral-red mt-12'>
					Our Summer Collection{' '}
				</p>
				<h1 className=' mt-10 font-palanquin text-8xl max-sm:text=[62px] max-sm:leadding-[82] font-bold'>
					<span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10 '>
						The New Arrival
					</span>
					<br />
					<span className=' text-coral-red inline-block mt-4'>
						K_Daro{' '}
					</span>{' '}
					Shoes
				</h1>
				<p className=' font-montserrat text-slate-gray text-lg leadding-8 mt-6 mb-16 sm:max-w-sm'>
					Discover stylish from K_Daro arrival . quality & compfort
				</p>
				<Button
					label='Shop now'
					iconURL={arrowRight}
				/>
				<div className='flex justify-start items-start flex-wrap w-ful mt-20 gap-16 '>
					{statistics.map((stat) => (
						<div key={stat.label}>
							<p className=' text-4xl font-palanquin font-bold '>
								{stat.value}
							</p>
							<p className=' ledding-7 font-montserrat text-slate-gray '>
								{stat.label}
							</p>
						</div>
					))}
				</div>
			</div>
			<div
				className=' relative flex-1 flex justify-center items-center xl:min-h-screen
     max-xl:py-40 bg-primary '
			>
				<img
					src={bigShoeImg}
					alt='shoe collection'
					width={610}
					height={500}
					className=' object-contain relative z-10'
				/>

				<div className='flex sm:gap-6 gap-4 absolute  -bottom-[5%] sm:left-[20%]  max-sm:px-6'>
					{shoes.map((shoe, index) => (
						<div key={index}>
							<ShoeCard
								imgURL={shoe}
								changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
								bigShoeImg={bigShoeImg}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Hero
