import "./styles.css";
import { getFiles } from "./api.js";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let dataTemp = await getFiles();
      setData(dataTemp);
    };
    getData();
  }, []);

  const listComponent = ({ type, name, children }) => {
    return (
      <>
        {
          <ul>
            <li className={type} key={`${name}`}> {name}</li>
            {
              children && children.length > 0 && children.map((item) => (
                listComponent(item)
              ))
            }
          </ul>
        }
      </>
    )
  }

  return (
    <div className="App">
      <h1>File viewer</h1>
      <div className="viewer">
        {data.length && data.map((f) => listComponent(f))}
      </div>
    </div>
  );
}
