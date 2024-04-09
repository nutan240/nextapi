let users = [];

module.exports = {
  createUser: (username, password) => {
    const newUser = { id: users.length + 1, username, password };
    users.push(newUser);
    return newUser;
  },
  findByUsername: (username) => {
    return users.find((user) => user.username === username);
  },
};
