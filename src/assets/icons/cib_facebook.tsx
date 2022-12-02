import { IconProps } from "@/interfaces";
import styled from "styled-components";

export const CibFacebookIcon = ({ onClick }: IconProps) => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_46_1208)">
        <path
          d="M24 12C24 5.37075 18.6248 0 12 0C5.37075 0 0 5.37075 0 12C0 17.988 4.38675 22.953 10.125 23.8522V15.4695H7.07775V12.0007H10.125V9.3555C10.125 6.34875 11.9138 4.68825 14.6558 4.68825C15.969 4.68825 17.3438 4.92225 17.3438 4.92225V7.875H15.828C14.34 7.875 13.875 8.80125 13.875 9.75V12H17.2028L16.668 15.4688H13.875V23.8515C19.6087 22.9523 24 17.9872 24 11.9992V12Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_46_1208">
          <rect width="24" height="24" fill="none" />
        </clipPath>
      </defs>
    </Svg>
  );
};

const Svg = styled.svg`
  background: transparent;
`;