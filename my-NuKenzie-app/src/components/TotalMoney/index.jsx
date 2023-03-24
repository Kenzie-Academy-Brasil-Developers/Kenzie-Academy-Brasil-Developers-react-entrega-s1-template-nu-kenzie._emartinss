export function TotalMoney({listTransactions}){
    
    // const totalMoney = listTransactions.reduce(
    //     (previousValue, totalValue) =>
        
    //       previousValue + totalValue.listMoney,
    //       0,
          
    //   );
    
    const totalMoney = listTransactions.reduce(
        (previousValue, totalValue)=>{
            if(totalValue.type === 'Despesa'){
               return totalValue.listMoney = -(totalValue.listMoney)
            }
            
            else{
                return totalValue.listMoney = (totalValue.listMoney)
            }
         
            return previousValue + totalValue
        
    },0)
      
    console.log(totalMoney)
    return (

        <div className="totalMoney">
            
            <div className="subDiv-totalMoney">
            <p>Valor Total:</p>
            <span>O valor se refere ao saldo</span>
            </div>
            
            <p>{`${totalMoney},00`}</p>
        </div>
    )
}