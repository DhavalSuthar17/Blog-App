import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";


const Pagination = () => {

    const {page, handlePageChange, totalPages} = useContext(AppContext)

    return(
        <div className="w-full bg-white border-2 shadow-lg  flex justify-center items-center fixed bottom-0">
            <div className="flex flex-row  w-10/12 max-w-[670px] py-2 items-center justify-between">
                <div className="flex gap-x-3">
                { page > 1 &&
                  (<button 
                    className="rounded-md border-2 px-4 py-1 "
                  onClick={() => handlePageChange(page - 1)}>
                  Previous
                </button>)
                  
 
                }

                { page < totalPages &&
                 
                   ( <button
                    className="rounded-md border-2 px-4 py-1 "
                   onClick={() => handlePageChange(page + 1)}>
                   Next
               </button>)
                   

                }


                </div>
                
                <p className="font-bold text-md">
                    Page {page} of {totalPages}
                </p>
            </div>

        </div>
    )
}


export default Pagination;