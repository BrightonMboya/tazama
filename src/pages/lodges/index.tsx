import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContentSection from '~/components/ContentSection'
import PrimaryHeader from '~/components/PrimaryHeader'
import { Tab, Tabs } from '~/components/Tabs'
import { lodges } from '~/data/lodges'

const Page = () => {

    const content = [
        {
            title: "Rest in our exclusive safari lodges in the heart of nature",
            description: "Immerse yourself in the heart of Africa with our luxurious safari lodges. Nestled in prime wildlife areas, our lodges offer intimate and exclusive experiences with guided game drives, walking safaris, and cultural visits. Relax in elegantly designed accommodations that blend seamlessly with the natural surroundings, and indulge in gourmet cuisine prepared with fresh, local ingredients. Discover the magic of the African wilderness in unparalleled luxury.",
            img: "/lodges/namiri-plains.jpg"
        },
        {
            title: "Experience bliss with in one our of a kind beach resorts and hotels",
            description: "Escape to paradise with our exclusive beach resorts located on the pristine shores of Zanzibar. Bask in the sun, swim in crystal-clear waters, and unwind in luxurious accommodations with stunning ocean views. Enjoy a range of water sports, rejuvenating spa treatments, and exquisite dining experiences. Our beach resorts promise a serene and indulgent retreat where you can relax and rejuvenate amidst tropical beauty.",
            img: "/lodges/zuri-zanzibar-img.jpg"
        },
    ]

    return (
        <>
            <PrimaryHeader title={'Lodges'} image={'/lodges/lemala-camps/lemala-nanyukie-header.jpg'} />
            <div className='mx-auto my-20'>
                <div className='flex flex-col gap-y-16'>
                    {
                        content.map((item, id) => (
                            <ContentSection key={id} rank={id} image={item.img} title={item.title} reverse={id % 2 === 0 ? true : false} description={item.description} />
                        ))
                    }
                </div>

                <section className='max-w-5xl mx-auto mt-16'>
                    <h4 className="text-4xl mb-3">Tazama Africa Safaris collection of accommodations for your adventure</h4>
                    <p className='max-w-5xl mb-6'>
                        Featuring Tanzania’s most pristine wilderness and beach settings, this coveted collection is designed for friends and families who want to celebrate their most precious connections surrounded by nothing but nature.
                    </p>

                    <Tabs>
                        <Tab label={'All'}>
                            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                                {
                                    lodges.map((lodge, index) => (
                                        <Link href={`/lodges/${lodge.link}`} key={index}>
                                            <div className='w-full'>
                                                <div className='w-full h-80 md:h-96'>
                                                    <img src={`/assets/images/gallery/lodges/${lodge.img}`} alt={lodge.title} className='w-full h-full object-cover'/>
                                                </div>
                                                <p className='mt-2 text-lg'>{lodge.title}</p>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </Tab>
                        <Tab label={'Beach'}>
                            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                                {
                                    lodges.filter(lodge => lodge.category === "Beach").map((lodge, index) => (
                                        <Link href={`/lodges/${lodge.link}`} key={index}>
                                            <div className='w-full'>
                                                <div className='w-full h-80 md:h-96'>
                                                    <img src={`/assets/images/gallery/lodges/${lodge.img}`} alt={lodge.title} className='w-full h-full object-cover'/>
                                                </div>
                                                <p className='mt-2 text-lg'>{lodge.title}</p>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </Tab>
                        <Tab label={'Safari'}>
                            <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                                {
                                    lodges.filter(lodge => lodge.category === "Safari").map((lodge, index) => (
                                        <Link href={`/lodges/${lodge.link}`} key={index}>
                                            <div className='w-full'>
                                                <div className='w-full h-80 md:h-96'>
                                                    <img src={`/assets/images/gallery/lodges/${lodge.img}`} alt={lodge.title} className='w-full h-full object-cover'/>
                                                </div>
                                                <p className='mt-2 text-lg'>{lodge.title}</p>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </Tab>
                    </Tabs>
                </section>
            </div>
        </>
    )
}

export default Page

// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium qui sed omnis earum, perferendis assumenda ratione sit, laudantium dicta veniam hic autem vitae ad adipisci. A id tenetur ut itaque.
