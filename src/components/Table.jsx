import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBooking } from "../redux/actions";

const Table = () => {
  const data = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBooking(id));
  };

  return (
    <>
      {data && data.length > 0 && (
        <div className=" max-w-6xl mx-auto mt-5 bg-white">
          <div className="overflow-x-auto">
            <div className="flex justify-between">
              <th>DESTINATION FROM</th>
              <th>DESTINATION TO</th>
              <th>JOURNEY DATE</th>
              <th>GUESTS</th>
              <th>CLASSNAME</th>
              <th>DELETE</th>
            </div>

            {data.map((booking) => (
              <div key={booking.id} className="flex justify-between pt-4">
                <th>{booking.from}</th>
                <th className="pl-12">{booking.to}</th>
                <th className="pl-8">{booking.date}</th>
                <th>{booking.guests}</th>
                <th>{booking.ticketclassName}</th>
                <th><button className="btn-xs  text-white"
                  onClick={() => handleDelete(booking.id)}>
                  ❌
                </button></th>
              </div>
            ))}

          </div>
        </div>
      )}
    </>
  );
};

export default Table;
