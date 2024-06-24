import React from 'react'
import ContentSection from '~/components/ContentSection'
import PrimaryHeader from '~/components/PrimaryHeader'
import { Tab, Tabs } from '~/components/Tabs'

const Page = () => {
    return (
        <>
            <PrimaryHeader title={'Lodges'} image={''} />
            <div className='mx-auto my-20'>
                <div className='flex flex-col gap-y-16'>
                    {
                        [1, 2, 3, 4].map(item => (
                            <ContentSection key={item} rank={item} image={''} title={'Examplpe title here about lodge experience'} reverse={item % 2 === 0 ? true : false} description={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium qui sed omnis earum, perferendis assumenda ratione sit, laudantium dicta veniam hic autem vitae ad adipisci. A id tenetur ut itaque.'} />
                        ))
                    }
                </div>
            </div>

            <section className='max-w-5xl mx-auto mt-16'>
                <h4 className="text-4xl mb-3">A header will be put here</h4>
                <p className='max-w-3xl mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quos aliquid laborum ut nam fuga beatae alias ea, sed inventore explicabo, minima expedita ducimus ipsam. Laborum vel officiis dolorum esse.
                </p>

                <Tabs>
                    <Tab label={'All'}>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
                            <div className='w-full'>
                                <div className='border-2 border-pink-500 w-full h-96' />
                                <p className='mt-2 text-lg'>Nimali Central Serengeti</p>
                            </div>
                            
                        </div>
                    </Tab>
                </Tabs>
            </section>
        </>
    )
}

export default Page

// Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium qui sed omnis earum, perferendis assumenda ratione sit, laudantium dicta veniam hic autem vitae ad adipisci. A id tenetur ut itaque.
