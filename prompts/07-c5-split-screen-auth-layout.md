# 07 Split Screen Auth Layout

Read AGENTS.md first and follow it strictly.

Global TypeScript Definitions (types/global.d.ts): Declare global interfaces for SignInFormData (email, password), SignUpFormData (fullName, email, password, country, investmentGoals, riskTolerance, preferredIndustry), FormInputProps, SelectFieldProps, and FooterLinkProps.

Auth Route Group Layout (app/(auth)/layout.tsx):

Create a two-column responsive auth layout inside <main className="auth-layout">.

Left Section (auth-left-section scrollbar-hide-default): Render a top logo link <Link className="auth-logo" href="/"> with Next.js <Image alt="Signalist logo" className="h-8 w-auto" height="{32}" src="/assets/icons/logo.svg" width="{140}"/>. Below the logo, render <div className="pb-6 lg:pb-8 flex-1">{children}</div> to host dynamic form content.

Right Section (auth-right-section): Render a testimonial card (z-10 relative lg:mt-4 lg:mb-16) containing a blockquote (auth-blockquote), author info (auth-testimonial-author, author role max-md:text-xs text-gray-500), a 5-star rating generator mapping over /assets/icons/star.svg (w-5 h-5), and a full preview image <Image alt="Dashboard preview" className="auth-dashboard-preview absolute top-0" height="{1150}" src="/assets/images/dashboard.png" width="{1440}"/> (hidden on mobile, visible on desktop).
