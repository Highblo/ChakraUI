import { ArrowForwardIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Box, Button, Center, ChakraProvider, Circle, Container, Flex, Grid, GridItem, HStack, Input, InputGroup, InputLeftElement, Spinner, Square, Stack, Text, useToast, VStack, } from "@chakra-ui/react";

import { CContainer } from "./components/CContainer";
import { Header } from "./components/Header";
import { WhiteBox } from "./components/WhiteBox";
import { theme } from "./theme/theme";

function App() {
  const toast = useToast();

  const clickToast = () => {
    toast({
      title: "hello",
      description: "world",
      status: "success",
      duration: "5000",
      position: "top",
      isClosable: true
    });
  };

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container maxW="4xl" p={2}>
        <CContainer Text1="Box" Text2="divタグのようなもの" />
        <CContainer
          Text1="Heading"
          Text2="h1.h2などの見出し"
          Text3="size noOflines"
        />
        <CContainer
          Text1="Text"
          Text2="pタグのようなもの"
          Text3="fontSize as"
        />
        <Flex justify="space-between">
          <CContainer
            Text1="Center"
            Text2="中央に配置する"
            Text3="fontSize as"
          />
          <WhiteBox>
            <Center bg="tomato" mb={2}>これがセンターです</Center>
            <Center>
              <Circle size="40px" bg="purple.400" mr={1}><PhoneIcon /></Circle>
              <Square size="40px" bg="purple.500"><PhoneIcon /></Square>
            </Center>
          </WhiteBox>
        </Flex>
        <br />
        <Flex justify="space-between">
          <CContainer
            Text1="Container"
            Text2="margin: 0 autoのdiv"
            Text3="fontSize as"
          />
          <WhiteBox>
            <Container maxW='md' bg='blue.600' color='white'>
              "md" Container
            </Container>
            <Container maxW='550px' bg='purple.600' color='white'>
              "550px" Container
            </Container>
            <Container maxW='container.sm' bg='green.400' color='#262626'>
              "container.sm" Container
            </Container>
          </WhiteBox>
        </Flex>
        <br />
        <Flex justify="space-between">
          <CContainer
            Text1="Flex"
            Text2="display: flexに設定されたBox"
            Text3="direction wrap basis grow shrink align justify"
          />
          <WhiteBox>
            <Flex>
              <Box flex="1" h="120px" bg="green.500">box1</Box>
              <Box flex="1" bg="blue.500">box2</Box>
              <Box flex="2" bg="tomato">box3</Box>
            </Flex>
          </WhiteBox>
        </Flex>
        <br />
        <Flex justify="space-between">
          <CContainer
            Text1="Grid"
            Text2="グリッドレイアウト"
            Text3=""
          />
          <WhiteBox>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
              <GridItem w='100%' h='10' bg='blue.500' />
            </Grid>
          </WhiteBox>
        </Flex>
        <br />
        <HStack>
          <Button
            leftIcon={<EmailIcon />}
            colorScheme="blue"
            onClick={clickToast}
          >
            Email
          </Button>
          <Button
            rightIcon={<ArrowForwardIcon />}
            colorScheme="facebook"
            variant="outline"
          >
            ボタン
          </Button>
          <Button
            colorScheme="blue"
            variant="ghost"
            _hover={{ bg: "blue.200", color: "white" }}
          >
            ボタン
          </Button>
          <Button
            colorScheme="teal"
          >
            ボタン
          </Button>
        </HStack>
        <br/>
          <InputGroup>
            <InputLeftElement
              children={<PhoneIcon color='cyan.400' />}
            />
            <Input variant="flushed" type='tel' placeholder='Phone number' />
          </InputGroup>
        </Container>
    </ChakraProvider>
  );
};

export default App;