import ProductCard from "../components/ProductCard";

import { useRef, useState, useEffect, useMemo } from 'react';

import {MdChevronLeft, MdChevronRight, MdSearch} from 'react-icons/md';

export default function ProductBrowser({enablePagination}) {
    const [selectedCategory, setSelectedCategory] = useState(-1);
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [loadState, setLoadState] = useState("loading");

    const [page, setPage] = useState(1);

    const categoriesRef = useRef([])
    const productsRef = useRef({})
    const paginationRef = useRef({});

    const message = {
        "loading": "Loading products...",
        "loaded": "This category is empty",
        "error": "Failed to load products"
    }

    async function loadCategories() {
        const response = await fetch(import.meta.env.VITE_API + "/api/categories");
        const data = await response.json();
        if (data.code == 200) {
            categoriesRef.current = data.data;
            setSelectedCategory(0);
        }
    }

    async function loadProducts() {
        setLoadState("loading");
        setProducts([]);
        if (productsRef.current[selectedCategory] && productsRef.current[selectedCategory][page]) {
            setProducts(productsRef.current[selectedCategory][page]);
            setLoadState("loaded");
        } else {
            const response = await fetch(import.meta.env.VITE_API + `/api/products?category_id=${categoriesRef.current[selectedCategory].id}?page=${page}`);
            const data = await response.json();
            if (data.code == 200) {
                setProducts(data.data.list);
                // Store the products in a ref so we don't have to fetch it again
                if (!productsRef.current[selectedCategory]) {
                    productsRef.current[selectedCategory] = {};
                }
                productsRef.current[selectedCategory][page] = data.data.list;
                setLoadState("loaded");
            } else {
                setLoadState("error");
            }
        }
        
    }

    function prevCategory() {
        if (selectedCategory > 0) {
            setSelectedCategory(selectedCategory - 1);
        }
    }
    function nextCategory() {
        if (selectedCategory < categoriesRef.current.length - 1) {
            setSelectedCategory(selectedCategory + 1);
        }
    }

    function stringSearchMatch(str, searchStr) {
        const words = str.split(" ");
        const searchWords = searchStr.split(" ");
        return searchWords.every(word => words.some(w => w.toLowerCase().includes(word.toLowerCase())))
    }

    useEffect(()=>{
        loadCategories();
    },[])

    useEffect(() => {
        if (selectedCategory >= 0) {
            loadProducts();
        }
    },[selectedCategory, page])
    
    return (
        <div className="w-11/12 lg:w-4/6 h-[54rem] sm:h-[48rem] flex flex-col items-center sm:items-start gap-4" >
            <div className="flex flex-row items-center gap-2 w-64 h-10 px-3 rounded-xl bg-gray-200 text-dbblue">
                <MdSearch size="24px"/>
                <input className="w-full h-full bg-transparent" type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
            </div>
            <div className="flex flex-col sm:flex-row w-full h-full items-center" >
                <div className="flex flex-row sm:flex-col justify-center w-full sm:w-64 gap-2">
                    
                    <ul className="flex flex-row sm:flex-col content-evenly items-stretch px-4 max-sm:overflow-x-scroll sm:overflow-y-scroll scrollbar-thin scrollbar-thumb-dbblue scrollbar-track-gray-300 scrollbar-thumb-rounded-xl scrollbar-track-rounded-xl flex-shrink sm:h-[38rem] text-base sm:text-xl text-dbblue text-center sm:text-left">
                        {categoriesRef.current.map((e,i) => (<li onClick={()=>{setSelectedCategory(i)}} className={"hover:bg-black hover:bg-opacity-10 rounded-lg cursor-pointer py-3 px-2" + (i == selectedCategory ? " font-semibold" : "")} key={e.id}>{e.name}</li>))}
                    </ul>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                        <button onClick={prevCategory} className="rounded-full p-0.5 bg-black hover:bg-dbblue"><MdChevronLeft size="32px" color="white"/></button>
                        <button onClick={nextCategory} className="rounded-full p-0.5 bg-black hover:bg-dbblue"><MdChevronRight size="32px" color="white"/></button>
                    </div>
                </div>
                <div className="w-full h-[40rem] py-1 flex flex-row flex-wrap gap-4 justify-center content-start overflow-y-scroll scrollbar-thin scrollbar-thumb-dbblue scrollbar-track-gray-300 scrollbar-thumb-rounded-xl scrollbar-track-rounded-xl">
                    {products.length > 0 ? products.filter(e=>stringSearchMatch(e.name, searchQuery)).map(e => (<ProductCard key={e.id} name={e.name} image={e.image} rating={e.rating} sold={e.sold} />))
                    : (<h1>{message[loadState]}</h1>)}
                </div>
            </div>
            
            
        </div>
    )
}