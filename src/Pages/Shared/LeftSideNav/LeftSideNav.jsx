import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeftNewsCard from "./LeftNewsCard/LeftNewsCard";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    const [newsCard, setNewsCard] = useState([])

    useEffect(() => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))

    },[]);

    useEffect(() => {
        fetch('/news.json')
        .then(res => res.json())
        .then(data => setNewsCard(data))
    },[]);

    
        

    return (
        // All Categoris Section
        <div>
            <div className="p-4">
            <h3 className="font-semibold text-2xl  mb-4">All Categories</h3>
            {
                categories.map( category => <Link 
                className=" block border p-2 rounded-sm my-2 hover:bg-slate-800 hover:text-white font-semibold"
                key={category.id}>
                {category.name}
                </Link>)
            }
        </div>
        <div>
            {
                newsCard.map(lNews => <LeftNewsCard 
                key={lNews._id}
                news={lNews}
                ></LeftNewsCard>)
            }
        </div>
        </div>
    );
};

export default LeftSideNav;