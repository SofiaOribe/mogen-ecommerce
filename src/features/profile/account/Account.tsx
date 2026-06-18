import PersonalInformation from "./PersonalInformation"
import { selectProfile } from "../slice"
import { useAppSelector } from "@/app/hooks"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin } from "lucide-react"

const Account = () => {
  const profile = useAppSelector(selectProfile)
  const initials =
    `${profile.account.first_name.value?.[0] ?? ""}${profile.account.last_name.value?.[0] ?? ""}`.toUpperCase()
  const name =
    profile.account.first_name.value && profile.account.last_name.value
      ? `${profile.account.first_name.value} ${profile.account.last_name.value}`
      : "User Name"

  return (
    <div className="w-full h-full border-t-1 border-color-black flex flex-col gap-4">
      <div className="flex flex-row items-center gap-4 pt-4">
        <Avatar className="w-10 h-10">
          <AvatarImage src={profile.account.image} alt="User image" />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col ">
          <p className="font-x09-500-black">{name}</p>
          <div className="flex flex-row items-center gap-1">
            <MapPin className="color-dark-gray h-3.5 w-3.5" />
            <p className="font-x0875-500-dark-gray">Country</p>
          </div>
        </div>
      </div>

      <PersonalInformation />
    </div>
  )
}

export default Account
