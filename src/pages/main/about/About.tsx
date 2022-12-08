import { Box, Flex, Image, Text, TextProps } from "@chakra-ui/react";
import Image1 from "@/assets/image-1.png";
import Image2 from "@/assets/image-2.png";
import Image3 from "@/assets/image-3.png";
import Image4 from "@/assets/image-4.png";
import Image5 from "@/assets/image-5.png";
import Image6 from "@/assets/image-6.png";
import { IconQoute } from "@/assets";
import { Color } from "@/theme";
interface TextTitleProps extends TextProps {
  hideName?: boolean;
  text?: string | JSX.Element;
}
const TextTitle = ({
  hideName = false,
  text = "",
  ...props
}: TextTitleProps) => {
  return (
    <Text fontSize="40px" fontWeight="500" lineHeight="40px" {...props}>
      {!hideName && (
        <Text>
          With{" "}
          <Text as="span" color={Color.CamFF7B42}>
            NgaoduVietnam,
          </Text>{" "}
        </Text>
      )}
      {text}
    </Text>
  );
};

export const About = () => {
  return (
    <Box px="165px" paddingBottom="150px">
      <Flex paddingTop="171px" height="794px">
        <Box position="relative" flex={1} paddingRight="16px">
          <Image
            src={Image1}
            width="calc(100% - 95px)"
            height="calc(100% - 82px)"
          />
          <Image src={Image2} position="absolute" bottom={0} right={0} />
        </Box>
        <Box flex={1} paddingLeft="16px">
          <TextTitle text="immerses you in majestic space and unique cultural features" />
          <Flex marginTop="48px">
            <IconQoute />
            <Text
              flex={1}
              marginLeft="34px"
              color={Color.BodyText}
              fontSize="16px"
              lineHeight="26px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
              feugiat nec consequat, montes. Elementum scelerisque phasellus
              donec lectus ullamcorper faucibus. Malesuada et adipiscing
              molestie egestas leo ut.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
              feugiat nec consequat, montes.
            </Text>
          </Flex>
        </Box>
      </Flex>
      {/*  */}
      <Flex paddingTop="150px">
        <Box flex={1} paddingRight="16px">
          <TextTitle text="immerses you in majestic space and unique cultural features" />
          <Text
            flex={1}
            marginRight="98px"
            color={Color.BodyText}
            fontSize="16px"
            lineHeight="26px"
            marginTop="48px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
            feugiat nec consequat, montes. Elementum scelerisque phasellus donec
            lectus ullamcorper faucibus. Malesuada et adipiscing molestie
            egestas leo ut.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
            feugiat nec consequat, montes.
          </Text>
        </Box>
        <Box flex={1} paddingLeft="16px">
          <Image src={Image3} width="100%" />
        </Box>
      </Flex>
      {/*  */}
      <Box paddingTop="150px">
        <Image src={Image4} width="100%" height="463px" />
        <TextTitle
          hideName
          marginTop="60px"
          text={
            <Text>
              Experience the traditional
              <Text> cultural beauties of Vietnam</Text>
            </Text>
          }
        />
        <Flex>
          <Text
            flex={1}
            marginRight="16px"
            color={Color.BodyText}
            fontSize="16px"
            lineHeight="26px"
            marginTop="48px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
            feugiat nec consequat, montes. Elementum scelerisque phasellus donec
            lectus ullamcorper faucibus. Malesuada et adipiscing molestie
            egestas leo ut.
          </Text>
          <Text
            flex={1}
            marginLeft="16px"
            color={Color.BodyText}
            fontSize="16px"
            lineHeight="26px"
            marginTop="48px"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
            feugiat nec consequat, montes. Elementum scelerisque phasellus donec
            lectus ullamcorper faucibus.
          </Text>
        </Flex>
        <Flex marginTop="92px">
          <Box flex={1}>
            <Image src={Image5} width="445px" marginRight="16px" />
          </Box>
          <Flex marginLeft="16px" flex={1} flexDirection="column">
            <Text
              flex={1}
              color={Color.BodyText}
              fontSize="16px"
              lineHeight="26px"
              // marginTop="48px"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
              feugiat nec consequat, montes. Elementum scelerisque phasellus
              donec lectus ullamcorper faucibus.
            </Text>
            <Image src={Image6} width="100%" />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
