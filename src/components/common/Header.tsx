/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => {
  return (
    <div className="pt-6">
    {/* <div className="bg-white flex mb-4 ">
      <div className="grid justify-items-start pb-6 h-12 w-1/2">
        <label>UPayments Store</label>
      </div>
      <div className="grid justify-items-end pb-6 h-12 w-1/2">
        <label>Register</label>
      </div>
    </div> */}

    <ul className="flex justify-between bg-white shadow-md rounded-md">
    <li className="mr-3">
      <a className="inline-block  rounded py-2 px-4 font-semibold text-Blacks" href="#">UPayments Store</a>
    </li>
    <li className="mr-3">
      <a className="inline-block  border-white rounded hover:border-gray-200 font-semibold  py-2 px-4  text-Blacks" href="#">Register</a>
    </li>
    </ul>
</div>
  );
};

export default Header;
