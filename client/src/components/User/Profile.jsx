export default function Profile({ user }) {
  if (!user) {
    return <div>Loading...</div>;
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
