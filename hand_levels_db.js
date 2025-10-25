const handData = {
    'High Card': {
        1: { chips: 5, mult: 1 }, 2: { chips: 15, mult: 2 }, 3: { chips: 25, mult: 3 }, 4: { chips: 35, mult: 4 }, 5: { chips: 45, mult: 5 },
        6: { chips: 55, mult: 6 }, 7: { chips: 65, mult: 7 }, 8: { chips: 75, mult: 8 }, 9: { chips: 85, mult: 9 }, 10: { chips: 95, mult: 10 },
        11: { chips: 105, mult: 11 }, 12: { chips: 115, mult: 12 }, 13: { chips: 125, mult: 13 }, 14: { chips: 135, mult: 14 }, 15: { chips: 145, mult: 15 },
        ...Array.from({ length: 985 }, (_, i) => ({ [16 + i]: { chips: 145 + (i + 1) * 10, mult: 15 + (i + 1) * 1 } })).reduce((acc, obj) => ({ ...acc, ...obj }), {})
    },
    'Pair': {
        1: { chips: 10, mult: 2 }, 2: { chips: 25, mult: 3 }, 3: { chips: 40, mult: 4 }, 4: { chips: 55, mult: 5 }, 5: { chips: 70, mult: 6 },
        6: { chips: 85, mult: 7 }, 7: { chips: 100, mult: 8 }, 8: { chips: 115, mult: 9 }, 9: { chips: 130, mult: 10 }, 10: { chips: 145, mult: 11 },
        11: { chips: 160, mult: 12 }, 12: { chips: 175, mult: 13 }, 13: { chips: 190, mult: 14 }, 14: { chips: 205, mult: 15 }, 15: { chips: 220, mult: 16 },
        ...Array.from({ length: 985 }, (_, i) => ({ [16 + i]: { chips: 220 + (i + 1) * 15, mult: 16 + (i + 1) * 1 } })).reduce((acc, obj) => ({ ...acc, ...obj }), {})
    },
    'Two Pair': {
        1: { chips: 20, mult: 2 }, 2: { chips: 40, mult: 3 }, 3: { chips: 60, mult: 4 }, 4: { chips: 80, mult: 5 }, 5: { chips: 100, mult: 6 },
        6: { chips: 120, mult: 7 }, 7: { chips: 140, mult: 8 }, 8: { chips: 160, mult: 9 }, 9: { chips: 180, mult: 10 }, 10: { chips: 200, mult: 11 },
        11: { chips: 220, mult: 12 }, 12: { chips: 240, mult: 13 }, 13: { chips: 260, mult: 14 }, 14: { chips: 280, mult: 15 }, 15: { chips: 300, mult: 16 },
        ...Array.from({ length: 985 }, (_, i) => ({ [16 + i]: { chips: 300 + (i + 1) * 20, mult: 16 + (i + 1) * 1 } })).reduce((acc, obj) => ({ ...acc, ...obj }), {})
    },
    'Three of a Kind': {
        1: { chips: 30, mult: 3 }, 2: { chips: 50, mult: 5 }, 3: { chips: 70, mult: 7 }, 4: { chips: 90, mult: 9 }, 5: { chips: 110, mult: 11 },
        6: { chips: 130, mult: 13 }, 7: { chips: 150, mult: 15 }, 8: { chips: 170, mult: 17 }, 9: { chips: 190, mult: 19 }, 10: { chips: 210, mult: 21 },
        11: { chips: 230, mult: 23 }, 12: { chips: 250, mult: 25 }, 13: { chips: 270, mult: 27 }, 14: { chips: 290, mult: 29 }, 15: { chips: 310, mult: 31 },
        ...Array.from({ length: 985 }, (_, i) => ({ [16 + i]: { chips: 310 + (i + 1) * 20, mult: 31 + (i + 1) * 2 } })).reduce((acc, obj) => ({ ...acc, ...obj }), {})
    },
    'Straight': {
        1: { chips: 30, mult: 4 }, 2: { chips: 60, mult: 6 }, 3: { chips: 90, mult: 8 }, 4: { chips: 120, mult: 10 }, 5: { chips: 150, mult: 12 },
        6: { chips: 180, mult: 14 }, 7: { chips: 210, mult: 16 }, 8: { chips: 240, mult: 18 }, 9: { chips: 270, mult: 20 }, 10: { chips: 300, mult: 22 },
        11: { chips: 330, mult: 24 }, 12: { chips: 360, mult: 26 }, 13: { chips: 390, mult: 28 }, 14: { chips: 420, mult: 30 }, 15: { chips: 450, mult: 32 },
        ...Array.from({ length: 985 }, (_, i) => ({ [16 + i]: { chips: 450 + (i + 1) * 30, mult: 32 + (i + 1) * 2 } })).reduce((acc, obj) => ({ ...acc, ...obj }), {})
    },
    'Flush': {
        1: { chips: 35, mult: 4 }, 2: { chips: 50, mult: 6 }, 3: { chips: 65, mult: 8 }, 4: { chips: 80, mult: 10 }, 5: { chips: 95, mult: 12 },
        6: { chips: 110, mult: 14 }, 7: { chips: 125, mult: 16 }, 8: { chips: 140, mult: 18 }, 9: { chips: 155, mult: 20 }, 10: { chips: 170, mult: 22 },
        11: { chips: 185, mult: 24 }, 12: { chips: 200, mult: 26 }, 13: { chips: 215, mult: 28 }, 14: { chips: 230, mult: 30 }, 15: { chips: 245, mult: 32 },
        ...Array.from({ length: 985 }, (_, i) => ({ [16 + i]: { chips: 245 + (i + 1) * 15, mult: 32 + (i + 1) * 2 } })).reduce((acc, obj) => ({ ...acc, ...obj }), {})
    },
    'Full House': {
        1: { chips: 40, mult: 4 }, 2: { chips: 65, mult: 6 }, 3: { chips: 90, mult: 8 }, 4: { chips: 115, mult: 10 }, 5: { chips: 140, mult: 12 },
        6: { chips: 165, mult: 14 }, 7: { chips: 190, mult: 16 }, 8: { chips: 215, mult: 18 }, 9: { chips: 240, mult: 20 }, 10: { chips: 265, mult: 22 },
        11: { chips: 290, mult: 24 }, 12: { chips: 315, mult: 26 }, 13: { chips: 340, mult: 28 }, 14: { chips: 365, mult: 30 }, 15: { chips: 390, mult: 32 },
        ...Array.from({ length: 985 }, (_, i) => ({ [16 + i]: { chips: 390 + (i + 1) * 25, mult: 32 + (i + 1) * 2 } })).reduce((acc, obj) => ({ ...acc, ...obj }), {})
    },
    'Four of a Kind': {
        1: { chips: 60, mult: 7 }, 2: { chips: 90, mult: 9 }, 3: { chips: 120, mult: 11 }, 4: { chips: 150, mult: 13 }, 5: { chips: 180, mult: 15 },
        6: { chips: 210, mult: 17 }, 7: { chips: 240, mult: 19 }, 8: { chips: 270, mult: 21 }, 9: { chips: 300, mult: 23 }, 10: { chips: 330, mult: 25 },
        11: { chips: 360, mult: 27 }, 12: { chips: 390, mult: 29 }, 13: { chips: 420, mult: 31 }, 14: { chips: 450, mult: 33 }, 15: { chips: 480, mult: 35 },
        ...Array.from({ length: 985 }, (_, i) => ({ [16 + i]: { chips: 480 + (i + 1) * 30, mult: 35 + (i + 1) * 2 } })).reduce((acc, obj) => ({ ...acc, ...obj }), {})
    },
    'Straight Flush': {
        1: { chips: 100, mult: 8 }, 2: { chips: 140, mult: 11 }, 3: { chips: 180, mult: 14 }, 4: { chips: 220, mult: 17 }, 5: { chips: 260, mult: 20 },
        6: { chips: 300, mult: 23 }, 7: { chips: 340, mult: 26 }, 8: { chips: 380, mult: 29 }, 9: { chips: 420, mult: 32 }, 10: { chips: 460, mult: 35 },
        11: { chips: 500, mult: 38 }, 12: { chips: 540, mult: 41 }, 13: { chips: 580, mult: 44 }, 14: { chips: 620, mult: 47 }, 15: { chips: 660, mult: 50 },
        ...Array.from({ length: 985 }, (_, i) => ({ [16 + i]: { chips: 660 + (i + 1) * 40, mult: 50 + (i + 1) * 3 } })).reduce((acc, obj) => ({ ...acc, ...obj }), {})
    },
    'Five of a Kind': { 
        1: { chips: 120, mult: 12 }, 2: { chips: 160, mult: 15 }, 3: { chips: 200, mult: 18 }, 4: { chips: 240, mult: 21 }, 5: { chips: 280, mult: 24 },
        6: { chips: 320, mult: 27 }, 7: { chips: 360, mult: 30 }, 8: { chips: 400, mult: 33 }, 9: { chips: 440, mult: 36 }, 10: { chips: 480, mult: 39 },
        11: { chips: 520, mult: 42 }, 12: { chips: 560, mult: 45 }, 13: { chips: 600, mult: 48 }, 14: { chips: 640, mult: 51 }, 15: { chips: 680, mult: 54 },
        ...Array.from({ length: 985 }, (_, i) => ({ [16 + i]: { chips: 680 + (i + 1) * 40, mult: 54 + (i + 1) * 3 } })).reduce((acc, obj) => ({ ...acc, ...obj }), {})
    },
    'Flush House': {
        1: { chips: 140, mult: 8 }, 2: { chips: 190, mult: 11 }, 3: { chips: 240, mult: 14 }, 4: { chips: 290, mult: 17 }, 5: { chips: 340, mult: 20 },
        6: { chips: 390, mult: 23 }, 7: { chips: 440, mult: 26 }, 8: { chips: 490, mult: 29 }, 9: { chips: 540, mult: 32 }, 10: { chips: 590, mult: 35 },
        11: { chips: 640, mult: 38 }, 12: { chips: 690, mult: 41 }, 13: { chips: 740, mult: 44 }, 14: { chips: 790, mult: 47 }, 15: { chips: 840, mult: 50 },
        ...Array.from({ length: 985 }, (_, i) => ({ [16 + i]: { chips: 840 + (i + 1) * 50, mult: 50 + (i + 1) * 3 } })).reduce((acc, obj) => ({ ...acc, ...obj }), {})
    },
    'Flush Five': { 
        1: { chips: 160, mult: 16 }, 2: { chips: 200, mult: 20 }, 3: { chips: 240, mult: 24 }, 4: { chips: 280, mult: 28 }, 5: { chips: 320, mult: 32 },
        6: { chips: 360, mult: 36 }, 7: { chips: 400, mult: 40 }, 8: { chips: 440, mult: 44 }, 9: { chips: 480, mult: 48 }, 10: { chips: 520, mult: 52 },
        11: { chips: 560, mult: 56 }, 12: { chips: 600, mult: 60 }, 13: { chips: 640, mult: 64 }, 14: { chips: 680, mult: 68 }, 15: { chips: 720, mult: 72 },
        ...Array.from({ length: 985 }, (_, i) => ({ [16 + i]: { chips: 720 + (i + 1) * 40, mult: 72 + (i + 1) * 4 } })).reduce((acc, obj) => ({ ...acc, ...obj }), {})
    }
};