import ButtonPrimary from "@/components/buttons/ButtonPrimary"
import InputCustom from "@/components/inputs/InputCustom"
import { Textarea } from "@/components/ui/textarea"
import { Link } from "react-router-dom"
import github from "../../assets/images/icons/github.svg"
import linkedin from "../../assets/images/icons/linkedin.svg"

const Contact = () => {
  return (
    <form className="w-full px-4 flex justify-center pb-[16em] pt-40 h-dvh">
      <div className="w-full 2xl:max-w-[56em] flex flex-col gap-2 h-full">
        <h2 className="font-x1-500-black border-b border-color-black text-base/10 text-center">Contact</h2>
        <div className="w-full flex justify-center items-center p-16 h-full gap-16 relative">
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
              value={""}
              label="Full name"
              placeholder="Francisco Wilson"
              type="text"
              classes={"bg-white"}
              /*  onChangeValue={handleChangeData} */
            />
            <InputCustom
              name="subject"
              value={""}
              label="Last name"
              placeholder="Wilson"
              type="text"
              /*    onChangeValue={handleChangeData} */
              classes={"bg-white"}
            />
            <InputCustom
              value={""}
              label="Email"
              placeholder="email@example.com"
              type="email"
              classes={"bg-white"}
              /*    error={
                !auth.register.email.firstLoad && !auth.register.email.valid ? "Invalid email, please try again" : ""
              } */
              /* onChangeValue={handleEmailChange} */
            />
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="input-field" className={`font-x075-500  placeholder:opacity-50 `}>
                Message
              </label>
              <Textarea placeholder="Tell me about your project or idea" className="bg-white min-h-[120px]" />
            </div>
            <ButtonPrimary
              variant="coral"
              text="Let’s Talk"
              classes={{ borderClass: "shadow-sm", sizeClass: "h-10 w-full", roundedClass: "rounded-sm" }}
            />
            <div className="flex flex-row gap-4 justify-center items-center pt-8">
              <Link to="https://github.com/SofiaOribe">
                <img src={github} className="w-8 h-8" />
              </Link>
              <Link to="https://www.linkedin.com/in/sofiaoribe/">
                <img src={linkedin} className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default Contact
