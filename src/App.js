import "./styles.css";
import Publisher from "./components/Publisher";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Publisher.Filelist />
    </div>
  );
}
