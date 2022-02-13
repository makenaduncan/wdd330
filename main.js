// Portfolio Table of Contents
const contentsList = [
    {
        "label": "Week 1 Notes",
        "url": "week01/index.html"
    },

    {
        "label": "Week 2 Notes",
        "url": "week02/index.html"
    },

    {
        "label": "Week 3 Notes",
        "url": "week03/index.html"
    },

    {
        "label": "Week 4 Notes",
        "url": "week04/index.html"
    },

    {
        "label": "Week 5 Notes",
        "url": "week05/index.html"
    },

    {
        "label": "Week 6 Notes",
        "url": "week06/index.html"
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
