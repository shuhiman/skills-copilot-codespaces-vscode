function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'PHP', 'Ruby', 'Python'];
    var member = {
        name: 'John Doe',
        age: 34,
        job: 'Web Developer',
        salary: '$3000',
        skills: skills,
        calculateSalary: function () {
            console.log('The salary of ' + this.name + ' is ' + this.salary);
        },
        calculateNumbers: function (var1, var2) {
            console.log(var1 + var2);
        }
    };
    member.calculateSalary();
    member.calculateNumbers(3, 5);
    console.log(member.skills[0]);
    console.log(member.skills[2]);
    console.log(member.skills[5]);
    console.log(member.skills.length);
    member.skills.push('Java');
    console.log(member.skills.length);
    member.skills.unshift('C++');
    console.log(member.skills.length);
    member.skills.pop();
    console.log(member.skills.length);
    member.skills.shift();
    console.log(member.skills.length);
    member.skills.slice(2, 4);
    console.log(member.skills.length);
}
