import { useState } from "react";

function App() {
  const  [color,setColor]= useState('#031264')
  return(  
     <div className="w-full h-screen duration-600  " style={{backgroundColor: color}}>
          <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
               <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-blue-400 rounded-3xl px-3 py-2">
                   <button onClick={()=>setColor('red')} className="outline-none px-4 py-2 text-white shadow-lg rounded-2xl " style={{backgroundColor:'red'}}>RED</button>
                   <button onClick={()=>setColor('pink')} className="outline-none px-4 py-2 text-white shadow-lg rounded-2xl " style={{backgroundColor:'pink'}}>PINK</button>
                   <button onClick={()=>setColor('yellow')} className="outline-none px-4 py-2 text-pink-500 shadow-lg rounded-2xl " style={{backgroundColor:'yellow'}}>YELLOW</button>
                   <button onClick={()=>setColor('white')} className="outline-none px-4 py-2 text-amber-900 shadow-lg rounded-2xl " style={{backgroundColor:'white'}}>WHITE</button>
                   <button onClick={()=>setColor('green')} className="outline-none px-4 py-2 text-amber-400 shadow-lg rounded-2xl " style={{backgroundColor:'green'}}>GREEN</button>
                   <button onClick={()=>setColor('purple')} className="outline-none px-4 py-2 text-amber-400 shadow-lg rounded-2xl " style={{backgroundColor:'purple'}}>PURPLE</button>
                   <button onClick={()=>setColor('lavender')} className="outline-none px-4 py-2 text-yellow-600 shadow-lg rounded-2xl " style={{backgroundColor:'lavender'}}>LAVENDER</button>
                   <button onClick={()=>setColor('gray')} className="outline-none px-4 py-2 text-pink-300shadow-lg rounded-2xl " style={{backgroundColor:'gray'}}>GRAY</button>
                   <button onClick={()=>setColor('black')} className="outline-none px-4 py-2 text-white shadow-lg rounded-2xl " style={{backgroundColor:'black'}}>BLACK</button>
               </div>
          </div>
     </div>
);
}

export default App;
