import CheckTable from "@/components/tables/CheckTable";
import DevelopmentTable from "@/components/tables/DevelopmentTable";
import FourColumnTable from "@/components/tables/FourColumnTable";

import ComplexTable from "@/components/tables/ComplexTable";
import Hamburger from "@/components/icons/Hamburger";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";



export default function Home() {



  return (
    <>

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <main className="grid items-center gap-4 p-4 sm:px-6 sm:py-0 lg:grid-cols-2 xl:grid-cols-2">
            {/* Navigation */}
            <div className="sm:col-span-2 card bg-base-100 shadow-xl p-10">
              <div className="flex justify-between">
                <div className="flex">
                  <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-4 w-4 opacity-70">
                      <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                    </svg>
                  </label>
                </div>
                <div className="flex items-center">
                  <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="dark" />

                    {/* sun icon */}
                    <svg
                      className="swap-off h-10 w-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path
                        d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>

                    {/* moon icon */}
                    <svg
                      className="swap-on h-10 w-10 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24">
                      <path
                        d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                  </label>

                  <label htmlFor="my-drawer-2" className="btn rounded-full drawer-button lg:hidden">
                    <Hamburger />
                  </label>

                  <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="m-1">
                      <div className="avatar">
                        <div className="rounded-full h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                      <li><a>Item 1</a></li>
                      <li><a>Item 2</a></li>
                    </ul>
                  </div>
                </div>
              </div>


            </div>
            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-4">
                {/* You can add more table here in the future */}
                <DevelopmentTable />
                <CheckTable />
                <FourColumnTable />
                <ComplexTable />
              </div>
            </div>
          </main>
          <Footer />
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <Sidebar />
        </div>
      </div>

      {/* <div className="flex min-h-screen w-full flex-col">
        <div className="flex flex-col sm:gap-4 sm:py-4">

          <main className="grid items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 bg-gray-700">

            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <div className="sm:col-span-2 md:col-span-2 bg-slate-200">
                  <p>title</p>
                </div>
                <div className="sm:col-span-2 md:col-span-2 bg-slate-200">
                  <p>title</p>
                </div>
              </div>
            </div>
            <div className="sm:col-span-2 bg-slate-200">
              <p>title</p>
            </div>
          </main>

        </div>
      </div> */}
    </>
  );
}
