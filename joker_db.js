const JOKER_LIBRARY = [
  {
    id: "joker1",
    name: "Crazy Cat",
    desc: "+130 Chips if played hand contains a Straight",
    img: "images/jokers/Jokers_1_77x100.png",
    
    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Straight"      
      },
      bonus: {
        chips: 130, 
        mult: 0,
        xmult: 1
      }
    }
  },
  {
    id: "joker2",
    name: "ZigZag Kitty",
    desc: "+100 Score if played hand contains a Three of a Kind",
    img: "images/jokers/Jokers_2_77x100.png",
    
    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Three of a Kind"      
      },
      bonus: {
        chips: 100, 
        mult: 0,
        xmult: 1
      }
    }
  },
  {
    id: "joker3",
    name: "Mad Kitty",
    desc: "+100 Score if played hand contains a Two Pair",
    img: "images/jokers/Jokers_3_77x100.png",
    
    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Two Pair"      
      },
      bonus: {
        chips: 100, 
        mult: 0,
        xmult: 1
      }
    }
  },
  {
    id: "joker4",
    name: "Flush Kitty",
    desc: "+10 Mult if played hand contains a Flush",
    img: "images/jokers/Jokers_4_77x100.png",
    
    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Flush"      
      },
      bonus: {
        chips: 0, 
        mult: 10,
        xmult: 1
      }
    }
  },
  {
    id: "joker5",
    name: "Halfie",
    desc: "+21 Mult if Attack contains 3 or fewer cards",
    img: "images/jokers/Jokers_5_77x100.png",
	
    chips: 0,
    mult: 0,
    xmult: 1,

    effect: {
      type: "conditional",
      trigger: "onHandPlay",
      condition: {
        property: "playedCardCount",
        comparison: "<=",
        value: 3
      },
      bonus: {
        chips: 0,
        mult: 21,
        xmult: 1
      }
    }
  },
  {
    id: "joker6",
    name: "Silhouette",
    desc: "1.3x Mult for each empty Joker slot (MANUAL SET)",
    img: "images/jokers/Jokers_6_77x100.png",
    chips: 0, mult: 0, xmult: 1.3, effect: null
  },
  {
    id: "joker7",
    name: "Full House Kitty",
    desc: "+100 Score if played hand contains a Full House",
    img: "images/jokers/Jokers_7_77x100.png",
	
    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Full House"      
      },
      bonus: {
        chips: 100, 
        mult: 0,
        xmult: 1
      }
    }
  },
  {
    id: "joker8",
    name: "Catriple",
    desc: "3x Mult if Attack contains Three of a Kind",
    img: "images/jokers/Jokers_8_77x100.png",
	
    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Three of a Kind"      
      },
      bonus: {
        chips: 0, 
        mult: 0,
        xmult: 3
      }
    }
  },
  {
    id: "joker9",
    name: "Ocat",
    desc: "+1 Gold per face card Discarded",
    img: "images/jokers/Jokers_9_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker10",
    name: "Lincat",
    desc: "+1 Attack if Attack contains a Straight",
    img: "images/jokers/Jokers_10_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker11",
    name: "Go Go Blue Pawer Ranger!",
    desc: "+1 Attack and -1 Discard if Attack contains a Full House",
    img: "images/jokers/Jokers_11_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker12",
    name: "DemoniCat",
    desc: "+21 Mult per 6 scored",
    img: "images/jokers/Jokers_12_77x100.png",
	
    chips: 0,
    mult: 0,
    xmult: 1,

    effect: {
      type: "iterative",
      trigger: "onHandPlay",
      target: "activeHand",
      condition: {
        property: "rank",
        value: "6"
      },
      bonus: {
        chips: 0,
        mult: 21,
        xmult: 1
      }
    }
  },
  {
    id: "joker13",
    name: "Catter Up!",
    desc: "+3 Attacks per turn, set Discard amount to 0",
    img: "images/jokers/Jokers_13_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker14",
    name: "Referee Cat",
    desc: "+1 Attack this turn per Ace of Diamonds discarded",
    img: "images/jokers/Jokers_14_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker15",
    name: "Kat In The Box",
    desc: "Equal chance to -1,-2,-3 Mult or +1, +2 Gold",
    img: "images/jokers/Jokers_15_77x100.png",
	
  chips: 0,
    mult: 0,
    xmult: 1,

    effect: {
      type: "manual_random",
      trigger: "onHandPlay",
      options: [-3, -2, -1, 1],
      bonus_type: "mult"
    }
  },
  {
    id: "joker16",
    name: "Nyaa",
    desc: "+1 Attack this turn if Attack has every suit",
    img: "images/jokers/Jokers_16_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker17",
    name: "Paw Up",
    desc: "+100 Score if Attack contains only Hearts or Diamonds, -100 Score if Attack contains only Clubs or Spades",
    img: "images/jokers/Jokers_17_77x100.png",

  chips: 0,
    mult: 0,
    xmult: 1,

    effect: {
      type: "special_logic",
      trigger: "onHandPlay",
      handler_id: "suit_polarity"
    }
  },
  {
    id: "joker18",
    name: "Gladicator",
    desc: "All cards count as Face Cards",
    img: "images/jokers/Jokers_18_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker19",
    name: "Pulp Feline",
    desc: "+70 Score for each empty Joker slot",
    img: "images/jokers/Jokers_19_77x100.png",
    chips: 70, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker20",
    name: "Royal Cat Guard",
    desc: "Gains 0.3× Mult per face card Discarded",
    img: "images/jokers/Jokers_20_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker21",
    name: "Mystic Cat",
    desc: "+10 Mult if exactly 0 discards remaining",
    img: "images/jokers/Jokers_21_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker22",
    name: "Take My Meowny",
    desc: "+2 Gold if Attack is a High Card",
    img: "images/jokers/Jokers_22_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker23",
    name: "Lucky Campurr",
    desc: "Create a random Lucky card in hand if Attack contains a Four of a Kind",
    img: "images/jokers/Jokers_23_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker24",
    name: "Blooming Kitty",
    desc: "Gains 0.2x Mult if Attack has every suit, loses -0.5x Mult if Attack contains a Flush",
    img: "images/jokers/Jokers_24_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker25",
    name: "Polaroid Cat",
    desc: "Scored face cards give +8 Mult",
    img: "images/jokers/Jokers_25_77x100.png",
	
    chips: 0,
    mult: 0,
    xmult: 1,

    effect: {
      type: "iterative",
      trigger: "onHandPlay",
      target: "activeHand",
      condition: {
        property: "rank",
        operator: "in",
        value: ["J", "Q", "K"]
      },
      bonus: {
        chips: 0,
        mult: 8,
        xmult: 1
      }
    }
  },
  {
    id: "joker26",
    name: "Slice of Cat",
    desc: "Gains +9 Score per 2 scored",
    img: "images/jokers/Jokers_26_77x100.png",
	
    chips: 9,
    mult: 0,
    xmult: 1,

    effect: {
      type: "iterative",
      trigger: "onHandPlay",
      target: "activeHand",
      condition: {
        property: "rank",
        value: "2"
      },
      bonus: {
        chips: 9,
        mult: 0,
        xmult: 1
      }
    }
  },
  {
    id: "joker27",
    name: "Benny & Blue",
    desc: "+1 Discard this turn if Attack has exactly 2 cards",
    img: "images/jokers/Jokers_27_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker28",
    name: "Eggcelent Cat",
    desc: "Destroy played card if Attack has exactly 1 card",
    img: "images/jokers/Jokers_28_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker29",
    name: "Yang Ying",
    desc: "+33 Score per odd card scored",
    img: "images/jokers/Jokers_29_77x100.png",

    chips: 0,
    mult: 0,
    xmult: 1,

    effect: {
      type: "iterative",
      trigger: "onHandPlay",
      target: "activeHand",
      condition: {
        property: "rank",
        operator: "in",
        value: ["A", "3", "5", "7", "9"]
      },
      bonus: {
        chips: 33,
        mult: 0,
        xmult: 1
      }
    }
  },
  {
    id: "joker30",
    name: "Cattening",
    desc: "+1 Attack this turn per 8 of Spades discarded",
    img: "images/jokers/Jokers_30_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker31",
    name: "Furry Ball",
    desc: "Gains 0.18x Mult per Fur card scored",
    img: "images/jokers/Jokers_31_77x100.png",
    chips: 0, mult: 0, xmult: 0.18, effect: null
  },
  {
    id: "joker32",
    name: "Cat Purrgular",
    desc: "+1 Gold per Spade Discarded",
    img: "images/jokers/Jokers_32_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker33",
    name: "Joker 33",
    desc: "Description for Joker 33.",
    img: "images/jokers/Jokers_33_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker34",
    name: "Impurrster!",
    desc: "3 random cards in your hand change to Clubs if Attack is a Three of a Kind and has exactly 3 cards",
    img: "images/jokers/Jokers_34_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker35",
    name: "Impurrfect Wizard",
    desc: "Create 1 random Witchcat card (must have space) if Attack contains a Straight, 3, and 7",
    img: "images/jokers/Jokers_35_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker36",
    name: "Rock Balancat",
    desc: "+2 Gold per Stone card scored",
    img: "images/jokers/Jokers_36_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker37",
    name: "My Purrecious",
    desc: "+5 Gold if first Attack of the battle is only a single Ace",
    img: "images/jokers/Jokers_37_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker38",
    name: "Meowmmy",
    desc: "+30 Score per 3, 6, or 9 scored",
    img: "images/jokers/Jokers_38_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", operator: "in", value: ["3", "6", "9"] }, bonus: { chips: 30 } }
  },
  {
    id: "joker39",
    name: "Popcorn Cat",
    desc: "+110 Score, −5 Score for every Attack",
    img: "images/jokers/Jokers_39_77x100.png",
    chips: 110, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker40",
    name: "Lazy Cat King",
    desc: "Gains +2 Score per face card Discarded",
    img: "images/jokers/Jokers_40_77x100.png",
    chips: 2, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker41",
    name: "Sad Kitty Joker",
    desc: "4x Mult, destroys a random card in your hand each Attack",
    img: "images/jokers/Jokers_41_77x100.png",
    chips: 0, mult: 0, xmult: 4, effect: null
  },
  {
    id: "joker42",
    name: "Googly Kitty",
    desc: "+5 Mult",
    img: "images/jokers/Jokers_42_77x100.png",
    chips: 0, mult: 5, xmult: 1, effect: null
  },
  {
    id: "joker43",
    name: "Banner Joker",
    desc: "+60 Score if 2 or more discards remaining",
    img: "images/jokers/Jokers_43_77x100.png",
    chips: 60, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker44",
    name: "CopyCat",
    desc: "Copies the Joker to the right (only base effects)-(MANUAL SET)",
    img: "images/jokers/Jokers_44_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker45",
    name: "Postman Cat",
    desc: "+1 hand size",
    img: "images/jokers/Jokers_45_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker46",
    name: "Cool Cat",
    desc: "Gains +6 Score if Attack is a High Card",
    img: "images/jokers/Jokers_46_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "playedCardCount", comparison: "<=", value: 1 }, bonus: { chips: 6 } }
  },
  {
    id: "joker47",
    name: "Ghost Cat",
    desc: "+2 Gold per Discard",
    img: "images/jokers/Jokers_47_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker48",
    name: "Sneaky Burglar Cat",
    desc: "Gives +12 Score for each 2 and 7 in Deck",
    img: "images/jokers/Jokers_48_77x100.png",
    chips: 12, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker49",
    name: "TripleMeow",
    desc: "3× Mult on final Attack of the turn",
    img: "images/jokers/Jokers_49_77x100.png",
    chips: 0, mult: 0, xmult: 3, effect: null
  },
  {
    id: "joker50",
    name: "Cat Furtune",
    desc: "+70 Score and +7 Mult per 7 scored",
    img: "images/jokers/Jokers_50_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", value: "7" }, bonus: { chips: 70, mult: 7 } }
  },
  {
    id: "joker51",
    name: "GreedyCat",
    desc: "+4 Gold if Attack contains a Straight, Full House, or Flush",
    img: "images/jokers/Jokers_51_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker52",
    name: "Meowen",
    desc: "Random +0 to +6 Mult for first 3 Attacks of the battle",
    img: "images/jokers/Jokers_52_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "manual_random", trigger: "onHandPlay", options: [0, 1, 2, 3, 4, 5, 6], bonus_type: "mult" }
  },
  {
    id: "joker53",
    name: "VampireCat",
    desc: "+2 Health per Heart scored",
    img: "images/jokers/Jokers_53_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker54",
    name: "Go Go Green Pawer Ranger",
    desc: "0.06x Mult applied to scored Seal cards",
    img: "images/jokers/Jokers_54_77x100.png",
    chips: 0, mult: 0, xmult: 0.06, effect: null
  },
  {
    id: "joker55",
    name: "Cat Cupid",
    desc: "Gains 0.1x Mult per Queen Discarded",
    img: "images/jokers/Jokers_55_77x100.png",
    chips: 0, mult: 0, xmult: 0.1, effect: null
  },
  {
    id: "joker56",
    name: "Pawphecy",
    desc: "Create two random Rare or Legendary Jokers (must have space) if Attack is a Straight Flush, destroy this Joker",
    img: "images/jokers/Jokers_56_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker57",
    name: "Penguicat",
    desc: "Gains +10 Score per Jack Discarded (caps at 1000)",
    img: "images/jokers/Jokers_57_77x100.png",
    chips: 10, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker58",
    name: "Sharkey & Catty",
    desc: "Gains +0.5 Mult per card scored, loses -1 Mult per card Discarded",
    img: "images/jokers/Jokers_58_77x100.png",
    chips: 0, mult: 0.5, xmult: 1, effect: null
  },
  {
    id: "joker59",
    name: "Big Paw",
    desc: "Gives 0.2x Mult for each Wild card in Deck",
    img: "images/jokers/Jokers_59_77x100.png",
    chips: 0, mult: 0, xmult: 0.2, effect: null
  },
  {
    id: "joker60",
    name: "ComediCat",
    desc: "125 Score, -25 Score for each empty joker slot",
    img: "images/jokers/Jokers_60_77x100.png",
    chips: 125, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker61",
    name: "CuteCat",
    desc: "Gives +10 Score for each Spades in Deck",
    img: "images/jokers/Jokers_61_77x100.png",
    chips: 10, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker62",
    name: "Educated",
    desc: "+4 Mult per 3, 6, 10, or Ace scored",
    img: "images/jokers/Jokers_62_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", operator: "in", value: ["A", "3", "6", "10"] }, bonus: { mult: 4 } }
  },
  {
    id: "joker63",
    name: "PopeCat",
    desc: "+5 Mult per 7, 10, or Queen scored",
    img: "images/jokers/Jokers_63_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", operator: "in", value: ["7", "10", "Q"] }, bonus: { mult: 5 } }
  },
  {
    id: "joker64",
    name: "SmugglerCat",
    desc: "Gives 4x Mult if played hand contains a Four of a Kind",
    img: "images/jokers/Jokers_64_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "handType", value: "Four of a Kind" }, bonus: { xmult: 4 } }
  },
  {
    id: "joker65",
    name: "Diamond Miner Cat",
    desc: "Gains 0.09x Mult for each Diamond in Deck",
    img: "images/jokers/Jokers_65_77x100.png",
    chips: 0, mult: 0, xmult: 0.09, effect: null
  },
  {
    id: "joker66",
    name: "Meowstler",
    desc: "20% chance to gain +1 Attack, 80% chance to lose -1 Health if Attack is a High Card",
    img: "images/jokers/Jokers_66_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker67",
    name: "Jester Cat",
    desc: "Scored card give: +12 Score",
    img: "images/jokers/Jokers_67_77x100.png",
    chips: 12, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker68",
    name: "Diamond Kitty",
    desc: "Scored Diamond cards give: +3 Mult",
    img: "images/jokers/Jokers_68_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "suit", value: "d" }, bonus: { mult: 3 } }
  },
  {
    id: "joker69",
    name: "Hearty Kitty",
    desc: "Scored Heart cards give: +3 Mult",
    img: "images/jokers/Jokers_69_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "suit", value: "h" }, bonus: { mult: 3 } }
  },
  {
    id: "joker70",
    name: "Catboard Box",
    desc: "10% chance to +15 Mult, 90% chance to +1 Gold if Attack has exactly 4 cards",
    img: "images/jokers/Jokers_70_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "manual_probabilistic", trigger: "onHandPlay", condition: { property: "playedCardCount", comparison: "===", value: 4 }, probability: 0.10, bonus: { mult: 15 } }
  },
  {
    id: "joker71",
    name: "Cat of Spades",
    desc: "Scored Spades cards give: +3 Mult",
    img: "images/jokers/Jokers_71_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "suit", value: "s" }, bonus: { mult: 3 } }
  },
  {
    id: "joker72",
    name: "Clubby Cat",
    desc: "Scored Club cards give: +3 Mult",
    img: "images/jokers/Jokers_72_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "suit", value: "c" }, bonus: { mult: 3 } }
  },
  {
    id: "joker73",
    name: "MimiCat",
    desc: "Retrigger Face Cards",
    img: "images/jokers/Jokers_73_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "special_logic", trigger: "onHandPlay", handler_id: "retrigger_face_cards" }
  },
  {
    id: "joker74",
    name: "BananaCat",
    desc: "+1 Discard this turn and +2 Gold if attack contains a Straight",
    img: "images/jokers/Jokers_74_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker75",
    name: "Homeless Cat",
    desc: "Gains 0.3x Mult if Attack contains a Straight, -3 Gold if Attack contains a Straight",
    img: "images/jokers/Jokers_75_77x100.png",
    chips: 0, mult: 0, xmult: 0.3,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "handType", value: "Straight" }, bonus: { xmult: 0.3 } }
  },
  {
    id: "joker76",
    name: "Diamond Catue",
    desc: "Diamonds give +1 Gold when scored",
    img: "images/jokers/Jokers_76_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker77",
    name: "Rainbow Jester Cat",
    desc: "3x Mult if Attack has every suit",
    img: "images/jokers/Jokers_77_77x100.png",
    chips: 0, mult: 0, xmult: 3, effect: null
  },
  {
    id: "joker78",
    name: "Pawn On Moon",
    desc: "+1 Attack per turn",
    img: "images/jokers/Jokers_78_77x100.png",
    chips: 0, mult: 12, xmult: 1, effect: null
  },
  {
    id: "joker79",
    name: "Catrobatics",
    desc: "+12 Mult if more than 2 Attacks remaining",
    img: "images/jokers/Jokers_79_77x100.png",
    chips: 0, mult: 12, xmult: 1, effect: null
  },
  {
    id: "joker80",
    name: "Furtune Cat",
    desc: "Gains +8 Score per 3 played",
    img: "images/jokers/Jokers_80_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", value: "3" }, bonus: { chips: 8 } }
  },
  {
    id: "joker81",
    name: "Kwazy Kat",
    desc: "Allows duplicate Jokers to show up in shop and boosters",
    img: "images/jokers/Jokers_81_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker82",
    name: "Meowzilla",
    desc: "3X Mult on first Attack of the battle",
    img: "images/jokers/Jokers_82_77x100.png",
    chips: 0, mult: 0, xmult: 3, effect: null
  },
  {
    id: "joker83",
    name: "Playful Kitty",
    desc: "20% chance to create a random Toy Card (must have space) per Attack",
    img: "images/jokers/Jokers_83_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker84",
    name: "Oogamewo",
    desc: "Retrigger Enhanced cards",
    img: "images/jokers/Jokers_84_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "special_logic", trigger: "onHandPlay", handler_id: "retrigger_enhanced_cards" }
  },
  {
    id: "joker85",
    name: "Flip The Table!",
    desc: "Increase the Rank of cards remaining in your hand by 1 if Attack contains a Flush",
    img: "images/jokers/Jokers_85_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker86",
    name: "Catfused",
    desc: "First Attack of the turn has an equal chance to: +1 Discard, -2 Gold, +2x Mult or -1000 Score",
    img: "images/jokers/Jokers_86_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "manual_first_hand_random", trigger: "onHandPlay", options: [ { value: "mult_x2", text: "+2x Mult" }, { value: "chips_-1000", text: "-1000 Chips" }, { value: "none", text: "Other/No Effect" } ], default_value: "none" }
  },
  {
    id: "joker87",
    name: "Smiley Catmicon",
    desc: "+25 Score per face card scored",
    img: "images/jokers/Jokers_87_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", operator: "in", value: ["J", "Q", "K"] }, bonus: { chips: 25 } }
  },
  {
    id: "joker88",
    name: "Purresent",
    desc: "Add a random enhanced card to your hand if Attack contains a Straight",
    img: "images/jokers/Jokers_88_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker89",
    name: "Kungfeline",
    desc: "Gains 0.15x Mult for each Enhanced card in Deck",
    img: "images/jokers/Jokers_89_77x100.png",
    chips: 0, mult: 0, xmult: 0.15, effect: null
  },
  {
    id: "joker90",
    name: "Carrot Cat",
    desc: "Gives +8 Score for each 3, 4, and 5 in Deck",
    img: "images/jokers/Jokers_90_77x100.png",
    chips: 8, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker91",
    name: "Angwy Cat",
    desc: "+101 Score if 0 Discards remaining",
    img: "images/jokers/Jokers_91_77x100.png",
    chips: 101, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker92",
    name: "Cycat",
    desc: "+5 Mult per Ace or 10 scored",
    img: "images/jokers/Jokers_92_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", operator: "in", value: ["A", "10"] }, bonus: { mult: 5 } }
  },
  {
    id: "joker93",
    name: "Furrtune Teller",
    desc: "Create a random Diety Card (must have space) if Attack contains Four of a Kind",
    img: "images/jokers/Jokers_93_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker94",
    name: "Five Ferocious Felines",
    desc: "7x Mult on every 5th Attack of the battle",
    img: "images/jokers/Jokers_94_77x100.png",
    chips: 0, mult: 0, xmult: 7, effect: null
  },
  {
    id: "joker95",
    name: "Pixelcat",
    desc: "Gives 0.03x Mult for each face card in Deck",
    img: "images/jokers/Jokers_95_77x100.png",
    chips: 0, mult: 0.09, xmult: 0, effect: null
  },
  {
    id: "joker96",
    name: "Kat-Boom",
    desc: "+7 Mult per face card scored, destroys each face card scored",
    img: "images/jokers/Jokers_96_77x100.png",
    chips: 0, mult: 7, xmult: 1, effect: null
  },
  {
    id: "joker97",
    name: "Ying Yang",
    desc: "+4 Mult per even card scored",
    img: "images/jokers/Jokers_97_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", operator: "in", value: ["2", "4", "6", "8", "10"] }, bonus: { mult: 4 } }
  },
  {
    id: "joker98",
    name: "Nerd Cat Squared",
    desc: "0.7x Mult for each 4, 9, or Ace scored",
    img: "images/jokers/Jokers_98_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", operator: "in", value: ["A", "4", "9"] }, bonus: { xmult: 1.7 } }
  },
  {
    id: "joker99",
    name: "Pawstronaut",
    desc: "+1 Discard if Attack is only a single Ace",
    img: "images/jokers/Jokers_99_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker100",
    name: "Stone Age Cat",
    desc: "Gains 0.15x Mult for each Stone card scored",
    img: "images/jokers/Jokers_100_77x100.png",
    chips: 0, mult: 0, xmult: 0.15, effect: null
  },
  {
    id: "joker101",
    name: "Stucky Cat Box",
    desc: "Gains x0.04 Mult if Attack has exactly 1 card",
    img: "images/jokers/Jokers_101_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "playedCardCount", comparison: "<=", value: 1 }, bonus: { chips: 8 } }
  },
  {
    id: "joker102",
    name: "Reckless Cat",
    desc: "3.3x Mult, -0.2x Mult for every Attack",
    img: "images/jokers/Jokers_102_77x100.png",
    chips: 0, mult: 0, xmult: 3.3, effect: null
  },
  {
    id: "joker103",
    name: "Oh Meow!",
    desc: "Jacks, Queens, Kings, and Aces score on Discard",
    img: "images/jokers/Jokers_103_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker104",
    name: "Boxing Cat",
    desc: "+17 Mult if Attack has exactly 4 cards",
    img: "images/jokers/Jokers_104_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "playedCardCount", comparison: "===", value: 4 }, bonus: { mult: 17 } }
  },
  {
    id: "joker105",
    name: "Need A Paw?",
    desc: "15% chance to duplicate a card from Deck to your hand if Attack has 5 cards",
    img: "images/jokers/Jokers_105_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker106",
    name: "Meowsers",
    desc: "5x Mult if Attack contains a 2 and a 7",
    img: "images/jokers/Jokers_106_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "special_logic", trigger: "onHandPlay", handler_id: "meowsers_2_and_7" }
  },
  {
    id: "joker107",
    name: "Double Glasses",
    desc: "Retrigger 2, 3, 4 and 5s",
    img: "images/jokers/Jokers_107_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: { type: "special_logic", trigger: "onHandPlay", handler_id: "retrigger_2_3_5" }
  },
  {
    id: "joker108",
    name: "Dollar Ramen Cat",
    desc: "Gains +10 Score per Ace Discarded",
    img: "images/jokers/Jokers_108_77x100.png",
    chips: 10, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker109",
    name: "Colacat",
    desc: "+3 Mult per Diamond or Hearts scored",
    img: "images/jokers/Jokers_109_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "suit", operator: "in", value: ["h", "d"] }, bonus: { mult: 3 } } // Diperbaiki: value: ["h", "d"]
  },
  {
    id: "joker110",
    name: "Furlix The Cat",
    desc: "Create a random Fur card in hand if Attack contains a Four of aKind",
    img: "images/jokers/Jokers_110_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker111",
    name: "Catfish",
    desc: "30% chance to 18x Mult",
    img: "images/jokers/Jokers_111_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "manual_probabilistic", trigger: "onHandPlay", probability: 0.30, bonus: { xmult: 18 } }
  },
  {
    id: "joker112",
    name: "Credit Card Joker",
    desc: "Can go $25 into debt",
    img: "images/jokers/Jokers_112_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker113",
    name: "Sandy and Buck the Bull",
    desc: "Gains 0.7x Mult if Attack contains Straight, loses -0.4x Mult if Attack is a High Card",
    img: "images/jokers/Jokers_113_77x100.png",
    chips: 0, mult: 0, xmult: 0.7, effect: null
  },
  {
    id: "joker114",
    name: "Catbros",
    desc: "2x Mult if Attack contains a Pair",
    img: "images/jokers/Jokers_114_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "handType", value: "Pair" }, bonus: { xmult: 2 } }
  },
  {
    id: "joker115",
    name: "Catard",
    desc: "Retriggers 2s, 3s, 4s, 5s, 6s, 7s, 8s, and Aces",
    img: "images/jokers/Jokers_115_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: { type: "special_logic", trigger: "onHandPlay", handler_id: "retrigger_low_ranks" }
  },
  {
    id: "joker116",
    name: "Cat Fam",
    desc: "2x Mult if Attack contains a Two Pair",
    img: "images/jokers/Jokers_116_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "handType", value: "Two Pair" }, bonus: { xmult: 2 } }
  },
  {
    id: "joker117",
    name: "Full Basket",
    desc: "2x Mult if Attack contains a Full House",
    img: "images/jokers/Jokers_117_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "handType", value: "Full House" }, bonus: { xmult: 2 } }
  },
  {
    id: "joker118",
    name: "Pokat",
    desc: "Gives 0.1x Mult for each Ace in Deck",
    img: "images/jokers/Jokers_118_77x100.png",
    chips: 0, mult: 0, xmult: 0.1, effect: null
  },
  {
    id: "joker119",
    name: "Zoora",
    desc: "3x Mult on every 3rd Attack of the battle",
    img: "images/jokers/Jokers_119_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker120",
    name: "Kola Kat",
    desc: "+3 Mult per Spade or Club scored",
    img: "images/jokers/Jokers_120_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "suit", operator: "in", value: ["s", "c"] }, bonus: { mult: 3 } }
  },
  {
    id: "joker121",
    name: "Focus Feline",
    desc: "Half Score, 2x Mult",
    img: "images/jokers/Jokers_121_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker122",
    name: "Tora",
    desc: "Create a random Witchcat card (must have space) if first Attack is only a single 8",
    img: "images/jokers/Jokers_122_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker123",
    name: "Catman!",
    desc: "Gains 0.15x Mult if Attack contains a 2 and 7",
    img: "images/jokers/Jokers_123_77x100.png",
    chips: 0, mult: 0, xmult: 0.15, effect: null
  },
  {
    id: "joker124",
    name: "Everything Is Feline",
    desc: "4x Mult on every 4th Discard of the battle",
    img: "images/jokers/Jokers_124_77x100.png",
    chips: 0, mult: 0, xmult: 4, effect: null
  },
  {
    id: "joker125",
    name: "Torini",
    desc: "6x Mult if Attack contains a Jack, Queen, and King",
    img: "images/jokers/Jokers_125_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "special_logic", trigger: "onHandPlay", handler_id: "torini_jqk" }
  },
  {
    id: "joker126",
    name: "Purrfect Cut",
    desc: "2x Score, half Mult",
    img: "images/jokers/Jokers_126_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker127",
    name: "Kora",
    desc: "Create a Deity Card (must have space) per 4 scored if Attack is only a single 4",
    img: "images/jokers/Jokers_127_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker138",
    name: "Balbino Catino",
    desc: "Playing a 4 Of Kind will give you a random Toy Card (Must have space)",
    img: "images/jokers/Jokers2_8.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker139",
    name: "Shapes The Legendary Turtle",
    desc: "Four of a Kind gives +2x Mult",
    img: "images/jokers/Jokers2_9.png",
	
    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Four of a Kind"      
      },
      bonus: {
        chips: 0, 
        mult: 0,
        xmult: 2
      }
    }
  },
  {
    id: "joker140",
    name: "Joker 105",
    desc: "Description for Joker 105.",
    img: "images/jokers/Jokers2_10.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker141",
    name: "Joker 106",
    desc: "Description for Joker 106.",
    img: "images/jokers/Jokers2_11.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker142",
    name: "Joker 107",
    desc: "Description for Joker 107.",
    img: "images/jokers/Jokers2_12.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker143",
    name: "Tyrancat",
    desc: "+1 Attack this turn and +5 Gold per King scored, destroys each King scored",
    img: "images/jokers/Jokers2_13.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker144",
    name: "Midas",
    desc: "Gains 0.2x Mult per Gold card scored",
    img: "images/jokers/Jokers2_14.png",
    chips: 0, mult: 0, xmult: 0.2, effect: null
  },
  {
    id: "joker145",
    name: "Catsle",
    desc: "6x Mult if Attack contains only a Jack, a Queen, and a King",
    img: "images/jokers/Jokers2_15.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker146",
    name: "Tubby Greed",
    desc: "Pair Attacks do no damage but give +3 Gold",
    img: "images/jokers/Jokers2_16.png",

    chips: 0, 
    mult: 0, 
    xmult: 0,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Pair"      
      },
      bonus: {
        chips: 0, 
        mult: 0,
        xmult: 0
      }
    }
  },
  {
    id: "joker147",
    name: "What The Cat!",
    desc: "4x Mult if Attack has 5 Odd cards or 5 Even cards",
    img: "images/jokers/Jokers2_17.png",
    chips: 0, mult: 0, xmult: 1, 
    effect: { 
      type: "special_logic", 
      trigger: "onHandPlay", 
      handler_id: "odd_even_full_hand" 
    }
  },
  {
    id: "joker148",
    name: "Chubby Flush Cat",
    desc: "+120 Score if played hand contains a Flush",
    img: "images/jokers/Jokers2_18.png",

    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Flush"      
      },
      bonus: {
        chips: 120, 
        mult: 0,
        xmult: 1
      }
    }
  },
  {
    id: "joker149",
    name: "Joker 114",
    desc: "Description for Joker 114.",
    img: "images/jokers/Jokers2_19.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker150",
    name: "Joker 115",
    desc: "Description for Joker 115.",
    img: "images/jokers/Jokers2_20.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker151",
    name: "Joker 116",
    desc: "Description for Joker 116.",
    img: "images/jokers/Jokers2_21.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker152",
    name: "Joker 117",
    desc: "Description for Joker 117.",
    img: "images/jokers/Jokers2_22.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker153",
    name: "Joker 118",
    desc: "Description for Joker 118.",
    img: "images/jokers/Jokers2_23.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker154",
    name: "Crazy Chubby Cat",
    desc: "+12 Mult if played hand contains a Straight",
    img: "images/jokers/Jokers2_24.png",

    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Straight"      
      },
      bonus: {
        chips: 0, 
        mult: 12,
        xmult: 1
      }
    }
  },
  {
    id: "joker155",
    name: "ZigZag Chubby Cat",
    desc: "+12 Mult if played hand contains a Three of a Kind",
    img: "images/jokers/Jokers2_25.png",
    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Three of a Kind"      
      },
      bonus: {
        chips: 0, 
        mult: 12,
        xmult: 1
      }
    }
  },
  {
    id: "joker156",
    name: "Chubby Mad Joker",
    desc: "+14 Mult if played hand contains a Two Pair",
    img: "images/jokers/Jokers2_26.png",

    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Two Pair"      
      },
      bonus: {
        chips: 0, 
        mult: 14,
        xmult: 1
      }
    }
  },
  {
    id: "joker157",
    name: "Chubby Jolly",
    desc: "+8 Mult if played hand contains a Pair",
    img: "images/jokers/Jokers2_27.png",

    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Pair"      
      },
      bonus: {
        chips: 0, 
        mult: 8,
        xmult: 1
      }
    }
  },
  {
    id: "joker158",
    name: "Joker 123",
    desc: "Description for Joker 123.",
    img: "images/jokers/Jokers2_28.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker159",
    name: "Pair of Kitties",
    desc: "+4 Health and +4 Mult if attack contains a Pair",
    img: "images/jokers/Jokers2_29.png",

    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Pair"      
      },
      bonus: {
        chips: 0, 
        mult: 4,
        xmult: 1
      }
    }
  },
  {
    id: "joker160",
    name: "3 Together",
    desc: "+60 Score and +10 Mult per 3 scored",
    img: "images/jokers/Jokers2_30.png",

    chips: 0,
    mult: 0,
    xmult: 1,

    effect: {
      type: "iterative",
      trigger: "onHandPlay",
      target: "activeHand",
      condition: {
        property: "rank",
        value: "3"
      },
      bonus: {
        chips: 60,
        mult: 10,
        xmult: 1
      }
    }
  },
  {
    id: "joker161",
    name: "Thinking Smart",
    desc: "Create a random Diety card (must have space) if Attack contains a Straight and an Ace",
    img: "images/jokers/Jokers2_31.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker162",
    name: "Catten-hut!",
    desc: "4x Mult if Attack contains a 5 and 7",
    img: "images/jokers/Jokers2_32.png",

    chips: 0,
    mult: 0,
    xmult: 1,

    effect: {
      type: "special_logic",
      trigger: "onHandPlay",
      handler_id: "meowsers_5_and_7"
    }
  },
  {
    id: "joker163",
    name: "Dark Hissidius",
    desc: "2 random cards in your hand change to Spades if Attack contains a Flush of Hearts",
    img: "images/jokers/Jokers2_33.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker164",
    name: "Hi, Meow!",
    desc: "+130 Score on first 2 Attacks of turn",
    img: "images/jokers/Jokers2_34.png",
    chips: 150, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker165",
    name: "Purr Purr?",
    desc: "Gains 0.1x Mult if Attack contains a Two Pair",
    img: "images/jokers/Jokers2_35.png",
    chips: 0, mult: 0, xmult: 0.1, effect: null
  },
  {
    id: "joker166",
    name: "Bad Fur Day",
    desc: "Jacks, Queens, and Kings have Fur enhancement",
    img: "images/jokers/Jokers2_36.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker167",
    name: "Kitty Gambler",
    desc: "Retrigger Lucky cards twice",
    img: "images/jokers/Jokers2_37.png",
    chips: 0, mult: 0, xmult: 1, 
    effect: { type: "special_logic", trigger: "onHandPlay", handler_id: "retrigger_lucky_cards" }
  },
  {
    id: "joker168",
    name: "Typing Paws",
    desc: "3x Mult if 0 Discards used this battle",
    img: "images/jokers/Jokers2_38.png",
    chips: 0, mult: 0, xmult: 3, effect: null
  },
  {
    id: "joker169",
    name: "Eepy Time!",
    desc: "Gains +10 Score if Attack has exactly 1 card",
    img: "images/jokers/Jokers2_39.png",
    chips: 0.1, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker170",
    name: "Feline Fine",
    desc: "Gives 0.03x Mult for each non-face card in Deck",
    img: "images/jokers/Jokers2_40.png",
    chips: 0, mult: 0, xmult: 0.03, effect: null
  },
  {
    id: "joker171",
    name: "BAM! You Are Cooking",
    desc: "Create 3 Uncommon or greater rarity Jokers if final Attack of the turn contains Four of a Kind, destroy this Joker",
    img: "images/jokers/Jokers2_41.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker172",
    name: "Andy The Cat",
    desc: "+15 Mult if no Discards have been used this battle",
    img: "images/jokers/1-AndyTheCat.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker173",
    name: "Camping Catty",
    desc: "+5 Gold on final Attack of the turn",
    img: "images/jokers/2-CampingCatty.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker174",
    name: "Catruck",
    desc: "Gains +10 Score per card scored, loses -10 Score per card Discarded",
    img: "images/jokers/3-Catruck.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker175",
    name: "Catvolver",
    desc: "3x Mult if Attack contains a Straight",
    img: "images/jokers/4-Catvolver.png",
    
    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Straight"      
      },
      bonus: {
        chips: 0, 
        mult: 0,
        xmult: 3
      }
    }
  },
  {
    id: "joker176",
    name: "Caught On Camera",
    desc: "Gains 0.05x Mult if Attack contains a Pair",
    img: "images/jokers/5-CaughtOnCamera.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker177",
    name: "Full House Chubby",
    desc: "+35 Mult if played hand contains a Full House",
    img: "images/jokers/6-FullHouseChubby.png",
	
    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Full House"      
      },
      bonus: {
        chips: 0, 
        mult: 35,
        xmult: 1
      }
    }
  },
  {
    id: "joker178",
    name: "Grim Reapurr",
    desc: "Destroy played card if first Attack in the turn has exactly 1 card and all Discards remaining",
    img: "images/jokers/7-GrimReapurr.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker179",
    name: "Jolly Cat",
    desc: "+45 Score if played hand contains a Pair",
    img: "images/jokers/8-JollyCat.png",
	
    chips: 0, 
    mult: 0, 
    xmult: 1,

    effect: {
      type: "conditional", 
      trigger: "onHandPlay", 
      condition: {
        property: "handType", 
        value: "Pair"      
      },
      bonus: {
        chips: 45, 
        mult: 0,
        xmult: 1
      }
    }
  },
  {
    id: "joker180",
    name: "Luckat",
    desc: "+2 Gold per 7 Discarded",
    img: "images/jokers/9-Luckat.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker181",
    name: "Prat The Army Cat",
    desc: "-1 hand size, +1 Attack",
    img: "images/jokers/10-PratTheArmyCat.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker182",
    name: "Tired Catventurer",
    desc: "Destroy played card if first Attack in the turn has exactly 1 non-face card, create a random face card in hand",
    img: "images/jokers/11-TiredCatventurer.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker183",
    name: "Torri",
    desc: "x7 Mult if Attack contains a 6, 7, and 8",
    img: "images/jokers/12-Torri.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker184",
    name: "Zombine",
    desc: "+1 Discard this turn per Fur card discarded",
    img: "images/jokers/13-Zombine.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  }
];
