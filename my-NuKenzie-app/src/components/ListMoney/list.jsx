import { v4 as uuidv4 } from "uuid";

export function List({ listTransactions, setListTransactions }) {
  console.log(setListTransactions);
  const removeCard = (cardId) => {
    const newCard = listTransactions.filter(
      (listTransactions) => listTransactions.id !== cardId
    );
    setListTransactions(newCard);
  };
  return (
    <>
      <div className="financial-summary">
        <p>Resumo financeiro</p>

        {listTransactions.length > 0 ? (
          <ul className="ul-list-cards">
            {listTransactions.map((prop) => {
              return (
                <li id={uuidv4()} key={uuidv4()}>
                  <p>{prop.description}</p>
                  <small>{prop.type}</small>
                  <span>{`R$${prop.listMoney.toLocaleString("pt-BR")}`}</span>
                  <button onClick={() => removeCard(prop.id)}>Excluir</button>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2>Você ainda não possui nenhum lançamento</h2>
        )}
      </div>
    </>
  );
}
