import { CalenderDate } from "./components/CalenderDate";
import { CalenderMeeting } from "./components/CalenderMeeting";
import { ProfileCard } from "./components/ProfileCard";
import { ProfileIcon } from "./components/ProfileIcon";
import { SidebarOption } from "./components/SidebarOption";
import WebinarButton from "./components/WebinarButton";

function App() {
  return <CalenderMeeting time={"11:30 AM"} status={"Live"} topic={"UI/UX"} />
}

export default App
