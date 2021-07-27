import React, { useEffect, useState } from 'react'

function Tempapp(){

    const [city,setCity]=useState(null);
    const [search,setSearch]= useState("pune");

    useEffect(()=>{
        const fetchApi = async ()=>{
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f66c5ff87aae3032429ccea2da93b7ef`;
            const response = await fetch(url);
            const resJson = await response.json();
            // console.log(resJson);
            setCity(resJson.main);

        }
        fetchApi();

    },[search])

    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    value={search}
                    className="inputFeild" 
                    onChange={(event)=>{
                        setSearch(event.target.value)
                    }} />
                </div>
            
            {
                !city ?(<p>No Data Found</p>)
                :(<div>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fas fa-street-view"></i>{search}
                                </h2>
                                <h1 className="temp">temp :{city.temp}</h1>
                                <h3 className="tempin_max">min : {city.temp_min} | Max : {city.temp_max} </h3>
                            </div>

                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                </div>)
            }
            
            </div>
            </>
    )
}
export default Tempapp;