import { EyeIcon, EyeOffIcon } from "@/assets";
import { TextInputProps } from "@/interfaces";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

enum Type {
  DEFAULT = "text",
  PASSWORD = "password",
}

export const TextInput = ({
  placeholder = "  ",
  label = " ",
  type = Type.DEFAULT,
  ...props
}: TextInputProps) => {
  const isPassword = type === Type.PASSWORD;
  const [isShow, setIsShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const handleClickEye = () => setIsShow(!isShow);
  const handleChange = (event: ChangeEvent<any>) =>
    setValue(event.target.value);
  return (
    <Box py={5} {...props}>
      <FormControl variant="floating" id="first-name" width="100%">
        <InputGroup>
          <Input
            value={value}
            placeholder={placeholder}
            onChange={handleChange}
            variant="flushed"
            width="100%"
            type={
              type === Type.PASSWORD
                ? isShow
                  ? Type.DEFAULT
                  : Type.PASSWORD
                : type
            }
          />
          {isPassword && (
            <InputRightElement
              _hover={{
                cursor: "pointer",
              }}
              _focus={{}}
            >
              {isShow ? (
                <EyeOffIcon onClick={handleClickEye} />
              ) : (
                <EyeIcon onClick={handleClickEye} />
              )}
            </InputRightElement>
          )}
        </InputGroup>
        <FormLabel>{label}</FormLabel>
        <FormHelperText>{}</FormHelperText>
        <FormErrorMessage>{}</FormErrorMessage>
      </FormControl>
    </Box>
  );
};
