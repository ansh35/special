import FadeText from "../components/FadeText";
import HoldReveal from "../components/HoldReveal";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function Story(){
  return(
    <PageWrapper>
    <div className="pb-40">

      <FadeText >
        Life was normal. Not bad. Not empty. Just… moving.
      </FadeText>

      <FadeText delay={1.0}>
        I didn’t feel like something was missing. Until I met you.
      </FadeText>

      <FadeText delay={2.0}>
        Talking to you felt easy. Like my mind didn’t need to prepare.
      </FadeText>

      <FadeText delay={3.0}>
        Slowly… you became part of my everyday.
      </FadeText>

      <FadeText delay={4.0}> 
        Your mood began affecting mine.
      </FadeText>

      <FadeText delay={4.5}> 
        Your smile became my favorite sight.
      </FadeText>

      <FadeText delay={6.0}> 
        Your happiness became my goal.
      </FadeText>

      <FadeText delay={7.0}> 
        I didn’t know it then, but I was falling in love with you.
      </FadeText>

        <FadeText delay={8.0}> 
        I still am. And I hope you are too. love you, my Valentine.
      </FadeText>

       <HoldReveal hiddenText="
        On this Valentine’s Day, I just want to wish you a beautiful and happy Valentine’s Day. I hope your day is filled with love, laughter, and all the things that make you happy. You deserve all the love in the world, and I’m grateful to have you in my life. Happy Valentine’s Day, my dear!
      "/>

      <div className="text-center mt-40">
        <Link to="/pause" className="px-6 py-3 bg-pink-300 rounded-xl">
          Continue
        </Link>
      </div>

    </div>
    </PageWrapper>
  )
}
