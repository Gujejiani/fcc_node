require('dotenv').config();

const { model } = require('mongoose');
const mongoose = require('mongoose')
// const Person = require('./models/person')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(()=> console.log('connected to mongodb')).catch(err=> console.log(err));
const PersonSchema = new mongoose.Schema({
  name: {
      type: String,
      required: [true, 'Person should have a name']
  },
  age: Number,
  favoriteFoods: [String]
})


let Person = mongoose.model('Person', PersonSchema)


const createAndSavePerson = (done) => {

  const person =new Person({
    name: 'Kakha',
    age: '23',
    favoriteFoods: ['Khinkali, Kubdari,  Gomi']
  })
  person.save((err, data)=>{
    if(!err){
      done(null, data)
    }else{
      done(err)
    }
  })
  //  done(null, data);
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, (err, data)=>{
    if(!err){
      done(null, data)
    }else{
      done(err)
    }
  })
 
};

const findPeopleByName = (personName, done) => {

  Person.find({name: personName}, (err, data)=>{
    if(err)return console.log('err')
    done(null, data)
   })


};

const findOneByFood = (food, done) => {
// console.log(food)
  Person.findOne({favoriteFoods: food},(err, data)=>{
    // console.log(data)
    done(null, data);
  })
 
};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data)=>{
    done(null, data)
  })

};

const findEditThenSave = async (personId, done) => {

  const person = await Person.findById(personId)
    console.log('----')
  console.log(person)


  const foodToAdd = "hamburger";
  person.favoriteFoods.push(foodToAdd)
  console.log(person)
 let data =  await person.save()
  done(null ,data);
};


const findAndUpdate = async (personName, done) => {
  
  
  const ageToSet = 20;
  const data = await Person.findOneAndUpdate({name:  personName}, {age: ageToSet},  {new: true})
console.log(data)
  done(null , data);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
