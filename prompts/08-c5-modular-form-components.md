# 08 Modular Form Components

Read AGENTS.md first and follow it strictly.

Install react-hook-form and react-select-country-list (with its type support), and only add shadcn/ui primitives after user approval for the specific components needed (input, label, select, command, popover, button). React Hook Form manages validation and form state; react-select-country-list provides the searchable country list and types used by the combobox.

Implement reusable form primitives under components/forms/:

InputField (components/forms/InputField.tsx):

Wrap in <div className="space-y-2">. Render shadcn <Label className="form-label"> with htmlFor={name}.

Render shadcn <Input> passing dynamic type, id={name}, placeholder, disabled, and merge classes cn("form-input", disabled && "opacity-50 cursor-not-allowed").

Spread {...register(name, validation)} and conditionally display a validation error message (<p className="text-sm text-red-500">{error.message}</p>).

SelectField (components/forms/SelectField.tsx):

Wrap shadcn <Select> inside a React Hook Form <Controller> component.

Apply classes select-trigger to <SelectTrigger> and bg-gray-800 border-gray-600 text-white to <SelectContent>.

Map options array to <SelectItem className="focus:bg-gray-600 focus:text-white">. Display field validation errors below.

CountrySelectField (components/forms/CountrySelectField.tsx):

Build a searchable country combobox using shadcn <Popover> and <Command> populated with data from react-select-country-list.

Connect with React Hook Form via <Controller> for state binding and display validation errors.

FooterLink (components/forms/FooterLink.tsx):

Render helper text with Next.js <Link className="footer-link" href={href}> inside <div className="text-center pt-4">.
