import React, { useEffect, useState, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editContact } from "../Redux/action";

interface ContactFormState {
  first_name: string;
  last_name: string;
  mob: string;
  status: string;
}

function EditContact() {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const allContacts = useSelector((store: any) => store.contacts);
  const [form, setForm] = useState<ContactFormState>({
    first_name: "",
    last_name: "",
    mob: "",
    status: "active",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  function handleSave() {
    dispatch(editContact({ id, ...form }));
  }

  useEffect(() => {
    allContacts.forEach((el: any) => {
      if (el.id === id) {
        setForm(el);
      }
    });
  }, [id, allContacts]);

  return (
    <div className="w-full max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Contact</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="first-name"
        >
          First Name
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          id="first-name"
          type="text"
          name="first_name"
          value={form.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="last-name"
        >
          Last Name
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          id="last-name"
          type="text"
          name="last_name"
          value={form.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2" htmlFor="mob">
          Mobile Number
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          id="mob"
          type="tel"
          name="mob"
          placeholder="e.g., 123-456-7890"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={form.mob}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-semibold mb-2"
          htmlFor="status"
        >
          Status
        </label>
        <select
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          id="status"
          name="status"
          value={form.status}
          onChange={handleChange}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handleSave}
        >
          Save Contact
        </button>
      </div>
    </div>
  );
}

export default EditContact;
