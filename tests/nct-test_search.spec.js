import { test, expect } from "@playwright/test";

test("Search bài hát trên NhacCuaTui", async ({ page }) => {
  await page.goto("https://www.nhaccuatui.com/");

  // Search
  const searchBox = page.getByPlaceholder(/tìm kiếm/i);
  await searchBox.fill("Hello em có khỏe không");
  await searchBox.press("Enter");

  // Chỉ dùng expect (auto-wait)
  const resultContainer = page.locator(".all-wrap");
  await expect(resultContainer).toBeVisible({ timeout: 10000 });

  console.log("✅ Search thành công!");
  console.log("URL hiện tại:", page.url());

  await page.screenshot({ path: "search-result.png", fullPage: true });

  await page.pause();
});
