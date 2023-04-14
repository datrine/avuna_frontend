import React from "react";

const BusinessMana = ({ color }) => {
  return (
    <svg width="64" height="65" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.3333 22.0332V35.3665H36V33.7665C36 33.2123 35.7842 32.6798 35.3985 32.2818C35.0128 31.8838 34.4873 31.6516 33.9333 31.6343L33.8666 31.6332H30.1333C29.5675 31.6332 29.0249 31.858 28.6248 32.258C28.2247 32.6581 28 33.2007 28 33.7665V35.3665H10.6666V22.0332H53.3333Z"
        fill="white"
      />
      <path
        d="M50.6667 20.7H13.3334C11.1242 20.7 9.33337 22.4908 9.33337 24.7V48.7C9.33337 50.9091 11.1242 52.7 13.3334 52.7H50.6667C52.8758 52.7 54.6667 50.9091 54.6667 48.7V24.7C54.6667 22.4908 52.8758 20.7 50.6667 20.7Z"
        stroke={color}
        strokeWidth="2.46154"
      />
      <path d="M36.5333 36.7H53.8667" stroke={color} strokeWidth="2.46154" strokeLinecap="square" />
      <path
        d="M32.5334 32.9666H31.4667C30.2885 32.9666 29.3334 33.9217 29.3334 35.0999V38.5666C29.3334 39.7448 30.2885 40.6999 31.4667 40.6999H32.5334C33.7116 40.6999 34.6667 39.7448 34.6667 38.5666V35.0999C34.6667 33.9217 33.7116 32.9666 32.5334 32.9666Z"
        stroke={color}
        strokeWidth="2.46154"
      />
      <path d="M10.6666 36.7H28" stroke={color} strokeWidth="2.46154" strokeLinecap="square" />
      <path
        d="M39.2 15.3667H24.8C23.6218 15.3667 22.6666 16.3218 22.6666 17.5V18.5667C22.6666 19.7449 23.6218 20.7 24.8 20.7H39.2C40.3782 20.7 41.3333 19.7449 41.3333 18.5667V17.5C41.3333 16.3218 40.3782 15.3667 39.2 15.3667Z"
        stroke={color}
        strokeWidth="2.46154"
      />
    </svg>
  );
};

export default BusinessMana;