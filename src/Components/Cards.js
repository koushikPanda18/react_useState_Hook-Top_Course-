
import React from "react";
import Card from "./Card";
import { useState } from "react";

function Cards(props){
    let courses=props.courses;
    let catagory=props.catagory;
    const[likedCourses,setLikedCourses]=useState([]);


    console.log("Default Courses received",courses);
    function getCourses(){
        if(catagory==="All"){

            let allCourses=[];
                 Object.values(courses).forEach(array=>{
                    array.forEach(courseData=>{
                        allCourses.push(courseData);
                    })
                })
                return allCourses;
        }
        else{
            //only the selected catagory data wiil be passed
            return courses[catagory];
        }
    }
    let myCourses=getCourses();
    console.log("converted courses",myCourses);
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
        {
          myCourses.map( (course) => (
              <Card key={course.id} 
              course = {course} 
              likedCourses={likedCourses}
              setLikedCourses={setLikedCourses}/>
          ))
        }
      </div>
    );
}

export default Cards;