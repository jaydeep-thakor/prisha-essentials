import React from 'react'
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const Title = ({ title, subTitle, link, size = "md", mb = "mb-6 md:mb-10", lh = "leading-normal" }) => {
    const words = subTitle.split(" ")
    const lastWord = words.pop()
    const remainingWords = words.join(" ")

    const sizes = {
        xs: {
            title: "text-[6px] sm:text-[7px] md:text-[8px]",
            h2: "text-[12px] sm:text-[14px] md:text-[18px]",
            span: "text-[14px] sm:text-[16px] md:text-[22px]",
        },

        sm: {
            title: "text-[7px] sm:text-[8px] md:text-[9px]",
            h2: "text-[14px] sm:text-[16px] md:text-[20px]",
            span: "text-[16px] sm:text-[20px] md:text-[26px]",
        },
        md: {
            title: "text-[8px] sm:text-[9px] md:text-[10px]",
            h2: "text-[20px] sm:text-[24px] md:text-[28px]",
            span: "text-[24px] sm:text-[28px] md:text-[38px]",
        },
    }

    const s = sizes[size]

    return (
        <div className={`animate-fade-up ${mb} flex items-end justify-between`}>
            <div className={lh}>
                {title && <p className={`text-primary inline-flex items-center gap-2.5 ${s.title} font-medium tracking-[0.22em] uppercase before:block before:w-5 sm:before:w-5 md:before:w-5 before:h-px before:bg-current before:opacity-50`}>
                    {title}
                </p>}
                <h2 className={`${s.h2} font-light leading-[1.15] tracking-tight text-neutral-900`}>
                    {remainingWords}{" "}
                    <span className={`font-cg capitalize italic ${s.span}`}>{lastWord}</span>
                </h2>
            </div>

            {link ? (
                <Link to={link} className="inline-flex items-center gap-1 text-[9px] sm:text-[10px] md:text-[11px] font-medium tracking-[0.15em] uppercase text-primary hover:gap-2.5 transition-all duration-300 pb-1">
                    View All
                    <ChevronRight size={12} />
                </Link>
            ) : null}
        </div>
    )
}

export default Title