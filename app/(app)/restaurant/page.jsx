'use client';
import "./restaurant.css";


export default function Home() {
    return (
      <div className="restaurant-container">
        {/* heading */}
       <div className="res-heading flex flex-row justify-between flex-wrap self-center">
          <div className="res-heading-text flex self-center"> Restaurant Information</div>
          <button className="res-heading-button ">Live Preview</button>
       </div>
      </div>
    );
}