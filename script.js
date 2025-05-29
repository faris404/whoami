const bootLines = [
  "Booting /dev/faris... 🔌",
  "Initializing Coffee Protocol v2.0... ☕",
  "Mounting /brain/modules/data_engineer.so... 🧠",
  "Launching notavirus.exe... definitely safe ✅",
  "sudo rm -rf /bad-vibes 🚀",
  "Warming up the ETL engine... 🔧",
  "Loading .bash_farishistory (brace yourself)... 📜"
];

document.addEventListener("DOMContentLoaded", () => {
  const bootElement = document.querySelector(".boot");
  let index = 0;

  if (bootElement) {
    // Set initial boot line
    bootElement.innerHTML = bootLines[index];

    // Change message every 3 seconds
    setInterval(() => {
      index = (index + 1) % bootLines.length;
      bootElement.innerHTML = bootLines[index];
    }, 3000);
  }
  console.log("faris.dll launched successfully (with minimal bugs) 🚀");
});
