const Nevigation = () => {
  return (
    <div>
      <h1>Hello, Nevigation!</h1>

      const [users, setUsers] = useState([]);

useEffect(() => {
  const fetchUsers = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/admin/users", {
        headers: {
          Authorization: `Bearer ${token}`, // Attach token in the request headers
        },
      });

      if (!response.ok) {
        throw new Error("Unauthorized or other error");
      }

      const data = await response.json();
      if (data.status) {
        setUsers(data.data); // Set user data to state
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  fetchUsers();
}, []);

      {/* const navigate = useNavigate();

const navigateToLogin = () => {
  navigate("/login"); // Navigate to the login page
};

<button
  onClick={navigateToLogin}
  style={{
    marginLeft: "16px",
    color: "white",
    background: "transparent",
    border: "none",
  }}
>
  Login
</button>;  */}
    </div>
  );
};

export default Nevigation;
