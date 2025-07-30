export default function Footer(){
    return(
        <>
            <div className="h-72 bg-black/25 flex items-center justify-around pb-20">
                <div>
                    <h1 className="font-black">Contact With Us</h1>
                    <input type="text" name="" id="" placeholder="Enter Email ..." 
                    className="px-3 py-2.5 bg-black rounded-2xl placeholder:text-white text-white"
                    />
                    <button type="button"
                    className="bg-emerald-500 px-1.5 py-1 rounded-2xl mx-2.5 cursor-pointer"
                    >Submit</button>
                </div>
                <div>
                    <h1
                    className="font-black text-2xl"
                    >Usefull Links</h1>
                    <p className="text-lg font-medium cursor-pointer">Mobile</p>
                    <p className="text-lg font-medium cursor-pointer">Tablet</p>
                    <p className="text-lg font-medium cursor-pointer">Laptops</p>
                    <p className="text-lg font-medium cursor-pointer">Help</p>
                </div>
            </div>
        </>
    )
}