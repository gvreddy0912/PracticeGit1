import { test } from "@playwright/test";

test.skip(({browserName}) => browserName === 'firefox', "Skipping test for firefox browser");
test.describe("Annotations Practice", () => {
  test("Practice Test1", async ({ page }) => {
    console.log("Starting Practice Test1");
    console.log("Ending Practice Test1");
  });

  test("Practice Test2", async ({ page }) => {
    console.log("Starting Practice Test2");
    console.log("Ending Practice Test2");
  });

  test("Practice Test3", async ({ page }) => {
    console.log("Starting Practice Test3");
    console.log("Ending Practice Test3");
  });
});
test("Practice Test4", async ({ page }) => {
  console.log("Starting Practice Test4");
  console.log("Ending Practice Test4");
});

test("Practice Test5", async ({ page }) => {
//   test.skip();

  console.log("Starting Practice Test5");
  console.log("Ending Practice Test5");
});

test("Practice Test6", async ({ page }) => {
  console.log("Starting Practice Test6");
  console.log("Ending Practice Test6");
});
