import React, { useState } from "react";
import Card from "./components/Card";
import EditModal from "./modal/Editmodal";
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState();

  const [editingUser, setEditingUser] = useState(null);

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleSave = (updatedUser) => {
    setUsers((prev) =>
      prev.map((u) => (u.email === updatedUser.email ? { ...updatedUser } : u))
    );
  };
  const fetchUser = async () => {
    const response = await axios.get(
      "https://card-mern-stack.onrender.com/api/v1/get"
    );
    console.log(response);
    setUsers(response.data.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div className="min-h-screen bg-pink-50 flex flex-col md:flex-row gap-6 items-center justify-center p-6">
      {users?.map((user, index) => (
        <Card key={index} user={user} onEditClick={handleEditClick} />
      ))}

      {editingUser && (
        <EditModal
          user={editingUser}
          onClose={() => setEditingUser(null)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

export default App;
