import Image from "next/image";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const RecCard = () => {
  return (
    <div className="flex flex-col w-[300px] shadow-lg">
      <Image
        src="/images/CardImage.png"
        width={300}
        height={300}
        alt="Card Image"
      />
      <div className="p-4">
        <h1>Design Liberalized Exchange Rate Management</h1>

        <div>
          <div className="flex items-center gap-2 py-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-xs">
              by Fred Boone{" "}
              <span className="text-[#B9B9C3]"> | Jan 10, 2020</span>
            </p>
          </div>

          <div className="flex gap-2 py-2">
            <p className="bg-[#F5F5F5] px-4 py-2 rounded-full text-[#8E8E8E]">
              UI/UX
            </p>
            <p className="bg-[#F5F5F5] px-4 py-2 rounded-full text-[#8E8E8E]">
              Development
            </p>
          </div>

          <p className="text-sm py-2">
            A little personality goes a long way, especially on a business blog.
            So don’t be afraid to let loose.
          </p>

          <hr />

          <div className="flex justify-between pt-3">
            <div className="flex gap-2 items-center">
              <MessageIcon />
              <p>2.3k Likes</p>
            </div>

            <p className="text-[#7367F0] cursor-pointer">Read More</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function MessageIcon() {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.63924 1.8728H17.629C19.2064 1.8728 20.4126 3.09015 20.4126 4.68207V14.0463C20.4126 15.6382 19.2064 16.8556 17.629 16.8556H6.86606L3.43305 20.3203C3.24748 20.5076 3.06191 20.6012 2.78356 20.6012C2.69077 20.6012 2.5052 20.6012 2.41242 20.5076C2.04128 20.414 1.85571 20.0394 1.85571 19.6648V4.68207C1.85571 3.09015 3.06191 1.8728 4.63924 1.8728ZM17.629 14.9827C18.1857 14.9827 18.5569 14.6081 18.5569 14.0463V4.68207C18.5569 4.12021 18.1857 3.74565 17.629 3.74565H4.63924C4.08253 3.74565 3.7114 4.12021 3.7114 4.68207V17.4174L5.84544 15.2636C6.031 15.0763 6.21657 14.9827 6.49493 14.9827H17.629Z"
        fill="black"
      />
      <mask
        id="mask0_1_1063"
        maskUnits="userSpaceOnUse"
        x="1"
        y="1"
        width="20"
        height="20"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M4.63924 1.8728H17.629C19.2064 1.8728 20.4126 3.09015 20.4126 4.68207V14.0463C20.4126 15.6382 19.2064 16.8556 17.629 16.8556H6.86606L3.43305 20.3203C3.24748 20.5076 3.06191 20.6012 2.78356 20.6012C2.69077 20.6012 2.5052 20.6012 2.41242 20.5076C2.04128 20.414 1.85571 20.0394 1.85571 19.6648V4.68207C1.85571 3.09015 3.06191 1.8728 4.63924 1.8728ZM17.629 14.9827C18.1857 14.9827 18.5569 14.6081 18.5569 14.0463V4.68207C18.5569 4.12021 18.1857 3.74565 17.629 3.74565H4.63924C4.08253 3.74565 3.7114 4.12021 3.7114 4.68207V17.4174L5.84544 15.2636C6.031 15.0763 6.21657 14.9827 6.49493 14.9827H17.629Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1_1063)">
        <rect width="22.2682" height="22.4741" fill="#6E6B7B" />
      </g>
    </svg>
  );
}

export default RecCard;
