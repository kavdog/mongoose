const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/street-fighters'

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.once('open', _ => {
  console.log('Database connected:', url)
})

db.on('error', err => {
  console.error('connection error:', err)
})

const Character = require('./models/Character')

// const ryu = new Character({
//     name: 'Ryu',
//     ultimate: 'Shinku Hadoken'
// })

// ryu.save((error, document) => {
//     if(error) console.error(error)
//     console.log(document)
// })

// function saveCharacter(character) {
//     const c = new Character(character)
//     return c.save()
// }

// saveCharacter({
//     name: 'Ryu',
//     ultimate: 'Shinky Hadoken'
// })
// .then(doc => { console.log(doc) })
// .catch(error => { console.error(error) })

async function runCode() {
    //new+save
    // const ryu = new Character({
    //     name: 'Ryu',
    //     ultimate: 'Shinku Hadoken'
    // })

    //new+save
    // const ken = new Character({
    //     name: 'Ken',
    //     ultimate: 'Guren Enjinkyaku'
    // })
    // await ken.save()

    //findOne: with param
    // const ryu = await Character.findOne({ name: 'Ryu'})
    // console.log(ryu)

    //find: with param
    // const chars = await Character.find({ name: 'Ryu'})
    // console.log(chars)

    //find : no params
    // const chars = await Character.find()
    // console.log(chars)

    //findOne+save
    // const ryu = await Character.findOne({ name: 'Ryu'})
    // console.log(ryu)
    // ryu.specials = [
    //     'Hadoken',
    //     'Shoryuken',
    //     'Tatsumaki Senpukyaku'
    // ]
    // const doc = await ryu.save()
    // console.log(doc)

    //findOneAndUpdate
    //await findOneAndUpdate(filter, update) -- syntax
    // const doc = await Character.findOneAndUpdate(
    //     { name: 'Ryu' },
    //     {
    //         specials: [
    //             'Hadoken',
    //             'Shoryuken',
    //             'Tatsumaki Senpukyaku'
    //         ]
    //     })

    // console.log(doc)

    //findOne+remove
    // const ryu = await Character.findOne({ name: 'Ryu' })
    // const deleted = await ryu.remove()
    // console.log(deleted)

    //findOneAndDelete
    // const deleted = await Character.findOneAndDelete({ name: 'Ken' })
    // console.log(deleted)
    
}

runCode()
.catch(error => { console.error(error) })