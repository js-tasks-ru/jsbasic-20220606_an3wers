function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  const list = friends.map((el) => `<li>${el.firstName} ${el.lastName}</li> `);
  ul.innerHTML = list.join("");
  return ul;
}
