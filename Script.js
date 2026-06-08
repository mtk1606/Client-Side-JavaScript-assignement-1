

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
 
// checks all 5 are selected, then shows the briefing
function launchMission() {
  var warning = document.getElementById("warning");
 
  // make sure every category has been chosen
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
