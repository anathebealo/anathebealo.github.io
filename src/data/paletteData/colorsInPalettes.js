const colors = [
  "Alabaster",
  "Gull Gray",
  "Regent Gray",
  "Alizarin Crimson",
  "Big Stone",
  "Snow Drift",
  "Star Dust",
  "Confetti",
  "Solid Pink",
  "Ship Gray",
  "Black Haze",
  "Zorba",
  "Rock Blue",
  "Mamba",
  "Boston Blue",
  "Di Serria",
  "Shadow Green",
  "Mandy",
  "Comet",
  "Mountbatten Pink",
  "Stack",
  "Night Shadz",
  "Gravel",
  "Desert Storm",
  "My Pink",
  "Leather",
  "Dusty Gray",
  "Nevada",
  "Mountain Mist",
  "Pewter",
  "Americano",
  "Cararra",
  "Driftwood",
  "Apple Blossom",
  "Bright Gray",
  "White Linen",
  "Cornflower",
  "Havelock Blue",
  "Strikemaster",
  "Azure",
  "Spring Wood",
  "Concord",
  "Empress",
  "Log Cabin",
  "Seashell",
  "Toast",
  "Whiskey",
  "Sepia Skin",
  "Tamarind",
  "Storm Gray",
  "Waterloo ",
  "Falcon",
  "Shark",
  "Muesli",
  "Au Chico",
  "Slate Gray",
  "Jon",
  "Wild Sand",
  "Shady Lady",
  "Rum",
  "Purple Mountain's Majesty",
  "Haiti",
  "Laser",
  "Sinbad",
  "Baltic Sea",
  "Russett",
  "Makara",
  "Soft Peach",
  "Froly",
  "Quicksand",
  "Copper Rose",
  "Stiletto",
  "Barley Corn",
  "Gunsmoke",
  "Plantation",
  "Porcelain",
  "Jungle Mist",
  "Tan Hide",
  "Sandy brown",
  "Blue Bayoux",
  "Sage",
  "Key Lime Pie",
  "Brown Rust",
  "Pampas",
  "Viola",
  "Hopbush",
  "Port Gore",
  "Beige",
  "Nepal",
  "Copper Rust",
  "Dodger Blue",
  "Steel Gray",
  "Hint of Red",
  "Portage",
  "Royal Blue",
  "Bay of Many",
  "Sandal",
  "Lynch",
  "Fedora",
  "Cocoa Brown",
  "Manatee",
  "Sand Dune",
  "Shakespeare",
  "Blue Bell",
  "Kimberly",
  "Anzac",
  "Aqua Island",
  "Jaffa",
  "Te Papa Green",
  "Cornflower Blue",
  "Deluge",
  "Gigas",
  "Gallery",
  "Juniper",
  "Olivine",
  "Boulder",
  "Tuna",
  "Twine",
  "Lemon Grass",
  "Matrix",
  "Masala",
  "Antique Brass",
  "Mongoose",
  "Mortar",
  "Natural Gray",
  "Flame Pea",
  "Thunderbird",
  "Mirage",
  "Blossom",
  "Radical Red",
  "Wewak",
  "Lucky Point",
  "Bon Jour",
  "Sea Nymph",
  "Steel Blue",
  "Chambray",
  "Bastille",
  "Stonewall",
  "Ironstone",
  "Dune",
  "Illusion",
  "Tapestry",
  "Fun Blue",
  "Cascade",
  "Potters Clay",
  "Trout",
  "Emperor",
  "Mystic",
  "Waikawa Gray",
  "Puerto Rico",
  "Scorpion",
  "Gray Nurse",
  "Amulet",
  "Edward",
  "Tom Thumb",
  "Bazaar",
  "Danube",
  "Eminence",
  "Governor Bay",
  "Raw Sienna",
  "Concrete",
  "Dolphin",
  "Chathams Blue",
  "Santas Gray",
  "Casper",
  "Bouquet",
  "Mine Shaft",
  "Tuscany",
  "Contessa",
  "Blackcurrant",
  "Saltpan",
  "Venus",
  "Treehouse",
  "Hampton",
  "Husk",
  "Crocodile",
  "Quarter Spanish White",
  "Downy",
  "Rhino",
  "Pearl Bush",
  "Shadow",
  "Pharlap",
  "Spice",
  "Heavy Metal",
  "French Gray",
  "Tacao",
  "Ferra",
  "Porsche",
  "Delta",
  "Oxford Blue",
  "Mercury",
  "Mantle",
  "Roman Coffee",
  "Old Lavender",
  "Charade",
  "Saffron",
  "Old Rose",
  "Cinnabar",
  "Trendy Pink",
  "Jacarta",
  "Glacier",
  "Picton Blue",
  "Clay Creek",
  "Viking",
  "Eastern Blue",
  "Tan",
  "Goldenrod",
  "Old Copper",
  "Thunder",
  "Lavender Purple",
  "Cape Palliser",
  "Hemp",
  "Buccaneer",
  "Ebony Clay",
  "Teak",
  "Martinique",
  "Sorrell Brown",
  "Hurricane",
  "Amethyst Smoke",
  "Wild Blue Yonder",
  "Periglacial Blue",
  "Curious Blue",
  "Charm",
  "Tory Blue",
  "Apricot",
  "Regent St Blue",
  "Hot Cinnamon",
  "Pickled Bluewood",
  "Vulcan",
  "Santa Fe",
  "Donkey Brown",
  "Athens Gray",
  "Oslo Gray",
  "Almond",
  "Pale Oyster",
  "Tuatara",
  "Coral Tree",
  "Fuzzy Wuzzy Brown",
  "Fiord",
  "We Peep",
  "Sundance",
  "Scooter",
  "Amethyst",
  "Bombay",
  "Bali Hai",
  "Indigo",
  "Bianca",
  "Moody Blue",
  "Royal Heath",
  "Soya Bean",
  "Dove Gray",
  "Fuscous Gray",
  "Zeus",
  "Chestnut Rose",
  "Finn",
  "Deep Blush",
  "Affair",
  "Thatch",
  "Pomegranate",
  "Saddle",
  "Silver Chalice",
  "Outer Space",
  "Punch",
  "Mulled Wine",
  "Golden Dream",
  "Blumine",
  "Golden Grass",
  "Lightning Yellow",
  "Burnt Sienna",
  "Bandicoot",
  "Mariner",
  "Bermuda Gray",
  "Cello",
  "Hit Gray",
  "Dixie",
  "Spindle",
  "Perano",
  "Dull Lavender",
  "Clam Shell",
  "Astronaut",
  "Romance",
  "Cadet Blue",
  "Gray Suit",
  "Yellow Metal",
  "Amour",
  "Celeste",
  "Pale Slate",
  "Botticelli",
  "Oxley",
  "Zombie",
  "Shingle Fawn",
  "Minsk",
  "Fuchsia Pink",
  "Orchid",
  "Olive Green",
  "Tundora",
  "Zanah",
  "Chrome White",
  "Domino",
  "Firefly",
  "Ming",
  "Pesto",
  "Earls Green",
  "Energy Yellow",
  "Cape Cod",
  "Dust Storm",
  "Flax",
  "Costa Del Sol",
  "Gray Asparagus",
  "Willow Grove",
  "Wheat",
  "Astra",
  "Pavlova",
  "Acapulco",
  "Horizon",
  "Jelly Bean",
  "Elephant",
  "Watercourse",
  "Mountain Meadow",
  "Mondo",
  "Quincy",
  "Parchment",
  "Thistle Green",
  "Don Juan",
  "Flint",
  "Napa",
  "Vis Vis",
  "La Rioja",
  "Wild Willow",
  "Green White",
  "Conch",
  "Tumbleweed",
  "Gumbo",
  "Breaker Bay",
  "Raffia",
  "Bittersweet",
  "Scarpa Flow",
  "Monte Carlo",
  "Chartreuse Yellow",
  "Flamingo",
  "Green",
  "Bright Turquoise",
  "Blue Dianne",
  "Bismark",
  "Half Baked",
  "Citrine White",
  "Tawny Port",
  "Clairvoyant",
  "Conifer",
  "Viridian",
  "Limed Ash",
  "Sweet Corn",
  "Tradewind",
  "Elm",
  "Hairy Heath",
  "Orange Roughy",
  "Buttermilk",
  "Rangoon Green",
  "Cloud Burst",
  "Pompadour",
  "Hibiscus",
  "Cranberry",
  "Envy",
  "Cameo",
  "Medium Carmine",
  "Vivid Violet",
  "Medium Red Violet",
  "Deco",
  "Atlantis",
  "Sirocco",
  "Paarl",
  "Kelp",
  "Fire Bush",
  "Red Damask",
  "Regal Blue",
  "Prussian Blue",
  "Dark Tan",
  "Galliano",
  "Janna",
  "Salmon",
  "Tango",
  "Wattle",
  "Granny Smith Apple",
  "Silver Tree",
  "Blue Zodiac",
  "Deep Cerulean",
  "Bright Sun",
  "Tangerine",
  "Japonica",
  "Tulip Tree",
  "Casal",
  "Espresso",
  "Tabasco",
  "Rebel",
  "Teal",
  "Pine Glade",
  "Grenadier",
  "Carrot Orange",
  "Sunflower",
  "Trendy Green",
  "Surfie Green",
  "Congo Brown",
  "Old Gold",
  "Gulf Stream",
  "Coffee",
  "Spray",
  "Sandy Beach",
  "Sunglo",
  "Valencia",
  "Buttercup",
  "Limed Spruce",
  "Sun",
  "Gamboge",
  "Vermilion",
  "Claret",
  "Revolver",
  "Muddy Waters",
  "Golden Fizz",
  "Putty",
  "Lochinvar",
  "Tiber",
  "Orange White",
  "Astral",
  "Sherpa Blue",
  "Monarch",
  "Norway",
  "Silk",
  "Indian Khaki",
  "Totem Pole",
  "Nebula",
  "Just Right",
  "Blue Chill",
  "Niagara",
  "Rose",
  "Rose Bud",
  "Taupe Gray",
  "Asparagus",
  "Summer Green",
  "Albescent White",
  "Alto",
  "Pelorous",
  "Soapstone",
  "Gimblet",
  "Mantis",
  "Feijoa",
  "Chenin",
  "De York",
  "Amazon",
  "Chinook",
  "Double Colonial White",
  "Abbey",
  "Swamp Green",
  "New Orleans",
  "Bison Hide",
  "Edgewater",
  "Jet Stream",
  "Merlot",
  "Livid Brown",
  "Moon Mist",
  "Deep Sea Green",
  "Mustard",
  "Casablanca",
  "Mineral Green",
  "Surf",
  "Forest Green",
  "Apple",
  "Tacha",
  "Terracotta",
  "Fuel Yellow",
  "Persian Red",
  "Flush Mahogany",
  "Tonys Pink",
  "Sea Pink",
  "Hillary",
  "Hemlock",
  "Patina",
  "Turquoise Blue",
  "Dawn Pink",
  "Beauty Bush",
  "Camelot",
  "Double Pearl Lusta",
  "Chino",
  "Marigold Yellow",
  "Catalina Blue",
  "Persian Green",
  "Bitter Lemon",
  "Tree Poppy",
  "Brick Red",
  "Orange",
  "Ochre",
  "Sidecar",
  "Grain Brown",
  "Go Ben",
  "Mexican Red",
  "Alpine",
  "Sky Blue",
  "French Pass",
  "Chalky",
  "Woodland",
  "Roti",
  "Bay Leaf",
  "Wax Flower",
  "Granny Smith",
  "Moss Green",
  "Givry",
  "Vanilla",
  "Wine Berry",
  "Brown Derby",
  "Eucalyptus",
  "Lunar Green",
  "Citron",
  "Clementine",
  "Bourbon",
  "Green Smoke",
  "Spring Rain",
  "Pipi",
  "Oracle",
  "Eagle",
  "Grandis",
  "Mandalay",
  "Judge Gray",
  "Sushi",
  "Disco",
  "Sycamore",
  "Limed Oak",
  "Crete",
  "Green Pea",
  "Cosmic",
  "Daisy Bush",
  "Cardinal Pink",
  "Pink Flare",
  "Persian Pink",
  "Cabaret",
  "Del Rio",
  "Burning Orange",
  "Keppel",
  "Bleached Cedar",
  "Elf Green",
  "Harvest Gold",
  "Caribbean Green",
  "Jade",
  "San Juan",
  "Loafer",
  "Lotus",
  "Scarlet",
  "Gable Green",
  "Faded Jade",
  "Coral Reef",
  "Pablo",
  "Kabul",
  "Rolling Stone",
  "Silver",
  "Arrowtown",
  "Silver Sand",
  "Suva Gray",
  "Nomad",
  "Chicago",
  "Dawn",
  "Camouflage Green",
  "Kangaroo",
  "Avocado",
  "Spicy Pink",
  "Tea",
  "Cutty Sark",
  "Powder Ash",
  "Bitter",
  "Nobel",
  "Swirl",
  "Turkish Rose",
  "Rouge",
  "Axolotl",
  "Laurel",
  "Pale Leaf",
  "Battleship Gray",
  "Zambezi",
  "Tapa",
  "Green Spring",
  "Xanadu",
  "Woody Brown",
  "Jumbo",
  "Sisal",
  "Sandrift",
  "Finch",
  "Kokoda",
  "Pumice",
  "Matterhorn",
  "Salt Box",
  "Martini",
  "Gray",
  "Pine Cone",
  "Granite Green",
  "Foggy Gray",
  "Armadillo",
  "Squirrel",
  "Cabbage Pont",
  "Nandor",
  "Tana",
  "Spanish Green",
  "Locust",
  "Vin Rouge",
  "Cold Turkey",
  "Mako",
  "Gothic",
  "Finlandia",
  "Glade Green",
  "Almond Frost",
  "Timberwolf",
  "Merlin",
  "Gurkha",
  "Coriander",
  "Heathered Gray",
  "Cloudy",
  "Green Mist",
  "Westar",
  "Mid Gray",
  "Careys Pink",
  "Ironside Gray",
  "Tiara",
  "Butterfly Bush",
  "Gun Powder",
  "Puce",
  "Sandstone",
  "Storm Dust",
  "Mischka",
  "Cactus",
  "Cocoa Bean",
  "Crown of Thorns",
  "Gray Chateau",
  "Hippie Pink",
  "Clay Ash",
  "Cannon Pink",
  "Metallic Copper",
  "Coffee Bean",
  "Burnt Umber",
  "Geebung",
  "Gondola",
  "Mobster",
  "Ziggurat",
  "Polo Blue",
  "Bossanova",
  "Schist",
  "Green Kelp",
  "Eclipse",
  "Chatelle",
  "Hoki",
  "Killarney",
  "Wild Rice",
  "Calico",
  "Aztec",
  "Oil",
  "Cement",
  "Tallow",
  "Quill Gray",
  "Geyser",
  "Loblolly",
  "Corduroy",
  "Valhalla",
  "Caper",
  "Persian Plum",
  "Tall Poppy",
  "Brandy Rose",
  "Irish Coffee",
  "Old Brick",
  "Woodrush",
  "Bronzetone",
  "Thatch Green",
  "English Walnut",
  "Flax Smoke",
  "Tide",
  "Wood Bark",
  "Kumera",
  "Iroko",
  "Dingley",
  "Siam",
  "East Bay",
  "Clinker",
  "Rodeo Dust",
  "Cashmere",
  "Mikado",
  "Walnut",
  "Como",
  "Cannon Black",
  "Black Olive",
  "Smalt Blue",
  "Eternity",
  "Tobacco Brown",
  "Bronze",
  "Olive Haze",
  "Celtic",
  "Akaroa",
  "Bull Shot",
  "Black Marlin",
  "Dallas",
  "Brown Tumbleweed",
  "Camouflage",
  "Schooner",
  "Brandy",
  "Red Robin",
  "Deep Oak",
  "Ship Cove",
  "Pickled Bean",
  "Malta",
  "Onion",
  "Gray Olive",
  "Nile Blue",
  "Stromboli",
  "Seaweed",
  "Nutmeg",
  "Surf Crest",
  "Blue Smoke",
  "Luxor Gold",
  "Tussock",
  "Rope",
  "Kashmir Blue",
  "Birch",
  "Copper",
  "Beaver",
  "Wafer",
  "Hippie Blue",
  "Spun Pearl",
  "Raven",
  "Wedgewood",
  "Burning Sand",
  "Mule Fawn",
  "Calypso",
  "William",
  "Desert Sand",
  "Sapling",
  "Taupe",
  "San Marino",
  "Voodoo",
  "Scampi",
  "Tower Gray",
  "Spectra",
  "Friar Gray",
  "Chetwode Blue",
  "Gray Nickel",
  "St Tropaz",
  "Cognac",
  "Marigold",
  "Lisbon Brown",
  "Pueblo",
  "Pink Swan",
  "Prairie Sand",
  "Korma",
  "Rust",
  "Corn Harvest",
  "Jewel",
  "Denim",
  "Lilac",
  "Celery",
  "Victoria",
  "Chateau Green",
  "Feta",
  "Blush",
  "Swans Down",
  "Crusta",
  "Maize",
  "Bunting",
  "Java",
  "Pale Sky",
  "Amaranth",
  "Aqua Haze",
  "Sundown",
  "Cerise Red",
  "Crater Brown",
  "Pigeon Post",
  "Spicy Mix",
  "Fantasy",
  "Opium",
  "Crail",
  "Well Read",
  "River Bed",
  "Catskill White",
  "Link Water",
  "Violet",
  "Persian Blue",
  "Yellow Orange",
  "Monsoon",
  "Aqua Forest",
  "Bizarre",
  "Skeptic",
  "Vista Blue",
  "London Hue",
  "Thistle",
  "Petite Orchid",
  "Topaz",
  "Equator",
  "Stark White",
  "Bunker",
  "Plum",
  "Winter Hazel",
  "Ceramic",
  "Geraldine",
  "Kobi",
  "Carnation",
  "Mint Tulip",
  "Bermuda",
  "Sanguine Brown",
  "Pot Pourri",
  "Manhattan",
  "Zest",
  "Fiery Orange",
  "Peanut",
  "Jungle Green",
  "Frostee",
  "Matisse",
  "Rangitoto",
  "Turmeric",
  "Mint Julep",
  "Padua",
  "Golden Sand",
  "Flesh",
  "Derby",
  "Cruise",
  "Eunry",
  "Green Leaf",
  "Cerulean",
  "El Salva",
  "Cumin",
  "Shocking Pink",
  "Nugget",
  "Portica",
  "Twilight",
  "Torea Bay",
  "Pixie Green",
  "Straw",
  "Timber Green",
  "Chelsea Cucumber",
  "Canary",
  "Piper",
  "Desert",
  "Sambuca",
  "Cape Honey",
  "Rob Roy",
  "Egg White",
  "Riptide",
  "Sandwisp",
  "Sunset Orange",
  "Blaze Orange",
  "Lemon",
  "Everglade",
  "Red Devil",
  "Golden Tainoi",
  "Highland",
  "Green Haze",
  "Malachite",
  "Cream Can",
  "Roman",
  "Viridian Green",
  "Electric Lime",
  "Sea Mist",
  "Cowboy",
  "Punga",
  "Brandy Punch",
  "Verdigris",
  "Red Oxide",
  "Razzmatazz",
  "Gold",
  "California",
  "Ripe Lemon",
  "Guardsman Red",
  "Biscay",
  "Rajah",
  "Outrageous Orange",
  "Drover",
  "Mojo",
  "Madison",
  "Sapphire",
  "Fern Frond",
  "Champagne",
  "Christine",
  "Chestnut",
  "Eggplant",
  "Rainee",
  "Yellow Green",
  "Gold Sand",
  "Gum Leaf",
  "Heather",
  "Rock",
  "Maverick",
  "Blue Violet",
  "Jambalaya",
  "Barberry",
  "Fruit Salad",
  "Saffron Mango",
  "Shilo",
  "Mulberry",
  "Studio",
  "Cadillac",
  "Horses Neck",
  "Lily",
  "West Coast",
  "Goblin",
  "Oriental Pink",
  "Opal",
  "Chalet Green",
  "Prim",
  "Hokey Pokey",
  "Millbrook",
  "Satin Linen",
  "Smoky",
  "Tasman",
  "Aths Special",
  "Tosca",
  "Moccaccino",
  "Pancho",
  "Beryl Green",
  "Cedar",
  "Sepia",
  "Trinidad",
  "Cioccolato",
  "Paradiso",
  "Shuttle Gray",
  "Hawaiian Tan",
  "Hunter Green",
  "Bud",
  "Metallic Bronze",
  "Iron",
  "Cerulean Blue",
  "Monza",
  "Night Rider",
  "Van Cleef",
  "Olive Drab",
  "Cherrywood",
  "Ebb",
  "Russet",
  "Soft Amber",
  "Aubergine",
  "Asphalt",
  "Dorado",
  "Carissma",
  "Ghost",
  "Silver Rust",
  "Green Waterloo",
  "Spring Leaves",
  "Cinder",
  "Congress Blue",
  "Logan",
  "Crowshead",
  "Ecru White",
  "Cod Gray",
  "Mauve",
  "Woodsmoke",
  "Cerise",
  "Vida Loca",
  "Lima",
  "Racing Green",
  "Buff",
  "Violet Eggplant",
  "Wisteria",
  "Reef Gold",
  "Ronchi",
  "Kidnapper",
  "Purple Heart",
  "Razzle Dazzle Rose",
  "Lavender",
  "Lavender Magenta",
  "Hot Toddy",
  "Marshland",
  "Chartreuse",
  "Gordons Green",
  "Mallard",
  "Blue Charcoal",
  "Starship",
  "Willow Brook",
  "Pumpkin Skin",
  "Himalaya",
  "Electric Violet",
  "Aqua Spring",
  "Cavern Pink",
  "Whisper",
  "Sahara Sand",
  "Apache",
  "Seance",
  "Moon Raker",
  "Gold Tips",
  "Bright Green",
  "Mindaro",
  "Black",
  "Reno Sand",
  "Valentino",
  "Shiraz",
  "Persian Rose",
  "Meteor",
  "Jordy Blue",
  "Bush",
  "Light Wisteria",
  "Cloud",
  "Lavender Gray",
  "Lola",
  "Hacienda",
  "New York Pink",
  "Copper Canyon",
  "Ash",
  "Can Can",
  "East Side",
  "Blue Marguerite",
  "Grape",
  "Chamois",
  "Fountain Blue",
  "Seagull",
  "Paco",
  "Submarine",
  "Bistre",
  "Wistful",
  "Bone",
  "Mocha",
  "Blue Haze",
  "Emerald",
  "Cotton Seed",
  "Jacko Bean",
  "Malibu",
  "Snuff",
  "Cork",
  "Tia Maria",
  "Neptune",
  "Paris White",
  "Periwinkle Gray",
  "Yuma",
  "Venice Blue",
  "Blue Whale",
  "Genoa",
  "Powder Blue",
  "Lochmara",
  "Charlotte",
  "Double Spanish White",
  "Teal Blue",
  "Shocking",
  "Downriver",
  "Morning Glory",
  "Deep Sapphire",
  "Astronaut Blue",
  "Jagged Ice",
  "Aquamarine Blue",
  "Black Pearl",
  "Allports",
  "Tarawera",
  "Blue Stone",
  "Midnight Blue",
  "Turquoise",
  "Gin",
  "Fern",
  "White Lilac",
  "Dandelion",
  "White Rock",
  "Coral",
  "Merino",
  "Midnight",
  "Pacifika",
  "Tamarillo",
  "Pear",
  "Gorse",
  "Sorbus",
  "Milano Red",
  "Bulgarian Rose",
  "Sulu",
  "Khaki",
  "Mahogany",
  "Ocean Green",
  "Eden",
  "Pastel Green",
  "Sangria",
  "Hippie Green",
  "Mardi Gras",
  "Mandys Pink",
  "International Orange",
  "Melon",
  "Fall Green",
  "Salomie",
  "Hit Pink",
  "Sprout",
  "Mist Gray",
  "Sea Buckthorn",
  "Red Orange",
  "Lavender Pink",
  "Olivetone",
  "Heath",
  "Tickle Me Pink",
  "Pacific Blue",
  "Persimmon",
  "Atoll",
  "Copperfield",
  "Algae Green",
  "Windsor",
  "Bridal Heath",
  "Cardinal",
  "Gossamer",
  "Rum Swizzle",
  "Medium Purple",
  "Pistachio",
  "Selago",
  "Clover",
  "Maroon Flush",
  "Cornflower Lilac",
  "Scarlet Gum",
  "Bird Flower",
  "Red Violet",
  "Rock Spray",
  "Honey Flower",
  "Dell",
  "Oregon",
  "Roof Terracotta",
  "Bronze Olive",
  "Wasabi",
  "Palm Leaf",
  "Manz",
  "Creole",
  "Maroon Oak",
  "Fern Green",
  "Cedar Wood Finish",
  "Macaroni and Cheese",
  "Redwood",
  "Sepia Black",
  "Jacksons Purple",
  "Golden Bell",
  "Rose Fog",
  "Aluminium",
  "Wheatfield",
  "Lemon Ginger",
  "Brink Pink",
  "Royal Purple",
  "Fuchsia Blue",
  "Tahuna Sands",
  "Crimson",
  "Ice Cold",
  "Wisp Pink",
  "Pumpkin",
  "Beeswax",
  "Shalimar",
  "Oyster Pink",
  "Bondi Blue",
  "Sweet Pink",
  "Tusk",
  "Banana Mania",
  "Peach Yellow",
  "Pizazz",
  "Karry",
  "Cyan / Aqua",
  "Yellow",
  "Dolly",
  "Burnt Orange",
  "Ecstasy",
  "Carmine",
  "Vivid Tangerine",
  "Maroon",
  "Toledo",
  "Mosque",
  "Prelude",
  "Bronco",
  "Tangaroa",
  "Iceberg",
  "Narvik",
  "Melanie",
  "Zinnwaldite",
  "True V",
  "Apricot Peach",
  "Oasis",
  "Paprika",
  "Sea Green",
  "Sherwood Green",
  "Texas",
  "Wild Watermelon",
  "Cab Sav",
  "Mona Lisa",
  "Neon Carrot",
  "Shamrock",
  "White",
  "Texas Rose",
  "Chardonnay",
  "Pearl Lusta",
  "Screamin' Green",
  "Candlelight",
  "Turbo",
  "Tropical Blue",
  "Swiss Coffee",
  "Harp",
  "Fringy Flower",
  "Apple Green",
  "Biloba Flower",
  "Black Squeeze",
  "Black White",
  "Amber",
  "Blue Lagoon",
  "Marzipan",
  "Celadon",
  "Tahiti Gold",
  "Early Dawn",
  "Picasso",
  "Humming Bird",
  "Green Vogue",
  "Coral Red",
  "Primrose",
  "Bamboo",
  "Bahama Blue",
  "Meteorite",
  "Karaka",
  "Deep Koamaru",
  "Cinnamon",
  "Rusty Nail",
  "Waiouru",
  "Spicy Mustard",
  "Deep Forest Green",
  "Cafe Royale",
  "Yukon Gold",
  "Antique Bronze",
  "Peru Tan",
  "Cola",
  "Raw Umber",
  "Turtle Green",
  "Mai Tai",
  "Dark Ebony",
  "Fire",
  "Nutmeg Wood Finish",
  "My Sin",
  "Hot Pink",
  "Light Orchid",
  "Vista White",
  "Inch Worm",
  "Brilliant Rose",
  "Panache",
  "Your Pink",
  "Daintree",
  "Festival",
  "Limeade",
  "Atomic Tangerine",
  "Lavender Rose",
  "Zuccini",
  "Saratoga",
  "Reef",
  "Pirate Gold",
  "Corn",
  "Negroni",
  "Papaya Whip",
  "Old Lace",
  "Peppermint",
  "Scotch Mist",
  "Colonial White",
  "Graphite",
  "Jazzberry Jam",
  "Black Rose",
  "Melanzane",
  "Jagger",
  "Loulou",
  "Gossip",
  "Magenta / Fuchsia",
  "Mulberry Wood",
  "Blue",
  "Dairy Cream",
  "Orient",
  "Cherokee",
  "Tuft Bush",
  "Selective Yellow",
  "Granny Apple",
  "La Palma",
  "Red",
  "Paris Daisy",
  "Cream Brulee",
  "West Side",
  "Corn Field",
  "Peach Cream",
  "Aquamarine",
  "Pizza",
  "Carnaby Tan",
  "Bracken",
  "Acadia",
  "Saddle Brown",
  "Madras",
  "Deep Bronze",
  "El Paso",
  "Red Beech",
  "Bilbao",
  "Cold Purple",
  "Torch Red",
  "Indochine",
  "Sahara",
  "Deep Sea",
  "Rosewood",
  "Rio Grande",
  "Supernova",
  "Tea Green",
  "Lilac Bush",
  "Robin's Egg Blue",
  "Vanilla Ice",
  "Red Ribbon",
  "Golden Glow",
  "Flamenco",
  "Wild Strawberry",
  "Cyprus",
  "Pohutukawa",
  "Broom",
  "Hollywood Cerise",
  "Midnight Moss",
  "Green Yellow",
  "Lucky",
  "Madang",
  "Blue Chalk",
  "Aqua Deep",
  "Carousel Pink",
  "Violent Violet",
  "Siren",
  "Corvette",
  "Vesuvius",
  "Ultramarine",
  "Laser Lemon",
  "Arapawa",
  "Salem",
  "Chelsea Gem",
  "Pine Tree",
  "Brown",
  "Green House",
  "Deep Cove",
  "Tidal",
  "Bordeaux",
  "Persian Indigo",
  "Science Blue",
  "Orinoco",
  "Tropical Rain Forest",
  "Falu Red",
  "Watusi",
  "Witch Haze",
  "Brown Bramble",
  "Linen",
  "Anakiwa",
  "Mauvelous",
  "Bottle Green",
  "Frost",
  "Rose Bud Cherry",
  "Swamp",
  "Christi",
  "Quarter Pearl Lusta",
  "Dark Burgundy",
  "Castro",
  "Japanese Laurel",
  "Buddha Gold",
  "Blue Ribbon",
  "Bahia",
  "Island Spice",
  "Yellow Sea",
  "Chilean Fire",
  "Venetian Red",
  "Barossa",
  "Kilamanjaro",
  "Kenyan Copper",
  "Red Stage",
  "Solitude",
  "Light Apricot",
  "Parsley",
  "French Rose",
  "Violet Red",
  "Sunglow",
  "Candy Corn",
  "Tequila",
  "Coconut Cream",
  "Bridesmaid",
  "Magic Mint",
  "Citrus",
  "Las Palmas",
  "Hawkes Blue",
  "Cotton Candy",
  "Cinderella",
  "Kournikova",
  "Peat",
  "Pink",
  "Onahau",
  "Gulf Blue",
  "Sail",
  "Cosmos",
  "Ebony",
  "Half Colonial White",
  "Observatory",
  "Romantic",
  "Classic Rose",
  "Rich Gold",
  "Buttered Rum",
  "Rose of Sharon",
  "Pink Salmon",
  "Peach",
  "Azalea",
  "Zircon",
  "Mango Tango",
  "Koromiko",
  "Cobalt",
  "Perfume",
  "Jaguar",
  "Azure Radiance",
  "Purple",
  "Blackberry",
  "French Lilac",
  "Orchid White",
  "Blizzard Blue",
  "Alice Blue",
  "Lonestar",
  "Paua",
  "Heliotrope",
  "Cupid",
  "Black Russian",
  "Black Rock",
  "Polar",
  "Peach Orange",
  "Endeavour",
  "Water Leaf",
  "Deep Teal",
  "Aqua Squeeze",
  "Frangipani",
  "Chocolate",
  "Pale Prim",
  "China Ivory",
  "Seashell Peach",
  "Barley White",
  "Fog",
  "Pastel Pink",
  "Bean  ",
  "Cumulus",
  "Scandal",
  "Black Bean",
  "Mabel",
  "Pattens Blue",
  "Dark Fern",
  "Palm Green",
  "Peach Schnapps",
  "Cherub",
  "Fun Green",
  "Tara",
  "Harlequin",
  "Diesel",
  "Jacaranda",
  "Tolopea",
  "Tranquil",
  "Chilean Heath",
  "Lemon Chiffon",
  "Olive",
  "Tenn",
  "Cream",
  "Moon Glow",
  "Temptress",
  "White Pointer",
  "Resolution Blue",
  "Japanese Maple",
  "Sunshade",
  "Paris M",
  "Pippin",
  "Blue Gem",
  "Indian Tan",
  "Sazerac",
  "Spring Green",
  "Australian Mint",
  "Burnham",
  "Sugar Cane",
  "Magnolia",
  "Mint Green",
  "Holly",
  "Frosted Mint",
  "Baby Blue",
  "English Holly",
  "Pigment Indigo",
  "Pink Lace",
  "Chantilly",
  "Remy",
  "Flirt",
  "Bright Red",
  "Periwinkle",
  "Lipstick",
  "Half and Half",
  "Deep Fir",
  "Melrose",
  "Clear Day",
  "Honeysuckle",
  "Christalle",
  "Blue Romance",
  "Pig Pink",
  "Rice Flower",
  "Snow Flurry",
  "Hint of Yellow",
  "Provincial Pink",
  "Milan",
  "Snowy Mint",
  "Pink Flamingo",
  "Apricot White",
  "Ripe Plum",
  "Fair Pink",
  "Foam",
  "Camarone",
  "Flush Orange",
  "Chardon",
  "Portafino",
  "Jonquil",
  "Aero Blue",
  "Oyster Bay",
  "Deep Blue",
  "White Ice",
  "Evening Sea",
  "Carnation Pink",
  "Travertine",
  "Navy Blue",
  "Blush Pink",
  "Twilight Blue",
  "Spring Sun",
  "Tutu",
  "Kingfisher Daisy",
  "Gin Fizz",
  "Lily White",
  "Chiffon",
  "Web Orange",
  "Red Berry",
  "Pale Rose",
  "Zumthor",
  "Dark Blue",
  "Serenade",
  "Cherry Pie",
  "Off Yellow",
  "Stratos",
  "Kaitoke Green",
  "Pine Green",
  "Nero",
  "Titan White",
  "Ivory",
  "Morocco Brown",
  "Tyrian Purple",
  "Bubbles",
  "Carla",
  "Fresh Eggplant",
  "County Green",
  "Hint of Green",
  "Burnt Maroon",
  "Gold Drop",
  "Ottoman",
  "Orange Peel",
  "School bus Yellow",
  "Blue Diamond",
  "Purple Pizzazz",
  "Milk Punch",
  "Solitaire",
  "Verdun Green"
];

export default colors;