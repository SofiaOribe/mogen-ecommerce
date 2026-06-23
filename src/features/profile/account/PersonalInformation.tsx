import { useAppDispatch, useAppSelector } from "@/app/hooks"
import InputCustom from "@/components/inputs/InputCustom"
import { selectProfile, setAccount, updateUserProfileAsync } from "../slice"
import PhoneInputComponent from "@/components/inputs/PhoneInputComponent"

import { CountryDropdown } from "@/components/ui/country-dropdown"
import { TAccount } from "../types"
import { Button } from "@/components/ui/button"
import { validNameRegex } from "@/features/common/types"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { StyleToaster } from "@/components/ui/sonner"

type TEditedFields = {
  first_name?: boolean
  last_name?: boolean
}
const getFieldError = (field: keyof TAccount, value: string) => {
  switch (field) {
    case "first_name":
    case "last_name":
      return validNameRegex.exec(value) && value.length > 0
        ? ""
        : "Name contains invalid characters. Only letters are allowed."

    default:
      return ""
  }
}

const PersonalInformation = () => {
  const profile = useAppSelector(selectProfile)
  const dispatch = useAppDispatch()
  const [editedFields, setEditedFields] = useState<TEditedFields>({})
  const [initialAccount, setInitialAccount] = useState<TAccount | null>(null)
  const firstNameError = editedFields.first_name ? getFieldError("first_name", profile.account.first_name) : ""
  const lastNameError = editedFields.last_name ? getFieldError("last_name", profile.account.last_name) : ""

  const newState =
    initialAccount &&
    (initialAccount.first_name !== profile.account.first_name ||
      initialAccount.last_name !== profile.account.last_name ||
      initialAccount.country !== profile.account.country ||
      initialAccount.city !== profile.account.city)

  useEffect(() => {
    if (!initialAccount && profile.account.id) {
      setInitialAccount(profile.account)
    }
  }, [profile.account.id])
  useEffect(() => {
    if (profile.error) {
      toast.error(profile.error, {
        position: "bottom-center",
        style: StyleToaster.warning,
      })
    }
  }, [profile.error])

  const handleChange = (key: keyof TAccount, value: string) => {
    if (key === "first_name" || key === "last_name") {
      setEditedFields(prev => ({
        ...prev,
        [key]: true,
      }))
    }
    dispatch(
      setAccount({
        ...profile.account,
        [key]: value,
      }),
    )
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault()
    setEditedFields({
      first_name: true,
      last_name: true,
    })

    const hasError =
      getFieldError("first_name", profile.account.first_name) || getFieldError("last_name", profile.account.last_name)

    const hasEmptyRequiredField = !profile.account.first_name || !profile.account.last_name

    if (hasError || hasEmptyRequiredField) {
      toast.warning("Please fill out the form correctly", {
        position: "bottom-center",
        style: StyleToaster.warning,
      })
      return
    }

    dispatch(updateUserProfileAsync({ userId: profile.account.id, form: profile.account })).then((res: any) => {
      if (res.payload?.error) {
        toast.error("Oops, an error has occurred, try again.", {
          position: "bottom-center",
          style: StyleToaster.error,
        })
      } else if (res.payload.data) {
        toast.success("Data saved successfully", {
          position: "bottom-center",
          style: StyleToaster.success,
        })
        setInitialAccount(profile.account)
      }
    })
  }

  return (
    <form onSubmit={handleSave} className="w-full h-full flex flex-col gap-4">
      <div className="border-b border-color-black pl-1.5 pb-1.5">
        <p className="font-x09-500-black">Personal information</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <InputCustom
          name="first_name"
          value={profile.account.first_name}
          label="First name"
          placeholder="Francisco"
          type="text"
          error={firstNameError}
          onChangeValue={res => {
            const value = res.target.value
            handleChange("first_name", value)
          }}
        />
        <InputCustom
          name="last_name"
          value={profile.account.last_name}
          label="Last name"
          placeholder="Wilson"
          type="text"
          error={lastNameError}
          onChangeValue={res => {
            const value = res.target.value
            handleChange("last_name", value)
          }}
        />
        <CountryDropdown
          placeholder="Select country"
          defaultValue={profile.account.country}
          onChange={res => {
            const value = res.name
            handleChange("country", value)
          }}
        />
        <InputCustom
          name="province"
          value={profile.account.province}
          label="Province"
          placeholder="Thurgau"
          type="text"
          onChangeValue={res => {
            const value = res.target.value
            handleChange("province", value)
          }}
        />
        <InputCustom
          name="city"
          value={profile.account.city}
          label="City"
          placeholder="Frauenfeld"
          type="text"
          onChangeValue={res => {
            const value = res.target.value
            handleChange("city", value)
          }}
        />
        <InputCustom
          name="postal_code"
          value={profile.account.postal_code}
          label="Postal code"
          placeholder="8500"
          type="text"
          onChangeValue={res => {
            const value = res.target.value
            handleChange("postal_code", value)
          }}
        />
        <InputCustom
          name="address"
          value={profile.account.address}
          label="Address"
          placeholder="Street and number"
          type="text"
          onChangeValue={res => {
            const value = res.target.value
            handleChange("address", value)
          }}
        />
      </div>
      <div className="border-b border-color-black pl-1.5 pb-1.5">
        <p className="font-x09-500-black">Contact</p>
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <InputCustom
          value={profile.account.email}
          label="Email"
          placeholder="email@example.com"
          type="email"
          disabled
          /*    onChangeValue={res => {
              const value = res.target.value
              handleChange("email", value)
            }} */
        />

        <PhoneInputComponent
          value={profile.account.phone_number}
          onChange={res => {
            handleChange("phone_number", res)
          }}
        />
      </div>
      <Button
        disabled={!newState}
        type="submit"
        onClick={handleSave}
        className="bg-black font-x0875-500-white cursor-pointer w-fit"
      >
        Save changes
      </Button>
    </form>
  )
}

export default PersonalInformation
