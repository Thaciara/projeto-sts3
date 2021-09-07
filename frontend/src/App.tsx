import NavBar from "components/NavBar";
import footer from "components/footer";
import DataTable from "components/DataTable";

function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary">Olá Mundo!!</h1>
      <DataTable />
    </div>
    <footer />
    </>
  );
}

export default App;