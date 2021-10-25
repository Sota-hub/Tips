import { schema } from "./validation/Validation";

const createUser = async (event) => {
  event.preventDefault();
  let userData = {
    name: event.target[0].value,
    email: event.target[1].value,
    password: event.target[2].value,
  };

  const isValid = await schema.isValid(userData);

  if (isValid) {
    // Go to user page
  }

  if (!isValid) {
    // Render error message
  }
};

function App() {
  return (
    <div className="App">
      <form onSubmit={createUser}>
        <input type="text" placeholder="name..." />
        <input type="text" placeholder="email@email.com" />
        <input type="text" placeholder="password123..." />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
