// List of books
const books = [
    {
        title: "Police Bharati prashna sanch",
        author: "K.K.Bhunekar",
        year: "2023",
        description: "प्रश्न संच.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "4.0",
        owner: "Dipak",
        image: "1.jpg"
    },
    {
        title: "PSI STI ASO",
        author: "Tatyancha Tokhala",
        year: "2018",
        description: "परीक्षा मार्गदर्शक.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "4.0",
        owner: "Harshal",
        image: "2.jpg"
    },
    {
        title: "Mathematics",
        author: "Nitin Mahale",
        year: "2021",
        description: "Maths.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "4.2",
        owner: "Ganesh",
        image: "3.jpg"
    },
    {
        title: "SSC GD",
        author: "Ankit Bhati",
        year: "2023",
        description: "Maths.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "4.8",
        owner: "Dipak",
        image: "4.jpg"
    },
    {
        title: "SSC GD",
        author: "Ankit Bhati",
        year: "2023",
        description: "सामान्य हिंदी.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "5.jpg"
    },
    //hiii
    {
        title: "SSC GD",
        author: "Ankit Bhati",
        year: "2023",
        description: "सामान्य अध्ययन.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "6.jpg"
    },
    {
        title: "SSC GD",
        author: "Ankit Bhati",
        year: "2023",
        description: "Reasoning.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "7.jpg"
    },
    {
        title: "Mega",
        author: "के के भुतेकर",
        year: "2023",
        description: " सामान्य ज्ञान .",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "8.jpg"
    },
    {
        title: "Maths",
        author: "dO. R.S.AGRAWAL",
        year: "2023",
        description: " अंकगणित स्पष्टिकात्मक आणि वस्तुनिष्ठ प्रश्न.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "9.jpg"
    },
    {
        title: "POLICE BHARATI",
        author: "VITTAL BADE",
        year: "2023",
        description: "पोलीस भरती प्रश्नपत्रिका संच  भाग एक.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "10.jpg"
    },
    {
        title: "MARATHI VYAKARAN",
        author: "R.R.VALAMBE",
        year: "2023",
        description: "मराठी व्याकरण.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "11.jpg"
    },
    {
        title: "POLICE BHARATI",
        author: "Ankit Bhati",
        year: "2023",
        description: "पोलीस भरती प्रश्नपत्रिका संच भाग 2.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "13.jpg"
    },
    {
        title: "TOKALA",
        author: "VITTAL PUNGALE",
        year: "2023",
        description: " ठोकळा वेदिका पब्लिकेशन द्वितीय आवृत्ती.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "14.jpg"
    },
    {
        title: "MARATHI",
        author: "BALASAHEBH SHINDE",
        year: "2023",
        description: "मराठी घटक निहाय प्रश्नसंच भाग एक बाळासाहेब शिंदे.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "15.jpg"
    },
    {
        title: "MEGA",
        author: "K.K.BHUTEKAR",
        year: "2023",
        description: "मेघा 15200 पोलीस भरती प्रश्नसंच के के भुतेकर.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "16.jpg"
    },
    {
        title: "POLICE BHARATI",
        author: "Ankit Bhati",
        year: "2023",
        description: "44 हजार पोलीस भरती प्रश्नांचा अभ्यास भाग एक.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "17.jpg"
    },
    {
        title: "666+ JAMBO",
        author: "Ankit Bhati",
        year: "2023",
        description: "666 जम्बो पोलीस भरती प्रश्नपत्रिका संच भाग 2.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "18.jpg"
    },
    {
        title: "MATHS",
        author: " unkown",
        year: "2023",
        description: "वस्तुनिष्ठ अंकगणित.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "19.jpg"
    },
    {
        title: "ELECTRISHIAN TREDE",
        author: "ENGI. MAHENDRA PINDEL",
        year: "2023",
        description: "'रामबाण'वस्तुनिष्ठ प्रश्न का हल सहित संकलन 11500+ वस्तुनिष्ठ प्रश्न",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "20.jpg"
    },
    {
        title: "ELECTRISHIAN THEORY",
        author: "ENGI. MAHENDRA PINDEL",
        year: "2023",
        description: "'ब्रह्मास्त्र'",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "21.jpg"
    },
    {
        title: "MEGA",
        author: "K.K.BHUTEKAR",
        year: "2023",
        description: "18300 पोलीस भरती प्रश्नसंच.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "22.jpg"
    },
    {
        title: "MARATHI",
        author: "BALASAHEBH SHINDE",
        year: "2023",
        description: "मराठी व्याकरण सतरावी आवृत्ती.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "23.jpg"
    },
    {
        title: "ENGLISH",
        author: "BALASAHEB SHINDE",
        year: "2023",
        description: "इंग्रजी व्याकरण.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "24.jpg"
    },
    {
        title: "REASONING",
        author: "PRA. SATISH VASE",
        year: "2023",
        description: "बुद्धिमत्ता बेसिक टू ऍडव्हान्स.",
        availability: "Available",
        department: "GIRLS LABRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "25.jpg"
    },
    {
        title: "MATHS",
        author: "PRA. SATISH VASE",
        year: "2023",
        description: "गणित मधील शॉर्ट मेथड चा महाराजा.",
        availability: "Available",
        department: "GIRLS LABRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "26.jpg"
    },            {
        title: "MARATI",
        author: "M.R.VALMBE",
        year: "2023",
        description: "मराठी व्याकरण शब्दरत्न.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "27.jpg"
    },
    {
        title: "TRAFFIC POLICE",
        author: "INDRAJIT SALUNKHE",
        year: "2023",
        description: "वाहन चालक भरती.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "28.jpg"
    },
    {
        title: "GEOGRAPHY",
        author: "SRI.KAPIL PAVAR",
        year: "2023",
        description: "महाराष्ट्राचा भूगोल.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "29.jpg"
    },
    {
        title: "ENGLISH",
        author: "P.G.GANDHELE",
        year: "2023",
        description: " इंग्लिश स्पीकिंग कोर्स",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "30.jpg"
    },
    {
        title: "ELECTRONIC",
        author: "TRIMBAK WAGHMARE",
        year: "2023",
        description: "आयटीआय",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "31.jpg"
    },
    {
        title: "POLICE BHARATI",
        author: "VITTAL BADE",
        year: "2023",
        description: ".",
        availability: " सोल्युशन",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "32.jpg"
    },
    {
        title: "POLICE BHARATI",
        author: " ",
        year: "2023",
        description: " संपूर्ण मार्गदर्शन.",
        availability: "Available",
        department: "GIRLS LABRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "33.jpg"
    },
    {
        title: "MARTHI",
        author: "BALASAHEB SHINDE",
        year: "2023",
        description: " मराठी व्याकरण.",
        availability: "Available",
        department: "GIRLS LABRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "34.jpg"
    },
    {
        title: "MEGA",
        author: "K.K.BHUTEKAR",
        year: "2023",
        description: "सामान्य ज्ञान 4 आवृत्ती.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "35.jpg"
    },
    {
        title: "MAHAVITARAN",
        author: "PRADIP KAMALE",
        year: "2023",
        description: " सराव प्रश्नसंच.",
        availability: "Available",
        department: "GIRLS LABRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "36.jpg"
    },
    {
        title: "BUILDING CONSTRUCTION",
        author: "DR. B.C.PUNMIA",
        year: "2023",
        description: "BUILDING CONSTRUCTION.",
        availability: "Available",
        department: "GIRLS LABRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "37.jpg"
    },
    {
        title: "SSC",
        author: " ",
        year: "2023",
        description: " सामान्य अध्ययन PYQ's.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "38.jpg"
    },
    {
        title: "JAMBO",
        author: "SIDDHESHWAR HADAVE",
        year: "2023",
        description: "40000+  घटक वर्गीकृत खोल विश्लेषण.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "39.jpg"
    },            {
        title: "280 MEGA",
        author: "K.K.BHUTEKAR",
        year: "2023",
        description: " प्रश्नसंच",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "40.jpg"
    },            {
        title: "CIVIL ENGINEERING",
        author: " ",
        year: "2023",
        description: "SOLVED PAPERS 2.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "41.jpg"
    },            {
        title: "MATHS",
        author: "SACHIN DAVALE",
        year: "2023",
        description: "अंकगणित.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "42.jpg"
    },            {
        title: "CIVIL ENGINEERING",
        author: " ",
        year: "2023",
        description: "SOLVED PAPERS 3.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "43.jpg"
    },            {
        title: "CIVIL ENGINEERING",
        author: " ",
        year: "2023",
        description: "SOLVED PAPERS 5.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "44.jpg"
    },            {
        title: "CIVIL ENGINEERING",
        author: " ",
        year: "2023",
        description: "SOLVED PAPERS 5.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "45.jpg"
    },            {
        title: "SANVIDHAN",
        author: " ",
        year: "2023",
        description: "भारताचे संविधान",
        availability: "Available",
        department: "GIRLS LABRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "46.jpg"
    },            {
        title: "INDIA",
        author: "RANJAN KOLAMBE",
        year: "2023",
        description: "भारतीय राज्यघटना आणि प्रशासन.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "kunal",
        image: "47.jpg"
    },            {
        title: "HISTORY OF MAHARATRA",
        author: "S.S.GATHAL",
        year: "2023",
        description: "आधुनिक महाराष्ट्राचा इतिहास.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "48.jpg"
    },            {
        title: "ENGLISH",
        author: "SP BAKSHI",
        year: "2023",
        description: "जनरल इंग्लिश.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "49.jpg"
    },            {
        title: "SUBCONSIOUS MIND",
        author: "JOSEF MARFI",
        year: "2023",
        description: "THE POWER OF YOUR.",
        availability: "Available",
        department: "GIRLS LABRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "50.jpg"
    },            {
        title: "SCIENCE",
        author: "SACHIN BHASKE",
        year: "2023",
        description: "सामान्य विज्ञान.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "51.jpg"
    },            {
        title: "ARTHVYASTHA",
        author: "RANJAN KOLAMBE",
        year: "2023",
        description: "भारतीय अर्थव्यवस्था.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "52.jpg"
    },            {
        title: "35000+ JAMBO",
        author: "SIDDDHESHWAR HADAVE",
        year: "2023",
        description: "5000 जम्बो मेगा पोलीस भरती.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "53.jpg"
    },            {
        title: "40,000+ JAMBO",
        author: "SIDDDHESHWAR HADAVE",
        year: "2023",
        description: "40,000 जम्बो मेगा पोलीस भरती.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "54.jpg"
    },            {
        title: "REASONING",
        author: "MANISH SIR",
        year: "2023",
        description: "बुद्धिमत्ता चाचणी व तर्कशक्ती परीक्षक.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "55.jpg"
    },            {
        title: "MATHS",
        author: "SACHIN JAGATAP",
        year: "2023",
        description: "अंकगणित मॅथेमॅटिक्स.",
        availability: "Available",
        department: "GIRLS LABRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "56.jpg"
    },            {
        title: "SCIENCE",
        author: "LUCENT'S",
        year: "2023",
        description: "सामान्य ज्ञान जीके.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "57.jpg"
    },            {
        title: "MARATHI",
        author: "BALASAHEB SHINDE",
        year: "2023",
        description: "मराठी व्याकरण सतरावी आवृत्ती.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "58.jpg"
    },            {
        title: "ELECTRISHIAN",
        author: " ",
        year: "2023",
        description: "इलेक्ट्रिशियन ट्रेड पन्नास हजार प्लस बुलेट.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "Kunal",
        image: "59.jpg"
    },
    {
        title: "MPSC,POLICE",
        author: "SIDDHESHWAR HADAVE",
        year: "2023",
        description: "मुंबई जिल्हा विशेष.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "60.jpg"
    },            {
        title: "TALATHI",
        author: "SIDDHESHWAR HADAVE",
        year: "2023",
        description: "महापरीक्षा पोर्टल प्रश्नपत्रिका संच स्पष्टीकरणासह.",
        availability: "Available",
        department: "SHRI ANIL AMBAR LIBRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "61.jpg"
    },            {
        title: "RAILWAY",
        author: " ",
        year: "2020",
        description: "रेल्वे सामान्य विज्ञान विगत 28 वर्ष का हाल प्रश्नपत्रिका सहित.",
        availability: "Available",
        department: "GIRLS LABRARY",
        rating: "3.9",
        owner: "Kunal",
        image: "62.jpg"
    },            {
        title: "10TH",
        author: "NAVANIT",
        year: "2023",
        description: "विज्ञान आणि तंत्रज्ञान भाग 2 दहावी.",
        availability: "Available",
        department: "GIRLS LABRARY",
        rating: "3.9",
        owner: "CHAITANYA",
        image: "63.jpg"
    },            {
        title: "10TH",
        author: "NAVANIT",
        year: "2023",
        description: "इतिहास व राज्यशास्त्र.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "CHAITANYA",
        image: "64.jpg"
    },            {
        title: "10TH",
        author: "NAVANIT",
        year: "2023",
        description: "गणित भाग 2.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "CHAITANYA",
        image: "65.jpg"
    },            {
        title: "10TH",
        author: "NAVANIT",
        year: "2023",
        description: "गणित भाग 1.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "CHAITANYA",
        image: "66.jpg"
    },            {
        title: "10TH",
        author: "NAVANIT",
        year: "2023",
        description: "भूगोल.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "CHAITANYA",
        image: "67.jpg"
    },            {
        title: "9TH MATHS",
        author: "SSC",
        year: "2019",
        description: "गणित भाग 2 इयत्ता नववी.",
        availability: "Available",
        department: "Swami Vivekand Library",
        rating: "3.9",
        owner: "CHAITANYA",
        image: "68.jpg"
    },
    {
        title: "HISTORY",
        author: "SCC",
        year: "2019",
        description: "",
        availability: "Available",
        department: "इयत्ता नववी राज्यशास्त्र",
        rating: "3.9",
        owner: "CHAITANYA",
        image: "69.jpg"
    },            
];
