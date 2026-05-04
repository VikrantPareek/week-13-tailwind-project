import { CalenderDate } from "./CalenderDate";
import { CalenderMeeting } from "./CalenderMeeting";

export function Calender({className}){
    return <div className={`${className} py-6 w-lg border border-gray-300 rounded-xl shadow-xl`}>
        <CalenderDate className={"mx-10 mt-3 mb-7"} date={"Monday, 04 May 2026"}/> 
        <CalenderMeeting className={"mx-11 mb-3"} time={"11:30 AM"} status={"Live"} topic={"UX Webinar"} />
        <hr className="w-9/11 mx-auto mb-3" />
        <CalenderMeeting className={"mx-11 mb-3"} time={"11:30 AM"} status={"Live"} topic={"UX Webinar"} />
        <hr className="w-9/11 mx-auto mb-3" />
        <CalenderMeeting className={"mx-11 mb-3"} time={"11:30 AM"} status={"Live"} topic={"UX Webinar"} />
        <hr className="w-9/11 mx-auto mb-3" />
        <CalenderMeeting className={"mx-11 mb-3"} time={"11:30 AM"} status={"Live"} topic={"UX Webinar"} />
    </div>
}