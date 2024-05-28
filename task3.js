const getUserData = (userId, userData) => {
  try {
    let userInfo = {};

    userInfo = userData[userId];

    if (!userInfo) throw new Error("User not found");

    const info = {
      name: userInfo.name ? userInfo.name : null,
      age: userInfo.age ? userInfo.age : null,
      email: userInfo.email ? userInfo.email : null,
    };

    return info;
  } catch (err) {
    console.log(err);
  }
};

user_database = {
  1: { name: "Alice", age: 30, email: "alice@example.com" },
  2: { name: "Bob", age: 25 },
  3: { email: "charlie@example.com" },
};

getUserData(3, user_database);
