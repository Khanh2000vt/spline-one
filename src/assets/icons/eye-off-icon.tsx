import { IconProps } from "@/interfaces";

export const EyeOffIcon = ({ onClick }: IconProps) => {
  return (
    <svg
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <g clipPath="url(#clip0_1355_2863)">
        <path
          d="M14.9579 14.9463C14.6832 15.241 14.352 15.4774 13.984 15.6414C13.616 15.8054 13.2188 15.8935 12.816 15.9007C12.4132 15.9078 12.0131 15.8337 11.6395 15.6828C11.2659 15.5319 10.9266 15.3073 10.6417 15.0224C10.3569 14.7376 10.1323 14.3982 9.9814 14.0247C9.83052 13.6511 9.75642 13.251 9.76352 12.8482C9.77063 12.4454 9.8588 12.0481 10.0228 11.6801C10.1867 11.3121 10.4231 10.9809 10.7179 10.7063M18.7779 18.7663C17.0685 20.0693 14.987 20.7912 12.8379 20.8263C5.83789 20.8263 1.83789 12.8263 1.83789 12.8263C3.08178 10.5082 4.80703 8.4829 6.89789 6.88629L18.7779 18.7663ZM10.7379 5.06629C11.4262 4.90517 12.131 4.82463 12.8379 4.82629C19.8379 4.82629 23.8379 12.8263 23.8379 12.8263C23.2309 13.9619 22.5069 15.031 21.6779 16.0163L10.7379 5.06629Z"
          stroke="#4F4F4F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1.83789 1.82629L23.8379 23.8263"
          stroke="#4F4F4F"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1355_2863">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.837891 0.826294)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};