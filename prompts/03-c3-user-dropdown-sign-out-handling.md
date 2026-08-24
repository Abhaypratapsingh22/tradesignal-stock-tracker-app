# 03 User Dropdown Sign Out Handling

Read AGENTS.md first and follow it strictly.

Install and configure shadcn/ui dropdown-menu, avatar, and button primitives. Implement components/UserDropdown.tsx as a client component ("use client"):

Trigger UI: Use a ghost button variant (variant="ghost") containing an Avatar (h-8 w-8) with JS Mastery image fallback showing the first letter of user.name (bg-yellow-500 text-yellow-900 text-sm font-bold). Display user name (span className="hidden md:flex flex-col items-start text-base font-medium text-gray-400") next to the avatar.

Dropdown Content (text-gray-400):

Top label section with expanded user profile info (avatar h-10 w-10, full name, and email contact@jsmastery.com in text-xs text-gray-500).

Separator (bg-gray-600).

Logout item (DropdownMenuItem) with a logout icon (h-4 w-4 mr-2 hidden sm:inline), focus state (focus:bg-transparent focus:text-yellow-500), and handleSignOut handler executing router.push('/sign-in') via next/navigation.

Responsive navigation: Below an sm:hidden separator, embed <NavItems/> inside a <nav className="sm:hidden"> block so navigation links render inside the dropdown menu on mobile viewports.

Preserve existing theme classes and ensure valid Tailwind utility usage throughout (text-gray-400 instead of malformed utility classes).
