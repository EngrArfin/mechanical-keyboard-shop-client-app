import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

// Define Types
type UpazilaMap = {
  [upozila: string]: string[];
};

type DistrictMap = {
  [district: string]: string[];
};

type DivisionMap = {
  [division: string]: {
    districts: DistrictMap;
  };
};

const divisions: DivisionMap = {
  Dhaka: {
    districts: {
      "Dhaka District": [
        "Dhamrai",
        "Dohar",
        "Keraniganj",
        "Nawabganj",
        "Savar",
      ],
      Gazipur: ["Gazipur Sadar", "Kaliakair", "Kaliganj", "Kapasia", "Sreepur"],
    },
  },
  Chittagong: {
    districts: {
      "Chittagong District": [
        "Anwara",
        "Banshkhali",
        "Boalkhali",
        "Chandanaish",
        "Fatikchhari",
      ],
      "Cox's Bazar": [
        "Chakaria",
        "Cox's Bazar Sadar",
        "Kutubdia",
        "Maheshkhali",
        "Pekua",
        "Ramu",
      ],
    },
  },
};

const ShippingAddress = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [address, setAddress] = useState({
    name: "Arfin",
    phone: ["8801952487468"], // Ensure phone is always an array
    division: "Dhaka",
    district: "Dhaka District",
    upozila: "Savar",
    area: "Ashulia Union, Savar, Dhaka",
  });
  const [editAddress, setEditAddress] = useState({ ...address });

  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  const handleDivisionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDivision = e.target.value as keyof DivisionMap; // Type assertion for dynamic key access
    const firstDistrict = Object.keys(
      divisions[newDivision].districts
    )[0] as keyof DistrictMap;
    setEditAddress({
      ...editAddress,
      division: newDivision,
      district: firstDistrict,
      upozila: divisions[newDivision].districts[firstDistrict][0],
    });
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDistrict = e.target.value as keyof DistrictMap; // Type assertion for dynamic key access
    const firstUpozila =
      divisions[editAddress.division as keyof DivisionMap].districts[
        newDistrict
      ][0];
    setEditAddress({
      ...editAddress,
      district: newDistrict,
      upozila: firstUpozila,
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setAddress(editAddress);
    handleModalToggle();
  };

  return (
    <div className="p-6 text-white bg-gradient-to-r from-purple-900 via-teal-900 to-purple-900 shadow-lg relative">
      <hr />
      <div className="flex justify-end">
        <button
          onClick={handleModalToggle}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
      </div>
      <h2 className="text-xl font-bold justify-center items-center">
        Shipping Address
      </h2>
      <div className="space-y-2">
        <p>
          <strong>Name:</strong> {address.name}
        </p>
        <p>
          <strong>Phone:</strong> {address.phone.join(", ")}
        </p>
        <p>
          <strong>Division:</strong> {address.division}
        </p>
        <p>
          <strong>District:</strong> {address.district}
        </p>
        <p>
          <strong>Upazila:</strong> {address.upozila}
        </p>
        <p>
          <strong>Area:</strong> {address.area}
        </p>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalToggle}
        contentLabel="Edit Address"
        className="fixed inset-0 flex items-start justify-center p-4 bg-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <div>
          <h2 className="text-xl font-bold mb-4">Edit Address</h2>
          <form>
            <div className="mb-4">
              <label className="block font-semibold">Name:</label>
              <input
                type="text"
                name="name"
                value={editAddress.name}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Phone:</label>
              <input
                type="text"
                name="phone"
                value={editAddress.phone.join(", ")} // Join phone array for display
                onChange={(e) => {
                  const phones = e.target.value
                    .split(",")
                    .map((num) => num.trim());
                  setEditAddress((prev) => ({ ...prev, phone: phones }));
                }}
                className="mt-1 p-2 w-full border rounded"
                placeholder="Enter phone numbers separated by commas"
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Division:</label>
              <select
                name="division"
                value={editAddress.division}
                onChange={handleDivisionChange}
                className="mt-1 p-2 w-full border rounded"
              >
                {Object.keys(divisions).map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold">District:</label>
              <select
                name="district"
                value={editAddress.district}
                onChange={handleDistrictChange}
                className="mt-1 p-2 w-full border rounded"
              >
                {Object.keys(
                  divisions[editAddress.division as keyof DivisionMap].districts
                ).map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Upazila:</label>
              <select
                name="upozila"
                value={editAddress.upozila}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded"
              >
                {divisions[editAddress.division as keyof DivisionMap].districts[
                  editAddress.district as keyof DistrictMap
                ].map((upozila) => (
                  <option key={upozila} value={upozila}>
                    {upozila}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-semibold">Area:</label>
              <input
                type="text"
                name="area"
                value={editAddress.area}
                onChange={handleInputChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={handleSave}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
              <button
                type="button"
                onClick={handleModalToggle}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ShippingAddress;
