import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Image1 from "@/assets/image-1.png";
import Image2 from "@/assets/image-2.png";
import Image3 from "@/assets/image-3.png";
import Image4 from "@/assets/image-4.png";
import Image5 from "@/assets/image-5.png";
import Image6 from "@/assets/image-6.png";
import { IconQoute } from "@/assets";

export const About = () => {
  return (
    <Box px="165px">
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
          <Text>
            With NgaoduVietnam, immerses you in majestic space and unique
            cultural features
          </Text>
          <Flex>
            <IconQoute />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
              feugiat nec consequat, montes. Elementum scelerisque phasellus
              donec lectus ullamcorper faucibus. Malesuada et adipiscing
              molestie egestas leo ut. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Purus viverra nuQlla eget sed odio. Vulputate
              risus faucibus sem non, feugiat nec consequat, montes.
            </Text>
          </Flex>
        </Box>
      </Flex>
      <Flex paddingTop="171px" height="623px">
        <Box position="relative" flex={1} paddingRight="16px">
          <Image
            src={Image1}
            width="calc(100% - 95px)"
            height="calc(100% - 95px)"
          />
          <Image src={Image2} position="absolute" bottom={0} right={0} />
        </Box>
        <Box flex={1} paddingLeft="16px">
          <Text>
            With NgaoduVietnam, immerses you in majestic space and unique
            cultural features
          </Text>
          <Flex>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              viverra nuQlla eget sed odio. Vulputate risus faucibus sem non,
              feugiat nec consequat, montes. Elementum scelerisque phasellus
              donec lectus ullamcorper faucibus. Malesuada et adipiscing
              molestie egestas leo ut. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Purus viverra nuQlla eget sed odio. Vulputate
              risus faucibus sem non, feugiat nec consequat, montes.
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
