"use client";

import Delete from "../icons/Delete";

const DevelopmentTable = ({ data, onDelete }) => {
  function randomPercentage() {
    return Math.round(Math.random() * (100 - 20) + 20);
  }

  return (
    <>
      <div className="sm:col-span-2 md:col-span-2">
        <p className="text-xl font-bold">Development Table</p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Tech</th>
                <th>Date</th>
                <th>Progress</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item.id}>
                  <th>{item.name}</th>
                  <td>{item.tech}</td>
                  <td>{item.date}</td>
                  {/* <td>{randomPercentage()}</td> */}
                  <td>
                    <progress
                      className="progress progress-primary w-20"
                      value={randomPercentage()}
                      max="100"
                    ></progress>
                  </td>
                  <td>
                    <button
                      onClick={() => onDelete(item.id)}
                      className="btn btn-error text-white"
                    >
                      <Delete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DevelopmentTable;
