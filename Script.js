

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
 
// cycles through the array for whatever key is passed in
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
