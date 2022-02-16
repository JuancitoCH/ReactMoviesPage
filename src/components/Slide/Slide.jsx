import React, { useContext, useEffect, useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import {moviesContext} from '../../context/MoviesContext'
import ImgenSlide from "./img";
import "../../css/Slide.css";
import uniqid from "uniqid";

export default function Slide() {
  const {moviesState:{movies}} = useContext(moviesContext);
  const SlideImgs=[...movies];
  let tamanoSlide=SlideImgs.length;
  const [index,setIndex]=useState(0)
  function SigImg(){
    if(index == tamanoSlide-1){
      setIndex(0)
    }else{
      setIndex(index + 1);
    }
  }
  function AntImg(){
    if (index == 0) {
      setIndex(tamanoSlide-1);
    }else{
      setIndex(index - 1);
    }
  }
  return (
    <div className="Slide" id="Slide">
      <div className="Slide-ContImg">
        <ImgenSlide movie={SlideImgs[index]} key={uniqid()} />
      </div>
      <div className="Slide-Controllers">
        <button className="Slide-BtnController" onClick={AntImg}>
          <BsChevronLeft />
        </button>
        <button className="Slide-BtnController" onClick={SigImg}>
          <BsChevronRight />
        </button>
      </div>
    </div>
  );
}
/*
onClick={AntImg}
onClick={SigImg} 
*/