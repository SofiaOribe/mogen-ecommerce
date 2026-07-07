import { InfoIcon, X } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "../ui/button"

type TAlertComponentActionProps = {
  title: string
  description: string
  textButton: string
  onClick: () => void
  onClose?: () => void
}

const AlertComponentAction = ({ title, description, textButton, onClick, onClose }: TAlertComponentActionProps) => {
  return (
    <Alert className="w-full bg-brown">
      <div className="flex flex-col gap-4">
        <Button
          variant="ghost"
          onClick={onClose}
          className="font-x0875-500 color-white !p-1 h-fit  absolute top-1 right-1"
        >
          <X />
        </Button>
        <div className="flex flex-row gap-4 items-start">
          <InfoIcon className="w-4 h-4 color-white" />
          <div className="flex flex-col gap-1 items-start">
            <AlertTitle className="color-white m-0 font-x1-500">{title}</AlertTitle>
            <AlertDescription className="color-white font-x0875-300">{description}</AlertDescription>
            <Button variant="outline" onClick={onClick} className="font-x0875-500 px-2 py-1 h-fit mt-2">
              {textButton}
            </Button>
          </div>
        </div>
      </div>
    </Alert>
  )
}

export default AlertComponentAction
