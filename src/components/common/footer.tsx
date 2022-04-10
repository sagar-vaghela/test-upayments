import { Link } from "react-router-dom";
import { CREATE_PRODUCT } from "../../lib/constants/routes";

const Header = () => {
  return (
    <div className="pt-6 fixed bottom-3 right-8">
      <div className="grid justify-items-end ">
          <Link to={CREATE_PRODUCT}>
          <button className="bg-black text-white py-5 px-5 rounded-full ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          </Link>
        </div>
    </div>
  );
};

export default Header;
