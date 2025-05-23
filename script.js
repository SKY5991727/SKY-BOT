function getSignal() {
    const signalBox = document.getElementById("signal-output");
    const signals = ["CALL", "SELL"];
    const random = signals[Math.floor(Math.random() * signals.length)];
    signalBox.textContent = random;
    signalBox.style.color = random === "CALL" ? "lime" : "red";
}
