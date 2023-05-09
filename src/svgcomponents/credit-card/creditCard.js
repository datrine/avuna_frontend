import React from "react";

const CreditCard = ({ color }) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1163_19037)">
        <path
          d="M21.5 4.19531H3.5C2.39543 4.19531 1.5 5.09074 1.5 6.19531V18.1953C1.5 19.2999 2.39543 20.1953 3.5 20.1953H21.5C22.6046 20.1953 23.5 19.2999 23.5 18.1953V6.19531C23.5 5.09074 22.6046 4.19531 21.5 4.19531Z"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M1.5 10.1953H23.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1163_19037">
          <rect width="24" height="24" fill="white" transform="translate(0.5 0.195312)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CreditCard;
