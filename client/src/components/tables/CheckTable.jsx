"use client"

import { useEffect, useState } from "react";
import Delete from "../icons/Delete";

const CheckTable = ({ data, onDelete }) => {
  console.log(data)
  // console.log(data, "<<<<<<<< checktable")
  // const [randomValues, setRandomValues] = useState([]);
  // let [quantity, setQuantity] = useState(0)
  // let [percentage, setPercentage] = useState(0)

  // console.log(randomValues, "rando")

  // function randomQuantity() {
  //   return Math.round(Math.random() * (9000 - 500) + 500);
  // }

  // function randomPercentage() {
  //   return Math.round(Math.random() * (100 - 20) + 20);
  // }



  // useEffect(() => {
  //   setQuantity = randomQuantity()
  //   setPercentage = randomPercentage()
  //   // setRandomValues(newValues);
  // }, [data, quantity, percentage]);



  return (
    <>
      <div className="sm:col-span-2 md:col-span-2">
        <p className="text-xl font-bold">Check Table</p>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                </th>
                <th>Name</th>
                <th>Progress</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <tr key={item.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="font-bold">{item.name}</div>
                        <div className="text-sm opacity-50">{item.tech}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.percentage}%</td>
                  <td>{item.quantity}</td>
                  <td>{item.date}</td>
                  <th>
                    <button onClick={() => onDelete(item.id)} className="btn btn-ghost btn-xs"> <Delete /> </button>
                  </th>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default CheckTable