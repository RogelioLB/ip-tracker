import React,{useState} from 'react';
import Info from './Info';
import Map from './Map';

const Aplicacion = () =>{

    const [ip,setIp] = useState("");
    const [result,setRes] = useState({});
    const [data,setData] = useState(true);

    const fetchData = (e) =>{
        e.preventDefault();
        setData(true);
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_VaJALfgEqjlGlBFh1H1CJD7sszJkg&ipAddress=${ip}`).then(res=>res.json()).then(res=>{
            setRes(res);    
            setData(false);
        })
    }

    return(
        <React.Fragment>
            <header>
                <div className="header_containt">
                    <h1>IP Address Tracker</h1>
                    <form>
                        <input type="text" id="ip" name="ip" className="itemForm" placeholder="Search for any IP address or domain" onChange={e=>setIp(e.target.value)}></input>
                        <button id="btn" className="itemForm" onClick={(e)=>fetchData(e)}></button>
                    </form>
                </div>
                {
                    data ? <div></div> : <Info data={result}></Info>
                }
            </header>
            {
                data ? <React.Fragment></React.Fragment> : <Map data={result.location}></Map>
            }
        </React.Fragment>
    )
}

export default Aplicacion;