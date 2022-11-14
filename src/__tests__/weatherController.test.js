const server = require("../startup");
const req = require("supertest");

describe("Weather controller tests", () => {
  test("It returns the weather.", async () => {
    const res = await req(server).get("/weather");
    const weather = res.body;

    expect(res.status).toBe(200);

    const seattleWeather = weather["Seattle"];
    expect(seattleWeather.hi).toBe(56);
    expect(seattleWeather.lo).toBe(39);
    expect(seattleWeather.ts).toBe("2022-12-13T08:00:00.000Z");

    const losAngelesWeather = weather["Los Angeles"];
    expect(losAngelesWeather.hi).toBe(72);
    expect(losAngelesWeather.lo).toBe(59);
    expect(losAngelesWeather.ts).toBe("2022-12-13T08:00:00.000Z");
  });
});
