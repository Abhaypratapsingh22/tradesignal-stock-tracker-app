# 15 Auth Server Actions

Read AGENTS.md first and follow it strictly.

Install sonner and mount <Toaster/> inside app/layout.tsx.

Auth Server Actions (lib/actions/auth.actions.ts):

"use server" directive enabled.

signUpWithEmail(data: SignUpFormData): Invoke auth.api.signUpEmail({ body: { email, password, name: fullName } }). On success, trigger Inngest event await inngest.send({ name: "app/user.created", data: { email, name: fullName, country, investmentGoals, riskTolerance, preferredIndustry } }) and return { success: true }. Catch errors and return { success: false, error: "Signup failed" }.

signInWithEmail(data: SignInFormData): Invoke auth.api.signInEmail({ body: { email, password } }). Return { success: true } or catch error and return { success: false, error: "Signin failed" }.

signOut(): Call auth.api.signOut({ headers: await headers() }) and return { success: true }.

Form Submissions: Wire app/(auth)/sign-up/page.tsx and app/(auth)/sign-in/page.tsx onSubmit handlers to await respective server actions, display Sonner toasts (toast.error(...)) on failure, and execute router.push('/') on success. Wire logout action inside components/UserDropdown.tsx.
