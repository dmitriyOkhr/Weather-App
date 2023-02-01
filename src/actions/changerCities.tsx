const changerCities = (city: string) => ({
  type: "changeOnAnotherCity",
  payload: city,
});

export default changerCities;
