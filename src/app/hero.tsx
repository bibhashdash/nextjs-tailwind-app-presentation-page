"use client";

import Image from "next/image";
import {Button, Typography, Input, Checkbox} from "@material-tailwind/react";


function Hero() {
    return (
        <div className="relative min-h-screen w-full">
            <header className="grid bg-white px-8 pt-12">
                <div
                    className="container mx-auto h-full w-full flex flex-col md:flex-row-reverse place-items-center md:justify-between md:gap-16">
                    <Image
                        width={350}
                        height={400}
                        src="/image/events-screen-portrait.png"
                        alt="team work"
                        className="col-span-1 md:px-8"
                    />
                    <div className="flex flex-col gap-2">
                        <div className="">
                            <Typography variant="h1" className="mb-4 text-3xl md:text-8xl uppercase">
                                Goole&apos;s Going Global. <br/>Are you in?
                            </Typography>
                            <Typography
                                variant="lead"
                                className="text-sm md:text-lg md:pr-60"
                            >
                                We&#39;re reshaping tourism in this town with our new app. Sign up now for early
                                access and get half price on your
                                first 3 months of sponsored content!
                            </Typography>
                        </div>
                        <div className="mt-4 mb-2 md:pr-60">
                            <form
                                className="w-100 flex flex-col gap-4 md:flex-row md:items-center md:justify-items-start">
                                <Input
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                    crossOrigin={undefined}
                                    placeholder="Enter your email"
                                />
                                <Button className="bg-primary md:w-[180px]">
                                    sign up
                                </Button>
                            </form>
                        </div>
                    </div>

                </div>
            </header>
            {/*<div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md">*/}
            {/*    <div>*/}
            {/*        <Typography variant="h3" color="blue-gray" className="mb-3">*/}
            {/*            Learning App*/}
            {/*        </Typography>*/}
            {/*        <Typography*/}
            {/*            variant="paragraph"*/}
            {/*            className="font-normal !text-gray-500 lg:w-5/12"*/}
            {/*        >*/}
            {/*            Download our app to dive into a vast library of courses, tutorials,*/}
            {/*            and study materials on a wide range of subjects - from programming*/}
            {/*            and language learning to personal development and beyond*/}
            {/*        </Typography>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    );
}

export default Hero;
