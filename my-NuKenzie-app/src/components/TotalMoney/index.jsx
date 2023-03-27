export function TotalMoney({listTransactions}){
   
    const totalMoney = listTransactions.reduce(
        (previousValue, totalValue)=>{
         return  totalValue.type === 'Despesa' ? previousValue - totalValue.listMoney
         : previousValue + totalValue.listMoney  
        
        
    },0)
      
    
    return (

        <div className="totalMoney">
            
            <div className="subDiv-totalMoney">
            <p>Valor Total:</p>
            <span>O valor se refere ao saldo</span>
            </div>
            
            <p>{`R$ ${totalMoney.toLocaleString("pt-BR")}.00`}</p>
        </div>
    )
}