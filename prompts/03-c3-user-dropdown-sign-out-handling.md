# 03 User Dropdown Sign Out Handling

Read AGENTS.md first and follow it strictly.

Install and configure shadcn/ui dropdown-menu, avatar, and button primitives. Implement components/UserDropdown.tsx as a client component ("use client"):

Trigger UI: Use a ghost button variant (variant="ghost") containing an Avatar (h-8 w-8) with tradesignal fallback showing the first letter of user.name (bg-yellow-500 text-yellow-900 text-sm font-bold). Display user name (span className="hidden md:flex flex-col items-start text-base font-medium text-gray-400") next to the avatar.


Separator (bg-gray-600).

Logout item (DropdownMenuItem) with a logout icon (h-4 w-4 mr-2 hidden sm:inline), focus state (focus:bg-transparent focus:text-yellow-500), and handleSignOut handler executing router.push('/sign-in') via next/navigation.

Responsive navigation: Below an sm:hidden separator, embed <NavItems/> inside a <nav className="sm:hidden"> block so navigation links render inside the dropdown menu on mobile viewports.

Preserve existing theme classes and ensure valid Tailwind utility usage throughout (text-gray-400 instead of malformed utility classes).


---
title: Next.js
description: Install and configure shadcn/ui for Next.js.
---

Choose the setup that matches your starting point.

<div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-6">
  <LinkedCard
    href="#scaffold-with-create"
    className="items-start gap-1 p-6 text-sm md:p-6"
  >
    <div className="font-medium">Use shadcn/create</div>
    <div className="leading-relaxed text-muted-foreground">
      Build your preset and generate a Next.js project command.
    </div>
  </LinkedCard>
  <LinkedCard
    href="#scaffold-with-cli"
    className="items-start gap-1 p-6 text-sm md:p-6"
  >
    <div className="font-medium">Use the CLI</div>
    <div className="leading-relaxed text-muted-foreground">
      Scaffold a new Next.js project directly from the terminal.
    </div>
  </LinkedCard>
  <LinkedCard
    href="#existing-next-project"
    className="items-start gap-1 p-6 text-sm md:p-6"
  >
    <div className="font-medium">Existing Project</div>
    <div className="leading-relaxed text-muted-foreground">
      Configure shadcn/ui manually in an existing Next.js project.
    </div>
  </LinkedCard>
</div>

<div id="scaffold-with-create" className="scroll-mt-24" />
## Use shadcn/create

<Steps>

### Build Your Preset

Open [shadcn/create](/create?template=next) and build your preset visually. Choose your style, colors, fonts, icons, and more.

<Button asChild size="sm">
  <Link
    href="/create?template=next"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 no-underline!"
  >
    Open shadcn/create
  </Link>
</Button>

### Create Project with shadcn/create

Click `Create Project`, choose your package manager, and copy the generated command.

The generated command will look similar to this:

```bash
npx shadcn@latest init --preset [CODE] --template next
```

The exact command will include your selected options such as `--base`, `--monorepo`, or `--rtl`.

### Add Components with shadcn/create

Add the `Card` component to your project:

```bash
npx shadcn@latest add card
```

If you created a monorepo, run the command from `apps/web` or specify the workspace from the repo root:

```bash
npx shadcn@latest add card -c apps/web
```

The command above will add the `Card` component to your project. You can then import it like this:

```tsx showLineNumbers title="app/page.tsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
        <CardDescription>
          Track progress and recent activity for your Next.js app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        Your design system is ready. Start building your next component.
      </CardContent>
    </Card>
  )
}
```

If you created a monorepo, update `apps/web/app/page.tsx` and import from `@workspace/ui/components/card` instead.

</Steps>

<div id="scaffold-with-cli" className="scroll-mt-24" />
## Use the CLI

<Steps>

### Create Project with the shadcn CLI

Run the `init` command to scaffold a new Next.js project. Follow the prompts to configure your project: base, preset, monorepo, and more.

```bash
npx shadcn@latest init -t next
```

**For a monorepo project, use `--monorepo` flag:**

```bash
npx shadcn@latest init -t next --monorepo
```

### Add Components with the shadcn CLI

Add the `Card` component to your project:

```bash
npx shadcn@latest add card
```

If you created a monorepo, run the command from `apps/web` or specify the workspace from the repo root:

```bash
npx shadcn@latest add card -c apps/web
```

The command above will add the `Card` component to your project. You can then import it like this:

```tsx showLineNumbers title="app/page.tsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <Card className="max-w-sm">
      <CardHeader>
        <CardTitle>Project Overview</CardTitle>
        <CardDescription>
          Track progress and recent activity for your Next.js app.
        </CardDescription>
      </CardHeader>
      <CardContent>
        Your design system is ready. Start building your next component.
      </CardContent>
    </Card>
  )
}
```

If you created a monorepo, update `apps/web/app/page.tsx` and import from `@workspace/ui/components/card` instead.

</Steps>

<div id="existing-next-project" className="scroll-mt-24" />
## Existing Project

<Steps>

### Create Project with create-next-app

If you need a new Next.js project, create one with `create-next-app`. Otherwise, skip this step.

```bash
npx create-next-app@latest
```

Choose the recommended defaults so Tailwind CSS, the App Router, and the default `@/*` import alias are configured for you.

If you prefer a `src/` directory, use `--src-dir` or choose `Yes` when prompted:

```bash
npx create-next-app@latest --src-dir
```

With `--src-dir`, Next.js places your app in `src/app` and configures the `@/*` alias to point to `./src/*`.

### Configure Tailwind CSS and Import Aliases

If you created your project with the recommended `create-next-app` defaults, you can skip this step.

If you're adding shadcn/ui to an older or custom Next.js app, make sure Tailwind CSS is installed first. You can follow the official [Next.js installation guide](https://nextjs.org/docs/app/getting-started).

Then make sure your `tsconfig.json` includes the `@/*` import alias:

```json title="tsconfig.json" showLineNumbers
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

If you used `--src-dir`, point the alias to `./src/*` instead.

### Run the CLI

Run the `shadcn` init command to set up shadcn/ui in your project.

```bash
npx shadcn@latest init
```

### Add Components to an Existing Project

You can now start adding components to your project.

```bash
npx shadcn@latest add button
```

The command above will add the `Button` component to your project. You can then import it like this:

```tsx showLineNumbers title="app/page.tsx"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <Button>Click me</Button>
    </div>
  )
}
```

If you used `--src-dir`, add the component to `src/app/page.tsx` instead.

</Steps>
