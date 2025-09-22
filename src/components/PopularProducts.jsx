import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa"; // Importing icons
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { useFirebaseAuth } from "../Providers/AuthProvider";
import { handleDelete } from "../utils/delete";

const PopularProducts = () => {

  const {user} = useFirebaseAuth();
  const loadCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(Array.isArray(loadCoffees) ? loadCoffees.slice(-4) : []);  // Ensure coffees is always an array
  const [loading, setLoading] = useState(true);  // Loading state to handle async data

  // Handlers for actions
   

  const handleEdit = (id) => {
    console.log(`Edit coffee with id: ${id}`);
    // Add edit logic here
  };

  
  const handleDeleteCoffee = (id) => {
    handleDelete(id);
    const remainingCoffee = coffees.filter(coffee => coffee._id !== id);
    setCoffees(remainingCoffee); 
  };

  const handleView = (id) => {
    console.log(`View details of coffee with id: ${id}`);
    // Add view logic here
  };

  const handleAddCoffee = () => {
    console.log("Add new coffee");
    // Add logic to handle adding new coffee
  };

  useEffect(() => {
    // Simulate loading delay, if you're fetching data, you can replace this with your fetch logic
    if (Array.isArray(loadCoffees)) {
      setLoading(false); // Stop loading when data is ready
    }
  }, [loadCoffees]);

  // Loading state or empty array protection
  if (loading) {
    return <div className="flex min-h-96 justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>; // Show loading spinner or message
  }

  return (
    <div className="text-[#331A15] min-h-screen flex flex-col items-center w-10/12 mx-auto">
      <h1 className="text-5xl font-extrabold my-10 p-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
        Our Popular Coffee
      </h1>
      <Link
        to="add-coffee"
        className="mb-6 bg-gradient-to-r from-[#8B5E3C] to-[#D2B48C] text-white py-2 px-6 rounded-md shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
        onClick={handleAddCoffee}
      >
        Add Coffee
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coffees?.map((coffee) => (
          <div
            className="bg-[#F5F4F1] shadow-lg rounded-lg p-6 flex flex-col md:flex-row gap-4 hover:shadow-2xl hover:scale-y-105 transition-all duration-300"
            key={coffee._id}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/3">
              <img
                src={coffee.photo}
                alt={coffee.name}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>

            {/* Info Section */}
            <div className="flex flex-col justify-between w-full md:w-2/3 font_2">
              <div>
                <h2 className="text-3xl font-semibold text-[#331A15] font_1">
                  {coffee.name}
                </h2>
                <p className="text-sm text-[#331A15] mt-2 ">
                  {coffee.details || "No details available."}
                </p>
                <p className="text-sm text-gray-800 mt-1">
                  <strong>Chef:</strong> {coffee.chef || "Unknown"}
                </p>
                <p className="text-sm text-gray-800 mt-1">
                  <strong>Supplier:</strong> {coffee.supplier || "Unknown"}
                </p>
              </div>
            </div>

            {/* Action Buttons Section */}
            <div className="flex flex-row gap-4 sm:gap-0 sm:flex sm:flex-col items-center justify-center w-full md:w-auto sm:space-y-4">
              <Link to={`/coffee-details/${coffee._id}`}>
                <FaEye
                  className="text-[#331A15] hover:text-blue-500 cursor-pointer text-xl transition-transform transform hover:scale-110"
                  onClick={() => handleView(coffee._id)}
                />
              </Link>

            {
              user &&   <Link to={`/update-coffee/${coffee._id}`}>
              <FaEdit
                className="text-[#331A15] hover:text-[#8B5E3C] cursor-pointer text-xl transition-transform transform hover:scale-110"
                onClick={() => handleEdit(coffee._id)}
              />
            </Link>
            }

             {
              user &&  <FaTrashAlt
              className="text-[#331A15] hover:text-red-600 cursor-pointer text-xl transition-transform transform hover:scale-110"
              onClick={() => handleDeleteCoffee(coffee._id)}
            />
             }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
