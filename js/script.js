//checkbox JS -- listens for a "check", then checks/unchecks boxes using the check all/ uncheck buttons.
document.addEventListener('DOMContentLoaded', () => {
  const checklist = document.querySelectorAll('.checklist-list input[type="checkbox"]');
  const checkAllBtn = document.getElementById('checkAllBtn');
  const clearAllBtn = document.getElementById('clearAllBtn');

  checkAllBtn.addEventListener('click', () => {
    checklist.forEach(cb => cb.checked = true);
  });

  clearAllBtn.addEventListener('click', () => {
    checklist.forEach(cb => cb.checked = false);
  });
});

//openstreetmap API. I think I did it right? Not really sure what qulifies as API versus just...embedding a map. 
document.addEventListener('DOMContentLoaded', () => {
  var map = L.map('map').setView([42.34117, -71.24350], 16);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  L.marker([42.34117, -71.24350]).addTo(map)
    .bindPopup('Hamel House Visitor Center')
    .openPopup();
});

//added a dropdown to display admission counselor info depending on the state selected
const counselors = {
  "Jane Smith": {
    name: "Jane Smith",
    contact: "jsmith@college.edu | 617-555-2010"
  },
  "Robert Johnson": {
    name: "Robert Johnson",
    contact: "rjohnson@college.edu | 212-555-8844"
  },
  "Maria Lopez": {
    name: "Maria Lopez",
    contact: "mlopez@college.edu | 415-555-7722"
  },
  "Alex Davis": {
    name: "Alex Davis",
    contact: "adavis@college.edu | 512-555-9901"
  }
};

const states = {
  "Alabama": "AL",
  "Alaska": "AK",
  "Arizona": "AZ",
  "Arkansas": "AR",
  "California": "CA",
  "Colorado": "CO",
  "Connecticut": "CT",
  "Delaware": "DE",
  "Florida": "FL",
  "Georgia": "GA",
  "Hawaii": "HI",
  "Idaho": "ID",
  "Illinois": "IL",
  "Indiana": "IN",
  "Iowa": "IA",
  "Kansas": "KS",
  "Kentucky": "KY",
  "Louisiana": "LA",
  "Maine": "ME",
  "Maryland": "MD",
  "Massachusetts": "MA",
  "Michigan": "MI",
  "Minnesota": "MN",
  "Mississippi": "MS",
  "Missouri": "MO",
  "Montana": "MT",
  "Nebraska": "NE",
  "Nevada": "NV",
  "New Hampshire": "NH",
  "New Jersey": "NJ",
  "New Mexico": "NM",
  "New York": "NY",
  "North Carolina": "NC",
  "North Dakota": "ND",
  "Ohio": "OH",
  "Oklahoma": "OK",
  "Oregon": "OR",
  "Pennsylvania": "PA",
  "Rhode Island": "RI",
  "South Carolina": "SC",
  "South Dakota": "SD",
  "Tennessee": "TN",
  "Texas": "TX",
  "Utah": "UT",
  "Vermont": "VT",
  "Virginia": "VA",
  "Washington": "WA",
  "West Virginia": "WV",
  "Wisconsin": "WI",
  "Wyoming": "WY",
  "District of Columbia": "DC"
};

const counselorAssignments = {
  "Jane Smith": ["AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL"],
  "Robert Johnson": ["IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO","MT"],
  "Maria Lopez": ["NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI"],
  "Alex Davis": ["SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY","DC"]
};

const stateToCounselor = {};

for (const [counselorName, stateList] of Object.entries(counselorAssignments)) {
  stateList.forEach(abbr => {
    stateToCounselor[abbr] = counselors[counselorName];
  });
}

window.addEventListener("DOMContentLoaded", () => {
  const stateSelect = document.getElementById("stateSelect");
  const infoBox = document.getElementById("counselorInfo");
  const nameField = document.getElementById("counselorName");
  const contactField = document.getElementById("counselorContact");

  for (const [fullName, abbr] of Object.entries(states)) {
    const option = document.createElement("option");
    option.value = abbr;
    option.textContent = fullName;
    stateSelect.appendChild(option);
  }

  stateSelect.addEventListener("change", () => {
    const abbr = stateSelect.value;

    nameField.textContent = "";
    contactField.textContent = "";
    infoBox.style.display = "none";

    if (abbr && stateToCounselor[abbr]) {
      const counselor = stateToCounselor[abbr];

      nameField.textContent = counselor.name;
      contactField.textContent = counselor.contact;

      infoBox.style.display = "block";
    }
  });
});
