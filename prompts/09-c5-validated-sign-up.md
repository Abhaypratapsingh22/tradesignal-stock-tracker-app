# 09 Validated Sign Up

Read AGENTS.md first and follow it strictly.

Sign-Up Screen (app/(auth)/sign-up/page.tsx):

Implement as a client component ("use client") using useForm<SignUpFormData>({ mode: "onBlur", defaultValues: { fullName: "", email: "", password: "", country: "US", investmentGoals: "Growth", riskTolerance: "Medium", preferredIndustry: "Technology" } }).

Render page title <h1 className="form-title">Sign Up & Personalize</h1>.

Build the form <form onSubmit={handleSubmit(onSubmit)} className="space-y-5"> utilizing InputField (Full Name with minLength 2, Email with regex pattern validation and type="email", Password with minLength 8 and type="password"), CountrySelectField, and SelectField (Investment Goals, Risk Tolerance, Preferred Industry from lib/constants.ts).

Add a submit button (className="yellow-btn w-full mt-5", disabled while submitting, with dynamic text "Creating Account..." vs "Start Your Investing Journey") and FooterLink targeting /sign-in ("Already have an account?").

Sign-In Screen (app/(auth)/sign-in/page.tsx):

Implement as a client component ("use client") using useForm<SignInFormData>({ mode: "onBlur", defaultValues: { email: "", password: "" } }).

Render title <h1 className="form-title">Welcome Back</h1>.

Reuse InputField for email (type="email") and password (type="password").

Add submit button ("Sign In" / "Signing In...") and FooterLink targeting /sign-up ("Don't have an account? Sign Up").

Ensure clean async onSubmit execution and no insecure credential console logging.
