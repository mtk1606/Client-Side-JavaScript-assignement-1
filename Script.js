//  set up the data arrays and basic variables

// arrays for each mission category
var agentOptions = ["Ghost", "Shadow", "Viper", "Nova", "Phantom"];
var locationOptions = ["Mars Base", "Arctic Vault", "Neon City", "Sunken Rig", "Desert Fort"];
var weaponOptions = ["Nano Blade", "Plasma Rifle", "EMP Drone", "Cloaking Grenade", "Sonic Disruptor"];
var objectiveOptions = ["Rescue Hostage", "Destroy Signal", "Hack Mainframe", "Secure Vault", "Neutralize Target"];
var riskOptions = ["Low", "Medium", "High", "Extreme"];

// these track which item is currently shown for each category
var agentIndex = -1;
var locationIndex = -1;
var weaponIndex = -1;
var objectiveIndex = -1;
var riskIndex = -1;
