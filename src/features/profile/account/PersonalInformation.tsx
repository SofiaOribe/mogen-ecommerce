import { useAppSelector } from "@/app/hooks"
import InputCustom from "@/components/inputs/InputCustom"
import { selectProfile } from "../slice"
import PhoneInputComponent from "@/components/inputs/PhoneInputComponent"
import { useState } from "react"
import { CountryDropdown } from "@/components/ui/country-dropdown"
import ButtonPrimary from "@/components/buttons/ButtonPrimary"

const PersonalInformation = () => {
  const profile = useAppSelector(selectProfile)

  const [phone, setPhone] = useState("")

  const handleSave = () => {
    console.log(phone)
  }

  return (
    <div className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-color-black pl-1.5 pb-1.5">
        <p className="font-x09-500-black">Personal information</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputCustom
          name="firstName"
          value={profile.account.firstName.value}
          label="First name"
          placeholder="Francisco"
          type="text"
          /*       onChangeValue={handleChangeData} */
        />
        <InputCustom
          name="lastName"
          value={profile.account.lastName.value}
          label="Last name"
          placeholder="Wilson"
          type="text"

          /*  onChangeValue={handleChangeData} */
        />
        <CountryDropdown
          placeholder="Select country"
          defaultValue={profile.account.country !== "" ? profile.account.country : "CHE"}
          onChange={() => {}}
        />
        <InputCustom
          name="province"
          value={profile.account.province}
          label="Province"
          placeholder="Thurgau"
          type="text"

          /*  onChangeValue={handleChangeData} */
        />
        <InputCustom
          name="city"
          value={profile.account.city}
          label="City"
          placeholder="Frauenfeld"
          type="text"

          /*  onChangeValue={handleChangeData} */
        />
        <InputCustom
          name="postalCode"
          value={profile.account.postalCode}
          label="Postal code"
          placeholder="8500"
          type="text"

          /*  onChangeValue={handleChangeData} */
        />
        <InputCustom
          name="address"
          value={profile.account.address}
          label="Address"
          placeholder="Street and number"
          type="text"

          /*  onChangeValue={handleChangeData} */
        />
      </div>
      <div className="border-b border-color-black pl-1.5 pb-1.5">
        <p className="font-x09-500-black">Contact</p>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <InputCustom
          value={profile.account.email.value}
          label="Email"
          placeholder="email@example.com"
          type="email"
          /*    error={!auth.register.email.firstLoad && !auth.register.email.valid ? "Invalid email, please try again" : ""} */

          /*    onChangeValue={handleEmailChange} */
        />

        <PhoneInputComponent value={phone} onChange={setPhone} />
      </div>
      <ButtonPrimary onClick={handleSave} text="Save changes" variant="secondary" />
    </div>
  )
}

export default PersonalInformation
