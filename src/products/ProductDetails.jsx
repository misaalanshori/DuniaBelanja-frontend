import { useParams } from "react-router-dom";
import { useState } from "react";
import { MdStarOutline } from "react-icons/md";

import product1 from '../assets/images/product1.png'

export default function ProductDetailspage() {
    const { productid } = useParams();
    const [ quantity, setQuantity ] = useState(1);
    const desc = "The floral button down shirt for women embody romance and blooming flowers, perfect for summer with a cool feeling and attractive colors.\nWomens Summer Tees Tops, Casual Hawaiian Shirts for some occasions like daily look, going out, hawaiian vacation, holiday, beach etc."
    
    function decreaseQuantity() {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }  
    }
    function increaseQuantity() {
        setQuantity(quantity + 1);
    }
    return (
        <div className="flex flex-col md:flex-row py-4 sm:p-16 xl:px-32 2xl:px-96 w-full max-md:gap-4 max-md:items-center">
            <div>
                <img src={product1}></img>
            </div>
            <div className="flex flex-col w-3/4 gap-2 break-words">
                <h1 className="text-3xl font-semibold">VILOVE Women Hawaii Shirts Soft Cool Floral</h1>
                <div>
                    <div className="flex flex-row items-center"><MdStarOutline size="20px" color="orange"/> 4.9 ratings <span className="mx-4">•</span> 2.9k+ sold</div>
                </div>
                <p className="whitespace-pre-wrap">{desc}</p>
                <div className=" flex flex-col-reverse gap-4 min-[400px]:flex-row">
                    <div className="flex-1 flex flex-col gap-2 max-[400px]:text-center">
                        <span className="text-2xl font-semibold">Rp 150.000</span>
                        <button className="text-xl bg-dbblue text-white p-1 rounded-xl" >Buy</button>
                    </div>
                    <div className="flex-1 flex flex-row justify-center min-[400px]:justify-end">
                        <div className="flex flex-col w-32 justify-center items-center gap-2">
                            <span className="font-semibold min-[400px]:w-full" >Quantity</span>
                            <div className="flex flex-row gap-4 items-center">
                                <button onClick={decreaseQuantity} className="text-xl font-medium">-</button>
                                <input type="text" className="appearance-none border-2 border-black text-center text-lg rounded-xl w-12 px-1" value={quantity} onChange={(e) => {setQuantity(parseInt(e.target.value))}} />
                                <button onClick={increaseQuantity} className="text-xl font-medium">+</button>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}