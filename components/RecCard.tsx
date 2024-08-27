import Image from "next/image";
import React from "react";

const RecCard = () => {
  return (
    <div>
      <Image
        src="/images/CardImage.png"
        width={300}
        height={300}
        alt="Card Image"
      />
    </div>
  );
};

export default RecCard;
