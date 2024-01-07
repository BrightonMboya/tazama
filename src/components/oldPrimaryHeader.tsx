// Importing necessary hooks from Framer Motion and React
import { motion, useScroll, useTransform } from "framer-motion"
import React, { useRef } from "react"

type primaryHeader = {
    title: string
    image: string
    subTitle?: string
}

// The PrimaryHeader functional component definition
const PrimaryHeader =(props: primaryHeader) => {

    // Creating a ref to attach to the motion.div for scroll targeting
    const ref = useRef(null)

    // Accessing scrollYProgress for the component referred to by `ref` and setting the range for triggering the scroll
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"] // The range of the scroll trigger points
    })

    // Creating a motion value that will interpolate the scroll progress to a vertical position
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "22.5%"])
    // Creating a motion value for opacity that fades out as the user scrolls down
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
    // Creating a motion value for the font size that grows slightly as the user scrolls down
    const fontSize = useTransform(scrollYProgress, [0, 1], ["3.75rem", "4rem"])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

    // JSX returned by the Header component
    if (props.image)
        return (
            // The container for the header with a background image and fixed positioning
            <motion.div
                ref={ref} // Attaching the ref to the element
                style={{ scale, y, overflowX: "hidden", backgroundImage: `url("/assets/images/gallery/${props.image}")` }} // Applying the y motion value to this div
                className={`h-screen bg-cover bg-no-repeat bg-center w-full bg-fixed mb-20 overflow-hidden`}>
                {/* The main title text which animates in opacity and font size */}
                <motion.p
                    style={{ opacity, fontSize }} // Applying the opacity and fontSize motion values
                    className="w-full mx-auto lg:w-2/3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-base text-center px-2 sm:px-12 text-6xl xl:text-7xl text-white">
                    {props.title}
                </motion.p>
                {/* Subtitle text which fades out as the user scrolls down */}

                {
                    props.subTitle
                        ?
                        <motion.p
                            style={{ opacity }} // Applying the opacity motion value
                            className="absolute bottom-10 text-center text-white left-1/2 -translate-x-1/2 text-sm">
                            {props.subTitle}
                        </motion.p>
                        : null
                }

            </motion.div>
        )

}

export default PrimaryHeader