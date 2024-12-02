import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const location = useLocation();
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  
  const active = (path: string) => (location.pathname.includes(path) ? "active" : "");

  return (
    <div id="wd-account-navigation" className="list-group">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Account/${link}`}
          className={`list-group-item ${active(link)}`}
        >
          {link}
        </Link>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kanbas/Account/Users`}
          className={`list-group-item ${active("Users")}`}
        >
          Users
        </Link>
      )}
    </div>
  );
}
