const people = [
  { id: "1", name: "juo", age: 2, gender: "남자" },
  { id: "2", name: "juo1", age: 3, gender: "여자" },
  { id: "3", name: "juo2", age: 76, gender: "남자" },
  { id: "4", name: "juo3", age: 6, gender: "여자" },
  { id: "5", name: "juo4", age: 26, gender: "남자" },
  { id: "6", name: "juo5", age: 22, gender: "여자" },
  { id: "7", name: "juo6", age: 29, gender: "여자" },
  { id: "8", name: "juo7", age: 16, gender: "남자" },
  { id: "9", name: "juo8", age: 25, gender: "여자" },
  { id: "10", name: "juo9", age: 46, gender: "남자" },
];

const getById = (id) => {
  const targets = people.filter((person) => person.id === id);
  return targets[0];
};
export { people, getById };
