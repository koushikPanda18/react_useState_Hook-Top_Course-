import React from "react";
import {filterData,apiUrl} from './data';
import { useEffect ,useState} from "react";
import {toast} from "react-toastify";
import Navbar from "./Components/Navbar";
import Spinner from './Components/Spinner';
import Filter from './Components/Filter';
import Cards from './Components/Cards';
const App = () => {

  let[courses,setCourses]=useState([]);
  let[loading,setLoading]=useState(true);
  let[catagory,setCatagory]=useState(filterData[0].title);



  async function fetchData(){
    try{
      const res=await fetch(apiUrl);
      const output=await res.json();
      // console.log(data);
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return (
    <div className="bg-bgDark2 min-h-screen" >
      <Navbar className="min-h-screen flex flex-col bg-bgDark2" />
      <div className="bg-bgDark2">
        <Filter 
        filterData={filterData}
        catagory={catagory}
        setCatagory={setCatagory}
        />
        <div
        className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">{
          loading ? (<Spinner/>):(<Cards courses={courses} catagory={catagory}/>)
          }
        </div>
      </div>


    </div>
  );

};

export default App;
