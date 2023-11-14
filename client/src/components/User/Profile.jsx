import useFetch from "../../hooks/useFetch";

export default function Profile() {
  const {
    data: user,
    error,
    isLoading,
  } = useFetch("http://localhost:5000/user");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}