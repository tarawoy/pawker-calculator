const CARD_MODIFIERS = {
  editions: [
    { value: "none", text: "None", effect: {} },
	{ value: "mult", text: "Mult (+4 Mult)", effect: { mult: 4 } },
    { value: "bonus", text: "Bonus (+30 Chips)", effect: { chips: 30 } },
	{ value: "fur", text: "Fur (+5 Mult, No Suit/Rank)", effect: { mult: 5 } },
    { value: "stone", text: "Stone (+50 Chips, No Rank/Suit)", effect: { chips: 50, type: "stone" } },
    { value: "wild", text: "Wild Card", effect: { type: "wild" } },
    { value: "lucky", text: "Lucky (+20 Mult, 1/5)", effect: { mult: 20, type: "lucky" } }
  ],
  enhancements: [
    { value: "none", text: "None", effect: {} },
    { value: "foil", text: "Foil (+50 Chips)", effect: { chips: 50 } },
    { value: "holographic", text: "Holographic (+10 Mult)", effect: { mult: 10 } },
    { value: "polychrome", text: "Polychrome (x1.5 Mult)", effect: { xmult: 1.5 } }
  ],
  seals: [
    { value: "none", text: "None", effect: {} },
    { value: "red", text: "Red (Retrigger)", effect: { trigger: 2 } },
    { value: "blue", text: "Blue (Planet)", effect: { type: "blue_seal"} },
    { value: "purple", text: "Purple (Discard)", effect: { type: "purple_seal"} },
    { value: "gold", text: "Gold (Earn Gold)", effect: { type: "gold_seal"} }
  ]
};