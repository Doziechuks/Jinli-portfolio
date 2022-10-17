import './homePageContainer.css';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import data from './homeData';
import HomePageItems from './homePageItems';
import { useState, useEffect } from "react";

const HomePageContainer = () => {
  const [index, setIndex] = useState(0);

  useEffect (() => {
    const lastIndex = data.length-1;
    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
      setIndex(0);
    }
  }, [index, data])

  useEffect(()=>{
    const timerId = setInterval(()=>{
      setIndex(index + 1)
    }, 4000);

    return () => clearInterval(timerId)
  }, [index])
  return (
    <div className="homepagecontainer-wrapper">
      {data.map((items, itemsIndex) => {
        let slidePosition = "next-slide";

        if (itemsIndex === index) {
          slidePosition = "active-slide";
        }
        if (
          itemsIndex === index - 1 ||
          (index === 0 && itemsIndex === data.length - 1)
        ) {
          slidePosition = "last-slide";
        }
        return (
          <div
            className={`homecontainer-content-wrapper ${slidePosition}`}
            key={items.id}
          >
            <HomePageItems items={items} />
          </div>
        );
      })}
      <div className="arrows">
        <div className="arrow-left" onClick={() => setIndex(index - 1)}>
          <FaAngleLeft className="arrow-font" />
        </div>
        <div className="arrow-right" onClick={() => setIndex(index + 1)}>
          <FaAngleRight className="arrow-font" />
        </div>
      </div>
    </div>
  );
}
 
export default HomePageContainer;