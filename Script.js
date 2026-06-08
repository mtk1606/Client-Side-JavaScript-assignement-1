

// arrays for each mission category

var agentOptions = ["Ghost", "Shadow", "Viper", "Nova", "Phantom"];
var locationOptions = ["Mars Base", "Arctic Vault", "Neon City", "Sunken Rig", "Desert Fort"];
var weaponOptions = ["Nano Blade", "Plasma Rifle", "EMP Drone", "Cloaking Grenade", "Sonic Disruptor"];
var objectiveOptions = ["Rescue Hostage", "Destroy Signal", "Hack Mainframe", "Secure Vault", "Neutralize Target"];
var riskOptions = ["Low", "Medium", "High", "Extreme"];

var agentIndex = -1;
var locationIndex = -1;
var weaponIndex = -1;
var objectiveIndex = -1;
var riskIndex = -1;

function cycleOption(key) {
  if (key === "agent") {
    agentIndex = (agentIndex + 1) % agentOptions.length;
    document.getElementById("val-agent").textContent = agentOptions[agentIndex];
  }
  if (key === "location") {
    locationIndex = (locationIndex + 1) % locationOptions.length;
    document.getElementById("val-location").textContent = locationOptions[locationIndex];
  }
  if (key === "weapon") {
    weaponIndex = (weaponIndex + 1) % weaponOptions.length;
    document.getElementById("val-weapon").textContent = weaponOptions[weaponIndex];
  }
  if (key === "objective") {
    objectiveIndex = (objectiveIndex + 1) % objectiveOptions.length;
    document.getElementById("val-objective").textContent = objectiveOptions[objectiveIndex];
  }
  if (key === "risk") {
    riskIndex = (riskIndex + 1) % riskOptions.length;
    document.getElementById("val-risk").textContent = riskOptions[riskIndex];
  }
}

function launchMission() {
  var warning = document.getElementById("warning");

  if (agentIndex < 0 || locationIndex < 0 || weaponIndex < 0 || objectiveIndex < 0 || riskIndex < 0) {
    warning.textContent = "Please select all mission parameters before launching.";
    return;
  }

  warning.textContent = "";

  var agent = agentOptions[agentIndex];
  var location = locationOptions[locationIndex];
  var weapon = weaponOptions[weaponIndex];
  var objective = objectiveOptions[objectiveIndex];
  var risk = riskOptions[riskIndex];

  var content = document.getElementById("briefingContent");
  content.innerHTML =
    "<p class='briefing-line'>Agent: " + agent + "</p>" +
    "<p class='briefing-line'>Location: " + location + "</p>" +
    "<p class='briefing-line'>Weapon: " + weapon + "</p>" +
    "<p class='briefing-line'>Objective: " + objective + "</p>" +
    "<p class='briefing-line'>Risk: " + risk + "</p>";

  document.getElementById("briefing").style.display = "block";
}

// picks a random index for every category all at once
function randomMission() {
  agentIndex = Math.floor(Math.random() * agentOptions.length);
  locationIndex = Math.floor(Math.random() * locationOptions.length);
  weaponIndex = Math.floor(Math.random() * weaponOptions.length);
  objectiveIndex = Math.floor(Math.random() * objectiveOptions.length);
  riskIndex = Math.floor(Math.random() * riskOptions.length);

  document.getElementById("val-agent").textContent = agentOptions[agentIndex];
  document.getElementById("val-location").textContent = locationOptions[locationIndex];
  document.getElementById("val-weapon").textContent = weaponOptions[weaponIndex];
  document.getElementById("val-objective").textContent = objectiveOptions[objectiveIndex];
  document.getElementById("val-risk").textContent = riskOptions[riskIndex];

  document.getElementById("warning").textContent = "";
}

// resets everything back to the starting state
function resetMission() {
  agentIndex = -1;
  locationIndex = -1;
  weaponIndex = -1;
  objectiveIndex = -1;
  riskIndex = -1;

  document.getElementById("val-agent").textContent = "---";
  document.getElementById("val-location").textContent = "---";
  document.getElementById("val-weapon").textContent = "---";
  document.getElementById("val-objective").textContent = "---";
  document.getElementById("val-risk").textContent = "---";

  document.getElementById("warning").textContent = "";
  document.getElementById("briefing").style.display = "none";
  document.getElementById("briefingContent").innerHTML = "";
}

// wire up the action buttons once the page is ready
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("launchBtn") && document.getElementById("launchBtn").addEventListener("click", launchMission);
});
