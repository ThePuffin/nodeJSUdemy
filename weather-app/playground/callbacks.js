let getUser = (id, callback) => {
  const user = {
    id: id,
    name: 'Vikram'
  }
  // setTimeout(()=>{ callback(user);}, 3000)
  callback(user)
}

getUser(31, userObject => {
  console.log(userObject)
})
