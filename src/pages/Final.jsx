import FloatingHearts from "../components/FloatingHearts";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";

export default function Final(){
  return(
    <PageWrapper>

    <div className="h-screen flex flex-col justify-center items-center text-center px-6">

      <p className="text-2xl mb-6">
        I didn’t make this to impress you.
      </p>

      <p className="text-xl mb-6">
        I made this to show you how much you mean to me.
      </p>

      <p className="text-2xl font-semibold mb-10">
        I love you.
      </p>

      <Link
        to="/letter"
        className="px-8 py-4 bg-pink-400 rounded-xl text-white"
      >
        Read my letter
      </Link>

      <FloatingHearts/>
    </div>
    </PageWrapper>
  )
}
