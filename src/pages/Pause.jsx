import TypingText from "../components/TypingText";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import FlowerBouquet from "../components/FlowerBouquet";
export default function Pause(){
  return(
    <PageWrapper>
    <div className="h-screen flex flex-col justify-center items-center">
      <TypingText text="I get angry at you, I argue, I fight — sometimes a lot…
but today I want to tell you what I’ve never said before." />

      <FlowerBouquet />

      <Link
        to="/final"
        className="mt-20 px-6 py-3 bg-pink-300 rounded-xl"
      >
        reveal
      </Link>
    </div>
    </PageWrapper>
  )
}
