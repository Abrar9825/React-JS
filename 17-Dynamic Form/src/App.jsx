import FormComponent from "./Component/form/index";
import LoginComponent from "./Component/login";
import RegisterComponent from "./Component/register";

function App() {
  return (
    // <FormComponent />
    <div style={{ display:"flex", gap: " 20px " }}>
      <LoginComponent />
      <RegisterComponent />
    </div>
  )
}

export default App;
