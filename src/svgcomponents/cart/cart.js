import React from "react";

const Cart = ({ color }) => {
  return (
    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_345_13914)">
        <path
          d="M27.6307 30.2382C28.3671 30.2382 28.964 29.6412 28.964 28.9049C28.964 28.1685 28.3671 27.5715 27.6307 27.5715C26.8943 27.5715 26.2974 28.1685 26.2974 28.9049C26.2974 29.6412 26.8943 30.2382 27.6307 30.2382Z"
          stroke={color}
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.9642 30.2382C13.7006 30.2382 14.2975 29.6412 14.2975 28.9049C14.2975 28.1685 13.7006 27.5715 12.9642 27.5715C12.2278 27.5715 11.6309 28.1685 11.6309 28.9049C11.6309 29.6412 12.2278 30.2382 12.9642 30.2382Z"
          stroke={color}
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.29736 2.23804H7.6307L11.204 20.0914C11.326 20.7052 11.6599 21.2567 12.1474 21.6491C12.6349 22.0416 13.245 22.25 13.8707 22.238H26.8307C27.4564 22.25 28.0665 22.0416 28.554 21.6491C29.0415 21.2567 29.3754 20.7052 29.4974 20.0914L31.6307 8.9047H8.96403"
          stroke={color}
          strokeWidth="2.66667"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_345_13914">
          <rect width="32" height="32" fill="white" transform="translate(0.964111 0.904785)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Cart;
