export interface Phrase {
  english: string
  french: string
  source: string
}

export const phrases: Phrase[] = [
  // Short phrases (≤50 chars)
  {
    english: "To be, or not to be, that is the question.",
    french: "Être ou ne pas être, telle est la question.",
    source: "Shakespeare",
  },
  {
    english: "All men are created equal.",
    french: "Tous les hommes sont créés égaux.",
    source: "US Declaration of Independence",
  },
  { english: "I think, therefore I am.", french: "Je pense, donc je suis.", source: "Descartes" },
  { english: "The truth will set you free.", french: "La vérité vous rendra libres.", source: "Bible" },
  {
    english: "Do unto others as you would have them do unto you.",
    french: "Fais aux autres ce que tu voudrais qu'ils te fassent.",
    source: "Bible",
  },
  {
    english: "Power corrupts, absolute power corrupts absolutely.",
    french: "Le pouvoir corrompt, le pouvoir absolu corrompt absolument.",
    source: "Historical Observation",
  },
  { english: "God is dead.", french: "Dieu est mort.", source: "Nietzsche" },
  { english: "Time is money.", french: "Le temps c'est de l'argent.", source: "Benjamin Franklin" },
  { english: "Knowledge is power.", french: "La connaissance c'est le pouvoir.", source: "Francis Bacon" },

  // Medium phrases (51-100 chars)
  {
    english: "In the beginning God created the heavens and the earth.",
    french: "Au commencement, Dieu créa les cieux et la terre.",
    source: "Bible",
  },
  {
    english: "The only thing we have to fear is fear itself.",
    french: "La seule chose dont nous devons avoir peur est la peur elle-même.",
    source: "Franklin D. Roosevelt",
  },
  {
    english: "Workers of the world, unite! You have nothing to lose but your chains.",
    french: "Prolétaires de tous les pays, unissez-vous! Vous n'avez rien à perdre que vos chaînes.",
    source: "Karl Marx",
  },
  {
    english: "Ask not what your country can do for you, ask what you can do for your country.",
    french:
      "Ne demandez pas ce que votre pays peut faire pour vous, demandez ce que vous pouvez faire pour votre pays.",
    source: "John F. Kennedy",
  },
  {
    english: "All the world's a stage, and all the men and women merely players.",
    french: "Le monde entier est un théâtre, et tous les hommes et femmes ne sont que des acteurs.",
    source: "Shakespeare",
  },
  {
    english: "The reports of my death have been greatly exaggerated.",
    french: "Les rapports sur ma mort ont été grandement exagérés.",
    source: "Mark Twain",
  },
  {
    english: "I can resist everything except temptation.",
    french: "Je peux résister à tout sauf à la tentation.",
    source: "Oscar Wilde",
  },
  {
    english: "Be the change you wish to see in the world.",
    french: "Soyez le changement que vous voulez voir dans le monde.",
    source: "Attributed to Gandhi",
  },
  {
    english: "That which does not kill us makes us stronger.",
    french: "Ce qui ne nous tue pas nous rend plus forts.",
    source: "Nietzsche",
  },
  {
    english: "The unexamined life is not worth living.",
    french: "Une vie sans examen ne vaut pas la peine d'être vécue.",
    source: "Socrates",
  },

  // Long phrases (101-150 chars)
  {
    english:
      "Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof.",
    french:
      "Le Congrès ne fera aucune loi concernant l'établissement d'une religion ou interdisant son libre exercice.",
    source: "US Bill of Rights",
  },
  {
    english:
      "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights.",
    french:
      "Nous tenons ces vérités pour évidentes, que tous les hommes sont créés égaux, qu'ils sont dotés par leur Créateur de certains droits inaliénables.",
    source: "US Declaration of Independence",
  },
  {
    english: "Political power grows out of the barrel of a gun.",
    french: "Le pouvoir politique sort du canon d'un fusil.",
    source: "Mao's Little Red Book",
  },
  {
    english: "A journey of a thousand miles begins with a single step.",
    french: "Un voyage de mille lieues commence par un seul pas.",
    source: "Lao Tzu",
  },
  {
    english: "The best time to plant a tree was twenty years ago. The second best time is now.",
    french:
      "Le meilleur moment pour planter un arbre était il y a vingt ans. Le deuxième meilleur moment est maintenant.",
    source: "Chinese Proverb",
  },
  {
    english: "It does not matter how slowly you go as long as you do not stop.",
    french: "Peu importe la lenteur à laquelle vous allez tant que vous ne vous arrêtez pas.",
    source: "Confucius",
  },
  {
    english: "When the winds of change blow, some people build walls and others build windmills.",
    french:
      "Quand les vents du changement soufflent, certains construisent des murs et d'autres construisent des moulins à vent.",
    source: "Chinese Proverb",
  },
  {
    english: "I have not failed. I've just found ten thousand ways that won't work.",
    french: "Je n'ai pas échoué. J'ai juste trouvé dix mille façons qui ne fonctionnent pas.",
    source: "Thomas Edison",
  },
  {
    english: "The only way to do great work is to love what you do.",
    french: "La seule façon de faire du bon travail est d'aimer ce que vous faites.",
    source: "Steve Jobs",
  },
  {
    english: "In the midst of chaos, there is also opportunity.",
    french: "Au milieu du chaos, il y a aussi une opportunité.",
    source: "Sun Tzu",
  },

  // Very long phrases (>150 chars)
  {
    english:
      "It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who is actually in the arena.",
    french:
      "Ce n'est pas le critique qui compte; ni l'homme qui montre comment le fort trébuche, ou où l'homme d'action aurait pu faire mieux. Le mérite revient à l'homme qui est réellement dans l'arène.",
    source: "Theodore Roosevelt",
  },
  {
    english: "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference.",
    french:
      "Deux chemins divergeaient dans un bois, et j'ai pris celui qui était le moins emprunté, et cela a fait toute la différence.",
    source: "Robert Frost",
  },
  {
    english: "For what shall it profit a man, if he shall gain the whole world, and lose his own soul?",
    french: "Car que sert-il à un homme de gagner le monde entier, s'il perd son âme?",
    source: "Bible",
  },
  {
    english: "The proletarians have nothing to lose but their chains. They have a world to win.",
    french: "Les prolétaires n'ont rien à perdre que leurs chaînes. Ils ont un monde à gagner.",
    source: "Karl Marx",
  },
  {
    english:
      "Religion is the opium of the people. It is the sigh of the oppressed creature, the heart of a heartless world.",
    french: "La religion est l'opium du peuple. C'est le soupir de la créature opprimée, le cœur d'un monde sans cœur.",
    source: "Karl Marx",
  },
  {
    english: "Give me liberty, or give me death!",
    french: "Donnez-moi la liberté, ou donnez-moi la mort!",
    source: "Patrick Henry",
  },
  {
    english: "A revolution is not a dinner party, or writing an essay, or painting a picture, or doing embroidery.",
    french: "Une révolution n'est pas un dîner, ni écrire un essai, ni peindre un tableau, ni faire de la broderie.",
    source: "Mao's Little Red Book",
  },
  {
    english: "The right of the people to keep and bear arms shall not be infringed.",
    french: "Le droit du peuple de détenir et de porter des armes ne sera pas enfreint.",
    source: "US Bill of Rights",
  },
  {
    english: "Blessed are the meek, for they shall inherit the earth.",
    french: "Heureux les doux, car ils hériteront de la terre.",
    source: "Bible",
  },
  {
    english:
      "You have heard that it was said, 'Eye for eye, and tooth for tooth.' But I tell you, do not resist an evil person.",
    french:
      "Vous avez entendu qu'il a été dit: 'Œil pour œil, et dent pour dent.' Mais je vous dis, ne résistez pas à une personne mauvaise.",
    source: "Bible",
  },

  // Additional Quran
  {
    english: "Read! In the name of your Lord who created.",
    french: "Lis! Au nom de ton Seigneur qui a créé.",
    source: "Quran",
  },
  {
    english: "Indeed, with hardship comes ease.",
    french: "En vérité, avec la difficulté vient la facilité.",
    source: "Quran",
  },
  {
    english: "Allah does not burden a soul beyond that it can bear.",
    french: "Allah n'impose à aucune âme une charge supérieure à sa capacité.",
    source: "Quran",
  },
  { english: "And speak to people good words.", french: "Et parlez aux gens avec bonté.", source: "Quran" },
  {
    english: "Whoever saves a life, it is as if he had saved all of mankind.",
    french: "Quiconque sauve une vie, c'est comme s'il avait sauvé toute l'humanité.",
    source: "Quran",
  },

  // Additional Bible
  { english: "Love your neighbor as yourself.", french: "Tu aimeras ton prochain comme toi-même.", source: "Bible" },
  {
    english: "Judge not, that ye be not judged.",
    french: "Ne jugez point, afin que vous ne soyez point jugés.",
    source: "Bible",
  },
  {
    english: "The Lord is my shepherd; I shall not want.",
    french: "L'Éternel est mon berger: je ne manquerai de rien.",
    source: "Bible",
  },
  { english: "Faith without works is dead.", french: "La foi sans les œuvres est morte.", source: "Bible" },
  {
    english: "Let he who is without sin cast the first stone.",
    french: "Que celui qui est sans péché jette la première pierre.",
    source: "Bible",
  },

  // Additional Talmud
  {
    english: "Who is wise? One who learns from every person.",
    french: "Qui est sage? Celui qui apprend de chaque personne.",
    source: "Talmud",
  },
  {
    english:
      "Do not be daunted by the enormity of the world's grief. You are not obligated to complete the work, but neither are you free to abandon it.",
    french:
      "Ne soyez pas découragé par l'énormité de la souffrance du monde. Vous n'êtes pas obligé de terminer le travail, mais vous n'êtes pas non plus libre de l'abandonner.",
    source: "Talmud",
  },
  { english: "Say little and do much.", french: "Dis peu et fais beaucoup.", source: "Talmud" },
  {
    english: "The highest form of wisdom is kindness.",
    french: "La forme la plus élevée de sagesse est la bonté.",
    source: "Talmud",
  },
  {
    english: "Silence is a fence around wisdom.",
    french: "Le silence est une clôture autour de la sagesse.",
    source: "Talmud",
  },

  // Additional Confucius
  {
    english:
      "By three methods we may learn wisdom: First, by reflection, which is noblest; Second, by imitation, which is easiest; and third by experience, which is the bitterest.",
    french:
      "Par trois méthodes nous pouvons apprendre la sagesse: Premièrement, par la réflexion, qui est la plus noble; Deuxièmement, par l'imitation, qui est la plus facile; et troisièmement par l'expérience, qui est la plus amère.",
    source: "Confucius",
  },
  {
    english: "The man who moves a mountain begins by carrying away small stones.",
    french: "L'homme qui déplace une montagne commence par transporter de petites pierres.",
    source: "Confucius",
  },
  {
    english: "Our greatest glory is not in never falling, but in rising every time we fall.",
    french:
      "Notre plus grande gloire n'est pas de ne jamais tomber, mais de nous relever chaque fois que nous tombons.",
    source: "Confucius",
  },
  {
    english: "When anger rises, think of the consequences.",
    french: "Quand la colère monte, pensez aux conséquences.",
    source: "Confucius",
  },
  {
    english: "To see what is right and not do it is a lack of courage.",
    french: "Voir ce qui est juste et ne pas le faire est un manque de courage.",
    source: "Confucius",
  },

  // Additional Bhagavad Gita
  {
    english: "You have the right to work, but never to the fruit of work.",
    french: "Vous avez le droit de travailler, mais jamais aux fruits du travail.",
    source: "Bhagavad Gita",
  },
  {
    english: "The soul is neither born, and nor does it die.",
    french: "L'âme n'est ni née, et elle ne meurt pas non plus.",
    source: "Bhagavad Gita",
  },
  {
    english: "One who sees inaction in action, and action in inaction, is intelligent among men.",
    french: "Celui qui voit l'inaction dans l'action, et l'action dans l'inaction, est intelligent parmi les hommes.",
    source: "Bhagavad Gita",
  },
  {
    english: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
    french:
      "Quand la méditation est maîtrisée, l'esprit est inébranlable comme la flamme d'une lampe dans un endroit sans vent.",
    source: "Bhagavad Gita",
  },
  {
    english: "Set thy heart upon thy work, but never on its reward.",
    french: "Fixe ton cœur sur ton travail, mais jamais sur sa récompense.",
    source: "Bhagavad Gita",
  },

  // Additional Lenin
  {
    english: "A lie told often enough becomes the truth.",
    french: "Un mensonge répété assez souvent devient la vérité.",
    source: "Vladimir Lenin",
  },
  {
    english: "There are no morals in politics; there is only expedience.",
    french: "Il n'y a pas de morale en politique; il n'y a que l'opportunisme.",
    source: "Vladimir Lenin",
  },
  {
    english: "The best way to destroy the capitalist system is to debauch the currency.",
    french: "La meilleure façon de détruire le système capitaliste est de corrompre la monnaie.",
    source: "Vladimir Lenin",
  },
  {
    english: "Give me four years to teach the children and the seed I have sown will never be uprooted.",
    french: "Donnez-moi quatre ans pour enseigner aux enfants et la graine que j'ai semée ne sera jamais déracinée.",
    source: "Vladimir Lenin",
  },
  {
    english: "The goal of socialism is communism.",
    french: "Le but du socialisme est le communisme.",
    source: "Vladimir Lenin",
  },

  // Additional Einstein
  {
    english: "Imagination is more important than knowledge.",
    french: "L'imagination est plus importante que la connaissance.",
    source: "Albert Einstein",
  },
  {
    english: "The definition of insanity is doing the same thing over and over again and expecting different results.",
    french:
      "La définition de la folie est de faire la même chose encore et encore et s'attendre à des résultats différents.",
    source: "Albert Einstein",
  },
  {
    english: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    french: "La vie, c'est comme une bicyclette, il faut avancer pour ne pas perdre l'équilibre.",
    source: "Albert Einstein",
  },
  {
    english: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
    french: "L'important est de ne pas cesser de questionner. La curiosité a sa propre raison d'être.",
    source: "Albert Einstein",
  },

  // Additional Shakespeare
  { english: "All that glitters is not gold.", french: "Tout ce qui brille n'est pas or.", source: "Shakespeare" },
  {
    english: "The course of true love never did run smooth.",
    french: "Le cours du véritable amour n'a jamais été facile.",
    source: "Shakespeare",
  },
  { english: "Brevity is the soul of wit.", french: "La brièveté est l'âme de l'esprit.", source: "Shakespeare" },
  { english: "To thine own self be true.", french: "Sois fidèle à toi-même.", source: "Shakespeare" },
  {
    english: "Something is rotten in the state of Denmark.",
    french: "Quelque chose est pourri dans le royaume du Danemark.",
    source: "Shakespeare",
  },
  {
    english: "A rose by any other name would smell as sweet.",
    french: "Une rose sous tout autre nom sentirait aussi bon.",
    source: "Shakespeare",
  },
  {
    english: "Parting is such sweet sorrow.",
    french: "La séparation est une si douce douleur.",
    source: "Shakespeare",
  },

  // Additional Mark Twain
  {
    english: "The secret of getting ahead is getting started.",
    french: "Le secret pour avancer est de commencer.",
    source: "Mark Twain",
  },
  {
    english: "Kindness is the language which the deaf can hear and the blind can see.",
    french: "La gentillesse est la langue que les sourds peuvent entendre et que les aveugles peuvent voir.",
    source: "Mark Twain",
  },
  {
    english: "The two most important days in your life are the day you are born and the day you find out why.",
    french:
      "Les deux jours les plus importants de votre vie sont le jour où vous êtes né et le jour où vous découvrez pourquoi.",
    source: "Mark Twain",
  },
  {
    english: "Never put off till tomorrow what may be done day after tomorrow just as well.",
    french: "Ne remettez jamais à demain ce qui peut être fait après-demain tout aussi bien.",
    source: "Mark Twain",
  },
  {
    english: "If you tell the truth, you don't have to remember anything.",
    french: "Si vous dites la vérité, vous n'avez rien à retenir.",
    source: "Mark Twain",
  },
  {
    english: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    french:
      "Chaque fois que vous vous trouvez du côté de la majorité, il est temps de faire une pause et de réfléchir.",
    source: "Mark Twain",
  },
  {
    english: "It's not the size of the dog in the fight, it's the size of the fight in the dog.",
    french: "Ce n'est pas la taille du chien dans le combat, c'est la taille du combat dans le chien.",
    source: "Mark Twain",
  },

  // Additional Churchill
  {
    english: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    french: "Le succès n'est pas final, l'échec n'est pas fatal: c'est le courage de continuer qui compte.",
    source: "Winston Churchill",
  },
  {
    english: "We make a living by what we get, but we make a life by what we give.",
    french: "Nous gagnons notre vie par ce que nous obtenons, mais nous construisons une vie par ce que nous donnons.",
    source: "Winston Churchill",
  },
  {
    english: "If you're going through hell, keep going.",
    french: "Si vous traversez l'enfer, continuez d'avancer.",
    source: "Winston Churchill",
  },
  {
    english: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.",
    french:
      "Le pessimiste voit la difficulté dans chaque opportunité. L'optimiste voit l'opportunité dans chaque difficulté.",
    source: "Winston Churchill",
  },

  // Additional Oscar Wilde
  {
    english: "Be yourself; everyone else is already taken.",
    french: "Soyez vous-même; tous les autres sont déjà pris.",
    source: "Oscar Wilde",
  },
  {
    english: "We are all in the gutter, but some of us are looking at the stars.",
    french: "Nous sommes tous dans le caniveau, mais certains d'entre nous regardent les étoiles.",
    source: "Oscar Wilde",
  },
  {
    english: "To live is the rarest thing in the world. Most people exist, that is all.",
    french: "Vivre est la chose la plus rare au monde. La plupart des gens existent, c'est tout.",
    source: "Oscar Wilde",
  },
  {
    english: "There is only one thing in the world worse than being talked about, and that is not being talked about.",
    french: "Il n'y a qu'une chose au monde pire que d'être le sujet de conversation, et c'est de ne pas l'être.",
    source: "Oscar Wilde",
  },
  {
    english: "The truth is rarely pure and never simple.",
    french: "La vérité est rarement pure et jamais simple.",
    source: "Oscar Wilde",
  },
  {
    english: "Experience is simply the name we give our mistakes.",
    french: "L'expérience est simplement le nom que nous donnons à nos erreurs.",
    source: "Oscar Wilde",
  },
  {
    english: "A cynic is a man who knows the price of everything and the value of nothing.",
    french: "Un cynique est un homme qui connaît le prix de tout et la valeur de rien.",
    source: "Oscar Wilde",
  },
  {
    english: "Some cause happiness wherever they go; others whenever they go.",
    french: "Certains apportent le bonheur partout où ils vont; d'autres chaque fois qu'ils partent.",
    source: "Oscar Wilde",
  },

  // Humorous/Clever Observations
  {
    english: "I'm not arguing, I'm just explaining why I'm right.",
    french: "Je ne me dispute pas, j'explique juste pourquoi j'ai raison.",
    source: "Humorous Observation",
  },
  { english: "Common sense is not so common.", french: "Le bon sens n'est pas si commun.", source: "Voltaire" },
  {
    english: "The road to success is always under construction.",
    french: "La route du succès est toujours en construction.",
    source: "Humorous Observation",
  },
  {
    english: "If at first you don't succeed, skydiving is not for you.",
    french: "Si au début vous ne réussissez pas, le parachutisme n'est pas pour vous.",
    source: "Humorous Observation",
  },
  {
    english: "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    french: "J'ai dit à ma femme qu'elle dessinait ses sourcils trop haut. Elle avait l'air surprise.",
    source: "Humorous Observation",
  },
  {
    english: "The early bird gets the worm, but the second mouse gets the cheese.",
    french: "L'oiseau matinal attrape le ver, mais la deuxième souris obtient le fromage.",
    source: "Humorous Observation",
  },
  {
    english: "A clear conscience is usually the sign of a bad memory.",
    french: "Une conscience claire est généralement le signe d'une mauvaise mémoire.",
    source: "Humorous Observation",
  },
  {
    english: "I used to think I was indecisive, but now I'm not so sure.",
    french: "Je pensais être indécis, mais maintenant je n'en suis plus si sûr.",
    source: "Humorous Observation",
  },
  {
    english: "Light travels faster than sound. That's why some people appear bright until you hear them speak.",
    french:
      "La lumière voyage plus vite que le son. C'est pourquoi certaines personnes semblent brillantes jusqu'à ce que vous les entendiez parler.",
    source: "Humorous Observation",
  },
  {
    english: "The problem with troubleshooting is that trouble shoots back.",
    french: "Le problème avec le dépannage est que les ennuis ripostent.",
    source: "Humorous Observation",
  },
  {
    english: "If you think nobody cares if you're alive, try missing a couple of payments.",
    french:
      "Si vous pensez que personne ne se soucie de savoir si vous êtes vivant, essayez de manquer quelques paiements.",
    source: "Humorous Observation",
  },
  {
    english: "Always borrow money from a pessimist. He won't expect it back.",
    french: "Empruntez toujours de l'argent à un pessimiste. Il ne s'attendra pas à le récupérer.",
    source: "Humorous Observation",
  },
  {
    english: "A diplomat is someone who can tell you to go to hell in such a way that you look forward to the trip.",
    french:
      "Un diplomate est quelqu'un qui peut vous dire d'aller au diable de telle manière que vous attendez le voyage avec impatience.",
    source: "Humorous Observation",
  },
  {
    english: "Behind every great man is a woman rolling her eyes.",
    french: "Derrière chaque grand homme se trouve une femme qui lève les yeux au ciel.",
    source: "Humorous Observation",
  },
  {
    english: "The difference between stupidity and genius is that genius has its limits.",
    french: "La différence entre la stupidité et le génie est que le génie a ses limites.",
    source: "Attributed to Einstein",
  },
  {
    english: "I'm writing a book. I've got the page numbers done.",
    french: "J'écris un livre. J'ai fini les numéros de page.",
    source: "Humorous Observation",
  },
  {
    english: "Going to church doesn't make you a Christian any more than standing in a garage makes you a car.",
    french:
      "Aller à l'église ne fait pas plus de vous un chrétien que de rester dans un garage ne fait de vous une voiture.",
    source: "Humorous Observation",
  },
  {
    english: "The best way to appreciate your job is to imagine yourself without one.",
    french: "La meilleure façon d'apprécier votre travail est de vous imaginer sans emploi.",
    source: "Humorous Observation",
  },
  {
    english: "I'm not lazy, I'm just on energy-saving mode.",
    french: "Je ne suis pas paresseux, je suis juste en mode économie d'énergie.",
    source: "Humorous Observation",
  },
  {
    english: "The only mystery in life is why the kamikaze pilots wore helmets.",
    french: "Le seul mystère dans la vie est pourquoi les pilotes kamikaze portaient des casques.",
    source: "Humorous Observation",
  },
]
