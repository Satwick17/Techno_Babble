const reducer = (state, action) =>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case "GET_DETAILS":
            return {
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
            };
        case "REMOVE_POST":
            return{
                ...state, 
                hits: state.hits.filter((curEle) => curEle.objectID !== action.payload)
            }
        case "SEARCH_POST":
            return{
                ...state,
                query: action.payload,
            }
        case "NEXT_PAGE":
            let pageInc = state.page  + 1;
            if (pageInc >= state.nbPages)
                pageInc =0;
            return{
                ...state,
                page: pageInc,
            }
        case "PREV_PAGE":
            let pageDec = state.page - 1;
            if(pageDec <= 0)
                pageDec = 0;
            return{
                ...state,
                page: pageDec ,
            }
    }
}
export default reducer;