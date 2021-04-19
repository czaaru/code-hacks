module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testRegex: "(/src/.*.(test|spec)).(js?|ts?)$",
  moduleFileExtensions: ["js", "ts", "json", "node"],
  verbose: true,
  projects: ["<rootDir>"],
};
