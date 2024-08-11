import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";



//step 1 create context 
export  const AppContext = createContext();


//here appcontext providers children is app component

export default   function AppContextProvider({children}) {

    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);


    //fetching data from the api 
    async function fetchBlogPosts(page = 1) {


        setLoading(true)

         let url = `${baseUrl}?page=${page}`


        try{
             const result = await fetch(url)
             const data = await result.json();
             console.log(data);

             setPosts(data.posts)
             setPage(data.page)
             setTotalPages(data.totalPages)

        }
        catch(error){
            
            console.log("Error in fetching data")
            setPage(1)
            setPosts([])
            setTotalPages(null)

        }

        setLoading(false)

    }


    function handlePageChange(page){
        setPage(page)
        fetchBlogPosts(page);

    }


    //created a object the pass the stored data
const value = {
    loading,
    setLoading,
    posts,
    setPosts,
    page,
    setPage,
    totalPages,
    setTotalPages,
    fetchBlogPosts,
    handlePageChange,
    
}


//step 2 provide context here all is the provider
//here appcontext is providing the  value to the app component which we have created above 
return <AppContext.Provider value={value}>
    {children}
</AppContext.Provider>

}

