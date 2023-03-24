import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export function Form({ listTransactions, setListTransactions }) {
  const [formData, setFormData] = useState({
    description: "",
    listMoney: "",
    type: "",
    
});

  const submit = (event) => {
    event.preventDefault();
    formData.id = uuidv4()
    formData.listMoney = Number(formData.listMoney)
    setListTransactions([...listTransactions, formData]);
    
  };
  
  console.log(listTransactions)

function validate(event){
  if(formData.type == 'Despesa'){

  }

}

  return (
    <>
      <div className="div-form">
        <form onSubmit={submit}>
          <p>Descrição</p>
            
          <input type="text" placeholder="Digite aqui sua descrição" value={formData.description} onChange={(event) => setFormData({...formData, description: event.target.value})} />

          <small>Ex: Compra de roupas</small>

          <label htmlFor="input-value">Valor R$</label>
          <input type="text" placeholder="1" id="input-value" value={formData.listMoney} onChange={(event) => setFormData({...formData, listMoney: event.target.value})}/>

          <label htmlFor="select">Tipo de valor</label>
          <select id="select" value={formData.type} onChange={(event) => setFormData({...formData, type: event.target.value})}>
            <option>Entrada</option>
            <option>Despesa</option>
          </select>

          <button type="submit">Inserir Valor</button>
        </form>
      </div>
    </>
  );
}
