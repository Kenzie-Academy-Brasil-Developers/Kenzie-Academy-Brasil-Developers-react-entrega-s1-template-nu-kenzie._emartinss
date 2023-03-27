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
    formData.id = uuidv4();
    formData.listMoney = Number(formData.listMoney);
    setListTransactions([...listTransactions, formData]);
    
    setFormData({
      description: "",
      listMoney: "",
      type: "",
    });
  };
  const isEmpty = formData.description === "" || formData.listMoney === "" || formData.type === "" || formData.type === 'Selecionar';
  return (
    <>
      <div className="div-form">
        <form onSubmit={submit} >
          <p>Descrição</p>

          <input
            type="text"
            placeholder="Digite aqui sua descrição"
            value={formData.description}
            onChange={(event) => setFormData({ ...formData, description: event.target.value })}
            required
          />

          <small>Ex: Compra de roupas</small>

          <label htmlFor="input-value">Valor R$</label>
          <input
            type="number"
            placeholder="1"
            id="input-value"
            value={formData.listMoney}
            onChange={(event) => setFormData({ ...formData, listMoney: event.target.value })}
            required
          />

          <label htmlFor="select">Tipo de valor</label>
          <select id="select" value={formData.type} onChange={(event) => setFormData({ ...formData, type: event.target.value })} required>
           <option>Selecionar</option>
            <option>Entrada</option>
            <option>Despesa</option>
          </select>

          <button type="submit" disabled={isEmpty ? true : false}>Inserir Valor</button>
        </form>
      </div>
    </>
  );
}
