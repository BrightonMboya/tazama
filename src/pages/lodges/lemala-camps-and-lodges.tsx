/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'

const Page = () => {

    const activities = [
        {
            title: "Game Drives",
            description: "Explore the Serengeti on guided game drives, where you can witness the Big Five and other fascinating wildlife in their natural habitat."
        },
        {
            title: "Bush Walks",
            description: "Experience the smaller details of the Serengeti ecosystem on foot, led by knowledgeable guides."
        },
        {
            title: "Bird Watching",
            description: "Discover a diverse array of bird species that call the Serengeti home."
        },
        {
            title: "Cultural Visits",
            description: "Engage with the local Maasai communities and learn about their traditions and way of life."
        }
    ]

    return (
        <>
            <PrimaryHeader title="Lemala Camps and Lodge" image='/lodges/lemala-camps/lemala-nanyukie-bonfire.jpg' />

            <div className='my-20 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-center mb-4">Lemala Camps & Lodges (Nanyukie)</h3>
                    <p>
                        Nestled in the heart of the Serengeti, Lemala Nanyukie offers an unparalleled safari experience. This luxurious tented camp is situated in a secluded area, providing guests with a sense of intimacy and exclusivity amidst the vast savannah plains. The camp features spacious tents, each elegantly designed with contemporary furnishings and equipped with all modern amenities to ensure a comfortable stay.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3'>Accommodation</h4>
                    <p>
                        The tents at Lemala Nanyukie are thoughtfully positioned to maximize privacy and stunning views of the Serengeti. Each tent includes a king-sized bed, en-suite bathroom with hot shower, and a private deck where guests can unwind while observing the wildlife. The interior decor blends rustic charm with modern luxury, creating a cozy yet sophisticated ambiance.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3'>Dining</h4>
                    <p>
                        Guests at Lemala Nanyukie can savor delectable meals prepared by skilled chefs using fresh, locally sourced ingredients. The dining experience is enhanced by the breathtaking surroundings, whether you're enjoying a bush breakfast, a picnic lunch, or a candlelit dinner under the stars. The camp also offers a well-stocked bar where you can relax with a refreshing drink after a day of adventure.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3'>Activities</h4>
                    <p>
                        Lemala Nanyukie is well placed to offer classic safari activities including game drives, walking safaris and so on.
                    </p>
                    <br />
                    <ul className='list-disc pl-4 mb-4'>
                        {activities.map((activity, index) => (
                            <li className="ml-4" key={index}>
                                <p><span>{activity.title}</span>: {activity.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>
                <br />
                <section>
                    <p>
                        Whether you're seeking a thrilling safari adventure or a tranquil retreat in nature, Lemala Nanyukie promises an unforgettable experience. With its luxurious accommodations, exceptional dining, and a wide range of activities, this camp offers the perfect blend of comfort and wilderness. Book your stay at Lemala Nanyukie and embark on a journey into the heart of the Serengeti.
                    </p>
                </section>
                <br /><br />
                <div>
                    <h4 className='text-4xl mb-3'>Gallery</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            [1,2,3,4,5,6,8,9].map(img => (
                                <div key={img} className="w-full h-60">
                                    <img src={`/assets/images/gallery/lodges/lemala-camps/gallery/${img}.jpg`} alt={`Siringit Image ${img}`} className='w-full h-full object-cover' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page