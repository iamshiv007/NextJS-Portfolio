"use client";
import React, { Fragment, useRef, useState, useEffect } from "react";
import Image from "next/image";
import { IoSchoolSharp } from "react-icons/io5";

import { EducationData } from "@/constants/EducationData";

const Education = () => {
  const [isEducation, setIsEducation] = useState(false);
  const educationRef = useRef();
  const educationBoxesRef = useRef();

  useEffect(() => {
    const getScreenWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const educationObserver = new IntersectionObserver(
      ([educationEntry]) => {
        setIsEducation(educationEntry.isIntersecting);
      },
      {
        rootMargin: `${getScreenWidth() <= 700 ? "-100px" : "-300px"}`,
      }
    );

    educationObserver.observe(educationRef.current);

    if (isEducation) {
      educationBoxesRef.current.classList.add("pop-up-child");
    } else {
      educationBoxesRef.current.classList.remove("pop-up-child");
    }
  }, [isEducation]);

  return (
    <Fragment>
      <section
        className='shadow-zinc-300 dark:shadow-zinc-700 shadow-sm overflow-x-hidden'
        id='education'
        ref={educationRef}
      >
        <h2 className='text-3xl font-bold text-center p-4 flex justify-center items-center gap-3'>
          <IoSchoolSharp /> Education
        </h2>

        <div
          className='pop-down-child pb-[30px] px-[20px] md:px-[100px] lg:px-[200px] flex flex-col gap-[20px] md:gap-[50px]'
          ref={educationBoxesRef}
        >
          {EducationData.map((education) => (
            <div
              className='transition-all duration-700 flex border border-zinc-300 dark:border-zinc-700 shadow-md shadow-zinc-300 dark:shadow-zinc-700 rounded gap-6'
              key={education.name}
            >
              <Image
                alt={education.name}
                className='hidden md:block bg-blue-400'
                height={150}
                src={education.image}
                width={150}
              />
              <div className='flex flex-col gap-2 p-3 md:p-1'>
                <p className='text-xl md:text-2xl font-bold text-red-600'>
                  {education.name}
                </p>
                <p>{education.schoolOrCollege}</p>
                <p className=' text-blue-600'>
                  {education.fromTo} &nbsp; | &nbsp;{" "}
                  {education.statusOrPrecentage}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Fragment>
  );
};

export default Education;
