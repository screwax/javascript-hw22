class User {
    constructor(userName, userAge, userFollower) {
        this.name = userName;
        this.age = userAge;
        this.followers = userFollower
    }
    getInfo() {
        alert(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`)
    }
}



const mango = new User('Mango', 2, 20,);

mango.getInfo();

const poly = new User('Poly', 3, 17,);


poly.getInfo();