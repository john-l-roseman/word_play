export interface Quote {
  id: number
  english: string
  russian: string
  source: string
}

export const quotes: Quote[] = [
  // Bible (15)
  {
    id: 1,
    english: "Love your neighbor as yourself.",
    russian: "Возлюби ближнего твоего, как самого себя.",
    source: "Bible",
  },
  { id: 2, english: "The truth shall set you free.", russian: "Истина сделает вас свободными.", source: "Bible" },
  {
    id: 3,
    english: "Do unto others as you would have them do unto you.",
    russian: "Поступайте с другими так, как хотите, чтобы поступали с вами.",
    source: "Bible",
  },
  { id: 4, english: "Faith can move mountains.", russian: "Вера может сдвинуть горы.", source: "Bible" },
  { id: 5, english: "Ask, and it shall be given you.", russian: "Просите, и дано будет вам.", source: "Bible" },
  { id: 6, english: "For everything there is a season.", russian: "Всему своё время.", source: "Bible" },
  { id: 7, english: "Let there be light.", russian: "Да будет свет.", source: "Bible" },
  { id: 8, english: "Man shall not live by bread alone.", russian: "Не хлебом единым жив человек.", source: "Bible" },
  { id: 9, english: "Pride goes before a fall.", russian: "Гордость предшествует падению.", source: "Bible" },
  { id: 10, english: "The meek shall inherit the earth.", russian: "Кроткие наследуют землю.", source: "Bible" },
  { id: 11, english: "An eye for an eye, a tooth for a tooth.", russian: "Око за око, зуб за зуб.", source: "Bible" },
  {
    id: 12,
    english: "To everything there is a season, and a time to every purpose.",
    russian: "Всему своё время и время всякой вещи под небом.",
    source: "Bible",
  },
  { id: 13, english: "The wages of sin is death.", russian: "Возмездие за грех — смерть.", source: "Bible" },
  { id: 14, english: "Judge not, that ye be not judged.", russian: "Не судите, да не судимы будете.", source: "Bible" },
  { id: 15, english: "Blessed are the peacemakers.", russian: "Блаженны миротворцы.", source: "Bible" },

  // Quran (15)
  { id: 16, english: "With hardship comes ease.", russian: "С трудностью приходит облегчение.", source: "Quran" },
  { id: 17, english: "God is with the patient.", russian: "Бог с терпеливыми.", source: "Quran" },
  { id: 18, english: "Speak good or remain silent.", russian: "Говори хорошее или молчи.", source: "Quran" },
  {
    id: 19,
    english: "Indeed, God does not change the condition of a people until they change themselves.",
    russian: "Воистину, Аллах не меняет положения людей, пока они сами не изменят себя.",
    source: "Quran",
  },
  {
    id: 20,
    english: "And whoever saves a life, it is as if he has saved all of mankind.",
    russian: "Кто сохранит жизнь, тот как будто сохранил жизнь всего человечества.",
    source: "Quran",
  },
  {
    id: 21,
    english: "Be just, for justice is closest to piety.",
    russian: "Будьте справедливы, ибо справедливость ближе всего к благочестию.",
    source: "Quran",
  },
  {
    id: 22,
    english: "The best among you are those who have the best character.",
    russian: "Лучшие среди вас — те, у кого лучший характер.",
    source: "Quran",
  },
  { id: 23, english: "Kindness is a mark of faith.", russian: "Доброта — признак веры.", source: "Quran" },
  {
    id: 24,
    english: "Do not lose hope in the mercy of God.",
    russian: "Не теряйте надежды на милость Бога.",
    source: "Quran",
  },
  { id: 25, english: "Paradise lies at the feet of mothers.", russian: "Рай лежит у ног матерей.", source: "Quran" },
  {
    id: 26,
    english: "The ink of the scholar is holier than the blood of the martyr.",
    russian: "Чернила учёного священнее крови мученика.",
    source: "Quran",
  },
  {
    id: 27,
    english: "Seek knowledge from the cradle to the grave.",
    russian: "Ищите знания от колыбели до могилы.",
    source: "Quran",
  },
  {
    id: 28,
    english: "Actions are judged by intentions.",
    russian: "Действия оцениваются по намерениям.",
    source: "Quran",
  },
  {
    id: 29,
    english: "A good word is like a good tree.",
    russian: "Доброе слово подобно доброму дереву.",
    source: "Quran",
  },
  { id: 30, english: "God loves those who do good.", russian: "Бог любит тех, кто творит добро.", source: "Quran" },

  // Talmud (15)
  {
    id: 31,
    english: "Who is wise? One who learns from every person.",
    russian: "Кто мудр? Тот, кто учится у каждого человека.",
    source: "Talmud",
  },
  {
    id: 32,
    english: "Who is rich? One who is satisfied with their lot.",
    russian: "Кто богат? Тот, кто доволен своей долей.",
    source: "Talmud",
  },
  {
    id: 33,
    english: "Do not judge your fellow until you have stood in their place.",
    russian: "Не суди ближнего, пока не побывал на его месте.",
    source: "Talmud",
  },
  {
    id: 34,
    english: "If I am not for myself, who will be for me?",
    russian: "Если я не за себя, кто будет за меня?",
    source: "Talmud",
  },
  {
    id: 35,
    english: "Whoever saves a single life saves an entire world.",
    russian: "Кто спасает одну жизнь, спасает целый мир.",
    source: "Talmud",
  },
  {
    id: 36,
    english: "The world stands on three things: Torah, worship, and deeds of kindness.",
    russian: "Мир стоит на трёх вещах: Торе, служении и добрых делах.",
    source: "Talmud",
  },
  { id: 37, english: "Silence is a fence for wisdom.", russian: "Молчание — ограда мудрости.", source: "Talmud" },
  { id: 38, english: "Say little and do much.", russian: "Говори мало, делай много.", source: "Talmud" },
  {
    id: 39,
    english: "Make your Torah study a fixed practice.",
    russian: "Сделай изучение Торы постоянной практикой.",
    source: "Talmud",
  },
  { id: 40, english: "Love work and hate authority.", russian: "Люби труд и ненавидь власть.", source: "Talmud" },
  {
    id: 41,
    english: "In a place where there are no men, strive to be a man.",
    russian: "Там, где нет людей, старайся быть человеком.",
    source: "Talmud",
  },
  {
    id: 42,
    english: "The jealousy of scribes increases wisdom.",
    russian: "Зависть писцов умножает мудрость.",
    source: "Talmud",
  },
  {
    id: 43,
    english: "One who teaches a child is as if they created them.",
    russian: "Тот, кто учит ребёнка, словно создал его.",
    source: "Talmud",
  },
  {
    id: 44,
    english: "A person's true character is revealed in three ways.",
    russian: "Истинный характер человека проявляется тремя способами.",
    source: "Talmud",
  },
  {
    id: 45,
    english: "We do not see things as they are, we see them as we are.",
    russian: "Мы видим вещи не такими, какие они есть, а такими, какие мы сами.",
    source: "Talmud",
  },

  // US Bill of Rights (5)
  {
    id: 46,
    english: "Congress shall make no law abridging the freedom of speech.",
    russian: "Конгресс не должен издавать законов, ограничивающих свободу слова.",
    source: "US Bill of Rights",
  },
  {
    id: 47,
    english: "The right of the people to keep and bear arms shall not be infringed.",
    russian: "Право народа хранить и носить оружие не должно нарушаться.",
    source: "US Bill of Rights",
  },
  {
    id: 48,
    english: "No person shall be deprived of life, liberty, or property without due process.",
    russian: "Никто не может быть лишён жизни, свободы или имущества без надлежащей правовой процедуры.",
    source: "US Bill of Rights",
  },
  {
    id: 49,
    english: "The accused shall enjoy the right to a speedy and public trial.",
    russian: "Обвиняемый имеет право на скорый и открытый суд.",
    source: "US Bill of Rights",
  },
  {
    id: 50,
    english: "Excessive bail shall not be required, nor cruel and unusual punishments inflicted.",
    russian: "Не должен требоваться чрезмерный залог и не должны назначаться жестокие наказания.",
    source: "US Bill of Rights",
  },

  // US Declaration of Independence (5)
  {
    id: 51,
    english: "All men are created equal.",
    russian: "Все люди созданы равными.",
    source: "US Declaration of Independence",
  },
  {
    id: 52,
    english: "Life, Liberty and the pursuit of Happiness.",
    russian: "Жизнь, свобода и стремление к счастью.",
    source: "US Declaration of Independence",
  },
  {
    id: 53,
    english: "Governments derive their just powers from the consent of the governed.",
    russian: "Правительства получают свои справедливые полномочия с согласия управляемых.",
    source: "US Declaration of Independence",
  },
  {
    id: 54,
    english: "When in the Course of human events.",
    russian: "Когда в ходе человеческой истории.",
    source: "US Declaration of Independence",
  },
  {
    id: 55,
    english: "We hold these truths to be self-evident.",
    russian: "Мы считаем эти истины самоочевидными.",
    source: "US Declaration of Independence",
  },

  // Mao's Little Red Book (10)
  {
    id: 56,
    english: "Political power grows out of the barrel of a gun.",
    russian: "Политическая власть растёт из дула винтовки.",
    source: "Mao's Little Red Book",
  },
  {
    id: 57,
    english: "A revolution is not a dinner party.",
    russian: "Революция — это не званый обед.",
    source: "Mao's Little Red Book",
  },
  {
    id: 58,
    english: "Let a hundred flowers bloom.",
    russian: "Пусть расцветают сто цветов.",
    source: "Mao's Little Red Book",
  },
  {
    id: 59,
    english: "The people, and the people alone, are the motive force in making world history.",
    russian: "Народ, и только народ, является движущей силой мировой истории.",
    source: "Mao's Little Red Book",
  },
  {
    id: 60,
    english: "To read too many books is harmful.",
    russian: "Читать слишком много книг вредно.",
    source: "Mao's Little Red Book",
  },
  {
    id: 61,
    english: "Women hold up half the sky.",
    russian: "Женщины держат половину неба.",
    source: "Mao's Little Red Book",
  },
  {
    id: 62,
    english: "No investigation, no right to speak.",
    russian: "Нет исследования — нет права говорить.",
    source: "Mao's Little Red Book",
  },
  {
    id: 63,
    english: "The enemy will not perish of himself.",
    russian: "Враг сам по себе не погибнет.",
    source: "Mao's Little Red Book",
  },
  {
    id: 64,
    english: "Learn from the masses, and then teach them.",
    russian: "Учитесь у масс, а потом обучайте их.",
    source: "Mao's Little Red Book",
  },
  {
    id: 65,
    english: "Despise the enemy strategically, but respect him tactically.",
    russian: "Презирайте врага стратегически, но уважайте его тактически.",
    source: "Mao's Little Red Book",
  },

  // Confucius (10)
  {
    id: 66,
    english: "The journey of a thousand miles begins with a single step.",
    russian: "Путь в тысячу миль начинается с одного шага.",
    source: "Confucius",
  },
  {
    id: 67,
    english: "It does not matter how slowly you go as long as you do not stop.",
    russian: "Неважно, как медленно ты идёшь, главное — не останавливайся.",
    source: "Confucius",
  },
  {
    id: 68,
    english: "To know what you know and what you do not know, that is true knowledge.",
    russian: "Знать, что ты знаешь и чего не знаешь — вот истинное знание.",
    source: "Confucius",
  },
  {
    id: 69,
    english: "Before you embark on a journey of revenge, dig two graves.",
    russian: "Прежде чем отправиться в путь мести, выкопай две могилы.",
    source: "Confucius",
  },
  {
    id: 70,
    english: "Real knowledge is to know the extent of one's ignorance.",
    russian: "Настоящее знание — это знать пределы своего невежества.",
    source: "Confucius",
  },
  {
    id: 71,
    english: "Everything has beauty, but not everyone sees it.",
    russian: "Во всём есть красота, но не каждый её видит.",
    source: "Confucius",
  },
  {
    id: 72,
    english: "He who learns but does not think is lost.",
    russian: "Тот, кто учится, но не думает, потерян.",
    source: "Confucius",
  },
  {
    id: 73,
    english: "Choose a job you love, and you will never have to work a day.",
    russian: "Выбери работу, которую любишь, и тебе не придётся работать ни дня.",
    source: "Confucius",
  },
  {
    id: 74,
    english: "The superior man is modest in his speech, but exceeds in his actions.",
    russian: "Благородный человек скромен в речах, но превосходит в делах.",
    source: "Confucius",
  },
  {
    id: 75,
    english: "When anger rises, think of the consequences.",
    russian: "Когда поднимается гнев, думай о последствиях.",
    source: "Confucius",
  },

  // Bhagavad Gita (10)
  {
    id: 76,
    english: "You have the right to work, but never to the fruit of work.",
    russian: "Ты имеешь право на труд, но не на плоды труда.",
    source: "Bhagavad Gita",
  },
  {
    id: 77,
    english: "The soul is neither born, and nor does it die.",
    russian: "Душа не рождается и не умирает.",
    source: "Bhagavad Gita",
  },
  {
    id: 78,
    english: "Change is the law of the universe.",
    russian: "Перемены — закон вселенной.",
    source: "Bhagavad Gita",
  },
  {
    id: 79,
    english: "Man is made by his belief. As he believes, so he is.",
    russian: "Человек создан своей верой. Каков он верит, таков он и есть.",
    source: "Bhagavad Gita",
  },
  {
    id: 80,
    english: "There is neither this world, nor the world beyond. Happiness is for the one who doubts.",
    russian: "Нет ни этого мира, ни мира за его пределами. Счастье — для того, кто сомневается.",
    source: "Bhagavad Gita",
  },
  {
    id: 81,
    english: "Set thy heart upon thy work, but never on its reward.",
    russian: "Устреми сердце на труд свой, но не на награду за него.",
    source: "Bhagavad Gita",
  },
  {
    id: 82,
    english: "The mind is restless and difficult to restrain.",
    russian: "Ум беспокоен и его трудно сдерживать.",
    source: "Bhagavad Gita",
  },
  {
    id: 83,
    english: "Hell has three gates: lust, anger, and greed.",
    russian: "У ада три врата: похоть, гнев и жадность.",
    source: "Bhagavad Gita",
  },
  {
    id: 84,
    english: "A man's own self is his friend; a man's own self is his foe.",
    russian: "Собственное «я» человека — его друг; собственное «я» — его враг.",
    source: "Bhagavad Gita",
  },
  {
    id: 85,
    english: "Reshape yourself through the power of your will.",
    russian: "Преобрази себя силой своей воли.",
    source: "Bhagavad Gita",
  },

  // Karl Marx (10)
  {
    id: 86,
    english: "Workers of the world, unite!",
    russian: "Пролетарии всех стран, соединяйтесь!",
    source: "Karl Marx",
  },
  {
    id: 87,
    english: "Religion is the opium of the people.",
    russian: "Религия — опиум для народа.",
    source: "Karl Marx",
  },
  {
    id: 88,
    english: "The history of all hitherto existing society is the history of class struggles.",
    russian: "История всех существовавших обществ — это история классовой борьбы.",
    source: "Karl Marx",
  },
  {
    id: 89,
    english: "From each according to his ability, to each according to his needs.",
    russian: "От каждого по способностям, каждому по потребностям.",
    source: "Karl Marx",
  },
  {
    id: 90,
    english: "The philosophers have only interpreted the world; the point is to change it.",
    russian: "Философы лишь различным образом объясняли мир, а дело в том, чтобы изменить его.",
    source: "Karl Marx",
  },
  {
    id: 91,
    english: "Capital is dead labor, which, vampire-like, lives only by sucking living labor.",
    russian: "Капитал — это мёртвый труд, который, как вампир, живёт лишь высасывая живой труд.",
    source: "Karl Marx",
  },
  {
    id: 92,
    english: "The production of too many useful things results in too many useless people.",
    russian: "Производство слишком многих полезных вещей приводит к появлению слишком многих бесполезных людей.",
    source: "Karl Marx",
  },
  {
    id: 93,
    english: "Social progress can be measured by the social position of the female sex.",
    russian: "Общественный прогресс можно измерить общественным положением женщины.",
    source: "Karl Marx",
  },
  {
    id: 94,
    english: "Reason has always existed, but not always in a reasonable form.",
    russian: "Разум всегда существовал, но не всегда в разумной форме.",
    source: "Karl Marx",
  },
  {
    id: 95,
    english: "The only antidote to mental suffering is physical pain.",
    russian: "Единственное противоядие от душевных страданий — физическая боль.",
    source: "Karl Marx",
  },

  // Vladimir Lenin (10)
  {
    id: 96,
    english: "There are decades where nothing happens; and there are weeks where decades happen.",
    russian: "Бывают десятилетия, когда ничего не происходит; и бывают недели, когда происходят десятилетия.",
    source: "Vladimir Lenin",
  },
  {
    id: 97,
    english: "Give me four years to teach the children and the seed I have sown will never be uprooted.",
    russian: "Дайте мне четыре года, чтобы учить детей, и семена, которые я посеял, никогда не будут вырваны.",
    source: "Vladimir Lenin",
  },
  {
    id: 98,
    english: "A lie told often enough becomes the truth.",
    russian: "Ложь, повторённая достаточно часто, становится правдой.",
    source: "Vladimir Lenin",
  },
  {
    id: 99,
    english: "The goal of socialism is communism.",
    russian: "Цель социализма — коммунизм.",
    source: "Vladimir Lenin",
  },
  {
    id: 100,
    english: "Freedom in capitalist society always remains about the same as it was in ancient Greece.",
    russian: "Свобода в капиталистическом обществе всегда остаётся примерно такой же, как в древней Греции.",
    source: "Vladimir Lenin",
  },
  {
    id: 101,
    english: "Without revolutionary theory, there can be no revolutionary movement.",
    russian: "Без революционной теории не может быть революционного движения.",
    source: "Vladimir Lenin",
  },
  {
    id: 102,
    english: "Learning, learning, and more learning.",
    russian: "Учиться, учиться и ещё раз учиться.",
    source: "Vladimir Lenin",
  },
  {
    id: 103,
    english: "The best way to control the opposition is to lead it ourselves.",
    russian: "Лучший способ контролировать оппозицию — возглавить её самим.",
    source: "Vladimir Lenin",
  },
  {
    id: 104,
    english: "One man with a gun can control 100 without one.",
    russian: "Один человек с оружием может контролировать сотню без него.",
    source: "Vladimir Lenin",
  },
  {
    id: 105,
    english: "Trust is good, but control is better.",
    russian: "Доверяй, но проверяй.",
    source: "Vladimir Lenin",
  },

  // Albert Einstein (5)
  {
    id: 106,
    english: "Imagination is more important than knowledge.",
    russian: "Воображение важнее знания.",
    source: "Albert Einstein",
  },
  {
    id: 107,
    english: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    russian: "Жизнь как езда на велосипеде. Чтобы сохранить равновесие, нужно двигаться.",
    source: "Albert Einstein",
  },
  {
    id: 108,
    english: "I have no special talents. I am only passionately curious.",
    russian: "У меня нет особых талантов. Я просто страстно любопытен.",
    source: "Albert Einstein",
  },
  {
    id: 109,
    english: "The only source of knowledge is experience.",
    russian: "Единственный источник знания — это опыт.",
    source: "Albert Einstein",
  },
  {
    id: 110,
    english: "In the middle of difficulty lies opportunity.",
    russian: "В середине трудности лежит возможность.",
    source: "Albert Einstein",
  },

  // Shakespeare (10)
  {
    id: 111,
    english: "To be, or not to be, that is the question.",
    russian: "Быть или не быть, вот в чём вопрос.",
    source: "Shakespeare",
  },
  {
    id: 112,
    english: "All the world's a stage, and all the men and women merely players.",
    russian: "Весь мир — театр, а люди в нём — актёры.",
    source: "Shakespeare",
  },
  {
    id: 113,
    english: "Some are born great, some achieve greatness, and some have greatness thrust upon them.",
    russian: "Одни рождаются великими, другие достигают величия, третьим его навязывают.",
    source: "Shakespeare",
  },
  {
    id: 114,
    english: "The course of true love never did run smooth.",
    russian: "Путь истинной любви никогда не был гладким.",
    source: "Shakespeare",
  },
  {
    id: 115,
    english: "Love all, trust a few, do wrong to none.",
    russian: "Люби всех, доверяй немногим, не делай зла никому.",
    source: "Shakespeare",
  },
  { id: 116, english: "Brevity is the soul of wit.", russian: "Краткость — сестра таланта.", source: "Shakespeare" },
  { id: 117, english: "What's done is done.", russian: "Что сделано, то сделано.", source: "Shakespeare" },
  {
    id: 118,
    english: "There is nothing either good or bad, but thinking makes it so.",
    russian: "Нет ничего хорошего или плохого — только мышление делает это таковым.",
    source: "Shakespeare",
  },
  {
    id: 119,
    english: "Hell is empty and all the devils are here.",
    russian: "Ад пуст — все черти здесь.",
    source: "Shakespeare",
  },
  {
    id: 120,
    english: "The fault, dear Brutus, is not in our stars, but in ourselves.",
    russian: "Вина, дорогой Брут, не в звёздах, а в нас самих.",
    source: "Shakespeare",
  },

  // Mark Twain (5)
  {
    id: 121,
    english: "The secret of getting ahead is getting started.",
    russian: "Секрет успеха — начать действовать.",
    source: "Mark Twain",
  },
  {
    id: 122,
    english: "If you tell the truth, you don't have to remember anything.",
    russian: "Если говоришь правду, не нужно ничего запоминать.",
    source: "Mark Twain",
  },
  {
    id: 123,
    english: "Never argue with stupid people, they will drag you down to their level.",
    russian: "Никогда не спорь с глупцами, они опустят тебя до своего уровня.",
    source: "Mark Twain",
  },
  {
    id: 124,
    english: "The best way to cheer yourself up is to cheer somebody else up.",
    russian: "Лучший способ поднять себе настроение — поднять настроение кому-то другому.",
    source: "Mark Twain",
  },
  {
    id: 125,
    english: "Kindness is the language which the deaf can hear and the blind can see.",
    russian: "Доброта — это язык, который глухие могут слышать, а слепые видеть.",
    source: "Mark Twain",
  },

  // Winston Churchill (5)
  {
    id: 126,
    english: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    russian: "Успех не окончателен, неудача не фатальна — важна лишь смелость продолжать.",
    source: "Winston Churchill",
  },
  {
    id: 127,
    english: "If you're going through hell, keep going.",
    russian: "Если ты проходишь через ад, продолжай идти.",
    source: "Winston Churchill",
  },
  {
    id: 128,
    english: "We make a living by what we get, but we make a life by what we give.",
    russian: "Мы зарабатываем на жизнь тем, что получаем, но живём тем, что отдаём.",
    source: "Winston Churchill",
  },
  {
    id: 129,
    english: "The price of greatness is responsibility.",
    russian: "Цена величия — ответственность.",
    source: "Winston Churchill",
  },
  {
    id: 130,
    english: "Attitude is a little thing that makes a big difference.",
    russian: "Отношение — это мелочь, которая имеет большое значение.",
    source: "Winston Churchill",
  },

  // Oscar Wilde (10)
  {
    id: 131,
    english: "Be yourself; everyone else is already taken.",
    russian: "Будь собой; все остальные роли уже заняты.",
    source: "Oscar Wilde",
  },
  {
    id: 132,
    english: "I have the simplest tastes. I am always satisfied with the best.",
    russian: "У меня простейшие вкусы. Меня всегда удовлетворяет лучшее.",
    source: "Oscar Wilde",
  },
  {
    id: 133,
    english: "Experience is simply the name we give our mistakes.",
    russian: "Опыт — это просто название, которое мы даём своим ошибкам.",
    source: "Oscar Wilde",
  },
  {
    id: 134,
    english: "To live is the rarest thing in the world. Most people exist, that is all.",
    russian: "Жить — редчайшая вещь в мире. Большинство людей просто существует.",
    source: "Oscar Wilde",
  },
  {
    id: 135,
    english: "The truth is rarely pure and never simple.",
    russian: "Истина редко бывает чистой и никогда — простой.",
    source: "Oscar Wilde",
  },
  {
    id: 136,
    english: "A cynic is a man who knows the price of everything and the value of nothing.",
    russian: "Циник — это человек, который знает цену всему и не ценит ничего.",
    source: "Oscar Wilde",
  },
  {
    id: 137,
    english: "We are all in the gutter, but some of us are looking at the stars.",
    russian: "Мы все в сточной канаве, но некоторые из нас смотрят на звёзды.",
    source: "Oscar Wilde",
  },
  {
    id: 138,
    english: "I can resist everything except temptation.",
    russian: "Я могу противостоять всему, кроме искушения.",
    source: "Oscar Wilde",
  },
  {
    id: 139,
    english: "Always forgive your enemies; nothing annoys them so much.",
    russian: "Всегда прощай врагов; ничто не раздражает их так сильно.",
    source: "Oscar Wilde",
  },
  {
    id: 140,
    english: "Work is the curse of the drinking classes.",
    russian: "Работа — проклятие пьющего класса.",
    source: "Oscar Wilde",
  },

  // Benjamin Franklin (5)
  {
    id: 141,
    english: "An investment in knowledge pays the best interest.",
    russian: "Инвестиции в знания приносят наибольший доход.",
    source: "Benjamin Franklin",
  },
  {
    id: 142,
    english: "By failing to prepare, you are preparing to fail.",
    russian: "Не готовясь, ты готовишься к провалу.",
    source: "Benjamin Franklin",
  },
  {
    id: 143,
    english: "Well done is better than well said.",
    russian: "Хорошо сделанное лучше хорошо сказанного.",
    source: "Benjamin Franklin",
  },
  {
    id: 144,
    english: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    russian: "Скажи мне — и я забуду. Научи меня — и я запомню. Вовлеки меня — и я научусь.",
    source: "Benjamin Franklin",
  },
  {
    id: 145,
    english: "In this world nothing can be said to be certain, except death and taxes.",
    russian: "В этом мире ничто не может быть определённым, кроме смерти и налогов.",
    source: "Benjamin Franklin",
  },

  // Che Guevara (5)
  {
    id: 146,
    english: "The revolution is not an apple that falls when it is ripe.",
    russian: "Революция — не яблоко, которое падает, когда созреет.",
    source: "Che Guevara",
  },
  {
    id: 147,
    english: "I am not a liberator. Liberators do not exist. The people liberate themselves.",
    russian: "Я не освободитель. Освободителей не существует. Народ освобождает себя сам.",
    source: "Che Guevara",
  },
  {
    id: 148,
    english: "Better to die standing than to live on your knees.",
    russian: "Лучше умереть стоя, чем жить на коленях.",
    source: "Che Guevara",
  },
  {
    id: 149,
    english: "Be realistic, demand the impossible.",
    russian: "Будь реалистом, требуй невозможного.",
    source: "Che Guevara",
  },
  {
    id: 150,
    english: "Silence is argument carried out by other means.",
    russian: "Молчание — это аргумент, проводимый другими средствами.",
    source: "Che Guevara",
  },

  // Mahatma Gandhi (5)
  {
    id: 151,
    english: "Be the change you wish to see in the world.",
    russian: "Будь тем изменением, которое ты хочешь видеть в мире.",
    source: "Mahatma Gandhi",
  },
  {
    id: 152,
    english: "An eye for an eye only ends up making the whole world blind.",
    russian: "Око за око — и весь мир ослепнет.",
    source: "Mahatma Gandhi",
  },
  {
    id: 153,
    english: "The weak can never forgive. Forgiveness is the attribute of the strong.",
    russian: "Слабые никогда не прощают. Прощение — свойство сильных.",
    source: "Mahatma Gandhi",
  },
  {
    id: 154,
    english: "First they ignore you, then they laugh at you, then they fight you, then you win.",
    russian: "Сначала тебя игнорируют, потом над тобой смеются, потом с тобой борются, потом ты побеждаешь.",
    source: "Mahatma Gandhi",
  },
  {
    id: 155,
    english: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    russian: "Живи так, будто умрёшь завтра. Учись так, будто будешь жить вечно.",
    source: "Mahatma Gandhi",
  },
]
