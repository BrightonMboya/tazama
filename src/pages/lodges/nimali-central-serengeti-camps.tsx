/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'

const Page = () => {

    const activities = [
        {
            title: "Game Drives",
            description: "Experience thrilling game drives led by expert guides, where you can see the Big Five and other iconic wildlife. Morning, afternoon, and night drives are available."
        },
        {
            title: "Bush Walks",
            description: "Experience the smaller details of the Serengeti ecosystem on foot, led by knowledgeable guides."
        },
        {
            title: "Bird Watching",
            description: "Spot a variety of bird species in their natural habitat. The Serengeti is a birdwatcher's paradise with over 500 species."
        },
        {
            title: "Hot Air Balloon Safaris",
            description: "Take to the skies for a unique perspective of the Serengeti. Enjoy a sunrise hot air balloon ride followed by a champagne breakfast in the bush."
        },
        {
            title: "Photographic Safaris",
            description: "Capture stunning photos of wildlife and landscapes with the guidance of professional photographers."
        },
        {
            title: "Sundowner Experiences",
            description: "Enjoy evening cocktails at scenic spots, watching the sunset over the Serengeti."
        },
    ]

    return (
        <>
            <PrimaryHeader title="Nimali Central Serengeti Camps" image='/lodges/nimali-camp/nimali-camp-header.jpg' />

            <div className='my-20 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-center mb-4">Nimali Central Serengeti Camps</h3>
                    <p>
                        Immerse yourself in the heart of the Serengeti at Nimali Central Serengeti Camps. This luxurious tented camp offers an authentic safari experience with elegant accommodations and exceptional wildlife viewing opportunities.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3'>Accommodation</h4>
                    <p>
                        Nimali Central Serengeti Camps features spacious tents equipped with all the comforts of home, including en-suite bathrooms, comfortable beds, and private decks with stunning views of the surrounding landscape.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3'>Dining</h4>
                    <p>
                        Guests can enjoy gourmet meals prepared by talented chefs, featuring fresh and locally sourced ingredients. Dining at Nimali Central Serengeti Camps is a delight, with options ranging from bush breakfasts to elegant dinners under the stars.
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
                <br />
                <section>
                    <p>
                        Whether you're seeking a thrilling safari adventure or a tranquil retreat in nature, Nimali Central Serengeti Camps promise an unforgettable experience. With its luxurious accommodations, exceptional dining, and a wide range of activities, this camp offers the perfect blend of comfort and wilderness. Book your stay at Nimali Central Serengeti Camps and embark on a journey into the heart of the Serengeti.
                    </p>
                </section>
                <br /><br />
                <div>
                    <h4 className='text-4xl mb-3'>Gallery</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            [1,5,3,4,2,6,7].map(img => (
                                <div key={img} className="w-full h-60">
                                    <img src={`/assets/images/gallery/lodges/nimali-camp/gallery/${img}.jpg`} alt={`Siringit Image ${img}`} className='w-full h-full object-cover' />
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