const playfield = document.getElementById("playfield");
const fighter = document.getElementById("fighter");
const heartsEl = document.getElementById("hearts");
const scoreEl = document.getElementById("score");
const highScoreEl = document.getElementById("high-score");
const modeLanguageEl = document.getElementById("mode-language");
const modeDifficultyEl = document.getElementById("mode-difficulty");
const startScreen = document.getElementById("start-screen");
const startBtn = document.getElementById("start-btn");
const restartTopBtn = document.getElementById("restart-top-btn");
const restartConfirm = document.getElementById("restart-confirm");
const confirmYesBtn = document.getElementById("confirm-yes");
const confirmNoBtn = document.getElementById("confirm-no");
const menuTitle = document.getElementById("menu-title");
const menuSubtitle = document.getElementById("menu-subtitle");
const menuHighEnLabel = document.getElementById("menu-high-en-label");
const menuHighKoLabel = document.getElementById("menu-high-ko-label");
const menuHighEn = document.getElementById("menu-high-en");
const menuHighKo = document.getElementById("menu-high-ko");
const wordSource = document.getElementById("word-source");
const sourceHand = document.getElementById("source-hand");
const sourceName = document.getElementById("source-name");
const gameOverSplash = document.getElementById("game-over-splash");
const form = document.getElementById("typing-form");
const input = document.getElementById("typing-input");

const EN_WORD_PAIRS = [
  ["apple", "사과"], ["orange", "오렌지"], ["banana", "바나나"], ["grape", "포도"], ["peach", "복숭아"],
  ["melon", "멜론"], ["cloud", "구름"], ["storm", "폭풍"], ["breeze", "산들바람"], ["winter", "겨울"],
  ["spring", "봄"], ["summer", "여름"], ["autumn", "가을"], ["forest", "숲"], ["river", "강"],
  ["ocean", "바다"], ["island", "섬"], ["garden", "정원"], ["flower", "꽃"], ["rocket", "로켓"],
  ["planet", "행성"], ["galaxy", "은하"], ["comet", "혜성"], ["school", "학교"], ["teacher", "선생님"],
  ["student", "학생"], ["pencil", "연필"], ["notebook", "공책"], ["bridge", "다리"], ["camera", "카메라"],
  ["guitar", "기타"], ["window", "창문"], ["energy", "에너지"], ["memory", "기억"], ["future", "미래"],
  ["silver", "은빛"], ["yellow", "노랑"], ["travel", "여행"], ["engine", "엔진"], ["friend", "친구"],
  ["family", "가족"], ["market", "시장"], ["doctor", "의사"], ["artist", "예술가"], ["dragon", "용"],
  ["nature", "자연"], ["basket", "바구니"], ["harvest", "수확"], ["shadow", "그림자"], ["sunrise", "일출"],
  ["sunset", "일몰"], ["thunder", "천둥"], ["whisper", "속삭임"], ["castle", "성"], ["village", "마을"],
  ["highway", "고속도로"], ["library", "도서관"], ["battery", "배터리"], ["network", "네트워크"], ["journey", "여정"],
  ["ticket", "티켓"], ["button", "버튼"], ["pocket", "주머니"], ["shelter", "대피소"], ["signal", "신호"],
  ["harbor", "항구"], ["captain", "선장"], ["rescue", "구조"], ["pioneer", "개척자"], ["science", "과학"],
  ["gravity", "중력"], ["magnet", "자석"], ["quantum", "양자"], ["coconut", "코코넛"], ["pumpkin", "호박"],
  ["lantern", "등불"], ["glacier", "빙하"], ["desert", "사막"], ["meadow", "초원"], ["fountain", "분수"],
  ["station", "역"], ["compass", "나침반"], ["puzzle", "퍼즐"], ["victory", "승리"], ["mission", "임무"],
  ["canyon", "협곡"], ["parachute", "낙하산"], ["satellite", "위성"], ["airport", "공항"], ["airplane", "비행기"],
  ["backpack", "배낭"], ["balcony", "발코니"], ["beacon", "봉수대"], ["blanket", "담요"], ["blossom", "꽃송이"],
  ["border", "국경"], ["bottle", "병"], ["branch", "나뭇가지"], ["campfire", "모닥불"], ["carpet", "카펫"],
  ["carriage", "마차"], ["ceiling", "천장"], ["century", "세기"], ["chamber", "방"], ["channel", "수로"],
  ["chapter", "장"], ["charcoal", "숯"], ["chimney", "굴뚝"], ["citizen", "시민"], ["climate", "기후"],
  ["companion", "동반자"], ["concert", "음악회"], ["corridor", "복도"], ["crystal", "수정"], ["curtain", "커튼"],
  ["dawn", "새벽"], ["decade", "십년"], ["delta", "삼각주"], ["device", "장치"], ["diamond", "다이아몬드"],
  ["dolphin", "돌고래"], ["domain", "영역"], ["donation", "기부"], ["dreamer", "몽상가"], ["drizzle", "이슬비"],
  ["dungeon", "지하감옥"], ["eagle", "독수리"], ["echo", "메아리"], ["empire", "제국"], ["envelope", "봉투"],
  ["evening", "저녁"], ["factory", "공장"], ["feather", "깃털"], ["festival", "축제"], ["firefly", "반딧불이"],
  ["firewood", "장작"], ["flavor", "풍미"], ["freedom", "자유"], ["gallery", "전시관"], ["gateway", "관문"],
  ["gentleman", "신사"], ["glimmer", "반짝임"], ["helmet", "헬멧"], ["horizon", "지평선"], ["iceberg", "빙산"],
  ["insect", "곤충"], ["jacket", "재킷"], ["jungle", "밀림"], ["kernel", "알맹이"], ["kingdom", "왕국"],
  ["ladder", "사다리"], ["language", "언어"], ["lemon", "레몬"], ["machine", "기계"], ["manager", "관리자"],
  ["marble", "대리석"], ["merchant", "상인"], ["midnight", "자정"], ["mineral", "광물"], ["miracle", "기적"],
  ["monster", "괴물"], ["mountain", "산"], ["museum", "박물관"], ["nebula", "성운"], ["notion", "개념"],
  ["novel", "소설"], ["orchard", "과수원"], ["package", "소포"], ["palace", "궁전"], ["parade", "행진"],
  ["passenger", "승객"], ["pasture", "목초지"], ["pattern", "무늬"], ["pepper", "후추"], ["phoenix", "불사조"],
  ["pirate", "해적"], ["platform", "승강장"], ["prairie", "대평원"], ["premium", "프리미엄"], ["process", "과정"],
  ["project", "계획"], ["promise", "약속"], ["protein", "단백질"], ["quartz", "석영"], ["radar", "레이더"],
  ["rainbow", "무지개"], ["ranger", "순찰대"], ["recipe", "조리법"], ["region", "지역"], ["report", "보고서"],
  ["rhythm", "리듬"], ["sailor", "선원"], ["sandwich", "샌드위치"], ["sapphire", "사파이어"], ["script", "대본"],
  ["season", "계절"], ["servant", "하인"], ["shield", "방패"], ["shoulder", "어깨"], ["singer", "가수"],
  ["sketch", "스케치"], ["snowfall", "강설"], ["soldier", "병사"], ["sparkle", "반짝임"], ["speaker", "화자"],
  ["spirit", "정신"], ["stadium", "경기장"], ["starlight", "별빛"], ["statue", "동상"], ["stream", "시냇물"],
  ["sunlight", "햇빛"], ["surface", "표면"], ["surprise", "놀람"], ["temple", "사원"], ["theater", "극장"],
  ["timber", "목재"], ["tourist", "관광객"], ["tractor", "트랙터"], ["treasure", "보물"], ["tribe", "부족"],
  ["tunnel", "터널"], ["unicorn", "유니콘"], ["universe", "우주"], ["vacation", "휴가"], ["valley", "계곡"],
  ["velvet", "벨벳"], ["vendor", "노점상"], ["voyage", "항해"], ["warrior", "전사"], ["waterfall", "폭포"],
  ["weekend", "주말"], ["wildlife", "야생동물"], ["willow", "버드나무"], ["winner", "우승자"], ["wizard", "마법사"],
  ["workshop", "작업실"], ["xylophone", "실로폰"], ["yogurt", "요구르트"], ["zebra", "얼룩말"], ["zodiac", "황도대"],
  ["zucchini", "주키니"], ["anchor", "닻"], ["anthem", "찬가"], ["apron", "앞치마"], ["archive", "기록보관소"],
  ["armor", "갑옷"], ["arrow", "화살"], ["ascent", "상승"], ["attic", "다락"], ["aurora", "오로라"],
  ["avalanche", "눈사태"], ["badge", "배지"], ["banner", "깃발"], ["barrel", "통"], ["beetle", "딱정벌레"],
  ["berry", "베리"], ["biscuit", "비스킷"], ["cabinet", "찬장"], ["campus", "캠퍼스"], ["candle", "양초"],
  ["cavern", "동굴"], ["cellar", "지하실"], ["charter", "헌장"], ["citadel", "요새"], ["clover", "클로버"],
  ["cobweb", "거미줄"], ["cookie", "쿠키"], ["cottage", "오두막"], ["courier", "택배원"], ["crescent", "초승달"],
  ["current", "해류"], ["custom", "관습"], ["daylight", "주광"], ["deck", "갑판"], ["destiny", "운명"],
  ["diploma", "졸업장"], ["drawer", "서랍"], ["dynasty", "왕조"], ["emerald", "에메랄드"], ["erosion", "침식"],
  ["falcon", "매"], ["famine", "기근"], ["farmer", "농부"], ["ferris", "관람차"], ["finger", "손가락"],
  ["fireplace", "벽난로"], ["flame", "불꽃"], ["fortune", "행운"], ["fossil", "화석"], ["foundry", "주조소"],
  ["frontier", "변경"], ["furnace", "용광로"], ["geyser", "간헐천"], ["goblin", "고블린"], ["granite", "화강암"],
  ["griffin", "그리핀"], ["grove", "작은숲"], ["gulf", "만"], ["hammer", "망치"], ["hangar", "격납고"],
  ["hermit", "은둔자"], ["honey", "꿀"], ["hotspot", "명소"], ["hunter", "사냥꾼"], ["hurdle", "장애물"],
  ["hybrid", "혼합체"], ["ignite", "점화"], ["invoice", "청구서"], ["javelin", "창"], ["jigsaw", "직소퍼즐"],
  ["journal", "일지"], ["jupiter", "목성"], ["keystone", "핵심"], ["kettle", "주전자"], ["keyword", "핵심어"],
  ["latitude", "위도"], ["legacy", "유산"], ["legend", "전설"], ["leopard", "표범"], ["lilac", "라일락"],
  ["limestone", "석회암"], ["listener", "청자"], ["lizard", "도마뱀"], ["locomotive", "기관차"], ["luggage", "짐"],
  ["lunar", "달의"]
];

const WORDS_EN = EN_WORD_PAIRS.map(([en]) => en);
const EN_TO_KO = Object.fromEntries(EN_WORD_PAIRS);
const KO_TO_EN = EN_WORD_PAIRS.reduce((acc, [en, ko]) => {
  if (!acc[ko]) acc[ko] = en;
  return acc;
}, {});
const WORDS_KO_TRANSLATABLE = Object.keys(KO_TO_EN);

const WORDS_KO = Array.from(new Set([
  ...EN_WORD_PAIRS.map(([, ko]) => ko),
  "풍경", "바람결", "소망", "기쁨", "설렘", "용기", "친절", "평화", "노을", "눈부심",
  "모험", "발자국", "공원", "광장", "공기", "강변", "호수", "수평선", "산책", "바닷가",
  "꽃밭", "나무숲", "별무리", "은빛달", "햇살길", "파도소리", "노래", "춤", "미소", "웃음",
  "약속", "응원", "희망", "새싹", "열매", "가로등", "신호등", "횡단보도", "골목", "주택",
  "아파트", "마당", "지붕", "계단", "복도", "문손잡이", "열쇠", "시계", "달력", "우산",
  "장화", "코트", "목도리", "장갑", "모자", "가방", "물병", "도시락", "빵집", "서점",
  "영화관", "공연장", "운동장", "체육관", "야구장", "축구장", "농구장", "수영장", "헬스장", "공항버스",
  "기차역", "지하철", "택시", "자전거", "오토바이", "자동차", "버스정류장", "주차장", "톨게이트", "휴게소",
  "박람회", "전시장", "연구실", "실험실", "발명", "관측", "탐험", "기록", "통계", "지도",
  "지형", "기후변화", "사계절", "태양빛", "달빛", "별자리", "유성", "행로", "궤도", "중심",
  "외곽", "경계", "질서", "균형", "리듬감", "속도", "방향", "기준", "규칙", "도전",
  "성장", "노력", "집중", "연습", "복습", "정답", "오답", "문제집", "수업", "강의",
  "시험", "발표", "토론", "설명", "질문", "답변", "단서", "해결", "결과", "과정",
  "창의", "상상", "아이디어", "계획표", "일정", "목표", "완성", "출발", "도착", "귀환",
  "환영", "축하", "감사", "배려", "신뢰", "협력", "연결", "소통", "이해", "공감",
  "휴식", "명상", "여유", "안정", "회복", "건강", "식단", "수분", "비타민", "단백질식",
  "채소", "과일", "잡곡", "요리", "간식", "아침밥", "점심밥", "저녁밥", "식탁", "주방",
  "프라이팬", "냄비", "도마", "칼", "그릇", "접시", "수저", "컵", "머그잔", "냉장고"
]));

const DIFFICULTY = {
  "1": {
    label: "1단계",
    spawnBase: 2800,
    spawnMin: 2200,
    speedMin: 10,
    speedMax: 18,
    speedScale: 0.05,
    maxWords: 2
  },
  "2": {
    label: "2단계",
    spawnBase: 2300,
    spawnMin: 1700,
    speedMin: 15,
    speedMax: 25,
    speedScale: 0.1,
    maxWords: 3
  },
  "3": {
    label: "3단계",
    spawnBase: 1800,
    spawnMin: 1250,
    speedMin: 24,
    speedMax: 38,
    speedScale: 0.18,
    maxWords: 5
  },
  "4": {
    label: "4단계",
    spawnBase: 1400,
    spawnMin: 900,
    speedMin: 34,
    speedMax: 52,
    speedScale: 0.3,
    maxWords: 7
  },
  "5": {
    label: "5단계",
    spawnBase: 1100,
    spawnMin: 620,
    speedMin: 44,
    speedMax: 68,
    speedScale: 0.45,
    maxWords: 9
  }
};

const BGM_PROFILES = {
  "1": {
    tempo: 126,
    swing: 0.03,
    targetGain: 0.19,
    melodyType: "triangle",
    chimeType: "sine",
    bassType: "sine",
    melodyCutoff: 4700,
    chimeCutoff: 5600,
    bassCutoff: 1700,
    melodyVolume: 0.072,
    chimeVolume: 0.045,
    bassVolume: 0.036,
    melodyLength: 0.96,
    chimeLength: 0.7,
    bassLength: 1.95,
    kickSteps: [0, 8, 16, 24],
    snareSteps: [12, 28],
    hatBase: 0.014,
    hatAccent: 0.02,
    kickVolume: 0.07,
    snareVolume: 0.022,
    melody: [
      76, 79, 81, 79, 84, 81, 79, 76, 74, 76, 79, 81, 79, 76, 74, 72,
      76, 79, 81, 84, 86, 84, 81, 79, 74, 76, 79, 81, 79, 76, 74, 72
    ],
    chime: [
      null, 88, null, 91, null, 88, null, 86, null, 88, null, 91, null, 88, null, 84,
      null, 89, null, 93, null, 91, null, 89, null, 88, null, 91, null, 88, null, 86
    ],
    bass: [
      48, null, 48, null, 55, null, 55, null, 57, null, 57, null, 53, null, 53, null,
      48, null, 48, null, 55, null, 55, null, 57, null, 57, null, 53, null, 53, null
    ]
  },
  "2": {
    tempo: 142,
    swing: 0.05,
    targetGain: 0.2,
    melodyType: "triangle",
    chimeType: "sine",
    bassType: "square",
    melodyCutoff: 4300,
    chimeCutoff: 4900,
    bassCutoff: 2300,
    melodyVolume: 0.08,
    chimeVolume: 0.038,
    bassVolume: 0.046,
    melodyLength: 0.94,
    chimeLength: 0.62,
    bassLength: 1.85,
    kickSteps: [0, 6, 8, 14, 16, 22, 24, 30],
    snareSteps: [4, 12, 20, 28],
    hatBase: 0.021,
    hatAccent: 0.032,
    kickVolume: 0.085,
    snareVolume: 0.036,
    melody: [
      72, 74, 76, 79, 81, 79, 76, 74, 72, 74, 77, 81, 79, 77, 74, 72,
      74, 76, 79, 83, 81, 79, 76, 74, 72, 74, 76, 79, 77, 76, 74, 72
    ],
    chime: [
      null, 84, null, 86, null, 88, null, 86, null, 84, null, 88, null, 86, null, 84,
      null, 86, null, 89, null, 88, null, 86, null, 84, null, 88, null, 86, null, 84
    ],
    bass: [
      45, null, 45, 48, 52, null, 52, 50, 53, null, 53, 52, 50, null, 50, 48,
      45, null, 45, 48, 52, null, 52, 53, 57, null, 57, 53, 50, null, 50, 48
    ]
  },
  "3": {
    tempo: 154,
    swing: 0.065,
    targetGain: 0.212,
    melodyType: "square",
    chimeType: "triangle",
    bassType: "square",
    melodyCutoff: 3200,
    chimeCutoff: 3600,
    bassCutoff: 1800,
    melodyVolume: 0.09,
    chimeVolume: 0.034,
    bassVolume: 0.058,
    melodyLength: 0.88,
    chimeLength: 0.55,
    bassLength: 1.8,
    kickSteps: [0, 4, 8, 12, 16, 20, 24, 28],
    snareSteps: [6, 14, 22, 30],
    hatBase: 0.028,
    hatAccent: 0.041,
    kickVolume: 0.1,
    snareVolume: 0.044,
    pulseEvery: 16,
    pulseNote: 41,
    pulseLength: 3.3,
    pulseVolume: 0.026,
    pulseCutoff: 780,
    melody: [
      69, 72, 74, 76, 74, 72, 69, 67, 69, 72, 74, 77, 76, 74, 72, 69,
      71, 74, 76, 79, 77, 76, 74, 71, 69, 72, 74, 76, 74, 72, 71, 69
    ],
    chime: [
      null, 81, null, 84, null, 83, null, 81, null, 79, null, 84, null, 83, null, 79,
      null, 83, null, 86, null, 84, null, 83, null, 79, null, 84, null, 83, null, 81
    ],
    bass: [
      41, null, 41, null, 48, null, 48, null, 50, null, 50, null, 46, null, 46, null,
      43, null, 43, null, 50, null, 50, null, 53, null, 53, null, 48, null, 48, null
    ]
  },
  "4": {
    tempo: 166,
    swing: 0.08,
    targetGain: 0.225,
    melodyType: "sawtooth",
    chimeType: "square",
    bassType: "sawtooth",
    melodyCutoff: 2300,
    chimeCutoff: 2600,
    bassCutoff: 1300,
    melodyVolume: 0.092,
    chimeVolume: 0.03,
    bassVolume: 0.064,
    melodyLength: 0.82,
    chimeLength: 0.5,
    bassLength: 1.75,
    kickSteps: [0, 3, 8, 11, 16, 19, 24, 27],
    snareSteps: [6, 14, 22, 30],
    hatBase: 0.034,
    hatAccent: 0.048,
    kickVolume: 0.115,
    snareVolume: 0.052,
    pulseEvery: 8,
    pulseNote: 38,
    pulseLength: 2.2,
    pulseVolume: 0.032,
    pulseCutoff: 650,
    melody: [
      64, 67, 68, 71, 69, 68, 67, 64, 62, 64, 67, 68, 71, 69, 67, 66,
      64, 67, 68, 72, 71, 69, 68, 67, 63, 64, 67, 68, 71, 69, 67, 64
    ],
    chime: [
      null, 76, null, 79, null, 78, null, 76, null, 74, null, 79, null, 78, null, 74,
      null, 77, null, 81, null, 79, null, 78, null, 74, null, 79, null, 78, null, 76
    ],
    bass: [
      40, null, 40, null, 47, null, 47, null, 45, null, 45, null, 43, null, 43, null,
      38, null, 38, null, 45, null, 45, null, 47, null, 47, null, 43, null, 43, null
    ]
  },
  "5": {
    tempo: 178,
    swing: 0.1,
    targetGain: 0.238,
    melodyType: "sawtooth",
    chimeType: "square",
    bassType: "sawtooth",
    melodyCutoff: 1700,
    chimeCutoff: 2100,
    bassCutoff: 980,
    melodyVolume: 0.1,
    chimeVolume: 0.03,
    bassVolume: 0.07,
    melodyLength: 0.78,
    chimeLength: 0.45,
    bassLength: 1.7,
    kickSteps: [0, 2, 6, 8, 10, 14, 16, 18, 22, 24, 26, 30],
    snareSteps: [4, 12, 20, 28],
    hatBase: 0.04,
    hatAccent: 0.055,
    kickVolume: 0.13,
    snareVolume: 0.06,
    pulseEvery: 4,
    pulseNote: 35,
    pulseLength: 1.5,
    pulseVolume: 0.04,
    pulseCutoff: 540,
    melody: [
      60, 63, 66, 65, 63, 62, 60, 58, 59, 62, 65, 66, 65, 63, 62, 59,
      60, 63, 67, 70, 68, 67, 65, 63, 58, 60, 62, 65, 63, 62, 60, 57
    ],
    chime: [
      null, 72, null, 75, null, 74, null, 72, null, 71, null, 75, null, 74, null, 71,
      null, 74, null, 77, null, 75, null, 74, null, 71, null, 75, null, 74, null, 72
    ],
    bass: [
      36, null, 36, null, 43, null, 43, null, 41, null, 41, null, 39, null, 39, null,
      35, null, 35, null, 41, null, 41, null, 43, null, 43, null, 39, null, 39, null
    ]
  }
};

let hearts = 5;
let score = 0;
let highScore = 0;
let words = [];
let running = false;
let gameOver = false;
let lang = "english";
let difficulty = "2";
let lastSpawnAt = 0;
let spawnInterval = DIFFICULTY["2"].spawnBase;
let prev = performance.now();
let audioCtx = null;
let missiles = [];
let pieces = [];
let confirmOpen = false;
let throwFxTimer = null;
let gameOverTimer = null;
let gameOverTransition = false;
let wordDeck = [];
let lastDrawnWord = "";
let laneDeck = [];
let runStartHighScore = 0;
let recordBreakShown = false;
let pendingSpawnTimers = [];
let sourceX = null;
let bgmMasterGain = null;
let bgmToneFilter = null;
let bgmCompressor = null;
let bgmScheduler = null;
let bgmNextTime = 0;
let bgmStep = 0;
let bgmActive = false;
let sharedNoiseBuffer = null;
let currentBgmProfile = BGM_PROFILES["2"];

function getHighKey(language, level) {
  return `typing_rain_high_score_${language}_${level}`;
}

function getSelectedMenuDifficulty() {
  return document.querySelector('input[name="difficulty"]:checked')?.value || difficulty;
}

function getHighRecord(language, level = difficulty) {
  return Number(localStorage.getItem(getHighKey(language, level)) || 0);
}

function setHighRecord(language, level, value) {
  localStorage.setItem(getHighKey(language, level), String(value));
}

function updateMenuRecords() {
  const menuDifficulty = getSelectedMenuDifficulty();
  menuHighEnLabel.textContent = `영어 최고기록 (난이도 ${menuDifficulty})`;
  menuHighKoLabel.textContent = `한글 최고기록 (난이도 ${menuDifficulty})`;
  menuHighEn.textContent = String(getHighRecord("english", menuDifficulty));
  menuHighKo.textContent = String(getHighRecord("korean", menuDifficulty));
}

function getWordPool() {
  return lang === "korean" ? WORDS_KO_TRANSLATABLE : WORDS_EN;
}

function randomWord() {
  const pool = getWordPool();
  return pool[Math.floor(Math.random() * pool.length)];
}

function shuffleWords(list) {
  const arr = [...list];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function refillWordDeck() {
  const shuffled = shuffleWords(getWordPool());
  if (lastDrawnWord && shuffled.length > 1 && shuffled[shuffled.length - 1] === lastDrawnWord) {
    [shuffled[0], shuffled[shuffled.length - 1]] = [shuffled[shuffled.length - 1], shuffled[0]];
  }
  wordDeck = shuffled;
}

function drawWord() {
  if (wordDeck.length === 0) refillWordDeck();
  const word = wordDeck.pop() || randomWord();
  lastDrawnWord = word;
  return word;
}

function getLaneCount() {
  const width = playfield.clientWidth || 900;
  return Math.max(6, Math.min(12, Math.floor(width / 90)));
}

function refillLaneDeck() {
  const count = getLaneCount();
  laneDeck = shuffleWords(Array.from({ length: count }, (_, i) => i));
}

function drawLaneIndex() {
  if (laneDeck.length === 0) refillLaneDeck();
  return laneDeck.pop() ?? 0;
}

function getThrowDuration(speed) {
  const normalized = Math.max(0, Math.min(1, (speed - 10) / 75));
  return Math.round(860 - normalized * 430);
}

function getSourceMetrics() {
  const width = wordSource?.offsetWidth || 324;
  if (!wordSource || !sourceHand) {
    return { width, handOffset: width * 0.62 };
  }
  const sourceRect = wordSource.getBoundingClientRect();
  const handRect = sourceHand.getBoundingClientRect();
  const measured = handRect.left + handRect.width / 2 - sourceRect.left;
  const handOffset = Number.isFinite(measured) ? measured : width * 0.62;
  return {
    width,
    handOffset: Math.max(12, Math.min(width - 12, handOffset))
  };
}

function getSourceCenterBounds(metrics) {
  const playWidth = playfield.clientWidth || 900;
  const minCenter = 8 + metrics.width / 2 - metrics.handOffset;
  const maxCenter = playWidth - 8 + metrics.width / 2 - metrics.handOffset;
  return {
    minCenter: Math.min(minCenter, maxCenter),
    maxCenter: Math.max(minCenter, maxCenter)
  };
}

function handTargetToSourceCenter(targetX, metrics) {
  return targetX + metrics.width / 2 - metrics.handOffset;
}

function scheduleSpawnTimer(callback, delay) {
  let timer = null;
  timer = setTimeout(() => {
    pendingSpawnTimers = pendingSpawnTimers.filter((id) => id !== timer);
    callback();
  }, delay);
  pendingSpawnTimers.push(timer);
  return timer;
}

function initSourcePosition(forceCenter = false) {
  if (!wordSource) return;
  const metrics = getSourceMetrics();
  const bounds = getSourceCenterBounds(metrics);
  if (!Number.isFinite(sourceX) || forceCenter) {
    sourceX = handTargetToSourceCenter((playfield.clientWidth || 900) / 2, metrics);
  }
  sourceX = Math.max(bounds.minCenter, Math.min(bounds.maxCenter, sourceX));
  wordSource.style.transition = "none";
  wordSource.style.left = `${sourceX}px`;
  wordSource.style.transform = "translateX(-50%)";
  void wordSource.offsetWidth;
}

function moveSourceTo(targetX, speed) {
  if (!wordSource) return 0;
  if (!Number.isFinite(sourceX)) initSourcePosition();
  const metrics = getSourceMetrics();
  const bounds = getSourceCenterBounds(metrics);
  const desiredCenter = handTargetToSourceCenter(targetX, metrics);
  const clampedCenter = Math.max(bounds.minCenter, Math.min(bounds.maxCenter, desiredCenter));
  const dist = Math.abs(clampedCenter - sourceX);
  const speedScale = Math.max(0.55, Math.min(1.25, 34 / Math.max(14, speed)));
  const moveMs = Math.round(Math.max(90, Math.min(290, (90 + dist * 0.9) * speedScale)));
  wordSource.style.transition = `left ${moveMs}ms cubic-bezier(0.22, 0.76, 0.22, 1)`;
  wordSource.style.left = `${clampedCenter}px`;
  sourceX = clampedCenter;
  return moveMs;
}

function clearPendingSpawns() {
  for (const timer of pendingSpawnTimers) clearTimeout(timer);
  pendingSpawnTimers = [];
  playfield.querySelectorAll(".word.staged").forEach((el) => el.remove());
}

function updateHud() {
  heartsEl.textContent = Array.from({ length: 5 }, (_, i) => (i < hearts ? "❤" : "♡")).join(" ");
  scoreEl.textContent = String(score);
  highScoreEl.textContent = String(highScore);
  modeLanguageEl.textContent = lang === "korean" ? "한글" : "영어";
  modeDifficultyEl.textContent = DIFFICULTY[difficulty].label;
}

function applyMode() {
  highScore = getHighRecord(lang, difficulty);
  input.placeholder =
    lang === "korean"
      ? "떨어지는 한글 단어를 입력 후 Enter"
      : "떨어지는 영어 단어를 입력 후 Enter";
  updateWordSourceMode();
  updateMenuRecords();
  updateHud();
}

function ensureAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === "suspended") audioCtx.resume();
}

function playUiClickSound() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const top = audioCtx.createOscillator();
  const body = audioCtx.createOscillator();
  const topGain = audioCtx.createGain();
  const bodyGain = audioCtx.createGain();

  top.type = "square";
  top.frequency.setValueAtTime(2100, t);
  top.frequency.exponentialRampToValueAtTime(760, t + 0.04);
  topGain.gain.setValueAtTime(0.0001, t);
  topGain.gain.exponentialRampToValueAtTime(0.045, t + 0.004);
  topGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);

  body.type = "triangle";
  body.frequency.setValueAtTime(620, t);
  body.frequency.exponentialRampToValueAtTime(270, t + 0.055);
  bodyGain.gain.setValueAtTime(0.0001, t);
  bodyGain.gain.exponentialRampToValueAtTime(0.032, t + 0.003);
  bodyGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.06);

  top.connect(topGain);
  body.connect(bodyGain);
  topGain.connect(audioCtx.destination);
  bodyGain.connect(audioCtx.destination);

  top.start(t);
  body.start(t);
  top.stop(t + 0.06);
  body.stop(t + 0.07);
}

function midiToFreq(note) {
  return 440 * Math.pow(2, (note - 69) / 12);
}

function getBgmProfile(level = difficulty) {
  return BGM_PROFILES[level] || BGM_PROFILES["2"];
}

function getBgmStepDuration(profile = currentBgmProfile) {
  return 60 / profile.tempo / 2;
}

function isBgmStepHit(step, patternLength, stepList) {
  if (!stepList || stepList.length === 0) return false;
  const idx = step % patternLength;
  return stepList.includes(idx);
}

function ensureBgmBus() {
  if (!audioCtx) return;
  if (bgmMasterGain) return;
  bgmMasterGain = audioCtx.createGain();
  bgmToneFilter = audioCtx.createBiquadFilter();
  bgmCompressor = audioCtx.createDynamicsCompressor();
  bgmMasterGain.gain.setValueAtTime(0.0001, audioCtx.currentTime);
  bgmToneFilter.type = "highshelf";
  bgmToneFilter.frequency.setValueAtTime(1900, audioCtx.currentTime);
  bgmToneFilter.gain.setValueAtTime(3, audioCtx.currentTime);
  bgmCompressor.threshold.setValueAtTime(-25, audioCtx.currentTime);
  bgmCompressor.knee.setValueAtTime(18, audioCtx.currentTime);
  bgmCompressor.ratio.setValueAtTime(8, audioCtx.currentTime);
  bgmCompressor.attack.setValueAtTime(0.004, audioCtx.currentTime);
  bgmCompressor.release.setValueAtTime(0.1, audioCtx.currentTime);
  bgmMasterGain.connect(bgmToneFilter);
  bgmToneFilter.connect(bgmCompressor);
  bgmCompressor.connect(audioCtx.destination);
}

function getSharedNoiseBuffer() {
  if (!audioCtx) return null;
  if (sharedNoiseBuffer) return sharedNoiseBuffer;
  const len = Math.floor(audioCtx.sampleRate * 0.14);
  const buffer = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < len; i += 1) data[i] = Math.random() * 2 - 1;
  sharedNoiseBuffer = buffer;
  return sharedNoiseBuffer;
}

function playBgmTone(freq, time, duration, type, volume, cutoff = 3200) {
  if (!audioCtx || !bgmMasterGain) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const lowpass = audioCtx.createBiquadFilter();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, time);
  lowpass.type = "lowpass";
  lowpass.frequency.setValueAtTime(cutoff, time);
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.linearRampToValueAtTime(volume, time + Math.min(0.03, duration * 0.35));
  gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
  osc.connect(lowpass);
  lowpass.connect(gain);
  gain.connect(bgmMasterGain);
  osc.start(time);
  osc.stop(time + duration + 0.02);
}

function playBgmKick(time, volume = 0.1, clickVolume = 0.038) {
  if (!audioCtx || !bgmMasterGain) return;
  const osc = audioCtx.createOscillator();
  const click = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const clickGain = audioCtx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(166, time);
  osc.frequency.exponentialRampToValueAtTime(56, time + 0.14);
  click.type = "triangle";
  click.frequency.setValueAtTime(760, time);
  click.frequency.exponentialRampToValueAtTime(210, time + 0.03);
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(volume, time + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.15);
  clickGain.gain.setValueAtTime(0.0001, time);
  clickGain.gain.exponentialRampToValueAtTime(clickVolume, time + 0.002);
  clickGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.04);
  osc.connect(gain);
  click.connect(clickGain);
  gain.connect(bgmMasterGain);
  clickGain.connect(bgmMasterGain);
  osc.start(time);
  click.start(time);
  osc.stop(time + 0.16);
  click.stop(time + 0.05);
}

function playBgmSnare(time, volume = 0.04) {
  if (!audioCtx || !bgmMasterGain) return;
  const noise = audioCtx.createBufferSource();
  const band = audioCtx.createBiquadFilter();
  const gain = audioCtx.createGain();
  noise.buffer = getSharedNoiseBuffer();
  band.type = "bandpass";
  band.frequency.setValueAtTime(2300, time);
  band.Q.setValueAtTime(0.8, time);
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(volume, time + 0.002);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.09);
  noise.connect(band);
  band.connect(gain);
  gain.connect(bgmMasterGain);
  noise.start(time);
  noise.stop(time + 0.1);
}

function playBgmHat(time, volume = 0.018) {
  if (!audioCtx || !bgmMasterGain) return;
  const noise = audioCtx.createBufferSource();
  const highpass = audioCtx.createBiquadFilter();
  const gain = audioCtx.createGain();
  noise.buffer = getSharedNoiseBuffer();
  highpass.type = "highpass";
  highpass.frequency.setValueAtTime(5600, time);
  gain.gain.setValueAtTime(0.0001, time);
  gain.gain.exponentialRampToValueAtTime(volume, time + 0.004);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.05);
  noise.connect(highpass);
  highpass.connect(gain);
  gain.connect(bgmMasterGain);
  noise.start(time);
  noise.stop(time + 0.06);
}

function scheduleBgmStep(time, step) {
  const profile = currentBgmProfile || getBgmProfile();
  const patternLength = profile.melody.length;
  const index = step % patternLength;
  const stepDuration = getBgmStepDuration(profile);
  const melody = profile.melody[index];
  const chime = profile.chime[index];
  const bass = profile.bass[index];
  const swing = index % 2 ? stepDuration * profile.swing : 0;
  const hitTime = time + swing;

  if (melody) {
    playBgmTone(
      midiToFreq(melody),
      hitTime,
      stepDuration * profile.melodyLength,
      profile.melodyType,
      profile.melodyVolume,
      profile.melodyCutoff
    );
  }
  if (chime) {
    playBgmTone(
      midiToFreq(chime),
      hitTime + 0.006,
      stepDuration * profile.chimeLength,
      profile.chimeType,
      profile.chimeVolume,
      profile.chimeCutoff
    );
  }
  if (bass) {
    playBgmTone(
      midiToFreq(bass),
      hitTime,
      stepDuration * profile.bassLength,
      profile.bassType,
      profile.bassVolume,
      profile.bassCutoff
    );
  }

  if (isBgmStepHit(step, patternLength, profile.kickSteps)) {
    playBgmKick(hitTime, profile.kickVolume, profile.kickVolume * 0.36);
  }
  if (isBgmStepHit(step, patternLength, profile.snareSteps)) {
    playBgmSnare(hitTime + 0.003, profile.snareVolume);
  }
  playBgmHat(hitTime + stepDuration * 0.5, index % 4 === 3 ? profile.hatAccent : profile.hatBase);

  if (profile.pulseEvery && profile.pulseNote && step % profile.pulseEvery === 0) {
    playBgmTone(
      midiToFreq(profile.pulseNote),
      hitTime + stepDuration * 0.1,
      stepDuration * profile.pulseLength,
      "sawtooth",
      profile.pulseVolume,
      profile.pulseCutoff
    );
  }
}

function startBgm() {
  if (!audioCtx) return;
  ensureBgmBus();
  if (!bgmMasterGain) return;
  if (bgmScheduler) clearInterval(bgmScheduler);
  currentBgmProfile = getBgmProfile();
  const stepDuration = getBgmStepDuration(currentBgmProfile);
  const patternLength = currentBgmProfile.melody.length;

  const now = audioCtx.currentTime;
  bgmMasterGain.gain.cancelScheduledValues(now);
  bgmMasterGain.gain.setValueAtTime(0.0001, now);
  bgmMasterGain.gain.exponentialRampToValueAtTime(currentBgmProfile.targetGain, now + 0.4);

  bgmStep = 0;
  bgmNextTime = now + 0.05;
  bgmActive = true;
  bgmScheduler = setInterval(() => {
    if (!audioCtx || !bgmActive) return;
    const lookAhead = 0.2;
    while (bgmNextTime < audioCtx.currentTime + lookAhead) {
      scheduleBgmStep(bgmNextTime, bgmStep);
      bgmStep = (bgmStep + 1) % patternLength;
      bgmNextTime += stepDuration;
    }
  }, 30);
}

function stopBgm(fadeSec = 0.16) {
  bgmActive = false;
  if (bgmScheduler) {
    clearInterval(bgmScheduler);
    bgmScheduler = null;
  }
  if (!audioCtx || !bgmMasterGain) return;
  const t = audioCtx.currentTime;
  bgmMasterGain.gain.cancelScheduledValues(t);
  bgmMasterGain.gain.setValueAtTime(Math.max(0.0001, bgmMasterGain.gain.value), t);
  bgmMasterGain.gain.exponentialRampToValueAtTime(0.0001, t + Math.max(0.02, fadeSec));
}

function playHitSound() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(560, t);
  osc.frequency.exponentialRampToValueAtTime(940, t + 0.1);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.11, t + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(t);
  osc.stop(t + 0.13);
}

function playMissSound() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const noise = audioCtx.createBufferSource();
  const filter = audioCtx.createBiquadFilter();
  const gain = audioCtx.createGain();

  const len = Math.floor(audioCtx.sampleRate * 0.16);
  const buffer = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < len; i += 1) data[i] = (Math.random() * 2 - 1) * (1 - i / len);

  osc.type = "sawtooth";
  osc.frequency.setValueAtTime(180, t);
  osc.frequency.exponentialRampToValueAtTime(95, t + 0.15);
  noise.buffer = buffer;
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(900, t);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.14, t + 0.016);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);

  osc.connect(gain);
  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(t);
  noise.start(t);
  osc.stop(t + 0.18);
  noise.stop(t + 0.18);
}

function playWrongInputSound() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const bass = audioCtx.createOscillator();
  const strike = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const strikeGain = audioCtx.createGain();
  const comp = audioCtx.createDynamicsCompressor();

  bass.type = "triangle";
  bass.frequency.setValueAtTime(118, t);
  bass.frequency.exponentialRampToValueAtTime(62, t + 0.22);

  strike.type = "square";
  strike.frequency.setValueAtTime(240, t);
  strike.frequency.exponentialRampToValueAtTime(82, t + 0.18);

  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.26, t + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.28);

  strikeGain.gain.setValueAtTime(0.0001, t);
  strikeGain.gain.exponentialRampToValueAtTime(0.12, t + 0.008);
  strikeGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.22);

  comp.threshold.setValueAtTime(-30, t);
  comp.knee.setValueAtTime(18, t);
  comp.ratio.setValueAtTime(10, t);
  comp.attack.setValueAtTime(0.002, t);
  comp.release.setValueAtTime(0.12, t);

  bass.connect(gain);
  strike.connect(strikeGain);
  gain.connect(comp);
  strikeGain.connect(comp);
  comp.connect(audioCtx.destination);

  bass.start(t);
  strike.start(t);
  bass.stop(t + 0.3);
  strike.stop(t + 0.24);
}

function playExplosionSound() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const noise = audioCtx.createBufferSource();
  const crackNoise = audioCtx.createBufferSource();
  const filter = audioCtx.createBiquadFilter();
  const crackFilter = audioCtx.createBiquadFilter();
  const boomOsc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const crackGain = audioCtx.createGain();
  const boomGain = audioCtx.createGain();

  const len = Math.floor(audioCtx.sampleRate * 0.28);
  const buffer = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < len; i += 1) {
    const decay = Math.pow(1 - i / len, 1.7);
    data[i] = (Math.random() * 2 - 1) * decay;
  }
  noise.buffer = buffer;

  const crackLen = Math.floor(audioCtx.sampleRate * 0.11);
  const crackBuffer = audioCtx.createBuffer(1, crackLen, audioCtx.sampleRate);
  const crackData = crackBuffer.getChannelData(0);
  for (let i = 0; i < crackLen; i += 1) {
    crackData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / crackLen, 1.05);
  }
  crackNoise.buffer = crackBuffer;

  filter.type = "bandpass";
  filter.frequency.setValueAtTime(470, t);
  filter.Q.setValueAtTime(0.8, t);

  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.24, t + 0.018);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);

  boomOsc.type = "sine";
  boomOsc.frequency.setValueAtTime(170, t);
  boomOsc.frequency.exponentialRampToValueAtTime(56, t + 0.28);
  boomGain.gain.setValueAtTime(0.0001, t);
  boomGain.gain.exponentialRampToValueAtTime(0.23, t + 0.015);
  boomGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.29);

  crackFilter.type = "highpass";
  crackFilter.frequency.setValueAtTime(1750, t);
  crackFilter.Q.setValueAtTime(1, t);
  crackGain.gain.setValueAtTime(0.0001, t);
  crackGain.gain.exponentialRampToValueAtTime(0.22, t + 0.004);
  crackGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(audioCtx.destination);
  crackNoise.connect(crackFilter);
  crackFilter.connect(crackGain);
  crackGain.connect(audioCtx.destination);
  boomOsc.connect(boomGain);
  boomGain.connect(audioCtx.destination);

  noise.start(t);
  crackNoise.start(t);
  boomOsc.start(t);
  noise.stop(t + 0.29);
  crackNoise.stop(t + 0.11);
  boomOsc.stop(t + 0.3);
}

function playGameOverSound() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const bass = audioCtx.createOscillator();
  const buzz = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  const buzzGain = audioCtx.createGain();
  const noise = audioCtx.createBufferSource();
  const noiseGain = audioCtx.createGain();
  const noiseFilter = audioCtx.createBiquadFilter();

  const len = Math.floor(audioCtx.sampleRate * 0.34);
  const buffer = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < len; i += 1) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 1.1);
  }
  noise.buffer = buffer;

  bass.type = "sawtooth";
  bass.frequency.setValueAtTime(160, t);
  bass.frequency.exponentialRampToValueAtTime(42, t + 0.52);
  gain.gain.setValueAtTime(0.0001, t);
  gain.gain.exponentialRampToValueAtTime(0.3, t + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.58);

  buzz.type = "square";
  buzz.frequency.setValueAtTime(320, t);
  buzz.frequency.exponentialRampToValueAtTime(98, t + 0.33);
  buzzGain.gain.setValueAtTime(0.0001, t);
  buzzGain.gain.exponentialRampToValueAtTime(0.12, t + 0.03);
  buzzGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.36);

  noiseFilter.type = "bandpass";
  noiseFilter.frequency.setValueAtTime(1140, t);
  noiseFilter.Q.setValueAtTime(0.8, t);
  noiseGain.gain.setValueAtTime(0.0001, t);
  noiseGain.gain.exponentialRampToValueAtTime(0.16, t + 0.01);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);

  bass.connect(gain);
  gain.connect(audioCtx.destination);
  buzz.connect(buzzGain);
  buzzGain.connect(audioCtx.destination);
  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(audioCtx.destination);

  bass.start(t);
  buzz.start(t);
  noise.start(t);
  bass.stop(t + 0.6);
  buzz.stop(t + 0.38);
  noise.stop(t + 0.2);
}

function playRecordBreakSound() {
  if (!audioCtx) return;
  const t = audioCtx.currentTime;
  const whooshNoise = audioCtx.createBufferSource();
  const whooshFilter = audioCtx.createBiquadFilter();
  const whooshGain = audioCtx.createGain();
  const blade = audioCtx.createOscillator();
  const bladeGain = audioCtx.createGain();
  const snap = audioCtx.createOscillator();
  const snapGain = audioCtx.createGain();

  const len = Math.floor(audioCtx.sampleRate * 0.34);
  const buffer = audioCtx.createBuffer(1, len, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < len; i += 1) {
    data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 0.85);
  }
  whooshNoise.buffer = buffer;

  whooshFilter.type = "bandpass";
  whooshFilter.frequency.setValueAtTime(1100, t);
  whooshFilter.frequency.exponentialRampToValueAtTime(4200, t + 0.06);
  whooshFilter.frequency.exponentialRampToValueAtTime(950, t + 0.42);
  whooshFilter.Q.setValueAtTime(1.2, t);
  whooshGain.gain.setValueAtTime(0.0001, t);
  whooshGain.gain.exponentialRampToValueAtTime(0.24, t + 0.018);
  whooshGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.44);

  blade.type = "sawtooth";
  blade.frequency.setValueAtTime(760, t);
  blade.frequency.exponentialRampToValueAtTime(1960, t + 0.08);
  blade.frequency.exponentialRampToValueAtTime(620, t + 0.4);
  bladeGain.gain.setValueAtTime(0.0001, t);
  bladeGain.gain.exponentialRampToValueAtTime(0.11, t + 0.02);
  bladeGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.42);

  snap.type = "square";
  snap.frequency.setValueAtTime(2300, t);
  snap.frequency.exponentialRampToValueAtTime(620, t + 0.16);
  snapGain.gain.setValueAtTime(0.0001, t);
  snapGain.gain.exponentialRampToValueAtTime(0.12, t + 0.006);
  snapGain.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);

  whooshNoise.connect(whooshFilter);
  whooshFilter.connect(whooshGain);
  whooshGain.connect(audioCtx.destination);
  blade.connect(bladeGain);
  bladeGain.connect(audioCtx.destination);
  snap.connect(snapGain);
  snapGain.connect(audioCtx.destination);

  whooshNoise.start(t);
  blade.start(t);
  snap.start(t);
  whooshNoise.stop(t + 0.45);
  blade.stop(t + 0.43);
  snap.stop(t + 0.2);
}

function showRecordBreakBanner() {
  const tag = document.createElement("div");
  tag.className = "record-break-text";
  tag.textContent = "기록 돌파!";

  tag.style.left = `${playfield.clientWidth / 2}px`;
  tag.style.top = `${playfield.clientHeight / 2}px`;
  playfield.appendChild(tag);
  setTimeout(() => tag.remove(), 2000);
}

function showGameOverSplash() {
  if (!gameOverSplash) return;
  gameOverSplash.classList.remove("hidden");
  gameOverSplash.classList.remove("show");
  // Reflow to replay animation.
  void gameOverSplash.offsetWidth;
  gameOverSplash.classList.add("show");
}

function hideGameOverSplash() {
  if (!gameOverSplash) return;
  gameOverSplash.classList.remove("show");
  gameOverSplash.classList.add("hidden");
}

function cancelGameOverTransition() {
  clearTimeout(gameOverTimer);
  gameOverTimer = null;
  gameOverTransition = false;
  hideGameOverSplash();
}

function clearEffects() {
  playfield.querySelectorAll(".missile,.explosion,.word-piece,.word-meaning,.record-break-text").forEach((node) => node.remove());
  missiles = [];
  pieces = [];
  clearPendingSpawns();
  clearTimeout(throwFxTimer);
  throwFxTimer = null;
  wordSource.classList.remove("throwing");
}

function clearWords() {
  words.forEach((w) => w.el.remove());
  words = [];
  playfield.querySelectorAll(".word.staged").forEach((node) => node.remove());
}

function spawnWord() {
  const cfg = DIFFICULTY[difficulty];
  const stagedCount = playfield.querySelectorAll(".word.staged").length;
  if (words.length + stagedCount >= cfg.maxWords) return;

  const text = drawWord();
  const el = document.createElement("div");
  el.className = "word staged";
  el.textContent = text;
  playfield.appendChild(el);

  const speed = cfg.speedMin + Math.random() * (cfg.speedMax - cfg.speedMin) + score * cfg.speedScale;
  let fontSize = lang === "korean" ? 29 + Math.random() * 8 : 22 + Math.random() * 8;
  const maxWordWidth = Math.max(80, playfield.clientWidth - 16);
  el.style.fontSize = `${fontSize}px`;
  while (el.offsetWidth > maxWordWidth && fontSize > 14) {
    fontSize -= 1;
    el.style.fontSize = `${fontSize}px`;
  }

  const laneCount = getLaneCount();
  const laneIndex = drawLaneIndex();
  const laneWidth = playfield.clientWidth / laneCount;
  const laneCenter = laneWidth * (laneIndex + 0.5);
  const jitter = (Math.random() * 2 - 1) * laneWidth * 0.16;
  const minX = 8;
  const maxX = Math.max(minX, playfield.clientWidth - el.offsetWidth - 8);
  const minCenter = minX + el.offsetWidth / 2;
  const maxCenter = maxX + el.offsetWidth / 2;
  const targetCenter = Math.max(minCenter, Math.min(laneCenter + jitter, maxCenter));

  el.style.visibility = "hidden";
  el.style.opacity = "0";
  el.style.left = `${minX}px`;
  el.style.top = `-60px`;

  const moveMs = moveSourceTo(targetCenter, speed);
  const throwDuration = getThrowDuration(speed);
  scheduleSpawnTimer(() => {
    if (!running || gameOver) {
      el.remove();
      return;
    }
    playThrowAnimation(throwDuration);
    scheduleSpawnTimer(() => {
      if (!running || gameOver) {
        el.remove();
        return;
      }
      const origin = getThrowOrigin();
      const releaseCenter = origin.x;
      const x = Math.max(minX, Math.min(releaseCenter - el.offsetWidth / 2, maxX));
      const y = Math.max(-40, origin.y - el.offsetHeight * 0.45);
      const vx = (targetCenter - (x + el.offsetWidth / 2)) * 2.4;

      el.classList.remove("staged");
      el.style.visibility = "visible";
      el.style.opacity = "1";
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      words.push({ text, x, y, vx, speed, el, locked: false, frozen: false });
    }, Math.round(throwDuration * 0.58));
  }, moveMs);
}

function removeWord(item) {
  item.el.remove();
  words = words.filter((w) => w !== item);
}

function createExplosion(x, y) {
  const boom = document.createElement("div");
  boom.className = "explosion";
  boom.style.left = `${x}px`;
  boom.style.top = `${y}px`;
  playfield.appendChild(boom);
  setTimeout(() => boom.remove(), 340);
}

function shatterWord(target) {
  const baseX = target.el.offsetLeft;
  const baseY = target.y;
  const wordW = target.el.offsetWidth;
  const wordH = target.el.offsetHeight;
  const shardCount = Math.max(10, Math.round(wordW / 9) + 6);

  for (let index = 0; index < shardCount; index += 1) {
    const node = document.createElement("div");
    node.className = "word-piece";
    const size = 8 + Math.random() * 12;
    node.style.width = `${size}px`;
    node.style.height = `${size * (0.7 + Math.random() * 0.7)}px`;
    node.style.clipPath = `polygon(${18 + Math.random() * 22}% 0%, 100% ${24 + Math.random() * 20}%, ${
      68 + Math.random() * 30
    }% 100%, 0% ${64 + Math.random() * 30}%, ${Math.random() * 24}% ${22 + Math.random() * 20}%)`;
    const x = baseX + Math.random() * Math.max(12, wordW);
    const y = baseY + Math.random() * Math.max(12, wordH);
    node.style.left = `${x}px`;
    node.style.top = `${y}px`;
    playfield.appendChild(node);

    const spread = (x - (baseX + wordW / 2)) / Math.max(1, wordW / 2);

    pieces.push({
      el: node,
      x,
      y,
      vx: spread * (130 + Math.random() * 190) + (Math.random() * 2 - 1) * 40,
      vy: -150 - Math.random() * 210,
      rot: (Math.random() * 2 - 1) * 1.2,
      spin: (Math.random() * 2 - 1) * 12,
      life: 0.62 + Math.random() * 0.42,
      age: 0
    });
  }
}

function getWordCenter(target) {
  const playRect = playfield.getBoundingClientRect();
  const wordRect = target.el.getBoundingClientRect();
  return {
    x: wordRect.left + wordRect.width / 2 - playRect.left,
    y: wordRect.top + wordRect.height / 2 - playRect.top
  };
}

function explodeWord(target, hitX, hitY) {
  if (!target || !target.el.isConnected) return;
  shatterWord(target);
  playExplosionSound();
  createExplosion(hitX, hitY);
  showWordMeaning(target.text, hitX, hitY);
  removeWord(target);
}

function showWordMeaning(word, x, y) {
  const meaning = lang === "english" ? EN_TO_KO[word] : KO_TO_EN[word];
  const text = meaning || word;
  const tag = document.createElement("div");
  tag.className = "word-meaning";
  tag.textContent = text;
  tag.style.left = `${x}px`;
  tag.style.top = `${y + 8}px`;
  playfield.appendChild(tag);
  setTimeout(() => tag.remove(), 1200);
}

function updateWordSourceMode() {
  if (!wordSource) return;
  wordSource.classList.remove("mode-korean", "mode-english");
  if (lang === "korean") {
    wordSource.classList.add("mode-korean");
    sourceName.textContent = "세종대왕";
  } else {
    wordSource.classList.add("mode-english");
    sourceName.textContent = "도널드 트럼프";
  }
}

function playThrowAnimation(durationMs = 760) {
  if (!wordSource) return;
  wordSource.style.setProperty("--throw-duration", `${durationMs}ms`);
  wordSource.classList.remove("throwing");
  // Reflow for retriggering CSS animation every spawn.
  void wordSource.offsetWidth;
  wordSource.classList.add("throwing");
  clearTimeout(throwFxTimer);
  throwFxTimer = setTimeout(() => wordSource.classList.remove("throwing"), durationMs + 36);
}

function getThrowOrigin() {
  if (!sourceHand) {
    return { x: playfield.clientWidth / 2, y: 58 };
  }
  const playRect = playfield.getBoundingClientRect();
  const handRect = sourceHand.getBoundingClientRect();
  return {
    x: handRect.left + handRect.width / 2 - playRect.left,
    y: handRect.top + handRect.height / 2 - playRect.top
  };
}

function launchMissile(targetItem) {
  const fighterRect = fighter.getBoundingClientRect();
  const playRect = playfield.getBoundingClientRect();
  const startX = fighterRect.left + fighterRect.width / 2 - playRect.left;
  const startY = fighterRect.top + fighterRect.height * 0.08 - playRect.top;

  const missile = document.createElement("div");
  missile.className = "missile";
  missile.style.left = `${startX}px`;
  missile.style.top = `${startY}px`;
  missile.style.transform = "translate(-50%, -50%) rotate(-1.57rad)";
  playfield.appendChild(missile);

  missiles.push({
    el: missile,
    x: startX,
    y: startY,
    speed: 760,
    target: targetItem,
    elapsed: 0,
    targetX: startX,
    targetY: startY
  });
}

function removeMissile(ms) {
  ms.el.remove();
  missiles = missiles.filter((m) => m !== ms);
}

function updateMissiles(dt) {
  for (const ms of [...missiles]) {
    ms.elapsed += dt;
    ms.speed = Math.min(1180, ms.speed + 260 * dt);
    const target = ms.target;
    if (!target || !target.el.isConnected || !words.includes(target)) {
      removeMissile(ms);
      continue;
    }

    const center = getWordCenter(target);
    const tx = center.x;
    const ty = center.y;
    ms.targetX = tx;
    ms.targetY = ty;
    const toTargetX = tx - ms.x;
    const toTargetY = ty - ms.y;
    const dist = Math.hypot(toTargetX, toTargetY);

    if (!Number.isFinite(dist)) {
      removeMissile(ms);
      continue;
    }

    const hitRadius = 18;
    if (dist <= hitRadius) {
      removeMissile(ms);
      explodeWord(target, tx, ty);
      continue;
    }

    if (ms.elapsed > 2.2) {
      removeMissile(ms);
      explodeWord(target, ms.targetX, ms.targetY);
      continue;
    }

    const dirX = toTargetX / Math.max(0.0001, dist);
    const dirY = toTargetY / Math.max(0.0001, dist);
    const step = Math.min(dist, ms.speed * dt);
    ms.x += dirX * step;
    ms.y += dirY * step;

    const angle = Math.atan2(dirY, dirX);
    ms.el.style.left = `${ms.x}px`;
    ms.el.style.top = `${ms.y}px`;
    ms.el.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;
  }
}

function updatePieces(dt) {
  const gravity = 520;
  for (const piece of [...pieces]) {
    piece.age += dt;
    piece.vy += gravity * dt;
    piece.x += piece.vx * dt;
    piece.y += piece.vy * dt;
    piece.rot += piece.spin * dt;

    const lifeRatio = 1 - piece.age / piece.life;
    if (lifeRatio <= 0) {
      piece.el.remove();
      pieces = pieces.filter((p) => p !== piece);
      continue;
    }

    piece.el.style.left = `${piece.x}px`;
    piece.el.style.top = `${piece.y}px`;
    piece.el.style.opacity = `${lifeRatio}`;
    piece.el.style.transform = `translate(-50%, -50%) rotate(${piece.rot}rad)`;
  }
}

function normalizeTyped(value) {
  const typed = value.trim();
  return lang === "english" ? typed.toLowerCase() : typed;
}

function hitWord(typed) {
  const candidate = words.find((w) => w.text === typed && !w.locked);
  if (!candidate) return false;
  candidate.locked = true;
  candidate.frozen = true;
  candidate.el.classList.add("locked");
  score += 1;
  playHitSound();
  if (score > highScore) {
    highScore = score;
    setHighRecord(lang, difficulty, highScore);
    updateMenuRecords();
    if (!recordBreakShown && score > runStartHighScore) {
      recordBreakShown = true;
      showRecordBreakBanner();
      playRecordBreakSound();
    }
  }
  updateHud();
  launchMissile(candidate);
  return true;
}

function showMenu(isGameOver) {
  menuTitle.textContent = isGameOver ? "GAME OVER" : "타자 낙하 게임 시작";
  menuSubtitle.textContent = isGameOver
    ? "설정을 바꾼 뒤 다시 시작할 수 있습니다."
    : "언어와 난이도를 선택하고 시작하세요.";
  startBtn.textContent = isGameOver ? "다시 시작" : "게임 시작";
  updateMenuRecords();
  startScreen.classList.remove("hidden");
}

function hideMenu() {
  startScreen.classList.add("hidden");
}

function openRestartConfirm() {
  if (!running || gameOver) return;
  confirmOpen = true;
  restartConfirm.classList.remove("hidden");
}

function closeRestartConfirm() {
  confirmOpen = false;
  restartConfirm.classList.add("hidden");
}

function goToFirstMenu() {
  cancelGameOverTransition();
  running = false;
  gameOver = false;
  stopBgm(0.14);
  confirmOpen = false;
  clearWords();
  clearEffects();
  hearts = 5;
  score = 0;
  applyMode();
  restartConfirm.classList.add("hidden");
  showMenu(false);
}

function loseHeart() {
  hearts -= 1;
  playMissSound();
  if (hearts <= 0) {
    hearts = 0;
    gameOver = true;
    running = false;
    stopBgm(0.12);
    closeRestartConfirm();
    gameOverTransition = true;
    ensureAudio();
    playGameOverSound();
    showGameOverSplash();
    clearTimeout(gameOverTimer);
    gameOverTimer = setTimeout(() => {
      hideGameOverSplash();
      gameOverTransition = false;
      showMenu(false);
    }, 1450);
  }
  updateHud();
}

function update(dt, now) {
  if (!running || gameOver || confirmOpen) return;

  const cfg = DIFFICULTY[difficulty];
  if (now - lastSpawnAt >= spawnInterval) {
    spawnWord();
    lastSpawnAt = now;
    spawnInterval = Math.max(cfg.spawnMin, cfg.spawnBase - score * 7);
  }

  const bottom = playfield.clientHeight - 26;
  for (const item of [...words]) {
    if (!item.frozen) {
      item.y += item.speed * dt;
      if (Number.isFinite(item.vx) && Math.abs(item.vx) > 0.2) {
        item.x += item.vx * dt;
        item.vx *= Math.pow(0.985, dt * 60);
      }
    }
    if (!Number.isFinite(item.x)) item.x = item.el.offsetLeft;
    const minX = 8;
    const maxX = Math.max(minX, playfield.clientWidth - item.el.offsetWidth - 8);
    item.x = Math.max(minX, Math.min(item.x, maxX));
    item.el.style.left = `${item.x}px`;
    item.el.style.top = `${item.y}px`;
    if (!item.locked && item.y >= bottom) {
      removeWord(item);
      loseHeart();
      if (gameOver) break;
    }
  }

  updateMissiles(dt);
  updatePieces(dt);
}

function reset() {
  cancelGameOverTransition();
  hearts = 5;
  score = 0;
  gameOver = false;
  wordDeck = [];
  lastDrawnWord = "";
  laneDeck = [];
  refillWordDeck();
  refillLaneDeck();
  initSourcePosition(true);
  clearWords();
  clearEffects();
  spawnInterval = DIFFICULTY[difficulty].spawnBase;
  lastSpawnAt = performance.now();
  input.value = "";
  applyMode();
  runStartHighScore = highScore;
  recordBreakShown = false;
}

function startGame() {
  if (gameOverTransition) return;
  lang = document.querySelector('input[name="lang"]:checked')?.value || "english";
  difficulty = document.querySelector('input[name="difficulty"]:checked')?.value || "2";
  ensureAudio();
  reset();
  hideMenu();
  closeRestartConfirm();
  running = true;
  startBgm();
  input.focus();
}

function loop(now) {
  const dt = Math.min(0.033, (now - prev) / 1000);
  prev = now;
  update(dt, now);
  requestAnimationFrame(loop);
}

startBtn.addEventListener("click", startGame);
document.querySelectorAll(".option-group label").forEach((label) => {
  label.addEventListener("click", () => {
    ensureAudio();
    playUiClickSound();
  });
});
document.querySelectorAll('input[name="difficulty"]').forEach((radio) => {
  radio.addEventListener("change", updateMenuRecords);
});
document.querySelectorAll('input[name="lang"]').forEach((radio) => {
  radio.addEventListener("change", updateMenuRecords);
});
restartTopBtn.addEventListener("click", openRestartConfirm);
confirmYesBtn.addEventListener("click", () => {
  ensureAudio();
  playUiClickSound();
});
confirmNoBtn.addEventListener("click", () => {
  ensureAudio();
  playUiClickSound();
});
confirmNoBtn.addEventListener("click", () => {
  closeRestartConfirm();
  input.focus();
});
confirmYesBtn.addEventListener("click", goToFirstMenu);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!running || gameOver) return;
  const typed = normalizeTyped(input.value);
  if (!typed) return;
  const hit = hitWord(typed);
  if (!hit) playWrongInputSound();
  input.value = "";
});

window.addEventListener("keydown", (event) => {
  if (gameOverTransition) return;
  if (event.code === "Escape" && confirmOpen) {
    closeRestartConfirm();
    return;
  }
  if (event.code === "KeyR" && !running) {
    startGame();
  }
});

applyMode();
showMenu(false);
requestAnimationFrame(loop);
