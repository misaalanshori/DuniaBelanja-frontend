import { MdStarOutline } from "react-icons/md";

export default function ProductCard({ image, name, rating, sold }) {
    const formatter = Intl.NumberFormat('en', { notation: 'compact' });
    return (
        <div className="flex flex-col w-48 h-72 rounded-xl overflow-hidden bg-gray-200">
            <img className="object-cover h-56" src={image}></img>
            <div className="flex flex-col gap-2 p-2 ">
                <h5 className="w-full font-semibold text-ellipsis line-clamp-2" >{name}</h5>
                <div className="flex flex-row items-center text-xs"><MdStarOutline size="16px" color="orange"/> {rating} ratings - {formatter.format(sold)}+ sold</div>
            </div>
        </div>
    )
}