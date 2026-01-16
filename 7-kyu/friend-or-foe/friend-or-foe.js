function friend(friends){
  let realfriends = [];
  
  for (let i=0; i < friends.length; i++) {
    if (friends[i].length == 4) {
      realfriends.push(friends[i]);
    }
  }
  return realfriends;
}