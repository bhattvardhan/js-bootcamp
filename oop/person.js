class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        });

        return bio
    }
    setName(fullName) {
        const firstName = fullName.split(' ')
        this.firstName = firstName[0]
        this.lastName = firstName[1]
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYearsLeftInService() {
        return 65 - this.age
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grade = grade
    }
    updateGrade(grade) {
        this.grade += grade
    }
    getBio() {
        const status = this.grade >= 70 ? 'passing' : 'failing'
        return `${this.firstName} is ${status} the class.`
    }
}

const me = new Student('Vardhan', 'Bhatt', 28, 88, [])
console.log(me.getBio())
me.updateGrade(-20)
console.log(me.getBio())
