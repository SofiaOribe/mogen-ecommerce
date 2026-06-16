import { Button } from "../ui/button"

const ButtonUiColors = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button className="cursor-pointer uiverse border-none" onClick={onClick}>
      <div className="wrapper">
        <span>Sign in {/* <MoveUpRight className="svgIcon" /> */}</span>
        <div className="circle circle-12"></div>
        <div className="circle circle-11"></div>
        <div className="circle circle-10"></div>
        <div className="circle circle-9"></div>
        <div className="circle circle-8"></div>
        <div className="circle circle-7"></div>
        <div className="circle circle-6"></div>
        <div className="circle circle-5"></div>
        <div className="circle circle-4"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-1"></div>
      </div>
    </Button>
  )
}

export default ButtonUiColors
