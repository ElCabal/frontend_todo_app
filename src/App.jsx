import "./App.css";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Title from "./Components/Title";

function App() {
  return (
    <div className=" bg-slate-100 h-screen flex flex-col gap-5 items-center justify-between py-10">
      <Title />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
