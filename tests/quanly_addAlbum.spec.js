import { test, expect } from "@playwright/test";

test.setTimeout(120000);

test("create album 7 times", async ({ page }) => {
  await page.goto(
    "https://quanly.xms.vn/auth/login?redirect_uri=http%3A%2F%2Fquanly.xms.vn%2Falbum%2Flist",
  );

  await page.getByRole("textbox", { name: "Tên đăng nhập" }).fill("nct");
  await page.getByRole("textbox", { name: "Mật khẩu quản trị" }).fill("a");
  await page.getByRole("button", { name: "Đăng nhập" }).click();

  for (let i = 1; i <= 7; i++) {
    console.log("Creating album:", i);

    await page.getByRole("link", { name: "Thêm mới" }).click();

    await page.waitForURL("**/album/create");

    // chờ loader biến mất
    await page.waitForFunction(() => {
      const loader = document.querySelector(".loader");
      return !loader || loader.offsetParent === null;
    });

    await page.locator('button[data-id="sample_album"]').click();

    const albumItem = page.locator(".media-body", {
      hasText: "[VPOP] ALBUM MẪU T2.2026 (2)",
    });

    await expect(albumItem.first()).toBeVisible();

    await albumItem.first().click();

    await page.getByRole("button", { name: "Lưu" }).click();

    await expect(page.getByText("Lưu thành công")).toBeVisible({
      timeout: 10000,
    });

    await page.locator('button:has-text("Đóng")').click();
  }
});
