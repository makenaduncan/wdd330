// Portfolio Table of Contents
const contentsList = [
    {
        "label": "Week 1 Notes",
        "url": "week01/index.html"
    }
]

function createTable() {
    var list = document.getElementById(container)

    var li

    for (var i = 0; i < contentsList.length; i++); {
        li = document.createElement("li");
        li.appendChild(document.createTextNode(contentsList[i]))
        list.appendChild(li)
    }

    window.onload = createTable;
}
