"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/Navigation"
import Sidebar from "@/components/Sidebar"
import CheckTable from "@/components/tables/CheckTable"
import DevelopmentTable from "@/components/tables/DevelopmentTable"
import FourColumnTable from "@/components/tables/FourColumnTable"
import ComplexTable from "@/components/tables/ComplexTable"
import Search from "@/components/icons/Search"

const seed = [
  { id: 1, name: "Marketplace", tech: "Apple", date: "12.Jan.2021" },
  { id: 2, name: "Venus DB PRO", tech: "Android", date: "21.Feb.2021" },
  { id: 3, name: "Venus DS", tech: "Android", date: "13.Mar.2021" },
  { id: 4, name: "Venus 3D Asset", tech: "Microsoft", date: "24.Jan.2021" },
  { id: 5, name: "Marketplace", tech: "Android", date: "24.Jan.2021" },
  { id: 6, name: "Marketplace", tech: "Microsoft", date: "21.Feb.2021" },
  { id: 7, name: "Marketplace", tech: "Apple", date: "Oct.24.2022" },
  { id: 8, name: "Marketplace", tech: "Android", date: "21.Feb.2021" },
  { id: 9, name: "Venus DB PRO", tech: "Apple", date: "21.Feb.2021" },
  { id: 10, name: "Venus DS", tech: "Apple", date: "21.Feb.2021" },
  { id: 11, name: "Venus 3D Asset", tech: "Android", date: "24.Jan.2021" },
];

const Test = () => {
  //data filled with seed
  const [data, setData] = useState(seed);
  const [processedData, setProcessedData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  const deleteData = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    // update to new data
    setData(updatedData);
    console.log("Delete item with id:", id);
  };

  const addDummyData = () => {
    const newData = {
      id: data.length + 1, // increment id
      name: `Project Dummy`,
      tech: "Android",
      date: new Date().toLocaleDateString(),
    };

    setData([...data, newData]);
  };

  // to counter hydration issue

  useEffect(() => {
    const generateRandomValues = (data) => {
      return data.map(item => ({
        ...item, //spread operator
        quantity: Math.round(Math.random() * (9000 - 500) + 500),
        percentage: Math.round(Math.random() * (100 - 20) + 20),
      }));
    };

    setProcessedData(generateRandomValues(data));
  }, [data]);

  useEffect(() => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    // filter by name
    const filtered = processedData.filter(item =>
      item.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredData(filtered);
  }, [searchQuery, processedData]);

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}

          <section className=" w-full">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
              <div className="max-w-5xl mx-auto mt-12 sm:mt-16">
                <div className="w-full">
                  <div className="card glass rounded-md z-10 overflow-hidden fixed p-4">
                    <div className="lg:flex md:flex gap-4 lg:gap-96 md:gap-52 items-center block">
                      <div>
                        <div className="breadcrumbs max-w-xs text-sm">
                          <ul>
                            <li>Pages</li>
                            <li>Data Tables</li>
                          </ul>
                        </div>
                        <p className="text-3xl font-extrabold">Data Tables</p>
                      </div>

                      <div className="flex items-center gap-2">

                        <label className="input input-bordered flex items-center gap-2 w-60 md:w-48 lg:w-64">
                          <input
                            type="text"
                            className="grow"
                            placeholder="Search"
                            onChange={(e) => setSearchQuery(e.target.value)}
                          />
                          <Search />
                        </label>
                        <button
                          className="btn btn-primary"
                          onClick={addDummyData}
                        >
                          +
                        </button>
                        <Navigation />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-2 pt-36">
                  <div className="overflow-hidden shadow-lg rounded-xl p-8">
                    <DevelopmentTable data={filteredData} onDelete={deleteData} />
                  </div>

                  <div className="overflow-hidden shadow-lg rounded-xl p-8">
                    <CheckTable data={filteredData} onDelete={deleteData} />
                  </div>

                  <div className="overflow-hidden shadow-lg rounded-xl p-8">
                    {/* <DevelopmentTable /> */}
                    <FourColumnTable data={filteredData} />
                  </div>

                  <div className="overflow-hidden shadow-lg rounded-xl p-8">
                    <ComplexTable data={filteredData} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="drawer-side z-20 w-1/3">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Test