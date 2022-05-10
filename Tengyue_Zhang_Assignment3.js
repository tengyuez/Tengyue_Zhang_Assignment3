//1.Given the following array and implement the table dynamically
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};
const tbody = document.querySelector("tbody");
for (let i = 0; i < tableInfo.tableContent.length; i++) {
  let tr = document.createElement("tr");
  tbody.appendChild(tr);
  for (let k in tableInfo.tableContent[i]) {
    let td = document.createElement("td");
    td.textContent = tableInfo.tableContent[i][k];
    tr.appendChild(td);
  }
}

//2.Given the array and generate order list and unordered list dynamically as following:
function createLanguageItem(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}

const olLanguage = document.querySelector("#olLanguage");
const array = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
array.forEach((ele) => {
  olLanguage.appendChild(createLanguageItem(ele));
});

const ulLanguage = document.querySelector("#ulLanguage");
array.forEach((ele) => {
  ulLanguage.appendChild(createLanguageItem(ele));
});

//3. Given a array and implement a dropdown list with the following options dynamically (please find the screenshot/mockup below)
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let value = [
  "Newark",
  "Santa Clara",
  "Union City",
  "Albany",
  "Daly City",
  "San Jose",
];
let option = "";
for (let i = 0; i < value.length; i++) {
  option += '<option value="' + value[i] + '">' + value[i] + "</option>";
}
document.getElementById("value").innerHTML = option;
