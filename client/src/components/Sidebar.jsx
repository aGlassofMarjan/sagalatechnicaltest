import Image from "next/image";
import House from "@/components/icons/House"
import Cart from "@/components/icons/Cart";
import Chart from "@/components/icons/Chart";
import Profile from "@/components/icons/Profile";
import SignIn from "@/components/icons/SignIn";

const Sidebar = () => {
  return (
    <>
      <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <div className="flex items-center gap-3">
          <p className="text-2xl"> <span className="uppercase font-extrabold">Horizon</span> Free</p>

        </div>

        <div className="divider"></div>
        <li>
          <a>
            <House />
            <p>Main Dashboard</p>
          </a>
        </li>
        <li>
          <a>
            <Cart />
            <p>NFT Marketplace</p>
          </a>
        </li>
        <li>
          <a className="bg-primary">
            <Chart />
            <p>Data Tables</p>
          </a>
        </li>
        <li>
          <a>
            <Profile />
            <p>Profile</p>
          </a>
        </li>
        <li>
          <a>
            <SignIn />
            <p>Sign In</p>
          </a>
        </li>
        <li>
          <a>
            <House />
            <p>RTL Admin</p>
          </a>
        </li>
      </ul>
    </>
  )
}

export default Sidebar