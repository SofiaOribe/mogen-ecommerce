import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import InputCustom from "@/components/inputs/InputCustom"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"
import github from "../../assets/images/icons/github.svg"
import linkedin from "../../assets/images/icons/linkedin.svg"
import { createContactMessage } from "./api"
import { toast } from "sonner"
import { useState } from "react"
import { TInputData, validEmailRegex } from "../common/types"
import { StyleToaster } from "@/components/ui/sonner"

type TContactForm = {
  name: TInputData
  email: TInputData
  subject: TInputData
  message: TInputData
}

const emptyFormContact: TContactForm = {
  name: {
    value: "",
    valid: false,
    firstLoad: true,
  },
  email: {
    value: "",
    valid: false,
    firstLoad: true,
  },
  subject: {
    value: "",
    valid: false,
    firstLoad: true,
  },
  message: {
    value: "",
    valid: false,
    firstLoad: true,
  },
}

const Contact = () => {
  const [form, setForm] = useState(emptyFormContact)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    const field: TInputData = {
      value,
      firstLoad: false,
      valid: false,
    }

    switch (name) {
      case "email":
        field.valid = value.length >= 3 && !!validEmailRegex.exec(value)
        break

      case "name":
        field.valid = value.trim().length >= 2
        break

      case "subject":
        field.valid = value.trim().length >= 3
        break

      case "message":
        field.valid = value.trim().length >= 120
        break
    }

    setForm(prev => ({
      ...prev,
      [name]: field,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name.valid || !form.subject.valid || !form.email.valid || !form.message.valid) {
      return
    }

    const { error } = await createContactMessage({
      name: form.name.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    })
    if (error) {
      toast.error("Error sending message", {
        position: "bottom-center",
        style: StyleToaster.error,
        closeButton: true,
      })
      return
    }

    toast.success("Message sent successfully", {
      position: "bottom-center",
      style: StyleToaster.success,
      closeButton: true,
    })
    setForm(emptyFormContact)
  }
  return (
    <form onSubmit={handleSubmit} className="w-full px-4 flex justify-center pb-[16em] pt-40 h-dvh">
      <div className="w-full 2xl:max-w-[56em] flex flex-col gap-2 h-full ">
        <h2 className="font-x1-500-black border-b border-color-black text-base/10 text-center">Contact</h2>
        <div className="w-full flex justify-center flex-col sm:flex-row items-center sm:p-16 h-full gap-16 relative pt-24">
          {/* Blur */}
          <div className="backgroundBlur top-[6em] left-[35%] w-[12em] h-[12em] filter-[blur(80px)]" />
          <div className="backgroundBlur bottom-[12em] left-[0%] w-[20em] h-[20em] filter-[blur(80px)]" />
          {/* --- */}
          <div className="w-full max-w-[360px] flex flex-col gap-3.5 t">
            <h3 className="font-x1125-600-black text-center">Have a project in mind? I’d love to hear from you.</h3>
            <p className="font-x1-400-black text-center">
              This shop is fictional, but the designs are real. If you’re looking to collaborate on something
              creative—whether it's web design, UI/UX—drop me a message below and I’ll get back to you soon.
            </p>
            <p className="font-x1-400-black pt-4 text-center">Sofia</p>
          </div>
          <div className="w-full max-w-[360px] flex flex-col gap-4">
            <InputCustom
              name="name"
              value={form.name.value}
              label="Full name"
              placeholder="Francisco Wilson"
              type="text"
              classes={"bg-white"}
              error={
                !form.name.firstLoad && !form.name.valid
                  ? "Name contains invalid characters. Only letters are allowed."
                  : ""
              }
              onChangeValue={handleChange}
            />
            <InputCustom
              name="subject"
              value={form.subject.value}
              label="Subject"
              placeholder="What would you like to discuss?"
              type="text"
              onChangeValue={handleChange}
              error={!form.subject.firstLoad && !form.subject.valid ? "This field is required" : ""}
              classes={"bg-white"}
            />
            <InputCustom
              name="email"
              value={form.email.value}
              label="Email"
              placeholder="email@example.com"
              type="email"
              classes={"bg-white"}
              error={!form.email.firstLoad && !form.email.valid ? "Invalid email, please try again" : ""}
              onChangeValue={handleChange}
            />
            <div className="w-full flex flex-col gap-1">
              <label
                htmlFor="input-field"
                className={`font-x075-500  placeholder:opacity-50 ${!form.message.firstLoad && !form.message.valid ? "color-error" : "color-black"}`}
              >
                Message
              </label>
              <div className="flex flex-col gap-1">
                <Textarea
                  name="message"
                  value={form.message.value}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea"
                  className={`bg-white min-h-[120px] ${!form.message.firstLoad && !form.message.valid ? "color-error placeholder:color-error border-color-error" : "color-black"}`}
                  maxLength={500}
                />
                <span className="font-x075-400-dark-gray">{form.message.value.length}/500</span>
                {!form.message.firstLoad && !form.message.valid ? (
                  <p className="font-x075-400 color-error pl-1 pt-1">The text must be at least 120 characters long.</p>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <ButtonPrimary
              type="submit"
              variant="coral"
              text="Let’s Talk"
              classes={{ borderClass: "shadow-sm", sizeClass: "h-10 w-full", roundedClass: "rounded-sm" }}
            />
            <div className="flex flex-row gap-4 justify-center items-center pt-8">
              <Link to="https://github.com/SofiaOribe">
                <img src={github} alt="GitHub" className="w-8 h-8" />
              </Link>
              <Link to="https://www.linkedin.com/in/sofiaoribe/">
                <img src={linkedin} alt="LinkedIn" className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Contact
