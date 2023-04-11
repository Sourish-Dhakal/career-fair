function CreateAHeading(text) {
    let h1 = document.createElement('h1');
    h1.innerHTML=text;
    h1.className="Chapter";
    return h1;
}
function GoToPage(index,index2) {
    localStorage.setItem("Array1",index);
    localStorage.setItem("Array2",index2);
}
function CreateALesson(index,lesson_Name,lesson_description,lesson_Url, spot) {
    //Creating Elements 
    let lesson = document.createElement("div");
    let lesson_url = document.createElement("a");
    let lesson_name = document.createElement("h1");
    let lesson_index = document.createElement("span");
    let lesson_innerHTML = document.createElement("div");
    let lesson_innerHTML_description = document.createElement("p");
    let lesson_innerHTML_image = document.createElement("img");
    //Assigning Classes
    lesson.className="lesson";
    lesson_url.className="lesson_url";
    lesson_name.className="lesson_name";
    lesson_index.className="lesson_index";
    lesson_innerHTML.className="lesson_innerHTML";
    lesson_innerHTML_description.className="lesson_innerHTML_description";
    lesson_innerHTML_image.className="lesson_innerHTML_image";
    //Assigning Values
    lesson_url.href="./lessons.html"
    lesson_url.onclick =function() {GoToPage(spot,index-1)};
    lesson_index.innerHTML="["+index+"]";
    lesson_name.appendChild(lesson_index);
    lesson_name.innerHTML+=" "+lesson_Name;
    lesson_innerHTML_description.innerHTML=lesson_description;
    lesson_innerHTML_image.src=lesson_Url;
    //Putting them in each other
    lesson_innerHTML.appendChild(lesson_innerHTML_description);
    lesson_innerHTML.appendChild(lesson_innerHTML_image);
    lesson_url.appendChild(lesson_name);
    lesson_url.appendChild(lesson_innerHTML);
    lesson.appendChild(lesson_url);
    //Returning the finished lesson
    return lesson;
}
for (object in dbLessons) {
    document.getElementById("content").appendChild(CreateAHeading(dbLessons[object].Name));
    for (lesson in dbLessons[object].lessons) {
        document.getElementById("content").appendChild(CreateALesson(parseInt(lesson)+1, dbLessons[object].lessons[lesson].Name, dbLessons[object].lessons[lesson].desc, dbLessons[object].lessons[lesson].thumbnail_image_url,object))
    }
}