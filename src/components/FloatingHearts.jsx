export default function FloatingHearts(){
  return(
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_,i)=>(
        <span
          key={i}
          className="absolute text-pink-300 animate-bounce"
          style={{
            left:Math.random()*100+"%",
            top:Math.random()*100+"%",
            fontSize:Math.random()*20+10+"px"
          }}
        >
          ❤
        </span>
      ))}
    </div>
  )
}
