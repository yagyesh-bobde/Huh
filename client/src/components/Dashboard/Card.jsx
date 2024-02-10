import React from "react";
import Button from "./Button";

const Card = ({ img_link, width, height, card_name, btn_name }) => {
  return (
    <div className=" shadow-yellow-950 shadow-lg border-2 rounded-[15px]">
      <div className="items-center flex flex-col justify-between  h-[200px] pb-4 w-[225px]">
        <img src={img_link} alt="" width={width} height={height} />
        {card_name}

        <Button name={btn_name} />
      </div>
    </div>
  );
};

export default Card;
