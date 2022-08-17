var Person = function() {};

Person.prototype.initialize = function(name,age)
{
    this.name=name;
    this.age=age;
}

// TODO: create the class Teacher and a method teach
var Teacher = function () { Person.call(this)};
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function(subject)
{
        console.log(`${this.name} is now teaching ${subject}`);
}

var him = new Teacher();
him.initialize("Adam",45);
him.teach("Inheritance");