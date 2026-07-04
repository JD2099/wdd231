const courses = [

    {
        subject: "WDD",
        number: 130,
        credits: 3,
        completed: true
    },

    {
        subject: "WDD",
        number: 131,
        credits: 3,
        completed: true
    },

    {
        subject: "WDD",
        number: 231,
        credits: 3,
        completed: false
    },

    {
        subject: "CSE",
        number: 111,
        credits: 2,
        completed: true
    },

    {
        subject: "CSE",
        number: 210,
        credits: 3,
        completed: false
    }

];

const courseContainer = document.querySelector("#courses");
const credits = document.querySelector("#credits");

function displayCourses(list) {

    courseContainer.innerHTML = "";

    list.forEach(course => {

        const div = document.createElement("div");

        div.className = "course";

        if (course.completed) {

            div.classList.add("completed");

        }

        div.innerHTML = `${course.subject} ${course.number}`;

        courseContainer.appendChild(div);

    });

    credits.textContent = `Total Credits: ${list.reduce((sum, c) => sum + c.credits, 0)}`;

}

displayCourses(courses);

document.querySelector("#all").onclick = () => displayCourses(courses);

document.querySelector("#wdd").onclick = () => displayCourses(
    courses.filter(course => course.subject === "WDD")
);

document.querySelector("#cse").onclick = () => displayCourses(
    courses.filter(course => course.subject === "CSE")
);