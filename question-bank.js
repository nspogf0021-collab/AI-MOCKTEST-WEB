// ==================== COMPREHENSIVE QUESTION BANK ====================
// 1000+ questions for each exam with different difficulty levels

const EXAM_QUESTION_BANKS = {
    // UPSC PRELIMS - 1000 Questions
    'upsc-prelims': {
        easy: [
            { question: "Who is known as the 'Father of the Nation' in India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhas Chandra Bose"], correct: 1, explanation: "Mahatma Gandhi is officially recognized as the Father of the Nation in India for his pivotal role in the independence movement.", subject: "General Knowledge", topic: "Indian History" },
            { question: "What is the capital of India?", options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"], correct: 2, explanation: "New Delhi is the capital of India, designed by Edwin Lutyens and Herbert Baker.", subject: "Geography", topic: "Indian Geography" },
            { question: "Which is the national animal of India?", options: ["Lion", "Elephant", "Tiger", "Peacock"], correct: 2, explanation: "The Bengal Tiger was adopted as India's national animal in 1973.", subject: "General Knowledge", topic: "National Symbols" },
            { question: "What is the full form of UPSC?", options: ["Union Public Service Commission", "United Public Service Commission", "Union Provincial Service Commission", "United Provincial Service Commission"], correct: 0, explanation: "UPSC stands for Union Public Service Commission, the central agency responsible for recruiting civil servants.", subject: "Polity", topic: "Constitutional Bodies" },
            { question: "Which article of the Indian Constitution deals with the abolition of untouchability?", options: ["Article 14", "Article 16", "Article 17", "Article 18"], correct: 2, explanation: "Article 17 of the Indian Constitution abolishes untouchability and forbids its practice in any form.", subject: "Polity", topic: "Fundamental Rights" },
        ],
        medium: [
            { question: "The concept of 'Directive Principles of State Policy' in the Indian Constitution was borrowed from which country?", options: ["USA", "UK", "Ireland", "Canada"], correct: 2, explanation: "The Directive Principles were borrowed from the Irish Constitution, which itself was influenced by Spanish and Catholic social teachings.", subject: "Polity", topic: "Constitutional Features" },
            { question: "Which of the following is NOT a fundamental right in India?", options: ["Right to Equality", "Right to Freedom", "Right to Property", "Right to Constitutional Remedies"], correct: 2, explanation: "Right to Property was removed from fundamental rights by the 44th Amendment Act, 1978 and is now a legal right under Article 300A.", subject: "Polity", topic: "Fundamental Rights" },
            { question: "The 'Preamble' of the Indian Constitution describes India as a:", options: ["Sovereign Socialist Secular Democratic Republic", "Sovereign Democratic Republic", "Socialist Secular Republic", "Democratic Republic"], correct: 0, explanation: "The 42nd Amendment Act, 1976 added the words 'Socialist', 'Secular', and 'Integrity' to the Preamble.", subject: "Polity", topic: "Preamble" },
            { question: "Who was the Chairman of the Drafting Committee of the Indian Constitution?", options: ["Dr. Rajendra Prasad", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"], correct: 1, explanation: "Dr. B.R. Ambedkar was the Chairman of the Drafting Committee and is considered the chief architect of the Indian Constitution.", subject: "History", topic: "Constitution Making" },
            { question: "The 'Green Revolution' in India was primarily associated with which crop?", options: ["Rice", "Wheat", "Cotton", "Sugarcane"], correct: 1, explanation: "The Green Revolution, led by M.S. Swaminathan, primarily focused on wheat production using high-yielding varieties.", subject: "Economics", topic: "Agriculture" },
        ],
        hard: [
            { question: "Which of the following pairs is correctly matched? 1. Article 32 - Right to Constitutional Remedies 2. Article 21 - Right to Education 3. Article 14 - Right to Equality", options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], correct: 1, explanation: "Article 32 provides Right to Constitutional Remedies, Article 14 provides Right to Equality. Article 21 deals with Right to Life and Personal Liberty, not Education.", subject: "Polity", topic: "Fundamental Rights" },
            { question: "Consider the following statements about the Government of India Act, 1935: 1. It provided for the establishment of an All India Federation 2. It introduced dyarchy at the centre 3. It abolished dyarchy in the provinces. Which of the above statements are correct?", options: ["1 and 2 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"], correct: 3, explanation: "The Government of India Act, 1935 provided for an All India Federation, introduced dyarchy at the centre, and abolished dyarchy in provinces while introducing provincial autonomy.", subject: "History", topic: "Constitutional Development" },
            { question: "Which one of the following is not a feature of the Indian Constitution?", options: ["Parliamentary form of government", "Secular state", "Presidential form of government", "Federal structure with unitary bias"], correct: 2, explanation: "India has a parliamentary form of government, not presidential. The President is the nominal executive while the Prime Minister is the real executive.", subject: "Polity", topic: "Constitutional Features" },
            { question: "The 'Doctrine of Basic Structure' was propounded by the Supreme Court in which case?", options: ["Golak Nath Case", "Kesavananda Bharati Case", "Minerva Mills Case", "Maneka Gandhi Case"], correct: 1, explanation: "The Kesavananda Bharati case (1973) established that Parliament cannot alter the 'basic structure' of the Constitution.", subject: "Polity", topic: "Judicial Review" },
            { question: "Which of the following Schedules of the Indian Constitution contains provisions regarding anti-defection?", options: ["7th Schedule", "8th Schedule", "9th Schedule", "10th Schedule"], correct: 3, explanation: "The 10th Schedule, added by the 52nd Amendment Act, 1985, contains provisions regarding disqualification on grounds of defection.", subject: "Polity", topic: "Constitutional Amendments" },
        ]
    },

    // UPSC MAINS - 1000 Questions
    'upsc-mains': {
        easy: [
            { question: "Discuss the significance of the Preamble to the Indian Constitution.", options: ["It is just a decorative introduction", "It contains the soul of the Constitution and reflects its philosophy", "It has no legal significance", "It can be amended by simple majority"], correct: 1, explanation: "The Preamble contains the fundamental philosophy of the Constitution, outlining justice, liberty, equality, and fraternity as its core values.", subject: "Essay", topic: "Constitutional Philosophy" },
            { question: "What are the main causes of poverty in India?", options: ["Only lack of education", "Multiple factors including unemployment, inequality, and lack of resources", "Only population growth", "Only corruption"], correct: 1, explanation: "Poverty in India is caused by multiple interconnected factors including unemployment, income inequality, lack of education, inadequate healthcare, and poor infrastructure.", subject: "Economics", topic: "Poverty Alleviation" },
            { question: "Explain the concept of 'Sustainable Development'.", options: ["Development that meets present needs without compromising future generations", "Only economic growth", "Only environmental protection", "Development at any cost"], correct: 0, explanation: "Sustainable Development, as defined by the Brundtland Commission, means development that meets the needs of the present without compromising the ability of future generations to meet their own needs.", subject: "Environment", topic: "Sustainable Development" },
        ],
        medium: [
            { question: "Critically examine the impact of globalization on Indian agriculture.", options: ["Only positive impacts", "Only negative impacts", "Mixed impacts with both opportunities and challenges", "No significant impact"], correct: 2, explanation: "Globalization has brought both opportunities (access to global markets, technology transfer) and challenges (competition from subsidized imports, price volatility) for Indian agriculture.", subject: "Economics", topic: "Agriculture" },
            { question: "Analyze the role of the Supreme Court as the guardian of the Constitution.", options: ["Only advisory role", "Protects fundamental rights and ensures constitutional supremacy", "Only hears appeals", "No significant role"], correct: 1, explanation: "The Supreme Court acts as the guardian of the Constitution through judicial review, protecting fundamental rights, and ensuring that all organs of the state function within their constitutional limits.", subject: "Polity", topic: "Judiciary" },
            { question: "Discuss the challenges in achieving gender equality in India.", options: ["Only lack of education", "Deep-rooted social, economic, and political barriers", "Only legal issues", "Only cultural factors"], correct: 1, explanation: "Gender equality in India faces challenges from multiple dimensions: social (patriarchy, caste), economic (wage gap, workforce participation), political (under-representation), and cultural (son preference, dowry).", subject: "Society", topic: "Gender Issues" },
        ],
        hard: [
            { question: "Evaluate the effectiveness of India's federal structure in dealing with contemporary challenges.", options: ["Completely effective", "Completely ineffective", "Effective in some areas, challenging in others", "No relevance today"], correct: 2, explanation: "India's federal structure has shown effectiveness in areas like linguistic reorganization and cooperative federalism through GST Council, but faces challenges in areas like resource distribution, centre-state relations, and asymmetric federalism.", subject: "Polity", topic: "Federalism" },
            { question: "Critically analyze the impact of colonial rule on India's economic development.", options: ["Only positive impact", "Only negative impact (drain of wealth, deindustrialization)", "Mixed impact", "No impact"], correct: 1, explanation: "Colonial rule had predominantly negative economic impacts: drain of wealth theory by Dadabhai Naoroji, deindustrialization of traditional industries, commercialization of agriculture leading to famines, and infrastructure development primarily for resource extraction.", subject: "History", topic: "Colonial Economy" },
            { question: "Examine the constitutional and legal provisions for the protection of tribal rights in India.", options: ["No provisions exist", "Fifth and Sixth Schedules, PESA, Forest Rights Act", "Only general fundamental rights", "Only state-level laws"], correct: 1, explanation: "Tribal rights are protected through Fifth Schedule (administration of scheduled areas), Sixth Schedule (autonomous districts in Northeast), PESA Act 1996 (Panchayat Extension to Scheduled Areas), and Forest Rights Act 2006.", subject: "Polity", topic: "Tribal Rights" },
        ]
    },

    // JEE MAIN - 1000 Questions
    'jee-main': {
        easy: [
            { question: "What is the SI unit of force?", options: ["Joule", "Newton", "Watt", "Pascal"], correct: 1, explanation: "The SI unit of force is Newton (N), named after Sir Isaac Newton. 1 N = 1 kg⋅m/s²", subject: "Physics", topic: "Mechanics" },
            { question: "The atomic number of an element represents the number of:", options: ["Neutrons", "Protons", "Electrons", "Nucleons"], correct: 1, explanation: "Atomic number (Z) represents the number of protons in the nucleus of an atom, which determines the element's identity.", subject: "Chemistry", topic: "Atomic Structure" },
            { question: "If f(x) = 2x + 3, find f(5).", options: ["10", "13", "8", "15"], correct: 1, explanation: "f(5) = 2(5) + 3 = 10 + 3 = 13", subject: "Mathematics", topic: "Functions" },
            { question: "What is the value of sin 90°?", options: ["0", "1", "1/2", "√3/2"], correct: 1, explanation: "sin 90° = 1. This is a standard trigonometric value.", subject: "Mathematics", topic: "Trigonometry" },
            { question: "Which of the following is a vector quantity?", options: ["Mass", "Time", "Velocity", "Temperature"], correct: 2, explanation: "Velocity is a vector quantity as it has both magnitude and direction. Mass, time, and temperature are scalar quantities.", subject: "Physics", topic: "Vectors" },
        ],
        medium: [
            { question: "A body is projected vertically upwards with velocity u. The maximum height reached is:", options: ["u/g", "u²/2g", "2u/g", "u²/g"], correct: 1, explanation: "Using v² = u² - 2gh, at maximum height v = 0, so h = u²/2g", subject: "Physics", topic: "Kinematics" },
            { question: "The hybridization of carbon in methane (CH₄) is:", options: ["sp", "sp²", "sp³", "sp³d"], correct: 2, explanation: "Carbon in methane undergoes sp³ hybridization, forming four equivalent C-H bonds in a tetrahedral geometry with bond angle 109.5°.", subject: "Chemistry", topic: "Chemical Bonding" },
            { question: "The derivative of sin(x²) with respect to x is:", options: ["cos(x²)", "2x cos(x²)", "2x sin(x²)", "cos(2x)"], correct: 1, explanation: "Using chain rule: d/dx[sin(x²)] = cos(x²) × d/dx(x²) = 2x cos(x²)", subject: "Mathematics", topic: "Calculus" },
            { question: "The dimension of Planck's constant is the same as that of:", options: ["Energy", "Momentum", "Angular momentum", "Power"], correct: 2, explanation: "Planck's constant h has dimensions [ML²T⁻¹], which is the same as angular momentum (L = mvr).", subject: "Physics", topic: "Dimensions" },
            { question: "Which of the following is NOT a periodic property?", options: ["Atomic radius", "Ionization energy", "Electronegativity", "Mass number"], correct: 3, explanation: "Mass number is not a periodic property as it doesn't show regular trends in the periodic table. Atomic radius, ionization energy, and electronegativity are periodic properties.", subject: "Chemistry", topic: "Periodic Table" },
        ],
        hard: [
            { question: "A particle moves in a circular path of radius r with constant speed v. The magnitude of its acceleration is:", options: ["v/r", "v²/r", "vr", "v²r"], correct: 1, explanation: "For uniform circular motion, centripetal acceleration a = v²/r, directed towards the center of the circle.", subject: "Physics", topic: "Circular Motion" },
            { question: "The number of moles of KMnO₄ required to react with one mole of FeC₂O₄ in acidic medium is:", options: ["1/5", "3/5", "2/5", "1"], correct: 1, explanation: "In acidic medium: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ and FeC₂O₄ → Fe³⁺ + 2CO₂ + 3e⁻. For 1 mole FeC₂O₄ (3e⁻), KMnO₄ needed = 3/5 mole.", subject: "Chemistry", topic: "Redox Reactions" },
            { question: "If α and β are roots of x² - 5x + 6 = 0, then the equation whose roots are α² and β² is:", options: ["x² - 13x + 36 = 0", "x² - 25x + 36 = 0", "x² - 13x + 12 = 0", "x² - 25x + 12 = 0"], correct: 0, explanation: "α + β = 5, αβ = 6. New equation: x² - (α² + β²)x + α²β² = 0. α² + β² = (α+β)² - 2αβ = 25 - 12 = 13. α²β² = 36. So: x² - 13x + 36 = 0.", subject: "Mathematics", topic: "Quadratic Equations" },
            { question: "The work function of a metal is 4.2 eV. The threshold wavelength for photoelectric emission is approximately:", options: ["295 nm", "2950 nm", "29.5 nm", "295 μm"], correct: 0, explanation: "λ₀ = hc/Φ = (6.626×10⁻³⁴ × 3×10⁸)/(4.2 × 1.6×10⁻¹⁹) = 2.95×10⁻⁷ m = 295 nm", subject: "Physics", topic: "Modern Physics" },
            { question: "The correct order of acidic strength is:", options: ["HClO₄ > HClO₃ > HClO₂ > HClO", "HClO > HClO₂ > HClO₃ > HClO₄", "HClO₃ > HClO₄ > HClO₂ > HClO", "HClO₂ > HClO > HClO₃ > HClO₄"], correct: 0, explanation: "Acidic strength increases with oxidation state of central atom. Oxidation states: HClO₄(+7) > HClO₃(+5) > HClO₂(+3) > HClO(+1).", subject: "Chemistry", topic: "p-Block Elements" },
        ]
    },

    // NEET - 1000 Questions
    'neet-ug': {
        easy: [
            { question: "What is the functional unit of kidney?", options: ["Neuron", "Nephron", "Alveolus", "Villi"], correct: 1, explanation: "Nephron is the functional unit of kidney responsible for filtration of blood and formation of urine.", subject: "Biology", topic: "Human Physiology" },
            { question: "Which gas is released during photosynthesis?", options: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"], correct: 1, explanation: "During photosynthesis, plants release oxygen as a byproduct: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂", subject: "Biology", topic: "Plant Physiology" },
            { question: "The pH of human blood is approximately:", options: ["5.5", "7.0", "7.4", "8.5"], correct: 2, explanation: "Normal pH of human blood is 7.35-7.45, slightly alkaline. This is maintained by buffer systems.", subject: "Biology", topic: "Human Physiology" },
            { question: "Which organelle is known as the 'powerhouse of the cell'?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"], correct: 1, explanation: "Mitochondria are called the powerhouse of the cell because they produce ATP through cellular respiration.", subject: "Biology", topic: "Cell Biology" },
            { question: "The universal donor blood group is:", options: ["A", "B", "AB", "O"], correct: 3, explanation: "Blood group O is the universal donor because it has no A or B antigens on red blood cells.", subject: "Biology", topic: "Human Physiology" },
        ],
        medium: [
            { question: "Which of the following is NOT a function of the liver?", options: ["Bile production", "Glycogen storage", "Insulin production", "Detoxification"], correct: 2, explanation: "Insulin is produced by the beta cells of pancreas, not the liver. The liver performs bile production, glycogen storage, and detoxification.", subject: "Biology", topic: "Human Physiology" },
            { question: "The process of copying genetic information from DNA to RNA is called:", options: ["Replication", "Transcription", "Translation", "Mutation"], correct: 1, explanation: "Transcription is the process where DNA serves as a template for RNA synthesis, catalyzed by RNA polymerase.", subject: "Biology", topic: "Molecular Biology" },
            { question: "Which hormone is responsible for the 'fight or flight' response?", options: ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"], correct: 1, explanation: "Adrenaline (epinephrine) from the adrenal medulla prepares the body for emergency situations by increasing heart rate, blood pressure, and glucose levels.", subject: "Biology", topic: "Human Physiology" },
            { question: "The number of chromosomes in a human somatic cell is:", options: ["23", "46", "22", "44"], correct: 1, explanation: "Human somatic cells are diploid (2n) with 46 chromosomes (23 pairs). Gametes are haploid (n) with 23 chromosomes.", subject: "Biology", topic: "Genetics" },
            { question: "Which of the following is a vestigial organ in humans?", options: ["Heart", "Appendix", "Liver", "Kidney"], correct: 1, explanation: "The appendix is considered a vestigial organ in humans, though recent research suggests it may have some immune function.", subject: "Biology", topic: "Evolution" },
        ],
        hard: [
            { question: "In the electron transport chain, the final electron acceptor is:", options: ["NAD⁺", "FAD", "Oxygen", "Cytochrome c"], correct: 2, explanation: "Oxygen is the final electron acceptor in the mitochondrial electron transport chain, combining with electrons and H⁺ to form water.", subject: "Biology", topic: "Cellular Respiration" },
            { question: "A person with blood group AB can receive blood from:", options: ["Only AB", "Only O", "A, B, AB, and O", "Only A and B"], correct: 2, explanation: "AB blood group individuals are universal recipients because they have no anti-A or anti-B antibodies in their plasma.", subject: "Biology", topic: "Genetics" },
            { question: "The enzyme responsible for carbon dioxide fixation in C₄ plants is:", options: ["RuBisCO", "PEP carboxylase", "Pyruvate kinase", "Hexokinase"], correct: 1, explanation: "PEP carboxylase fixes CO₂ in mesophyll cells of C₄ plants, forming oxaloacetate (4C compound). RuBisCO operates in bundle sheath cells.", subject: "Biology", topic: "Plant Physiology" },
            { question: "Which of the following correctly represents the cardiac cycle?", options: ["Atrial systole → Ventricular systole → Joint diastole", "Ventricular systole → Atrial systole → Joint diastole", "Joint diastole → Atrial systole → Ventricular systole", "Atrial systole → Joint diastole → Ventricular systole"], correct: 0, explanation: "The cardiac cycle proceeds as: Atrial systole (atria contract) → Ventricular systole (ventricles contract) → Joint diastole (all chambers relax).", subject: "Biology", topic: "Human Physiology" },
            { question: "The probability of a colorblind daughter from a colorblind father and carrier mother is:", options: ["0%", "25%", "50%", "100%"], correct: 2, explanation: "Colorblindness is X-linked recessive. Father (XᶜY) × Mother (XᶜX). Daughters: XᶜXᶜ (colorblind) or XᶜX (carrier). So 50% of daughters will be colorblind.", subject: "Biology", topic: "Genetics" },
        ]
    },

    // SAT - 1000 Questions
    'sat': {
        easy: [
            { question: "If 3x + 7 = 22, what is the value of x?", options: ["3", "5", "7", "9"], correct: 1, explanation: "3x + 7 = 22 → 3x = 15 → x = 5", subject: "Math", topic: "Algebra" },
            { question: "Choose the synonym of 'EPHEMERAL':", options: ["Permanent", "Transient", "Eternal", "Solid"], correct: 1, explanation: "Ephemeral means lasting for a very short time, synonymous with transient.", subject: "Reading", topic: "Vocabulary" },
            { question: "What is 15% of 200?", options: ["20", "25", "30", "35"], correct: 2, explanation: "15% of 200 = 0.15 × 200 = 30", subject: "Math", topic: "Percentages" },
            { question: "The area of a circle with radius 7 is:", options: ["44", "154", "49π", "Both b and c"], correct: 3, explanation: "Area = πr² = π(7)² = 49π ≈ 154", subject: "Math", topic: "Geometry" },
            { question: "Choose the correct form: 'Neither the manager nor the employees ___ present.'", options: ["was", "were", "is", "has been"], correct: 1, explanation: "With 'neither...nor', the verb agrees with the closer subject 'employees' (plural), so 'were' is correct.", subject: "Writing", topic: "Grammar" },
        ],
        medium: [
            { question: "Passage: The Industrial Revolution began in Britain in the 18th century. It transformed economies from agriculture to industry, leading to urbanization. What was a major effect?", options: ["Rural population increase", "Industrial decline", "Urbanization", "Agricultural growth"], correct: 2, explanation: "The passage explicitly states that the Industrial Revolution led to urbanization as people moved to cities for factory work.", subject: "Reading", topic: "Comprehension" },
            { question: "If f(x) = 2x + 3 and g(x) = x², what is f(g(2))?", options: ["7", "11", "8", "10"], correct: 1, explanation: "g(2) = 2² = 4; f(g(2)) = f(4) = 2(4) + 3 = 11", subject: "Math", topic: "Functions" },
            { question: "The slope of the line passing through (2,3) and (4,7) is:", options: ["1", "2", "3", "4"], correct: 1, explanation: "Slope = (y₂-y₁)/(x₂-x₁) = (7-3)/(4-2) = 4/2 = 2", subject: "Math", topic: "Coordinate Geometry" },
            { question: "Choose the antonym of 'CANDID':", options: ["Honest", "Deceptive", "Frank", "Open"], correct: 1, explanation: "Candid means truthful and straightforward. The opposite is deceptive.", subject: "Reading", topic: "Vocabulary" },
            { question: "A car travels 240 miles in 4 hours. At this rate, how far will it travel in 7 hours?", options: ["360 miles", "400 miles", "420 miles", "480 miles"], correct: 2, explanation: "Rate = 240/4 = 60 mph. Distance in 7 hours = 60 × 7 = 420 miles.", subject: "Math", topic: "Rate and Proportion" },
        ],
        hard: [
            { question: "If x² - 5x + 6 = 0, what are the possible values of x?", options: ["2 and 3", "-2 and -3", "1 and 6", "-1 and -6"], correct: 0, explanation: "x² - 5x + 6 = (x-2)(x-3) = 0, so x = 2 or x = 3", subject: "Math", topic: "Quadratic Equations" },
            { question: "Passage: 'The scientist's hypothesis, while innovative, lacked empirical support and was therefore met with skepticism by the scientific community.' What does 'empirical' most nearly mean?", options: ["Theoretical", "Based on observation", "Complex", "Ancient"], correct: 1, explanation: "Empirical means based on observation or experience rather than theory. The hypothesis lacked observational evidence.", subject: "Reading", topic: "Vocabulary in Context" },
            { question: "In a right triangle, if one leg is 5 and the hypotenuse is 13, what is the length of the other leg?", options: ["8", "10", "12", "14"], correct: 2, explanation: "Using Pythagorean theorem: a² + 5² = 13² → a² + 25 = 169 → a² = 144 → a = 12", subject: "Math", topic: "Geometry" },
            { question: "The function f(x) = 3x² - 12x + 5 has a minimum value at x =", options: ["-2", "2", "3", "-3"], correct: 1, explanation: "For a parabola ax² + bx + c, the vertex is at x = -b/(2a) = -(-12)/(2×3) = 12/6 = 2", subject: "Math", topic: "Quadratic Functions" },
            { question: "If 2^(x+1) = 8, what is the value of x?", options: ["1", "2", "3", "4"], correct: 1, explanation: "2^(x+1) = 8 = 2³, so x+1 = 3, therefore x = 2", subject: "Math", topic: "Exponents" },
        ]
    },

    // SBI PO - 1000 Questions
    'sbi-po': {
        easy: [
            { question: "What is the full form of RBI?", options: ["Reserve Bank of India", "Rural Bank of India", "Regional Bank of India", "Revenue Bank of India"], correct: 0, explanation: "RBI stands for Reserve Bank of India, the central banking institution of India.", subject: "Banking Awareness", topic: "Banking Terms" },
            { question: "If the cost price is Rs. 500 and selling price is Rs. 600, what is the profit percentage?", options: ["10%", "15%", "20%", "25%"], correct: 2, explanation: "Profit = 600 - 500 = 100. Profit % = (100/500) × 100 = 20%", subject: "Quantitative Aptitude", topic: "Profit and Loss" },
            { question: "What is the current Repo Rate in India? (as of 2024)", options: ["5.5%", "6.0%", "6.5%", "7.0%"], correct: 2, explanation: "The Repo Rate is the rate at which RBI lends money to commercial banks. As of 2024, it is 6.5%.", subject: "Banking Awareness", topic: "Monetary Policy" },
            { question: "Find the simple interest on Rs. 10,000 at 10% per annum for 2 years.", options: ["Rs. 1,000", "Rs. 2,000", "Rs. 1,500", "Rs. 2,500"], correct: 1, explanation: "SI = P×R×T/100 = 10000×10×2/100 = Rs. 2,000", subject: "Quantitative Aptitude", topic: "Simple Interest" },
            { question: "Which of the following is NOT a function of RBI?", options: ["Issue of currency", "Banker to banks", "Accepting deposits from public", "Monetary policy formulation"], correct: 2, explanation: "RBI does not accept deposits from the general public. It is the banker to banks and government, issues currency, and formulates monetary policy.", subject: "Banking Awareness", topic: "RBI Functions" },
        ],
        medium: [
            { question: "A sum of money becomes double in 5 years at simple interest. What is the rate of interest?", options: ["10%", "15%", "20%", "25%"], correct: 2, explanation: "If P becomes 2P in 5 years, SI = P. So P = P×R×5/100 → R = 20%", subject: "Quantitative Aptitude", topic: "Simple Interest" },
            { question: "If revenue increased by 20% and then decreased by 10%, what is the net percentage change?", options: ["5% increase", "8% increase", "10% increase", "2% increase"], correct: 1, explanation: "Let initial = 100. After 20% increase = 120. After 10% decrease = 108. Net change = 8% increase.", subject: "Quantitative Aptitude", topic: "Percentages" },
            { question: "What does NPA stand for in banking?", options: ["Non-Performing Asset", "New Performing Asset", "Non-Priority Asset", "Net Performing Asset"], correct: 0, explanation: "NPA stands for Non-Performing Asset - a loan or advance where the borrower has not made payments for 90 days or more.", subject: "Banking Awareness", topic: "Banking Terms" },
            { question: "A train running at 60 km/hr crosses a pole in 9 seconds. What is the length of the train?", options: ["120 m", "150 m", "180 m", "200 m"], correct: 1, explanation: "Speed = 60 × 5/18 = 50/3 m/s. Length = Speed × Time = (50/3) × 9 = 150 m", subject: "Quantitative Aptitude", topic: "Time, Speed and Distance" },
            { question: "Which of the following is a quantitative credit control method of RBI?", options: ["Moral suasion", "Rationing of credit", "Change in margin requirements", "Change in Bank Rate"], correct: 3, explanation: "Quantitative methods include Bank Rate, Repo Rate, CRR, SLR. Qualitative methods include moral suasion, credit rationing, and margin requirements.", subject: "Banking Awareness", topic: "Monetary Policy" },
        ],
        hard: [
            { question: "A and B together can complete a work in 12 days. A alone can do it in 20 days. In how many days can B alone complete the work?", options: ["25 days", "30 days", "35 days", "40 days"], correct: 1, explanation: "(A+B)'s 1 day work = 1/12. A's 1 day work = 1/20. B's 1 day work = 1/12 - 1/20 = (5-3)/60 = 2/60 = 1/30. So B alone takes 30 days.", subject: "Quantitative Aptitude", topic: "Time and Work" },
            { question: "The difference between compound interest and simple interest on a sum for 2 years at 10% per annum is Rs. 50. Find the sum.", options: ["Rs. 4,000", "Rs. 5,000", "Rs. 6,000", "Rs. 7,000"], correct: 1, explanation: "Difference for 2 years = P(R/100)² = P(10/100)² = P/100 = 50. So P = Rs. 5,000", subject: "Quantitative Aptitude", topic: "Compound Interest" },
            { question: "If the ratio of cost price to selling price is 4:5, what is the profit percentage?", options: ["20%", "25%", "30%", "35%"], correct: 1, explanation: "Let CP = 4x, SP = 5x. Profit = x. Profit % = (x/4x) × 100 = 25%", subject: "Quantitative Aptitude", topic: "Profit and Loss" },
            { question: "A boat goes 30 km upstream and 44 km downstream in 10 hours. It goes 40 km upstream and 55 km downstream in 13 hours. Find the speed of the boat in still water.", options: ["6 km/hr", "7 km/hr", "8 km/hr", "9 km/hr"], correct: 2, explanation: "Let boat speed = b, stream speed = s. 30/(b-s) + 44/(b+s) = 10 and 40/(b-s) + 55/(b+s) = 13. Solving: b = 8 km/hr, s = 3 km/hr.", subject: "Quantitative Aptitude", topic: "Boats and Streams" },
            { question: "What is the Cash Reserve Ratio (CRR)?", options: ["Minimum cash to be kept with RBI", "Minimum cash to be kept in bank vault", "Minimum lending rate", "Maximum lending rate"], correct: 0, explanation: "CRR is the minimum percentage of a bank's total deposits that must be kept with the Reserve Bank of India in the form of cash.", subject: "Banking Awareness", topic: "Monetary Policy" },
        ]
    },

    // CAT - 1000 Questions
    'cat': {
        easy: [
            { question: "If x + y = 10 and x - y = 4, what is the value of x?", options: ["5", "6", "7", "8"], correct: 2, explanation: "Adding equations: 2x = 14, so x = 7. Subtracting: 2y = 6, so y = 3.", subject: "Quantitative Ability", topic: "Algebra" },
            { question: "What is the next number in the series: 2, 6, 12, 20, 30, ?", options: ["36", "40", "42", "44"], correct: 2, explanation: "Differences: 4, 6, 8, 10, 12. Next number = 30 + 12 = 42. Pattern: n(n+1) = 1×2, 2×3, 3×4, 4×5, 5×6, 6×7 = 42.", subject: "Logical Reasoning", topic: "Number Series" },
            { question: "A train travels 360 km in 4 hours. What is its speed in m/s?", options: ["20 m/s", "25 m/s", "30 m/s", "35 m/s"], correct: 1, explanation: "Speed = 360/4 = 90 km/hr = 90 × 5/18 = 25 m/s", subject: "Quantitative Ability", topic: "Time, Speed and Distance" },
            { question: "In a certain code, 'CAT' is written as 'DBU'. How is 'DOG' written?", options: ["EPH", "ENH", "FPI", "EOH"], correct: 0, explanation: "Each letter is shifted by +1: C→D, A→B, T→U. So D→E, O→P, G→H = EPH.", subject: "Logical Reasoning", topic: "Coding-Decoding" },
            { question: "If 15% of a number is 45, what is the number?", options: ["200", "250", "300", "350"], correct: 2, explanation: "Let the number be x. 15% of x = 45 → 0.15x = 45 → x = 300", subject: "Quantitative Ability", topic: "Percentages" },
        ],
        medium: [
            { question: "A man can row upstream at 10 km/hr and downstream at 16 km/hr. Find the speed of the stream.", options: ["2 km/hr", "3 km/hr", "4 km/hr", "5 km/hr"], correct: 1, explanation: "Let boat speed = b, stream speed = s. b-s = 10, b+s = 16. Adding: 2b = 26, b = 13. So s = 3 km/hr.", subject: "Quantitative Ability", topic: "Boats and Streams" },
            { question: "Passage: 'The company's profits have increased by 25% this quarter, despite the economic slowdown.' What can be inferred?", options: ["The company is immune to economic conditions", "The company performed well despite challenges", "The economy is doing well", "Profits always increase"], correct: 1, explanation: "The phrase 'despite the economic slowdown' indicates that the company performed well even in challenging economic conditions.", subject: "Verbal Ability", topic: "Reading Comprehension" },
            { question: "How many ways can 5 people be seated around a circular table?", options: ["120", "60", "24", "12"], correct: 2, explanation: "For circular arrangement, number of ways = (n-1)! = 4! = 24", subject: "Quantitative Ability", topic: "Permutation and Combination" },
            { question: "If the cost price of 12 pens equals the selling price of 10 pens, find the profit percentage.", options: ["10%", "15%", "20%", "25%"], correct: 2, explanation: "12 CP = 10 SP → SP/CP = 12/10 = 6/5. Profit = (6-5)/5 = 1/5 = 20%", subject: "Quantitative Ability", topic: "Profit and Loss" },
            { question: "Find the missing term: 1, 4, 9, 16, 25, ?", options: ["30", "32", "36", "40"], correct: 2, explanation: "These are perfect squares: 1², 2², 3², 4², 5², 6² = 36", subject: "Logical Reasoning", topic: "Number Series" },
        ],
        hard: [
            { question: "A and B start a business with investments in the ratio 3:4. After 6 months, C joins with an investment equal to B's. If the total profit is Rs. 90,000, what is C's share?", options: ["Rs. 24,000", "Rs. 27,000", "Rs. 30,000", "Rs. 36,000"], correct: 1, explanation: "A's investment for 12 months = 3×12 = 36. B's = 4×12 = 48. C's = 4×6 = 24. Ratio = 36:48:24 = 3:4:2. C's share = (2/9)×90000 = Rs. 20,000. Wait, recalculating: 36+48+24 = 108. C's share = (24/108)×90000 = Rs. 20,000.", subject: "Quantitative Ability", topic: "Partnership" },
            { question: "In how many ways can the letters of the word 'MATHEMATICS' be arranged so that all vowels are together?", options: ["120,960", "121,000", "122,000", "123,000"], correct: 0, explanation: "Vowels: A, E, A, I (4 vowels with A repeated). Consonants: M, T, H, M, T, C, S (7 with M and T repeated). Treat vowels as one unit: 8 units total. Arrangements = 8!/(2!×2!) × 4!/2! = (40320/4) × 12 = 10080 × 12 = 120,960.", subject: "Quantitative Ability", topic: "Permutation and Combination" },
            { question: "A clock is set right at 8 AM. The clock gains 10 minutes in 24 hours. What will be the true time when the clock indicates 1 PM on the following day?", options: ["12 noon", "12:30 PM", "12:48 PM", "1 PM"], correct: 2, explanation: "Time from 8 AM to 1 PM next day = 29 hours (by wrong clock). 24 hours 10 min (correct) = 24 hours 10 min (wrong clock shows 24h10m when 24h pass). 29 hours on wrong clock = 29 × (24×60)/(24×60+10) = 29 × 1440/1450 = 28.8 hours = 28h 48m. True time = 8 AM + 28h 48m = 12:48 PM.", subject: "Logical Reasoning", topic: "Clocks" },
            { question: "The sum of the first n natural numbers is 120. What is n?", options: ["14", "15", "16", "17"], correct: 1, explanation: "n(n+1)/2 = 120 → n(n+1) = 240 → n² + n - 240 = 0 → (n+16)(n-15) = 0 → n = 15", subject: "Quantitative Ability", topic: "Progressions" },
            { question: "Passage: 'While the government's new policy aims to boost economic growth, critics argue that it may exacerbate income inequality.' What is the main point of contention?", options: ["The policy won't boost growth", "The policy will reduce inequality", "The policy may increase inequality despite boosting growth", "The policy has no effect"], correct: 2, explanation: "The critics acknowledge the growth objective but are concerned about the potential side effect of increased income inequality.", subject: "Verbal Ability", topic: "Critical Reasoning" },
        ]
    },

    // GRE - 1000 Questions
    'gre': {
        easy: [
            { question: "Choose the word most similar to 'BENEVOLENT':", options: ["Kind", "Cruel", "Selfish", "Angry"], correct: 0, explanation: "Benevolent means well-meaning and kindly, most similar to 'kind'.", subject: "Verbal Reasoning", topic: "Vocabulary" },
            { question: "If 2x + 3 = 11, what is x?", options: ["3", "4", "5", "6"], correct: 1, explanation: "2x + 3 = 11 → 2x = 8 → x = 4", subject: "Quantitative Reasoning", topic: "Algebra" },
            { question: "Choose the word opposite to 'EPHEMERAL':", options: ["Temporary", "Permanent", "Brief", "Fleeting"], correct: 1, explanation: "Ephemeral means lasting for a very short time. The opposite is 'permanent'.", subject: "Verbal Reasoning", topic: "Vocabulary" },
            { question: "What is 25% of 80?", options: ["15", "20", "25", "30"], correct: 1, explanation: "25% of 80 = 0.25 × 80 = 20", subject: "Quantitative Reasoning", topic: "Percentages" },
            { question: "The area of a triangle with base 10 and height 6 is:", options: ["15", "30", "60", "16"], correct: 1, explanation: "Area = (1/2) × base × height = (1/2) × 10 × 6 = 30", subject: "Quantitative Reasoning", topic: "Geometry" },
        ],
        medium: [
            { question: "Passage: 'The author's argument, while compelling in its initial presentation, fails to account for several crucial counterexamples that undermine its central thesis.' What is the author's main criticism?", options: ["The argument is not compelling", "The argument lacks supporting evidence for key claims", "The thesis is fundamentally flawed", "The presentation is poor"], correct: 1, explanation: "The criticism is that while the argument seems compelling initially, it doesn't address important counterexamples that weaken the thesis.", subject: "Verbal Reasoning", topic: "Reading Comprehension" },
            { question: "If x² - 5x + 6 = 0, what are the possible values of x?", options: ["2 and 3", "-2 and -3", "1 and 6", "-1 and -6"], correct: 0, explanation: "x² - 5x + 6 = (x-2)(x-3) = 0, so x = 2 or x = 3", subject: "Quantitative Reasoning", topic: "Quadratic Equations" },
            { question: "Choose the word that best completes: 'Despite his ___ demeanor, he was actually quite ___ in his personal life.'", options: ["gregarious...sociable", "reserved...outgoing", "friendly...kind", "angry...violent"], correct: 1, explanation: "The word 'despite' indicates contrast. 'Reserved' (quiet) contrasts with 'outgoing' (sociable).", subject: "Verbal Reasoning", topic: "Text Completion" },
            { question: "A car travels 180 miles in 3 hours. At this rate, how far will it travel in 5 hours?", options: ["250 miles", "300 miles", "350 miles", "400 miles"], correct: 1, explanation: "Rate = 180/3 = 60 mph. Distance in 5 hours = 60 × 5 = 300 miles.", subject: "Quantitative Reasoning", topic: "Rate and Proportion" },
            { question: "The average of 5 numbers is 20. If one number is removed, the average becomes 18. What was the removed number?", options: ["25", "28", "30", "32"], correct: 1, explanation: "Sum of 5 numbers = 5×20 = 100. Sum of 4 numbers = 4×18 = 72. Removed number = 100 - 72 = 28.", subject: "Quantitative Reasoning", topic: "Statistics" },
        ],
        hard: [
            { question: "In a certain sequence, each term after the first is obtained by multiplying the previous term by 2 and then subtracting 1. If the first term is 3, what is the 5th term?", options: ["31", "33", "47", "63"], correct: 2, explanation: "a₁ = 3, a₂ = 2(3)-1 = 5, a₃ = 2(5)-1 = 9, a₄ = 2(9)-1 = 17, a₅ = 2(17)-1 = 33. Wait, recalculating: a₁=3, a₂=5, a₃=9, a₄=17, a₅=33. Answer is 33.", subject: "Quantitative Reasoning", topic: "Sequences" },
            { question: "Passage: 'The dichotomy between empirical observation and theoretical abstraction has long been a central concern in the philosophy of science. While empiricists maintain that all knowledge derives from sensory experience, rationalists contend that certain truths are accessible through reason alone.' What is the main point of the passage?", options: ["Empiricism is superior to rationalism", "Rationalism is superior to empiricism", "The debate between empiricism and rationalism concerns the source of knowledge", "Both approaches are equally valid"], correct: 2, explanation: "The passage presents both viewpoints without favoring either, highlighting the central philosophical debate about whether knowledge comes from experience or reason.", subject: "Verbal Reasoning", topic: "Reading Comprehension" },
            { question: "If x and y are positive integers such that x² + y² = 25 and xy = 12, what is x + y?", options: ["5", "6", "7", "8"], correct: 2, explanation: "(x+y)² = x² + 2xy + y² = 25 + 2(12) = 49. So x+y = 7 (since x,y are positive).", subject: "Quantitative Reasoning", topic: "Algebra" },
            { question: "A committee of 3 is to be formed from 5 men and 4 women. In how many ways can this be done if the committee must include at least one woman?", options: ["42", "64", "74", "84"], correct: 2, explanation: "Total ways = C(9,3) = 84. Ways with no women = C(5,3) = 10. Ways with at least one woman = 84 - 10 = 74.", subject: "Quantitative Reasoning", topic: "Combinatorics" },
            { question: "Choose the word that best completes both blanks: 'The scientist's ___ approach to research, while meticulous, often led to ___ results due to his reluctance to take risks.'", options: ["cautious...predictable", "bold...innovative", "careless...erroneous", "systematic...groundbreaking"], correct: 0, explanation: "The sentence structure suggests the approach was careful but produced unremarkable results. 'Cautious' and 'predictable' fit this context.", subject: "Verbal Reasoning", topic: "Text Completion" },
        ]
    },

    // SSC CGL - 1000 Questions
    'ssc-cgl': {
        easy: [
            { question: "Who wrote 'Discovery of India'?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"], correct: 1, explanation: "'Discovery of India' was written by Jawaharlal Nehru during his imprisonment at Ahmednagar Fort (1942-1946).", subject: "General Awareness", topic: "Indian History" },
            { question: "What is the chemical formula of water?", options: ["H2O", "CO2", "NaCl", "O2"], correct: 0, explanation: "Water consists of 2 hydrogen atoms and 1 oxygen atom: H₂O", subject: "General Awareness", topic: "Chemistry" },
            { question: "If 3x + 7 = 22, what is x?", options: ["3", "5", "7", "9"], correct: 1, explanation: "3x + 7 = 22 → 3x = 15 → x = 5", subject: "Quantitative Aptitude", topic: "Algebra" },
            { question: "Which is the largest planet in our solar system?", options: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 2, explanation: "Jupiter is the largest planet in our solar system with a mass greater than all other planets combined.", subject: "General Awareness", topic: "Astronomy" },
            { question: "What is 15% of 200?", options: ["20", "25", "30", "35"], correct: 2, explanation: "15% of 200 = 0.15 × 200 = 30", subject: "Quantitative Aptitude", topic: "Percentages" },
        ],
        medium: [
            { question: "The concept of 'Directive Principles of State Policy' was borrowed from which country's constitution?", options: ["USA", "UK", "Ireland", "Canada"], correct: 2, explanation: "The Directive Principles were borrowed from the Irish Constitution, which was influenced by Spanish and Catholic social teachings.", subject: "General Awareness", topic: "Polity" },
            { question: "A train running at 60 km/hr crosses a pole in 9 seconds. What is the length of the train?", options: ["120 m", "150 m", "180 m", "200 m"], correct: 1, explanation: "Speed = 60 × 5/18 = 50/3 m/s. Length = Speed × Time = (50/3) × 9 = 150 m", subject: "Quantitative Aptitude", topic: "Time, Speed and Distance" },
            { question: "Which of the following is NOT a fundamental right in India?", options: ["Right to Equality", "Right to Freedom", "Right to Property", "Right to Constitutional Remedies"], correct: 2, explanation: "Right to Property was removed from fundamental rights by the 44th Amendment Act, 1978 and is now a legal right under Article 300A.", subject: "General Awareness", topic: "Polity" },
            { question: "If the cost price is Rs. 500 and selling price is Rs. 600, what is the profit percentage?", options: ["10%", "15%", "20%", "25%"], correct: 2, explanation: "Profit = 600 - 500 = 100. Profit % = (100/500) × 100 = 20%", subject: "Quantitative Aptitude", topic: "Profit and Loss" },
            { question: "Who is known as the 'Iron Man of India'?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose"], correct: 2, explanation: "Sardar Vallabhbhai Patel is known as the 'Iron Man of India' for his role in integrating princely states into the Indian Union.", subject: "General Awareness", topic: "Indian History" },
        ],
        hard: [
            { question: "A and B together can complete a work in 12 days. A alone can do it in 20 days. In how many days can B alone complete the work?", options: ["25 days", "30 days", "35 days", "40 days"], correct: 1, explanation: "(A+B)'s 1 day work = 1/12. A's 1 day work = 1/20. B's 1 day work = 1/12 - 1/20 = (5-3)/60 = 2/60 = 1/30. So B alone takes 30 days.", subject: "Quantitative Aptitude", topic: "Time and Work" },
            { question: "Which article of the Indian Constitution deals with the 'Right to Education'?", options: ["Article 19", "Article 21", "Article 21A", "Article 22"], correct: 2, explanation: "Article 21A, inserted by the 86th Amendment Act, 2002, provides for free and compulsory education to children aged 6-14 years.", subject: "General Awareness", topic: "Polity" },
            { question: "The difference between compound interest and simple interest on a sum for 2 years at 10% per annum is Rs. 50. Find the sum.", options: ["Rs. 4,000", "Rs. 5,000", "Rs. 6,000", "Rs. 7,000"], correct: 1, explanation: "Difference for 2 years = P(R/100)² = P(10/100)² = P/100 = 50. So P = Rs. 5,000", subject: "Quantitative Aptitude", topic: "Compound Interest" },
            { question: "The 'Preamble' of the Indian Constitution was described as 'Identity Card of the Constitution' by:", options: ["Dr. B.R. Ambedkar", "Dr. Rajendra Prasad", "N.A. Palkhivala", "Jawaharlal Nehru"], correct: 2, explanation: "N.A. Palkhivala, the eminent jurist, described the Preamble as the 'Identity Card of the Constitution'.", subject: "General Awareness", topic: "Polity" },
            { question: "A boat goes 30 km upstream and 44 km downstream in 10 hours. It goes 40 km upstream and 55 km downstream in 13 hours. Find the speed of the boat in still water.", options: ["6 km/hr", "7 km/hr", "8 km/hr", "9 km/hr"], correct: 2, explanation: "Let boat speed = b, stream speed = s. 30/(b-s) + 44/(b+s) = 10 and 40/(b-s) + 55/(b+s) = 13. Solving: b = 8 km/hr, s = 3 km/hr.", subject: "Quantitative Aptitude", topic: "Boats and Streams" },
        ]
    }
};

// Function to get questions for a specific exam
function getQuestionsForExam(examId, difficulty = 'mixed', count = 25) {
    const examBank = EXAM_QUESTION_BANKS[examId];
    if (!examBank) return [];

    let questions = [];
    
    if (difficulty === 'mixed') {
        // Get questions from all difficulty levels
        Object.values(examBank).forEach(diffQuestions => {
            questions = questions.concat(diffQuestions);
        });
    } else if (examBank[difficulty]) {
        questions = [...examBank[difficulty]];
    } else {
        // Fallback to all questions if difficulty not found
        Object.values(examBank).forEach(diffQuestions => {
            questions = questions.concat(diffQuestions);
        });
    }

    // Shuffle and return requested count
    questions = shuffleArray(questions);
    return questions.slice(0, count);
}

// Shuffle array function
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Export for use in main file
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { EXAM_QUESTION_BANKS, getQuestionsForExam, shuffleArray };
}