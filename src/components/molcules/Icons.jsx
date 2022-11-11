import {
  InfoIcon,
  SettingsIcon,
  StarIcon,
  SunIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import { Button, HStack } from "@chakra-ui/react";

export const Icons = () => {
  return (
    <HStack spacing={5}>
      <SunIcon boxSize="1.2em" />
      <StarIcon boxSize="1.2em" />
      <TimeIcon boxSize="1.2em" />
      <SettingsIcon boxSize="1.2em" />
      <Button
        leftIcon={<InfoIcon color="red.500" boxSize="1.2em" />}
        color="black"
      >
        Sponsor
      </Button>
    </HStack>
  );
};
