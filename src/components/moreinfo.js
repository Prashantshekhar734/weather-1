import React from "react";
import weather from "../weather.json";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsCloudMoonFill,
  BsFillCloudSunFill,
} from "react-icons/bs";
import { FiSunrise, FiSunset } from "react-icons/fi";

import {
  HStack,
  Text,
  Box,
  Spacer,
  Grid,
  GridItem,
  Divider,
} from "@chakra-ui/react";
function moreinfo() {
  return (
    <div>
      <Box bg={"white"} textAlign="left" p="4" rounded={"xl"}>
        <Text textColor={"black"} fontWeight="semibold" fontSize={"2xl"}>
          Weather Today in {weather.query.results.channel.location.city},
          {weather.query.results.channel.location.country},
          {weather.query.results.channel.location.region}
        </Text>
        <HStack spacing={20} p="4" minW="full">
          <Box>
            <Text fontSize="6xl" textColor={"black"}>
              {weather.query.results.channel.item.condition.temp}

              <span>&#176;</span>
            </Text>
            <Text
              textColor={"black"}
              fontWeight="semibold"
              fontSize={"xl"}
              textAlign="left"
            >
              Feels like
            </Text>
          </Box>
          <Spacer />
          <Box>
            <HStack>
              <Box textColor={"orange.200"}>
                <HStack>
                  <FiSunrise />
                  <Text textColor={"black"}>
                    {weather.query.results.channel.astronomy.sunrise}
                  </Text>
                </HStack>
              </Box>
              <Box textColor={"orange.200"}>
                <HStack>
                  <FiSunset />
                  <Text textColor={"black"}>
                    {weather.query.results.channel.astronomy.sunset}
                  </Text>
                </HStack>
              </Box>
            </HStack>
          </Box>
        </HStack>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(2, 1fr)" }}
          gap={6}
          p="4"
        >
          <GridItem w="100%" h="10" borderTop={"1px"} borderColor="gray.200">
            <HStack>
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                High/Low
              </Text>
              <Spacer />
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                {weather.query.results.channel.item.forecast[0].high}
                <span>&#176;</span>/
                {weather.query.results.channel.item.forecast[0].low}
                <span>&#176;</span>
              </Text>
            </HStack>
          </GridItem>
          <GridItem w="100%" h="10" borderTop={"1px"} borderColor="gray.200">
            <HStack>
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                Rising
              </Text>
              <Spacer />
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                {weather.query.results.channel.atmosphere.rising}
              </Text>
            </HStack>
          </GridItem>
          <GridItem w="100%" h="10" borderTop={"1px"} borderColor="gray.200">
            <HStack>
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                Humidity
              </Text>
              <Spacer />
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                {weather.query.results.channel.atmosphere.humidity}%
              </Text>
            </HStack>
          </GridItem>

          <GridItem w="100%" h="10" borderTop={"1px"} borderColor="gray.200">
            <HStack>
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                Wind
              </Text>
              <Spacer />
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                {weather.query.results.channel.wind.speed}mph
              </Text>
            </HStack>
          </GridItem>

          <GridItem w="100%" h="10" borderTop={"1px"} borderColor="gray.200">
            <HStack>
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                Visibility
              </Text>
              <Spacer />
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                {weather.query.results.channel.atmosphere.visibility}km
              </Text>
            </HStack>
          </GridItem>

          <GridItem w="100%" h="10" borderTop={"1px"} borderColor="gray.200">
            <HStack>
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                Pressure
              </Text>
              <Spacer />
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                {weather.query.results.channel.atmosphere.pressure}mb
              </Text>
            </HStack>
          </GridItem>

          <GridItem w="100%" h="10" borderTop={"1px"} borderColor="gray.200">
            <HStack>
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                Sunrise
              </Text>
              <Spacer />
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                {weather.query.results.channel.astronomy.sunrise}
              </Text>
            </HStack>
          </GridItem>

          <GridItem w="100%" h="10" borderTop={"1px"} borderColor="gray.200">
            <HStack>
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                Sunset
              </Text>
              <Spacer />
              <Text textColor={"black"} fontWeight="semibold" fontSize={"xl"}>
                {weather.query.results.channel.astronomy.sunset}
              </Text>
            </HStack>
          </GridItem>
        </Grid>
      </Box>
    </div>
  );
}

export default moreinfo;
