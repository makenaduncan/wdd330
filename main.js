// Portfolio Table of Contents
const links = [
    {
        "label": "Week 1 Notes",
        "url": "./week01/index.html"
    },

    {
        "label": "Week 2 Notes",
        "url": "./week02/index.html"
    },

    {
        "label": "Week 3 Notes",
        "url": "./week03/index.html"
    },

    {
        "label": "Week 4 Notes",
        "url": "./week04/index.html"
    },

    {
        "label": "Week 5 Notes",
        "url": "./week05/index.html"
    },

    {
        "label": "Week 6 Notes",
        "url": "./week06/index.html"
    },

    {
        "label": "Week 7 Notes",
        "url": "./week07/index.html"
    },
];

const ol = document.querySelector("ol");

for (const item of links) {
    const listitem = document.createElement("li");
    const link = document.createElement("a");
    link.setAttribute("href", item.url);
    link.textContent = item.label;
    listitem.appendChild(link);
    
    ol.appendChild(listitem);
}