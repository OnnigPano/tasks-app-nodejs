require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.deleteOne({ _id: "5eb0bfa27842a120c02f007f" }).then(() => {
    console.log("deleted")

    return Task.countDocuments( { completed: false } )
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})