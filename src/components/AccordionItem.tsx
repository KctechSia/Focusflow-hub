"use client";
import React from "react";
import clsx from "clsx";

import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";

export const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    return (
        <div className="py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center">
                <span className="flex-1 text-lg font-bold">{question}</span>
                {isOpen ? <MinusIcon /> : <PlusIcon />}
            </div>
            <div className={clsx("mt-4", { "hidden": !isOpen, "": isOpen })}>{answer}</div>
        </div>
    )
}
