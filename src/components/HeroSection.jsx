import { Box } from "@chakra-ui/react";
const HeroSection = () => {
  return (
    <Box display="flex">
      <Box
        className="textAndSearch"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
      >
        <Box className="text">
          <h1>
            What book is on <br></br>your mind today?
          </h1>
          <p>Explore our library and find your next read. </p>
        </Box>
        <Box className="search">
          <input type="text" />
          <button>Search</button>
        </Box>
      </Box>
      <Box className="bigPicture">
        <img src="" alt="books" />
      </Box>
    </Box>
  );
};

export default HeroSection;
