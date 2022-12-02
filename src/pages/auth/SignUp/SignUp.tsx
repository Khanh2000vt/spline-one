import { CibFacebookIcon } from "@/assets";
import { BaseButton, TextInput } from "@/components";
import { Color } from "@/theme";
import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Banner from "@/assets/banner-login.png";
import styled from "styled-components";
import { Path } from "@/constant";
export const SignUp = () => {
  return (
    <Flex>
      <Flex flex={0.4} justifyContent="center" alignItems="center">
        <Flex flexDirection="column" width={350}>
          <Text
            fontSize="48px"
            color={Color.TitleText}
            fontWeight="500"
            lineHeight="57.6px"
            marginBottom="30px"
          >
            Register
          </Text>
          <Text
            fontSize="18px"
            color={Color.BodyText}
            fontWeight="400"
            lineHeight="22px"
          >
            Welcome to NgaoduVietnam
          </Text>
          <Flex marginTop="65px">
            <TextInput label="First Name" />
            <TextInput label="Last Name" />
          </Flex>
          <TextInput label="Email Address" />
          <TextInput label="Password" type="password" />
          <BaseButton
            background={Color.CamFF7B42}
            color="#ffffff"
            marginY="32px"
          >
            Sign in
          </BaseButton>
          <BaseButton
            background={Color.Blue4E86DB}
            IconLeft={<CibFacebookIcon />}
            color="#ffffff"
            fontWeight="400"
            lineHeight="18px"
            marginTextX="10px"
          >
            Sign in with Facebook
          </BaseButton>
          <Flex marginTop="30px">
            <Text
              fontSize="16px"
              lineHeight="21px"
              fontWeight="238"
              color={Color.Gray686868}
              marginRight="8px"
            >
              Member already?
            </Text>
            <Link to={Path.HOME}>
              <Text
                fontSize="16px"
                lineHeight="21px"
                fontWeight="400"
                color={Color.CamFF7B42}
              >
                Sign in
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <BannerImg src={Banner} />
    </Flex>
  );
};

const BannerImg = styled.img`
  src: ${(p) => p.src};
  height: 100vh;
  align-self: "end";
  flex: 0.6;
`;
