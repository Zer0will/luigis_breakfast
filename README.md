# Luigi’s American Breakfast

## Website quality review

Use the pinned pnpm version: `pnpm check` and `pnpm build`.

Navigation announces its active page and mobile-menu state, Escape closes the menu, every page has a skip link, and menu groups announce selection. Direction labels support the existing Apple/Google choice. Menu choices stay near the content, and the About photo caption no longer invents a date.

Analytics loads only when both `VITE_ANALYTICS_ENDPOINT` (HTTPS base URL) and `VITE_ANALYTICS_WEBSITE_ID` are set. Development inspection and replay scripts are excluded from production builds.

Before merging, confirm the deployment mapping to luigisrestaurant.online; the repository homepage is luigisbreakfast.vercel.app. Verify business hours, menu prices and the phone in `client/src/data/brand.ts`, whose existing source marks the number as a placeholder. The owner should also review the existing privacy/terms copy against actual hosting and analytics settings.
