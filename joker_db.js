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
    name: "ZigZag Kity",
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
    name: "Mad Kity",
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
    name: "Flush Kity",
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
    desc: "+21 Mult if played hand contains 2 or fewer cards",
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
        value: 2
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
    desc: "+1.3x Mult for every empty Joker slot (MANUAL SET)",
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
    desc: "+3x Mult if played hand contains Three of a Kind",
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
    desc: "Gain +1 Gold for every J, Q or K Discarded",
    img: "images/jokers/Jokers_9_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker10",
    name: "Lincat",
    desc: "A Straight gives 1 bonus attack this round",
    img: "images/jokers/Jokers_10_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker11",
    name: "Go Go Blue Pawer Ranger!",
    desc: "Full Houses give 1 bonus Attack and minus 1 Discard this turn",
    img: "images/jokers/Jokers_11_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker12",
    name: "DemoniCat",
    desc: "+21 Mult per 6 Scored",
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
    desc: "Removes all Discards and gives you 3 bonus Attacks per turn",
    img: "images/jokers/Jokers_13_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker14",
    name: "Referee Cat",
    desc: "Discarding an Ace of Diamonds gives +1 Attack for this turn",
    img: "images/jokers/Jokers_14_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker15",
    name: "Kat In The Box",
    desc: "Every hand has an equal chance to give -1, -2, -3 Mult or +1, +2 Golds.",
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
    desc: "If the Scoring hand has One of Each Suit gain 1 extra Attack.",
    img: "images/jokers/Jokers_16_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker17",
    name: "Paw Up",
    desc: "+100 Chips if hand is only Hearts/Diamonds. -100 Chips if hand is only Clubs/Spades.",
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
    desc: "70 Score for every Empty Joker slot",
    img: "images/jokers/Jokers_19_77x100.png",
    chips: 70, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker20",
    name: "Royal Cat Guard",
    desc: "Discarded Face Cards will add 0.3 Mult",
    img: "images/jokers/Jokers_20_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker21",
    name: "Mystic Cat",
    desc: "+10 Mult if discards remaining is exactly 0",
    img: "images/jokers/Jokers_21_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker22",
    name: "Take My Meowny",
    desc: "Description for Joker 22.",
    img: "images/jokers/Jokers_22_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker23",
    name: "Lucky Campurr",
    desc: "Four of a Kind will add a random Lucky card to your hand",
    img: "images/jokers/Jokers_23_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker24",
    name: "Blooming Kitty",
    desc: "If the Scoring hand has One of Each Suit this card gains 0.2x Mult. It loses -0.5x Mult for every Flush played.",
    img: "images/jokers/Jokers_24_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker25",
    name: "Polaroid Cat",
    desc: "Scored face cards give +6 Mult",
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
        mult: 6,
        xmult: 1
      }
    }
  },
  {
    id: "joker26",
    name: "Slice of Cat",
    desc: "Scored 2 give this card +9 Score",
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
    desc: "Add 1 Discard to this turn if played hand is exactly 2 cards",
    img: "images/jokers/Jokers_27_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker28",
    name: "Eggcelent Cat",
    desc: "If a single card is played, it is destroyed.",
    img: "images/jokers/Jokers_28_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker29",
    name: "Yang Ying",
    desc: "Odd cards give +33 Score",
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
    desc: "Discarding an 8 of Spades gives +1 Attack for this turn",
    img: "images/jokers/Jokers_30_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker31",
    name: "Furry Ball",
    desc: "Gains x0.18 for every Fur card scored",
    img: "images/jokers/Jokers_31_77x100.png",
    chips: 0, mult: 0, xmult: 0.18, effect: null
  },
  {
    id: "joker32",
    name: "Cat Purrgular",
    desc: "Every Spades you Discard gives you +1 Gold",
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
    desc: "If exactly 3 cards are played and is a Three of a Kind, three Random cards in your hand change to Clubs",
    img: "images/jokers/Jokers_34_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker35",
    name: "Impurrfect Wizard",
    desc: "A Straight including a 3 and 7 will give you one Witchcat card (Must have space)",
    img: "images/jokers/Jokers_35_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker36",
    name: "Rock Balancat",
    desc: "Scored Stone cards gives +2 Gold",
    img: "images/jokers/Jokers_36_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker37",
    name: "My Purrecious",
    desc: "First hand played this battle is a single Ace you get 5 Gold",
    img: "images/jokers/Jokers_37_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker38",
    name: "Joker 38",
    desc: "Description for Joker 38.",
    img: "images/jokers/Jokers_38_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker39",
    name: "Popcorn Cat",
    desc: "+110 Score. -5 Score for every hand played",
    img: "images/jokers/Jokers_39_77x100.png",
    chips: 110, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker40",
    name: "Lazy Cat King",
    desc: "Gains +2 Score per Face Card Discarded",
    img: "images/jokers/Jokers_40_77x100.png",
    chips: 2, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker41",
    name: "Sad Kitty Joker",
    desc: "x4 Mult. Every Attack destroys a Random card in your hand.",
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
    desc: "+60 Score if discards remaining is 2 or more",
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
    desc: "Gives you +1 Hand Size",
    img: "images/jokers/Jokers_45_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker46",
    name: "Cool Cat",
    desc: "Gains 6 Score for every played hand that is exactly 1 card.",
    img: "images/jokers/Jokers_46_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "playedCardCount", comparison: "<=", value: 1 }, bonus: { chips: 6 } }
  },
  {
    id: "joker47",
    name: "Ghost Cat",
    desc: "Every time you Discard you gain +2 Gold",
    img: "images/jokers/Jokers_47_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker48",
    name: "Sneaky Burglar Cat",
    desc: "12 Score for each 2 or 7 in Deck",
    img: "images/jokers/Jokers_48_77x100.png",
    chips: 12, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker49",
    name: "TripleMeow",
    desc: "Last Attack of the round is x3 Mult",
    img: "images/jokers/Jokers_49_77x100.png",
    chips: 0, mult: 0, xmult: 3, effect: null
  },
  {
    id: "joker50",
    name: "Cat Furtune",
    desc: "+7 Mult and 70 Score per 7 Scored",
    img: "images/jokers/Jokers_50_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", value: "7" }, bonus: { chips: 70, mult: 7 } }
  },
  {
    id: "joker51",
    name: "GreedyCat",
    desc: "Straight, Full House and Flush gives 4 Golds",
    img: "images/jokers/Jokers_51_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker52",
    name: "Meowen",
    desc: "First Three Attacks adds a random Mult between 0–6",
    img: "images/jokers/Jokers_52_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "manual_random", trigger: "onHandPlay", options: [0, 1, 2, 3, 4, 5, 6], bonus_type: "mult" }
  },
  {
    id: "joker53",
    name: "VampireCat",
    desc: "Scored Hearts give 2 health.",
    img: "images/jokers/Jokers_53_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker54",
    name: "Go Go Green Pawer Ranger",
    desc: "Scored Seals give this card 0.06x Mult",
    img: "images/jokers/Jokers_54_77x100.png",
    chips: 0, mult: 0, xmult: 0.06, effect: null
  },
  {
    id: "joker55",
    name: "Cat Cupid",
    desc: "Adds x0.1 Mult Per Queen Discarded",
    img: "images/jokers/Jokers_55_77x100.png",
    chips: 0, mult: 0, xmult: 0.1, effect: null
  },
  {
    id: "joker56",
    name: "Pawphecy",
    desc: "If played hand is Straight Flush, this Joker is destroyed. Create two random high rarity Jokers (Need space)",
    img: "images/jokers/Jokers_56_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker57",
    name: "Penguicat",
    desc: "Adds 10 Score Per Jack Discarded (caps at 1000)",
    img: "images/jokers/Jokers_57_77x100.png",
    chips: 10, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker58",
    name: "Sharkey & Catty",
    desc: "+0.5 Mult per card Scored. -1 Mult per card Discarded",
    img: "images/jokers/Jokers_58_77x100.png",
    chips: 0, mult: 0.5, xmult: 1, effect: null
  },
  {
    id: "joker59",
    name: "Big Paw",
    desc: "Gives x0.2 Mult for each Wild Card in your Deck",
    img: "images/jokers/Jokers_59_77x100.png",
    chips: 0, mult: 0, xmult: 0.2, effect: null
  },
  {
    id: "joker60",
    name: "ComediCat",
    desc: "125 Score. Loses 25 for every empty joker slot.",
    img: "images/jokers/Jokers_60_77x100.png",
    chips: 125, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker61",
    name: "CuteCat",
    desc: "+10 Score per Spades in Deck",
    img: "images/jokers/Jokers_61_77x100.png",
    chips: 10, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker62",
    name: "Educated",
    desc: "4 Mult per A, 3, 6 or 10 scored",
    img: "images/jokers/Jokers_62_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", operator: "in", value: ["A", "3", "6", "10"] }, bonus: { mult: 4 } }
  },
  {
    id: "joker63",
    name: "PopeCat",
    desc: "5 Mult per 7, 10 or Queen scored.",
    img: "images/jokers/Jokers_63_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", operator: "in", value: ["7", "10", "Q"] }, bonus: { mult: 5 } }
  },
  {
    id: "joker64",
    name: "SmugglerCat",
    desc: "+4x Mult if played hand contains a Four of a Kind",
    img: "images/jokers/Jokers_64_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "handType", value: "Four of a Kind" }, bonus: { xmult: 4 } }
  },
  {
    id: "joker65",
    name: "Diamond Miner Cat",
    desc: "x0.09 Mult per Diamond in Deck",
    img: "images/jokers/Jokers_65_77x100.png",
    chips: 0, mult: 0, xmult: 0.09, effect: null
  },
  {
    id: "joker66",
    name: "Mewstler",
    desc: "High Card gives a 20% chance to gain 1 Attack. 80% chance to lose 1 Health.",
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
    desc: "Every time you play exactly 4 cards: 10% Chance to +15 Mult, otherwise +1 Gold.",
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
    desc: "A Straight gives 1 bonus Discard this round and +2 Gold",
    img: "images/jokers/Jokers_74_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker75",
    name: "Homeless Cat",
    desc: "A Straight makes you lose 3 Gold. Straights add 0.3x Mult to this card.",
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
    desc: "If the Scoring hand has one of each suit x3 Mult",
    img: "images/jokers/Jokers_77_77x100.png",
    chips: 0, mult: 0, xmult: 3, effect: null
  },
  {
    id: "joker78",
    name: "joker78",
    desc: "nan",
    img: "images/jokers/Jokers_78_77x100.png",
    chips: 0, mult: 12, xmult: 1, effect: null
  },
  {
    id: "joker79",
    name: "Catrobatics",
    desc: "If you have more than 2 Attacks left, this card gives you +12 Mult",
    img: "images/jokers/Jokers_79_77x100.png",
    chips: 0, mult: 12, xmult: 1, effect: null
  },
  {
    id: "joker80",
    name: "Furtune Cat",
    desc: "Every 3 played gives this card +8 Score",
    img: "images/jokers/Jokers_80_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", value: "3" }, bonus: { chips: 8 } }
  },
  {
    id: "joker81",
    name: "Kwazy Kat",
    desc: "Allows duplicate Jokers to show up in shop and boosters.",
    img: "images/jokers/Jokers_81_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker82",
    name: "Meowzilla",
    desc: "First Attack of the battle is 3x Mult",
    img: "images/jokers/Jokers_82_77x100.png",
    chips: 0, mult: 0, xmult: 3, effect: null
  },
  {
    id: "joker83",
    name: "Playful Kitty",
    desc: "Whenever a hand is Scored, there’s a 1 in 5 chance to create a random Toy",
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
    desc: "A Flush will increase the Rank of cards in your Hand by 1.",
    img: "images/jokers/Jokers_85_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker86",
    name: "Catfused",
    desc: "First hand has an equal chance to: +1 Discard, -2 Gold, +2x Mult or -1000 Score",
    img: "images/jokers/Jokers_86_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "manual_first_hand_random", trigger: "onHandPlay", options: [ { value: "mult_x2", text: "+2x Mult" }, { value: "chips_-1000", text: "-1000 Chips" }, { value: "none", text: "Other/No Effect" } ], default_value: "none" }
  },
  {
    id: "joker87",
    name: "Smiley Catmicon",
    desc: "Face Cards give +25 Score",
    img: "images/jokers/Jokers_87_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", operator: "in", value: ["J", "Q", "K"] }, bonus: { chips: 25 } }
  },
  {
    id: "joker88",
    name: "Purresent",
    desc: "If hand contains a Straight, then add a random Enhanced card to your hand.",
    img: "images/jokers/Jokers_88_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker89",
    name: "Kungfeline",
    desc: "+0.15x Mult for each Enhanced Card in your Deck",
    img: "images/jokers/Jokers_89_77x100.png",
    chips: 0, mult: 0, xmult: 0.15, effect: null
  },
  {
    id: "joker90",
    name: "Carrot Cat",
    desc: "8 Score for each 4, 5, 6 in Deck",
    img: "images/jokers/Jokers_90_77x100.png",
    chips: 8, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker91",
    name: "Angwy Cat",
    desc: "If there are 0 Discards this card gives 101 Score",
    img: "images/jokers/Jokers_91_77x100.png",
    chips: 101, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker92",
    name: "Cycat",
    desc: "+5 Mult when an Ace or 10 is scored",
    img: "images/jokers/Jokers_92_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", operator: "in", value: ["A", "10"] }, bonus: { mult: 5 } }
  },
  {
    id: "joker93",
    name: "Furrtune Teller",
    desc: "If the hand played contains Four of a Kind, create a Tarot Card (Must have room)",
    img: "images/jokers/Jokers_93_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker94",
    name: "Five Ferocious Felines",
    desc: "On your 5th Attack this battle, gain 7x Mult",
    img: "images/jokers/Jokers_94_77x100.png",
    chips: 0, mult: 0, xmult: 7, effect: null
  },
  {
    id: "joker95",
    name: "Pixelcat",
    desc: "+0.09 Mult for each Face Card in Deck",
    img: "images/jokers/Jokers_95_77x100.png",
    chips: 0, mult: 0.09, xmult: 0, effect: null
  },
  {
    id: "joker96",
    name: "Kat-Boom",
    desc: "Scored Face Cards are destroyed and add +7 Mult",
    img: "images/jokers/Jokers_96_77x100.png",
    chips: 0, mult: 7, xmult: 1, effect: null
  },
  {
    id: "joker97",
    name: "Ying Yang",
    desc: "+1 Mult per Even card Scored",
    img: "images/jokers/Jokers_97_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", operator: "in", value: ["2", "4", "6", "8", "10"] }, bonus: { mult: 1 } }
  },
  {
    id: "joker98",
    name: "Nerd Cat Squared",
    desc: "Aces, 4s and 9s score +.7x Mult",
    img: "images/jokers/Jokers_98_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "rank", operator: "in", value: ["A", "4", "9"] }, bonus: { xmult: 0.7 } }
  },
  {
    id: "joker99",
    name: "Pawstronaut",
    desc: "Playing a single Ace alone gives you 1 Bonus Discard",
    img: "images/jokers/Jokers_99_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker100",
    name: "Stone Age Cat",
    desc: "Gains 0.15x for every Stone card scored",
    img: "images/jokers/Jokers_100_77x100.png",
    chips: 0, mult: 0, xmult: 0.15, effect: null
  },
  {
    id: "joker101",
    name: "Stucky Cat Box",
    desc: "Gains 8 Score for every played hand that is exactly 1 card",
    img: "images/jokers/Jokers_101_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "playedCardCount", comparison: "<=", value: 1 }, bonus: { chips: 8 } }
  },
  {
    id: "joker102",
    name: "Reckless Cat",
    desc: "Starts at 3.3x Mult, reduces 0.2x per Attack",
    img: "images/jokers/Jokers_102_77x100.png",
    chips: 0, mult: 0, xmult: 3.3, effect: null
  },
  {
    id: "joker103",
    name: "Oh Meow!",
    desc: "Discarding a J, Q, or K will add the same score to your next Attack",
    img: "images/jokers/Jokers_103_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker104",
    name: "Boxing Cat",
    desc: "+17 Mult if hand is exactly 4 cards",
    img: "images/jokers/Jokers_104_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "playedCardCount", comparison: "===", value: 4 }, bonus: { mult: 17 } }
  },
  {
    id: "joker105",
    name: "Need A Paw?",
    desc: "15% Chance to add a duplicate card from your deck to your hand when played hand is exactly 5 cards",
    img: "images/jokers/Jokers_105_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker106",
    name: "Meowsers",
    desc: "A 2 and 7 in the same hand give x5 Mult",
    img: "images/jokers/Jokers_106_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "special_logic", trigger: "onHandPlay", handler_id: "meowsers_2_and_7" }
  },
  {
    id: "joker107",
    name: "Double Glasses",
    desc: "Retrigger 2, 3, and 5s",
    img: "images/jokers/Jokers_107_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: { type: "special_logic", trigger: "onHandPlay", handler_id: "retrigger_2_3_5" }
  },
  {
    id: "joker108",
    name: "Dollar Ramen Cat",
    desc: "Discarding an Ace will give this card +10 Score",
    img: "images/jokers/Jokers_108_77x100.png",
    chips: 10, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker109",
    name: "Colacat",
    desc: "+3 Mult per Diamonds and Hearts Card",
    img: "images/jokers/Jokers_109_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "suit", operator: "in", value: ["h", "d"] }, bonus: { mult: 3 } } // Diperbaiki: value: ["h", "d"]
  },
  {
    id: "joker110",
    name: "Furlix The Cat",
    desc: "Four of a Kind will add 2 Random Fur card to your hand",
    img: "images/jokers/Jokers_110_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker111",
    name: "Catfish",
    desc: "30% chance to hit 18x Mult",
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
    desc: "Straight gives this card 0.7x Multi bonus. High Card reduces it by 0.4x Mult",
    img: "images/jokers/Jokers_113_77x100.png",
    chips: 0, mult: 0, xmult: 0.7, effect: null
  },
  {
    id: "joker114",
    name: "Catbros",
    desc: "+2x Mult if played hand contains a Pair",
    img: "images/jokers/Jokers_114_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "handType", value: "Pair" }, bonus: { xmult: 2 } }
  },
  {
    id: "joker115",
    name: "Catard",
    desc: "Retrigger A,2,3,4,5,6,7,8s",
    img: "images/jokers/Jokers_115_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: { type: "special_logic", trigger: "onHandPlay", handler_id: "retrigger_low_ranks" }
  },
  {
    id: "joker116",
    name: "Cat Fam",
    desc: "+2x Mult if played hand is a Two Pair",
    img: "images/jokers/Jokers_116_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "handType", value: "Two Pair" }, bonus: { xmult: 2 } }
  },
  {
    id: "joker117",
    name: "Full Basket",
    desc: "+2x Mult if played hand contains a Full House",
    img: "images/jokers/Jokers_117_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "conditional", trigger: "onHandPlay", condition: { property: "handType", value: "Full House" }, bonus: { xmult: 2 } }
  },
  {
    id: "joker118",
    name: "Pokat",
    desc: "+0.1x Mult for each Ace in Deck",
    img: "images/jokers/Jokers_118_77x100.png",
    chips: 0, mult: 0, xmult: 0.1, effect: null
  },
  {
    id: "joker119",
    name: "Zoora",
    desc: "Your third Attack this battle will give x3 Mult",
    img: "images/jokers/Jokers_119_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker120",
    name: "Kola Kat",
    desc: "+3 Mult per Spades/Clubs",
    img: "images/jokers/Jokers_120_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "iterative", trigger: "onHandPlay", target: "activeHand", condition: { property: "suit", operator: "in", value: ["s", "c"] }, bonus: { mult: 3 } }
  },
  {
    id: "joker121",
    name: "Focus Feline",
    desc: "x0.5 Score, x2 Mult",
    img: "images/jokers/Jokers_121_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker122",
    name: "Tora",
    desc: "First hand you play is a single 8, gain one Witchcat card chosen at random (Must have space)",
    img: "images/jokers/Jokers_122_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker123",
    name: "Catman!",
    desc: "For every hand that has a 2 & 7, this card gains 0.15x Mult",
    img: "images/jokers/Jokers_123_77x100.png",
    chips: 0, mult: 0, xmult: 0.15, effect: null
  },
  {
    id: "joker124",
    name: "Everything Is Feline",
    desc: "x4 Multi if your total amount of times you have Discarded this battle is exactly 4",
    img: "images/jokers/Jokers_124_77x100.png",
    chips: 0, mult: 0, xmult: 4, effect: null
  },
  {
    id: "joker125",
    name: "Torini",
    desc: "x6 Mult if played hand has a J, Q, & K",
    img: "images/jokers/Jokers_125_77x100.png",
    chips: 0, mult: 0, xmult: 1,
    effect: { type: "special_logic", trigger: "onHandPlay", handler_id: "torini_jqk" }
  },
  {
    id: "joker126",
    name: "Purrfect Cut",
    desc: "x2 Score, x0.5 Mult",
    img: "images/jokers/Jokers_126_77x100.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker127",
    name: "Kora",
    desc: "Playing a single 4 will create a Tarot card when Scored (Must have room)",
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
    desc: "Scored Kings are destroyed and you get 1 Attack this turn and 5 Gold",
    img: "images/jokers/Jokers2_13.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker144",
    name: "Midas",
    desc: "Gains +0.20 for every Gold card scored",
    img: "images/jokers/Jokers2_14.png",
    chips: 0, mult: 0, xmult: 0.2, effect: null
  },
  {
    id: "joker145",
    name: "Joker 110",
    desc: "Description for Joker 110.",
    img: "images/jokers/Jokers2_15.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker146",
    name: "Tubby Greed",
    desc: "Pairs do no damage but give you 3 Gold",
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
    desc: "x4 if a full hand (5 cards) of Odds or Evens is played",
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
    desc: "+100 Score if played hand contains a Straight",
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
        chips: 100, 
        mult: 0,
        xmult: 1
      }
    }
  },
  {
    id: "joker155",
    name: "Joker 120",
    desc: "Description for Joker 120.",
    img: "images/jokers/Jokers2_25.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker156",
    name: "Chubby Mad Joker",
    desc: "+50 Score if played hand contains a Two Pair",
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
        chips: 50, 
        mult: 0,
        xmult: 1
      }
    }
  },
  {
    id: "joker157",
    name: "Chubby Jolly",
    desc: "+40 Score if played hand contains a Pair",
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
        chips: 40, 
        mult: 0,
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
    desc: "Pairs give you +6 Health, +4 Mult",
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
    desc: "+60 Score +10 Mult per 3 Scored",
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
    desc: "Create a Tarot card if the hand contains a Straight and has an Ace in it",
    img: "images/jokers/Jokers2_31.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker162",
    name: "Catten-hut!",
    desc: "4x Mult if the played hand has both a 5 & 7",
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
    desc: "If you play a Flush and have 2 cards in your hand become Spades (Chosen at random)",
    img: "images/jokers/Jokers2_33.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker164",
    name: "Hi, Meow!",
    desc: "First Two Attacks give +150 Score",
    img: "images/jokers/Jokers2_34.png",
    chips: 150, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker165",
    name: "Purr Purr?",
    desc: "Every Two Pair hand gives this card +0.1x Mult",
    img: "images/jokers/Jokers2_35.png",
    chips: 0, mult: 0, xmult: 0.1, effect: null
  },
  {
    id: "joker166",
    name: "Bad Fur Day",
    desc: "J, Q and Ks have Fur Enhancement",
    img: "images/jokers/Jokers2_36.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker167",
    name: "Kitty Gambler",
    desc: "Lucky cards retrigger twice",
    img: "images/jokers/Jokers2_37.png",
    chips: 0, mult: 0, xmult: 1, 
    effect: { type: "special_logic", trigger: "onHandPlay", handler_id: "retrigger_lucky_cards" }
  },
  {
    id: "joker168",
    name: "Typing Paws",
    desc: "As long as you have not Discarded this battle, 3x Mult",
    img: "images/jokers/Jokers2_38.png",
    chips: 0, mult: 0, xmult: 3, effect: null
  },
  {
    id: "joker169",
    name: "Eepy Time!",
    desc: "Gains +0.10 Score when only 1 card is played",
    img: "images/jokers/Jokers2_39.png",
    chips: 0.1, mult: 0, xmult: 1, effect: null
  },
  {
    id: "joker170",
    name: "Feline Fine",
    desc: "0.03x Mult for every Non Face Card in your deck",
    img: "images/jokers/Jokers2_40.png",
    chips: 0, mult: 0, xmult: 0.03, effect: null
  },
  {
    id: "joker171",
    name: "BAM! You Are Cooking",
    desc: "If your 1st Attack of the turn contains a Four of a Kind, destroy this card and get 3 uncommon or rare Jokers (if have space)",
    img: "images/jokers/Jokers2_41.png",
    chips: 0, mult: 0, xmult: 1, effect: null
  }
];