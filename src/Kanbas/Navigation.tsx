import { Link } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" style={{ width: 110 }}
    className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="/images/neu.jpg" width="75px" alt="NEU logo"/>
      </a>
      <Link to="/Kanbas/Account" id="account"
        className="list-group-item text-center border-0 bg-black text-white kanbas-nav-link">
        <FaRegCircleUser className="fs-1 text-danger nav-icon" /><br />
        Account
      </Link>
      <Link to="/Kanbas/Dashboard" id="default-active"
        className="list-group-item text-center border-0 bg-black text-white kanbas-nav-link">
        <AiOutlineDashboard className="fs-1 text-danger nav-icon" /><br />
        Dashboard
      </Link>
      <Link to="/Kanbas/Courses" id="courses"
        className="list-group-item text-center border-0 bg-black text-white kanbas-nav-link">
        <LiaBookSolid className="fs-1 text-danger nav-icon" /><br />
        Courses
      </Link>
      <Link to="/Kanbas/Calendar" id="calendar"
        className="list-group-item text-center border-0 bg-black text-white kanbas-nav-link">
        <IoCalendarOutline className="fs-1 text-danger nav-icon" /><br />
        Calendar
      </Link>
      <Link to="/Kanbas/Inbox" id="inbox"
        className="list-group-item text-center border-0 bg-black text-white kanbas-nav-link">
        <FaInbox className="fs-1 text-danger nav-icon" /><br />
        Inbox
      </Link>
      <Link to="/Labs" id="labs"
        className="list-group-item text-center border-0 bg-black text-white kanbas-nav-link">
        <LiaCogSolid className="fs-1 text-danger nav-icon" /><br />
        Labs
      </Link>
    </div>
  );
}
