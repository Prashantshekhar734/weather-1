import { Box, HStack, Text } from "@chakra-ui/react";
import Forecast from "./components/forecast";
import Moreinfo from "./components/moreinfo";
import Hero from "./components/hero";

function App() {
  return (
    <div>
      <Box bg="#083B65">
        <Box p="4">
          <Hero />
        </Box>
        <Box p="4">
          <Forecast />
        </Box>
        <Box p="4">
          <Moreinfo />
        </Box>
      </Box>
    </div>
  );
}

export default App;
