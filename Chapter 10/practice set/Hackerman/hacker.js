const dataHacking = document.getElementById('datahacking');
let user = prompt("Enter your name:");
let hackSteps = [
  "[BOOT] Initializing secure shell...",
  "[OK] Establishing encrypted connection...",
  "[INFO] Synchronizing system clocks...",
  "[INFO] Loading user credentials...",
  "[SCAN] Scanning open network ports...",
  "[SCAN] 28 vulnerable endpoints detected...",
  "[AUTH] Attempting privilege escalation...",
  "[WARN] Firewall detected — bypassing...",
  "[OK] Firewall bypass successful.",
  "[BRUTE] Running password permutations (2048/sec)...",
  "[MATCH] Valid password hash identified.",
  "[ACCESS] Decrypting secure user vault...",
  "[DATA] Extracting sensitive records...",
  "[MAIL] Enumerating linked email accounts...",
  "[BANK] Mapping financial service connections...",
  `[VERIFY] Target identity confirmed: ${user}`,
  "[UPLOAD] Transmitting payload to remote node...",
  "[OK] Data exfiltration completed.",
  "[CLEAN] Removing access traces...",
  "[DONE] Operation completed successfully."
];


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function hacking() {
    dataHacking.classList.add('data');

    for (let step of hackSteps) {
        for(let letter of step){
            dataHacking.textContent += letter;
            await sleep(10)
        }
    dataHacking.textContent += "\n";  // add the line
        await sleep(1000);                        // wait 2 seconds before next line
    }
}

hacking();
