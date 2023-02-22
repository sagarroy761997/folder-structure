import "./App.css";

import { useEffect, useState } from "react";
import File from './Component/File';
import Folder from './Component/Folder';

function App() {
  const [folderData, setFolderData] = useState([]);
  const [data, setData] = useState({})
  const [fileData, setFileData] = useState([]);
  const [loading, setLoading] = useState(true)
  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        // console.log(response)
        return response.json();
      })
      .then((myJson) => {
       if(myJson){
        setData(myJson);
        // setFolderData(...folderData,{name: myJson.name})
        setLoading(!loading)
       }
        
       
      });
  };
  // const dfs = (object) => {
  //   if(object.children){
  //     console.log(`Folder ${object.name}` );
  //     dfs(object.children);
  //     // return (true)
  //   }else{
  //     console.log(`File ${object.name}`);
  //     // return(false)
  //   };
  // };

  const dfs = function (start, target) {
    console.log(start)
    if (start.index === target) {
      console.log(typeof start.index);
      console.log(typeof target);
      setFileData(start);
      setFolderData([...folderData,start])
    }

    // for (let i = 0; i < start.children.length; i++) {
    //   console.log(start.children.length,target)
    dfs(start.children, target);
    // if (result != null) {
    //   console.log(result);
    //   value = result;
    //   return result;
    // }
    // }
    // return null;
  };

  // module.exports = {dfs};

  useEffect(() => {
    getData();
    console.log(folderData)
  }, []);
  if(loading){
    return(
      <h1>loading ... </h1>
    )
  }
  return (
    <div className="App">
      <button onClick={()=>{dfs(data,0)}}>Folder Structure</button>
      {folderData.map(rows=>(
        <ul>
        <li onClick={()=>{dfs(data,rows.index+1)}}>{rows.name}</li>
      </ul>
      ))}
      {/* {fileData.type === 'files' ?
      <div><File name ={File}/></div>: <div><Folder/></div>} */}
    </div>
  );
}

export default App;
