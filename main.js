import {name} from "./person.js"
import * as person from "./person.js"

console.log(add(1,2))

document.querySelector("h1").innerHTML = name("Jack");
document.querySelector("h2").innerHTML = person.age(10);
document.querySelector("h3").innerHTML = person.address("Canada");
