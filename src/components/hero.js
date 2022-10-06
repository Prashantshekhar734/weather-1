import React from "react";
import weather from "../weather.json";
import {
  Box,
  Grid,
  GridItem,
  Stack,
  HStack,
  VStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsCloudMoonFill,
  BsFillCloudSunFill,
} from "react-icons/bs";
function hero() {
  var date = new Date(weather.query.results.channel.item.condition.date);
  //get time from date in US format

  var time = date.toLocaleTimeString("en-us", {
    timeZone: "America/New_York",
  });
  var day = date.toLocaleDateString("en-us", {
    timeZone: "America/New_York",
  });
  var sunrise = weather.query.results.channel.astronomy.sunrise.split(" ");

  var sunset = weather.query.results.channel.astronomy.sunset.split(" ");

  var sunriseTime = `${sunrise[0]}:00 AM`;

  var sunsetTime = `${sunset[0]}:00 PM`;

  if (time > sunriseTime && time < sunsetTime) {
    var dayornight = "night";
  } else {
    var dayornight = "day";
  }

  return (
    <div>
      <Box bg={"#050F16"} rounded={"xl"}>
        <HStack
          p={4}
          textAlign={"left"}
          justifyItems="left"
          justifyContent={"left"}
          alignContent={"left"}
        >
          <Text fontSize="2xl" textColor={"white"} fontWeight="semibold">
            {weather.query.results.channel.location.city},
            {weather.query.results.channel.location.country},
            {weather.query.results.channel.location.region}
          </Text>
          <Text textColor={"white"} fontSize="2xl">
            As of {time} EST
          </Text>
        </HStack>
        <Box
          textAlign={"left"}
          justifyItems="left"
          p={"4"}
          bg="#0E2C46"
          rounded={"xl"}
        >
          <HStack>
            <Text fontSize="6xl" textColor={"white"}>
              {weather.query.results.channel.item.condition.temp}

              <span>&#176;</span>
            </Text>
            <Spacer />
            {dayornight === "night" && (
              <Box pr="10px" fontSize={"6xl"} textColor="#CCCCCC">
                <BsFillMoonStarsFill />
              </Box>
            )}
            {dayornight === "day" && (
              <Box pr="10px" fontSize={"6xl"} textColor="#CCCCCC">
                <BsFillSunFill />
              </Box>
            )}
          </HStack>

          <Text fontSize="2xl" textColor={"white"}>
            {weather.query.results.channel.item.condition.text}
          </Text>
          <HStack>
            <Text fontSize="2xl" textColor={"white"}>
              Day {weather.query.results.channel.item.forecast[0].high}
              <span>&#176;</span>
            </Text>
            <Text fontSize="4xl" textColor={"white"} fontWeight={"extrabold"}>
              <sup>.</sup>
            </Text>
            <Text fontSize="2xl" textColor={"white"}>
              Night {weather.query.results.channel.item.forecast[0].low}
              <span>&#176;</span>
            </Text>
          </HStack>
        </Box>
      </Box>
    </div>
  );
}

export default hero;
