/*
const { test, expect } = require("@playwright/test");

test("My first test - Visit Google", async ({ page }) => {
  // Bước 1: Mở trang Google
  await page.goto("https://www.google.com");

  // Bước 2: Kiểm tra title có chứa "Google"
  await expect(page).toHaveTitle(/Google/);

  // Bước 3: Tìm search box và điền text
  await page.fill('textarea[name="q"]', "Playwright automation");

  // Bước 4: Nhấn Enter để search
  await page.press('textarea[name="q"]', "Enter");

  // Bước 5: Đợi trang kết quả load
  await page.waitForLoadState("networkidle");

  // Bước 6: In ra console
  console.log("✅ Test passed! Search completed!");
});
*/

const { test, expect } = require("@playwright/test");

test("My first testing", async ({ page }) => {
  // Bước 1: Mở trang Google
  await page.goto("https://www.google.com");

  // Bước 2: Kiểm tra title có chứa "Google"
  await expect(page).toHaveTitle(/Google/);

  // Bước 3: Tìm search box và điền text
  await page.fill('textarea[name="q"]', "Vietnam tourism");

  // Bước 4: Nhấn Enter để search
  await page.press('textarea[name="q"]', "Enter");

  // Bước 5: Đợi trang kết quả load
  await page.waitForLoadState("networkidle");

  // Bước 6: In ra console
  console.log("Win");
});
