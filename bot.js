const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "*";


client.on('message', message => { // اقتراح
    if (message.content.startsWith(prefix + 'sug')) {
        if (message.author.bot) return
        if (!message.guild) return message.reply('**:x: This Commands Just In Server**').then(v => {v.react('❌')})
        var args =  message.content.split(' ').slice(1).join(' ')
        if (!args) return message.reply('Type You Suggestion').then(c => {c.delete(5000)})
        let Room = message.guild.channels.find(686757669809291409)
        if (!Room) return message.channel.send("Can't find suggestions channel.").then(d => d.react('❌'))
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setAuthor(`Vote on ${message.author.username}'s suggestion`, message.author.avatarURL)
        .addField('**Suggestion**',`${args}`)
        .setThumbnail(message.author.avatarURL)
        .setFooter(`ID: ${message.author.id}`)
        Room.sendEmbed(embed).then(c => {
            c.react('✅').then(() => 
                c.react('❌'))

        }).catch(e => console.error(e)
        )
    }
});
client.on('message', function(msg) {

  if(msg.content.startsWith (prefix  + 'server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`Showing Details Of  **${msg.guild.name}*`)
    .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
    .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
    .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
    .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
    .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});
client.on("message", message => { // تقديم اداره
  if(message.content.startsWith(prefix + "admin")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find(686757653036138702)
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقي  ✍**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **كم عمرك؟ 🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **كم ساعه تكون متفاعل بالسيرفر؟ 🕒**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **ما هي خبراتك 💻 **' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                        .addField('**` ✍ الاسم`**', `${name}` , true)
                        .addField('**` 🎓 العمر`**', `${age}` , true)
                        .addField('**` 🕒 ساعات تفاعله`**',`${ask}`)
                        .addField('**` 📑 هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**` 💻 خبراتة`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
client.on("message", message => {
  if(message.content.startsWith(prefix + "police")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find(686757675547099139)
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقي  ✍**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **كم عمرك؟ 🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **كم ساعه تكون متفاعل بالسيرفر؟ 🕒**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **ما هي خبراتك 💻 **' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم شرطة** [__**${message.guild.name}**__]`)
                        .addField('**` ✍ الاسم`**', `${name}` , true)
                        .addField('**` 🎓 العمر`**', `${age}` , true)
                        .addField('**` 🕒 ساعات تفاعله`**',`${ask}`)
                        .addField('**` 📑 هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**` 💻 خبراتة`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
client.on("message", message => { // تقديم اداره
  if(message.content.startsWith(prefix + "medic")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find(686757698598993920)
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقي  ✍**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **كم عمرك؟ 🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **كم ساعه تكون متفاعل بالسيرفر؟ 🕒**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **ما هي خبراتك 💻 **' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم إسعاف** [__**${message.guild.name}**__]`)
                        .addField('**` ✍ الاسم`**', `${name}` , true)
                        .addField('**` 🎓 العمر`**', `${age}` , true)
                        .addField('**` 🕒 ساعات تفاعله`**',`${ask}`)
                        .addField('**` 📑 هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**` 💻 خبراتة`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}
client.on("message", message => { // تقديم اداره
  if(message.content.startsWith(prefix + "ss")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find(686757680806887445)
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقي  ✍**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **كم عمرك؟ 🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **كم ساعه تكون متفاعل بالسيرفر؟ 🕒**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **ما هي خبراتك 💻 **' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم امن دولة** [__**${message.guild.name}**__]`)
                        .addField('**` ✍ الاسم`**', `${name}` , true)
                        .addField('**` 🎓 العمر`**', `${age}` , true)
                        .addField('**` 🕒 ساعات تفاعله`**',`${ask}`)
                        .addField('**` 📑 هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**` 💻 خبراتة`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}


client.on("message", message => { // تقديم اداره
  if(message.content.startsWith(prefix + "justice")) {
        if(!message.channel.guild) return;
                if(message.author.bot) return;
        let channel = message.guild.channels.find(693092728195645442)
            if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
            if(channel) {
            message.channel.send( message.member + ', **:timer:**').then( (m) =>{
              m.edit( message.member + ', **اسمك الحقيقي  ✍**' )
              m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                  m1 = m1.first();
                  var name = m1.content;
                  m1.delete();
                  m.edit(message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **كم عمرك؟ 🎓**' )
                      setTimeout(() => {
                        m.delete()
                      }, 10000);
                      m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                          m2 = m2.first();
                          var age = m2.content;
                          m2.delete()
                          message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                            m.edit( message.member + ', **كم ساعه تكون متفاعل بالسيرفر؟ 🕒**' )
                            setTimeout(() => {
                              m.delete()
                            }, 10000);
                            m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                m3 = m3.first();
                                var ask = m3.content;
                                m3.delete();
                                message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                  m.edit( message.member + ', **هل ستحترم القوانين ؟ 📑**' )
                                  setTimeout(() => {
                                    m.delete()
                                  }, 10000);
                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                      m4 = m4.first();
                                      var ask2 = m4.content;
                                      m4.delete();
                                      message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                        m.edit( message.member + ', **ما هي خبراتك 💻 **' )
                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                            m5 = m5.first();
                                            var ask3 = m5.content;
                                            m5.delete();
                      m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                        setTimeout(() => {
                          let embed = new Discord.RichEmbed()
                        .setColor('RANDOM')
                        .setTitle(`**تقديم وزارة العدل** [__**${message.guild.name}**__]`)
                        .addField('**` ✍ الاسم`**', `${name}` , true)
                        .addField('**` 🎓 العمر`**', `${age}` , true)
                        .addField('**` 🕒 ساعات تفاعله`**',`${ask}`)
                        .addField('**` 📑 هل سيحترم القوانين ؟`**',`${ask2}`)
                        .addField('**` 💻 خبراتة`**',`${ask3}`)
                        .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                        channel.send(embed)
                        }, 2500);
                        setTimeout(() => {
                          mtime.delete()
                        }, 3000);

                  })
                })
                })
              })
            })
          })
        })
        })
              })
          })
        })
    }
}


        });
        client.on("message", message => { // تقديم اداره
          if(message.content.startsWith(prefix + "gangs")) {
                if(!message.channel.guild) return;
                        if(message.author.bot) return;
                let channel = message.guild.channels.find(686757704919810048)
                    if(!channel) return message.reply("**لانشاء روم التقديمات !!setsubmissions من فضلك اكتب الامر**")
                    if(channel) {
                    message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                      m.edit( message.member + ', **اسم العصابة  ✍**' )
                      m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m1) => {
                          m1 = m1.first();
                          var name = m1.content;
                          m1.delete();
                          m.edit(message.member + ', **:timer:**').then( (m) =>{
                              m.edit( message.member + ', **رئيس العصابة 👑**' )
                              setTimeout(() => {
                                m.delete()
                              }, 10000);
                              m.channel.awaitMessages( m2 => m2.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m2) => {
                                  m2 = m2.first();
                                  var age = m2.content;
                                  m2.delete()
                                  message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                    m.edit( message.member + ', **نائب رئيس العصابة ⭐**' )
                                    setTimeout(() => {
                                      m.delete()
                                    }, 10000);
                                    m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m3) => {
                                        m3 = m3.first();
                                        var ask = m3.content;
                                        m3.delete();
                                        message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                          m.edit( message.member + ', **أعضاء العصابة 💀**' )
                                          setTimeout(() => {
                                            m.delete()
                                          }, 10000);
                                          m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m4) => {
                                              m4 = m4.first();
                                              var ask2 = m4.content;
                                              m4.delete();
                                              message.channel.send( message.member + ', **:timer:**').then( (m) =>{
                                                m.edit( message.member + ', **اكتب نقطه ... **' )
                                                m.channel.awaitMessages( m1 => m1.author == message.author,{ maxMatches: 1, time: 60*1000 } ).then ( (m5) => {
                                                    m5 = m5.first();
                                                    var ask3 = m5.content;
                                                    m5.delete();
                              m.edit(message.member + ', **....جارى جمع البيانات**').then( (mtime)=>{
                                setTimeout(() => {
                                  let embed = new Discord.RichEmbed()
                                .setColor('RANDOM')
                                .setTitle(`**تقديم ادارة** [__**${message.guild.name}**__]`)
                                .addField('**` ✍ اسم العصابة  `**', `${name}` , true)
                                .addField('**` 👑 رئيس العصابة `**', `${age}` , true)
                                .addField('**` ⭐ نائب رئيس العصابة `**',`${ask}`)
                                .addField('**` 💀 أعضاء العصابة `**',`${ask2}`)
                                .addField('**``**',`${ask3}`)
                                .setFooter(message.author.username,'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
                                channel.send(embed)
                                }, 2500);
                                setTimeout(() => {
                                  mtime.delete()
                                }, 3000);
        
                          })
                        })
                        })
                      })
                    })
                  })
                })
                })
                      })
                  })
                })
            }
        }
        
    client.on('message',async message => {
  let mention = message.mentions.members.first();
  let mySupport = message.guild.roles.find(686757506743009297);
  if(message.content.startsWith(prefix + "accept")) {
    let acRoom = message.guild.channels.find(686757653036138702);
    if(acRoom) {
    if(!message.guild.member(message.author).hasPermission("MOVE_MEMBERS")) return;
    if(!mention) return message.reply('منشن شخص');

    mention.addRole(mySupport).then(() => {
      acRoom.send(`**${mention} تم قبولك بنجاح توجة للمقابلة**`);
    });
  }
}
});

client.on('message',async message => {
  let mention = message.mentions.members.first();
  if(message.content.startsWith(prefix + "reject")) {
  if(!message.channel.guild) return;
  let acRoom = message.guild.channels.find(686757653036138702);
  if(!message.guild.member(message.author).hasPermission("MOVE_MEMBERS")) return;
  if(!mention) return message.reply("منشن شخص");
 
  acRoom.send(`**${mention} تم رفضك للاسف**`)
  }
});
client.on("message", message => {
    if (message.content === (prefix + "help")) {
     const embed = new Discord.RichEmbed() 
         .setColor("#580e6b")
         .setThumbnail(message.author.avatarURL)
         .setDescription(`**
      *server معلومات السيرفر    🌐
      *sug للإقتراحات              💡
      *admin للتقديم على الإدارة  👑
      *police للتقديم على الشرطة 👮
      *medic للتقديم على الإسعاف  🚑
      *ss للتقديم على امن الدولة ⭐
      *justice للتقديم على العدل ⚖️
      *gangs لفتح العصابات       💀
      *accept لقبول طلب التقديم  ✅
      *reject لرفض طلب التقديم   ❌
      ⛔⛔ يمنع التقديم على جهة اخرى اذا لم يتم قبولك او رفضك ⛔⛔
      
       **  `)

   message.author.sendEmbed(embed)
   
   }
   });
const developers = ["472413769700474901",""]
var adminprefix = ["*T11440"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setg')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setw')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setl')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'sets')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream");
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `);
}
});   

client.login("token");