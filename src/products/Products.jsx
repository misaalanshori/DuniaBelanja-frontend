import ProductBrowser from "../components/ProductBrowser"

import hangerimg from "../assets/images/hanger.jpg"

export default function Productspage() {
    
    return (
        <div className="w-full h-fit flex flex-col gap-8 justify-center items-center">
            <img src={hangerimg} className="w-full" />
            <ProductBrowser enablePagination={true}/>
        </div>
    )
}