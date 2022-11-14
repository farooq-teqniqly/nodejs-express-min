module.exports = {
  roots: ["<rootDir>/src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.js?$",
  moduleFileExtensions: ["js", "json", "node"],
  testPathIgnorePatterns: ["utils"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.js",
    "!src/__tests__/**",
    "!src/server.js",
    "!src/startup.js",
  ],
};
