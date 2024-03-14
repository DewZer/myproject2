//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID: 65130500074   Name: Wichapon Jitpranee

class Student {
// Insert your code here
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Courses {
    constructor(courseName, courseGrade) {
        this.courseName = courseName
        this.courseGrade = courseGrade = ["A", "B+", "B", "C+", "C", "D+", "D", "F"]
    }

    addCourse(courses) {
        if (courses.courseName.includes(this.courseName)) {
            this.courses
            return this.courseName, this.courseGrade
        } else if (courses.courseName === null || undefined)
            return null
    }

    removeCourse(courseName) {
        const foundIndex = this.courses.findIndex((student) => student.courseName === courseName)

        let removeCourse = null
        if (foundIndex > -1) {
            removeCourse = this.courses.splice(foundIndex, 1)
        }
        return Boolean(removeCourse)
    }

    getStudentInfo() {
        return Student.name, Student.age, Courses.courseName, Courses.courseGrade
    }

    isEnrolled(courseName) {
        if (Student.name === courseName) {
            this.name
            return true
        } else
            return false
    }

    listAllCourses() {
        return Courses
    }

    getHonorClass() {
        if (Student.name(avgGrade) >= 3.9) {
            this.name
            return "Summa Cum Laude"
        } if(Student.name(avgGrade) = 3.7 - 3.89) {
            this.name
            return "Magna Cum Laude"
        } if(Student.name(avgGrade) = 3.5 - 3.69) {
            this.name
            return "Cum Laude"
        } if(Student.name(avgGrade) = 3.0 - 3.49) {
            this.name
            return "Honorable Mention"
        } else(Student.name(avgGrade) < 3.0)
            this.name
            return "No honors"
    }
}

// Creating a new Student object for stu
let stu = new Student("Scott", 17);

// Adding courses to stu's record
stu.addCourse({"name": "Math", "grade": "A"});
stu.addCourse({"name": "Programming", "grade": "B+"});
stu.addCourse({"name": "Network", "grade": "B+"});
stu.addCourse({"name": "GenEd", "grade": "D"});

//Average Grade
console.log(stu.getAverageGrade());

// Listing all courses
console.log(stu.listAllCourses());

// Removing "GenEd" course
console.log(stu.removeCourse("GenEd"));

// Attempting to remove a non-existent course "History"
console.log(stu.removeCourse("History"));

// Checking enrollment in "Programming" and "History"
console.log(stu.isEnrolled("Programming"));
console.log(stu.isEnrolled("History"));

// Getting student info after updates
console.log(stu.getStudentInfo());

// Determining honor class after updates
console.log(stu.getHonorClass());
