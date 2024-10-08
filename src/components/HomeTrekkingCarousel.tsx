/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from 'react'
import Carousel, { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './Carousel'
import Image from 'next/image'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { gsap } from 'lib/gsap'

const HomeTrekkingCarousel = () => {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  useGSAP(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      }, {
      translateX: "-100vw",
      ease: "none",
      duration: 1,
      scrollTrigger: {
        trigger: triggerRef.current,
        start: "top top",
        end: "2000 top",
        scrub: 0.6,
        pin: true,
        // Disable on small screens
        invalidateOnRefresh: true,
        onUpdate: ({ progress }) => {
          if (window.innerWidth < 768) {
            gsap.set(sectionRef.current, { translateX: `${-progress * 100}vw` });
          }
        },
      },
    }
    )
    return () => {
      pin.kill();
    }
  }, [])

  return (
    <div className='overflow-hidden my-16 lg:my-20'>
      <div ref={triggerRef}>

        <div ref={sectionRef} className='flex flex-row w-[200vw] relative h-screen'>

          <div className='w-screen min-h-[80vh] md:h-screen relative'>
            <div className='z-20 absolute top-1/2 p-4 max-w-4xl left-[5%] -translate-y-1/2'>
              <h3 className='text-white text-4xl md:text-6xl'>Mount Kilimanjaro</h3>
              <p className='text-[#f5f1eb] text-sm md:text-base'>
                Conquer the iconic Mount Kilimanjaro, the highest peak in Africa with Tazama Africa Safaris. Whether you're an experienced climber or a first-time trekker, this journey promises unforgettable memories and unparalleled views. Ready to take on the challenge? Explore our Kilimanjaro expeditions and start planning your ascent today!
              </p>
              <br />
              <Link href='safaris/kilimanjaro' className="border border-white rounded-md px-4 lg:px-6 py-2 mt-4 md:text-lg text-xl font-raleway text-white hover:bg-white/90 hover:text-primary transition-colors duration-200">
                See More
              </Link>
            </div>
            <Image
              layout='fill'
              className='object-cover brightness-50'
              src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1724412906/home/harshil-gudka--2qN2QQwT8s-unsplash_sjlhig.jpg'
              alt='Mount Meru'
            />
          </div>

          <div className='w-screen min-h-[80vh] md:h-screen relative'>
            <div className='z-20 absolute top-1/2 p-4 max-w-4xl left-[5%] -translate-y-1/2'>
              <h3 className='text-white text-4xl md:text-6xl'>Mount Meru</h3>
              <p className='text-[#f5f1eb] text-sm md:text-base'>
                Discover the hidden gem of Tanzania with a trek to Mount Meru, the perfect introduction to the region's majestic peaks.  This climb is ideal for those seeking a less-traveled path with equally rewarding scenery. Ready to explore the beauty of Mount Meru? Learn more about our guided treks and begin your adventure now!
              </p>
              <br />
              <Link href='safaris/mount-meru' className="border border-white rounded-md px-4 lg:px-6 py-2 mt-4 md:text-lg text-xl font-raleway text-white hover:bg-white/90 hover:text-primary transition-colors duration-200">
                See More
              </Link>
            </div>
            <Image
              layout='fill'
              className='object-cover brightness-75'
              src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1724408229/home/20111101_meru-1044-edit_custom-d148e1f741740cd0ce864e2790f37948955e2859_grzpjx.webp'
              alt='Mount Meru'
            />
          </div>

        </div>

      </div>
    </div>
  )
}

export default HomeTrekkingCarousel
