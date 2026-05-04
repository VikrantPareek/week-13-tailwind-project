import { ProfileIcon } from "./ProfileIcon";

export function ProfileCard({name, mail, mobile, location}){
 return <div className="shadow-lg shadow-black-500 p-5 w-52 rounded-xl h-78">
    <ProfileIcon className="mx-auto my-7" height={24}/>
    <h1 className="text-xl mx-auto w-fit font-bold">{name}</h1>
    <div className="mx-auto w-fit mt-2 text-gray-500">
        <p>{mail}</p>
        <p>{mobile}</p>
    </div>
    <p className="mx-auto w-fit mt-2 text-gray-500 font-semibold">{location}</p>
 </div>   
}