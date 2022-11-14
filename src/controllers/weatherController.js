const getWeather = (req, res) => {
  const weather = {
    Seattle: {
      hi: 56,
      lo: 39,
      ts: new Date(2022, 11, 13),
    },

    "Los Angeles": {
      hi: 72,
      lo: 59,
      ts: new Date(2022, 11, 13),
    },
  };

  return res.status(200).json(weather);
};

module.exports = {
  getWeather,
};
