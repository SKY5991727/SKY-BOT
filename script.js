function getSignal() {
    const signalBox = document.getElementById("signal-output");

    // Simulate signal logic
    const rsi = Math.floor(Math.random() * 80) + 10;
    const macdCross = Math.random() > 0.5;
    const bbTouch = ["upper", "lower", "none"][Math.floor(Math.random() * 3)];
    const emaTrend = ["up", "down"][Math.floor(Math.random() * 2)];
    const candlePattern = ["bullish", "bearish", "none"][Math.floor(Math.random() * 3)];

    let confidence = 50;
    let signal = null;

    if (rsi < 30 && bbTouch === "lower" && emaTrend === "up" && candlePattern === "bullish" && macdCross) {
        signal = "CALL";
        confidence += 50;
    } else if (rsi > 70 && bbTouch === "upper" && emaTrend === "down" && candlePattern === "bearish" && macdCross) {
        signal = "SELL";
        confidence += 50;
    } else {
        signal = Math.random() > 0.5 ? "CALL" : "SELL";
        confidence = Math.floor(Math.random() * 30) + 60; // 60-89%
    }

    confidence = Math.min(confidence, 99);

    if (confidence < 95) {
        signalBox.textContent = "No strong signal. Try again.";
        signalBox.style.color = "gray";
        return;
    }

    signalBox.textContent = `${signal} (Confidence: ${confidence}%)`;
    signalBox.style.color = signal === "CALL" ? "lime" : "red";
}
