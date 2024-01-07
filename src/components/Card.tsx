import React from "react"

type cardProperties = {
    mainHeading: string
    subHeading?: string
    image: string
    offer?: string
    link: string
}

const Card: React.FunctionComponent<cardProperties> = React.memo((props: cardProperties) => {

    return (
        <>
            <a href={props.link} className="relative cursor-pointer">
                {
                    props.offer
                        ?
                        <p className="absolute bg-white py-0.5 px-1.5 text-xs rounded shadow-sm font-now left-1 top-1">{props.offer}</p>
                        :
                        null
                }
                <img src={`/assets/images/gallery/${props.image}`} alt="" className="object-cover w-full h-[11rem] sm:h-[15rem]" />
                <p className="mt-3 text-xs sm:text-sm md:text-base text-[#A87133]">{props.subHeading}</p>
                <p className="-mt-1 text-lg sm:text-xl md:text-2xl text-[#757371]">{props.mainHeading}</p>
            </a>
        </>
    )
})

export default Card