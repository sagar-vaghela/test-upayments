import { Link } from "react-router-dom";
import { ROOT_ROUTE } from "../../lib/constants/routes";

const Header = () => {
  return (
    <div className="pt-6">
      <ul className="flex justify-between bg-white shadow-md rounded-md">
        <li className="mr-3">
          <Link
            className="inline-block  rounded py-2 px-4 font-semibold text-Blacks"
            to={ROOT_ROUTE}
          >
            UPayments Store
          </Link>
        </li>
        <li className="mr-3">
          <span className="inline-block  border-white rounded hover:border-gray-200 font-semibold  py-2 px-4  text-Blacks">
            Register
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Header;
