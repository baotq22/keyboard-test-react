import images from "../assets/IMG_7020.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useEffect, useRef } from "react";

function HomePage() {

    const ref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            ".inside",
            {
                opacity: 0,
                ease: "sine.in",
                scrollTrigger: {
                    trigger: ".container",
                },
            },
            {
                duration: 1.5,
                opacity: 1,
            }
        );
    })

    return (
        <>
            <div className="container my-24 mx-auto md:px-6">
                <section className="mb-32">
                    <div
                        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                        <div className="flex flex-wrap items-center inside">
                            <div className="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                                <img src={images} alt="Keyboard"
                                    className="w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" />
                            </div>
                            <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                                <div className="px-6 py-12 md:px-12">
                                    <h2 className="mb-4 text-2xl font-bold">
                                        About iKeyTester
                                    </h2>
                                    <p className="text-lg mb-6 text-neutral-500 dark:text-neutral-300">
                                        I am a Fresher Software Developer from 2021, and have passion of Custom Mechanical Keyboard. 
                                        To create the seperate signature, I have created "iKeyTester" made for Keyboard Tester during 
                                        Modifying and Customing Process. The special of "iKeyTester" which another Regular Keyboard 
                                        Test Application is bring to many different layout of keyboard to help user can easily control 
                                        the keyboard.
                                    </p>
                                    <p className="text-lg text-neutral-500 dark:text-neutral-300">
                                        Now I am using the AKKO 5087B Plus and MK870, both of them is modified to have a good feel of 
                                        typing. Especially, the MK870 have a South-Facing, which is not interference the Cherry Profile 
                                        Keycap. According many review, the Cherry Profile Keycap is the best for coding, bring the best 
                                        typing. I have lubed and using many switches series, almost all of them have a good of typing, 
                                        the sound is not too loud but listening is very awesome. In the future, I want purchase many 
                                        Keyboard to reaching the passion, especially is Gasket Mount, Aluminum Case, etc...
                                    </p>
                                    <br/>
                                    <h4 className="text-lg text-neutral-500 dark:text-neutral-300">
                                        Every problem can contact for me via:
                                    </h4>
                                    <p className="text-neutral-500 dark:text-neutral-300"><i className='bx bxl-facebook-square mr-3 text-xl'></i>https://www.facebook.com/tuong.quan.22/</p>
                                    <p className="text-neutral-500 dark:text-neutral-300"><i className='bx bxl-instagram mr-3 text-xl'></i>https://www.instagram.com/dorino__/</p>
                                    <p className="text-neutral-500 dark:text-neutral-300"><i className='bx bxl-github mr-3 text-xl'></i>https://github.com/baotq22</p>
                                    <p className="text-neutral-500 dark:text-neutral-300"><i className='bx bx-phone mr-3 text-xl'></i>0852102000</p>
                                    <p className="text-neutral-500 dark:text-neutral-300"><i className='bx bx-envelope mr-3 text-xl'></i>tranquocbao2210@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default HomePage