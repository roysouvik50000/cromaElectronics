import { useSelector } from "react-redux";

export default function MyProfile() {
  const user = useSelector((state) => state.user.user);
  return (
    <>
      <div className="bg-white h-min-screen px-28 py-16 text-black">
        <h1 className="text-5xl font-black my-8">Your Profile :~</h1>
        <div className=" flex flex-col justify-between rounded-2xl px-5 gap-10 bg-black/10 py-4 ">
          <h1>
            Name :~ {user.displayName && user.displayName}
          </h1>
          <h1>
            Email :~ {user.email}
          </h1>
        </div>
      </div>
    </>
  );
}
