import React,{useEffect,useState} from 'react';

const Info = (props) =>{
    const [data,setData] = useState(props.data);
    
    return(
        <div className="info-container">
            <div className="info-group">
                <h2>IP Address</h2>
                <h3>{data.ip}</h3>
            </div>
            <div className="info-group">
                <h2>Location</h2>
                <h3>{data.location.city},{data.location.country} {data.location.postalCode}</h3>
            </div>
            <div className="info-group">
                <h2>Timezone</h2>
                <h3>UTC {data.location.timezone}</h3>
            </div>
            <div className="info-group">
                <h2>ISP</h2>
                <h3>{data.isp}</h3>
            </div>
        </div>
    )
}

export default Info;