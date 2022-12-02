import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import styled from "styled-components";
import Banner from "@/assets/banner-login.png";
import { Color } from "@/theme";
import { Link } from "react-router-dom";
import { BaseButton, TextInput } from "@/components";
import { CibFacebookIcon } from "@/assets";
export default function Login() {
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
            Sign in
          </Text>
          <Text
            fontSize="18px"
            color={Color.BodyText}
            fontWeight="400"
            lineHeight="22px"
          >
            Welcome to NgaoduVietnam
          </Text>
          <TextInput marginTop="65px" label="Email Address" />
          <TextInput label="Password" type="password" />
          <Flex alignSelf="flex-end">
            <Link to="forgot">
              <Text
                color={Color.SubText}
                fontSize="14px"
                lineHeight="22px"
                fontWeight={400}
              >
                Forgot password?
              </Text>
            </Link>
          </Flex>
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
              Don’t have an account?
            </Text>
            <Link to="sign-up">
              <Text
                fontSize="16px"
                lineHeight="21px"
                fontWeight="400"
                color={Color.CamFF7B42}
              >
                Sign up
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Flex>
      <BannerImg src={Banner} />
    </Flex>
  );
}

const BannerImg = styled.img`
  src: ${(p) => p.src};
  height: 100vh;
  align-self: "end";
  flex: 0.6;
`;
