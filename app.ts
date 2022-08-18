// const person:{
// 	name:string;
// 	age:number;
// }
// ={
//   name:"boy",
//   age:33
// }

const person:{
	name:string,
	age:number,
	hobbies:string[],
	role:[number, string];
}
={
	name:"max",
	age:22,
	hobbies:["football", "chess"],
	role:[2,"author"]
}

// person.role.push("admin");
// person.role[1]=10;

// person.role=[0,"admin", "user"]
let favoriteActivity:string[];
favoriteActivity=["chess"]
console.log(person.name);

for(const hobby of person.hobbies){
	console.log(hobby.toUpperCase());
}