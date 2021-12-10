import React,{useState,useEffect,useContext} from 'react';
import {MenuItem,FormControl,Select,Card,CardContent} from '@material-ui/core';

import "leaflet/dist/leaflet.css";

import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import {sortData} from '../utils/sorting';
import LineGraph from './LineGraph';

import { AuthContext } from '../Context/AuthContext';


const Home = ()=>{
    const [countries,setCountries] = useState([]);
  // https://disease.sh/v3/covid-19/countries
  const [country,setCountry] = useState("worldwide");
  const [countryInfo,setCountryInfo] = useState({});
  const [tableData,setTableData] = useState([]);
  const [casesType,setCasesType] = useState("cases");
  const [mapCenter,setMapCenter] = useState({lat:14.6,lng:77.59});
  const [mapZoom,setMapZoom] = useState(6);
  const [mapCountries,setMapCountries] = useState([]);

  useEffect(()=>{
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then((data)=>{
      setCountryInfo(data);
    })
  },[])


  useEffect(()=>{
    const getCountriesData = async()=>{
      await fetch("http://localhost:5000/countries")
      .then((response)=> response.json())
      .then((data)=>{
        setMapCountries(data.countriesData);
        const countries = data.countriesData.map((country)=>({
          name:country.country,
          value:country.countryInfo.iso2
        }));
        // console.log(data);
        setTableData(sortData(data.countriesData));
        setCountries(countries);

      })
    };

    getCountriesData();

  },[])

  const onCountryChange = async (event)=>{
    const countryCode = event.target.value;
    
    const url = countryCode === "worldwide" ? 'https://disease.sh/v3/covid-19/all' 
                                            : `https://disease.sh/v3/covid-19/countries/${countryCode}`; 
    
    await fetch(url)
    .then(response => response.json())
    .then(data=>{
      setCountry(countryCode);
      setCountryInfo(data);
      setMapCenter([data.countryInfo.lat,data.countryInfo.long]);
      setMapZoom(5);
    });  

    // http://localhost:5000/all : worldwide data(https://disease.sh/v3/covid-19/all)
    // http://localhost:5000/countries/[countrycode] : data specific to country(https://disease.sh/v3/covid-19/countries/[countryCode_iso3])



  }

  console.log("Selected country / worldwide data:",countryInfo);
  console.log("for map: ",mapCountries);

  const {user,setUser,isAuthenticated,setIsAuthenticated} = useContext(AuthContext);

  console.log(user)
  console.log(isAuthenticated)

  return (
    <>
    <div className="app">
      <div className="app__left">
             <div className="app__header">
                <h1>Covid 19 Cases</h1>
                <FormControl className="app__dropdown">
                  <Select
                    variant = "outlined"
                    value={country}
                    onChange = {onCountryChange}
                  >
                  <MenuItem value="worldwide">Worldwide</MenuItem>
                {/*Loop through all countries , show dropdown*/}
                  {
                    countries.map((country)=>(
                      <MenuItem value={country.value} key={country.value + country.name} >{country.name}</MenuItem>
                    ))
                  }

                   {/* 
                    <MenuItem value="worldwide">Worldwide</MenuItem>*/}
                  </Select>
                   
                </FormControl>
                     
              </div>

              <div className="app__stats">
                <InfoBox 
                    isRed
                    active={casesType === "cases"}
                    title= "Covid cases"
                    total = {countryInfo.cases}
                    cases= {countryInfo.todayCases}
                    onClick={(e)=>setCasesType("cases")}
                 />
                <InfoBox 
                    title= "Active cases"
                    isRed
                    cases= {countryInfo.active}

                 />

                <InfoBox 
                    active={casesType === "recovered"}

                    title= "Covid recoveries"
                    total = {countryInfo.recovered}
                    cases= {countryInfo.todayRecovered}
                    onClick={(e)=>setCasesType("recovered")}

                    
                 />
                <InfoBox 
                    isRed
                    active={casesType === "deaths"}

                    title= "Covid deaths"
                    total = {countryInfo.deaths}
                    cases= {countryInfo.todayDeaths}
                    onClick={(e)=>setCasesType("deaths")}
                    
                 />
              </div>

             {/*header -done*/}
             {/*title + select input dropdown field -done*/}

             {/*Info boxes - done static*/}
             {/*info box - done static*/}
              {/*info box - done static*/}

        
          {/*map -done just layout*/}
              <Map
                center={mapCenter}
                zoom={mapZoom}
                countries={mapCountries}
                casesType={casesType}
               />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Cases by Country</h3>
          <Table countries={tableData} ></Table>
        </CardContent>
        <CardContent>
          <h3>Worldwide new cases</h3>
          <LineGraph casesType={casesType}/>

        </CardContent>
            {/*table - done just layout */}
            {/*graph - done just layout*/} 
      </Card>
    </div>
    {/* <div className="detailedData">
      
      <div className="detailedData__vaccinationCenters">
        <h2>Vaccination Centers</h2>
        <p>Get data from csv using node</p>
        <p>List data , show on map </p>
        <a href="https://www.mohfw.gov.in/pdf/PMJAYPRIVATEHOSPITALSCONSOLIDATED.xlsx">Vaccine Centers details CSV</a>
      </div>

      <div className="detailedData__vaccineGlobalCount">
        <h2>Global vaccination count</h2>        
        <p>Numerical ,chart</p>
        <a href="">/v3/covid-19/vaccine/coverage</a>
      </div>

      <div className="detailedData__vaccineCountrywiseTimeline">
        <h2>Countrywise timeline according to selction</h2>
        <p>chart data</p>
        <a href="">https://disease.sh/docs/#/COVID-19:%20Vaccine/get_v3_covid_19_vaccine_coverage_countries</a>
      </div>

      <h1>World Covid data</h1>
      <div className="detailedData__world">
        https://blogs.mulesoft.com/dev-guides/track-covid-19/
      </div>

      <h1>Live Covid Data India</h1>
      <div className="detailedData__indiaLive">
        https://www.programmableweb.com/api/api-covid-19-india-rest-api-v10
        https://github.com/amodm/api-covid19-in
      </div>


      <h1>Historical Covid Data of India(Jan2020 - Oct2021):16months</h1>

      <div className="detailedData__indiaStatewise">
        <h2>India state,districtwise numerical(active,confirmed,recovered,deaths)</h2>
        <a href="https://data.covid19india.org/state_district_wise.json">covid19india.org</a>
      </div>

      <div className="detailedData__indiaAllData">
        <h2>India All Data</h2>
        <a href="https://data.covid19india.org/data.json">covid19india.org</a>
      </div>

    </div>   */}

    </>
  );
}
    

export default Home;