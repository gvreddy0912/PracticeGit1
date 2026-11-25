import { test, expect } from "@playwright/test";

test("API Testing Post Practice 1", async ({ request }) => {
  const response = await request.post(
    "https://restful-booker.herokuapp.com/booking",
    {
      data: {
        firstname: "Jim",
        lastname: "Brown",
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
          checkin: "2018-01-01",
          checkout: "2019-01-01",
        },
        additionalneeds: "Breakfast",
      },
    },
  );
  const responeJson = await response.json();
  //   expect(response.ok()).toBeTruthy();
  //   expect(response.status()).toBe(200);
  expect(responeJson.booking).toMatchObject({
    firstname: "Jim",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
      checkin: "2018-01-01",
      checkout: "2019-01-01",
    },
    additionalneeds: "Breakfast",
  });
  expect(responeJson.booking.additionalneeds).toBe("Breakfast");
});

// test("API With UI verification", async ({ request }) => {
//  const resp2 =   await request.post('
// https://api.demoblaze.com/addtocart', {
// data: {
//     "cookie": "user=3b5afe81-3967-fca5-3057-7a406b048761",
// "id": "14d480bc-ecdf-a9f6-c547-d7ece7ed7844",
// "prod_id": 3,
// "flag": false,
// }
// })
// console.log(resp2)
// });
