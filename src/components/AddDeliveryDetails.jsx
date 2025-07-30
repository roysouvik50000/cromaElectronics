export default function AddDeliveryDetails({ 
  setPhoneNo ,
   setAddress , 
   showDelivary , 
   setShowDelivary,
    phoneNo,
    address,
  }) {

    const submitHandler = ()=>{
      if(phoneNo.length === 10 && address){
        setShowDelivary(false)
      }else{
        alert('Add correct phone no. & Delivary details')
      }
    }

 return (
    <div className={`min-h-screen min-w-screen flex flex-col justify-center items-center fixed z-5 top-16 bg-black/70 ${showDelivary ? '' : 'hidden'}`}>
      <div
        className="bg-black px-6 py-3.5 rounded-2xl flex flex-col items-center justify-around text-white gap-16 text-[18px] shadow-lg shadow-emerald-500"
      >
        <h1 className="text-2xl font-black">Delivery Details </h1>
        <div>
          <label htmlFor="phoneNo">Phone No - </label>
          <input
            type="text"
            name="phoneNo"
            id="phoneNo"
            placeholder="Enter Phone no "
            className="bg-white/15 px-1.5 py-2.5 rounded-2xl"
            onChange={(e) => {
              setPhoneNo(e.target.value.trim());
            }}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Address - </label>
          <textarea name="address" id="address" cols="30" 
          className="bg-white/15 px-1.5 py-2.5 rounded-2xl"
          onChange={(e) => {
              setAddress(e.target.value.trim());
            }}
            required
          ></textarea>
        </div>
        <button
          type="button"
          className="bg-white/10 px-8 py-2 rounded-2xl cursor-pointer"
          onClick={submitHandler}
        >
          Submit
        </button>
        <p></p>
      </div>
    </div>
  );
}