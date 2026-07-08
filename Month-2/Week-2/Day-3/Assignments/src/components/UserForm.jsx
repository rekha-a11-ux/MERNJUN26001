import { useEffect, useState } from "react";
import "./UserForm.css";

function UserForm() {
  const initialData = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [users, setUsers] = useState([]);

  // Load data from Local Storage
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const updatedUsers = [...users, formData];

    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    alert("Registration Successful!");

    setFormData(initialData);
  };

  // Reset Form
  const handleReset = () => {
    setFormData(initialData);
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>User Registration</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            placeholder="Enter Phone Number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="btn-group">
            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>

      <div className="table-box">
        <h2>Registered Users</h2>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="3">No Data Found</td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserForm;