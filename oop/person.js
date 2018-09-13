const Person = function (firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function () {
    let bio = `${this.firstName} is ${this.age}.`
    this.likes.forEach((like) => {
        bio += ` ${this.firstName} likes ${like}.`
    });
    return bio
}

Person.prototype.setName = function (fullName) {
    const firstName = fullName.split(' ')
    this.firstName = firstName[0]
    this.lastName = firstName[1]
}

const me = new Person('Vardhan', 'Bhatt', 28, ['Singing', 'Playing Table Tennis'])
me.setName('Alexis Turner')
console.log(me.getBio())

const person2 = new Person('James', 'Anderson', 34)
console.log(person2.getBio())