import React from 'react'
import Link from "next/link"
import PrimaryHeader from '~/components/PrimaryHeader'
import Image from 'next/image'

const Page = () => {
    return (
        <>
            <PrimaryHeader title='Sustainability with Tazama' image='/sustainability/sustainability-header.jpg' />
            <div className='max-w-5xl mx-auto my-20'>
                <div className="px-4 md:px-8 lg:px-4">
                    <h3 className='text-5xl text-center mb-6 text-dark'>Our Commitment to Sustainability</h3>
                    <p>
                        At <Link href={'/about'} className='underline underline-offset-4'>Tazama Africa Safari</Link>, sustainability is not just a buzzword but a guiding principle embedded in every aspect of our operations. As a leading Tanzanian tour company, we recognize our responsibility to preserve the natural beauty of our environment, support our local communities, and operate in a manner that ensures long-term viability. We are proud of our efforts and remain committed to making a positive impact through our comprehensive sustainability initiatives.
                    </p>
                </div>

                <section className='mt-16 px-4 md:px-8 lg:px-4'>
                    <h4 className="text-3xl text-dark mb-3">Environmental Sustainability</h4>
                    <p>
                        ●	<span className='font-semibold'>Pollution Reduction</span>: We are dedicated to reducing pollution, particularly plastic waste, in our safari operations. To combat the pervasive issue of single-use plastics, we provide our guests and staff with reusable water bottles. This initiative significantly cuts down on plastic waste, ensuring that our tours do not contribute to the pollution of Tanzania's stunning landscapes.
                    </p>
                    <p className="mt-3">
                        ●	<span className='font-semibold'>Sustainable Safaris</span>: Our safaris are designed with sustainability at their core. We promote low-impact tourism activities. We strive to protect the natural habitats we explore, ensuring that wildlife can thrive for generations to come.
                    </p>
                </section>
                <br /><br />
                <section>
                    <div className='flex flex-col md:flex-row gap-8'>
                        <div className='w-full px-4 md:py-8 md:px-8 lg:px-4'>
                            <h4 className="text-3xl text-dark mb-3">Social Sustainability</h4>
                            <p>
                                ●	<span className='font-semibold'>Pollution Reduction</span>: We are dedicated to reducing pollution, particularly plastic waste, in our safari operations. To combat the pervasive issue of single-use plastics, we provide our guests and staff with reusable water bottles. This initiative significantly cuts down on plastic waste, ensuring that our tours do not contribute to the pollution of Tanzania's stunning landscapes.
                            </p>
                            <p className="mt-3">
                                ●	<span className='font-semibold'>Sustainable Safaris</span>: Our safaris are designed with sustainability at their core. We promote low-impact tourism activities. We strive to protect the natural habitats we explore, ensuring that wildlife can thrive for generations to come.
                            </p>
                            <p className='mt-3'>
                                ●	<span className='font-semibold'>Pollution Reduction</span>: We are dedicated to reducing pollution, particularly plastic waste, in our safari operations. To combat the pervasive issue of single-use plastics, we provide our guests and staff with reusable water bottles. This initiative significantly cuts down on plastic waste, ensuring that our tours do not contribute to the pollution of Tanzania's stunning landscapes.
                            </p>
                            <p className="mt-3">
                                ●	<span className='font-semibold'>Sustainable Safaris</span>: Our safaris are designed with sustainability at their core. We promote low-impact tourism activities. We strive to protect the natural habitats we explore, ensuring that wildlife can thrive for generations to come.
                            </p>
                        </div>
                        <div className='w-full max-md:h-80'>
                            <img src="/assets/images/gallery/sustainability/sustainability-img3.jpg" alt="Sustainability" className='w-full h-full object-cover' />
                        </div>
                    </div>
                </section>
                <br /><br />
                <section>
                    <h4 className="text-3xl text-dark mb-3">Economic Sustainability</h4>
                    <p>
                        At Tazama Africa Safari, we believe in conducting our business responsibly and ethically. We adhere to principles of corporate governance, ensuring transparency and accountability in all our operations.
                    </p>
                </section>
                <br /><br />
                <section>
                    <h4 className='text-4xl text-dark mb-3'>The Impact of Our Efforts</h4>
                    <p>Our sustainability initiatives have had a profound impact on the environment, our communities, and the economy. By reducing plastic waste, supporting local businesses, providing educational opportunities, and ensuring responsible business practices, we are making a positive difference every day.</p>
                </section>
                <br /><br />
                <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        sustainabilityProjects.map((item, index) => (
                            <div className='group' key={index}>
                                <Link href={item.link} className="relative cursor-pointer">
                                    <>
                                        <div className="relative h-[200px] w-full">
                                            <Image
                                                src={`/assets/images/gallery/${item.img}`}
                                                alt=""
                                                layout="fill"
                                                className="object-cover group-hover:brightness-95"
                                            />
                                        </div>
                                        <p className="mt-3 text-xs text-primary sm:text-sm md:text-lg">
                                            {item.title}
                                        </p>
                                    </>
                                </Link>
                            </div>
                        ))
                    }
                </section>
            </div>
        </>
    )
}

export default Page

const sustainabilityProjects = [
    {
        title: 'TazamaEdu',
        img: 'tazama-edu/tazama-edu-img4.jpg',
        link: '/sustainability/tazamaedu'
    },
    {
        title: 'Kafika House',
        img: 'partners/kafika-house/kafika-house-img2.jpg',
        link: '/partners/kafika-house'
    },
    {
        title: 'Seed Bombs Tanzania',
        img: 'partners/seed-bombs/seed-bombs-header.jpg',
        link: '/partners/seed-bombs-tanzania'
    },
]