import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div  style={{   borderLeft: '4px solid black',
      paddingLeft: '115px', paddingRight: '20px' }}>
      <Link
        to="/Kanbas/Account/Signin"
        className="list-group-item list-group-item-action text-danger"
      >
        Signin
      </Link>
      <Link
        to="/Kanbas/Account/Signup"
        className="list-group-item list-group-item-action text-danger"
      >
        Signup
      </Link>
      <Link
        to="/Kanbas/Account/Profile"
        className="list-group-item list-group-item-action text-danger"
      >
        Profile
      </Link>
    </div>
  );
}
