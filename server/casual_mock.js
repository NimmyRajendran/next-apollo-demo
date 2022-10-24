var casual = require('casual');

const fetchUser = (userLength) => {
    const userList = []
   for (let i = 0; i < userLength; i++){
        const obj = {}
        obj.id = i
        obj.name = casual.name,
        obj.address = casual.address,
        obj.email = casual.email,
        obj.phonenumber = casual.phone
        userList.push(obj)
      }
      return userList
}

casual.define('user', fetchUser(2000));

module.exports = casual.user
