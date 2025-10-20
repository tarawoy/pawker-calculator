// Wait for the DOM (HTML) to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {

    // --- PART 1: DATABASE (Core Data) ---

    // Base Chip values for each card Rank
    const cardChips = {
        'A': 11, 'K': 10, 'Q': 10, 'J': 10, '10': 10,
        '9': 9, '8': 8, '7': 7, '6': 6, '5': 5, '4': 4, '3': 3, '2': 2
    };

    // Hand Data (Planets) - For v1.0, we'll just hardcode Level 1
    // Structure: handData[HandType][Level] = { chips, mult }
    // Later you can add Level 2, 3, etc.
    const handData = {
        'High Card': { 1: { chips: 5, mult: 1 } },
        'Pair': { 1: { chips: 10, mult: 2 } },
        'Two Pair': { 1: { chips: 20, mult: 2 } },
        'Three of a Kind': { 1: { chips: 30, mult: 3 } },
        'Straight': { 1: { chips: 30, mult: 4 } },
        'Flush': { 1: { chips: 35, mult: 4 } },
        'Full House': { 1: { chips: 40, mult: 4 } },
        'Four of a Kind': { 1: { chips: 60, mult: 7 } },
        'Straight Flush': { 1: { chips: 100, mult: 8 } },
        'Five of a Kind': { 1: { chips: 120, mult: 8 } },
        'Flush House': { 1: { chips: 140, mult: 8 } }
        // TODO: Add data for Level 2, 3, ...
        // e.g. 'Flush': { 1: { chips: 35, mult: 4 }, 2: { chips: 50, mult: 6 }, ... }
    };

    // Connect the "Calculate" button to the calculation function
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.addEventListener("click", calculateScore);

    // --- PART 2: MAIN CALCULATION FUNCTION ---

    function calculateScore() {
        
        // --- SECTION A: Calculate Chips from 5 Cards ---
        let chipsFromCards = 0;
        for (let i = 1; i <= 5; i++) {
            const rank = document.getElementById(`rank${i}`).value;
            chipsFromCards += cardChips[rank] || 0;
        }

        // --- SECTION B: Get Base Chips & Mult from Hand Type ---
        const handType = document.getElementById("handType").value;
        const handLevel = parseInt(document.getElementById("handLevel").value) || 1;

        // Get hand data. If level doesn't exist, use Level 1. If hand doesn't exist, use 0.
        const baseHandData = (handData[handType] && handData[handType][handLevel]) 
                           ? handData[handType][handLevel] 
                           : (handData[handType] ? handData[handType][1] : { chips: 0, mult: 0 });

        let baseChips = baseHandData.chips;
        let baseMult = baseHandData.mult;

        // --- SECTION C: Get Manual Bonuses from Cards ---
        let cardBonusChips = parseInt(document.getElementById("cardBonusChips").value) || 0;
        let cardBonusMult = parseInt(document.getElementById("cardBonusMult").value) || 0;
        
        // Calculate xMult from cards (format "1.5, 2, 3")
        let cardBonusXMultRaw = document.getElementById("cardBonusXMult").value;
        let cardBonusXMult = 1;
        if (cardBonusXMultRaw) {
            const multipliers = cardBonusXMultRaw.split(',');
            cardBonusXMult = multipliers.reduce((acc, val) => {
                const num = parseFloat(val);
                return acc * (isNaN(num) ? 1 : num);
            }, 1);
        }

        // --- SECTION D: Get Manual Bonuses from Jokers ---
        let jokerBonusChips = 0;
        let jokerBonusMult = 0;
        let jokerBonusXMult = 1;

        document.querySelectorAll(".jokerChips").forEach(input => {
            jokerBonusChips += parseInt(input.value) || 0;
        });
        document.querySelectorAll(".jokerMult").forEach(input => {
            jokerBonusMult += parseInt(input.value) || 0;
        });
        document.querySelectorAll(".jokerXMult").forEach(input => {
            const val = parseFloat(input.value);
            // 1 is the base (default), 0 is ignored (treated as 1) to prevent nullifying total
            jokerBonusXMult *= (isNaN(val) || val === 0) ? 1 : val; 
        });

        // --- SECTION E: FINAL CALCULATION ---

        // 1. Total Chips (All Additive)
        const totalChips = chipsFromCards + baseChips + cardBonusChips + jokerBonusChips;

        // 2. Total Mult (Additive x Multiplicative)
        const totalAdditiveMult = baseMult + cardBonusMult + jokerBonusMult;
        const totalMultiplicativeMult = cardBonusXMult * jokerBonusXMult;
        const totalMult = totalAdditiveMult * totalMultiplicativeMult;

        // 3. Final Score
        const finalScore = totalChips * totalMult;

        // Display Results
        // `toLocaleString('en-US')` formats the number (e.g., 1,000,000)
        document.getElementById("resultChips").textContent = totalChips.toLocaleString('en-US');
        document.getElementById("resultMult").textContent = totalMult.toLocaleString('en-US');
        document.getElementById("resultScore").textContent = finalScore.toLocaleString('en-US');
    }
});