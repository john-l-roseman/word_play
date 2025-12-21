export interface Quote {
  id: number
  english: string
  russian: string
  source: string
}

export const quotes: Quote[] = [
  // Quran (15 quotes)
  {
    id: 1,
    english: "And He is with you wherever you are.",
    russian: "И Он с вами, где бы вы ни были.",
    source: "Quran 57:4",
  },
  {
    id: 2,
    english: "Indeed, with hardship comes ease.",
    russian: "Поистине, с трудностью приходит облегчение.",
    source: "Quran 94:6",
  },
  {
    id: 3,
    english: "Do not despair of the mercy of Allah.",
    russian: "Не отчаивайтесь в милости Аллаха.",
    source: "Quran 39:53",
  },
  {
    id: 4,
    english: "Allah does not burden a soul beyond its capacity.",
    russian: "Аллах не обременяет душу сверх её возможностей.",
    source: "Quran 2:286",
  },
  {
    id: 5,
    english: "The truth has come and falsehood has vanished.",
    russian: "Истина пришла, и ложь исчезла.",
    source: "Quran 17:81",
  },
  { id: 6, english: "Speak kindly to people.", russian: "Говорите с людьми по-доброму.", source: "Quran 2:83" },
  {
    id: 7,
    english: "Remember Me; I will remember you.",
    russian: "Помните Меня; Я буду помнить вас.",
    source: "Quran 2:152",
  },
  {
    id: 8,
    english: "So remember the favors of Allah.",
    russian: "Так помните же о милостях Аллаха.",
    source: "Quran 7:69",
  },
  { id: 9, english: "Indeed, patience is beautiful.", russian: "Поистине, терпение прекрасно.", source: "Quran 12:18" },
  {
    id: 10,
    english: "My mercy encompasses all things.",
    russian: "Моя милость объемлет все вещи.",
    source: "Quran 7:156",
  },
  { id: 11, english: "And He is the best of planners.", russian: "И Он лучший из планирующих.", source: "Quran 8:30" },
  {
    id: 12,
    english: "Seek help through patience and prayer.",
    russian: "Ищите помощи в терпении и молитве.",
    source: "Quran 2:45",
  },
  { id: 13, english: "Allah is the Light of the heavens.", russian: "Аллах — Свет небес.", source: "Quran 24:35" },
  {
    id: 14,
    english: "And whoever fears Allah, He will make a way out.",
    russian: "А кто боится Аллаха, Он укажет выход.",
    source: "Quran 65:2",
  },
  {
    id: 15,
    english: "Indeed, the patient will be given reward without account.",
    russian: "Поистине, терпеливым воздастся без счёта.",
    source: "Quran 39:10",
  },

  // Bible (15 quotes)
  {
    id: 16,
    english: "Love your neighbor as yourself.",
    russian: "Возлюби ближнего своего, как самого себя.",
    source: "Bible, Mark 12:31",
  },
  {
    id: 17,
    english: "The truth will set you free.",
    russian: "Истина сделает вас свободными.",
    source: "Bible, John 8:32",
  },
  {
    id: 18,
    english: "Do unto others as you would have them do unto you.",
    russian: "Поступайте с людьми так, как хотите, чтобы поступали с вами.",
    source: "Bible, Luke 6:31",
  },
  { id: 19, english: "Faith can move mountains.", russian: "Вера может двигать горы.", source: "Bible, Matthew 17:20" },
  { id: 20, english: "Let there be light.", russian: "Да будет свет.", source: "Bible, Genesis 1:3" },
  {
    id: 21,
    english: "Man does not live by bread alone.",
    russian: "Не хлебом единым жив человек.",
    source: "Bible, Matthew 4:4",
  },
  { id: 22, english: "The Lord is my shepherd.", russian: "Господь — пастырь мой.", source: "Bible, Psalm 23:1" },
  {
    id: 23,
    english: "Ask and it will be given to you.",
    russian: "Просите, и дано будет вам.",
    source: "Bible, Matthew 7:7",
  },
  {
    id: 24,
    english: "Greater love has no one than this.",
    russian: "Нет больше той любви, как эта.",
    source: "Bible, John 15:13",
  },
  { id: 25, english: "Be strong and courageous.", russian: "Будь тверд и мужествен.", source: "Bible, Joshua 1:9" },
  { id: 26, english: "In the beginning was the Word.", russian: "В начале было Слово.", source: "Bible, John 1:1" },
  {
    id: 27,
    english: "Judge not, lest ye be judged.",
    russian: "Не судите, да не судимы будете.",
    source: "Bible, Matthew 7:1",
  },
  { id: 28, english: "Peace I leave with you.", russian: "Мир оставляю вам.", source: "Bible, John 14:27" },
  { id: 29, english: "Blessed are the peacemakers.", russian: "Блаженны миротворцы.", source: "Bible, Matthew 5:9" },
  { id: 30, english: "The last shall be first.", russian: "Последние будут первыми.", source: "Bible, Matthew 20:16" },

  // Talmud (15 quotes)
  {
    id: 31,
    english: "Who is wise? One who learns from everyone.",
    russian: "Кто мудр? Тот, кто учится у каждого.",
    source: "Talmud, Pirkei Avot 4:1",
  },
  {
    id: 32,
    english: "Silence is a fence around wisdom.",
    russian: "Молчание — ограда вокруг мудрости.",
    source: "Talmud, Pirkei Avot 3:13",
  },
  {
    id: 33,
    english: "Do not separate yourself from the community.",
    russian: "Не отделяйся от общины.",
    source: "Talmud, Pirkei Avot 2:4",
  },
  {
    id: 34,
    english: "Say little and do much.",
    russian: "Говори мало и делай много.",
    source: "Talmud, Pirkei Avot 1:15",
  },
  {
    id: 35,
    english: "If I am not for myself, who will be?",
    russian: "Если не я для себя, то кто?",
    source: "Talmud, Pirkei Avot 1:14",
  },
  {
    id: 36,
    english: "Judge every person favorably.",
    russian: "Суди каждого благосклонно.",
    source: "Talmud, Pirkei Avot 1:6",
  },
  { id: 37, english: "All beginnings are difficult.", russian: "Всякое начало трудно.", source: "Talmud, Mekhilta" },
  {
    id: 38,
    english: "The day is short and the work is much.",
    russian: "День короток, а работы много.",
    source: "Talmud, Pirkei Avot 2:15",
  },
  {
    id: 39,
    english: "It is not your duty to finish the work.",
    russian: "Не твой долг закончить работу.",
    source: "Talmud, Pirkei Avot 2:16",
  },
  {
    id: 40,
    english: "Who is rich? One who is happy with their lot.",
    russian: "Кто богат? Тот, кто доволен своей долей.",
    source: "Talmud, Pirkei Avot 4:1",
  },
  {
    id: 41,
    english: "The world stands on three things: Torah, service, and kindness.",
    russian: "Мир стоит на трёх вещах: Торе, служении и доброте.",
    source: "Talmud, Pirkei Avot 1:2",
  },
  {
    id: 42,
    english: "Make for yourself a teacher.",
    russian: "Обрети себе учителя.",
    source: "Talmud, Pirkei Avot 1:6",
  },
  {
    id: 43,
    english: "Receive every person with joy.",
    russian: "Принимай каждого человека с радостью.",
    source: "Talmud, Pirkei Avot 1:15",
  },
  {
    id: 44,
    english: "Where there is no Torah, there is no proper conduct.",
    russian: "Где нет Торы, там нет благородства.",
    source: "Talmud, Pirkei Avot 3:17",
  },
  {
    id: 45,
    english: "Be cautious with authority.",
    russian: "Будь осторожен с властью.",
    source: "Talmud, Pirkei Avot 2:3",
  },

  // US Bill of Rights (5 quotes)
  {
    id: 46,
    english: "Congress shall make no law respecting an establishment of religion.",
    russian: "Конгресс не может издавать законы о религии.",
    source: "US Bill of Rights, First Amendment",
  },
  {
    id: 47,
    english: "The right of the people to keep and bear Arms.",
    russian: "Право народа хранить и носить оружие.",
    source: "US Bill of Rights, Second Amendment",
  },
  {
    id: 48,
    english: "No soldier shall be quartered in any house.",
    russian: "Ни один солдат не может быть размещён в доме.",
    source: "US Bill of Rights, Third Amendment",
  },
  {
    id: 49,
    english: "The right to be secure in their persons and houses.",
    russian: "Право на неприкосновенность личности и жилища.",
    source: "US Bill of Rights, Fourth Amendment",
  },
  {
    id: 50,
    english: "No person shall be compelled to be a witness against himself.",
    russian: "Никто не может быть принуждён свидетельствовать против себя.",
    source: "US Bill of Rights, Fifth Amendment",
  },

  // US Declaration of Independence (5 quotes)
  {
    id: 51,
    english: "All men are created equal.",
    russian: "Все люди созданы равными.",
    source: "US Declaration of Independence",
  },
  {
    id: 52,
    english: "Life, Liberty and the pursuit of Happiness.",
    russian: "Жизнь, Свобода и стремление к Счастью.",
    source: "US Declaration of Independence",
  },
  {
    id: 53,
    english: "We hold these truths to be self-evident.",
    russian: "Мы считаем эти истины самоочевидными.",
    source: "US Declaration of Independence",
  },
  {
    id: 54,
    english: "Governments derive their powers from the consent of the governed.",
    russian: "Правительства получают власть от согласия управляемых.",
    source: "US Declaration of Independence",
  },
  {
    id: 55,
    english: "All experience hath shown that mankind are disposed to suffer.",
    russian: "Весь опыт показал, что люди склонны терпеть.",
    source: "US Declaration of Independence",
  },

  // Mao's Little Red Book (10 quotes)
  {
    id: 56,
    english: "Political power grows out of the barrel of a gun.",
    russian: "Политическая власть растёт из дула винтовки.",
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
  { id: 60, english: "Seek truth from facts.", russian: "Ищите истину в фактах.", source: "Mao Zedong" },
  {
    id: 61,
    english: "To read too many books is harmful.",
    russian: "Читать слишком много книг вредно.",
    source: "Mao Zedong",
  },
  { id: 62, english: "The people are the real heroes.", russian: "Народ — настоящие герои.", source: "Mao Zedong" },
  {
    id: 63,
    english: "Dare to struggle, dare to win.",
    russian: "Смей бороться, смей побеждать.",
    source: "Mao Zedong",
  },
  {
    id: 64,
    english: "Practice is the sole criterion of truth.",
    russian: "Практика — единственный критерий истины.",
    source: "Mao Zedong",
  },
  { id: 65, english: "Unity is strength.", russian: "Единство — это сила.", source: "Mao Zedong" },

  // Confucius (10 quotes)
  {
    id: 66,
    english: "It does not matter how slowly you go.",
    russian: "Неважно, как медленно ты идёшь.",
    source: "Confucius",
  },
  {
    id: 67,
    english: "Our greatest glory is not in never falling.",
    russian: "Наша величайшая слава не в том, чтобы не падать.",
    source: "Confucius",
  },
  {
    id: 68,
    english: "The man who moves a mountain begins by carrying away small stones.",
    russian: "Человек, двигающий гору, начинает с малых камней.",
    source: "Confucius",
  },
  {
    id: 69,
    english: "When anger rises, think of the consequences.",
    russian: "Когда гнев возникает, подумай о последствиях.",
    source: "Confucius",
  },
  {
    id: 70,
    english: "Silence is a true friend who never betrays.",
    russian: "Молчание — истинный друг, который никогда не предаст.",
    source: "Confucius",
  },
  {
    id: 71,
    english: "To see what is right and not do it is cowardice.",
    russian: "Видеть правду и не действовать — это трусость.",
    source: "Confucius",
  },
  {
    id: 72,
    english: "Real knowledge is to know the extent of one's ignorance.",
    russian: "Настоящее знание — знать границы своего невежества.",
    source: "Confucius",
  },
  {
    id: 73,
    english: "The will to win is worthless without the will to prepare.",
    russian: "Воля к победе бесполезна без воли к подготовке.",
    source: "Confucius",
  },
  {
    id: 74,
    english: "Attack the evil that is within yourself.",
    russian: "Атакуй зло, которое внутри тебя.",
    source: "Confucius",
  },
  {
    id: 75,
    english: "Better a diamond with a flaw than a pebble without.",
    russian: "Лучше алмаз с изъяном, чем камешек без изъянов.",
    source: "Confucius",
  },

  // Bhagavad Gita (10 quotes)
  {
    id: 76,
    english: "You have the right to work, but not to the fruits.",
    russian: "У тебя есть право работать, но не на плоды.",
    source: "Bhagavad Gita 2:47",
  },
  {
    id: 77,
    english: "The soul is neither born, nor does it die.",
    russian: "Душа не рождается и не умирает.",
    source: "Bhagavad Gita 2:20",
  },
  {
    id: 78,
    english: "Change is the law of the universe.",
    russian: "Изменение — закон вселенной.",
    source: "Bhagavad Gita 2:27",
  },
  {
    id: 79,
    english: "Set thy heart upon thy work, but never on its reward.",
    russian: "Обрати сердце на работу, но не на награду.",
    source: "Bhagavad Gita 2:47",
  },
  {
    id: 80,
    english: "The mind acts like an enemy for those who do not control it.",
    russian: "Ум действует как враг для тех, кто не контролирует его.",
    source: "Bhagavad Gita 6:6",
  },
  {
    id: 81,
    english: "One who sees inaction in action is intelligent.",
    russian: "Тот, кто видит бездействие в действии, мудр.",
    source: "Bhagavad Gita 4:18",
  },
  {
    id: 82,
    english: "There is neither this world nor the world beyond.",
    russian: "Нет ни этого мира, ни мира за его пределами.",
    source: "Bhagavad Gita 4:40",
  },
  {
    id: 83,
    english: "As a person sheds worn-out garments and wears new ones.",
    russian: "Как человек сбрасывает изношенные одежды и надевает новые.",
    source: "Bhagavad Gita 2:22",
  },
  {
    id: 84,
    english: "The happiness which comes from long practice is endless.",
    russian: "Счастье, которое приходит от долгой практики, бесконечно.",
    source: "Bhagavad Gita 6:21",
  },
  {
    id: 85,
    english: "I am the beginning, middle and end of creation.",
    russian: "Я — начало, середина и конец творения.",
    source: "Bhagavad Gita 10:20",
  },

  // Karl Marx (10 quotes)
  {
    id: 86,
    english: "Workers of the world, unite!",
    russian: "Рабочие всех стран, объединяйтесь!",
    source: "Karl Marx",
  },
  { id: 87, english: "Religion is the opium of the people.", russian: "Религия — опиум народа.", source: "Karl Marx" },
  {
    id: 88,
    english: "From each according to his ability, to each according to his needs.",
    russian: "От каждого по способностям, каждому по потребностям.",
    source: "Karl Marx",
  },
  {
    id: 89,
    english: "History repeats itself, first as tragedy, second as farce.",
    russian: "История повторяется: сначала как трагедия, затем как фарс.",
    source: "Karl Marx",
  },
  {
    id: 90,
    english: "The philosophers have only interpreted the world.",
    russian: "Философы лишь интерпретировали мир.",
    source: "Karl Marx",
  },
  {
    id: 91,
    english: "Capital is dead labor that vampire-like lives.",
    russian: "Капитал — это мёртвый труд, который живёт как вампир.",
    source: "Karl Marx",
  },
  {
    id: 92,
    english: "The production of too many useful things results in too many useless people.",
    russian: "Производство слишком многих полезных вещей создаёт бесполезных людей.",
    source: "Karl Marx",
  },
  {
    id: 93,
    english: "Democracy is the road to socialism.",
    russian: "Демократия — это дорога к социализму.",
    source: "Karl Marx",
  },
  {
    id: 94,
    english: "The ruling ideas are the ideas of the ruling class.",
    russian: "Правящие идеи — это идеи правящего класса.",
    source: "Karl Marx",
  },
  {
    id: 95,
    english: "Quantity changes into quality.",
    russian: "Количество переходит в качество.",
    source: "Karl Marx",
  },

  // Vladimir Lenin (10 quotes)
  {
    id: 96,
    english: "There are no morals in politics; only expedience.",
    russian: "В политике нет морали; только целесообразность.",
    source: "Vladimir Lenin",
  },
  {
    id: 97,
    english: "A lie told often enough becomes the truth.",
    russian: "Ложь, повторённая достаточно часто, становится правдой.",
    source: "Vladimir Lenin",
  },
  {
    id: 98,
    english: "Give me four years to teach the children.",
    russian: "Дайте мне четыре года учить детей.",
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
    english: "Liberty is precious, so precious it must be rationed.",
    russian: "Свобода драгоценна, настолько драгоценна, что её нужно нормировать.",
    source: "Vladimir Lenin",
  },
  {
    id: 101,
    english: "Trust is good, but control is better.",
    russian: "Доверяй, но проверяй.",
    source: "Vladimir Lenin",
  },
  {
    id: 102,
    english: "One man with a gun can control a hundred without one.",
    russian: "Один человек с ружьём может контролировать сотню без него.",
    source: "Vladimir Lenin",
  },
  {
    id: 103,
    english: "The press should be not only a collective propagandist.",
    russian: "Пресса должна быть не только коллективным пропагандистом.",
    source: "Vladimir Lenin",
  },
  {
    id: 104,
    english: "The way to crush the bourgeoisie is to grind them.",
    russian: "Способ сокрушить буржуазию — раздавить её.",
    source: "Vladimir Lenin",
  },
  {
    id: 105,
    english: "Without revolutionary theory there can be no revolutionary movement.",
    russian: "Без революционной теории не может быть революционного движения.",
    source: "Vladimir Lenin",
  },

  // Albert Einstein (5 quotes)
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
    english: "The true sign of intelligence is not knowledge but imagination.",
    russian: "Истинный признак интеллекта — не знание, а воображение.",
    source: "Albert Einstein",
  },
  {
    id: 109,
    english: "Logic will get you from A to B. Imagination will take you everywhere.",
    russian: "Логика доведёт от А до Б. Воображение приведёт везде.",
    source: "Albert Einstein",
  },
  {
    id: 110,
    english: "Two things are infinite: the universe and human stupidity.",
    russian: "Две вещи бесконечны: вселенная и человеческая глупость.",
    source: "Albert Einstein",
  },

  // Humorous/Clever observations (20 quotes)
  {
    id: 111,
    english: "I'm not arguing, I'm just explaining why I'm right.",
    russian: "Я не спорю, я просто объясняю, почему я прав.",
    source: "Anonymous",
  },
  {
    id: 112,
    english: "Common sense is not so common.",
    russian: "Здравый смысл не так уж распространён.",
    source: "Voltaire",
  },
  {
    id: 113,
    english: "I can resist everything except temptation.",
    russian: "Я могу противостоять всему, кроме искушения.",
    source: "Oscar Wilde",
  },
  {
    id: 114,
    english: "The only way to get rid of temptation is to yield to it.",
    russian: "Единственный способ избавиться от искушения — поддаться ему.",
    source: "Oscar Wilde",
  },
  {
    id: 115,
    english: "I have nothing to declare except my genius.",
    russian: "Мне нечего декларировать, кроме моего гениальности.",
    source: "Oscar Wilde",
  },
  {
    id: 116,
    english: "If you can't explain it simply, you don't understand it well enough.",
    russian: "Если не можешь объяснить просто, ты недостаточно понимаешь.",
    source: "Albert Einstein",
  },
  {
    id: 117,
    english: "The road to hell is paved with good intentions.",
    russian: "Дорога в ад вымощена благими намерениями.",
    source: "Proverb",
  },
  {
    id: 118,
    english: "I think, therefore I am confused.",
    russian: "Я думаю, следовательно, я в замешательстве.",
    source: "Anonymous",
  },
  {
    id: 119,
    english: "The early bird gets the worm, but the second mouse gets the cheese.",
    russian: "Ранняя птица получает червя, но вторая мышь получает сыр.",
    source: "Anonymous",
  },
  {
    id: 120,
    english: "If at first you don't succeed, skydiving is not for you.",
    russian: "Если сначала не получается, парашютный спорт не для тебя.",
    source: "Anonymous",
  },
  {
    id: 121,
    english: "Money can't buy happiness, but it can buy ice cream.",
    russian: "Деньги не могут купить счастье, но могут купить мороженое.",
    source: "Anonymous",
  },
  {
    id: 122,
    english: "I'm not lazy, I'm on energy-saving mode.",
    russian: "Я не ленивый, я в режиме энергосбережения.",
    source: "Anonymous",
  },
  {
    id: 123,
    english: "I'm not short, I'm concentrated awesome.",
    russian: "Я не низкий, я концентрированная крутость.",
    source: "Anonymous",
  },
  { id: 124, english: "I speak fluent sarcasm.", russian: "Я свободно говорю на сарказме.", source: "Anonymous" },
  {
    id: 125,
    english: "Why fall in love when you can fall asleep?",
    russian: "Зачем влюбляться, когда можно заснуть?",
    source: "Anonymous",
  },
  {
    id: 126,
    english: "I need a six-month vacation, twice a year.",
    russian: "Мне нужен шестимесячный отпуск дважды в год.",
    source: "Anonymous",
  },
  {
    id: 127,
    english: "I'm not weird, I'm limited edition.",
    russian: "Я не странный, я ограниченная серия.",
    source: "Anonymous",
  },
  {
    id: 128,
    english: "I'm not bossy, I just have better ideas.",
    russian: "Я не властная, у меня просто лучшие идеи.",
    source: "Anonymous",
  },
  {
    id: 129,
    english: "I don't need anger management. You need to stop making me angry.",
    russian: "Мне не нужно управление гневом. Вам нужно перестать злить меня.",
    source: "Anonymous",
  },
  {
    id: 130,
    english: "I'm not clumsy. The floor just hates me.",
    russian: "Я не неуклюжий. Пол просто ненавидит меня.",
    source: "Anonymous",
  },

  // Shakespeare (10 quotes)
  {
    id: 131,
    english: "To be, or not to be, that is the question.",
    russian: "Быть или не быть, вот в чём вопрос.",
    source: "Shakespeare, Hamlet",
  },
  {
    id: 132,
    english: "All the world's a stage, and all the men and women merely players.",
    russian: "Весь мир — театр, и все мужчины и женщины — актёры.",
    source: "Shakespeare, As You Like It",
  },
  {
    id: 133,
    english: "The course of true love never did run smooth.",
    russian: "Путь истинной любви никогда не был гладким.",
    source: "Shakespeare, A Midsummer Night's Dream",
  },
  { id: 134, english: "Brevity is the soul of wit.", russian: "Краткость — душа ума.", source: "Shakespeare, Hamlet" },
  {
    id: 135,
    english: "All that glitters is not gold.",
    russian: "Не всё то золото, что блестит.",
    source: "Shakespeare, The Merchant of Venice",
  },
  {
    id: 136,
    english: "The lady doth protest too much, methinks.",
    russian: "Дама слишком много протестует, мне кажется.",
    source: "Shakespeare, Hamlet",
  },
  {
    id: 137,
    english: "What's in a name? A rose by any other name would smell as sweet.",
    russian: "Что в имени? Роза под любым именем пахла бы так же сладко.",
    source: "Shakespeare, Romeo and Juliet",
  },
  {
    id: 138,
    english: "Parting is such sweet sorrow.",
    russian: "Расставание — такая сладкая печаль.",
    source: "Shakespeare, Romeo and Juliet",
  },
  {
    id: 139,
    english: "Some are born great, some achieve greatness.",
    russian: "Некоторые рождаются великими, другие достигают величия.",
    source: "Shakespeare, Twelfth Night",
  },
  {
    id: 140,
    english: "The better part of valor is discretion.",
    russian: "Лучшая часть доблести — это осторожность.",
    source: "Shakespeare, Henry IV",
  },

  // Mark Twain (10 quotes)
  {
    id: 141,
    english: "The secret of getting ahead is getting started.",
    russian: "Секрет продвижения вперёд — начать.",
    source: "Mark Twain",
  },
  {
    id: 142,
    english: "Kindness is the language the deaf can hear and the blind can see.",
    russian: "Доброта — язык, который глухие слышат, а слепые видят.",
    source: "Mark Twain",
  },
  {
    id: 143,
    english: "The two most important days in your life are when you are born.",
    russian: "Два самых важных дня в жизни — когда ты родился.",
    source: "Mark Twain",
  },
  {
    id: 144,
    english: "Never put off till tomorrow what may be done day after tomorrow.",
    russian: "Никогда не откладывай на завтра то, что можно сделать послезавтра.",
    source: "Mark Twain",
  },
  {
    id: 145,
    english: "When angry, count to four. When very angry, swear.",
    russian: "Когда сердит, считай до четырёх. Когда очень сердит, ругайся.",
    source: "Mark Twain",
  },
  {
    id: 146,
    english: "If you tell the truth, you don't have to remember anything.",
    russian: "Если говоришь правду, тебе не нужно ничего помнить.",
    source: "Mark Twain",
  },
  {
    id: 147,
    english: "Never argue with stupid people, they will drag you down.",
    russian: "Никогда не спорь с глупыми людьми, они затянут тебя вниз.",
    source: "Mark Twain",
  },
  {
    id: 148,
    english: "Good friends, good books, and a sleepy conscience: the ideal life.",
    russian: "Хорошие друзья, хорошие книги и спокойная совесть: идеальная жизнь.",
    source: "Mark Twain",
  },
  {
    id: 149,
    english: "Age is an issue of mind over matter.",
    russian: "Возраст — вопрос разума над материей.",
    source: "Mark Twain",
  },
  { id: 150, english: "Truth is stranger than fiction.", russian: "Правда страннее вымысла.", source: "Mark Twain" },

  // Winston Churchill (5 quotes)
  {
    id: 151,
    english: "Success is not final, failure is not fatal.",
    russian: "Успех не окончателен, неудача не фатальна.",
    source: "Winston Churchill",
  },
  {
    id: 152,
    english: "Courage is what it takes to stand up and speak.",
    russian: "Мужество — это то, что нужно, чтобы встать и говорить.",
    source: "Winston Churchill",
  },
  {
    id: 153,
    english: "If you're going through hell, keep going.",
    russian: "Если идёшь через ад, продолжай идти.",
    source: "Winston Churchill",
  },
  {
    id: 154,
    english: "The price of greatness is responsibility.",
    russian: "Цена величия — ответственность.",
    source: "Winston Churchill",
  },
  {
    id: 155,
    english: "We make a living by what we get. We make a life by what we give.",
    russian: "Мы зарабатываем на жизнь тем, что получаем. Мы создаём жизнь тем, что даём.",
    source: "Winston Churchill",
  },

  // Oscar Wilde (10 quotes)
  {
    id: 156,
    english: "Be yourself; everyone else is already taken.",
    russian: "Будь собой; все остальные уже заняты.",
    source: "Oscar Wilde",
  },
  {
    id: 157,
    english: "To live is the rarest thing in the world.",
    russian: "Жить — самая редкая вещь в мире.",
    source: "Oscar Wilde",
  },
  {
    id: 158,
    english: "We are all in the gutter, but some are looking at the stars.",
    russian: "Мы все в канаве, но некоторые смотрят на звёзды.",
    source: "Oscar Wilde",
  },
  {
    id: 159,
    english: "Experience is the name everyone gives to their mistakes.",
    russian: "Опыт — имя, которое все дают своим ошибкам.",
    source: "Oscar Wilde",
  },
  {
    id: 160,
    english: "There is only one thing worse than being talked about.",
    russian: "Есть только одна вещь хуже, чем быть предметом разговоров.",
    source: "Oscar Wilde",
  },
  {
    id: 161,
    english: "The truth is rarely pure and never simple.",
    russian: "Правда редко чиста и никогда не проста.",
    source: "Oscar Wilde",
  },
  {
    id: 162,
    english: "A cynic is a man who knows the price of everything.",
    russian: "Циник — это человек, который знает цену всего.",
    source: "Oscar Wilde",
  },
  {
    id: 163,
    english: "Always forgive your enemies; nothing annoys them so much.",
    russian: "Всегда прощай врагов; ничто так их не раздражает.",
    source: "Oscar Wilde",
  },
  {
    id: 164,
    english: "Life is too important to be taken seriously.",
    russian: "Жизнь слишком важна, чтобы относиться к ней серьёзно.",
    source: "Oscar Wilde",
  },
  {
    id: 165,
    english: "I am not young enough to know everything.",
    russian: "Я недостаточно молод, чтобы знать всё.",
    source: "Oscar Wilde",
  },

  // Benjamin Franklin (5 quotes)
  {
    id: 166,
    english: "Tell me and I forget. Teach me and I remember.",
    russian: "Скажи мне, и я забуду. Научи меня, и я запомню.",
    source: "Benjamin Franklin",
  },
  {
    id: 167,
    english: "An investment in knowledge pays the best interest.",
    russian: "Инвестиция в знания приносит лучший процент.",
    source: "Benjamin Franklin",
  },
  {
    id: 168,
    english: "Well done is better than well said.",
    russian: "Хорошо сделано лучше, чем хорошо сказано.",
    source: "Benjamin Franklin",
  },
  {
    id: 169,
    english: "By failing to prepare, you are preparing to fail.",
    russian: "Не подготовившись, ты готовишься к неудаче.",
    source: "Benjamin Franklin",
  },
  {
    id: 170,
    english: "Energy and persistence conquer all things.",
    russian: "Энергия и настойчивость побеждают всё.",
    source: "Benjamin Franklin",
  },

  // Che Guevara (5 quotes)
  {
    id: 171,
    english: "The revolution is not an apple that falls when it is ripe.",
    russian: "Революция — это не яблоко, которое падает, когда созреет.",
    source: "Che Guevara",
  },
  {
    id: 172,
    english: "I am not a liberator. Liberators do not exist.",
    russian: "Я не освободитель. Освободителей не существует.",
    source: "Che Guevara",
  },
  {
    id: 173,
    english: "Silence is argument carried out by other means.",
    russian: "Молчание — это спор, ведущийся другими средствами.",
    source: "Che Guevara",
  },
  {
    id: 174,
    english: "The true revolutionary is guided by great feelings of love.",
    russian: "Настоящий революционер руководствуется великими чувствами любви.",
    source: "Che Guevara",
  },
  {
    id: 175,
    english: "At the risk of seeming ridiculous, let me say that the true revolutionary is guided by love.",
    russian: "Рискуя показаться смешным, скажу, что истинный революционер руководствуется любовью.",
    source: "Che Guevara",
  },
]
