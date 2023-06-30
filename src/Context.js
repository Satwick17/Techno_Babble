import React, { useContext, useReducer, useEffect, useState } from "react";
import reducer from "./Reducer";


const Appstate = React.createContext();

const initialSate = {
  query: "",
  nbPages: 0,
  page: 0,
  hits: [],
};
let api = "https://hn.algolia.com/api/v1/search?";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialSate);

  const remove_post = (post_ID) =>{
    dispatch({type : "REMOVE_POST", payload: post_ID})
  }
  const searchpost = (searchquery) =>{
    dispatch({type: "SEARCH_POST", payload: searchquery})
  }

  const prevPage = () => {
    dispatch({
      type: "PREV_PAGE",
    })
  }
  const nextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    })
  }

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`${api}query=${state.query}&page=${state.page}`);
        const data = await res.json();
        console.log(data);
        dispatch({
            type : "GET_DETAILS",
            payload : {
                hits: data.hits,
                nbPages : data.nbPages,
            }
          });
          setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [state.query, state.page]);

  

  return( 
    <Appstate.Provider value={{...state, remove_post, searchpost, nextPage, prevPage, loading}}>{children}</Appstate.Provider>
  );
};
const useGlobalhook = () => {
  return useContext(Appstate);
};

export { AppProvider, Appstate, useGlobalhook };
