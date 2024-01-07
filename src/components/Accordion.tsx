import React from "react"
import { TfiArrowCircleUp } from "react-icons/tfi"
import { motion, AnimatePresence } from "framer-motion"

type accordion = {
    question: string
    answer?: string
    list?: string[]
    note?: string
}

const Accordion: React.FunctionComponent<accordion> = React.memo((props: accordion) => {
    const [accordion, setAccordion] = React.useState(false)
    return (
        <div className="py-2 px-4 bg-white rounded-md shadow-sm">
            <p className="text-sm md:text-base capitalize flex items-center justify-between cursor-pointer gap-4 text-gray-600" onClick={() => setAccordion(!accordion)}>
                <span className=" font-now">{props.question}</span>
                <span className={`transition duration-200 ${accordion ? 'rotate-0' : 'rotate-180'}`}><TfiArrowCircleUp /></span>
            </p>
            <AnimatePresence>
                {
                    accordion && (
                        <motion.div
                            initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3 }}
                            className={`overflow-clip text-gray-500 mt-2 text-justify`}>
                            <p className="font-now text-sm">{props.answer}</p>
                            {
                                props.list
                                    ?
                                    <ul className="mt-3" style={{ listStyleType: "disc" }}>
                                        {props.list.map((item, index) =>
                                            <li className="font-now text-sm" key={index}>• {item}</li>
                                        )}
                                    </ul>
                                    :
                                    null
                            }
                            {
                                props.note
                                    ?
                                    <p className="mt-3 font-now text-sm">{props.note}</p>
                                    :
                                    null
                            }
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>

    )
})

export default Accordion