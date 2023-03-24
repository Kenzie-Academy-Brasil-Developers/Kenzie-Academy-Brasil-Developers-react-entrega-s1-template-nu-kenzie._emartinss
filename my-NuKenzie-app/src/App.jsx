import "./reset.css";
import "./App.css";
import "../src/components/ListMoney/list.css";
import "../src/components/Form/form.css";
import "../src/components/Header/header.css";
import "../src/components/Form/form.css";
import { Header } from "./components/Header/header";
import { Form } from "./components/Form/form";
import { TotalMoney } from "./components/TotalMoney";
import { List } from "./components/ListMoney/list";
import { useState } from "react";


function App() {

  const [listTransactions, setListTransactions] = useState([])
  return (
    <div className="div-body">
      <Header />

      <main>
        <div className="container">
          <div className="subDiv-container">
            <Form listTransactions={listTransactions} setListTransactions={setListTransactions}/>

            <TotalMoney listTransactions={listTransactions}/>
          </div>
          <div className="div-financial-Summary">
            <List listTransactions={listTransactions} setListTransactions={setListTransactions} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
