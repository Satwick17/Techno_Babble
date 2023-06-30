import React from "react";
import { useGlobalhook } from "../Context.js";



const Stories = () => {
 const {hits, remove_post, loading} = useGlobalhook();
 const styles = {
  color: 'blue'
 };
  return (
    <>
    <div className="stories_cont">
   
      { 
        hits.map((element) =>{
          return( 
            <div  key = {element.objectID} className="card">
              <h2>{element.title}</h2>
              <p>By <span>{element.author}</span> | <span>{element.num_comments}</span> comments</p>
              <div className="card_footer">
                <a href={element.url} target="_blank" rel="noreferrer" style={styles}>Read More</a>
                <a href="#" onClick={() => remove_post(element.objectID)}>Remove</a>
              </div>
            </div>
          
           
          )
        })
      }
    </div>
    </>
  );
};

export default Stories;
