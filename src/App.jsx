import { Routes, Route } from "react-router-dom";
import Unlock from "./pages/Unlock";
import Story from "./pages/Story";
import Pause from "./pages/Pause";
import Final from "./pages/Final";
import Letter from "./pages/Letter";
import BackgroundGlow from "./components/BackgroundGlow";
import Particles from "./components/Particles";



export default function App(){
  return(
    <>
      <BackgroundGlow/>
      <Particles/>
      <Routes>
        <Route path="/" element={<Unlock/>}/>
        <Route path="/story" element={<Story/>}/>
        <Route path="/pause" element={<Pause/>}/>
        <Route path="/final" element={<Final/>}/>
        <Route path="/letter" element={<Letter/>}/>
      </Routes>
    </>
  )
}
