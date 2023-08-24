import { useState } from "react"

export type Slides = {
    title: string,
    legend: string,
    img: string,
}

type Props = {
    slides: Slides[]

}

export default function Carrousel({ slides }: Props) {
    const [currSlide, setCurrSlide] = useState(0);

    function prevSlide() {
        currSlide === 0 ?
            setCurrSlide(slides.length - 1) :
            setCurrSlide((prevSlide) => prevSlide -= 1);
    }

    function nextSlide() {
        currSlide === slides.length - 1 ?
            setCurrSlide(0) :
            setCurrSlide((prevSlide) => prevSlide += 1);
    }

    return (
        <div
            id="carousel"
            className="relative rounded-lg gotham h-full md:h-[350px] lg:h-[500px] max-w-7xl"
            data-te-carousel-init
            data-te-carousel-slide>
            <div
                className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                data-te-carousel-indicators
            >
                {slides.map((_, id) => <button
                    type="button"
                    data-te-target="#carousel"
                    data-te-slide-to={id}
                    data-te-carousel-active
                    className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none ${currSlide === id ? "opacity-95" : "opacity-50"}`}
                    aria-current="true"
                    aria-label={`Slide ${id}`}
                    key={id}
                    onClick={() => setCurrSlide(id)}
                />)}
            </div>
            <div
                className="relative h-full overflow-hidden after:clear-both after:block after:content-['']"
            >
                {slides.map((slide, id) =>
                    <div
                        className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${currSlide === id ? "block" : "hidden"}`}
                        data-te-carousel-active
                        data-te-carousel-item
                        key={id}
                    >
                        <img
                            src={slide.img}
                            className="object-cover object-center"
                            alt="..."
                        />
                        <div
                            className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                            <h5 className="text-xl">{slide.title}</h5>
                            <p>
                                {slide.legend}
                            </p>
                        </div>
                    </div>
                )}
            </div>
            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carousel"
                data-te-slide="prev"
                onClick={prevSlide}
            >
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >
                    Previous
                </span>
            </button>
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-te-target="#carousel"
                data-te-slide="next"
                onClick={nextSlide}
            >
                <span className="inline-block h-8 w-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-6 w-6">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </span>
                <span
                    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >
                    Next
                </span>
            </button>
        </div>
    )
}