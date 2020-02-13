require('../src/db/mongoose')
const Task = require("../src/models/task")

// Task.findByIdAndDelete('5dc44d479ce7e7100c5d351d').then((result) => {
//     console.log(result)
//     return Task.countDocuments({completed: false})
// }).then((result2) => {
//     console.log(result2)
// }).catch((e) =>{
//     console.log(e)
// })

const deleteByIdAndUpdate = async (id) => {
    const task = Task.findByIdAndDelete(id)
    const count = Task.countDocuments({ completed: false })
    return count 
}

deleteByIdAndUpdate("5dbf1c29c86fb10fb8ffdc21").then( (count) => {
    console.log(count)
}).catch( (e) => {
    console.log(e)
})