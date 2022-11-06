import { Stack, Text } from "@chakra-ui/react";

export const CText = () => {
  return (
    <Stack spacing={1}>
      <Text as='b' fontSize="xs">Bold</Text>
      <br />
      <Text as='i' fontSize="sm">Italic</Text>
      <br />
      <Text as='u' fontSize="md">Underline</Text>
      <br />
      <Text as='abbr' fontSize="lg">I18N</Text>
      <br />
      <Text as='cite' fontSize="xl">Citation</Text>
      <br />
      <Text as='del' fontSize="2xl">Deleted</Text>
      <br />
      <Text as='em' fontSize="3xl">Emphasis</Text>
      <br />
      <Text as='ins' fontSize="4xl">Inserted</Text>
      <br />
      <Text as='kbd' fontSize="5xl">Ctrl + C</Text>
      <br />
      <Text as='mark' fontSize="6xl">Highlighted</Text>
      <br />
      <Text as='s'>Strikethrough</Text>
      <br />
      <Text as='samp'>Sample</Text>
      <br />
      <Text as='sub'>sub</Text>
      <br />
      <Text as='sup'>sup</Text>
    </Stack>
  );
};