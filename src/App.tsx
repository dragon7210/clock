import Clock from "./clock";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-black h-[100vh] pt-[150px]">
      <Clock />
      <ToastContainer />
    </div>
  );
}

export default App;
