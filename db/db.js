const Pool=require('pg').Pool

const pool= new Pool({
    connectionString: process.env.DATABASE_URL,
})
//pool.query('CREATE TABLE  person (id SERIAL PRIMARY KEY, login varchar, pass VARCHAR, nickname varchar(15), online BOOLEAN, hobby varchar(30), about varchar(40), avatar varchar,location varchar)').then(()=>console.log('yees'))
//pool.query('CREATE TABLE  home (id SERIAL PRIMARY KEY, title VARCHAR(15), bg VARCHAR, pass VARCHAR(10), admin INTEGER, FOREIGN KEY (admin) REFERENCES person (id))').then(()=>console.log('yees'))
//pool.query('CREATE TABLE  location (id SERIAL PRIMARY KEY, title VARCHAR, typelocation VARCHAR, typepoint VARCHAR,online INTEGER,time VARCHAR)').then(()=>console.log('yees'))
//pool.query('CREATE TABLE  personlocation (id INTEGER, location INTEGER, FOREIGN KEY (location) REFERENCES location (id),FOREIGN KEY (id) REFERENCES person (id) )').then(()=>console.log('yees'))
//pool.query('INSERT INTO location (title, typelocation, typepoint, online,time) values ($1,$2,$3,$4,$5)',['Объект Pie-city','Большой город','Центр города',0,'day'])
module.exports = pool