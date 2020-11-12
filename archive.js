const axios = require('axios');

const process = async (client, ServerID, DroleID, IroleID, BotID, CRIPTO_REF) => {

	  let date = new Date();
    let day = date.getDate()
    let dayPrevious = date.getDate() - 1
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    const guildBot = await client.guilds.fetch(ServerID);
    const botMember = await guildBot.members.fetch(BotID);

    const roleRATEDECREASE = guildBot.roles.cache.find((role) => role.id === DroleID)
    const roleRATEINCREASE = guildBot.roles.cache.find((role) => role.id === IroleID)
    
    CurrentDate = `${year}-${month}-${day}`;

    axios.get(`https://dev.chicksgold.com/CoinbasePrice?currencyPair=${CRIPTO_REF}`)
              .then(
              res => {
                let amount = res.data.data.amount;

                PreviousDay = `${year}-${month}-${dayPrevious}`; 
                  
                console.log("Ultima Actualizacion del Dia de Hoy: ", amount)

                axios.get(`https://dev.chicksgold.com/CoinbasePrice?currencyPair=${CRIPTO_REF}&date=${PreviousDay}`)
                .then(res1 => {

                  let amount1 = res1.data.data.amount;

                  let porcentage = ((amount-amount1)*100/amount).toFixed(2); 

                  console.log("Promedio del Dia de Ayer: ", amount1)

                  console.log("Porcentage Nuevo: ", porcentage)                  
                               
                  if(amount > amount1){
                    if(porcentage < 0)
                    porcentage = porcentage*(-1);
                    botMember.setNickname(`$${amount}`+` ↑ `+`${porcentage}%`)
                    botMember.roles.remove(roleRATEDECREASE);
                    botMember.roles.add(roleRATEINCREASE);
                    
                  }else if(amount < amount1){
                    if(porcentage < 0)
                    porcentage = porcentage*(-1);
                    botMember.setNickname(`$${amount}`+` ↓ `+`${porcentage}%`)
                    botMember.roles.add(roleRATEDECREASE);
                    botMember.roles.remove(roleRATEINCREASE);
                  }else{
                    console.log("todo ok")
                  }                                  
                })
                .catch(e =>{
                  console.log(e)
                });                                                                      
             })
              .catch(e => {
                console.log(e)
              });

}

module.exports = {
    "process": process
}