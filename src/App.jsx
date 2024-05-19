import { useState } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const handleSubmit = (event) => {
    event.prevententDefault();
    let user = {
      name: event.target[0].value,
      age: event.target[1].value,
      phone: event.target[2].value,
      address: event.target[3].value,
    };
    users.push(user);
    setUsers([...users]);
    event.target[0].value;
    event.target[1].value;
    event.target[2].value;
    event.target[3].value;
    users.push({ name, age, phone, address });
    setUsers([...users]);
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-8">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <td>T/R</td>
                  <td>Name</td>
                  <td>Age</td>
                  <td>Number</td>
                  <td>Address</td>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.age}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3 className="card-body">Add user</h3>
              </div>
              <div className="card-body">
                <form onSubmit={handleSubmit} id="todo">
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="form-control my-2"
                  />
                  <input
                    type="number"
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                    className="form-control my-2"
                  />
                  <input
                    type="tel"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone"
                    className="form-control my-2"
                  />
                  <input
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    className="form-control my-2"
                  />
                </form>
              </div>
              <div className="card-footer">
                <button type="submit" className="btn btn-primary" form="todo">
                  add user
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
