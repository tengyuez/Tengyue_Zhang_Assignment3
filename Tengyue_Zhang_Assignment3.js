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
    td.innerHTML = tableInfo.tableContent[i][k];
    tr.appendChild(td);
  }
}

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
part2();
function part2() {
  let ul = "";
  let ol = "";
  list.forEach((ele) => {
    ul += `<li>${ele}</li>`;
    ol += `<li>${ele}</li>`;
  });
  document.querySelector("ul").innerHTML = ul;
  document.querySelector("ol").innerHTML = ol;
}

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
