import product1 from '../assets/images/product1.png'

export default function Orderspage() {
    return (
        <div className='flex relative flex-col py-8 px-8 lg:px-48 w-full justify-start items-center min-h-[75vh] gap-4'>
            <h1 className='w-full border-b-2 border-neutral-300 text-xl font-semibold pb-1'>List Transaction</h1>
            <div className='flex flex-row content-evenly w-full gap-4 overflow-x-auto'>
                <button className='flex-1 py-1 px-2 min-w-1/3 rounded-lg text-center text-white border border-dbblue bg-dbblue'>Waiting For Payment</button>
                <button className='flex-1 py-1 px-2 min-w-1/3 rounded-lg text-center text-dbblue border border-dbblue'>Payment Completed</button>
                <button className='flex-1 py-1 px-2 min-w-1/3 rounded-lg text-center text-dbblue border border-dbblue'>Payment Rejected</button>
                <button className='flex-1 py-1 px-2 min-w-1/3 rounded-lg text-center text-dbblue border border-dbblue'>Payment Expired</button>
            </div>
            <div className='w-full' >
                <div className="rounded-lg flex flex-col lg:flex-row justify-center bg-neutral-200 w-full">
                    <div className='flex flex-col sm:flex-row justify-center w-full'>
                    <img src={product1} className='ml-8 max-sm:mt-4 rounded-lg self-center object-cover h-32 aspect-[4/3]'></img>
                        <div className='flex-1 m-4 flex flex-col justify-center text h-36'>
                            <h2 className=' font-semibold text-ellipsis line-clamp-2'>VILOVE Women Hawaii Shirts Soft Cool Floral</h2>
                            <div className='flex-1 flex flex-row items-center'>
                                <span className='flex-1'>Sub Total:</span>
                                <span className='flex-1 text-right'>Rp 150.000</span>
                            </div>
                            <div className='flex-1 flex flex-row  items-center'>
                                <span className='flex-1'>Shipping:</span>
                                <span className='flex-1 text-right'>Rp 15.000</span>
                            </div>
                            <div className='flex-1 flex flex-row font-semibold  items-center'>
                                <span className='flex-1'>Total:</span>
                                <span className='flex-1 text-right'>Rp 165.000</span>
                            </div>
                            
                        </div>
                    </div>
                    <div className='flex self flex-col gap-4 p-4 lg:border-l-2 border-neutral-300 justify-center'>
                        <div className='font-semibold p-2 text-amber-500 border-2 rounded-lg border-amber-500 text-center'>Payment Pending</div>
                        <a className='text-white bg-dbblue rounded-lg text-center p-2'>Payment</a>
                    </div>
                </div>
            </div>
            <div className="w-screen h-8 rounded-b-full bg-white absolute left-0 -bottom-8"></div>
        </div>
    )
}