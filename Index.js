const Discord = require('discord.js-selfbot');
  const client = new Discord.Client();

  client.on('ready', async () => {
    console.log(Logged in as ${client.user.tag}!);
    client.guilds.cache.forEach(guild => {
      if (guild.id ==='920296413240385556') {
        guild.channels.cache.get('922586367958077530').send('hi',);
    
        setInterval(() => {
          const spam = Math.random().toString(36).replace(/[^a-z]+/g,'sad of weaea majs').substr(0,115);        
 guild.channels.cache.get('922586367958077530').send(spam)
      }, 10000)
        setInterval(() => {
        client.channels.cache.get('920296414796472389').join()
          }, 1000)
      
      }
}) 
    
});
  client.login("NzMxNTE0NDQyODEwMTMwNTQy.YbxFcg.wRmHD2Eaj4RXIVeXvqYDZrwRh5I")
