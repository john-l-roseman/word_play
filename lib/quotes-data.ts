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
  { id: 3, english: "Ask, and it shall be given you.", russian: "Просите, и дано будет вам.", source: "Bible" },
  { id: 4, english: "Judge not, that ye be not judged.", russian: "Не судите, да не судимы будете.", source: "Bible" },
  {
    id: 5,
    english: "Do unto others as you would have them do unto you.",
    russian: "Поступайте с другими так, как хотите, чтобы поступали с вами.",
    source: "Bible",
  },
  { id: 6, english: "Faith can move mountains.", russian: "Вера может двигать горы.", source: "Bible" },
  { id: 7, english: "The meek shall inherit the earth.", russian: "Кроткие наследуют землю.", source: "Bible" },
  { id: 8, english: "Pride goes before a fall.", russian: "Гордыня предшествует падению.", source: "Bible" },
  { id: 9, english: "To everything there is a season.", russian: "Всему своё время.", source: "Bible" },
  { id: 10, english: "Man does not live by bread alone.", russian: "Не хлебом единым жив человек.", source: "Bible" },
  { id: 11, english: "The wages of sin is death.", russian: "Возмездие за грех — смерть.", source: "Bible" },
  { id: 12, english: "Let there be light.", russian: "Да будет свет.", source: "Bible" },
  { id: 13, english: "An eye for an eye, a tooth for a tooth.", russian: "Око за око, зуб за зуб.", source: "Bible" },
  { id: 14, english: "Blessed are the peacemakers.", russian: "Блаженны миротворцы.", source: "Bible" },
  {
    id: 15,
    english: "The spirit is willing, but the flesh is weak.",
    russian: "Дух бодр, плоть же немощна.",
    source: "Bible",
  },

  // Quran (15)
  {
    id: 16,
    english: "God is with those who patiently persevere.",
    russian: "Бог с теми, кто терпеливо выстоит.",
    source: "Quran",
  },
  { id: 17, english: "With hardship comes ease.", russian: "После трудности приходит облегчение.", source: "Quran" },
  { id: 18, english: "Speak good or remain silent.", russian: "Говори хорошее или молчи.", source: "Quran" },
  {
    id: 19,
    english: "Verily, in the remembrance of God do hearts find rest.",
    russian: "Поистине, в поминании Бога сердца находят покой.",
    source: "Quran",
  },
  {
    id: 20,
    english: "God does not burden a soul beyond its capacity.",
    russian: "Бог не возлагает на душу сверх её возможностей.",
    source: "Quran",
  },
  {
    id: 21,
    english: "Be just, for it is closest to righteousness.",
    russian: "Будьте справедливы, ибо это ближе к праведности.",
    source: "Quran",
  },
  {
    id: 22,
    english: "The best of you are those who learn and teach.",
    russian: "Лучшие из вас те, кто учится и учит.",
    source: "Quran",
  },
  {
    id: 23,
    english: "Repel evil with that which is better.",
    russian: "Отталкивай зло тем, что лучше.",
    source: "Quran",
  },
  {
    id: 24,
    english: "Indeed, mankind was created anxious.",
    russian: "Поистине, человек был создан беспокойным.",
    source: "Quran",
  },
  {
    id: 25,
    english: "And We have made from water every living thing.",
    russian: "И Мы сотворили из воды всё живое.",
    source: "Quran",
  },
  { id: 26, english: "Do not walk upon the earth arrogantly.", russian: "Не ходи по земле надменно.", source: "Quran" },
  {
    id: 27,
    english: "Read in the name of your Lord who created.",
    russian: "Читай во имя Господа твоего, который сотворил.",
    source: "Quran",
  },
  {
    id: 28,
    english: "The life of this world is but amusement and play.",
    russian: "Жизнь этого мира — лишь забава и игра.",
    source: "Quran",
  },
  {
    id: 29,
    english: "He who kills a soul, it is as if he killed all mankind.",
    russian: "Кто убьёт душу, тот как будто убил всё человечество.",
    source: "Quran",
  },
  {
    id: 30,
    english: "And hold firmly to the rope of God all together.",
    russian: "И крепко держитесь за вервь Бога все вместе.",
    source: "Quran",
  },

  // Talmud (15)
  {
    id: 31,
    english: "Who is wise? One who learns from all people.",
    russian: "Кто мудр? Тот, кто учится у всех людей.",
    source: "Talmud",
  },
  {
    id: 32,
    english: "If I am not for myself, who will be for me?",
    russian: "Если я не за себя, кто будет за меня?",
    source: "Talmud",
  },
  {
    id: 33,
    english: "Do not judge your fellow until you are in his place.",
    russian: "Не суди ближнего, пока не окажешься на его месте.",
    source: "Talmud",
  },
  {
    id: 34,
    english: "Whoever saves a life, saves an entire world.",
    russian: "Кто спасает жизнь, спасает целый мир.",
    source: "Talmud",
  },
  { id: 35, english: "Study is greater than practice.", russian: "Учение важнее практики.", source: "Talmud" },
  { id: 36, english: "The shy cannot learn.", russian: "Застенчивый не может учиться.", source: "Talmud" },
  {
    id: 37,
    english: "Who is rich? One who is happy with his lot.",
    russian: "Кто богат? Тот, кто доволен своей долей.",
    source: "Talmud",
  },
  { id: 38, english: "Silence is a fence for wisdom.", russian: "Молчание — ограда мудрости.", source: "Talmud" },
  {
    id: 39,
    english: "A person is known by three things: his cup, his pocket, and his anger.",
    russian: "Человека узнают по трём вещам: его чаше, кошельку и гневу.",
    source: "Talmud",
  },
  { id: 40, english: "Do not be easily angered.", russian: "Не гневайся легко.", source: "Talmud" },
  {
    id: 41,
    english: "Words that come from the heart enter the heart.",
    russian: "Слова, идущие от сердца, входят в сердце.",
    source: "Talmud",
  },
  { id: 42, english: "Make your Torah permanent.", russian: "Сделай свою Тору постоянной.", source: "Talmud" },
  { id: 43, english: "Say little and do much.", russian: "Говори мало и делай много.", source: "Talmud" },
  {
    id: 44,
    english: "A good name is better than good oil.",
    russian: "Доброе имя лучше хорошего масла.",
    source: "Talmud",
  },
  {
    id: 45,
    english: "It is not your duty to finish the work, but neither are you free to neglect it.",
    russian: "Не твоя обязанность закончить работу, но ты не свободен пренебречь ею.",
    source: "Talmud",
  },

  // US Bill of Rights (5)
  {
    id: 46,
    english: "Congress shall make no law abridging the freedom of speech.",
    russian: "Конгресс не должен принимать законов, ограничивающих свободу слова.",
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
    english: "No soldier shall be quartered in any house without the consent of the owner.",
    russian: "Ни один солдат не должен размещаться в доме без согласия владельца.",
    source: "US Bill of Rights",
  },
  {
    id: 49,
    english: "Excessive bail shall not be required, nor cruel punishments inflicted.",
    russian: "Не должны требоваться чрезмерные залоги и применяться жестокие наказания.",
    source: "US Bill of Rights",
  },
  {
    id: 50,
    english: "The enumeration of certain rights shall not deny others retained by the people.",
    russian: "Перечисление определённых прав не должно отрицать других, сохраняемых народом.",
    source: "US Bill of Rights",
  },

  // US Declaration of Independence (5)
  {
    id: 51,
    english: "All men are created equal.",
    russian: "Все люди созданы равными.",
    source: "Declaration of Independence",
  },
  {
    id: 52,
    english: "Life, liberty, and the pursuit of happiness.",
    russian: "Жизнь, свобода и стремление к счастью.",
    source: "Declaration of Independence",
  },
  {
    id: 53,
    english: "Governments derive their powers from the consent of the governed.",
    russian: "Правительства черпают свою власть из согласия управляемых.",
    source: "Declaration of Independence",
  },
  {
    id: 54,
    english: "We hold these truths to be self-evident.",
    russian: "Мы считаем эти истины самоочевидными.",
    source: "Declaration of Independence",
  },
  {
    id: 55,
    english: "When in the course of human events.",
    russian: "Когда ход человеческих событий.",
    source: "Declaration of Independence",
  },

  // Mao's Little Red Book (10)
  {
    id: 56,
    english: "Political power grows out of the barrel of a gun.",
    russian: "Политическая власть вырастает из дула винтовки.",
    source: "Mao Zedong",
  },
  {
    id: 57,
    english: "A revolution is not a dinner party.",
    russian: "Революция — это не званый обед.",
    source: "Mao Zedong",
  },
  { id: 58, english: "Let a hundred flowers bloom.", russian: "Пусть расцветают сто цветов.", source: "Mao Zedong" },
  { id: 59, english: "Women hold up half the sky.", russian: "Женщины держат половину неба.", source: "Mao Zedong" },
  {
    id: 60,
    english: "The people, and the people alone, are the motive force in world history.",
    russian: "Народ, и только народ, является движущей силой мировой истории.",
    source: "Mao Zedong",
  },
  {
    id: 61,
    english: "No investigation, no right to speak.",
    russian: "Нет исследования — нет права говорить.",
    source: "Mao Zedong",
  },
  { id: 62, english: "Serve the people.", russian: "Служить народу.", source: "Mao Zedong" },
  {
    id: 63,
    english: "A single spark can start a prairie fire.",
    russian: "Одна искра может зажечь степной пожар.",
    source: "Mao Zedong",
  },
  {
    id: 64,
    english: "Learn from the masses, and then teach them.",
    russian: "Учись у масс, а потом учи их.",
    source: "Mao Zedong",
  },
  {
    id: 65,
    english: "Despise the enemy strategically, but respect him tactically.",
    russian: "Презирай врага стратегически, но уважай его тактически.",
    source: "Mao Zedong",
  },

  // Confucius (10)
  {
    id: 66,
    english: "It does not matter how slowly you go as long as you do not stop.",
    russian: "Неважно, как медленно ты идёшь, главное — не останавливайся.",
    source: "Confucius",
  },
  {
    id: 67,
    english: "He who learns but does not think is lost.",
    russian: "Тот, кто учится, но не думает, потерян.",
    source: "Confucius",
  },
  {
    id: 68,
    english: "Our greatest glory is not in never falling, but in rising every time we fall.",
    russian: "Наша величайшая слава не в том, что мы никогда не падаем, а в том, что поднимаемся каждый раз.",
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
    english: "Everything has beauty, but not everyone sees it.",
    russian: "Во всём есть красота, но не каждый её видит.",
    source: "Confucius",
  },
  {
    id: 71,
    english: "Real knowledge is to know the extent of one's ignorance.",
    russian: "Настоящее знание — знать пределы своего невежества.",
    source: "Confucius",
  },
  {
    id: 72,
    english: "The man who moves a mountain begins by carrying away small stones.",
    russian: "Человек, который сдвигает гору, начинает с уноса маленьких камней.",
    source: "Confucius",
  },
  {
    id: 73,
    english: "Wheresoever you go, go with all your heart.",
    russian: "Куда бы ты ни шёл, иди всем сердцем.",
    source: "Confucius",
  },
  {
    id: 74,
    english: "Choose a job you love, and you will never work a day in your life.",
    russian: "Выбери работу, которую любишь, и тебе не придётся работать ни дня.",
    source: "Confucius",
  },
  {
    id: 75,
    english: "Silence is a true friend who never betrays.",
    russian: "Молчание — верный друг, который никогда не предаст.",
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
    english: "The soul is neither born, nor does it die.",
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
    english: "Set thy heart upon thy work, but never on its reward.",
    russian: "Отдай сердце труду, но не его награде.",
    source: "Bhagavad Gita",
  },
  {
    id: 80,
    english: "One who sees inaction in action has understanding among men.",
    russian: "Тот, кто видит бездействие в действии, обладает пониманием среди людей.",
    source: "Bhagavad Gita",
  },
  {
    id: 81,
    english: "The mind is restless, turbulent, strong, and unyielding.",
    russian: "Ум беспокоен, буен, силён и неуступчив.",
    source: "Bhagavad Gita",
  },
  {
    id: 82,
    english: "Hell has three gates: lust, anger, and greed.",
    russian: "У ада три врата: похоть, гнев и жадность.",
    source: "Bhagavad Gita",
  },
  {
    id: 83,
    english: "He who has no attachments can really love others.",
    russian: "Тот, кто не имеет привязанностей, может по-настоящему любить других.",
    source: "Bhagavad Gita",
  },
  {
    id: 84,
    english: "Perform your duty equipoised, abandoning attachment to success or failure.",
    russian: "Исполняй свой долг уравновешенно, отбросив привязанность к успеху или неудаче.",
    source: "Bhagavad Gita",
  },
  {
    id: 85,
    english: "A man is made by his beliefs. As he believes, so he becomes.",
    russian: "Человек создаётся своими убеждениями. Каковы его убеждения, таким он и становится.",
    source: "Bhagavad Gita",
  },

  // Karl Marx (10)
  {
    id: 86,
    english: "Workers of the world, unite!",
    russian: "Пролетарии всех стран, соединяйтесь!",
    source: "Karl Marx",
  },
  { id: 87, english: "Religion is the opium of the people.", russian: "Религия — опиум народа.", source: "Karl Marx" },
  {
    id: 88,
    english: "The philosophers have only interpreted the world; the point is to change it.",
    russian: "Философы лишь объясняли мир; дело в том, чтобы изменить его.",
    source: "Karl Marx",
  },
  {
    id: 89,
    english: "History repeats itself, first as tragedy, second as farce.",
    russian: "История повторяется, сначала как трагедия, потом как фарс.",
    source: "Karl Marx",
  },
  {
    id: 90,
    english: "From each according to his abilities, to each according to his needs.",
    russian: "От каждого по способностям, каждому по потребностям.",
    source: "Karl Marx",
  },
  {
    id: 91,
    english: "The production of ideas is interwoven with material activity.",
    russian: "Производство идей переплетено с материальной деятельностью.",
    source: "Karl Marx",
  },
  {
    id: 92,
    english: "Capital is dead labor, which, vampire-like, lives only by sucking living labor.",
    russian: "Капитал — мёртвый труд, который, подобно вампиру, живёт только высасывая живой труд.",
    source: "Karl Marx",
  },
  {
    id: 93,
    english: "The ruling ideas of each age have always been the ideas of its ruling class.",
    russian: "Господствующие идеи каждой эпохи всегда были идеями её господствующего класса.",
    source: "Karl Marx",
  },
  {
    id: 94,
    english: "The history of all hitherto existing society is the history of class struggles.",
    russian: "История всех существовавших обществ — это история классовой борьбы.",
    source: "Karl Marx",
  },
  {
    id: 95,
    english: "Necessity is blind until it becomes conscious.",
    russian: "Необходимость слепа, пока не станет сознательной.",
    source: "Karl Marx",
  },

  // Vladimir Lenin (10)
  {
    id: 96,
    english: "A lie told often enough becomes the truth.",
    russian: "Ложь, повторённая достаточно часто, становится правдой.",
    source: "Vladimir Lenin",
  },
  { id: 97, english: "Learning, learning, learning.", russian: "Учиться, учиться, учиться.", source: "Vladimir Lenin" },
  {
    id: 98,
    english: "There are decades where nothing happens, and weeks where decades happen.",
    russian: "Бывают десятилетия, когда ничего не происходит, и недели, когда происходят десятилетия.",
    source: "Vladimir Lenin",
  },
  {
    id: 99,
    english: "Give me four years to teach the children and the seed I have sown will never be uprooted.",
    russian: "Дайте мне четыре года учить детей, и посеянное мной семя никогда не будет вырвано.",
    source: "Vladimir Lenin",
  },
  {
    id: 100,
    english: "Trust is good, but control is better.",
    russian: "Доверяй, но проверяй.",
    source: "Vladimir Lenin",
  },
  {
    id: 101,
    english: "Freedom in capitalist society always remains about the same as it was in ancient Greek republics.",
    russian:
      "Свобода в капиталистическом обществе всегда остаётся примерно такой же, как в древнегреческих республиках.",
    source: "Vladimir Lenin",
  },
  {
    id: 102,
    english: "The goal of socialism is communism.",
    russian: "Цель социализма — коммунизм.",
    source: "Vladimir Lenin",
  },
  {
    id: 103,
    english: "Without a revolutionary theory there cannot be a revolutionary movement.",
    russian: "Без революционной теории не может быть революционного движения.",
    source: "Vladimir Lenin",
  },
  {
    id: 104,
    english: "The best way to destroy the capitalist system is to debauch the currency.",
    russian: "Лучший способ разрушить капиталистическую систему — развратить валюту.",
    source: "Vladimir Lenin",
  },
  {
    id: 105,
    english: "One man with a gun can control a hundred without one.",
    russian: "Один человек с ружьём может контролировать сотню без него.",
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
    english: "God does not play dice with the universe.",
    russian: "Бог не играет в кости со вселенной.",
    source: "Albert Einstein",
  },
  {
    id: 108,
    english: "The only source of knowledge is experience.",
    russian: "Единственный источник знания — опыт.",
    source: "Albert Einstein",
  },
  {
    id: 109,
    english: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    russian: "Жизнь — как езда на велосипеде. Чтобы сохранить равновесие, нужно двигаться.",
    source: "Albert Einstein",
  },
  {
    id: 110,
    english: "I have no special talents. I am only passionately curious.",
    russian: "У меня нет особых талантов. Я лишь страстно любопытен.",
    source: "Albert Einstein",
  },

  // Shakespeare (10)
  {
    id: 111,
    english: "To be, or not to be, that is the question.",
    russian: "Быть или не быть — вот в чём вопрос.",
    source: "Shakespeare",
  },
  {
    id: 112,
    english: "All the world's a stage, and all the men and women merely players.",
    russian: "Весь мир — театр, а люди в нём — лишь актёры.",
    source: "Shakespeare",
  },
  {
    id: 113,
    english: "The lady doth protest too much, methinks.",
    russian: "Мне кажется, леди слишком много протестует.",
    source: "Shakespeare",
  },
  {
    id: 114,
    english: "What's in a name? A rose by any other name would smell as sweet.",
    russian: "Что в имени? Роза пахла бы так же сладко под любым другим именем.",
    source: "Shakespeare",
  },
  { id: 115, english: "Brevity is the soul of wit.", russian: "Краткость — душа остроумия.", source: "Shakespeare" },
  {
    id: 116,
    english: "The course of true love never did run smooth.",
    russian: "Путь истинной любви никогда не был гладким.",
    source: "Shakespeare",
  },
  {
    id: 117,
    english: "Love looks not with the eyes, but with the mind.",
    russian: "Любовь смотрит не глазами, а разумом.",
    source: "Shakespeare",
  },
  {
    id: 118,
    english: "Hell is empty and all the devils are here.",
    russian: "Ад пуст, и все дьяволы здесь.",
    source: "Shakespeare",
  },
  {
    id: 119,
    english: "Some are born great, some achieve greatness, and some have greatness thrust upon them.",
    russian: "Одни рождаются великими, другие достигают величия, а третьим величие навязывают.",
    source: "Shakespeare",
  },
  {
    id: 120,
    english: "Parting is such sweet sorrow.",
    russian: "Расставание — такая сладкая печаль.",
    source: "Shakespeare",
  },

  // Mark Twain (5)
  {
    id: 121,
    english: "The reports of my death are greatly exaggerated.",
    russian: "Слухи о моей смерти сильно преувеличены.",
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
    english: "Get your facts first, then you can distort them as you please.",
    russian: "Сначала узнай факты, потом можешь искажать их как угодно.",
    source: "Mark Twain",
  },
  {
    id: 124,
    english: "The secret of getting ahead is getting started.",
    russian: "Секрет успеха в том, чтобы начать.",
    source: "Mark Twain",
  },
  {
    id: 125,
    english: "Never put off till tomorrow what may be done the day after tomorrow.",
    russian: "Никогда не откладывай на завтра то, что можно сделать послезавтра.",
    source: "Mark Twain",
  },

  // Winston Churchill (5)
  {
    id: 126,
    english: "Never, never, never give up.",
    russian: "Никогда, никогда, никогда не сдавайся.",
    source: "Winston Churchill",
  },
  {
    id: 127,
    english: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    russian: "Успех не окончателен, неудача не фатальна: важна смелость продолжать.",
    source: "Winston Churchill",
  },
  {
    id: 128,
    english: "We shall fight on the beaches, we shall fight in the fields.",
    russian: "Мы будем сражаться на пляжах, мы будем сражаться на полях.",
    source: "Winston Churchill",
  },
  {
    id: 129,
    english: "History will be kind to me, for I intend to write it.",
    russian: "История будет добра ко мне, потому что я намерен её написать.",
    source: "Winston Churchill",
  },
  {
    id: 130,
    english: "The best argument against democracy is a five-minute conversation with the average voter.",
    russian: "Лучший аргумент против демократии — пятиминутный разговор с обычным избирателем.",
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
    english: "I can resist everything except temptation.",
    russian: "Я могу противостоять всему, кроме искушения.",
    source: "Oscar Wilde",
  },
  {
    id: 133,
    english: "To live is the rarest thing in the world. Most people exist, that is all.",
    russian: "Жить — редчайшая вещь в мире. Большинство людей просто существуют.",
    source: "Oscar Wilde",
  },
  {
    id: 134,
    english: "Experience is simply the name we give our mistakes.",
    russian: "Опыт — это просто название, которое мы даём своим ошибкам.",
    source: "Oscar Wilde",
  },
  {
    id: 135,
    english: "The truth is rarely pure and never simple.",
    russian: "Истина редко бывает чистой и никогда простой.",
    source: "Oscar Wilde",
  },
  {
    id: 136,
    english: "We are all in the gutter, but some of us are looking at the stars.",
    russian: "Мы все в канаве, но некоторые из нас смотрят на звёзды.",
    source: "Oscar Wilde",
  },
  {
    id: 137,
    english: "A cynic is a man who knows the price of everything and the value of nothing.",
    russian: "Циник — человек, который знает цену всему и ценность ничему.",
    source: "Oscar Wilde",
  },
  {
    id: 138,
    english: "Always forgive your enemies; nothing annoys them so much.",
    russian: "Всегда прощай врагов; ничто не раздражает их так сильно.",
    source: "Oscar Wilde",
  },
  {
    id: 139,
    english: "I have the simplest tastes. I am always satisfied with the best.",
    russian: "У меня простые вкусы. Меня всегда удовлетворяет лучшее.",
    source: "Oscar Wilde",
  },
  {
    id: 140,
    english: "The only thing to do with good advice is to pass it on.",
    russian: "Единственное, что можно сделать с хорошим советом — передать его дальше.",
    source: "Oscar Wilde",
  },

  // Benjamin Franklin (5)
  {
    id: 141,
    english: "An investment in knowledge pays the best interest.",
    russian: "Инвестиции в знания приносят лучшие проценты.",
    source: "Benjamin Franklin",
  },
  {
    id: 142,
    english: "By failing to prepare, you are preparing to fail.",
    russian: "Не готовясь, вы готовитесь к провалу.",
    source: "Benjamin Franklin",
  },
  {
    id: 143,
    english: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    russian: "Скажи мне — и я забуду. Научи меня — и я запомню. Вовлеки меня — и я научусь.",
    source: "Benjamin Franklin",
  },
  {
    id: 144,
    english: "Early to bed and early to rise makes a man healthy, wealthy, and wise.",
    russian: "Рано ложиться и рано вставать делает человека здоровым, богатым и мудрым.",
    source: "Benjamin Franklin",
  },
  {
    id: 145,
    english: "In this world, nothing is certain except death and taxes.",
    russian: "В этом мире нет ничего определённого, кроме смерти и налогов.",
    source: "Benjamin Franklin",
  },

  // Che Guevara (5)
  { id: 146, english: "Until victory, always.", russian: "До победы, всегда.", source: "Che Guevara" },
  {
    id: 147,
    english: "The revolution is not an apple that falls when it is ripe.",
    russian: "Революция — не яблоко, которое падает, когда созреет.",
    source: "Che Guevara",
  },
  {
    id: 148,
    english: "I am not a liberator. Liberators do not exist.",
    russian: "Я не освободитель. Освободителей не существует.",
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
    english: "If you tremble with indignation at every injustice, then you are a comrade of mine.",
    russian: "Если ты дрожишь от негодования при каждой несправедливости, ты мой товарищ.",
    source: "Che Guevara",
  },

  // Mahatma Gandhi (5)
  {
    id: 151,
    english: "Be the change you wish to see in the world.",
    russian: "Будь тем изменением, которое хочешь видеть в мире.",
    source: "Mahatma Gandhi",
  },
  {
    id: 152,
    english: "An eye for an eye makes the whole world blind.",
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
    russian: "Сначала они тебя игнорируют, потом смеются, потом борются, потом ты побеждаешь.",
    source: "Mahatma Gandhi",
  },
  {
    id: 155,
    english: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    russian: "Живи так, будто умрёшь завтра. Учись так, будто будешь жить вечно.",
    source: "Mahatma Gandhi",
  },
]

// Sort quotes by English length for the game
export const sortedQuotes = [...quotes].sort((a, b) => a.english.length - b.english.length)
