

import { Button } from "@/components/ui/button"

const ResetPassword = () => {
  return (
    <form action="" /* onSubmit={} */ className="w-full h-full relative box-border">
      <div className="flex flex-col justify-center sm:items-start items-center gap-8 w-full h-full">
        <div className="flex flex-col gap-4">
          <h3 className="font-x4-600-black">Forgot your password?</h3>
          <p className="font-x1-400-black">We will send you a link to your email so you can recover your password.</p>
        </div>
        <div className="w-full flex flex-col items-center gap-6">
          <div className="max-w-[25em] w-full">
            {/*    <InputCustom
              value={email}
              label="Email"
              placeholder="email@example.com"
              type="email"
              error={error ? "Invalid email, please try again" : ""}
              borderClass="border-black border-t-0 border-x-0 rounded-none"
              onChangeValue={handleEmailChange}
            /> */}
          </div>

          <Button
            type="submit"
            className="h-[3em] w-full max-w-[320px] border-none shadow-md rounded-full bg-black font-x0875-500-white "
          >
            Send request
          </Button>
        </div>
      </div>
    </form>
  )
}

export default ResetPassword
