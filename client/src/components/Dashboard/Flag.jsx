import React from "react";
import Card from "./Card";

const Flag = () => {
  return (
    <div className="flex gap-12 items-center justify-center">
      <Card
        img_link={"/images/dashboard/english.svg"}
        width={200}
        height={250}
        card_name={"English"}
        btn_name={"Start Here"}
      />

      <Card
        img_link={"/images/dashboard/albanian.svg"}
        width={200}
        height={250}
        card_name={"Albanian"}
        btn_name={"Start Here"}
      />

      <Card
        img_link={"/images/dashboard/italy.svg"}
        width={200}
        height={250}
        card_name={"Italian"}
        btn_name={"Start Here"}
      />
    </div>
  );
};

export default Flag;
