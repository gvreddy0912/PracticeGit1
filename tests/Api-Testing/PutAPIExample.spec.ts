import { test, expect } from "@playwright/test";

test("PUT API Testing Practice 1", async ({ request }) => {
  const restPut = await request.put("/booking/1", {
    headers: {
      authorization: "Basic YWRtaW46cGFzc3dvcmQxMjM=",
    },
    data: {
      firstname: "Venkata",
      lastname: "Reddy",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "Breakfast",
    },
  });
  const respJSON = await restPut.json();
  console.log(respJSON)
  expect(restPut.status()).toBe(200);
  expect(respJSON.firstname).toBe("Venkata");
  expect(respJSON.lastname).toBe("Reddy");
  expect(restPut.statusText()).toBe("OK");
  expect(restPut.ok()).toBeTruthy();
  expect(respJSON).toMatchObject({
    firstname: "Venkata",
    lastname: "Reddy",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  });
});
