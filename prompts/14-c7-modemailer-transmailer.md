# 14 Modemailer Transmailer

Read AGENTS.md first and follow it strictly.

Install nodemailer and @types/nodemailer. Configure .env (NODEMAILER_EMAIL, NODEMAILER_PASSWORD using a Google App Password).

Nodemailer Setup (lib/nodemailer/index.ts):

Create transporter = nodemailer.createTransport({ service: "gmail", auth: { user: process.env.NODEMAILER_EMAIL, pass: process.env.NODEMAILER_PASSWORD } }).

Dynamic Dispatch Helper (sendWelcomeEmail):

Export async function sendWelcomeEmail({ email, name, intro }: WelcomeEmailData).

Load welcomeEmailTemplate from lib/nodemailer/templates.ts and replace placeholders {{name}} and {{intro}}.

Send email using transporter.sendMail with sender Signalist <signalist@jsmastery.pro>, recipient email, subject "Welcome to Signalist - your stock market toolkit is ready", and compiled HTML payload.
