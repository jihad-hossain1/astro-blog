import { useState } from "react";

const Showcase = () => {
  const handlechange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    console.log(formData);
  };

  const scafold = {
    name: "",
    email: "",
    phone: "",
    details: "",
  };

  const [formData, setFormdata] = useState(scafold);
  return (
    <div className="mx-auto max-w-md">
      <h4 className="py-4">form Hnadler</h4>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label htmlFor="">name</label>
        <input
          className="cinpt"
          type="text"
          name="name"
          defaultValue={formData.name}
          onChange={handlechange}
        />
        <label htmlFor="">email</label>
        <input
          className="cinpt"
          type="text"
          name="email"
          defaultValue={formData.email}
          onChange={handlechange}
        />
        <label htmlFor="">phone</label>
        <input
          className="cinpt"
          type="text"
          name="phone"
          defaultValue={formData.phone}
          onChange={handlechange}
        />
        <label htmlFor="">details</label>
        <textarea
          className="cinpt"
          type="text"
          name="details"
          defaultValue={formData.details}
          onChange={handlechange}
        />
        <div>
          <button className="p-3 border w-fit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Showcase;
