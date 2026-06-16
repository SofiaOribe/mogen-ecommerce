import { isValidPhoneNumber } from "react-phone-number-input"
import { z } from "zod"

import { Button } from "@/components/ui/button"

import { PhoneInput } from "@/components/ui/phone-input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { toast } from "sonner"
import { useForm } from "react-hook-form"

/* const FormSchema = z.object({
    phone: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" })
    .or(z.literal("")),
    }); */

type TPhoneInputComponent = {
  value: string
  onChange: (value: string) => void
}

export default function PhoneInputComponent({ value, onChange }: TPhoneInputComponent) {
  /*   const form = useForm<{ phone: string }>({
    defaultValues: { phone: "" },
  }) */

  const form = useForm({
    defaultValues: {
      phone: value,
    },
  })
  const FormSchema = z.object({
    phone: z.string().refine(isValidPhoneNumber, { message: "Invalid phone number" }),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <div onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-start space-y-8 w-full">
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col items-start w-full">
              <FormLabel className="font-x075-500  placeholder:opacity-50">Phone Number</FormLabel>
              <FormControl className="w-full">
                <PhoneInput
                  placeholder="Enter a phone number"
                  {...field}
                  value={value}
                  onChange={phone => {
                    field.onChange(phone)
                    onChange(phone ?? "")
                  }}
                />
              </FormControl>
              {/*   <FormDescription className="text-left">Enter a phone number</FormDescription> */}
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </Form>
  )
}
