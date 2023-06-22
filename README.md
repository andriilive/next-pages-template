# Next.js & NextUI Template

This is a template for creating applications using Next.js 13 (pages directory) and NextUI (v2).

## Technologies Used

-  [Next.js 13](https://nextjs.org/docs/getting-started)
-  [NextUI](https://nextui-docs-v2.vercel.app/)
-  [Tailwind CSS](https://tailwindcss.com/)
-  [Tailwind Variants](https://tailwind-variants.org)
-  [TypeScript](https://www.typescriptlang.org/)
-  [Framer Motion](https://www.framer.com/motion/)
-  [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/nextui-org/next-pages-template
```

## License

## Set Webstorm Tailwind Config

Add `tv` to class regex in [Webstorm Tailwind Config](jetbrains://WebStorm/settings?name=Languages+%26+Frameworks--Style+Sheets--Tailwind+CSS)

```json5
{
	// ...
	experimental: {
		classRegex: [['tv\\(([^)]*)\\)', '["\'`]([^"\'`]*).*?["\'`]']],
	},
}
```

Licensed under the [MIT license](https://github.com/nextui-org/next-pages-template/blob/main/LICENSE).
