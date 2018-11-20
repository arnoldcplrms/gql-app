const app = require('express')();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors())

mongoose.connect('mongodb://localhost:27017/gql-exer', { useNewUrlParser: true })
mongoose.connection.once('open', () => {
    console.log('Connected to the database');
}).once('error', err => {
    console.log(err);
});


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Listening on port 4000');
})