require("../src/db/mongoose")

const User = require("../src/models/user")

// User.findByIdAndUpdate('5dbf19d33dcfc4116088fd11', { age: 1 } ).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 1 })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateByIdAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id , { age })
    const count = await User.countDocuments({ age })
    return count
}

updateByIdAndCount("5dc446a0fd86f81070aca65d", 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})