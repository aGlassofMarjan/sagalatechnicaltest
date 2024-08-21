import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <div className="flex">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
              Open drawer
            </label>
            <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4 md:grid-rows-4">
              <div className="md:col-span-4 flex justify-between items-center">
                <div className="bg-gray-300 h-16 ">
                  <p className="font-bold">Frontend Masters Bootcamp</p>
                </div>
                <div className="bg-gray-300 h-16">
                  <p>Logo</p>
                </div>
              </div>

              <div className="h-32 md:col-span-2">
                <div className="overflow-x-auto">

                </div>
              </div>
              <div className="h-32 md:col-span-2">
                <div className="overflow-x-auto">

                </div>
              </div>

              <div className="h-32 md:col-span-2"></div>
              <div className="h-32 md:col-span-2"></div>
            </div>

          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>
            </ul>
          </div>
        </div>

      </div> */}

      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <main className="grid items-center gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-2 xl:grid-cols-2">

            <div className="grid auto-rows-max items-start gap-4 lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                <div className="sm:col-span-2 md:col-span-2">
                  <p>Table 1</p>
                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Job</th>
                          <th>Favorite Color</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>1</th>
                          <td>Cy Ganderton</td>
                          <td>Quality Control Specialist</td>
                          <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th>2</th>
                          <td>Hart Hagerty</td>
                          <td>Desktop Support Technician</td>
                          <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <th>3</th>
                          <td>Brice Swyre</td>
                          <td>Tax Accountant</td>
                          <td>Red</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="sm:col-span-2 md:col-span-2">
                  <p>Table 2</p>
                  <div className="overflow-x-auto">
                    <table className="table">
                      {/* head */}
                      <thead>
                        <tr>
                          <th></th>
                          <th>Name</th>
                          <th>Job</th>
                          <th>Favorite Color</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* row 1 */}
                        <tr>
                          <th>1</th>
                          <td>Cy Ganderton</td>
                          <td>Quality Control Specialist</td>
                          <td>Blue</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                          <th>2</th>
                          <td>Hart Hagerty</td>
                          <td>Desktop Support Technician</td>
                          <td>Purple</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                          <th>3</th>
                          <td>Brice Swyre</td>
                          <td>Tax Accountant</td>
                          <td>Red</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* Dashboard Cards */}
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-18176s2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
            </div>
            <div className="sm:col-span-2 bg-slate-200">
              <p>title</p>
            </div>
          </main>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
            Open drawer

          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <p className="text-2xl"> <span className="uppercase font-extrabold">Horizon</span> Free</p>

            <div className="divider"></div>
            <li>
              <a>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-18176s2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></svg>
                <p>Main Dashboard</p>
              </a>
            </li>
            <li>
              <a>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-18176s2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 0 0020.01 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
                <p>NFT Marketplace</p>
              </a>
            </li>
            <li>
              <a>
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-18176s2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 9h4v11H4zM16 13h4v7h-4zM10 4h4v16h-4z"></path></svg>
                <p>Data Tables</p>
              </a>
            </li>
          </ul>
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
