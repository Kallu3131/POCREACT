import Initial from './Components/Initial.js';
import One from './Components/One.js';
import Two from './Components/Two.js';
import Three from './Components/Three.js';
import ReactDOMServer from "react-dom/server";
import { useState } from 'react';
function App () {
              var [globalID, setGlobalID] = useState("");
              const [page]=useState([]);
              var A="";
             function adddata()
              {
                var initi = ReactDOMServer.renderToStaticMarkup(<Initial />);
              var str1=initi.toString();
              var add={title: "Initial",value:getText(str1)};
              page.push(add);
              
               initi = ReactDOMServer.renderToStaticMarkup(<One />);
               str1=initi.toString();
               add={title: "One",value:getText(str1)};
              page.push(add);
               initi = ReactDOMServer.renderToStaticMarkup(<Two />);
               str1=initi.toString();
              add={title: "Two",value:getText(str1)};
              page.push(add);
               initi = ReactDOMServer.renderToStaticMarkup(<Three />);
               str1=initi.toString();
               add={title: "Three",value:getText(str1)};
              page.push(add);
              console.log(page)
              function getText(html){
                var divContainer= document.createElement("div");
                divContainer.innerHTML = html;
                return divContainer.textContent || divContainer.innerText || "";
            }
            console.log(page.length)
              }
              
            var m=0;
            function serch() {
              console.log(page.length)
              if(m==0){
              adddata();}
              var j=0;
              var title="";
              for(var i=0;i<page.length;i++)
              {
                
                if (page[i].value.includes(globalID) && j==0 ) {
                  j=1;
                  title=page[i].title;
                  console.log(page[i].value)
                  
                }
              }
              
              if (j==1) {
                console.log("text found");

                alert("text found in component name "+title)
                
                 A=title;
                 console.log(A);  
              }
            else {
                console.log("text not found "+j +"  "+title);
                alert("text not found in any component ")
                
            }
              
            }
              
          
            
    return (
    <div className="App">
      
      <br/>
      <br/>
      <br/>
      <h1>Search the data presents inside the components.</h1>
    {A}
    <label> Search  </label>
       <input type="text" placeholder="type search" onChange={(e)=> setGlobalID(e.target.value)} ></input>
                 <button id="btn" onClick={ serch}>SEARCH</button>


      <br/>
      <br/>
      <br/>
       
      <Initial />
      <br/>
      <One/>
      <br/>
      <Two/>
      <br/>
      <Three/>
    </div>
    
  );

}
export default App;
