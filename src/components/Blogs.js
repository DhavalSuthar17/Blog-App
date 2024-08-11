import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import Card from "./Card";


const Blogs = () => {

    //consuming or using the appcontext data
    const {posts, loading} = useContext(AppContext)

    return(
        <div className="w-11/12 h-screen max-w-[670px] py-8 flex flex-col gap-y-7 mt-[300px] mb-[300px] justify-center items-center">
            {
                loading ? 
                (<Spinner/>):
                (posts.length === 0  ?
                     (<div className="flex absolute top-1/2 -z-20"><p className="font-bold text-4xl">No Posts Found</p></div>) :
                     //in the map function is we use the () this brackets then no need to return if we use {} this then return is need
                     (posts.map((post) => (
                        <div key={post.id}>
                            <p className="font-bold text-lg">
                                {post.title}
                            </p>
                            <p className="text-md mt-[4px]">
                                By<span className=" italic">{post.author}</span> on <span className=" underline font-bold">{post.category}</span>
                            </p>
                            <p className="text-md mt-[4px]">
                                Post on <span>{post.date}</span>
                            </p>
                            <p className="text-md mt-[15px]">{post.content}</p>

                            <div className="flex gap-x-2">
                                {post.tags.map((tag, index) => {
                                    return <span key={index} className=" text-blue-600 underline font-bold text-sm mt-[5px]">{`#${tag}`}</span>


                                })}
                            </div>
                            
                        </div>
                     )))
                )
            }

        </div>
    )
}


export default Blogs;