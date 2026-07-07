import AppPresentation from "./content/AppPresentation"
import BestSellers from "./content/BestSellers"
import Landing from "./content/Landing"

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <Landing />
      <BestSellers />
  {/*     <AppPresentation /> */}
    </div>
  )
}

export default Home
