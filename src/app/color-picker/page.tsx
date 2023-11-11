"use client"
import React, { ChangeEvent, useState } from "react";
import {
  Box,
  ChakraProvider,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Center,
  SimpleGrid,
  extendTheme,
  Input,
  Heading,
  VStack
} from "@chakra-ui/react";

const Page = () => {
  const [color, setColor] = useState<string>("gray.500");

  const colors: string[] = [
    "gray.500",
    "red.500",
    "gray.700",
    "green.500",
    "blue.500",
    "blue.800",
    "yellow.500",
    "orange.500",
    "purple.500",
    "pink.500"
  ];

  return (
    <VStack>
      <Center marginTop={50}>
        <Heading fontSize="xl">Color picker with Chakra UI</Heading>
      </Center>
      <Center marginTop={5}>
        <Popover variant="picker">
          <PopoverTrigger>
            <Button
              aria-label={color}
              background={color}
              height="22px"
              width="22px"
              padding={0}
              minWidth="unset"
              borderRadius={3}
            ></Button>
          </PopoverTrigger>
          <PopoverContent width="170px">
            <PopoverArrow bg={color} />
            <PopoverCloseButton color="white" />
            <PopoverHeader
              height="100px"
              backgroundColor={color}
              borderTopLeftRadius={5}
              borderTopRightRadius={5}
              color="white"
            >
              <Center height="100%">{color}</Center>
            </PopoverHeader>
            <PopoverBody height="120px">
              <SimpleGrid columns={5} spacing={2}>
                {colors.map((c) => (
                  <Button
                    key={c}
                    aria-label={c}
                    background={c}
                    height="22px"
                    width="22px"
                    padding={0}
                    minWidth="unset"
                    variant='outline'
                    // border={"1px solid"}
                    borderRadius={3}
                    _hover={{ background: c }}
                    onClick={() => {
                      setColor(c);
                    }}
                  ></Button>
                ))}
              </SimpleGrid>
              <Input
                borderRadius={3}
                marginTop={3}
                placeholder="red.100"
                size="sm"
                value={color}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setColor(e.target.value);
                }}
              />
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Center>
    </VStack>
  );
}

export default Page;