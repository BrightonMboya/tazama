/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'

const Page = () => {
    const activities = [
        {
            title: "Water Sports",
            description: "Enjoy a range of water activities including snorkeling, diving, and kayaking. Explore the vibrant coral reefs and marine life just steps from the resort."
        },
        {
            title: "Spa and Wellness",
            description: "Relax and rejuvenate with a variety of spa treatments and wellness programs. Enjoy massages, facials, and holistic therapies in a tranquil setting."
        },
        {
            title: "Cultural Tours",
            description: "Explore the rich culture and history of Zanzibar with guided tours to local attractions such as Stone Town, spice plantations, and Jozani Forest."
        },
        {
            title: "Sunset Cruises",
            description: "Embark on romantic sunset cruises along the coast, complete with refreshments and stunning views."
        },
        {
            title: "Yoga and Meditation",
            description: "Participate in yoga and meditation sessions on the beach, led by experienced instructors."
        },
        {
            title: "Cooking Classes",
            description: "Learn to prepare traditional Zanzibari dishes with local chefs, and take home new culinary skills."
        },
        {
            title: "Fishing Excursions",
            description: "Experience deep-sea fishing adventures in the Indian Ocean, with opportunities to catch a variety of fish."
        }
    ]

    return (
        <>
            <PrimaryHeader title="Tulia Beach Resort" image='/lodges/tulia-beach-resort/tulia-beach-resort.jpg' />

            <div className='my-20 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-center mb-4">Tulia Beach Resort</h3>
                    <p>
                        Escape to the serene beauty of Tulia Beach Resort, located on the stunning beaches of Zanzibar. This luxurious resort offers a tranquil and exclusive retreat with world-class amenities and exceptional service.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3'>Accommodation</h4>
                    <p>
                        The rooms and villas at Tulia Beach Resort are designed with elegance and comfort in mind. Each accommodation features modern amenities, private balconies or terraces, and stunning views of the Indian Ocean.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3'>Dining</h4>
                    <p>
                    Indulge in a culinary journey at Tulia Beach Resort's restaurants, where expert chefs prepare a variety of international and local dishes using fresh, local ingredients. The resort offers a dining experience for every palate, from casual beachside snacks to fine dining.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3'>Activities</h4>
                    <br />
                    <ul className='list-disc pl-4 mb-4'>
                        {activities.map((activity, index) => (
                            <li className="ml-4" key={index}>
                                <p><span>{activity.title}</span>: {activity.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>
                <br /><br />
                <div>
                    <h4 className='text-4xl mb-3'>Gallery</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            [1,5,3,4,2,6,7].map(img => (
                                <div key={img} className="w-full h-60">
                                    <img src={`/assets/images/gallery/lodges/tulia-beach-resort/gallery/${img}.jpg`} alt={`Siringit Image ${img}`} className='w-full h-full object-cover' />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}

export default Page