module.exports = {
  emailID: "card.master.acespades@gmail.com",
  emailPass: "saruwatari953",
  emailTo: "Spencer Simons <spencersimons09@gmail.com>",
  pgConnection: {
    client: 'pg',
    connection: {
      host : 'localhost',
      user : 'spencersimons',
      password : '',
      database : 'discreet_tactical'
    },
    searchPath: 'knex,public'
  },
  sessionObj: {
    secret: 'somethingDiscr33tTh15W@yShot!',
    resave: false,
    saveUninitialized: false
  }
}
