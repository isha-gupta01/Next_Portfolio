"use client"
import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDownU from '@/assets/icons/arrow-down.svg'
import Image from 'next/image'
import grainImage from "@/assets/images/grain.jpg"
import StarIcon from "@/assets/icons/star.svg"
import { HeroOrbit } from '@/components/HeroOrbit'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import Link from 'next/link'



export const HeroSection = () => {
    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
    return (
        <div className='py-32 md:py-48 lg:py-60 relative z-50  overflow-x-clip'>
            <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]'>
                {/* grain Pattern ring */}
                <div className="absolute inset-0 -z-30 opacity-5 pointer-events-none" style={{ backgroundImage: `url(${grainImage.src})`, }}></div>
                <div className="size-[620px] hero-ring"></div>
                <div className="size-[820px] hero-ring"></div>
                <div className="size-[1020px] hero-ring"></div>
                <div className="size-[1220px] hero-ring"></div>
                {/* Star positioning  */}
                <HeroOrbit size={430} rotate={-14} shouldOrbit orbitDuration={30} shouldSpin spinDuration={3}>
                    <SparkleIcon className="size-8 text-emerald-300/20 " />
                </HeroOrbit>
                <HeroOrbit size={440} rotate={79} shouldOrbit orbitDuration={32} shouldSpin spinDuration={3}>
                    <SparkleIcon className="size-5 text-emerald-300/20 " />
                </HeroOrbit>
                <HeroOrbit size={520} rotate={-41}shouldOrbit orbitDuration={34} shouldSpin spinDuration={3}>
                    <SparkleIcon className="size-2 text-emerald-300/20 " />
                </HeroOrbit>
                <HeroOrbit size={530} rotate={178}shouldOrbit orbitDuration={36} shouldSpin spinDuration={3}>
                    <SparkleIcon className="size-10 text-emerald-300/20 " />
                </HeroOrbit>
                <HeroOrbit size={540} rotate={35}shouldOrbit orbitDuration={46} shouldSpin spinDuration={3}>
                    <SparkleIcon className="size-3 text-emerald-300/20 " />
                </HeroOrbit>
                <HeroOrbit size={550} rotate={20}shouldOrbit orbitDuration={38} shouldSpin spinDuration={6}>
                    <StarIcon className="size-12 text-emerald-300 " />
                </HeroOrbit>
                <HeroOrbit size={590} rotate={98}shouldOrbit orbitDuration={40} shouldSpin spinDuration={6}>
                    <StarIcon className="size-8 text-emerald-300 " />
                </HeroOrbit>
                <HeroOrbit size={650} rotate={-5}shouldOrbit orbitDuration={42} shouldSpin spinDuration={3}>
                    <SparkleIcon className="size-2 text-emerald-300/20 " />
                </HeroOrbit>
                <HeroOrbit size={690} rotate={142}shouldOrbit orbitDuration={46} shouldSpin spinDuration={3}>
                    <SparkleIcon className="size-3 text-emerald-300/20 " />
                </HeroOrbit>
                <HeroOrbit size={710} rotate={144}shouldOrbit orbitDuration={44} shouldSpin spinDuration={3}>
                    <SparkleIcon className="size-14 text-emerald-300/20 " />
                </HeroOrbit>
                <HeroOrbit size={720} rotate={85}shouldOrbit orbitDuration={46} shouldSpin spinDuration={3}>
                    <SparkleIcon className="size-3 text-emerald-300/20 " />
                </HeroOrbit>
                <HeroOrbit size={800} rotate={-72}shouldOrbit orbitDuration={48} shouldSpin spinDuration={6}>
                    <StarIcon className="size-28 text-emerald-300 " />
                </HeroOrbit>
            </div>
            {/* container for contents */}
            <div className="container">
                <div className='flex flex-col items-center'>
                    <Image src={memojiImage} alt='person peeking from behind laptop' width={100} height={100} />
                    <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
                        <div className='bg-green-500 size-2.5 rounded-full relative'>
                            <div className='bg-green-500 absolute inset-0 rounded-full animate-ping-large'></div>
                        </div>
                        <div className='text-sm font-medium font-doto'>Available for new projects</div>
                    </div>
                </div>
                <div className='max-w-lg mx-auto'>

                    <h1 className=' text-3xl text-center mt-8 tracking-wide md:text-5xl font-sans'>Building Exceptional User Experiences</h1>
                    <p className='mt-4  text-center text-white/60 md:text-lg font-doto'>
                        I specialize in transforming designs into functional, high-performing web applications. Let's discuss your next project.
                    </p>
                </div>
                <div className='flex flex-col items-center z-50  mt-8 gap-4 md:flex-row justify-center'>
                    <Link href="#projects"  className='inline-flex z-50 cursor-pointer  items-center gap-2 border border-white/15 px-6 h-12 rounded-xl '>
                        <span className='font-semibold'>Explore My Work</span>
                        <ArrowDownU className="size-4" />
                    </Link>
                    <Link href="#contact" className='inline-flex items-center z-50   gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl '>
                        <span>👋</span>
                        <span className='font-semibold'>Let's Connect</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

