import React from "react";
import weather from "../weather.json";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsCloudMoonFill,
  BsFillCloudSunFill,
} from "react-icons/bs";

import {
  HStack,
  Text,
  Box,
  VStack,
  StackDivider,
  Button,
  Stack,
} from "@chakra-ui/react";
function forecast() {
  return (
    <div>
      <Box bg={"white"} textAlign="left" p="4" rounded={"xl"}>
        <Text
          textColor={"black"}
          fontWeight="semibold"
          fontSize={"2xl"}
          mb="10px"
        >
          Today's forecast for {weather.query.results.channel.location.city},
          {weather.query.results.channel.location.country},
          {weather.query.results.channel.location.region}
        </Text>
        <Stack
          direction={{ base: "column", lg: "row" }}
          divider={<StackDivider borderColor="gray.200" />}
          spacing={20}
          minW="full"
        >
          <VStack pl={{ base: "0", lg: "20" }}>
            <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
              Morning
            </Text>
            <Text textColor={"blue"} fontWeight="semibold" fontSize={"lg"}>
              {weather.query.results.channel.item.forecast[0].high}
              <span>&#176;</span>
            </Text>
            <Box textColor={"orange.200"} fontSize="4xl">
              <BsFillSunFill />
            </Box>
            <Text textColor={"black"}>
              {weather.query.results.channel.atmosphere.humidity}%
            </Text>
          </VStack>

          <VStack>
            <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
              Afternoon
            </Text>
            <Text textColor={"blue"} fontWeight="semibold" fontSize={"lg"}>
              {weather.query.results.channel.item.forecast[0].high}
              <span>&#176;</span>
            </Text>
            <Box textColor={"orange.200"} fontSize="4xl">
              <BsFillCloudSunFill />
            </Box>
            <Text textColor={"black"}>
              {weather.query.results.channel.atmosphere.humidity}%
            </Text>
          </VStack>

          <VStack>
            <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
              Evening
            </Text>
            <Text textColor={"blue"} fontWeight="semibold" fontSize={"lg"}>
              {weather.query.results.channel.item.forecast[0].high}%
              <span>&#176;</span>
            </Text>
            <Box textColor={"orange.200"} fontSize="4xl">
              <BsCloudMoonFill />
            </Box>
            <Text textColor={"black"}>
              {weather.query.results.channel.atmosphere.humidity}%
            </Text>
          </VStack>

          <VStack>
            <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
              Night
            </Text>
            <Text textColor={"blue"} fontWeight="semibold" fontSize={"lg"}>
              {weather.query.results.channel.item.forecast[0].low}
              <span>&#176;</span>
            </Text>
            <Box textColor={"orange.200"} fontSize="3xl">
              <BsFillMoonStarsFill />
            </Box>
            <Text textColor={"black"}>
              {weather.query.results.channel.atmosphere.humidity}%
            </Text>
          </VStack>
        </Stack>
        <Button colorScheme="facebook" rounded={"full"} mt="20px">
          Next Hours
        </Button>
      </Box>
    </div>
  );
}

export default forecast;
