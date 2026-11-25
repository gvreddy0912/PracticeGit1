import { test, request, expect } from "@playwright/test";

let reqContext: any;

test.beforeAll("Before All the Tests", async () => {
  reqContext = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
  });
});

test("API Testing Get Practice 1", async ({ request }) => {
  const response = await request.get(
    "https://restful-booker.herokuapp.com/booking/",
  );

  console.log(await response.json());
});

test("API Testing Get Practice 2", async ({}) => {
  const responeContext = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
  });
  const response = await responeContext.get("/booking/");

  console.log(await response.json());
});

test("API Testing Get Practice 3", async ({}) => {
  const response = await reqContext.get("/booking/");
  console.log(await response.json());
});

test("API Testing Get Practice 4", async ({ request }) => {
  const response = await request.get("/booking/");
  console.log(await response.json());
});

test("API Testing Get Practice 5", async ({ request }) => {
  const response = await request.get("/booking/?firstname=John&lastname=Smith");
  console.log(await response.json());
});

test("API Testing Get Practice 6", async ({ request }) => {
  const response = await request.get("/booking/", {
    params: {
      firstname: "John",
      lastname: "Smith",
    },
  });
  console.log(await response.json());
});

test("API Testing Get Practice 7", async ({ request }) => {
  const response = await request.get("/booking/6");
  //   console.log(await response.json());
  //   expect(response.status()).toBe(200);
  expect(response.ok()).toBeTruthy();
  //   expect(response.json()).toMatchObject({
  //     firstname: "Jim",
  //     lastname: "Jones",
  //     totalprice: 788,
  //     depositpaid: true,
  //     bookingdates: {
  //       checkin: "2023-04-07",
  //       checkout: "2024-03-19",
  //     },
  //   });
  //   const responseBody = await response.json();
  //   expect(responseBody.firstname).toBe("Jim");
});

test("API Testing with UI Verfication", async ({ request , page}) => {
  const response = await request.get("https://api.demoblaze.com/entries");
  const JsonResp = await response.json();
//   console.log(JsonResp)
  console.log(JsonResp.Items[0].price);
  await page.goto("https://www.demoblaze.com/");
  await expect(page.getByRole("link", { name: "Samsung galaxy s6" })).toHaveText(JsonResp.Items[0].title);

});
