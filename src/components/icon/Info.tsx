import React from 'react';

export function Info() {
  return (
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 0.819641C2.23886 0.819641 0 3.06326 0 5.83055C0 8.59806 2.23886 10.8419 5 10.8419C7.76114 10.8419 10 8.59806 10 5.83055C10 3.06326 7.76136 0.819641 5 0.819641ZM5.76433 8.56678C5.76433 8.98698 5.42101 9.32756 5.00218 9.32756C4.58313 9.32756 4.24004 8.98698 4.24004 8.56678V5.23842C4.24004 4.81844 4.58313 4.47786 5.00218 4.47786C5.42101 4.47786 5.76433 4.81822 5.76433 5.23842V8.56678ZM5 3.84942C4.53752 3.84942 4.16256 3.47362 4.16256 3.01033C4.16256 2.5466 4.53752 2.17124 5 2.17124C5.46226 2.17124 5.83744 2.5466 5.83744 3.01033C5.83744 3.47362 5.46226 3.84942 5 3.84942Z"
        fill="#00C08B"
      />
    </svg>
  );
}
export function Slider({
  showSlip,
  shrink,
}: {
  showSlip: boolean;
  shrink?: boolean;
}) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${shrink ? 'transform scale-75' : ''}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6957 13.0652C12.6957 14.1338 11.8294 15 10.7609 15C9.69235 15 8.82611 14.1338 8.82611 13.0652C8.82612 11.9967 9.69235 11.1304 10.7609 11.1304C11.8294 11.1304 12.6957 11.9967 12.6957 13.0652ZM14.5749 12.0941C14.6145 12.0894 14.6548 12.0869 14.6957 12.0869L15.9565 12.0869C16.5088 12.0869 16.9565 12.5346 16.9565 13.0869C16.9565 13.6392 16.5088 14.0869 15.9565 14.0869L14.6957 14.0869C14.651 14.0869 14.6071 14.084 14.564 14.0783C14.1171 15.7605 12.5837 17 10.7609 17C8.93806 17 7.40472 15.7605 6.95777 14.0783C6.91471 14.084 6.87078 14.0869 6.82617 14.0869L1.00009 14.0869C0.447802 14.0869 8.61245e-05 13.6392 8.61728e-05 13.0869C8.62211e-05 12.5346 0.447802 12.0869 1.00009 12.0869L6.82617 12.0869C6.86702 12.0869 6.90729 12.0894 6.94686 12.0941C7.37926 10.3906 8.92291 9.13044 10.7609 9.13044C12.5989 9.13044 14.1425 10.3906 14.5749 12.0941ZM4.26086 3.93478C4.26086 2.86623 5.1271 2 6.19565 2C7.2642 2 8.13043 2.86623 8.13043 3.93478C8.13043 5.00333 7.2642 5.86957 6.19565 5.86957C5.1271 5.86956 4.26086 5.00333 4.26086 3.93478ZM6.19565 9.66601e-07C4.3728 8.07243e-07 2.83946 1.23952 2.39252 2.92168C2.34944 2.91601 2.3055 2.91309 2.26087 2.91309L0.999999 2.91309C0.447715 2.91309 -7.14972e-07 3.3608 -7.63254e-07 3.91309C-8.11537e-07 4.46537 0.447715 4.91309 0.999999 4.91309L2.26087 4.91309C2.30173 4.91309 2.34202 4.91063 2.3816 4.90587C2.81401 6.60936 4.35766 7.86956 6.19565 7.86957C8.03363 7.86957 9.57728 6.60936 10.0097 4.90588C10.0493 4.91064 10.0895 4.91309 10.1304 4.91309L15.9565 4.91309C16.5087 4.91309 16.9565 4.46537 16.9565 3.91309C16.9565 3.3608 16.5087 2.91309 15.9565 2.91309L10.1304 2.91309C10.0858 2.91309 10.0418 2.91601 9.99877 2.92167C9.55182 1.23952 8.01849 1.12596e-06 6.19565 9.66601e-07Z"
        fill={showSlip ? '#00C6A2' : '#7E8A93'}
      />
    </svg>
  );
}

export const PopUpContainer = () => {
  return (
    <svg
      width="293"
      height="124"
      viewBox="0 0 293 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-3"
      style={{
        zIndex: -1,
        transform: 'scale(1.08,1)',
      }}
    >
      <path
        d="M1 9C1 4.58172 4.58172 1 9 1H280C284.418 1 288 4.58172 288 9V57.0858C288 57.351 288.105 57.6054 288.293 57.7929L291.293 60.7929C291.683 61.1834 291.683 61.8166 291.293 62.2071L288.293 65.2071C288.105 65.3946 288 65.649 288 65.9142V115C288 119.418 284.418 123 280 123H9.00001C4.58173 123 1 119.418 1 115V9Z"
        fill="#1D2932"
        stroke="#7E8A93"
      />
    </svg>
  );
};

export const PopUpContainerMulti = () => {
  return (
    <svg
      width="293"
      height="152"
      viewBox="0 0 293 152"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 left-3"
      style={{
        zIndex: -1,
        transform: 'scale(1.08,1)',
      }}
    >
      <path
        d="M1 9C1 4.58172 4.58172 1 9 1H280C284.418 1 288 4.58172 288 9V71.0858C288 71.351 288.105 71.6054 288.293 71.7929L291.293 74.7929C291.683 75.1834 291.683 75.8166 291.293 76.2071L288.293 79.2071C288.105 79.3946 288 79.649 288 79.9142V143C288 147.418 284.418 151 280 151H9.00001C4.58173 151 1 147.418 1 143V9Z"
        fill="#1D2932"
        stroke="#7E8A93"
      />
    </svg>
  );
};
