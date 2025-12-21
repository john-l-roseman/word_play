export type Quote = {
  id: number
  text: string
  russian: string
  source: string
}

export const quotes: Quote[] = [
  // Bible
  {
    id: 1,
    text: "Love your neighbor as yourself.",
    russian: "Возлюби ближнего своего, как самого себя.",
    source: "Bible",
  },
  { id: 2, text: "The truth shall set you free.", russian: "Истина сделает вас свободными.", source: "Bible" },
  { id: 3, text: "Ask and it shall be given.", russian: "Просите, и дано будет вам.", source: "Bible" },
  {
    id: 4,
    text: "Do unto others as you would have them do unto you.",
    russian: "Поступай с другими так, как хочешь, чтобы поступали с тобой.",
    source: "Bible",
  },
  { id: 5, text: "Man does not live by bread alone.", russian: "Не хлебом единым жив человек.", source: "Bible" },
  { id: 6, text: "The meek shall inherit the earth.", russian: "Кроткие наследуют землю.", source: "Bible" },
  { id: 7, text: "Judge not, lest ye be judged.", russian: "Не судите, да не судимы будете.", source: "Bible" },
  { id: 8, text: "Let there be light.", russian: "Да будет свет.", source: "Bible" },
  { id: 9, text: "Eye for eye, tooth for tooth.", russian: "Око за око, зуб за зуб.", source: "Bible" },
  { id: 10, text: "The Lord is my shepherd.", russian: "Господь — Пастырь мой.", source: "Bible" },
  { id: 11, text: "Blessed are the peacemakers.", russian: "Блаженны миротворцы.", source: "Bible" },
  { id: 12, text: "Turn the other cheek.", russian: "Подставь другую щеку.", source: "Bible" },
  { id: 13, text: "Faith can move mountains.", russian: "Вера может двигать горы.", source: "Bible" },
  { id: 14, text: "Love covers a multitude of sins.", russian: "Любовь покрывает множество грехов.", source: "Bible" },
  { id: 15, text: "The wages of sin is death.", russian: "Возмездие за грех — смерть.", source: "Bible" },

  // Quran
  {
    id: 16,
    text: "God does not burden a soul beyond capacity.",
    russian: "Аллах не возлагает на душу больше, чем она может вынести.",
    source: "Quran",
  },
  { id: 17, text: "With hardship comes ease.", russian: "С трудностью приходит облегчение.", source: "Quran" },
  {
    id: 18,
    text: "The best of people are those who benefit others.",
    russian: "Лучшие люди — те, кто приносит пользу другим.",
    source: "Quran",
  },
  { id: 19, text: "Speak good or remain silent.", russian: "Говори хорошее или молчи.", source: "Quran" },
  { id: 20, text: "Patience is half of faith.", russian: "Терпение — половина веры.", source: "Quran" },
  { id: 21, text: "Knowledge is better than wealth.", russian: "Знание лучше богатства.", source: "Quran" },
  { id: 22, text: "God is with those who are patient.", russian: "Аллах с терпеливыми.", source: "Quran" },
  { id: 23, text: "Actions are judged by intentions.", russian: "Дела судятся по намерениям.", source: "Quran" },
  { id: 24, text: "The merciful are shown mercy.", russian: "Милосердным оказывается милость.", source: "Quran" },
  {
    id: 25,
    text: "Seek knowledge from cradle to grave.",
    russian: "Ищите знания от колыбели до могилы.",
    source: "Quran",
  },
  {
    id: 26,
    text: "Paradise lies at the feet of mothers.",
    russian: "Рай находится под ногами матерей.",
    source: "Quran",
  },
  { id: 27, text: "A kind word is charity.", russian: "Доброе слово — это милостыня.", source: "Quran" },
  {
    id: 28,
    text: "Help others and God will help you.",
    russian: "Помогай другим, и Аллах поможет тебе.",
    source: "Quran",
  },
  {
    id: 29,
    text: "The strongest among you is the gentlest.",
    russian: "Сильнейший среди вас — самый кроткий.",
    source: "Quran",
  },
  { id: 30, text: "He who has no mercy has no faith.", russian: "У кого нет милосердия, нет веры.", source: "Quran" },

  // Talmud
  {
    id: 31,
    text: "Who is wise? One who learns from everyone.",
    russian: "Кто мудр? Тот, кто учится у всех.",
    source: "Talmud",
  },
  {
    id: 32,
    text: "Silence is a fence around wisdom.",
    russian: "Молчание — ограда вокруг мудрости.",
    source: "Talmud",
  },
  { id: 33, text: "Who is rich? One who is satisfied.", russian: "Кто богат? Тот, кто доволен.", source: "Talmud" },
  {
    id: 34,
    text: "The world stands on three things: truth, justice, peace.",
    russian: "Мир стоит на трёх вещах: истине, справедливости и мире.",
    source: "Talmud",
  },
  {
    id: 35,
    text: "If I am not for myself, who will be?",
    russian: "Если я не за себя, кто за меня?",
    source: "Talmud",
  },
  {
    id: 36,
    text: "To save one life is to save the world.",
    russian: "Спасти одну жизнь — значит спасти целый мир.",
    source: "Talmud",
  },
  {
    id: 37,
    text: "Do not be daunted by the world's grief.",
    russian: "Не падай духом от горя мира.",
    source: "Talmud",
  },
  {
    id: 38,
    text: "Words should be weighed, not counted.",
    russian: "Слова следует взвешивать, а не считать.",
    source: "Talmud",
  },
  {
    id: 39,
    text: "A person is obliged to get drunk on Purim.",
    russian: "Человек обязан напиться на Пурим.",
    source: "Talmud",
  },
  {
    id: 40,
    text: "Who is strong? One who conquers desires.",
    russian: "Кто силён? Тот, кто побеждает свои желания.",
    source: "Talmud",
  },
  {
    id: 41,
    text: "The reward of a mitzvah is another mitzvah.",
    russian: "Награда за заповедь — ещё одна заповедь.",
    source: "Talmud",
  },
  { id: 42, text: "Study is greater than practice.", russian: "Учение важнее практики.", source: "Talmud" },
  {
    id: 43,
    text: "Greater is hospitality than welcoming God.",
    russian: "Гостеприимство важнее, чем приветствие Бога.",
    source: "Talmud",
  },
  {
    id: 44,
    text: "Teach your tongue to say I do not know.",
    russian: "Научи свой язык говорить: «Я не знаю».",
    source: "Talmud",
  },
  {
    id: 45,
    text: "The day is short and the work is great.",
    russian: "День короток, а работы много.",
    source: "Talmud",
  },

  // US Bill of Rights
  {
    id: 46,
    text: "Congress shall make no law abridging freedom of speech.",
    russian: "Конгресс не должен принимать закон, ограничивающий свободу слова.",
    source: "US Bill of Rights",
  },
  {
    id: 47,
    text: "The right to bear arms shall not be infringed.",
    russian: "Право носить оружие не должно нарушаться.",
    source: "US Bill of Rights",
  },
  {
    id: 48,
    text: "No soldier shall be quartered without consent.",
    russian: "Ни один солдат не должен размещаться без согласия.",
    source: "US Bill of Rights",
  },
  {
    id: 49,
    text: "The right to be secure against unreasonable searches.",
    russian: "Право быть защищённым от необоснованных обысков.",
    source: "US Bill of Rights",
  },
  {
    id: 50,
    text: "No person shall be compelled to witness against himself.",
    russian: "Никто не обязан свидетельствовать против себя.",
    source: "US Bill of Rights",
  },

  // US Declaration of Independence
  {
    id: 51,
    text: "All men are created equal.",
    russian: "Все люди созданы равными.",
    source: "US Declaration of Independence",
  },
  {
    id: 52,
    text: "Life, liberty, and the pursuit of happiness.",
    russian: "Жизнь, свобода и стремление к счастью.",
    source: "US Declaration of Independence",
  },
  {
    id: 53,
    text: "Governments derive power from the consent of the governed.",
    russian: "Правительства получают власть с согласия управляемых.",
    source: "US Declaration of Independence",
  },
  {
    id: 54,
    text: "When tyranny becomes law, rebellion becomes duty.",
    russian: "Когда тирания становится законом, восстание становится долгом.",
    source: "US Declaration of Independence",
  },
  {
    id: 55,
    text: "We hold these truths to be self-evident.",
    russian: "Мы считаем эти истины самоочевидными.",
    source: "US Declaration of Independence",
  },

  // Mao's Little Red Book
  {
    id: 56,
    text: "Political power grows out of the barrel of a gun.",
    russian: "Политическая власть растёт из ствола винтовки.",
    source: "Mao",
  },
  { id: 57, text: "A revolution is not a dinner party.", russian: "Революция — это не званый обед.", source: "Mao" },
  { id: 58, text: "Let a hundred flowers bloom.", russian: "Пусть расцветают сто цветов.", source: "Mao" },
  { id: 59, text: "To read too many books is harmful.", russian: "Читать слишком много книг вредно.", source: "Mao" },
  { id: 60, text: "Women hold up half the sky.", russian: "Женщины держат половину неба.", source: "Mao" },
  { id: 61, text: "Dare to struggle, dare to win.", russian: "Смей бороться, смей побеждать.", source: "Mao" },
  { id: 62, text: "The people are the real heroes.", russian: "Народ — настоящие герои.", source: "Mao" },
  { id: 63, text: "Everything under heaven is in chaos.", russian: "Всё под небесами в хаосе.", source: "Mao" },
  { id: 64, text: "Serve the people.", russian: "Служи народу.", source: "Mao" },
  { id: 65, text: "Be resolute, fear no sacrifice.", russian: "Будь решителен, не бойся жертв.", source: "Mao" },

  // Confucius
  {
    id: 66,
    text: "It does not matter how slowly you go.",
    russian: "Не важно, как медленно ты идёшь.",
    source: "Confucius",
  },
  {
    id: 67,
    text: "Our greatest glory is rising every time we fall.",
    russian: "Наша величайшая слава — подниматься каждый раз, когда мы падаем.",
    source: "Confucius",
  },
  {
    id: 68,
    text: "Real knowledge is knowing the extent of ignorance.",
    russian: "Истинное знание — знать пределы своего невежества.",
    source: "Confucius",
  },
  { id: 69, text: "Attack the evil within yourself.", russian: "Атакуй зло внутри себя.", source: "Confucius" },
  {
    id: 70,
    text: "Silence is the true friend that never betrays.",
    russian: "Молчание — истинный друг, который никогда не предаст.",
    source: "Confucius",
  },
  {
    id: 71,
    text: "Study the past to define the future.",
    russian: "Изучай прошлое, чтобы определить будущее.",
    source: "Confucius",
  },
  {
    id: 72,
    text: "The man who moves a mountain begins by moving stones.",
    russian: "Человек, двигающий гору, начинает с перемещения камней.",
    source: "Confucius",
  },
  {
    id: 73,
    text: "When anger rises, think of the consequences.",
    russian: "Когда гнев поднимается, подумай о последствиях.",
    source: "Confucius",
  },
  {
    id: 74,
    text: "To see what is right and not do it is cowardice.",
    russian: "Видеть правильное и не делать его — это трусость.",
    source: "Confucius",
  },
  {
    id: 75,
    text: "Choose a job you love and never work again.",
    russian: "Выбери работу, которую любишь, и больше не работай.",
    source: "Confucius",
  },

  // Bhagavad Gita
  {
    id: 76,
    text: "You have the right to work only.",
    russian: "У тебя есть право только работать.",
    source: "Bhagavad Gita",
  },
  {
    id: 77,
    text: "The soul is neither born nor does it die.",
    russian: "Душа не рождается и не умирает.",
    source: "Bhagavad Gita",
  },
  {
    id: 78,
    text: "Change is the law of the universe.",
    russian: "Перемена — закон вселенной.",
    source: "Bhagavad Gita",
  },
  {
    id: 79,
    text: "A person can rise through their own efforts.",
    russian: "Человек может подняться своими усилиями.",
    source: "Bhagavad Gita",
  },
  {
    id: 80,
    text: "The mind is restless and difficult to control.",
    russian: "Ум неспокоен и труден для контроля.",
    source: "Bhagavad Gita",
  },
  {
    id: 81,
    text: "One who sees inaction in action is wise.",
    russian: "Тот, кто видит бездействие в действии, мудр.",
    source: "Bhagavad Gita",
  },
  {
    id: 82,
    text: "Set thy heart upon thy work but never reward.",
    russian: "Направь своё сердце на работу, но не на награду.",
    source: "Bhagavad Gita",
  },
  {
    id: 83,
    text: "The self-controlled soul attains perfect peace.",
    russian: "Душа с самоконтролем достигает совершенного мира.",
    source: "Bhagavad Gita",
  },
  { id: 84, text: "Weapons cannot cut the soul.", russian: "Оружие не может разрезать душу.", source: "Bhagavad Gita" },
  {
    id: 85,
    text: "Whatever happened was good, what's happening is good.",
    russian: "Что бы ни случилось, было хорошо, что происходит — хорошо.",
    source: "Bhagavad Gita",
  },

  // Karl Marx
  {
    id: 86,
    text: "Workers of the world, unite!",
    russian: "Пролетарии всех стран, соединяйтесь!",
    source: "Karl Marx",
  },
  { id: 87, text: "Religion is the opium of the people.", russian: "Религия — опиум для народа.", source: "Karl Marx" },
  {
    id: 88,
    text: "From each according to ability, to each according to need.",
    russian: "От каждого по способностям, каждому по потребностям.",
    source: "Karl Marx",
  },
  {
    id: 89,
    text: "The philosophers have only interpreted the world.",
    russian: "Философы лишь интерпретировали мир.",
    source: "Karl Marx",
  },
  {
    id: 90,
    text: "History repeats itself, first as tragedy, then as farce.",
    russian: "История повторяется: сначала как трагедия, затем как фарс.",
    source: "Karl Marx",
  },
  {
    id: 91,
    text: "The ruling ideas are the ideas of the ruling class.",
    russian: "Господствующие идеи — идеи господствующего класса.",
    source: "Karl Marx",
  },
  { id: 92, text: "Capital is dead labor.", russian: "Капитал — это мёртвый труд.", source: "Karl Marx" },
  {
    id: 93,
    text: "The proletarians have nothing to lose but chains.",
    russian: "Пролетариям нечего терять, кроме своих цепей.",
    source: "Karl Marx",
  },
  {
    id: 94,
    text: "Quantity transforms into quality.",
    russian: "Количество переходит в качество.",
    source: "Karl Marx",
  },
  {
    id: 95,
    text: "Accumulation of wealth at one pole is misery at the other.",
    russian: "Накопление богатства на одном полюсе — нищета на другом.",
    source: "Karl Marx",
  },

  // Vladimir Lenin
  {
    id: 96,
    text: "A lie told often enough becomes the truth.",
    russian: "Ложь, повторённая достаточно часто, становится правдой.",
    source: "Lenin",
  },
  { id: 97, text: "There are no morals in politics.", russian: "В политике нет морали.", source: "Lenin" },
  {
    id: 98,
    text: "Give me four years to teach the children.",
    russian: "Дайте мне четыре года, чтобы учить детей.",
    source: "Lenin",
  },
  {
    id: 99,
    text: "Trust is good, but control is better.",
    russian: "Доверие — это хорошо, но контроль — лучше.",
    source: "Lenin",
  },
  {
    id: 100,
    text: "Liberty is precious, so precious it must be rationed.",
    russian: "Свобода драгоценна, настолько драгоценна, что должна быть нормирована.",
    source: "Lenin",
  },
  {
    id: 101,
    text: "One man with a gun can control a hundred.",
    russian: "Один человек с оружием может контролировать сотню.",
    source: "Lenin",
  },
  { id: 102, text: "The goal of socialism is communism.", russian: "Цель социализма — коммунизм.", source: "Lenin" },
  {
    id: 103,
    text: "Democracy is indispensable to socialism.",
    russian: "Демократия незаменима для социализма.",
    source: "Lenin",
  },
  { id: 104, text: "Every cook can govern.", russian: "Каждая кухарка может управлять.", source: "Lenin" },
  {
    id: 105,
    text: "Without revolutionary theory, no revolutionary movement.",
    russian: "Без революционной теории нет революционного движения.",
    source: "Lenin",
  },

  // Albert Einstein
  {
    id: 106,
    text: "Imagination is more important than knowledge.",
    russian: "Воображение важнее знания.",
    source: "Einstein",
  },
  { id: 107, text: "Life is like riding a bicycle.", russian: "Жизнь — как езда на велосипеде.", source: "Einstein" },
  {
    id: 108,
    text: "The only source of knowledge is experience.",
    russian: "Единственный источник знания — опыт.",
    source: "Einstein",
  },
  {
    id: 109,
    text: "Reality is merely an illusion, albeit persistent.",
    russian: "Реальность — всего лишь иллюзия, хотя и стойкая.",
    source: "Einstein",
  },
  {
    id: 110,
    text: "I have no special talents, only passionate curiosity.",
    russian: "У меня нет особых талантов, только страстное любопытство.",
    source: "Einstein",
  },

  // Shakespeare
  { id: 111, text: "To be or not to be.", russian: "Быть или не быть.", source: "Shakespeare" },
  { id: 112, text: "All the world's a stage.", russian: "Весь мир — театр.", source: "Shakespeare" },
  { id: 113, text: "Brevity is the soul of wit.", russian: "Краткость — душа остроумия.", source: "Shakespeare" },
  {
    id: 114,
    text: "Something is rotten in Denmark.",
    russian: "Что-то гнилое в Датском королевстве.",
    source: "Shakespeare",
  },
  {
    id: 115,
    text: "Love all, trust few, do wrong to none.",
    russian: "Люби всех, доверяй немногим, не делай зла никому.",
    source: "Shakespeare",
  },
  {
    id: 116,
    text: "Cowards die many times before their deaths.",
    russian: "Трусы умирают много раз до своей смерти.",
    source: "Shakespeare",
  },
  {
    id: 117,
    text: "Hell is empty, all devils are here.",
    russian: "Ад пуст, все дьяволы здесь.",
    source: "Shakespeare",
  },
  {
    id: 118,
    text: "The course of true love never did run smooth.",
    russian: "Путь истинной любви никогда не был гладким.",
    source: "Shakespeare",
  },
  {
    id: 119,
    text: "We are such stuff as dreams are made on.",
    russian: "Мы сделаны из той же материи, что и сны.",
    source: "Shakespeare",
  },
  {
    id: 120,
    text: "Though she be but little, she is fierce.",
    russian: "Хоть она и мала, она свирепа.",
    source: "Shakespeare",
  },

  // Mark Twain
  {
    id: 121,
    text: "The secret of getting ahead is getting started.",
    russian: "Секрет продвижения вперёд — начать.",
    source: "Mark Twain",
  },
  {
    id: 122,
    text: "Never put off till tomorrow what may be done today.",
    russian: "Никогда не откладывай на завтра то, что можно сделать сегодня.",
    source: "Mark Twain",
  },
  {
    id: 123,
    text: "Kindness is the language the deaf can hear.",
    russian: "Доброта — язык, который глухие могут услышать.",
    source: "Mark Twain",
  },
  {
    id: 124,
    text: "The two most important days are when you are born.",
    russian: "Два самых важных дня — когда ты рождён.",
    source: "Mark Twain",
  },
  {
    id: 125,
    text: "Good friends, good books and a sleepy conscience.",
    russian: "Хорошие друзья, хорошие книги и спящая совесть.",
    source: "Mark Twain",
  },

  // Winston Churchill
  {
    id: 126,
    text: "Success is stumbling from failure to failure with enthusiasm.",
    russian: "Успех — это спотыкание от неудачи к неудаче с энтузиазмом.",
    source: "Churchill",
  },
  {
    id: 127,
    text: "If you're going through hell, keep going.",
    russian: "Если идёшь через ад, продолжай идти.",
    source: "Churchill",
  },
  { id: 128, text: "We shall fight on the beaches.", russian: "Мы будем сражаться на пляжах.", source: "Churchill" },
  {
    id: 129,
    text: "Never in the field of human conflict was so much owed.",
    russian: "Никогда в истории человеческих конфликтов столько не было должно.",
    source: "Churchill",
  },
  {
    id: 130,
    text: "History will be kind to me for I intend to write it.",
    russian: "История будет добра ко мне, ибо я намерен её написать.",
    source: "Churchill",
  },

  // Oscar Wilde
  {
    id: 131,
    text: "Be yourself; everyone else is taken.",
    russian: "Будь собой; все остальные уже заняты.",
    source: "Oscar Wilde",
  },
  {
    id: 132,
    text: "I can resist everything except temptation.",
    russian: "Я могу сопротивляться всему, кроме искушения.",
    source: "Oscar Wilde",
  },
  {
    id: 133,
    text: "We are all in the gutter, but some look at stars.",
    russian: "Мы все в канаве, но некоторые смотрят на звёзды.",
    source: "Oscar Wilde",
  },
  {
    id: 134,
    text: "The only way to get rid of temptation is to yield.",
    russian: "Единственный способ избавиться от искушения — уступить.",
    source: "Oscar Wilde",
  },
  {
    id: 135,
    text: "Experience is the name everyone gives to their mistakes.",
    russian: "Опыт — это название, которое все дают своим ошибкам.",
    source: "Oscar Wilde",
  },
  {
    id: 136,
    text: "True friends stab you in the front.",
    russian: "Настоящие друзья наносят удар спереди.",
    source: "Oscar Wilde",
  },
  {
    id: 137,
    text: "A cynic is a man who knows the price of everything.",
    russian: "Циник — человек, который знает цену всему.",
    source: "Oscar Wilde",
  },
  {
    id: 138,
    text: "I have nothing to declare except my genius.",
    russian: "Мне нечего декларировать, кроме моего гения.",
    source: "Oscar Wilde",
  },
  {
    id: 139,
    text: "Life is too important to be taken seriously.",
    russian: "Жизнь слишком важна, чтобы относиться к ней серьёзно.",
    source: "Oscar Wilde",
  },
  {
    id: 140,
    text: "Always forgive your enemies; nothing annoys them so much.",
    russian: "Всегда прощай своих врагов; ничто так их не раздражает.",
    source: "Oscar Wilde",
  },

  // Benjamin Franklin
  {
    id: 141,
    text: "Early to bed and early to rise.",
    russian: "Рано ложиться и рано вставать.",
    source: "Benjamin Franklin",
  },
  {
    id: 142,
    text: "An investment in knowledge pays the best interest.",
    russian: "Инвестиции в знания приносят лучший процент.",
    source: "Benjamin Franklin",
  },
  {
    id: 143,
    text: "Tell me and I forget, teach me and I remember.",
    russian: "Скажи мне, и я забуду, научи меня, и я запомню.",
    source: "Benjamin Franklin",
  },
  {
    id: 144,
    text: "Well done is better than well said.",
    russian: "Хорошо сделанное лучше, чем хорошо сказанное.",
    source: "Benjamin Franklin",
  },
  {
    id: 145,
    text: "A penny saved is a penny earned.",
    russian: "Сэкономленный пенни — заработанный пенни.",
    source: "Benjamin Franklin",
  },

  // Che Guevara
  {
    id: 146,
    text: "The revolution is not an apple that falls when ripe.",
    russian: "Революция — не яблоко, которое падает, когда созреет.",
    source: "Che Guevara",
  },
  {
    id: 147,
    text: "I am not a liberator, liberators do not exist.",
    russian: "Я не освободитель, освободителей не существует.",
    source: "Che Guevara",
  },
  {
    id: 148,
    text: "At the risk of seeming ridiculous, let me say: I love.",
    russian: "Рискуя показаться смешным, скажу: я люблю.",
    source: "Che Guevara",
  },
  {
    id: 149,
    text: "Silence is argument carried out by other means.",
    russian: "Молчание — это спор, продолженный другими средствами.",
    source: "Che Guevara",
  },
  {
    id: 150,
    text: "The true revolutionary is guided by feelings of love.",
    russian: "Истинный революционер руководствуется чувствами любви.",
    source: "Che Guevara",
  },

  // Mahatma Gandhi
  {
    id: 151,
    text: "Be the change you wish to see.",
    russian: "Будь переменой, которую хочешь увидеть.",
    source: "Gandhi",
  },
  {
    id: 152,
    text: "An eye for an eye makes the world blind.",
    russian: "Око за око делает весь мир слепым.",
    source: "Gandhi",
  },
  {
    id: 153,
    text: "Live as if you were to die tomorrow.",
    russian: "Живи так, как будто умрёшь завтра.",
    source: "Gandhi",
  },
  {
    id: 154,
    text: "The weak can never forgive, forgiveness is strength.",
    russian: "Слабые никогда не прощают, прощение — это сила.",
    source: "Gandhi",
  },
  {
    id: 155,
    text: "Happiness is when what you think, say and do are in harmony.",
    russian: "Счастье — когда думаешь, говоришь и делаешь в гармонии.",
    source: "Gandhi",
  },
]
