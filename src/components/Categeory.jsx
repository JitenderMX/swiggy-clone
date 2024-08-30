import React, { useState } from 'react'
import { BsArrowRightShort } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
function Categeory() {
    const [slide, setSlide] = useState(0)

    let categoryImg = []
    for (let i = 1; i <= 21; i++) {
        categoryImg.push(`images/${i}.jpg`);
    }

    const slideNext = () => {
        console.log(categoryImg.length - 7 ,slide) 
        if(categoryImg.length -7 === slide){
            return false
        }else{
            setSlide(slide + 2) 
        }
    }
    const slidePrev = () => { 
        if(slide === 0){
            return false
        }else{
            setSlide(slide - 2) 
        }
    }
    return (
        <div className='max-w-[1400px] mx-auto mt-20'>
            <div className="flex items-center justify-between">
                <div className="text-2xl font-extrabold">What is on your mind?</div>
                <div className="flex gap-3">
                    <div className="w-9 h-9 rounded-full flex justify-center items-center cursor-pointer bg-[#e2e2e7] hover:bg-[#d2d2d6] duration-500" onClick={slidePrev}><BsArrowLeftShort className='text-2xl'/></div>
                    <div className="w-9 h-9 rounded-full flex justify-center items-center cursor-pointer bg-[#e2e2e7] hover:bg-[#d2d2d6] duration-500" onClick={slideNext}><BsArrowRightShort className='text-2xl'/></div>
                </div>
            </div>
            <div className="flex gap-2 overflow-hidden">
                {categoryImg.map((img, index) => (
                    <div style={{ transform: `translateX(-${slide}00%)` }} key={index} className={`w-[200px] shrink-0 duration-500 translate-x-[${slide}00%]`}>
                        <img src={img} alt="" />
                    </div>
                ))}
            </div>
            <hr className='my-10 border-[2px]' />
        </div>
    )
}

export default Categeory
