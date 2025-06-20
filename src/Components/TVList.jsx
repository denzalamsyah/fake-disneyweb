import React, { useEffect, useRef, useState } from "react";
import {
  fetchTVListAringToday,
  fetchTVListOnTheAir,
  fetchTVListPopuler,
  fetchTVListTopRated,
} from "../Services/tvServices";
import { HiChevronLeft } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";
import TopRate from "./TVList/TopRate";
import Populer from "./TVList/Populer";
import Airingtoday from "./TVList/Airingtoday";
import Ontheair from "./TVList/Ontheair";

function TVList() {
  const [topRate, setToprate] = useState([]);
  const [populer, setPopuler] = useState([]);
  const [onTheAir, setonTheAir] = useState([]);
  const [airingToday, setAiringToday] = useState([]);
  const elementRef = useRef();
  const elementRefOta = useRef();
  const elementRefAT = useRef();
  const elementRefP = useRef();

  useEffect(() => {
    fetchTVListAringToday().then(setAiringToday);
    fetchTVListPopuler().then(setPopuler);
    fetchTVListOnTheAir().then(setonTheAir);
    fetchTVListTopRated().then(setToprate);
  }, []);

  const sliderRight = (element) => {
    element.scrollLeft += 800;
    // element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 800;
    // element.scrollLeft -= screenWidth - 110;
  };
  return (
    <main className="mx-5 md:mx-0 pb-10">
      <h2 className="text-xl md:text-4xl underline underline-offset-8 text-center">
        TV shows
      </h2>
      <section className="p-2 md:px-13">
        <h2
          className="text-sm md:text-[20px] md:px-3 text-white 
                font-bold"
        >
          Top Rate
        </h2>
        <div className="relative">
          <HiChevronLeft
            className="text-black bg-gray-400 opacity-70 rounded-full text-3xl md:text-5xl absolute z-[10] cursor-pointer left-0 mt-[40px] md:mt-[80px]"
            onClick={() => sliderLeft(elementRef.current)}
          />
          <HiChevronRight
            className="text-black bg-gray-400 opacity-70 rounded-full text-3xl md:text-5xl absolute z-[10] cursor-pointer right-0 mt-[40px] md:mt-[80px]"
            onClick={() => sliderRight(elementRef.current)}
          />
          <div
            ref={elementRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-3
    py-5 scroll-smooth"
          >
            {topRate.map((tv) => (
              <TopRate tv={tv} key={tv.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="p-2 md:px-13">
        <h2
          className="text-sm md:text-[20px] md:px-3 text-white 
                font-bold"
        >
          Populer
        </h2>
        <div className="relative">
          <HiChevronLeft
            className="text-black bg-gray-400 opacity-70 rounded-full text-3xl md:text-5xl absolute z-[10] cursor-pointer left-0 mt-[40px] md:mt-[80px]"
            onClick={() => sliderLeft(elementRefP.current)}
          />
          <HiChevronRight
            className="text-black bg-gray-400 opacity-70 rounded-full text-3xl md:text-5xl absolute z-[10] cursor-pointer right-0 mt-[40px] md:mt-[80px]"
            onClick={() => sliderRight(elementRefP.current)}
          />
          <div
            ref={elementRefP}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-3
    py-5 scroll-smooth"
          >
            {populer.map((tv) => (
              <Populer tv={tv} key={tv.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="p-2 md:px-13">
        <h2
          className="text-sm md:text-[20px] md:px-3 text-white 
                font-bold"
        >
          On The Air
        </h2>
        <div className="relative">
          <HiChevronLeft
            className="text-black bg-gray-400 opacity-70 rounded-full text-3xl md:text-5xl absolute z-[10] cursor-pointer left-0 mt-[40px] md:mt-[80px]"
            onClick={() => sliderLeft(elementRefOta.current)}
          />
          <HiChevronRight
            className="text-black bg-gray-400 opacity-70 rounded-full text-3xl md:text-5xl absolute z-[10] cursor-pointer right-0 mt-[40px] md:mt-[80px]"
            onClick={() => sliderRight(elementRefOta.current)}
          />
          <div
            ref={elementRefOta}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-3
    py-5 scroll-smooth"
          >
            {onTheAir.map((tv) => (
              <Ontheair tv={tv} key={tv.id} />
            ))}
          </div>
        </div>
      </section>
      <section className="p-2 md:px-13">
        <h2
          className="text-sm md:text-[20px] md:px-3 text-white 
                font-bold"
        >
          Airig Today
        </h2>
        <div className="relative">
          <HiChevronLeft
            className="text-black bg-gray-400 opacity-70 rounded-full text-3xl md:text-5xl absolute z-[10] cursor-pointer left-0 mt-[40px] md:mt-[80px]"
            onClick={() => sliderLeft(elementRefAT.current)}
          />
          <HiChevronRight
            className="text-black bg-gray-400 opacity-70 rounded-full text-3xl md:text-5xl absolute z-[10] cursor-pointer right-0 mt-[40px] md:mt-[80px]"
            onClick={() => sliderRight(elementRefAT.current)}
          />
          <div
            ref={elementRefAT}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-3
    py-5 scroll-smooth"
          >
            {airingToday.map((tv) => (
              <Airingtoday tv={tv} key={tv.id} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default TVList;
