/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'

const Page = () => {

    const activities = [
        {
            title: "Game Drives",
            description: "Experience thrilling game drives led by expert guides, where you can see the Big Five and other iconic wildlife. Morning and evening drives provide the best opportunities for wildlife sightings."
        },
        {
            title: "Nature Walks",
            description: "Explore the Serengeti on foot and discover the intricate details of the ecosystem, from flora and fauna to tracking animal footprints."
        },
        {
            title: "Bird Watching",
            description: "Spot a variety of bird species in their natural habitat. The Serengeti is home to over 500 bird species, making it a paradise for bird enthusiasts."
        },
        {
            title: "Hot Air Balloon Safaris",
            description: "Take to the skies for a unique perspective of the Serengeti. Enjoy a sunrise hot air balloon ride followed by a champagne breakfast in the bush."
        }

    ]

    return (
        <>
            <PrimaryHeader title="Siringit Camps" image='/lodges/siringit-camps/siringit-camps.jpg' />

            <div className='my-20 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-center mb-4">Siringit Camps</h3>
                    <p>
                        Immerse yourself in the wild beauty of the Serengeti at Siringit Camp. This exclusive safari camp offers an intimate and authentic safari experience, with luxurious accommodations and unparalleled wildlife viewing opportunities.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3'>Accommodation</h4>
                    <p>
                        Siringit Camp features spacious tents equipped with all the comforts of home, including en-suite bathrooms, comfortable beds, and private decks with stunning views of the surrounding landscape.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3'>Dining</h4>
                    <p>
                        Guests can enjoy gourmet meals prepared by talented chefs, featuring fresh and locally sourced ingredients. Dining at Siringit Camp is a delight, with options ranging from bush breakfasts to elegant dinners under the stars.
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
                            [1,2,3,4,5,6].map(img => (
                                <div key={img} className="w-full">
                                    <img src={`/assets/images/gallery/lodges/siringit-camps/gallery/${img}.jpg`} alt={`Siringit Image ${img}`} className='w-full h-full object-cover' />
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