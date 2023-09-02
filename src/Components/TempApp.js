import React ,{useState,useEffect} from 'react'
import "./css/style.css"; 

export default function TempApp() {
  const [city,setCity]=useState(null);
  const[search,setSearch]=useState("Mumbai");

  useEffect( () => {
    const fetchApi=async ()=>{
        const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5c26c4e036187c09c01e271a0ed8170e`
        const response=await fetch(url);
        const resJson=await response.json();
        // console.log(resJson)
        setCity(resJson.main); 
    };
    fetchApi();
  },[search] )

  return (
    <>  
    <div className="box">
        <div className="inputData">
            <input 
            type="search"
            className="inputFeild"
            placeholder="Search any city..."
            onChange={(event)=>{
                setSearch(event.target.value)
            } }/>
        </div>    
        {/* <div className="weathercon">
            <i className="fas fa-sun"></i>
        </div> */}
        {!city ?(
            <p className='errorMsg'>No Data Found</p>
        ):(
            <div>
            <div className="info">
        <h2 className="location">
        <i className="fas fa-street-view"></i>{search}
        </h2>
        <h1 className="temp">
            {city.temp} &#176;C
        </h1>
        <h3 className="tempmin_max">Min : {city.temp_min} &#176;C | Max :{city.temp_max}  &#176;C </h3>
    </div>
    <div className="wave -one"></div>
    <div className="wave -two"></div>
    <div className="wave -three"></div>
    </div>         
        )}
</div>
</>
  )
}
