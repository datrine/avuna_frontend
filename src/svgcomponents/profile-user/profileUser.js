import React from "react";

const ProfileUser = ({ color }) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.5 21.1953V19.1953C20.5 18.1344 20.0786 17.117 19.3284 16.3669C18.5783 15.6167 17.5609 15.1953 16.5 15.1953H8.5C7.43913 15.1953 6.42172 15.6167 5.67157 16.3669C4.92143 17.117 4.5 18.1344 4.5 19.1953V21.1953"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.5 11.1953C14.7091 11.1953 16.5 9.40445 16.5 7.19531C16.5 4.98617 14.7091 3.19531 12.5 3.19531C10.2909 3.19531 8.5 4.98617 8.5 7.19531C8.5 9.40445 10.2909 11.1953 12.5 11.1953Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ProfileUser;
