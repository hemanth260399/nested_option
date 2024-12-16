import { useState } from 'react'
import './App.css'
let countrydata = [
  [{ name: "india" }, { states: [{ names: "tamilnadu", area: ["anna nagar", "vairamagalam", "jj nagar"] }, { names: "delhi" }, { names: "bangalore" }] }],
  [{ name: "srilanka" }, { states: [{ names: "colmana" }, { names: "colambia", area: ["gandhi nagar", "hope distick", "jj nagar"] }, { names: "lahore" }] }],
  [{ name: "eroupe" }, { states: [{ names: "washington" }, { names: "paris", area: ["paris street", "washington DC", "hondos street"] }, { names: "hond" }] }]
]

function App() {
  let [expanddata, setexpanddata] = useState({})
  let [areastate, setareastate] = useState({})
  let [expandall, setexpandall] = useState(false)
  let expandalldata = (e) => {
    setexpanddata((pre) => ({ ...pre, [e.target.name]: !pre[e.target.name] }))
  }
  let expandarea = (e) => {
    console.log(areastate)
    setareastate((pre) => ({ ...pre, [e.target.name]: !pre[e.target.name] }))
  }
  return (
    <>
      <button onClick={() => setexpandall(!expandall)} className='OuterNavbar'>All Country data</button>
      {expandall && (
        <ul className='innerNavbar'>
          {countrydata.map((country, index) => (
            <li key={index} name={index}>
              <div style={{ display: "flex", borderBottom: "2px solid ", padding: "0px" }}>
                <h2>{country[0].name}</h2>
                <button name={index} onClick={expandalldata}>v</button>
              </div>
              {expanddata[index] &&
                <ul>
                  {country[1].states.map((state, index) => (
                    < li key={index} style={{ listStyle: "none" }} > <button onClick={expandarea} name={`${country[0].name}-${index}`} >{state.names}</button>
                      {
                        (areastate[`${country[0].name}-${index}`] && state.area) ? (
                          <ul>
                            {
                              state.area.map((areas, index) => (
                                < li key={index} style={{ listStyle: "none" }}> {areas}</li>
                              ))
                            }
                          </ul>
                        ) : []
                      }
                    </li>
                  ))}
                </ul>
              }
            </li >
          ))
          }
        </ul >
      )}
    </>
  );
}

export default App;
