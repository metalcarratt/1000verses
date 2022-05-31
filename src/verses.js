const verses = [
{
	id: 1, ref: "1 Timothy 2:4", verse: "Who desires all men to be saved and to come to the full knowledge of the truth.", cat: "Verses::Truth Verses::Service::God-Ordained-Way Verses::High-Peak-of-the-Divine-Revelation"
},
{
	id: 2, ref: "John 17:17", verse: "Sanctify them in the truth; Your word is truth.", cat: "Verses::Truth Verses::High-Peak-of-the-Divine-Revelation"
},
{
	id: 3, ref: "John 8:32", verse: "And you shall know the truth, and the truth shall set you free.", cat: "Verses::Truth Verses::High-Peak-of-the-Divine-Revelation"
},
{
	id: 4, ref: "Ephesians 1:13", verse: "In whom you also, having heard the word of the truth, the gospel of your salvation, in Him also believing, you were sealed with the Holy Spirit of the promise", cat: "Verses::Truth Verses::Truth::The-Spirit"
},
{
	id: 5, ref: "Colossians 1:5", verse: "Because of the hope laid up for you in the heavens, of which you heard before in the word of the truth of the gospel.", cat: "Verses::Truth"
},
{
	id: 6, ref: "2 Thessalonians 2:13", verse: "But we ought to thank God always concerning you, brothers beloved of the Lord, because God chose you from the beginning unto salvation in sanctification of the Spirit and belief of the truth", cat: "Verses::Truth"
},
{
	id: 7, ref: "James 1:18", verse: "He brought us forth by the word of truth, purposing that we might be a kind of firstfruits of His creatures", cat: "Verses::Truth"
},
{
	id: 8, ref: "2 Timothy 2:15", verse: "Be diligent to present yourself approved to God, an unashamed workman, cutting straight the word of the truth.", cat: "Verses::Truth"
},
{
	id: 9, ref: "2 Thessalonians 2:10", verse: "And in all deceit of unrighteousness among those who are perishing, because they did not receive the love of the truth that they might be saved.", cat: "Verses::Truth"
},
{
	id: 10, ref: "Proverbs 23:23", verse: "Buy truth, and do not sell it; Buy wisdom and instruction and understanding.", cat: "Verses::Truth"
},
{
	id: 11, ref: "1 Peter 1:22", verse: "Since you have purified your souls by your obedience to the truth unto unfeigned brotherly love, love one another from a pure heart fervently", cat: "Verses::Truth"
},
{
	id: 12, ref: "3 John 4", verse: "I have no greater joy than these things, that I hear that my children are walking in the truth.", cat: "Verses::Truth"
},
{
	id: 13, ref: "2 Timothy 3:17", verse: "That the man of God may be complete, fully equipped for every good work.", cat: "Verses::Truth Verses::Truth::The-Word-Of-God"
},
{
	id: 14, ref: "1 John 1:6", verse: "If we say that we have fellowship with Him and yet walk in the darkness, we lie and are not practicing the truth;", cat: "Verses::Truth"
},
{
	id: 15, ref: "2 Peter 1:12", verse: "Therefore I will be ready always to remind you concerning these things, even though you know them and have been established in the present truth.", cat: "Verses::Truth"
},
{
	id: 16, ref: "1 Timothy 3:15", verse: "But if I delay, I write that you may know how one ought to conduct himself in the house of God, which is the church of the living God, the pillar and base of the truth.", cat: "Verses::Truth Verses::Truth::The-Church"
},
{
	id: 17, ref: "2 Timothy 3:16", verse: "All Scripture is God-breathed and profitable for teaching, for conviction, for correction, for instruction in righteousness", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 18, ref: "2 Peter 1:21", verse: "For no prophecy was ever borne by the will of man, but men spoke from God while being borne by the Holy Spirit.", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 19, ref: "Matthew 4:4", verse: "But He answered and said, It is written, “Man shall not live on bread alone, but on every word that proceeds out through the mouth of God.”", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 20, ref: "Psalms 119:105", verse: "Your word is a lamp to my feet And a light to my path.", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 21, ref: "Ephesians 3:3", verse: "That by revelation the mystery was made known to me, as I have written previously in brief", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 22, ref: "Ephesians 3:5", verse: "Which in other generations was not made known to the sons of men, as it has now been revealed to His holy apostles and prophets in spirit", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 23, ref: "Hebrews 1:1	Go", verse: ", having spoken of old in many portions and in many ways to the fathers in the prophets", cat: "Verses::Truth::The-Word-Of-God Verses::Life-Practices::Prophesying Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 24, ref: "Hebrews 1:2	Has", verse: "at the last of these days spoken to us in the Son, whom He appointed Heir of all things, through whom also He made the universe", cat: "Verses::Truth::The-Word-Of-God Verses::Life-Practices::Prophesying Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 25, ref: "Psalms 119:140	Your", verse: "word is very pure, And Your servant loves it", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 26, ref: "1 Peter 1:24", verse: "For \"all flesh is like grass, and all its glory like the flower of grass. The grass has withered, and the flower has fallen off,", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 27, ref: "1 Peter 1:25", verse: "But the word of the Lord abides forever.\" And this is the word which has been announced to you as the gospel.", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 28, ref: "Matthew 24:35	Heaven", verse: "and earth will pass away, but My words shall by no means pass away.", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 29, ref: "Matthew 5:18	For", verse: "truly I say to you, Until heaven and earth pass away, one iota or one serif shall by no means pass away from the law untill all come to pass.", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 30, ref: "Isaiah 40:22	It", verse: "is He who sits above the circle of the earth, and its inhabitants are like grasshoppers; Who stretches out the heavens like a curtain, and spreads them out like a tent to dwell in.", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 31, ref: "Luke 24:27	And", verse: "beginning from Moses and from all the prophets, He explained to them clearly in all the Scriptures the things concerning Himself.", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 32, ref: "Luke 24:44	And", verse: "He said to them, These are My words which I spoke to you while I was still with you, that all the things written in the Law of Moses and the Prophets and Psalms concerning Me must be fulfilled.", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 33, ref: "Romans 10:8	But", verse: "what does it say? “The word is near you, in your mouth and in your heart,” that is, the word of the faith which we proclaim", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 34, ref: "Romans 10:17	So", verse: "faith comes out of hearing, and hearing through the word of Christ.", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 35, ref: "1 Peter 1:23", verse: "Having been regenerated not of corruptible seed but of incorruptible, through the living and abiding word of God.", cat: "Verses::Truth::The-Word-Of-God Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 36, ref: "John 6:68	Simon", verse: "Peter answered Him, Lord, to whom shall we go? You have words of eternal life", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 37, ref: "John 6:63	It", verse: "is the Spirit who gives life; the flesh profits nothing; the words which I have spoken to you are spirit and are life.", cat: "Verses::Truth::The-Word-Of-God Verses::Life-Practices::Pray-reading"
},
{
	id: 38, ref: "Hebrews 4:12	For", verse: "the word of God is living and operative and sharper than any two-edged sword, and piercing even to the dividing of soul and spirit and of joints and marrow, and able to discern the thoughts and intentions of the heart.", cat: "Verses::Truth::The-Word-Of-God Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 39, ref: "James 1:21	Therefore", verse: "putting away all filthiness and the abundance of malice, receive in meekness the implanted word, which is able to save your souls.", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 40, ref: "Psalms 119:103	How", verse: "sweet are Your words to my taste! Sweeter than honey to my mouth!", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 41, ref: "1 Peter 2:2", verse: "As newborn babes, long for the guileless milk of the word in order that by it you may grow unto salvation", cat: "Verses::Truth::The-Word-Of-God Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 42, ref: "Acts 20:32	And", verse: "now I commit you to God and to the word of His grace, which is able to build you up and to give you the inheritance among all those who have been sanctified.", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 43, ref: "Ephesians 5:26	That", verse: "He might sanctify her, cleansing her by the washing of the water in the word", cat: "Verses::Truth::The-Word-Of-God Verses::Other-Crucial-Matters::Divine-Human-Romance"
},
{
	id: 44, ref: "John 1:1	In", verse: "the beginning was the Word, and the Word was with God, and the Word was God.", cat: "Verses::Truth::Christ Verses::Truth::The-Word-Of-God"
},
{
	id: 45, ref: "John 1:14	And", verse: "the Word became flesh and tabernacled among us (and we beheld His glory, glory as of the only Begotten from the Father), full of grace and reality.", cat: "Verses::Truth::Christ Verses::Truth::The-Word-Of-God Verses::Life-Practices::Gospel"
},
{
	id: 46, ref: "Isaiah 55:11	So", verse: "will My word be which goes forth from My mouth; It will not return to Me vainly, But it will accomplish what I delight in, And it will prosper in the matter to which I have sent it.", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 47, ref: "Isaiah 11:9b	For", verse: "the earth will be filled with the knowledge of Jehovah, As water covers the sea.", cat: "Verses::Truth::The-Word-Of-God"
},
{
	id: 48, ref: "1 Corinthians 8:4", verse: "Therefore concerning the eating of things sacrificed to idols, we know that an idol is nothing in the world and that there is no God but one.", cat: "Verses::Truth::God"
},
{
	id: 49, ref: "Deuteronomy 6:4	Hea", verse: ", O Israel, Jehovah is our God; Jehovah is one.", cat: "Verses::Truth::God"
},
{
	id: 50, ref: "Isaiah 45:5	I", verse: "am Jehovah and there is no one else; Besides Me there is no God; I girded you, although you do not know Me;", cat: "Verses::Truth::God"
},
{
	id: 51, ref: "Exodus 3:14	And", verse: "God said to Moses, I AM WHO I AM. And He said, Thus you shall say to the children of Israel, I AM has sent me to you.", cat: "Verses::Truth::God"
},
{
	id: 52, ref: "Exodus 3:16	G", verse: ", and gather the elders of Israel together, and say to them, Jehovah, the God of your fathers, the God of Abraham, of Isaac, and of Jacob, has appeared to me, saying, I have surely visited you and seen what is being done to you in Egypt.", cat: "Verses::Truth::God"
},
{
	id: 53, ref: "Revelation 1:8	I", verse: "am the Alpha and the Omega, says the Lord God, He who is and who was and who is coming, the Almighty.", cat: "Verses::Truth::God"
},
{
	id: 54, ref: "John 17:3	And", verse: "this is eternal life, that they may know You, the only true God, and Him whom You have sent, Jesus Christ.", cat: "Verses::Truth::God"
},
{
	id: 55, ref: "1 Thessalonians 1:9", verse: "For they themselves report concerning us what kind of entrance we had toward you and how you turned to God from the idols to serve a living and true God", cat: "Verses::Truth::God Verses::Truth::The-Believers"
},
{
	id: 56, ref: "1 Timothy 6:16", verse: "Who alone has immortality, dwelling in unapproachable light, whom no man has seen nor can see, to whom be honor and eternal might. Amen.", cat: "Verses::Truth::God"
},
{
	id: 57, ref: "1 Timothy 1:17", verse: "Now to the King of the ages, incorruptible, invisible, the only God, be honor and glory forever and ever. Amen.", cat: "Verses::Truth::God"
},
{
	id: 58, ref: "Psalms 90:2	Before", verse: "the mountains were brought forth, And before You gave birth to the earth and the world, Indeed from eternity to eternity, You are God.", cat: "Verses::Truth::God"
},
{
	id: 59, ref: "Genesis 1:1	In", verse: "the beginning God created the heavens and the earth.", cat: "Verses::Truth::God"
},
{
	id: 60, ref: "Revelation 4:11	You", verse: "are worthy, our Lord and God, to receive the glory and the honor and the power, for You have created all things, and because of Your will they were, and were created.", cat: "Verses::Truth::God"
},
{
	id: 61, ref: "Psalms 33:9	For", verse: "He spoke, and it was; He commanded, and it stood.", cat: "Verses::Truth::God"
},
{
	id: 62, ref: "Romans 4:17	", verse: "As it is written, “I have appointed you a father of many nations”) in the sight of God whom he believed, who gives life to the dead and calls the things not being as being.", cat: "Verses::Truth::God"
},
{
	id: 63, ref: "Romans 1:20	For", verse: "the invisible things of Him, both His eternal power and divine characteristics, have been clearly seen since the creation of the world, being perceived by the things made, so that they would be without excuse;", cat: "Verses::Truth::God"
},
{
	id: 64, ref: "John 4:24	God", verse: "is Spirit, and those who worship Him must worship in spirit and truthfulness.", cat: "Verses::Truth::God Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 65, ref: "1 John 4:16", verse: "And we know and have believed the love which God has in us. God is love, and he who abides in love abides in God and God abides in him.", cat: "Verses::Truth::God Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 66, ref: "1 John 1:5", verse: "And this is the message which we have heard from Him and announce to you, that God is light and in Him is no darkness at all.", cat: "Verses::Truth::God"
},
{
	id: 67, ref: "Ephesians 4:18	Being", verse: "darkened in their understanding, alienated from the life of God because of the ignorance which is in them, because of the hardness of their heart;", cat: "Verses::Truth::God"
},
{
	id: 68, ref: "John 17:22	And", verse: "the glory which You have given Me I have given to them, that they may be one, even as We are one;", cat: "Verses::Truth::God"
},
{
	id: 69, ref: "1 Peter 1:16", verse: "Because it is written, “You shall be holy because I am holy.”", cat: "Verses::Truth::God Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 70, ref: "2 Timothy 4:8", verse: "Henceforth there is laid up for me the crown of righteousness, with which the Lord, the righteous Judge, will recompense me in that day, and not only me but also all those who have loved His appearing.", cat: "Verses::Truth::God Verses::Truth::The-Believers Verses::Life-Practices::Loving-the-Lord Verses::Life-Practices::Service"
},
{
	id: 71, ref: "Psalms 89:14	Righteousness", verse: "and justice are the foundation of Your throne; Lovingkindness and truth go before Your face.", cat: "Verses::Truth::God"
},
{
	id: 72, ref: "1 Corinthians 1:9", verse: "God is faithful, through whom you were called into the fellowship of His Son, Jesus Christ our Lord.", cat: "Verses::Truth::God"
},
{
	id: 73, ref: "Isaiah 6:8	Then", verse: "I heard the voice of the Lord, saying, Whom shall I send? Who will go for Us? And I said, Here am I; send me.", cat: "Verses::Truth::God"
},
{
	id: 74, ref: "Matthew 28:19	Go", verse: "therefore and disciple all the nations, baptizing them into the name of the Father and of the Son and of the Holy Spirit", cat: "Verses::Truth::God Verses::Truth::The-Spirit Verses::Life-Practices::Preaching-the-Gospel Verses::Service::God-Ordained-Way Verses::Other-Crucial-Matters::Baptism"
},
{
	id: 75, ref: "1 Corinthians 8:6", verse: "Yet to us there is one God, the Father, out from whom are all things, and we are unto Him; and one Lord, Jesus Christ, through whom are all things, and we are through Him.", cat: "Verses::Truth::God"
},
{
	id: 76, ref: "Hebrews 1:8	But", verse: "of the Son, “Your throne, O God, is forever and ever, and the scepter of uprightness is the scepter of Your kingdom.”", cat: "Verses::Truth::God"
},
{
	id: 77, ref: "Acts 5:3	But", verse: "Peter said, Ananias, why has Satan filled your heart to deceive the Holy Spirit and to put aside for yourself some of the proceeds of the land?", cat: "Verses::Truth::God Verses::Truth::The-Spirit"
},
{
	id: 78, ref: "Acts 5:4	While", verse: "it remained, was it not your own? And when it was sold, was it not under your authority? Why is it that you have contrived this thing in your heart? You have not lied to men but to God.", cat: "Verses::Truth::God Verses::Truth::The-Spirit"
},
{
	id: 79, ref: "Isaiah 9:6	For", verse: "a child is born to us, A Son is given to us; And the government Is upon His shoulder; And His name will be called Wonderful Counselor, Mighty God, Eternal Father, Prince of Peace.", cat: "Verses::Truth::Christ Verses::Truth::God Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 80, ref: "Hebrews 7:3	Being", verse: "without father, without mother, without genealogy; having neither beginning of days nor end of life, but likened to the Son of God, abides a priest perpetually.", cat: "Verses::Truth::God"
},
{
	id: 81, ref: "Micah 5:2	", verse: "But you, O Bethlehem Ephrathah, so little to be among the thousands of Judah, from you there will come forth to Me He who is to be Ruler in Israel; and His goings forth are from ancient times, from the days of eternity.)", cat: "Verses::Truth::God"
},
{
	id: 82, ref: "Hebrews 9:14	How", verse: "much more will the blood of Christ, who through the eternal Spirit offered Himself without blemish to God, purify our conscience from dead works to serve the living God?", cat: "Verses::Truth::Christ Verses::Truth::God Verses::Truth::The-Spirit"
},
{
	id: 83, ref: "Matthew 3:16	And", verse: "having been baptized, Jesus went up immediately from the water, and behold, the heavens were opened to Him, and He saw the Spirit of God descending like a dove and coming upon Him.", cat: "Verses::Truth::God"
},
{
	id: 84, ref: "Matthew 3:17	And", verse: "behold, a voice out of the heavens, saying, This is My Son, the Beloved, in whom I have found My delight.", cat: "Verses::Truth::God"
},
{
	id: 85, ref: "John 14:11	Believe", verse: "Me that I am in the Father and the Father is in Me; but if not, believe because of the works themselves.", cat: "Verses::Truth::God Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 86, ref: "John 14:10	Do", verse: "you not believe that I am in the Father and the Father is in Me? The words that I say to you I do not speak from Myself, but the Father who abides in Me does His works.", cat: "Verses::Truth::God Verses::Life-Practices::Prophesying Verses::Life-Practices::God-man-Living Verses::High-Peak-of-the-Divine-Revelation::Divine-and-Mystical-Realm Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 87, ref: "John 10:30	I", verse: "and the Father are one.", cat: "Verses::Truth::God"
},
{
	id: 88, ref: "John 8:29	And", verse: "He who sent Me is with Me; He has not left Me alone, for I always do the things that are pleasing to Him.", cat: "Verses::Truth::God"
},
{
	id: 89, ref: "John 14:26	But", verse: "the Comforter, the Holy Spirit, whom the Father will send in My name, He will teach you all things and remind you of all the things which I have said to you.", cat: "Verses::Truth::God Verses::Truth::The-Spirit"
},
{
	id: 90, ref: "John 15:26	But", verse: "when the Comforter comes, whom I will send to you from the Father, the Spirit of reality, who proceeds from the Father, He will testify concerning Me;", cat: "Verses::Truth::God Verses::Truth::The-Spirit"
},
{
	id: 91, ref: "John 16:15	All", verse: "that the Father has is Mine; for this reason I have said that He receives of Mine and will declare it to you.", cat: "Verses::Truth::God Verses::Truth::The-Spirit"
},
{
	id: 92, ref: "Ephesians 2:18	For", verse: "through Him we both have access in one Spirit unto the Father.", cat: "Verses::Truth::God"
},
{
	id: 93, ref: "2 Corinthians 13:14", verse: "The grace of the Lord Jesus Christ and the love of God and the fellowship of the Holy Spirit be with you all.", cat: "Verses::Truth::God Verses::Truth::The-Spirit"
},
{
	id: 94, ref: "Numbers 6:24	Jehovah", verse: "bless you and keep you;", cat: "Verses::Truth::God"
},
{
	id: 95, ref: "Numbers 6:25	Jehovah", verse: "make His face shine upon you and be gracious to you;", cat: "Verses::Truth::God"
},
{
	id: 96, ref: "Numbers 6:26	Jehovah", verse: "lift up His countenance upon you and give you peace.", cat: "Verses::Truth::God"
},
{
	id: 97, ref: "Ephesians 1:9	Making", verse: "known to us the mystery of His will according to His good pleasure, which He purposed in Himself,", cat: "Verses::Truth::Gods-Economy"
},
{
	id: 98, ref: "Ephesians 1:1	Pau", verse: ", an apostle of Christ Jesus through the will of God, to the saints who are in Ephesus and are faithful in Christ Jesus:", cat: "Verses::Truth::Gods-Economy"
},
{
	id: 99, ref: "Ephesians 3:11	According", verse: "to the eternal purpose which He made in Christ Jesus our Lord.", cat: "Verses::Truth::Gods-Economy Verses::Truth::The-Church"
},
{
	id: 100, ref: "Ephesians 1:10	Unto", verse: "the economy of the fullness of the times, to head up all things in Christ, the things in the heavens and the things on the earth, in Him;", cat: "Verses::Truth::Gods-Economy"
},
{
	id: 101, ref: "Ephesians 3:9	And", verse: "to enlighten all that they may see what the economy of the mystery is, which throughout the ages has been hidden in God, who created all things", cat: "Verses::Truth::Gods-Economy Verses::Truth::The-Church Verses::High-Peak-of-the-Divine-Revelation"
},
{
	id: 102, ref: "1 Timothy 1:4", verse: "Nor to give heed to myths and unending genealogies, which produce questionings rather than God’s economy, which is in faith.", cat: "Verses::Truth::Gods-Economy Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 103, ref: "1 John 3:2", verse: "Beloved, now we are children of God, and it has not yet been manifested what we will be. We know that if He is manifested, we will be like him because we will see Him even as He is.", cat: "Verses::Truth::Gods-Economy Verses::Truth::The-Believers Verses::High-Peak-of-the-Divine-Revelation::Deification Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 104, ref: "Genesis 1:26	And", verse: "God said, Let Us make man in Our image, according to Our likeness; and let them have dominion over the fish of the sea and over the birds of heaven and over the cattle and over all the earth and over every creeping thing that creeps upon the earth.", cat: "Verses::Truth::Gods-Economy Verses::Life-Practices::Gospel"
},
{
	id: 105, ref: "Genesis 2:9	And", verse: "out of the ground Jehovah God caused to grow every tree that is pleasant to the sight and good for food, as well as the tree of life in the middle of the garden and the tree of the knowledge of good and evil.", cat: "Verses::Truth::Gods-Economy Verses::Life-Practices::Gospel"
},
{
	id: 106, ref: "John 4:14	But", verse: "whoever drinks of the water that I will give him shall by no means thirst forever; but the water that I will give him will become in him a fountain of water springing up into eternal life.", cat: "Verses::Truth::Gods-Economy"
},
{
	id: 107, ref: "Romans 8:10	But", verse: "if Christ is in you, though the body is dead because of sin, the spirit is life because of righteousness.", cat: "Verses::Truth::Gods-Economy"
},
{
	id: 108, ref: "Romans 8:6	For", verse: "the mind set on the flesh is death, but the mind set on the spirit is life and peace.", cat: "Verses::Truth::Gods-Economy"
},
{
	id: 109, ref: "Romans 8:11	And", verse: "if the Spirit of the One who raised Jesus from the dead dwells in you, He who raised Christ from the dead will also give life to your mortal bodies through His Spirit who indwells you.", cat: "Verses::Truth::Gods-Economy Verses::Truth::The-Spirit"
},
{
	id: 110, ref: "1 Corinthians 6:17", verse: "But he who is joined to the Lord is one spirit.", cat: "Verses::Truth::Gods-Economy Verses::Truth::The-Spirit Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit"
},
{
	id: 111, ref: "1 John 4:13", verse: "In this we know that we abide in Him and He in us, that He has given to us of His Spirit.", cat: "Verses::Truth::Gods-Economy"
},
{
	id: 112, ref: "Ephesians 3:17	That", verse: "Christ may make His home in your hearts through faith, that you, being rooted and grounded in love,", cat: "Verses::Truth::Gods-Economy"
},
{
	id: 113, ref: "Ephesians 3:18	May", verse: "be full of strength to apprehend with all the saints what the breadth and length and height and depth are", cat: "Verses::Truth::Gods-Economy"
},
{
	id: 114, ref: "Ephesians 3:19	And", verse: "to know the knowledge-surpassing love of Christ, that you may be filled unto all the fullness of God.", cat: "Verses::Truth::Gods-Economy"
},
{
	id: 115, ref: "Colossians 2:10	And", verse: "you have been made full in Him, who is the Head of all rule and authority.", cat: "Verses::Truth::Gods-Economy"
},
{
	id: 116, ref: "Ephesians 3:2	If", verse: "indeed you have heard of the stewardship of the grace of God which was given to me for you,", cat: "Verses::Truth::Gods-Economy"
},
{
	id: 117, ref: "Ephesians 3:7	Of", verse: "which I became a minister according to the gift of the grace of God which was given to me according to the operation of His power.", cat: "Verses::Truth::Gods-Economy"
},
{
	id: 118, ref: "Ephesians 3:8	To", verse: "me, less than the least of all saints, was this grace given to announce to the Gentiles the unsearchable riches of Christ as the gospel", cat: "Verses::Truth::Gods-Economy Verses::Service::God-Ordained-Way"
},
{
	id: 119, ref: "Colossians 1:25	Of", verse: "which I became a minister according to the stewardship of God, which was given to me for you, to complete the word of God,", cat: "Verses::Truth::Gods-Economy Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 120, ref: "Romans 9:5	Whose", verse: "are the fathers, and out of whom, as regards what is according to flesh, is the Christ, who is God over all, blessed forever. Amen.", cat: "Verses::Truth::Christ"
},
{
	id: 121, ref: "Colossians 2:9	For", verse: "in Him dwells all the fullness of the Godhead bodily", cat: "Verses::Truth::Christ Verses::Truth::The-Spirit"
},
{
	id: 122, ref: "Colossians 1:19	For", verse: "in Him all the fullness was pleased to dwell", cat: "Verses::Truth::Christ"
},
{
	id: 123, ref: "John 1:16	For", verse: "of His fullness we have all received, and grace upon grace.", cat: "Verses::Truth::Christ"
},
{
	id: 124, ref: "Hebrews 1:3	Wh", verse: ", being the effulgence of His glory and the impress of His substance and upholding and bearing all things by the word of His power, having made purification of sins, sat down on the right hand of the Majesty on high;", cat: "Verses::Truth::Christ"
},
{
	id: 125, ref: "Colossians 1:15	Who", verse: "is the image of the invisible God, the Firstborn of all creation,", cat: "Verses::Truth::Christ"
},
{
	id: 126, ref: "Colossians 1:16	Because", verse: "in Him all things were created, in the heavens and on the earth, the visible and the invisible, whether thrones or lordships or rulers or authorities; all things have been created through Him and unto Him.", cat: "Verses::Truth::Christ"
},
{
	id: 127, ref: "Colossians 1:17	And", verse: "He is before all things, and all things cohere in Him;", cat: "Verses::Truth::Christ"
},
{
	id: 128, ref: "Colossians 1:18	And", verse: "He is the Head of the Body, the church; He is the beginning, the Firstborn from the dead, that He Himself might have the first place in all things;", cat: "Verses::Truth::Body-of-Christ Verses::Truth::Christ"
},
{
	id: 129, ref: "John 20:31	But", verse: "these have been written that you may believe that Jesus is the Christ, the Son of God, and that believing, you may have life in His name.", cat: "Verses::Truth::Christ"
},
{
	id: 130, ref: "1 Timothy 3:16", verse: "And confessedly, great is the mystery of godliness: He who was manifested in the flesh, Justified in the Spirit, Seen by angels, Preached among the nations, Believed on in the world, Taken up in glory.", cat: "Verses::Truth::Christ Verses::Truth::The-Church"
},
{
	id: 131, ref: "Romans 8:3	For", verse: "that which the law could not do, in that it was weak through the flesh, God, sending His own Son in the likeness of the flesh of sin and concerning sin, condemned sin in the flesh", cat: "Verses::Truth::Christ"
},
{
	id: 132, ref: "1 Timothy 2:5", verse: "For there is one God and one Mediator of God and men, the man Christ Jesus", cat: "Verses::Truth::Christ"
},
{
	id: 133, ref: "Genesis 3:15	And", verse: "I will put enmity Between you and the woman And between your seed and her seed; He will bruise you on the head, But you will bruise him on the heel.", cat: "Verses::Truth::Christ Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 134, ref: "Galatians 3:16	But", verse: "to Abraham were the promises spoken and to his seed. He does not say, And to the seeds, as concerning many, but as concerning one: “and to your seed,” who is Christ.", cat: "Verses::Truth::Christ"
},
{
	id: 135, ref: "Romans 1:3	Concerning", verse: "His Son, who came out of the seed of David according to the flesh", cat: "Verses::Truth::Christ Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Inclusion"
},
{
	id: 136, ref: "Romans 1:4	Who", verse: "was designated the Son of God in power according to the Spirit of holiness out of the resurrection of the dead, Jesus Christ our Lord", cat: "Verses::Truth::Christ Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Inclusion"
},
{
	id: 137, ref: "Matthew 1:21	And", verse: "she will bear a son, and you shall call His name Jesus, for it is He who will save His people from their sins.", cat: "Verses::Truth::Christ"
},
{
	id: 138, ref: "Matthew 1:23	", verse: "Behold, the virgin shall be with child and shall bear a son, and they shall call His name Emmanuel'' (which is translated, God with us).", cat: "Verses::Truth::Christ Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ"
},
{
	id: 139, ref: "Hebrews 2:17	Hence", verse: "He should have been made like His brothers in all things that He might become a merciful and faithful High Priest in the things pertaining to God, to make propitiation for the sins of the people.", cat: "Verses::Truth::Christ"
},
{
	id: 140, ref: "Hebrews 4:15	For", verse: "we do not have a High Priest who cannot be touched with the feeling of our weaknesses, but One who has been tempted in all respects like us, yet without sin.", cat: "Verses::Truth::Christ"
},
{
	id: 141, ref: "John 1:18	No", verse: "one has ever seen God; the only begotten Son, who is in the bosom of the Father, He has declared Him.", cat: "Verses::Truth::Christ"
},
{
	id: 142, ref: "Philippians 2:6	Wh", verse: ", existing in the form of God, did not consider being equal with God a treasure to be grasped", cat: "Verses::Truth::Christ Verses::Other-Crucial-Matters::Authority-and-Submission"
},
{
	id: 143, ref: "Philippians 2:7	But", verse: "emptied Himself, taking the form of a slave, becoming in the likeness of men", cat: "Verses::Truth::Christ Verses::Other-Crucial-Matters::Authority-and-Submission"
},
{
	id: 144, ref: "Philippians 2:8	And", verse: "being found in fashion as a man, He humbled Himself, becoming obedient even unto death, and that the death of a cross.", cat: "Verses::Truth::Christ Verses::Other-Crucial-Matters::Authority-and-Submission"
},
{
	id: 145, ref: "Hebrews 2:14	Since", verse: "therefore the children have shared in blood and flesh, He also Himself in like manner partook of the same, that through death He might destroy him who has the might of death, that is, the devil", cat: "Verses::Truth::Christ Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 146, ref: "Acts 2:23	This", verse: "man, delivered up by the determined counsel and foreknowledge of God, you, through the hand of lawless men, nailed to a cross and killed", cat: "Verses::Truth::Christ"
},
{
	id: 147, ref: "1 Peter 2:24", verse: "Who Himself bore up our sins in His body on the tree, in order that we, having died to sins, might live to righteousness; by whose bruise you were healed.", cat: "Verses::Truth::Christ"
},
{
	id: 148, ref: "Isaiah 53:5	But", verse: "He was wounded because of our transgressions; He was crushed because of our iniquities; The chastening for our peace was upon Him, And by His stripes we have been healed.", cat: "Verses::Truth::Christ"
},
{
	id: 149, ref: "Isaiah 53:6	We", verse: "all like sheep have gone astray; Each of us has turned to his own way, And Jehovah has caused the iniquity of us all To fall on Him.", cat: "Verses::Truth::Christ"
},
{
	id: 150, ref: "John 1:29	The", verse: "next day he saw Jesus coming to him and said, Behold, the Lamb of God, who takes away the sin of the world!", cat: "Verses::Truth::Christ Verses::Life-Practices::Gospel"
},
{
	id: 151, ref: "1 Corinthians 5:7", verse: "Purge out the old leaven that you may be a new lump, even as you are unleavened; for our Passover, Christ, also has been sacrificed.", cat: "Verses::Truth::Christ"
},
{
	id: 152, ref: "John 3:14	And", verse: "as Moses lifted up the serpent in the wilderness, so must the Son of Man be lifted up", cat: "Verses::Truth::Christ Verses::Life-Practices::Gospel"
},
{
	id: 153, ref: "Romans 6:6	Knowing", verse: "this, that our old man has been crucified with Him in order that the body of sin might be annulled, that we should no longer serve sin as slaves", cat: "Verses::Truth::Christ Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 154, ref: "Galatians 5:24	But", verse: "they who are of Christ Jesus have crucified the flesh with its passions and its lusts.", cat: "Verses::Truth::Christ"
},
{
	id: 155, ref: "Colossians 1:20	And", verse: "through Him to reconcile all things to Himself, having made peace through the blood of His cross—through Him, whether the things on the earth or the things in the heavens.", cat: "Verses::Truth::Christ Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 156, ref: "Ephesians 2:15	Abolishing", verse: "in His flesh the law of the commandments in ordinances, that He might create the two in Himself into one new man, so making peace", cat: "Verses::Truth::Body-of-Christ Verses::Truth::Christ Verses::Truth::The-Church Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 157, ref: "John 12:24	Trul", verse: ", truly, I say to you, Unless the grain of wheat falls into the ground and dies, it abides alone; but if it dies, it bears much fruit.", cat: "Verses::Truth::Christ Verses::Life-Practices::Gospel Verses::High-Peak-of-the-Divine-Revelation::Deification Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 158, ref: "John 19:34	But", verse: "one of the soldiers pierced His side with a spear, and immediately there came out blood and water.", cat: "Verses::Truth::Christ Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life"
},
{
	id: 159, ref: "2 Timothy 1:10", verse: "But now has been manifested through the appearing of our Savior Christ Jesus, who nullified death and brought life and incorruption to light through the gospel", cat: "Verses::Truth::Christ"
},
{
	id: 160, ref: "Acts 3:15	And", verse: "the Author of life you killed, whom God has raised from the dead, of which we are witnesses.", cat: "Verses::Truth::Christ"
},
{
	id: 161, ref: "Acts 13:33	That", verse: "God has fully fulfilled this promise to us their children in raising up Jesus, as it is also written in the second Psalm, \"You are My Son; this day have I begotten You.''", cat: "Verses::Truth::Christ Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Inclusion"
},
{
	id: 162, ref: "1 Corinthians 15:45", verse: "So also it is written, \"The first man, Adam, became a living soul\"; the last Adam became a life-giving Spirit.", cat: "Verses::Truth::Christ Verses::Truth::The-Spirit Verses::Life-Practices::Gospel Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Inclusion"
},
{
	id: 163, ref: "1 Peter 1:3", verse: "Blessed be the God and Father of our Lord Jesus Christ, who according to His great mercy has regenerated us unto a living hope through the resurrection of Jesus Christ from the dead", cat: "Verses::Truth::Christ Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Inclusion Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 164, ref: "Revelation 1:5	And", verse: "from Jesus Christ, the faithful Witness, the Firstborn of the dead, and the Ruler of the kings of the earth. To Him who loves us and has released us from our sins by His blood", cat: "Verses::Truth::Christ"
},
{
	id: 165, ref: "Ephesians 1:20	Which", verse: "He caused to operate in Christ in raising Him from the dead and seating Him at His right hand in the heavenlies", cat: "Verses::Truth::Christ"
},
{
	id: 166, ref: "Ephesians 1:21	Far", verse: "above all rule and authority and power and lordship and every name that is named not only in this age but also in that which is to come", cat: "Verses::Truth::Christ"
},
{
	id: 167, ref: "Ephesians 1:22	And", verse: "He subjected all things under His feet and gave Him to be Head over all things to the church", cat: "Verses::Truth::Christ Verses::Truth::The-Church Verses::Other-Crucial-Matters::Authority-and-Submission"
},
{
	id: 168, ref: "Acts 2:36	Therefore", verse: "let all the house of Israel know assuredly that God has made Him both Lord and Christ, this Jesus whom you have crucified.", cat: "Verses::Truth::Christ"
},
{
	id: 169, ref: "Revelation 5:5	And", verse: "one of the elders said to me, Do not weep; behold, the Lion of the tribe of Judah, the Root of David, has overcome so that He may open the scroll and its seven seals.", cat: "Verses::Truth::Christ"
},
{
	id: 170, ref: "Hebrews 12:24	And", verse: "to Jesus, the Mediator of a new covenant; and to the blood of sprinkling, which speaks something better than that of Abel.", cat: "Verses::Truth::Christ"
},
{
	id: 171, ref: "Hebrews 7:22	By", verse: "so much Jesus has also become the surety of a better covenant.", cat: "Verses::Truth::Christ"
},
{
	id: 172, ref: "Ephesians 4:8	Therefore", verse: "the Scripture says, \"Having ascended to the height, He led captive those taken captive and gave gifts to men.\"", cat: "Verses::Truth::Christ"
},
{
	id: 173, ref: "1 Peter 2:4", verse: "Coming to Him, a living stone, rejected by men but with God chosen and precious", cat: "Verses::Truth::Christ"
},
{
	id: 174, ref: "Isaiah 28:16	Therefore", verse: "thus says The Lord Jehovah: Indeed I lay a stone in Zion as a foundation, A tested stone, A precious cornerstone as a foundation firmly established; He who believes will not hasten away.", cat: "Verses::Truth::Christ"
},
{
	id: 175, ref: "Isaiah 8:14	Then", verse: "He will become a sanctuary, yet a stone to strike against And a rock of stumbling To both houses of Israel, A trap and a snare to the inhabitants of Jerusalem.", cat: "Verses::Truth::Christ"
},
{
	id: 176, ref: "Daniel 2:35b	And", verse: "the stone that struck the image became a great mountain and filled the whole earth.", cat: "Verses::Truth::Christ"
},
{
	id: 177, ref: "Hebrews 6:20	Where", verse: "the Forerunner, Jesus, has entered for us, having become forever a High Priest according to the order of Melchisedec.", cat: "Verses::Truth::Christ"
},
{
	id: 178, ref: "Hebrews 7:25	Hence", verse: "also He is able to save to the uttermost those who come forward to God through Him, since He lives always to intercede for them.", cat: "Verses::Truth::Christ Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ"
},
{
	id: 179, ref: "Revelation 1:13	And", verse: "in the midst of the lampstands One like the Son of Man, clothed with a garment reaching to the feet, and girded about at the breasts with a golden girdle.", cat: "Verses::Truth::Christ"
},
{
	id: 180, ref: "Matthew 17:5	While", verse: "he was still speaking, behold, a bright cloud overshadowed them, and behold, a voice out of the cloud, saying, This is My Son, the Beloved, in whom I have found My delight. Hear Him!", cat: "Verses::Truth::Christ"
},
{
	id: 181, ref: "Colossians 1:12	Giving", verse: "thanks to the Father, who has qualified you for a share of the allotted portion of the saints in the light", cat: "Verses::Truth::Christ"
},
{
	id: 182, ref: "1 Corinthians 10:4", verse: "And all drank the same spiritual drink; for they drank of a spiritual rock which followed them, and the rock was Christ.", cat: "Verses::Truth::Christ"
},
{
	id: 183, ref: "Colossians 2:16	Let", verse: "no one therefore judge you in eating and in drinking or in respect of a feast or of a new moon or of the Sabbath,", cat: "Verses::Truth::Christ"
},
{
	id: 184, ref: "Colossians 2:17	Which", verse: "are a shadow of the things to come, but the body is of Christ.", cat: "Verses::Truth::Christ"
},
{
	id: 185, ref: "1 Corinthians 1:24", verse: "But to those who are called, both Jews and Greeks, Christ the power of God and the wisdom of God.", cat: "Verses::Truth::Christ"
},
{
	id: 186, ref: "1 Corinthians 1:30", verse: "But of Him you are in Christ Jesus, who became wisdom to us from God: both righteousness and sanctification and redemption", cat: "Verses::Truth::Christ Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 187, ref: "John 7:38	He", verse: "who believes into Me, as the Scripture said, out of his innermost being shall flow rivers of living water.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 188, ref: "John 7:39	But", verse: "this He said concerning the Spirit, whom those who believed into Him were about to receive; for the Spirit was not yet, because Jesus had not yet been glorified.", cat: "Verses::Truth::The-Spirit Verses::High-Peak-of-the-Divine-Revelation::Divine-and-Mystical-Realm"
},
{
	id: 189, ref: "Revelation 22:17	And", verse: "the Spirit and the bride say, Come! And let him who hears say, Come! And let him who is thirsty come; let him who wills take the water of life freely.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 190, ref: "Galatians 3:14	In", verse: "order that the blessing of Abraham might come to the Gentiles in Christ Jesus, that we might receive the promise of the Spirit through faith.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 191, ref: "John 14:17	Even", verse: "the Spirit of reality, whom the world cannot receive, because it does not behold Him or know Him; but you know Him, because He abides with you and shall be in you.", cat: "Verses::Truth::The-Spirit Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 192, ref: "John 14:20	In", verse: "that day you will know that I am in My Father, and you in Me, and I in you.", cat: "Verses::Truth::The-Spirit Verses::High-Peak-of-the-Divine-Revelation::Divine-and-Mystical-Realm Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 193, ref: "Matthew 1:18	Now", verse: "the origin of Jesus Christ was in this way: His mother, Mary, after she had been engaged to Joseph, before they came together, was found to be with child of the Holy Spirit.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 194, ref: "Luke 3:22	And", verse: "the Holy Spirit descended in bodily form as a dove upon Him. And a voice came out of heaven: You are My Son, the Beloved; in You I have found My delight.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 195, ref: "John 20:22	And", verse: "when He had said this, He breathed into them and said to them, Receive the Holy Spirit.", cat: "Verses::Truth::The-Spirit Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Inclusion"
},
{
	id: 196, ref: "Galatians 5:25	If", verse: "we live by the Spirit, let us also walk by the Spirit.", cat: "Verses::Truth::The-Spirit Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit"
},
{
	id: 197, ref: "Acts 1:8	But", verse: "you shall receive power when the Holy Spirit comes upon you, and you shall be My witnesses both in Jerusalem and in all Judea and Samaria and unto the uttermost part of the earth.", cat: "Verses::Truth::The-Spirit Verses::Life-Practices::Preaching-the-Gospel"
},
{
	id: 198, ref: "Zechariah 4:6	And", verse: "he answered and spoke to me, saying, This is the word of Jehovah to Zerubbabel, saying, Not by might nor by power, but by My Spirit, says Jehovah of hosts.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 199, ref: "Genesis 1:2	But", verse: "the earth became waste and emptiness, and darkness was on the surface of the deep, and the Spirit of God was brooding upon the surface of the waters.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 200, ref: "1 Corinthians 2:11", verse: "For who among men knows the things of man, except the spirit of man which is in him? In the same way, the things of God also no one has known except the Spirit of God.", cat: "Verses::Truth::The-Spirit Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 201, ref: "Ezekiel 11:5	Then", verse: "the Spirit of Jehovah fell upon me and said to me, Say, Thus says Jehovah, You speak in this way, O house of Israel, for I know the things that come up in your spirit.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 202, ref: "Matthew 1:20	But", verse: "while he pondered these things, behold, an angel of the Lord appeared to him in a dream, saying, Joseph, son of David, do not be afraid to take Mary your wife, for that which has been begotten in her is of the Holy Spirit.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 203, ref: "Romans 8:2	For", verse: "the law of the Spirit of life has freed me in Christ Jesus from the law of sin and of death.", cat: "Verses::Truth::The-Spirit Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 204, ref: "John 16:13	But", verse: "when He, the Spirit of reality, comes, He will guide you into all the reality; for He will not speak from Himself, but what He hears He will speak; and He will declare to you the things that are coming.", cat: "Verses::Truth::The-Spirit Verses::High-Peak-of-the-Divine-Revelation::Divine-and-Mystical-Realm"
},
{
	id: 205, ref: "Acts 16:7	And", verse: "when they had come to Mysia, they tried to go into Bithynia, yet the Spirit of Jesus did not allow them.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 206, ref: "Romans 8:9	But", verse: "you are not in the flesh, but in the spirit, if indeed the Spirit of God dwells in you. Yet if anyone does not have the Spirit of Christ, he is not of Him.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 207, ref: "Philippians 1:19	For", verse: "I know that for me this will turn out to salvation through your petition and the bountiful supply of the Spirit of Jesus Christ", cat: "Verses::Truth::The-Spirit"
},
{
	id: 208, ref: "Philippians 1:20	According", verse: "to my earnest expectation and hope that in nothing I will be put to shame, but with all boldness, as always, even now Christ will be magnified in my body, whether through life or through death.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 209, ref: "Philippians 1:21	For", verse: "to me, to live is Christ and to die is gain.", cat: "Verses::Truth::The-Spirit Verses::Life-Practices::God-man-Living Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 210, ref: "2 Corinthians 3:17", verse: "And the Lord is the Spirit; and where the Spirit of the Lord is, there is freedom.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 211, ref: "2 Corinthians 3:18", verse: "But we all with unveiled face, beholding and reflecting like a mirror the glory of the Lord, are being transformed into the same image from glory to glory, even as from the Lord Spirit.", cat: "Verses::Truth::The-Spirit Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation Verses::Other-Crucial-Matters::New-Covenant-Ministers"
},
{
	id: 212, ref: "1 John 2:27", verse: "And as for you, the anointing which you have received from Him abides in you, and you have no need that anyone teach you; but as His anointing teaches you concerning all things and is true and is not a lie, and even as it has taught you, abide in Him.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 213, ref: "Revelation 1:4	John", verse: "to the seven churches which are in Asia: Grace to you and peace from Him who is and who was and who is coming, and from the seven Spirits who are before His throne", cat: "Verses::Truth::The-Spirit Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Intensification"
},
{
	id: 214, ref: "John 16:8	And", verse: "when He comes, He will convict the world concerning sin and concerning righteousness and concerning judgment", cat: "Verses::Truth::The-Spirit"
},
{
	id: 215, ref: "John 3:6	That", verse: "which is born of the flesh is flesh, and that which is born of the Spirit is spirit.", cat: "Verses::Truth::The-Spirit Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 216, ref: "Romans 8:16	The", verse: "Spirit Himself witnesses with our spirit that we are children of God.", cat: "Verses::Truth::The-Believers Verses::Truth::The-Spirit"
},
{
	id: 217, ref: "Romans 8:15	For", verse: "you have not received a spirit of slavery bringing you into fear again, but you have received a spirit of sonship in which we cry, Abba, Father!", cat: "Verses::Truth::The-Spirit"
},
{
	id: 218, ref: "Romans 8:14	For", verse: "as many as are led by the Spirit of God, these are sons of God.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 219, ref: "1 Peter 1:2", verse: "Chosen according to the foreknowledge of God the Father in the sanctification of the Spirit unto the obedience and sprinkling of the blood of Jesus Christ: Grace to you and peace be multiplied.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 220, ref: "1 Corinthians 6:11", verse: "And these things were some of you; but you were washed, but you were sanctified, but you were justified in the name of the Lord Jesus Christ and in the Spirit of our God.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 221, ref: "Romans 6:19	I", verse: "speak in human terms because of the weakness of your flesh. For just as you presented your members as slaves to uncleanness and lawlessness unto lawlessness, so now present your members as slaves to righteousness unto sanctification.", cat: "Verses::Truth::The-Spirit Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 222, ref: "1 Corinthians 2:12", verse: "But we have received not the spirit of the world but the Spirit which is from God, that we may know the things which have been graciously given to us by God", cat: "Verses::Truth::The-Spirit"
},
{
	id: 223, ref: "Romans 8:13	For", verse: "if you live according to the flesh, you must die, but if by the Spirit you put to death the practices of the body, you will live.", cat: "Verses::Truth::The-Spirit"
},
{
	id: 224, ref: "Ephesians 3:16	That", verse: "He would grant you, according to the riches of His glory, to be strengthened with power through His Spirit into the inner man", cat: "Verses::Truth::The-Spirit"
},
{
	id: 225, ref: "Romans 8:26	Moreove", verse: ", in like manner the Spirit also joins in to help us in our weakness, for we do not know for what we should pray as is fitting, but the Spirit Himself intercedes for us with groanings which cannot be uttered.", cat: "Verses::Truth::The-Spirit Verses::Life-Practices::Prayer"
},
{
	id: 226, ref: "Ephesians 1:14	Who", verse: "is the pledge of our inheritance unto the redemption of the acquired possession, to the praise of His glory.", cat: "Verses::Truth::The-Believers Verses::Truth::The-Spirit"
},
{
	id: 227, ref: "John 3:16	For", verse: "God so loved the world that He gave His only begotten Son, that every one who believes into Him would not perish, but would have eternal life.", cat: "Verses::Truth::The-Believers Verses::Life-Practices::Gospel"
},
{
	id: 228, ref: "Mark 16:16	He", verse: "who believes and is baptized shall be saved, but he who does not believe shall be condemned.", cat: "Verses::Truth::The-Believers Verses::Life-Practices::Gospel Verses::Other-Crucial-Matters::Baptism"
},
{
	id: 229, ref: "Acts 16:31	And", verse: "they said, Believe on the Lord Jesus, and you shall be saved, you and your household.", cat: "Verses::Truth::The-Believers"
},
{
	id: 230, ref: "Ephesians 2:5	Even", verse: "when we were dead in offenses, made us alive together with Christ (by grace you have been saved)", cat: "Verses::Truth::The-Believers Verses::Life-Practices::Gospel"
},
{
	id: 231, ref: "Ephesians 2:8	For", verse: "by grace you have been saved through faith, and this not of yourselves; it is the gift of God", cat: "Verses::Truth::The-Believers"
},
{
	id: 232, ref: "Ephesians 1:4	Even", verse: "as He chose us in Him before the foundation of the world to be holy and without blemish before Him in love", cat: "Verses::Truth::The-Believers"
},
{
	id: 233, ref: "Ephesians 1:5	Predestinating", verse: "us unto sonship through Jesus Christ to Himself, according to the good pleasure of His will", cat: "Verses::Truth::The-Believers Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 234, ref: "Ephesians 1:3	Blessed", verse: "be the God and Father of our Lord Jesus Christ, who has blessed us with every spiritual blessing in the heavenlies in Christ.", cat: "Verses::Truth::The-Believers"
},
{
	id: 235, ref: "Ephesians 1:11	In", verse: "whom also we were designated as an inheritance, having been predestinated according to the purpose of the One who works all things according to the counsel of His will.", cat: "Verses::Truth::The-Believers"
},
{
	id: 236, ref: "Jeremiah 2:13	For", verse: "my people have comitted two evils: they have forsaken Me, the fountain of living waters, to hew out for themselves cisterns, broken cisterns, which hold no water.", cat: "Verses::Truth::The-Believers"
},
{
	id: 237, ref: "John 16:9	Concerning", verse: "sin, because they do not believe into Me.", cat: "Verses::Truth::The-Believers"
},
{
	id: 238, ref: "Romans 3:23	For", verse: "all have sinned and fall short of the glory of God.", cat: "Verses::Truth::The-Believers Verses::Life-Practices::Gospel"
},
{
	id: 239, ref: "Romans 5:12	Therefore", verse: "just as through one man sin entered into the world, and through sin, death; and thus death passed on to all men because all have sinned.", cat: "Verses::Truth::The-Believers"
},
{
	id: 240, ref: "Romans 6:23	For", verse: "the wages of sin is death, but the gift of God is eternal life in Christ Jesus our Lord.", cat: "Verses::Truth::The-Believers Verses::Life-Practices::Gospel"
},
{
	id: 241, ref: "2 Corinthians 4:6", verse: "Because the God who said, Out of darkness light shall shine, is the One who shined in our hearts to illuminate the knowledge of the glory of God in the face of Jesus Christ.", cat: "Verses::Truth::The-Believers"
},
{
	id: 242, ref: "Ephesians 2:12	That", verse: "you were at that time apart from Christ, alienated from the commonwealth of Israel, and strangers to the covenants of the promise, having no hope and without God in the world.", cat: "Verses::Truth::The-Believers"
},
{
	id: 243, ref: "Ephesians 2:13	But", verse: "now in Christ Jesus you who were once far off have become near in the blood of Christ.", cat: "Verses::Truth::The-Believers"
},
{
	id: 244, ref: "Ephesians 2:17	And", verse: "coming, He announced peace as the gospel to you who were far off, and peace to those who were near.", cat: "Verses::Truth::The-Believers"
},
{
	id: 245, ref: "Acts 10:43	To", verse: "this One all the prophets testify that through His name everyone who believes into Him will receive forgiveness of sins.", cat: "Verses::Truth::The-Believers"
},
{
	id: 246, ref: "Isaiah 1:18	Come", verse: "now and let us reason together, says Jehovah. Though your sins are like scarlet, they will be white as snow; though they are red as crimson, they will be like wool.", cat: "Verses::Truth::The-Believers"
},
{
	id: 247, ref: "John 1:12	But", verse: "as many as received Him, to them He gave the authority to become children of God, to those who believe into His name.", cat: "Verses::Truth::The-Believers Verses::Life-Practices::Gospel Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 248, ref: "Galatians 3:24	So", verse: "then the law has become our child-conductor unto Christ that we might be justified out of faith.", cat: "Verses::Truth::The-Believers"
},
{
	id: 249, ref: "Galatians 3:5	He", verse: "therefore who bountifully supplies to you the Spirit and does works of power among you, does He do it out of the works of the law or out of the hearing of faith?", cat: "Verses::Truth::The-Believers"
},
{
	id: 250, ref: "Ephesians 2:6	And", verse: "raised us up together with Him and seated us together with Him in the heavenlies in Christ Jesus.", cat: "Verses::Truth::The-Believers"
},
{
	id: 251, ref: "John 5:24	Trul", verse: ", truly, I say to you, He who hears My word and believes Him who sent Me has eternal life, and does not come into judgement but has passed out of death into life.", cat: "Verses::Truth::The-Believers"
},
{
	id: 252, ref: "1 John 5:12", verse: "He who has the Son has the life; he who does not have the Son of God does not have the life.", cat: "Verses::Truth::The-Believers"
},
{
	id: 253, ref: "1 John 5:13", verse: "I have written these things to you that you may know that you have eternal life, to you who believe into the name of the Son of God.", cat: "Verses::Truth::The-Believers"
},
{
	id: 254, ref: "1 John 3:14", verse: "We know that we have passed out of death into life because we love the brothers. He who does not love abides in death.", cat: "Verses::Truth::The-Believers"
},
{
	id: 255, ref: "Psalms 51:12	Restore", verse: "to me the gladness of Your salvation, and sustain me with a willing spirit.", cat: "Verses::Truth::The-Believers"
},
{
	id: 256, ref: "Isaiah 12:2	God", verse: "is now my salvation; I will trust and not dread; for Jah Jehovah is my strength and song, and He has become my salvation.", cat: "Verses::Truth::The-Believers Verses::Life-Practices::Singing-and-Praising"
},
{
	id: 257, ref: "Galatians 4:6	And", verse: "because you are sons, God has sent forth the Spirit of His Son into our hearts, crying, Abba, Father!", cat: "Verses::Truth::The-Believers"
},
{
	id: 258, ref: "Galatians 4:7	So", verse: "then you are no longer a slave but a son; and if a son, an heir also through God.", cat: "Verses::Truth::The-Believers"
},
{
	id: 259, ref: "1 John 5:4", verse: "For everything that has been begotten of God overcomes the world; and this is the victory which has overcome the world—our faith.", cat: "Verses::Truth::The-Believers"
},
{
	id: 260, ref: "Ephesians 4:6	One", verse: "God and Father of all, who is over all and through all and in all.", cat: "Verses::Truth::Body-of-Christ Verses::Truth::The-Believers"
},
{
	id: 261, ref: "Colossians 1:27	To", verse: "whom God willed to make known what are the riches of the glory of this mystery among the Gentiles, which is Christ in you, the hope of glory.", cat: "Verses::Truth::The-Believers Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 262, ref: "2 Timothy 1:14", verse: "Guard the good deposit through the Holy Spirit who dwells in us.", cat: "Verses::Truth::The-Believers"
},
{
	id: 263, ref: "Philippians 2:15	That", verse: "you may be blameless and guileless, children of God without blemish in the midst of a crooked and perverted generation, among whom you shine as luminaries in the world.", cat: "Verses::Truth::The-Believers"
},
{
	id: 264, ref: "Matthew 5:14	You", verse: "are the light of the world. It is impossible for a city situated upon a mountain to be hidden.", cat: "Verses::Truth::The-Believers"
},
{
	id: 265, ref: "Matthew 5:16	In", verse: "the same way, let your light shine before men, so that they may see your good works and glorify your Father who is in the heavens.", cat: "Verses::Truth::The-Believers"
},
{
	id: 266, ref: "Matthew 5:13	You", verse: "are the salt of the earth. But if the salt has become tasteless, with what shall it be salted? It is no longer good for anything except to be cast out and trampled underfoot by men.", cat: "Verses::Truth::The-Believers"
},
{
	id: 267, ref: "2 Timothy 1:9", verse: "Who has saved us and called us with a holy calling, not according to our works but according to His own purpose and grace, which was given to us in Christ Jesus before the times of the ages.", cat: "Verses::Truth::The-Believers"
},
{
	id: 268, ref: "Philippians 3:20	For", verse: "our commonwealth exists in the heavens, from which also we eagerly await a Saviour, the Lord Jesus Christ.", cat: "Verses::Truth::The-Believers"
},
{
	id: 269, ref: "Matthew 24:42	Watch", verse: "therefore, for you do not know on what day your Lord comes.", cat: "Verses::Truth::The-Believers"
},
{
	id: 270, ref: "Titus 2:13	Awaiting", verse: "the blessed hope, even the appearing of the glory of our great God and Savior, Jesus Christ.", cat: "Verses::Truth::The-Believers"
},
{
	id: 271, ref: "2 Peter 3:8", verse: "But do not let this one thing escape you, beloved, that with the Lord one day is like a thousand years and a thousand years like one day.", cat: "Verses::Truth::The-Believers"
},
{
	id: 272, ref: "2 Peter 3:9", verse: "The Lord does not delay regarding the promise, as some count delay, but is long-suffering toward you all, not intending that any perish but that all advance to repentance.", cat: "Verses::Truth::The-Believers"
},
{
	id: 273, ref: "1 Corinthians 15:52", verse: "In a moment, in the twinkling of an eye, at the last trumpet; for the trumpet will sound, and the dead will be raised incorruptible, and we will be changed.", cat: "Verses::Truth::The-Believers"
},
{
	id: 274, ref: "2 Corinthians 5:10", verse: "For we must all be manifested before the judgement seat of Christ, that each one may receive the things done through the body according to what he has practiced, whether good or bad.", cat: "Verses::Truth::The-Believers"
},
{
	id: 275, ref: "Revelation 14:4	These", verse: "are they who have not been defiled with women, for they are virgins. These are they who follow the Lamb wherever He may go. These were purchased from among men as firstfruits to God and to the Lamb.", cat: "Verses::Truth::The-Believers"
},
{
	id: 276, ref: "Revelation 12:5	And", verse: "she brought forth a son, a man-child, who is to shepherd all the nations with an iron rod; and her child was caught up to God and to His throne.", cat: "Verses::Truth::The-Believers"
},
{
	id: 277, ref: "Revelation 2:10	Do", verse: "not fear the things that you are about to suffer. Behold, the devil is about to cast some of you into prison that you may be tried, and you will have tribulation for ten days. Be faithful unto death, and I will give you the crown of life.", cat: "Verses::Truth::The-Believers"
},
{
	id: 278, ref: "Revelation 3:8	I", verse: "know your works; behold, I have put before you an opened door which no one can shut, because you have a little power and have kept My word and have not denied My name.", cat: "Verses::Truth::The-Believers"
},
{
	id: 279, ref: "Ephesians 3:10	In", verse: "order that now to the rulers and the authorities in the heavenlies the multifarious wisdom of God might be made known through the church", cat: "Verses::Truth::The-Church"
},
{
	id: 280, ref: "Acts 17:24	The", verse: "God who made the world and all things in it, this One, being Lord of heaven and earth, does not dwell in temples made with hands.", cat: "Verses::Truth::The-Church"
},
{
	id: 281, ref: "Colossians 2:2	That", verse: "their hearts may be comforted, they being knit together in love and unto all the riches of the full assurance of understanding, unto the full knowledge of the mystery of God, Christ.", cat: "Verses::Truth::The-Church"
},
{
	id: 282, ref: "Ephesians 3:4	By", verse: "which, in reading it, you can perceive my understanding in the mystery of Christ.", cat: "Verses::Truth::The-Church"
},
{
	id: 283, ref: "Ephesians 5:32	This", verse: "mystery is great, but I speak with regard to Christ and the church.", cat: "Verses::Truth::The-Church"
},
{
	id: 284, ref: "Ephesians 2:10	For", verse: "we are His masterpiece, created in Christ Jesus for good works, which God prepared beforehand in order that we would walk in them.", cat: "Verses::Truth::The-Church"
},
{
	id: 285, ref: "Romans 16:20	Now", verse: "the God of peace will crush Satan under your feet shortly. The grace of our Lord Jesus be with you.", cat: "Verses::Truth::The-Church"
},
{
	id: 286, ref: "Matthew 16:18	And", verse: "I also say to you that you are Peter, and upon this rock I will build My church, and the gates of Hades shall not prevail against it.", cat: "Verses::Truth::The-Church Verses::Truth::The-Kingdom"
},
{
	id: 287, ref: "Genesis 2:22	And", verse: "Jehovah God built the rib, which He had taken from the man, into a woman and brought her to the man.", cat: "Verses::Truth::The-Church"
},
{
	id: 288, ref: "Genesis 2:23	And", verse: "the man said, This time this is bone of my bones And flesh of my flesh; This one shall be called Woman Because out of Man this one was taken.", cat: "Verses::Truth::The-Church"
},
{
	id: 289, ref: "Ephesians 1:23	Which", verse: "is His Body, the fullness of the One who fills all in all.", cat: "Verses::Truth::The-Church"
},
{
	id: 290, ref: "Ephesians 2:19	So", verse: "then you are no longer strangers and sojourners, but you are fellow citizens with the saints and members of the household of God", cat: "Verses::Truth::The-Church Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 291, ref: "Ephesians 2:21	In", verse: "whom all the building, being fitted together, is growing into a holy temple in the Lord", cat: "Verses::Truth::The-Church"
},
{
	id: 292, ref: "Ephesians 2:22	In", verse: "whom you also are being built together into a dwelling place of God in spirit.", cat: "Verses::Truth::The-Church"
},
{
	id: 293, ref: "Psalms 36:8	They", verse: "are saturated with the fatness of Your house, And You cause them to drink of the river of Your pleasures.", cat: "Verses::Truth::The-Church"
},
{
	id: 294, ref: "Ephesians 5:25	Husband", verse: ", love your wives even as Christ also loved the church and gave Himself up for her", cat: "Verses::Truth::The-Church Verses::Other-Crucial-Matters::Divine-Human-Romance"
},
{
	id: 295, ref: "Colossians 3:10	And", verse: "have put on the new man, which is being renewed unto full knowledge according to the image of Him who created him", cat: "Verses::Truth::The-Church"
},
{
	id: 296, ref: "Colossians 3:11	Where", verse: "there cannot be Greek and Jew, circumcision and uncircumcision, barbarian, Scythian, slave, free man, but Christ is all and in all.", cat: "Verses::Truth::The-Church"
},
{
	id: 297, ref: "Ephesians 6:13	Therefore", verse: "take up the whole armor of God that you may be able to withstand in the evil day, and having done all, to stand.", cat: "Verses::Truth::The-Church"
},
{
	id: 298, ref: "Revelation 1:20	The", verse: "mystery of the seven stars which you saw upon My right hand and the seven golden lampstands: The seven stars are the messengers of the seven churches, and the seven lampstands are the seven churches.", cat: "Verses::Truth::The-Church Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 299, ref: "Matthew 18:17	And", verse: "if he refuses to hear them, tell it to the church; and if he refuses to hear the church also, let him be to you just like the Gentile and the tax collector.", cat: "Verses::Truth::The-Church"
},
{
	id: 300, ref: "Matthew 18:18	Truly", verse: "I say to you, Whatever you bind on the earth shall have been bound in heaven, and whatever you loose on the earth shall have been loosed in heaven.", cat: "Verses::Truth::The-Church Verses::Life-Practices::Prayer"
},
{
	id: 301, ref: "Matthew 18:19	Agai", verse: ", truly I say to you that if two of you are in harmony on earth concerning any matter for which they ask, it will be done for them from My Father who is in the heavens.", cat: "Verses::Truth::The-Church Verses::Life-Practices::Prayer Verses::Service::Vital-Groups"
},
{
	id: 302, ref: "1 Corinthians 1:2", verse: "To the church of God which is in Corinth, to those who have been sanctified in Christ Jesus, the called saints, with all those who call upon the name of our Lord Jesus Christ in every place, who is theirs and ours", cat: "Verses::Truth::The-Church"
},
{
	id: 303, ref: "Romans 16:16	Greet", verse: "one another with a holy kiss. All the churches of Christ greet you.", cat: "Verses::Truth::The-Church"
},
{
	id: 304, ref: "1 Corinthians 14:33", verse: "For God is not a God of confusion but of peace. As in all the churches of the saints", cat: "Verses::Truth::The-Church"
},
{
	id: 305, ref: "Deuteronomy 16:16	Three", verse: "times a year all your males shall appear before Jehovah your God in the place which He will choose: at the Feast of Unleavened Bread, at the Feast of Weeks, and at the Feast of Tabernacles. And they shall not appear before Jehovah empty-handed;", cat: "Verses::Truth::The-Church"
},
{
	id: 306, ref: "Acts 14:23	And", verse: "when they had appointed elders for them in every church and had prayed with fastings, they committed them to the Lord into whom they had believed.", cat: "Verses::Truth::The-Church"
},
{
	id: 307, ref: "Titus 1:5	For", verse: "this cause I left you in Crete, that you might set in order the things which I have begun that remain and appoint elders in every city, as I directed you", cat: "Verses::Truth::The-Church"
},
{
	id: 308, ref: "Revelation 1:11	Sayin", verse: ", What you see write in a scroll and send it to the seven churches: to Ephesus and to Smyrna and to Pergamos and to Thyatira and to Sardis and to Philadelphia and to Laodicea.", cat: "Verses::Truth::The-Church Verses::Service::Blending"
},
{
	id: 309, ref: "Acts 5:42	And", verse: "every day, in the temple and from house to house, they did not cease teaching and announcing the gospel of Jesus as the Christ.", cat: "Verses::Truth::The-Church Verses::Life-Practices::Meeting Verses::Service::God-Ordained-Way"
},
{
	id: 310, ref: "Acts 2:42	And", verse: "they continued steadfastly in the teaching and the fellowship of the apostles, in the breaking of bread and the prayers.", cat: "Verses::Truth::The-Church Verses::Life-Practices::Meeting Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 311, ref: "Acts 20:7	And", verse: "on the first day of the week, when we gathered together to break bread, Paul conversed with them since he was to go forth on the next day; and he extended his message until midnight.", cat: "Verses::Truth::The-Church Verses::Life-Practices::Meeting Verses::Life-Practices::Lords-Table-Meeting"
},
{
	id: 312, ref: "Hebrews 2:12	Sayin", verse: ", “I will declare Your name to My brothers; in the midst of the church I will sing hymns of praise to You.”", cat: "Verses::Truth::The-Church Verses::Life-Practices::Lords-Table-Meeting Verses::Life-Practices::Singing-and-Praising"
},
{
	id: 313, ref: "Acts 4:31	And", verse: "when they had so besought, the place in which they were gathered was shaken, and they were all filled with the Holy Spirit and began to speak the word of God with boldness.", cat: "Verses::Truth::The-Church Verses::Service::Vital-Groups"
},
{
	id: 314, ref: "Philippians 1:1	Paul", verse: "and Timothy, slaves of Christ Jesus, to all the saints in Christ Jesus who are in Philippi, with the overseers and deacons.", cat: "Verses::Truth::The-Church"
},
{
	id: 315, ref: "Acts 20:17	And", verse: "from Miletus he sent word to Ephesus and called for the elders of the church.", cat: "Verses::Truth::The-Church"
},
{
	id: 316, ref: "Acts 20:28	Take", verse: "heed to yourselves and to all the flock, among whom the Holy Spirit has placed you as overseers to shepherd the church of God, which He obtained through His own blood.", cat: "Verses::Truth::The-Church Verses::Service::God-Ordained-Way"
},
{
	id: 317, ref: "Acts 13:1	Now", verse: "there were in Antioch, in the local church, prophets and teachers: Barnabas and Simeon, who was called Niger, and Lucius the Cyrenian, and Manaen, the foster brother of Herod the tetrarch, and Saul.", cat: "Verses::Truth::The-Church"
},
{
	id: 318, ref: "Revelation 2:6	But", verse: "this you have, that you hate the works of the Nicolaitans, which I also hate.", cat: "Verses::Truth::The-Church Verses::Service::Universal-Priesthood"
},
{
	id: 319, ref: "1 Corinthians 14:26", verse: "What then, brothers? Whenever you come together, each one has a psalm, has a teaching, has a revelation, has a tongue, has an interpretation. Let all things be done for building up.", cat: "Verses::Truth::The-Church Verses::Life-Practices::Meeting Verses::Service::Universal-Priesthood"
},
{
	id: 320, ref: "1 Corinthians 14:4", verse: "He who speaks in a tongue builds up himself, but he who prophesies builds up the church.", cat: "Verses::Truth::The-Church Verses::Life-Practices::Prophesying Verses::Service::God-Ordained-Way"
},
{
	id: 321, ref: "Psalms 133:1	Behol", verse: ", how good and how pleasant it is for brothers to dwell in unity!", cat: "Verses::Truth::The-Church Verses::Service::One-Accord"
},
{
	id: 322, ref: "Psalms 133:2	It", verse: "is like the fine oil upon the head that ran down upon the beard, upon Aaron’s beard, that ran down upon the hem of his garments;", cat: "Verses::Truth::The-Church"
},
{
	id: 323, ref: "Psalms 133:3	Like", verse: "the dew of Hermon that came down upon the mountains of Zion. For there Jehovah commanded the blessing: life forever.", cat: "Verses::Truth::The-Church"
},
{
	id: 324, ref: "Revelation 3:7	And", verse: "to the messenger of the church in Philadelphia write: These things says the Holy One, the true One, the One who has the key of David, the One who opens and on one will shut, and shuts and no one opens.", cat: "Verses::Truth::The-Church"
},
{
	id: 325, ref: "1 Corinthians 8:1", verse: "Now concerning things sacrificed to idols, we know that we all have knowledge. Knowledge puffs up, but love builds up.", cat: "Verses::Truth::The-Church"
},
{
	id: 326, ref: "1 Corinthians 12:31", verse: "But earnestly desire the greater gifts. And moreover I show to you a most excellent way.", cat: "Verses::Truth::The-Church"
},
{
	id: 327, ref: "1 Corinthians 13:13", verse: "Now there abide faith, hope, love, these three; and the greatest of these is love.", cat: "Verses::Truth::The-Church"
},
{
	id: 328, ref: "Hebrews 12:22	But", verse: "you have come forward to Mount Zion and to the city of the living God, the heavenly Jerusalem; and to myriads of angels, to the universal gathering;", cat: "Verses::Truth::The-Church Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Intensification"
},
{
	id: 329, ref: "Hebrews 12:23	And", verse: "to the church of the firstborn, who have been enrolled in the heavens; and to God, the Judge of all; and to the spirits of righteous men who have been made perfect.", cat: "Verses::Truth::The-Church"
},
{
	id: 330, ref: "Ephesians 4:4	One", verse: "Body and one Spirit, even as also you were called in one hope of your calling;", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 331, ref: "Ephesians 4:5	One", verse: "Lord, one faith, one baptism;", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 332, ref: "1 Corinthians 12:13", verse: "For also in one Spirit we were all baptized into one Body, whether Jews or Greeks, whether slaves or free, and were all given to drink one Spirit.", cat: "Verses::Truth::Body-of-Christ Verses::Other-Crucial-Matters::Baptism"
},
{
	id: 333, ref: "Ephesians 2:14	For", verse: "He Himself is our peace, He who has made both one and has broken down the middle wall of partition, the enmity,", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 334, ref: "Ephesians 2:16	And", verse: "might reconcile both in one Body to God through the cross, having slain the enmity by it.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 335, ref: "1 Corinthians 12:12", verse: "For even as the body is one and has many members, yet all the members of the body, being many, are one body, so also is the Christ.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 336, ref: "Romans 12:4	For", verse: "just as in one body we have many members, and all the members do not have the same function,", cat: "Verses::Truth::Body-of-Christ Verses::Service::Universal-Priesthood"
},
{
	id: 337, ref: "Romans 12:5	So", verse: "we who are many are one Body in Christ, and individually members one of another", cat: "Verses::Truth::Body-of-Christ Verses::Service::Universal-Priesthood Verses::Service::Vital-Groups"
},
{
	id: 338, ref: "1 Corinthians 12:22", verse: "But much rather the members of the Body which seem to be weaker are necessary.", cat: "Verses::Truth::Body-of-Christ Verses::Service::Coordination"
},
{
	id: 339, ref: "1 Corinthians 12:24", verse: "But our comely members have no need. But God has blended the body together, giving more abundant honor to the member that lacked.", cat: "Verses::Truth::Body-of-Christ Verses::Service::Blending"
},
{
	id: 340, ref: "1 Corinthians 12:25", verse: "That there would be no division in the body, but that the members would have the same care for one another.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 341, ref: "1 Corinthians 12:26", verse: "And whether one member suffers, all the members suffer with it; or one member is glorified, all the members rejoice with it.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 342, ref: "Ephesians 4:11	And", verse: "He Himself gave some as apostles and some as prophets and some as evangelists and some as shepherds and teachers.", cat: "Verses::Truth::Body-of-Christ Verses::Service::God-Ordained-Way"
},
{
	id: 343, ref: "1 Corinthians 12:28", verse: "And God has placed some in the church: first apostles, second prophets, third teachers; then works of power, then gifts of healing, helps, administrations, various kinds of tongues.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 344, ref: "Romans 12:6	And", verse: "having gifts that differ according to the grace given to us, whether prophecy, let us prophesy according to the proportion of faith.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 345, ref: "Ephesians 4:7	But", verse: "to each one of us grace was given according to the measure of the gift of Christ.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 346, ref: "Ephesians 4:12	For", verse: "the perfecting of the saints unto the work of the ministry, unto the building up of the Body of Christ.", cat: "Verses::Truth::Body-of-Christ Verses::Service::God-Ordained-Way Verses::Other-Crucial-Matters::New-Testament-Ministry"
},
{
	id: 347, ref: "Ephesians 4:13	Until", verse: "we all arrive at the oneness of the faith and of the full knowledge of the Son of God, at a full-grown man, at the measure of the stature of the fullness of Christ.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 348, ref: "Ephesians 4:14	That", verse: "we may be no longer little children tossed by waves and carried about by every wind of teaching in the sleight of men, in craftiness with a view to a system of error.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 349, ref: "Ephesians 4:15	But", verse: "holding to truth in love, we may grow up into Him in all things, who is the Head, Christ.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 350, ref: "Ephesians 4:16	Out", verse: "from whom all the Body, being joined together and being knit together through every joint of the rich supply and through the operation in the measure of each one part, causes the growth of the Body unto the building up of itself in love.", cat: "Verses::Truth::Body-of-Christ Verses::Service::Coordination"
},
{
	id: 351, ref: "Colossians 2:19	And", verse: "not holding the Head, out from whom all the Body, being richly supplied and knit together by means of the joints and sinews, grows with the growth of God.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 352, ref: "1 Corinthians 10:16", verse: "The cup of blessing which we bless, is it not the fellowship of the blood of Christ? The bread which we break, is it not the fellowship of the body of Christ?", cat: "Verses::Truth::Body-of-Christ Verses::Life-Practices::Lords-Table-Meeting Verses::Service::Blending"
},
{
	id: 353, ref: "1 Corinthians 10:17", verse: "Seeing that there is one bread, we who are many are one Body; for we all partake of the one bread.", cat: "Verses::Truth::Body-of-Christ Verses::Life-Practices::Lords-Table-Meeting Verses::Service::Blending"
},
{
	id: 354, ref: "Romans 12:3	For", verse: "I say, through the grace given to me, to everyone who is among you, not to think more highly of himself than he ought to think, but to think so as to be sober-minded, as God has apportioned to each a measure of faith.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 355, ref: "1 Corinthians 1:12", verse: "Now I mean this, that each of you says, I am of Paul, and I of Apollos, and I of Cephas, and I of Christ.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 356, ref: "1 Corinthians 1:10", verse: "Now I beseech you, brothers, through the name of our Lord Jesus Christ, that you all speak the same thing and that there be no divisions among you, but that you be attuned in the same mind and in the same opinion.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 357, ref: "Romans 15:6	That", verse: "with one accord you may with one mouth glorify the God and Father of our Lord Jesus Christ.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 358, ref: "Romans 15:7	Therefore", verse: "receive one another, as Christ also received you to the glory of God.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 359, ref: "Ephesians 4:3	Being", verse: "diligent to keep the oneness of the Spirit in the uniting bond of peace.", cat: "Verses::Truth::Body-of-Christ Verses::Service::One-Accord"
},
{
	id: 360, ref: "Romans 16:17	Now", verse: "I exhort you, brothers, to mark those who make divisions and causes of stumbling contrary to the teaching which you have learned, and turn away from them.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 361, ref: "Colossians 1:24	I", verse: "now rejoice in my sufferings on your behalf and fill up on my part that which is lacking of the afflictions of Christ in my flesh for His Body, which is the church.", cat: "Verses::Truth::Body-of-Christ"
},
{
	id: 362, ref: "Matthew 6:33	But", verse: "seek first His kingdom and His righteousness, and all these things will be added to you.", cat: "Verses::Truth::The-Kingdom Verses::Life-Practices::Living-by-Faith"
},
{
	id: 363, ref: "Matthew 6:10	Your", verse: "kingdom come; Your will be done, as in heaven, so also on earth.", cat: "Verses::Truth::The-Kingdom Verses::Life-Practices::Prayer"
},
{
	id: 364, ref: "Matthew 6:13	And", verse: "do not bring us into temptation, but deliver us from the evil one. For Yours is the kingdom and the power and the glory forever. Amen.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 365, ref: "Romans 14:17	For", verse: "the kingdom of God is not eating and drinking, but righteousness and peace and joy in the Holy Spirit. ", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 366, ref: "Luke 17:21	Nor", verse: "will they say, Behold, here it is! or, There! For behold, the kingdom of God is in the midst of you.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 367, ref: "Matthew 13:37	And", verse: "He answered and said, He who sows the good seed is the Son of Man", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 368, ref: "Mark 4:14	The", verse: "sower sows the word.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 369, ref: "Mark 1:15	And", verse: "saying, The time is fulfilled and the kingdom of God has drawn near. Repent and believe in the gospel.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 370, ref: "John 3:3	Jesus", verse: "answered and said to him, Truly, truly, I say to you, Unless one is born anew, he cannot see the kingdom of God. ", cat: "Verses::Truth::The-Kingdom Verses::Life-Practices::Gospel"
},
{
	id: 371, ref: "John 3:5	Jesus", verse: "answered, Truly, truly, I say to you, Unless one is born of water and the Spirit, he cannot enter into the kingdom of God.", cat: "Verses::Truth::The-Kingdom Verses::High-Peak-of-the-Divine-Revelation::Divine-and-Mystical-Realm Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation Verses::Other-Crucial-Matters::Baptism"
},
{
	id: 372, ref: "Mark 4:26	And", verse: "He said, So is the kingdom of God: as if a man cast seed on the earth", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 373, ref: "Mark 4:27	And", verse: "sleeps and rises night and day, and the seed sprouts and lengthens—how, he does not know.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 374, ref: "2 Peter 1:4", verse: "Through which He has granted to us precious and exceedingly great promises that through these you might become partakers of the divine nature, having escaped the corruption which is in the world by lust.", cat: "Verses::Truth::The-Kingdom Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 375, ref: "2 Peter 1:11", verse: "For in this way the entrance into the eternal kingdom of our Lord and Savior Jesus Christ will be richly and bountifully supplied to you.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 376, ref: "Colossians 1:13	Who", verse: "delivered us out of the authority of darkness and transferred us into the kingdom of the Son of His love", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 377, ref: "Acts 26:18	To", verse: "open their eyes, to turn them from darkness to light and from the authority of Satan to God, that they may receive forgiveness of sins and an inheritance among those who have been sanctified by faith in Me.", cat: "Verses::Truth::The-Kingdom Verses::Service::God-Ordained-Way"
},
{
	id: 378, ref: "Daniel 4:26	And", verse: "in that it was commanded that the stump of roots of the tree be left, your kingdom will be assured to you after you have come to know that the heavens do rule.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 379, ref: "Matthew 5:3	Blessed", verse: "are the poor in spirit, for theirs is the kingdom of the heavens.", cat: "Verses::Truth::The-Kingdom Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 380, ref: "Matthew 16:19	I", verse: "will give to you the keys of the kingdom of the heavens, and whatever you bind on the earth shall have been bound in the heavens, and whatever you loose on the earth shall have been loosed in the heavens. ", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 381, ref: "Matthew 12:28	But", verse: "if I, by the Spirit of God, cast out the demons, then the kingdom of God has come upon you.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 382, ref: "Ephesians 6:12	For", verse: "our wrestling is not against blood and flesh but against the rulers, against the authorities, against the world-rulers of this darkness, against the spiritual forces of evil in the heavenlies.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 383, ref: "Isaiah 14:13	But", verse: "you, you said in your heart: I will ascend to heaven; Above the stars of God I will exalt my throne. And I will sit upon the mount of assembly In the uttermost parts of the north.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 384, ref: "Ephesians 6:11	Put", verse: "on the whole armor of God that you may be able to stand against the stratagems of the devil", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 385, ref: "Romans 12:13	The", verse: "night is far advanced, and the day has drawn near. Let us therefore cast off the works of darkness, and let us put on the weapons of light.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 386, ref: "Nehemaiah 4:17	Those", verse: "who built the wall and those who carried burdens took the loads with one hand doing the work and with the other holding a weapon.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 387, ref: "Numbers 10:35	And", verse: "when the Ark set out, Moses said, Rise up, O Jehovah, and let Your enemies be scattered; And let those who hate You flee before You.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 388, ref: "Revelation 1:6	And", verse: "made us a kingdom, priests to His God and Father, to Him be the glory and the might forever and ever. Amen.", cat: "Verses::Truth::The-Kingdom Verses::Service::Universal-Priesthood"
},
{
	id: 389, ref: "Hebrews 12:28	Therefore", verse: "receiving an unshakable kingdom, let us have grace, through which we may serve God well-pleasingly with piety and fear.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 390, ref: "1 Thessalonians 2:12", verse: "So that you might walk in a manner worthy of God, who calls you into His own kingdom and glory.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 391, ref: "Matthew 7:21	Not", verse: "every one who says to Me, Lord, Lord, will enter into the kingdom of the heavens, but he who does the will of My Father who is in the heavens.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 392, ref: "Acts 14:22	Establishing", verse: "the souls of the disciples, exhorting them to continue in the faith and saying that through many tribulations we must enter into the kingdom of God.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 393, ref: "2 Timothy 2:12", verse: "If we endure, we will also reign with Him; if we deny Him, He also will deny us", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 394, ref: "Revelation 12:10	And", verse: "I heard a loud voice in heaven saying, Now has come the salvation and the power and the kingdom of our God and the authority of His Christ, for the accuser of our brothers has been cast down, who accuses them before our God day and night.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 395, ref: "Revelation 12:11	And", verse: "they overcame him because of the blood of the Lamb and because of the word of their testimony, and they loved not their soul-life even unto death.", cat: "Verses::Truth::The-Kingdom Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Intensification"
},
{
	id: 396, ref: "Revelation 19:8	And", verse: "it was given to her that she should be clothed in fine linen, bright and clean; for the fine linen is the righteousnesses of the saints.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 397, ref: "Daniel 2:34	You", verse: "were watching until a stone was cut out without hands, and it struck the image at its feet of iron and clay and crushed them.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 398, ref: "Revelation 11:15	And", verse: "the seventh angel trumpeted; and there were loud voices in heaven, saying, The kingdom of the world has become the kingdom of our Lord and of His Christ, and He will reign forever and ever.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 399, ref: "Revelation 20:6	Blessed", verse: "and holy is he who has part in the first resurrection; over these the second death has no authority, but they will be priests of God and of Christ and will reign with Him for a thousand years.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 400, ref: "Revelation 21:1	And", verse: "I saw a new heaven and a new earth; for the first heaven and the first earth passed away, and the sea is no more.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 401, ref: "Revelation 21:2	And", verse: "I saw the holy city, New Jerusalem, coming down out of heaven from God, prepared as a bride adorned for her husband.", cat: "Verses::Truth::The-Kingdom Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Intensification Verses::Other-Crucial-Matters::Divine-Human-Romance"
},
{
	id: 402, ref: "Revelation 22:5	And", verse: "night will be no more; and they have no need of the light of a lamp and of the light of the sun, for the Lord God will shine upon them; and they will reign forever and ever.", cat: "Verses::Truth::The-Kingdom"
},
{
	id: 403, ref: "Revelation 21:9	And", verse: "one of the seven angels who had the seven bowls full of the seven last plagues came and spoke with me, saying, Come here; I will show you the bride, the wife of the Lamb.", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 404, ref: "Revelation 21:10	And", verse: "he carried me away in spirit onto a great and high mountain and showed me the holy city, Jerusalem, coming down out of heaven from God", cat: "Verses::Truth::New-Jerusalem Verses::High-Peak-of-the-Divine-Revelation"
},
{
	id: 405, ref: "Revelation 1:1	The", verse: "revelation of Jesus Christ which God gave to Him to show to His slaves the things that must quickly take place; and He made it known by signs, sending it by His angel to His slave John", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 406, ref: "John 2:19	Jesus", verse: "answered and said to them, Destroy this temple, and in three days I will raise it up.", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 407, ref: "John 2:21	But", verse: "He spoke of the temple of His body.", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 408, ref: "John 14:2	In", verse: "My Father's house are many abodes; if it were not so, I would have told you; for I go to prepare a place for you.", cat: "Verses::Truth::New-Jerusalem Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 409, ref: "John 14:23	Jesus", verse: "answered and said to him, If anyone loves Me, he will keep My word, and My Father will love him, and We will come to him and make an abode with him.", cat: "Verses::Truth::New-Jerusalem Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 410, ref: "Romans 8:29	Because", verse: "those whom He foreknew, He also predestinated to be conformed to the image of His Son, that He might be the Firstborn among many brothers", cat: "Verses::Truth::New-Jerusalem Verses::Life-Practices::Gospel Verses::High-Peak-of-the-Divine-Revelation::Deification Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 411, ref: "Hebrews 2:10	For", verse: "it was fitting for Him, for whom are all things and through whom are all things, in leading many sons into glory, to make the Author of their salvation perfect through sufferings.", cat: "Verses::Truth::New-Jerusalem Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 412, ref: "Revelation 21:7	He", verse: "who overcomes will inherit these things, and I will be God to him, and he will be a son to Me.", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 413, ref: "Revelation 4:3	And", verse: "He who was sitting was like a jasper stone and a sardius in appearance, and there was a rainbow around the throne like an emerald in appearance.", cat: "Verses::Truth::New-Jerusalem Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 414, ref: "Revelation 21:11	Having", verse: "the glory of God. Her light was like a most precious stone, like a jasper stone, as clear as crystal.", cat: "Verses::Truth::New-Jerusalem Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 415, ref: "Revelation 21:18	And", verse: "the building work of its wall was jasper; and the city was pure gold, like clear glass.", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 416, ref: "Galatians 4:26	But", verse: "the Jerusalem above is free, which is our mother", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 417, ref: "Hebrews 11:10	For", verse: "he eagerly waited for the city which has the foundations, whose Architect and Builder is God.", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 418, ref: "2 Corinthians 5:17", verse: "So then if anyone is in Christ, he is a new creation. The old things have passed away; behold, they have become new.", cat: "Verses::Truth::New-Jerusalem Verses::High-Peak-of-the-Divine-Revelation::Deification Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 419, ref: "Revelation 21:3	And", verse: "I heard a loud voice out of the throne, saying, Behold, the tabernacle of God is with men, and He will tabernacle with them, and they will be His peoples, and God Himself will be with them and be their God.", cat: "Verses::Truth::New-Jerusalem Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 420, ref: "1 Corinthians 3:16", verse: "Do you not know that you are the temple of God, and that the Spirit of God dwells in you?", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 421, ref: "Revelation 21:22	And", verse: "I saw no temple in it, for the Lord God the Almighty and the Lamb are its temple.", cat: "Verses::Truth::New-Jerusalem Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 422, ref: "Revelation 3:12	He", verse: "who overcomes, him I will make a pillar in the temple of My God, and he shall by no means go out anymore, and I will write upon him the name of My God and the name of the city of My God, the New Jerusalem, which descends out of heaven from My God, and My new name.", cat: "Verses::Truth::New-Jerusalem Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 423, ref: "Revelation 21:12	It", verse: "had a great and high wall and had twelve gates, and at the gates twelve angels, and names inscribed, which are the names of the twelve tribes of the sons of Israel:", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 424, ref: "Revelation 21:14	And", verse: "the wall of the city had twelve foundations, and on them the twelve names of the twelve apostles of the Lamb.", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 425, ref: "Revelation 21:21	And", verse: "the twelve gates were twelve pearls; each one of the gates was, respectively, of one pearl. And the street of the city was pure gold, like transparent glass.", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 426, ref: "Revelation 21:19	The", verse: "foundations of the wall of the city were adorned with every precious stone: the first foundation was jasper; the second, sapphire; the third, chalcedony; the fourth, emerald", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 427, ref: "Revelation 21:16	And", verse: "the city lies square, and its length is as great as the breadth. And he measured the city with the reed to a length of twelve thousand stadia; the length and the breadth and the height of it are equal.", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 428, ref: "Revelation 21:17	And", verse: "he measured its wall, a hundred and forty-four cubits, according to the measure of a man, that is, of an angel.", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 429, ref: "Revelation 22:1	And", verse: "he showed me a river of water of life, bright as crystal, proceeding out of the throne of God and of the Lamb in the middle of its street.", cat: "Verses::Life::Knowledge-of-Life Verses::Truth::New-Jerusalem"
},
{
	id: 430, ref: "Revelation 22:2	And", verse: "on this side and on that side of the river was the tree of life, producing twelve fruits, yielding its fruit each month; and the leaves of the tree are for the healing of the nations.", cat: "Verses::Life::Knowledge-of-Life Verses::Truth::New-Jerusalem"
},
{
	id: 431, ref: "Revelation 22:14	Blessed", verse: "are those who wash their robes that they may have right to the tree of life and may enter by the gates into the city.", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 432, ref: "Revelation 21:23	And", verse: "the city has no need of the sun or of the moon that they should shine in it, for the glory of God illumined it, and its lamp is the Lamb.", cat: "Verses::Truth::New-Jerusalem"
},
{
	id: 433, ref: "Psalms 36:9	For", verse: "with You is the fountain of life; In Your light we see light.", cat: "Verses::Life::Knowledge-of-Life"
},
{
	id: 434, ref: "John 1:4	In", verse: "Him was life, and the life was the light of men.", cat: "Verses::Life::Knowledge-of-Life"
},
{
	id: 435, ref: "John 11:25	Jesus", verse: "said to her, I am the resurrection and the life; he who believes into Me, even if he should die, shall live", cat: "Verses::Life::Knowledge-of-Life"
},
{
	id: 436, ref: "John 14:6	Jesus", verse: "said to him, I am the way and the reality and the life; no one comes to the Father except through Me.", cat: "Verses::Life::Knowledge-of-Life"
},
{
	id: 437, ref: "Colossians 3:4	When", verse: "Christ our life is manifested, then you also will be manifested with Him in glory.", cat: "Verses::Life::Knowledge-of-Life"
},
{
	id: 438, ref: "2 Corinthians 3:6", verse: "Who has also made us sufficient as ministers of a new covenant, ministers not of the letter but of the Spirit; for the letter kills, but the Spirit gives life.", cat: "Verses::Life::Knowledge-of-Life Verses::Other-Crucial-Matters::New-Covenant-Ministers"
},
{
	id: 439, ref: "John 10:28	And", verse: "I give to them eternal life, and they shall by no means perish forever, and no one shall snatch them out of My hand.", cat: "Verses::Life::Knowledge-of-Life"
},
{
	id: 440, ref: "Hebrews 7:16	Who", verse: "has been appointed not according to the law of a fleshy commandment but according to the power of an indestructible life.", cat: "Verses::Life::Knowledge-of-Life"
},
{
	id: 441, ref: "John 10:10	The", verse: "thief does not come except to steal and kill and destroy; I have come that they may have life and may have it abundantly.", cat: "Verses::Life::Knowledge-of-Life"
},
{
	id: 442, ref: "John 10:11	I", verse: "am the good Shepherd; the good Shepherd lays down His life for the sheep.", cat: "Verses::Life::Knowledge-of-Life"
},
{
	id: 443, ref: "John 6:51	I", verse: "am the living bread which came down out of heaven; if anyone eats of this bread, he shall live forever; And the bread which I will give is My flesh, given for the life of the world.", cat: "Verses::Life::Knowledge-of-Life Verses::Life-Practices::Morning-Revival"
},
{
	id: 444, ref: "John 6:35	Jesus", verse: "said to them, I am the bread of life; he who comes to Me shall by no means hunger, and he who believes into Me shall by no means ever thirst.", cat: "Verses::Life::Knowledge-of-Life"
},
{
	id: 445, ref: "1 John 1:1", verse: "That which was from the beginning, which we have heard, which we have seen with our eyes, which we beheld and our hands handled, concerning the Word of life", cat: "Verses::Life::Knowledge-of-Life"
},
{
	id: 446, ref: "John 5:39	You", verse: "search the Scriptures, because you think that in them you have eternal life; and it is these that testify concerning Me.", cat: "Verses::Life::Knowledge-of-Life Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 447, ref: "John 5:40	Yet", verse: "you are not willing to come to Me that you may have life.", cat: "Verses::Life::Knowledge-of-Life Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 448, ref: "Ezekiel 36:26	I", verse: "will also give you a new heart, and a new spirit I will put within you; and I will take away the heart of stone out of your flesh, and I will give you a heart of flesh.", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 449, ref: "Philippians 2:13	For", verse: "it is God who operates in you both the willing and the working for His good pleasure.", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 450, ref: "Galatians 1:15	But", verse: "when it pleased God, who set me apart from my mother's womb and called me through His grace", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 451, ref: "Galatians 1:16	To", verse: "reveal His Son in me that I might announce Him as the gospel among the Gentiles, immediately I did not confer with flesh and blood", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 452, ref: "Galatians 2:20	I", verse: "am crucified with Christ; and it is no longer I who live, but it is Christ who lives in me; and the life which I now live in the flesh I live in faith, the faith of the Son of God, who loved me and gave Himself up for me.", cat: "Verses::Life::Experience-of-Life Verses::Life-Practices::Loving-the-Lord Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 453, ref: "Galatians 4:19	My", verse: "children, with whom I travail again in birth until Christ is formed in you", cat: "Verses::Life::Experience-of-Life Verses::Service::God-Ordained-Way"
},
{
	id: 454, ref: "Philippians 3:9	And", verse: "be found in Him, not having my own righteousness which is out of the law, but that which is through faith in Christ, the righteousness which is out of God and based on faith", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 455, ref: "Romans 6:11	So", verse: "also you, reckon yourselves to be dead to sin, but living to God in Christ Jesus.", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 456, ref: "Galatians 6:14	But", verse: "far be it from me to boast except in the cross of our Lord Jesus Christ, through whom the world has been crucified to me and I to the world.", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 457, ref: "1 John 2:15", verse: "Do not love the world nor the things in the world. If anyone loves the world, love for the Father is not in him", cat: "Verses::Life::Experience-of-Life Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 458, ref: "Romans 12:2	And", verse: "do not be fashioned according to this age, but be transformed by the renewing of the mind that you may prove what the will of God is, that which is good and well pleasing and perfect.", cat: "Verses::Life::Experience-of-Life Verses::Life-Practices::Service Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 459, ref: "Galatians 1:4	Who", verse: "gave Himself for our sins that He might rescue us out of the present evil age according to the will of our God and Father", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 460, ref: "Matthew 16:24	Then", verse: "Jesus said to His disciples, If anyone wants to come after Me, let him deny himself and take up his cross and follow Me.", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 461, ref: "Job 42:5	I", verse: "had heard of You by the hearing of the ear, But now my eye has seen You", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 462, ref: "Job 42:6	Therefore", verse: "I abhor myself, and I repent In dust and ashes.", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 463, ref: "Genesis 13:15	For", verse: "all the land that you see I will give to you and to your seed forever.", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 464, ref: "2 Corinthians 4:10", verse: "Always bearing about in the body the putting to death of Jesus that the life of Jesus also may be manifested in our body.", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 465, ref: "2 Corinthians 4:12", verse: "So then death operates in us, but life in you.", cat: "Verses::Life::Experience-of-Life"
},
{
	id: 466, ref: "Romans 8:5	For", verse: "those who are according to the flesh mind the things of the flesh; but those who are according to the spirit, the things of the Spirit.", cat: "Verses::Life::Sense-of-Life"
},
{
	id: 467, ref: "John 8:36	If", verse: "therefore the Son sets you free, you shall be free indeed.", cat: "Verses::Life::Sense-of-Life"
},
{
	id: 468, ref: "1 John 3:9", verse: "Everyone who has been begotten of God does not practice sin, because His seed abides in him; and he cannot sin, because he has been begotten of God.", cat: "Verses::Life::Sense-of-Life Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 469, ref: "Colossians 3:15	And", verse: "let the peace of Christ arbitrate in your hearts, to which also you were called in one Body; and be thankful.", cat: "Verses::Life::Sense-of-Life"
},
{
	id: 470, ref: "Romans 8:4	That", verse: "the righteous requirement of the law might be fulfilled in us, who do not walk according to the flesh but according to the spirit.", cat: "Verses::Life::Sense-of-Life"
},
{
	id: 471, ref: "Philippians 2:12	So", verse: "then, my beloved, even as you have always obeyed, not as in my presence only but now much rather in my absence, work out your own salvation with fear and trembling;", cat: "Verses::Life::Sense-of-Life"
},
{
	id: 472, ref: "Hebrews 10:19	Having", verse: "therefore, brothers, boldness for entering the Holy of Holies in the blood of Jesus", cat: "Verses::Life::Fellowship-of-Life"
},
{
	id: 473, ref: "John 4:23	But", verse: "an hour is coming, and it is now, when the true worshippers will worship the Father in spirit and truthfulness, for the Father also seeks such to worship Him.", cat: "Verses::Life::Fellowship-of-Life"
},
{
	id: 474, ref: "1 John 1:7", verse: "But if we walk in the light as He is in the light, we have fellowship with one another, and the blood of Jesus His Son cleanses us from every sin.", cat: "Verses::Life::Fellowship-of-Life Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Judicial-Redemption"
},
{
	id: 475, ref: "1 John 1:9", verse: "If we confess our sins, He is faithful and righteous to forgive us our sins and cleanse us from all unrighteousness.", cat: "Verses::Life::Fellowship-of-Life Verses::Life-Practices::Confession-and-Forgiveness Verses::Service::Vital-Groups"
},
{
	id: 476, ref: "Acts 24:16	Because", verse: "of this I also exercise myself to always have a conscience without offense toward God and men.", cat: "Verses::Life::Fellowship-of-Life"
},
{
	id: 477, ref: "1 Timothy 1:5", verse: "But the end of the charge is love out of a pure heart and out of a good conscience and out of unfeigned faith", cat: "Verses::Life::Fellowship-of-Life"
},
{
	id: 478, ref: "1 John 3:20", verse: "Because if our heart blames us, it is because God is greater than our heart and knows all things.", cat: "Verses::Life::Fellowship-of-Life"
},
{
	id: 479, ref: "1 John 1:2", verse: "(And the life was manifested, and we have seen and testify and report to you the eternal life, which was with the Father and was manifested to us)", cat: "Verses::Life::Fellowship-of-Life"
},
{
	id: 480, ref: "1 John 1:3", verse: "That which we have seen and heard we report also to you that you also may have fellowship with us, and indeed our fellowship is with the Father and with His Son Jesus Christ.", cat: "Verses::Life::Fellowship-of-Life Verses::Service::Vital-Groups"
},
{
	id: 481, ref: "Philippians 1:5	For", verse: "your fellowship unto the furtherance of the gospel from the first day until now", cat: "Verses::Life::Fellowship-of-Life"
},
{
	id: 482, ref: "Colossians 3:13	Bearing", verse: "one another and forgiving one another, if anyone should have a complaint against anyone; even as the Lord forgave you, so also should you forgive.", cat: "Verses::Life::Fellowship-of-Life"
},
{
	id: 483, ref: "Hebrews 6:1	Therefore", verse: "leaving the word of the beginning of Christ, let us be brought on to maturity, not laying again a foundation of repentance from dead works and of faith in God", cat: "Verses::Life::Growth-of-Life"
},
{
	id: 484, ref: "1 Corinthians 3:6", verse: "I planted, Apollos watered, but God caused the growth.", cat: "Verses::Life::Growth-of-Life"
},
{
	id: 485, ref: "1 Corinthians 3:1", verse: "And I, brothers, was not able to speak to you as to spiritual men, but as to fleshy, as to infants in Christ.", cat: "Verses::Life::Growth-of-Life"
},
{
	id: 486, ref: "Hebrews 5:13	For", verse: "everyone who partakes of milk is inexperienced in the word of righteousness, for he is an infant", cat: "Verses::Life::Growth-of-Life"
},
{
	id: 487, ref: "Hebrews 5:14	But", verse: "solid food is for the full-grown, who because of practice have their faculties exercised for discriminating between both good and evil.", cat: "Verses::Life::Growth-of-Life"
},
{
	id: 488, ref: "1 Corinthians 14:20", verse: "Brothers, do not be children in your understanding, but in malice be babes and in your understanding be full-grown.", cat: "Verses::Life::Growth-of-Life"
},
{
	id: 489, ref: "Romans 10:13	For", verse: "\"whoever calls upon the name of the Lord shall be saved.\"", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 490, ref: "Acts 2:21	And", verse: "it shall be that everyone who calls on the name of the Lord shall be saved.''", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 491, ref: "Romans 10:12	For", verse: "there is no distinction between Jew and Greek, for the same Lord is Lord of all and rich to all who call upon Him", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 492, ref: "Genesis 4:26	And", verse: "to Seth also a son was born, and he called his name Enosh. At that time men began to call upon the name of Jehovah.", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 493, ref: "1 Corinthians 12:3", verse: "Therefore I make known to you that no one speaking in the Spirit of God says, Jesus is accursed; and no one can say, Jesus is Lord! except in the Holy Spirit.", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 494, ref: "Isaiah 12:3	Therefore", verse: "you will draw water with rejoicing From the springs of salvation", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 495, ref: "Isaiah 12:4	And", verse: "you will say in that day, Give thanks to Jehovah; call upon His name! Make His deeds known among the peoples; Remind them that His name is exalted.", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 496, ref: "Psalms 116:13	I", verse: "will take up the cup of salvation And call upon the name of Jehovah.", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 497, ref: "Lamentations 3:55	I", verse: "called upon Your name, O Jehovah, From the lowest pit.", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 498, ref: "Lamentations 3:56	You", verse: "have heard my voice; do not hide Your ear at my breathing, at my cry.", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 499, ref: "Isaiah 55:6	Seek", verse: "Jehovah while He may be found; Call upon Him while He is near.", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 500, ref: "Psalms 145:18	Jehovah", verse: "is near to all who call upon Him, To all who call upon Him in truth.", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 501, ref: "Psalms 81:10	I", verse: "am Jehovah your God, Who brought you up out of the land of Egypt; Open your mouth wide, and I will fill it.", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 502, ref: "Psalms 8:9	O", verse: "Jehovah our Lord, How excellent is Your name In all the earth!", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 503, ref: "Philippians 2:9	Therefore", verse: "also God highly exalted Him and bestowed on Him the name which is above every name", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 504, ref: "Philippians 2:10	That", verse: "in the name of Jesus every knee should bow, of those who are in heaven and on earth and under the earth", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 505, ref: "Philippians 2:11	And", verse: "every tongue should openly confess that Jesus Christ is Lord to the glory of God the Father.", cat: "Verses::Life-Practices::Calling-On-The-Name-Of-The-Lord"
},
{
	id: 506, ref: "1 Thessalonians 5:17", verse: "Unceasingly pray", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 507, ref: "1 Thessalonians 5:18", verse: "In everything give thanks; for this is the will of God in Christ Jesus for you.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 508, ref: "Philippians 4:6	In", verse: "nothing be anxious, but in everything, by prayer and petition with thanksgiving, let your requests be made known to God;", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 509, ref: "Romans 8:27	But", verse: "He who searches the hearts knows what the mind of the Spirit is, because He intercedes for the saints according to God.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 510, ref: "Matthew 6:9	You", verse: "then pray in this way: Our Father who is in the heavens, Your name be sanctified;", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 511, ref: "James 5:17	Elijah", verse: "was a man of like feeling with us, and he earnestly prayed that it would not rain; and it did not rain on the earth for three years and six months.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 512, ref: "Ephesians 6:18	By", verse: "means of all prayer and petition, praying at every time in spirit and watching unto this in all perseverance and petition concerning all the saints,", cat: "Verses::Life-Practices::Prayer Verses::Life-Practices::Pray-reading Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 513, ref: "1 Timothy 2:8", verse: "I desire therefore that men pray in every place, lifting up holy hands, without wrath and reasoning;", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 514, ref: "Hebrews 4:16	Let", verse: "us therefore come forward with boldness to the throne of grace that we may receive mercy and find grace for timely help.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 515, ref: "Matthew 6:6	But", verse: "you, when you pray, enter into your private room, and shut your door and pray to your Father who is in secret; and your Father who sees in secret will repay you.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 516, ref: "Daniel 6:10	Now", verse: "when Daniel came to know that the writing had been signed, he went to his house (in his upper room he had windows open toward Jerusalem) and three times daily he knelt on his knees and prayed and gave thanks before his God, because he had always done so previously.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 517, ref: "Matthew 18:20	For", verse: "where there are two or three gathered into My name, there am I in their midst.", cat: "Verses::Life-Practices::Prayer Verses::Life-Practices::Meeting Verses::Service::Vital-Groups"
},
{
	id: 518, ref: "Mark 11:23	Truly", verse: "I say to you that whoever says to this mountain, Be taken up and cast into the sea, and does not doubt in his heart, but believes that what he says happens, he will have it.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 519, ref: "Mark 11:24	For", verse: "this reason I say to you, All things that you pray and ask, believe that you have received them, and you will have them.", cat: "Verses::Life-Practices::Prayer Verses::Life-Practices::Living-by-Faith"
},
{
	id: 520, ref: "Acts 1:14	These", verse: "all continued steadfastly with one accord in prayer, together with the women and Mary the mother of Jesus, and with His brothers.", cat: "Verses::Life-Practices::Prayer Verses::Life-Practices::Meeting Verses::Service::One-Accord"
},
{
	id: 521, ref: "Acts 6:4	But", verse: "we will continue steadfastly in prayer and in the ministry of the word.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 522, ref: "Colossians 4:2	Persevere", verse: "in prayer, watching in it with thanksgiving,", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 523, ref: "Matthew 17:21	But", verse: "this kind does not go out except by prayer and fasting.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 524, ref: "Matthew 26:41	Watch", verse: "and pray that you may not enter into temptation. The spirit is willing, but the flesh is weak.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 525, ref: "Isaiah 62:6	Upon", verse: "your walls, O Jerusalem, I have appointed watchmen; All day and all night They will never keep silent. You who remind Jehovah, Do not be dumb;", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 526, ref: "Ephesians 6:19	And", verse: "for me, that utterance may be given to me in the opening of my mouth, to make known in boldness the mystery of the gospel,", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 527, ref: "Colossians 1:9	Therefore", verse: "we also, since the day we heard of it, do not cease praying and asking on your behalf that you may be filled with the full knowledge of His will in all spiritual wisdom and understanding,", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 528, ref: "Revelation 22:20	He", verse: "who testifies these things says, Yes, I come quickly. Amen. Come, Lord Jesus!", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 529, ref: "Matthew 9:37	Then", verse: "He said to His disciples, The harvest is great, but the workers few;", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 530, ref: "Matthew 9:38	Therefore", verse: "beseech the Lord of the harvest that He would thrust out workers into His harvest.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 531, ref: "Ezekiel 36:37	Thus", verse: "says the Lord Jehovah, Moreover for this I will be inquired of by the house of Israel to do it for them; I will increase them with men like a flock.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 532, ref: "Isaiah 45:11	Thus", verse: "says Jehovah, The Holy One of Israel and the One who formed him, Ask Me about the things to come concerning My sons, And concerning the work of My hands, command Me.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 533, ref: "Matthew 7:7	Ask", verse: "and it shall be given to you; seek and you shall find; knock and it shall be opened to you.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 534, ref: "John 15:7	If", verse: "you abide in Me and My words abide in you, ask whatever you will, and it shall be done for you.", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 535, ref: "Ephesians 3:20	But", verse: "to Him who is able to do superabundantly above all that we ask or think, according to the power which operates in us,", cat: "Verses::Life-Practices::Prayer"
},
{
	id: 536, ref: "Ephesians 6:17	And", verse: "receive the helmet of salvation and the sword of the Spirit, which Spirit is the word of God,", cat: "Verses::Life-Practices::Pray-reading Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 537, ref: "Jeremiah 15:16	Your", verse: "words were found and I ate them, And Your word became to me The gladness and joy of my heart, For I am called by Your name, O Jehovah, God of hosts.", cat: "Verses::Life-Practices::Pray-reading"
},
{
	id: 538, ref: "Psalms 34:8	Taste", verse: "and see that Jehovah is good; Blessed is the man who takes refuge in Him.", cat: "Verses::Life-Practices::Pray-reading"
},
{
	id: 539, ref: "Ezekiel 3:1	Then", verse: "He said to me, Son of man, eat what you find; eat this scroll, and go, speak to the house of Israel.", cat: "Verses::Life-Practices::Pray-reading"
},
{
	id: 540, ref: "Psalms 119:130	The", verse: "opening of Your words gives light, Imparting understanding to the simple.", cat: "Verses::Life-Practices::Pray-reading"
},
{
	id: 541, ref: "Colossians 3:16	Let", verse: "the word of Christ dwell in you richly in all wisdom, teaching and admonishing one another with psalms and hymns and spiritual songs, singing with grace in your hearts to God.", cat: "Verses::Life-Practices::Pray-reading"
},
{
	id: 542, ref: "2 Timothy 3:15", verse: "And that from a babe you have known the sacred writings, which are able to make you wise unto salvation through the faith which is in Christ Jesus.", cat: "Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 543, ref: "Acts 17:11	Now", verse: "these people were more noble than those in Thessalonica, for they received the word with all eagerness, examining the Scriptures daily to see whether these things were so.", cat: "Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 544, ref: "2 Peter 1:20", verse: "Knowing this first, that no prophecy of Scripture is of one’s own interpretation;", cat: "Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 545, ref: "Isaiah 28:13	Therefore", verse: "Jehovah’s word to them will be: Rule upon rule, rule upon rule; Line upon line, line upon line; Here a little, there a little; That they may go and stumble backward, And be broken, snared, and taken.", cat: "Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 546, ref: "2 Corinthians 3:16", verse: "But whenever their heart turns to the Lord, the veil is taken away.", cat: "Verses::Life-Practices::Reading-the-Bible Verses::Life-Practices::Loving-the-Lord"
},
{
	id: 547, ref: "Psalms 119:97	O", verse: ", how I love Your law! All day long it is my musing.", cat: "Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 548, ref: "Hebrews 4:2	For", verse: "indeed we have had the good news announced to us, even as they also; but the word heard did not profit them, not being mixed together with faith in those who heard.", cat: "Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 549, ref: "Psalms 119:11	In", verse: "my heart I have treasured up Your word That I might not sin against You.", cat: "Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 550, ref: "Psalms 119:162	I", verse: "rejoice at Your word, Like one who finds great spoil.", cat: "Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 551, ref: "Luke 24:45	Then", verse: "He opened their mind to understand the Scriptures;", cat: "Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 552, ref: "Nehemiah 8:13	And", verse: "on the second day the heads of fathers’ houses of all the people, the priests, and the Levites were gathered to Ezra the scribe, that is, in order to gain insight into the words of the law.", cat: "Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 553, ref: "1 Corinthians 2:13", verse: "Which things also we speak, not in words taught by human wisdom but in words taught by the Spirit, interpreting spiritual things with spiritual words.", cat: "Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 554, ref: "2 Peter 1:19", verse: "And we have the prophetic word made more firm, to which you do well to give heed as to a lamp shining in a dark place, until the day dawns and the morning star rises in your hearts;", cat: "Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 555, ref: "1 Timothy 5:17", verse: "Let the elders who take the lead well be counted worthy of double honor, especially those who labor in word and teaching.", cat: "Verses::Life-Practices::Reading-the-Bible"
},
{
	id: 556, ref: "Psalms 119:147	I", verse: "anticipated the dawn and cried out; I hoped in Your words.", cat: "Verses::Life-Practices::Morning-Revival"
},
{
	id: 557, ref: "Psalms 57:8	Awak", verse: ", my glory; Awake, O harp and lyre! I will awaken the dawn.", cat: "Verses::Life-Practices::Morning-Revival"
},
{
	id: 558, ref: "Lamentations 3:22	It", verse: "is Jehovah’s lovingkindness that we are not consumed, For His compassions do not fail;", cat: "Verses::Life-Practices::Morning-Revival"
},
{
	id: 559, ref: "Lamentations 3:23	They", verse: "are new every morning; Great is Your faithfulness.", cat: "Verses::Life-Practices::Morning-Revival"
},
{
	id: 560, ref: "Psalms 88:13	But", verse: "I, O Jehovah, have cried out to You; And in the morning my prayer comes before You.", cat: "Verses::Life-Practices::Morning-Revival"
},
{
	id: 561, ref: "Mark 1:35	And", verse: "rising very early in the morning, while it was still night, He went out and went away to a deserted place, and there He prayed.", cat: "Verses::Life-Practices::Morning-Revival"
},
{
	id: 562, ref: "Exodus 16:21	And", verse: "they gathered it morning by morning, each one according to his eating; and when the sun became hot, it melted.", cat: "Verses::Life-Practices::Morning-Revival"
},
{
	id: 563, ref: "Psalms 63:1	O", verse: "God, You are my God; I seek You diligently. My soul thirsts for You, My flesh faints in longing for You, In a dry and weary land without water.", cat: "Verses::Life-Practices::Morning-Revival"
},
{
	id: 564, ref: "2 Corinthians 4:16", verse: "Therefore we do not lose heart; but though our outer man is decaying, yet our inner man is being renewed day by day.", cat: "Verses::Life-Practices::Morning-Revival Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 565, ref: "Proverbs 4:18	But", verse: "the path of the righteous is like the light of dawn, Which shines brighter and brighter until the full day.", cat: "Verses::Life-Practices::Morning-Revival"
},
{
	id: 566, ref: "Judges 5:31	May", verse: "all Your enemies so perish, O Jehovah. But may those who love Him be like the sun When it rises in its might. And the land had rest forty years.", cat: "Verses::Life-Practices::Morning-Revival"
},
{
	id: 567, ref: "Hebrews 10:25	Not", verse: "abandoning our own assembling together, as the custom with some is, but exhorting one another; and so much the more as you see the day drawing near.", cat: "Verses::Life-Practices::Meeting Verses::Service::God-Ordained-Way"
},
{
	id: 568, ref: "John 10:16	And", verse: "I have other sheep, which are not of this fold; I must lead them also, and they shall hear My voice, and there shall be one flock, one Shepherd.", cat: "Verses::Life-Practices::Meeting"
},
{
	id: 569, ref: "1 Corinthians 14:23", verse: "If therefore the whole church comes together in one place, and all speak in tongues, and some unlearned in tongues or unbelievers enter, will they not say that you are insane?", cat: "Verses::Life-Practices::Meeting"
},
{
	id: 570, ref: "Acts 2:46	And", verse: "day by day, continuing steadfastly with one accord in the temple and breaking bread from house to house, they partook of their food with exultation and simplicity of heart,", cat: "Verses::Life-Practices::Lords-Table-Meeting Verses::Service::Vital-Groups"
},
{
	id: 571, ref: "Luke 22:19	And", verse: "He took a loaf and gave thanks, and He broke it and gave it to them, saying, This is My body which is being given for you; do this in remembrance of Me.", cat: "Verses::Life-Practices::Lords-Table-Meeting"
},
{
	id: 572, ref: "Luke 22:20	And", verse: "similarly the cup after they had dined, saying, This cup is the new covenant established in My blood, which is being poured out for you.", cat: "Verses::Life-Practices::Lords-Table-Meeting"
},
{
	id: 573, ref: "1 Corinthians 11:26", verse: "For as often as you eat this bread and drink the cup, you declare the Lord’s death until He comes.", cat: "Verses::Life-Practices::Lords-Table-Meeting"
},
{
	id: 574, ref: "Matthew 26:29	But", verse: "I say to you, I shall by no means drink of this product of the vine from now on until that day when I drink it new with you in the kingdom of My Father.", cat: "Verses::Life-Practices::Lords-Table-Meeting"
},
{
	id: 575, ref: "1 Corinthians 5:8", verse: "So then let us keep the feast, not with old leaven, neither with the leaven of malice and evil, but with the unleavened bread of sincerity and truth.", cat: "Verses::Life-Practices::Lords-Table-Meeting"
},
{
	id: 576, ref: "Ephesians 5:18	And", verse: "do not be drunk with wine, in which is dissoluteness, but be filled in spirit,", cat: "Verses::Life-Practices::Singing-and-Praising"
},
{
	id: 577, ref: "Ephesians 5:19	Speaking", verse: "to one another in psalms and hymns and spiritual songs, singing and psalming with your heart to the Lord,", cat: "Verses::Life-Practices::Singing-and-Praising"
},
{
	id: 578, ref: "Hebrews 13:15	Through", verse: "Him then let us offer up a sacrifice of praise continually to God, that is, the fruit of lips confessing His name.", cat: "Verses::Life-Practices::Singing-and-Praising"
},
{
	id: 579, ref: "Acts 16:25	And", verse: "about midnight Paul and Silas, while praying, sang hymns of praise to God; and the prisoners were listening to them.", cat: "Verses::Life-Practices::Singing-and-Praising"
},
{
	id: 580, ref: "Isaiah 35:10	And", verse: "the ransomed of Jehovah will return And will come to Zion with a ringing shout, And eternal joy will be upon their heads. They will lay hold on gladness and joy, And sorrow and sighing will flee away.", cat: "Verses::Life-Practices::Singing-and-Praising"
},
{
	id: 581, ref: "Matthew 26:30	And", verse: "after singing a hymn, they went out to the Mount of Olives.", cat: "Verses::Life-Practices::Singing-and-Praising"
},
{
	id: 582, ref: "Psalms 45:1	My", verse: "heart overflows with a good matter; I speak what I have composed concerning the King. My tongue is the pen of a ready writer.", cat: "Verses::Life-Practices::Singing-and-Praising Verses::Life-Practices::Prophesying"
},
{
	id: 583, ref: "Matthew 21:16	And", verse: "they said to Him, Do You hear what these are saying? And Jesus said to them, Yes. Have you never read, “Out of the mouth of infants and sucklings You have perfected praise”?", cat: "Verses::Life-Practices::Singing-and-Praising"
},
{
	id: 584, ref: "Psalms 119:164	Seven", verse: "times a day I praise You For Your righteous ordinances.", cat: "Verses::Life-Practices::Singing-and-Praising"
},
{
	id: 585, ref: "1 Corinthians 14:31", verse: "For you can all prophesy one by one that all may learn and all may be encouraged.", cat: "Verses::Life-Practices::Prophesying Verses::Service::Universal-Priesthood"
},
{
	id: 586, ref: "Numbers 11:29	But", verse: "Moses said to him, Are you jealous for my sake? Oh that all Jehovah’s people were prophets, that Jehovah would put His Spirit upon them!", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 587, ref: "1 Corinthians 14:1", verse: "Pursue love, and desire earnestly spiritual gifts, but especially that you may prophesy.", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 588, ref: "1 Corinthians 14:3", verse: "But he who prophesies speaks building up and encouragement and consolation to men.", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 589, ref: "1 Thessalonians 5:20", verse: "Do not despise prophecies,", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 590, ref: "1 Corinthians 14:24", verse: "But if all prophesy and some unbeliever or unlearned person enters, he is convicted by all, he is examined by all;", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 591, ref: "1 Corinthians 14:25", verse: "The secrets of his heart become manifest; and so falling on his face, he will worship God, declaring that indeed God is among you.", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 592, ref: "2 Samuel 23:2", verse: "The Spirit of Jehovah spoke through me, And His word was on my tongue.", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 593, ref: "John 3:34	For", verse: "He whom God has sent speaks the words of God, for He gives the Spirit not by measure.", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 594, ref: "Acts 5:20	Go", verse: "and stand in the temple and speak to the people all the words of this life.", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 595, ref: "2 Corinthians 4:13", verse: "And having the same spirit of faith according to that which is written, “I believed, therefore I spoke,” we also believe, therefore we also speak,", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 596, ref: "1 Corinthians 14:32", verse: "And the spirits of prophets are subject to prophets;", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 597, ref: "2 Timothy 4:2", verse: "Proclaim the word; be ready in season and out of season; convict, rebuke, exhort with all long-suffering and teaching.", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 598, ref: "Ezekiel 37:10	So", verse: "I prophesied as He commanded me, and the breath came into them; and they lived and stood up upon their feet, an exceedingly great army.", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 599, ref: "Acts 19:20	Thu", verse: ", the word of the Lord grew mightily and prevailed.", cat: "Verses::Life-Practices::Prophesying"
},
{
	id: 600, ref: "Mark 12:30	And", verse: "you shall love the Lord your God from your whole heart and from your whole soul and from your whole mind and from your whole strength.”", cat: "Verses::Life-Practices::Loving-the-Lord"
},
{
	id: 601, ref: "Psalms 73:25	Whom", verse: "do I have in heaven but You? And besides You there is nothing I desire on earth.", cat: "Verses::Life-Practices::Loving-the-Lord"
},
{
	id: 602, ref: "Revelation 2:4	But", verse: "I have one thing against you, that you have left your first love.", cat: "Verses::Life-Practices::Loving-the-Lord Verses::Service::Vital-Groups"
},
{
	id: 603, ref: "Romans 8:28	And", verse: "we know that all things work together for good to those who love God, to those who are called according to His purpose.", cat: "Verses::Life-Practices::Loving-the-Lord Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 604, ref: "1 Corinthians 2:9", verse: "But as it is written, “Things which eye has not seen and ear has not heard and which have not come up in man’s heart; things which God has prepared for those who love Him.”", cat: "Verses::Life-Practices::Loving-the-Lord"
},
{
	id: 605, ref: "1 John 4:19", verse: "We love because He first loved us.", cat: "Verses::Life-Practices::Loving-the-Lord"
},
{
	id: 606, ref: "2 Corinthians 5:14", verse: "For the love of Christ constrains us because we have judged this, that One died for all, therefore all died;", cat: "Verses::Life-Practices::Loving-the-Lord"
},
{
	id: 607, ref: "1 Peter 1:8", verse: "Whom having not seen, you love; into whom though not seeing Him at present, yet believing, you exult with joy that is unspeakable and full of glory,", cat: "Verses::Life-Practices::Loving-the-Lord"
},
{
	id: 608, ref: "Matthew 26:7	A", verse: "woman came to Him, having an alabaster flask of ointment of great value, and she poured it on His head as He reclined at table .", cat: "Verses::Life-Practices::Loving-the-Lord"
},
{
	id: 609, ref: "1 Corinthians 8:3", verse: "But if anyone loves God, this one is known by Him.", cat: "Verses::Life-Practices::Loving-the-Lord"
},
{
	id: 610, ref: "1 John 4:21", verse: "And this commandment we have from Him, that he who loves God love his brother also.", cat: "Verses::Life-Practices::Loving-the-Lord"
},
{
	id: 611, ref: "John 14:21	He", verse: "who has My commandments and keeps them, he is the one who loves Me; and he who loves Me will be loved by My Father, and I will love him and will manifest Myself to him.", cat: "Verses::Life-Practices::Loving-the-Lord"
},
{
	id: 612, ref: "John 21:16	He", verse: "said to him again a second time, Simon, son of John, do you love Me? He said to Him, Yes, Lord, You know that I love You. He said to him, Shepherd My sheep.", cat: "Verses::Life-Practices::Loving-the-Lord Verses::Service::God-Ordained-Way"
},
{
	id: 613, ref: "Romans 8:35	Who", verse: "shall separate us from the love of Christ? Shall tribulation or anguish or persecution or famine or nakedness or peril or sword?", cat: "Verses::Life-Practices::Loving-the-Lord Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Reigning-in-Life"
},
{
	id: 614, ref: "Romans 8:37	But", verse: "in all these things we more than conquer through Him who loved us.", cat: "Verses::Life-Practices::Loving-the-Lord Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Reigning-in-Life"
},
{
	id: 615, ref: "Romans 12:11	Do", verse: "not be slothful in zeal, but be burning in spirit, serving the Lord.", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit Verses::Life-Practices::Service"
},
{
	id: 616, ref: "1 Thessalonians 5:19", verse: "Do not quench the Spirit;", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit"
},
{
	id: 617, ref: "2 Timothy 1:6", verse: "For which cause I remind you to fan into flame the gift of God, which is in you through the laying on of my hands.", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit"
},
{
	id: 618, ref: "2 Timothy 1:7", verse: "For God has not given us a spirit of cowardice, but of power and of love and of sobermindedness.", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit"
},
{
	id: 619, ref: "Romans 1:9	For", verse: "God is my witness, whom I serve in my spirit in the gospel of His Son, how unceasingly I make mention of you always in my prayers,", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit Verses::Life-Practices::Service Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 620, ref: "Philippians 3:3	For", verse: "we are the circumcision, the ones who serve by the Spirit of God and boast in Christ Jesus and have no confidence in the flesh,", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit"
},
{
	id: 621, ref: "Galatians 5:16	But", verse: "I say, Walk by the Spirit and you shall by no means fulfill the lust of the flesh.", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit"
},
{
	id: 622, ref: "Romans 7:6	But", verse: "now we have been discharged from the law, having died to that in which we were held, so that we serve in newness of spirit and not in oldness of letter.", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit"
},
{
	id: 623, ref: "Proverbs 20:27	The", verse: "spirit of man is the lamp of Jehovah, Searching all the innermost parts of the inner being.", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit"
},
{
	id: 624, ref: "2 Timothy 4:22", verse: "The Lord be with your spirit. Grace be with you.", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 625, ref: "Ezra 1:5	Then", verse: "the heads of the fathers’ houses of Judah and Benjamin and the priests and the Levites rose up, even everyone whose spirit God had stirred up to go up to build the house of Jehovah, which is in Jerusalem.", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit"
},
{
	id: 626, ref: "Galatians 6:8	For", verse: "he who sows unto his own flesh will reap corruption of the flesh, but he who sows unto the Spirit will of the Spirit reap eternal life.", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit"
},
{
	id: 627, ref: "Galatians 5:22	But", verse: "the fruit of the Spirit is love, joy, peace, long-suffering, kindness, goodness, faithfulness,", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit"
},
{
	id: 628, ref: "Galatians 5:23	Meeknes", verse: ", self-control; against such things there is no law.", cat: "Verses::Life-Practices::Exercising-and-Serving-in-the-Spirit"
},
{
	id: 629, ref: "Hebrews 8:12	For", verse: "I will be propitious to their unrighteousnesses, and their sins I shall by no means remember anymore.”", cat: "Verses::Life-Practices::Confession-and-Forgiveness Verses::Other-Crucial-Matters::New-Testament-Ministry"
},
{
	id: 630, ref: "Psalms 51:2	Wash", verse: "me thoroughly from my iniquity, And from my sin cleanse me.", cat: "Verses::Life-Practices::Confession-and-Forgiveness"
},
{
	id: 631, ref: "Proverbs 28:13	He", verse: "who covers his transgressions will not prosper, But whoever confesses and forsakes them will obtain mercy.", cat: "Verses::Life-Practices::Confession-and-Forgiveness"
},
{
	id: 632, ref: "Luke 7:47	For", verse: "this reason I say to you, Her sins which are many are forgiven, because she loved much; but to whom little is forgiven, he loves little.", cat: "Verses::Life-Practices::Confession-and-Forgiveness"
},
{
	id: 633, ref: "Matthew 24:14	And", verse: "this gospel of the kingdom will be preached in the whole inhabited earth for a testimony to all the nations, and then the end will come.", cat: "Verses::Life-Practices::Preaching-the-Gospel"
},
{
	id: 634, ref: "John 15:16	You", verse: "did not choose Me, but I chose you, and I set you that you should go forth and bear fruit and that your fruit should remain, that whatever you ask the Father in My name, He may give you.", cat: "Verses::Life-Practices::Preaching-the-Gospel Verses::Service::God-Ordained-Way"
},
{
	id: 635, ref: "Romans 16:25	Now", verse: "to Him who is able to establish you according to my gospel, that is, the proclamation of Jesus Christ, according to the revelation of the mystery, which has been kept in silence in the times of the ages", cat: "Verses::Life-Practices::Preaching-the-Gospel"
},
{
	id: 636, ref: "Romans 1:16	For", verse: "I am not ashamed of the gospel, for it is the power of God unto salvation to everyone who believes, both to Jew first and to Greek.", cat: "Verses::Life-Practices::Preaching-the-Gospel"
},
{
	id: 637, ref: "1 Corinthians 9:16", verse: "For if I preach the gospel, I have no boast, for necessity is laid upon me; for woe to me if I do not preach the gospel.", cat: "Verses::Life-Practices::Preaching-the-Gospel"
},
{
	id: 638, ref: "1 Corinthians 9:22", verse: "To the weak I became weak that I might gain the weak. To all men I have become all things that I might by all means save some.", cat: "Verses::Life-Practices::Preaching-the-Gospel Verses::Other-Crucial-Matters::Character"
},
{
	id: 639, ref: "1 Corinthians 1:23", verse: "But we preach Christ crucified, to Jews a stumbling block, and to Gentiles foolishness,", cat: "Verses::Life-Practices::Preaching-the-Gospel"
},
{
	id: 640, ref: "Luke 4:18	", verse: "The Spirit of the Lord is upon Me, because He has anointed Me to announce the gospel to the poor; He has sent Me to proclaim release to the captives, and recovery of sight to the blind, to send away in release those who are oppressed,", cat: "Verses::Life-Practices::Preaching-the-Gospel"
},
{
	id: 641, ref: "Romans 10:14	How", verse: "then shall they call upon Him into whom they have not believed? And how shall they believe into Him of whom they have not heard? And how shall they hear without one who proclaims Him?", cat: "Verses::Life-Practices::Preaching-the-Gospel"
},
{
	id: 642, ref: "Romans 10:15	And", verse: "how shall they proclaim Him unless they are sent? As it is written, “How beautiful are the feet of those who announce the news of good things!”", cat: "Verses::Life-Practices::Preaching-the-Gospel"
},
{
	id: 643, ref: "Romans 1:5	Through", verse: "whom we have received grace and apostleship unto the obedience of faith among all the Gentiles on behalf of His name,", cat: "Verses::Life-Practices::Preaching-the-Gospel"
},
{
	id: 644, ref: "Philippians 1:12	Now", verse: "I want you to know, brothers, that the things concerning me have turned out rather to the advancement of the gospel,", cat: "Verses::Life-Practices::Preaching-the-Gospel"
},
{
	id: 645, ref: "Philippians 1:7	Even", verse: "as it is right for me to think this concerning you all because you have me in your heart, since both in my bonds and in the defense and confirmation of the gospel you are all fellow partakers with me of grace.", cat: "Verses::Life-Practices::Preaching-the-Gospel"
},
{
	id: 646, ref: "2 Timothy 1:8", verse: "Therefore do not be ashamed of the testimony of our Lord nor of me His prisoner; but suffer evil with the gospel according to the power of God;", cat: "Verses::Life-Practices::Preaching-the-Gospel"
},
{
	id: 647, ref: "Acts 20:24	But", verse: "I consider my life of no account as if precious to myself, in order that I may finish my course and the ministry which I have received from the Lord Jesus to solemnly testify of the gospel of the grace of God.", cat: "Verses::Life-Practices::Preaching-the-Gospel Verses::Other-Crucial-Matters::New-Testament-Ministry"
},
{
	id: 648, ref: "Romans 10:9	That", verse: "if you confess with your mouth Jesus as Lord and believe in your heart that God has raised Him from the dead, you will be saved;", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 649, ref: "Romans 10:10	For", verse: "with the heart there is believing unto righteousness, and with the mouth there is confession unto salvation.", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 650, ref: "Romans 9:23	In", verse: "order that He might make known the riches of His glory upon vessels of mercy, which He had before prepared unto glory,", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 651, ref: "1 Thessalonians 5:23", verse: "And the God of peace Himself sanctify you wholly, and may your spirit and soul and body be preserved complete, without blame, at the coming of our Lord Jesus Christ.", cat: "Verses::Life-Practices::Gospel Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 652, ref: "Zechariah 12:1	The", verse: "burden of the word of Jehovah concerning Israel. Thus declares Jehovah, who stretches forth the heavens and lays the foundations of the earth and forms the spirit of man within him,", cat: "Verses::Life-Practices::Gospel Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 653, ref: "Isaiah 66:1	Thus", verse: "says Jehovah, Heaven is My throne, And the earth the footstool for My feet. Where then is the house that you will build for Me, And where is the place of My rest?", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 654, ref: "Isaiah 66:2	For", verse: "all these things My hand has made, And so all these things have come into being, declares Jehovah. But to this kind of man will I look, to him who is poor And of a contrite spirit, and who trembles at My word.", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 655, ref: "Ecclesiastes 3:11	He", verse: "has made everything beautiful in its own time; also He has put eternity in their heart, yet so that man does not find out what God has done from the beginning to the end.", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 656, ref: "Acts 17:26	And", verse: "He made from one every nation of men to dwell on all the face of the earth, determining beforehand their appointed seasons and the boundaries of their dwelling,", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 657, ref: "Matthew 16:26	For", verse: "what shall a man be profited if he gains the whole world, but forfeits his soul-life? Or what shall a man give in exchange for his soul-life?", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 658, ref: "Romans 7:20	But", verse: "if what I do not will, this I do, it is no longer I that work it out but sin that dwells in me.", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 659, ref: "Hebrews 9:27	And", verse: "inasmuch as it is reserved for men to die once, and after this comes judgment,", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 660, ref: "Ephesians 2:4	But", verse: "God, being rich in mercy, because of His great love with which He loved us,", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 661, ref: "Jeremiah 17:9	The", verse: "heart is deceitful above all things, And it is incurable; Who can know it?", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 662, ref: "2 Corinthians 10:5", verse: "As we overthrow reasonings and every high thing rising up against the knowledge of God, and take captive every thought unto the obedience of Christ.", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 663, ref: "Psalms 90:10	The", verse: "days of our years are seventy years, Or, if because of strength, eighty years; But their pride is labor and sorrow, For it is soon gone, and we fly away.", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 664, ref: "Romans 5:8	But", verse: "God commends His own love to us in that while we were yet sinners, Christ died for us.", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 665, ref: "Romans 8:30	And", verse: "those whom He predestinated, these He also called; and those whom He called, these He also justified; and those whom He justified, these He also glorified.", cat: "Verses::Life-Practices::Gospel Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 666, ref: "Deuteronomy 30:19	I", verse: "call heaven and earth to witness against you today: I have set before you life and death, blessing and curse; therefore choose life that you and your seed may live,", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 667, ref: "Acts 3:19	Repent", verse: "therefore and turn, that your sins may be wiped away,", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 668, ref: "Luke 13:3	N", verse: ", I tell you; but unless you repent, you shall all likewise perish.", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 669, ref: "Acts 4:12	And", verse: "there is salvation in no other, for neither is there another name under heaven given among men in which we must be saved.", cat: "Verses::Life-Practices::Gospel"
},
{
	id: 670, ref: "Romans 12:1	I", verse: "exhort you therefore, brothers, through the compassions of God to present your bodies a living sacrifice, holy, well pleasing to God, which is your reasonable service.", cat: "Verses::Life-Practices::Consecration Verses::Life-Practices::Service Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 671, ref: "1 Corinthians 6:19", verse: "Or do you not know that your body is a temple of the Holy Spirit within you, whom you have from God, and you are not your own?", cat: "Verses::Life-Practices::Consecration"
},
{
	id: 672, ref: "1 Corinthians 6:20", verse: "For you have been bought with a price. So then glorify God in your body.", cat: "Verses::Life-Practices::Consecration"
},
{
	id: 673, ref: "Exodus 21:5	But", verse: "if the servant plainly says, I love my master, my wife, and my children; I will not go out free;", cat: "Verses::Life-Practices::Consecration Verses::Life-Practices::Service"
},
{
	id: 674, ref: "2 Corinthians 5:15", verse: "And He died for all that those who live may no longer live to themselves but to Him who died for them and has been raised.", cat: "Verses::Life-Practices::Consecration"
},
{
	id: 675, ref: "Philippians 2:17	But", verse: "even if I am being poured out as a drink offering upon the sacrifice and service of your faith, I rejoice, and I rejoice together with you all.", cat: "Verses::Life-Practices::Consecration"
},
{
	id: 676, ref: "Leviticus 1:9	But", verse: "its inward parts and its legs he shall wash with water. Then the priest shall burn the whole on the altar, as a burnt offering, an offering by fire, a satisfying fragrance to Jehovah.", cat: "Verses::Life-Practices::Consecration"
},
{
	id: 677, ref: "Psalms 110:3	Your", verse: "people will offer themselves willingly In the day of Your warfare, In the splendor of their consecration. Your young men will be to You Like the dew from the womb of the dawn.", cat: "Verses::Life-Practices::Consecration"
},
{
	id: 678, ref: "Romans 6:13	Neither", verse: "present your members as weapons of unrighteousness to sin, but present yourselves to God as alive from the dead, and your members as weapons of righteousness to God.", cat: "Verses::Life-Practices::Consecration"
},
{
	id: 679, ref: "Luke 14:26	If", verse: "anyone comes to Me and does not hate his own father and mother and wife and children and brothers and sisters, and moreover, even his own soul-life, he cannot be My disciple.", cat: "Verses::Life-Practices::Consecration"
},
{
	id: 680, ref: "Mark 14:6	But", verse: "Jesus said, Leave her alone. Why do you trouble her? She has done a noble deed on Me.", cat: "Verses::Life-Practices::Consecration"
},
{
	id: 681, ref: "Matthew 6:24	No", verse: "one can serve two masters, for either he will hate the one and love the other, or he will hold to one and despise the other. You cannot serve God and mammon.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 682, ref: "Luke 6:38	Giv", verse: ", and it will be given to you; a good measure, pressed down, shaken together, and running over, they will give into your bosom. For with what measure you measure, it shall be measured to you in return.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 683, ref: "Matthew 6:3	But", verse: "you, when you give alms, do not let your left hand know what your right hand is doing,", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 684, ref: "Matthew 6:4	So", verse: "that your alms may be in secret; and your Father who sees in secret will repay you.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 685, ref: "Malachi 3:10	Bring", verse: "the whole tithe to the storehouse that there may be food in My house; and prove Me, if you will, by this, says Jehovah of hosts, whether I will open to you the windows of heaven and pour out blessing for you until there is no room for it.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 686, ref: "Luke 19:8	And", verse: "Zaccheus stood and said to the Lord, Behold, the half of my possessions, Lord, I give to the poor, and if I have taken anything from anyone by false accusation, I restore four times as much.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 687, ref: "Matthew 6:19	Do", verse: "not store up for yourselves treasures on the earth, where moth and rust consume and where thieves dig through and steal.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 688, ref: "Matthew 6:20	But", verse: "store up for yourselves treasures in heaven, where neither moth nor rust consumes and where thieves do not dig through nor steal.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 689, ref: "Luke 12:34	For", verse: "where your treasure is, there also your heart will be.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 690, ref: "Luke 21:4	For", verse: "all these out of their surplus have cast in something into the gifts, but she out of her lack has cast in all the living that she had.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 691, ref: "1 Timothy 6:17", verse: "Charge those who are rich in the present age not to be high-minded, nor to set their hope on the uncertainty of riches but on God, who affords us all things richly for our enjoyment;", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 692, ref: "Acts 20:35	In", verse: "all things I have shown you by example that toiling in this way we ought to support the weak and to remember the words of the Lord Jesus, that He Himself said, It is more blessed to give than to receive.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 693, ref: "2 Corinthians 9:6", verse: "But take note of this: He who sows sparingly shall also sparingly reap; and he who sows with blessings shall also with blessings reap;", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 694, ref: "2 Corinthians 9:7", verse: "Each one as he has purposed in his heart, not out of sorrow or out of necessity, for God loves a cheerful giver.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 695, ref: "2 Corinthians 8:15", verse: "As it is written, “He who gathered much had no excess, and he who gathered little had no lack.”", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 696, ref: "Genesis 28:22	And", verse: "this stone, which I have set up as a pillar, will be God’s house; and of all that You give me I will surely give one tenth to You.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 697, ref: "Matthew 22:21	They", verse: "said, Caesar’s. Then He said to them, Render then the things that are Caesar’s to Caesar and the things that are God’s to God.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 698, ref: "Philippians 4:18	But", verse: "I have received in full all things and abound; I have been filled, receiving from Epaphroditus the things from you, a sweet-smelling savor, an acceptable sacrifice, well pleasing to God.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 699, ref: "Philippians 4:19	And", verse: "my God will fill your every need according to His riches, in glory, in Christ Jesus.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 700, ref: "2 Corinthians 8:9", verse: "For you know the grace of our Lord Jesus Christ, that though He was rich, for your sakes He became poor in order that you, because of His poverty, might become rich.", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 701, ref: "2 Corinthians 8:4", verse: "With much entreaty they besought of us the grace and the fellowship of the ministry to the saints;", cat: "Verses::Life-Practices::Mammon-and-Material-Offering"
},
{
	id: 702, ref: "Romans 1:17	For", verse: "the righteousness of God is revealed in it out of faith to faith, as it is written, “But the righteous shall have life and live by faith.”", cat: "Verses::Life-Practices::Living-by-Faith Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Judicial-Redemption"
},
{
	id: 703, ref: "2 Corinthians 5:7", verse: "For we walk by faith, not by appearance", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 704, ref: "Hebrews 11:1	Now", verse: "faith is the substantiation of things hoped for, the conviction of things not seen.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 705, ref: "Hebrews 11:6	But", verse: "without faith it is impossible to be well pleasing to Him, for he who comes forward to God must believe that He is and that He is a rewarder of those who diligently seek Him.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 706, ref: "Hebrews 3:12	Bewar", verse: ", brothers, lest perhaps there be in any one of you an evil heart of unbelief in falling away from the living God.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 707, ref: "Mark 5:36	But", verse: "Jesus, overhearing the word spoken, said to the ruler of the synagogue, Do not be afraid—only believe.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 708, ref: "2 Corinthians 4:17", verse: "For our momentary lightness of affliction works out for us, more and more surpassingly, an eternal weight of glory,", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 709, ref: "2 Corinthians 4:18", verse: "Because we do not regard the things which are seen but the things which are not seen; for the things which are seen are temporary, but the things which are not seen are eternal.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 710, ref: "Mark 9:23	And", verse: "Jesus said to him, You say, If You can. All things are possible to him who believes.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 711, ref: "Matthew 19:26	And", verse: "looking upon them, Jesus said to them, With men this is impossible, but with God all things are possible.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 712, ref: "Jeremiah 32:27	Indee", verse: ", I am Jehovah, the God of all flesh. Is anything too wonderful for Me?", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 713, ref: "Romans 4:3	For", verse: "what does the Scripture say? “And Abraham believed God, and it was accounted to him as righteousness.”", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 714, ref: "Genesis 22:14	And", verse: "Abraham called the name of that place Jehovah-jireh, as it is said to this day, On the mount of Jehovah it will be provided.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 715, ref: "Exodus 6:3	And", verse: "I appeared to Abraham, to Isaac, and to Jacob as the All-sufficient God; but by My name Jehovah I did not make Myself known to them.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 716, ref: "Romans 15:13	Now", verse: "the God of hope fill you with all joy and peace in believing, that you may abound in hope in the power of the Holy Spirit.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 717, ref: "Isaiah 45:15	Surely", verse: "You are a God who hides Himself, O God of Israel, the Savior.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 718, ref: "1 Peter 5:7", verse: "Casting all your anxiety on Him because it matters to Him concerning you.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 719, ref: "1 Corinthians 10:13", verse: "No temptation has taken you except that which is common to man; and God is faithful, who will not allow that you be tempted beyond what you are able, but will, with the temptation, also make the way out, that you may be able to endure it.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 720, ref: "1 Peter 1:7", verse: "So that the proving of your faith, much more precious than of gold which perishes though it is proved by fire, may be found unto praise and glory and honor at the revelation of Jesus Christ;", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 721, ref: "1 Peter 1:9", verse: "Receiving the end of your faith, the salvation of your souls.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 722, ref: "Deuteronomy 33:25	Your", verse: "doorbolts shall be iron and copper; And as your days are, so shall your strength be.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 723, ref: "2 Corinthians 1:20", verse: "For as many promises of God as there are, in Him is the Yes; therefore also through Him is the Amen to God, for glory through us to God.", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 724, ref: "Romans 10:11	For", verse: "the Scripture says, “Everyone who believes on Him shall not be put to shame.”", cat: "Verses::Life-Practices::Living-by-Faith"
},
{
	id: 725, ref: "Galatians 2:19	For", verse: "I through law have died to law that I might live to God.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 726, ref: "1 Peter 2:21", verse: "For to this you were called , because Christ also suffered on your behalf, leaving you a model so that you may follow in His steps;", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 727, ref: "1 Peter 2:23", verse: "Who being reviled did not revile in return; suffering, He did not threaten but kept committing all to Him who judges righteously;", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 728, ref: "John 16:32	Behol", verse: ", an hour is coming, and has come, that you will be scattered each to his own place and will leave Me alone; yet I am not alone, because the Father is with Me.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 729, ref: "John 5:19	Then", verse: "Jesus answered and said to them, Truly, truly, I say to you, The Son can do nothing from Himself except what He sees the Father doing, for whatever that One does, these things the Son also does in like manner.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 730, ref: "John 5:30	I", verse: "can do nothing from Myself; as I hear, I judge, and My judgment is just, because I do not seek My own will but the will of Him who sent Me.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 731, ref: "John 6:38	For", verse: "I have come down from heaven not to do My own will but the will of Him who sent Me.", cat: "Verses::Life-Practices::God-man-Living Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 732, ref: "Luke 10:21	In", verse: "that hour He exulted in the Holy Spirit and said, I extol You, Father, Lord of heaven and earth, because You have hidden these things from the wise and intelligent and have revealed them to babes. Yes, Father, for thus it has been well pleasing in Your sight.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 733, ref: "John 7:18	He", verse: "who speaks from himself seeks his own glory; but He who seeks the glory of Him who sent Him, this One is true, and unrighteousness is not in Him.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 734, ref: "2 Corinthians 5:9", verse: "Therefore also we are determined, whether at home or abroad, to gain the honor of being well pleasing to Him.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 735, ref: "Philippians 3:7	But", verse: "what things were gains to me, these I have counted as loss on account of Christ.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 736, ref: "Philippians 3:8	But", verse: "moreover I also count all things to be loss on account of the excellency of the knowledge of Christ Jesus my Lord, on account of whom I have suffered the loss of all things and count them as refuse that I may gain Christ", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 737, ref: "2 Corinthians 12:9", verse: "And He has said to me, My grace is sufficient for you, for My power is perfected in weakness. Most gladly therefore I will rather boast in my weaknesses that the power of Christ might tabernacle over me.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 738, ref: "Philippians 4:12	I", verse: "know also how to be abased, and I know how to abound; in everything and in all things I have learned the secret both to be filled and to hunger, both to abound and to lack.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 739, ref: "Philippians 4:13	I", verse: "am able to do all things in Him who empowers me.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 740, ref: "John 15:5	I", verse: "am the vine; you are the branches. He who abides in Me and I in him, he bears much fruit; for apart from Me you can do nothing.", cat: "Verses::Life-Practices::God-man-Living Verses::Service::Vital-Groups Verses::High-Peak-of-the-Divine-Revelation::Deification Verses::High-Peak-of-the-Divine-Revelation::Divine-and-Mystical-Realm Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 741, ref: "Matthew 11:28	Come", verse: "to Me all who toil and are burdened, and I will give you rest.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 742, ref: "Matthew 11:29	Take", verse: "My yoke upon you and learn from Me, for I am meek and lowly in heart, and you will find rest for your souls.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 743, ref: "Luke 9:24	For", verse: "whoever wants to save his soul-life shall lose it; but whoever loses his soul-life for My sake, this one shall save it.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 744, ref: "John 14:30	I", verse: "will no longer speak much with you, for the ruler of the world is coming, and in Me he has nothing;", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 745, ref: "1 John 4:7", verse: "Beloved, let us love one another, because love is of God, and everyone who loves has been begotten of God and knows God.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 746, ref: "Ephesians 5:8	For", verse: "you were once darkness but are now light in the Lord; walk as children of light", cat: "Verses::Life-Practices::God-man-Living Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 747, ref: "Philippians 4:5	Let", verse: "your forbearance be known to all men. The Lord is near.", cat: "Verses::Life-Practices::God-man-Living"
},
{
	id: 748, ref: "Matthew 20:28	Just", verse: "as the Son of Man did not come to be served, but to serve and to give His life as a ransom for many.", cat: "Verses::Service"
},
{
	id: 749, ref: "Acts 13:36	Now", verse: "David, having served his own generation by the counsel of God, did indeed fall asleep and was buried with his fathers and saw corruption;", cat: "Verses::Service"
},
{
	id: 750, ref: "John 12:26	If", verse: "anyone serves Me, let him follow Me; and where I am, there also My servant will be. If anyone serves Me, the Father will honor him.", cat: "Verses::Service"
},
{
	id: 751, ref: "Luke 16:10	He", verse: "who is faithful in the least is faithful also in much; and he who is unrighteous in the least is unrighteous also in much.", cat: "Verses::Service"
},
{
	id: 752, ref: "Matthew 25:21	His", verse: "master said to him, Well done, good and faithful slave. You were faithful over a few things; I will set you over many things. Enter into the joy of your master.", cat: "Verses::Service"
},
{
	id: 753, ref: "Matthew 24:45	Who", verse: "then is the faithful and prudent slave, whom the master has set over his household to give them food at the proper time?", cat: "Verses::Service"
},
{
	id: 754, ref: "Joshua 24:15	And", verse: "if it seems wrong in your sight to serve Jehovah, choose for yourselves today whom you will serve, either the gods from across the River, whom your fathers served, or the gods of the Amorites, in whose land you dwell. But as for me and my house, we will serve Jehovah.", cat: "Verses::Service"
},
{
	id: 755, ref: "1 Corinthians 3:9", verse: "For we are God’s fellow workers; you are God’s cultivated land, God’s building.", cat: "Verses::Service"
},
{
	id: 756, ref: "1 Corinthians 12:18", verse: "But now God has placed the members, each one of them, in the body, even as He willed.", cat: "Verses::Service"
},
{
	id: 757, ref: "1 Corinthians 3:10", verse: "According to the grace of God given to me, as a wise master builder I have laid a foundation, and another builds upon it. But let each man take heed how he builds upon it.", cat: "Verses::Service"
},
{
	id: 758, ref: "1 Corinthians 3:12", verse: "But if anyone builds upon the foundation gold, silver, precious stones, wood, grass, stubble,", cat: "Verses::Service"
},
{
	id: 759, ref: "1 Corinthians 3:13", verse: "The work of each will become manifest; for the day will declare it, because it is revealed by fire, and the fire itself will prove each one’s work, of what sort it is.", cat: "Verses::Service"
},
{
	id: 760, ref: "1 Peter 2:5", verse: "You yourselves also, as living stones, are being built up as a spiritual house into a holy priesthood to offer up spiritual sacrifices acceptable to God through Jesus Christ.", cat: "Verses::Service::Universal-Priesthood"
},
{
	id: 761, ref: "1 Peter 2:9", verse: "But you are a chosen race, a royal priesthood, a holy nation, a people acquired for a possession, so that you may tell out the virtues of Him who has called you out of darkness into His marvelous light;", cat: "Verses::Service::Universal-Priesthood"
},
{
	id: 762, ref: "Exodus 19:6	And", verse: "you shall be to Me a kingdom of priests and a holy nation. These are the words that you shall speak to the children of Israel.", cat: "Verses::Service::Universal-Priesthood"
},
{
	id: 763, ref: "Romans 15:16	That", verse: "I might be a minister of Christ Jesus to the Gentiles, a laboring priest of the gospel of God, in order that the offering of the Gentiles might be acceptable, having been sanctified in the Holy Spirit.", cat: "Verses::Service::Universal-Priesthood Verses::Service::God-Ordained-Way"
},
{
	id: 764, ref: "1 Peter 4:10", verse: "Each one, as he has received a gift, ministering it among yourselves as good stewards of the varied grace of God.", cat: "Verses::Service::Universal-Priesthood"
},
{
	id: 765, ref: "Hebrews 10:24	And", verse: "let us consider one another so as to incite one another to love and good works,", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 766, ref: "Matthew 28:20	Teaching", verse: "them to observe all that I have commanded you. And behold, I am with you all the days until the consummation of the age.", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 767, ref: "Matthew 18:11	For", verse: "the Son of Man has come to save that which is lost.", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 768, ref: "1 Thessalonians 2:9", verse: "For you remember, brothers, our labor and travail: While working night and day so as not to be burdensome to any of you, we proclaimed to you the gospel of God.", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 769, ref: "1 Peter 5:3", verse: "Nor as lording it over your allotments but by becoming patterns of the flock.", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 770, ref: "Ephesians 5:29	For", verse: "no one ever hated his own flesh, but nourishes and cherishes it, even as Christ also the church,", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 771, ref: "1 Thessalonians 2:7", verse: "But we were gentle in your midst, as a nursing mother would cherish her own children.", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 772, ref: "1 Thessalonians 2:11", verse: "Just as you know how we were to each one of you, as a father to his own children, exhorting you and consoling you and testifying,", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 773, ref: "Colossians 1:28	Whom", verse: "we announce, admonishing every man and teaching every man in all wisdom that we may present every man full-grown in Christ;", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 774, ref: "Acts 20:27	For", verse: "I did not shrink from declaring to you all the counsel of God.", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 775, ref: "Acts 20:20	How", verse: "I did not withhold any of those things that are profitable by not declaring them to you and by not teaching you publicly and from house to house,", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 776, ref: "1 Thessalonians 1:3", verse: "Remembering unceasingly your work of faith and labor of love and endurance of hope in our Lord Jesus Christ, before our God and Father;", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 777, ref: "2 Corinthians 12:15", verse: "But I, I will most gladly spend and be utterly spent on behalf of your souls. If I love you more abundantly, am I loved less?", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 778, ref: "Colossians 1:29	For", verse: "which also I labor, struggling according to His operation which operates in me in power.", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 779, ref: "1 Corinthians 15:10", verse: "But by the grace of God I am what I am; and His grace unto me did not turn out to be in vain, but, on the contrary, I labored more abundantly than all of them, yet not I but the grace of God which is with me.", cat: "Verses::Service::God-Ordained-Way"
},
{
	id: 780, ref: "2 Timothy 2:22", verse: "But flee youthful lusts, and pursue righteousness, faith, love, peace with those who call on the Lord out of a pure heart.", cat: "Verses::Service::Vital-Groups Verses::Other-Crucial-Matters::Preparation-of-the-Vessel Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 781, ref: "Deuteronomy 32:30	How", verse: "shall one chase a thousand, And two put ten thousand to flight, Were it not that their Rock sold them, And Jehovah delivered them up?", cat: "Verses::Service::Vital-Groups"
},
{
	id: 782, ref: "Revelation 3:1	And", verse: "to the messenger of the church in Sardis write: These things says He who has the seven Spirits of God and the seven stars: I know your works, that you have a name that you are living, and yet you are dead.", cat: "Verses::Service::Vital-Groups"
},
{
	id: 783, ref: "Revelation 3:15	I", verse: "know your works, that you are neither cold nor hot; I wish that you were cold or hot.", cat: "Verses::Service::Vital-Groups"
},
{
	id: 784, ref: "John 15:2	Every", verse: "branch in Me that does not bear fruit, He takes it away; and every branch that bears fruit, He prunes it that it may bear more fruit.", cat: "Verses::Service::Vital-Groups"
},
{
	id: 785, ref: "Luke 19:10	For", verse: "the Son of Man has come to seek and to save that which is lost.", cat: "Verses::Service::Vital-Groups"
},
{
	id: 786, ref: "John 13:34	A", verse: "new commandment I give to you, that you love one another, even as I have loved you, that you also love one another.", cat: "Verses::Service::Vital-Groups"
},
{
	id: 787, ref: "1 Corinthians 12:20", verse: "But now the members are many, but the body one.", cat: "Verses::Service::Coordination"
},
{
	id: 788, ref: "1 Corinthians 12:21", verse: "And the eye cannot say to the hand, I have no need of you; nor again the head to the feet, I have no need of you.", cat: "Verses::Service::Coordination"
},
{
	id: 789, ref: "1 Corinthians 12:27", verse: "Now you are the Body of Christ, and members individually.", cat: "Verses::Service::Coordination"
},
{
	id: 790, ref: "Ezekiel 1:9	Their", verse: "wings were joined one to another; they did not turn as they went; each went straight forward.", cat: "Verses::Service::Coordination"
},
{
	id: 791, ref: "John 17:11	And", verse: "I am no longer in the world; yet they are in the world, and I am coming to You. Holy Father, keep them in Your name, which You have given to Me, that they may be one even as We are.", cat: "Verses::Service::One-Accord"
},
{
	id: 792, ref: "Philippians 1:27	Onl", verse: ", conduct yourselves in a manner worthy of the gospel of Christ, that whether coming and seeing you or being absent, I may hear of the things concerning you, that you stand firm in one spirit, with one soul striving together along with the faith of the gospel,", cat: "Verses::Service::One-Accord"
},
{
	id: 793, ref: "Colossians 4:16	And", verse: "when this letter is read among you, cause that it be read in the church of the Laodiceans also, and that you also read the one from Laodicea.", cat: "Verses::Service::Blending"
},
{
	id: 794, ref: "Ephesians 1:17	That", verse: "the God of our Lord Jesus Christ, the Father of glory, may give to you a spirit of wisdom and revelation in the full knowledge of Him,", cat: "Verses::High-Peak-of-the-Divine-Revelation"
},
{
	id: 795, ref: "Ephesians 1:18	The", verse: "eyes of your heart having been enlightened, that you may know what is the hope of His calling, and what are the riches of the glory of His inheritance in the saints,", cat: "Verses::High-Peak-of-the-Divine-Revelation"
},
{
	id: 796, ref: "Revelation 1:10	I", verse: "was in spirit on the Lord’s Day and heard behind me a loud voice like a trumpet,", cat: "Verses::High-Peak-of-the-Divine-Revelation"
},
{
	id: 797, ref: "Acts 26:19	Therefor", verse: ", King Agrippa, I was not disobedient to the heavenly vision,", cat: "Verses::High-Peak-of-the-Divine-Revelation"
},
{
	id: 798, ref: "Proverbs 29:18	Where", verse: "there is no vision, the people cast off restraint; But happy is he who keeps the law.", cat: "Verses::High-Peak-of-the-Divine-Revelation"
},
{
	id: 799, ref: "Habakkuk 3:2	O", verse: "Jehovah, I have heard the report concerning You and am afraid. O Jehovah, revive Your work In the midst of the years; In the midst of the years make it known; In wrath remember compassion.", cat: "Verses::High-Peak-of-the-Divine-Revelation"
},
{
	id: 800, ref: "John 1:13	Who", verse: "were begotten not of blood, nor of the will of the flesh, nor of the will of man, but of God.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 801, ref: "1 John 3:1", verse: "Behold what manner of love the Father has given to us, that we should be called children of God; and we are. Because of this the world does not know us, because it did not know Him.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 802, ref: "Romans 5:10	For", verse: "if we, being enemies, were reconciled to God through the death of His Son, much more we will be saved in His life, having been reconciled,", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Judicial-Redemption"
},
{
	id: 803, ref: "John 6:56	He", verse: "who eats My flesh and drinks My blood abides in Me and I in him.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 804, ref: "John 6:57	As", verse: "the living Father has sent Me and I live because of the Father, so he who eats Me, he also shall live because of Me.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 805, ref: "1 John 5:11", verse: "And this is the testimony, that God gave to us eternal life and this life is in His Son.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 806, ref: "Matthew 5:48	You", verse: "therefore shall be perfect as your heavenly Father is perfect.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 807, ref: "1 Peter 1:15", verse: "But according to the Holy One who called you, you yourselves also be holy in all your manner of life;", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 808, ref: "1 John 4:8", verse: "He who does not love has not known God, because God is love.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 809, ref: "1 Corinthians 2:16", verse: "For who has known the mind of the Lord and will instruct Him? But we have the mind of Christ.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 810, ref: "Philippians 3:21	Who", verse: "will transfigure the body of our humiliation to be conformed to the body of His glory, according to His operation by which He is able even to subject all things to Himself.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 811, ref: "Isaiah 43:10	You", verse: "are My witnesses, declares Jehovah, And My servant whom I have chosen, In order that you may know and believe Me And understand that I am He. Before Me there was no God formed, Neither will there be any after Me.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 812, ref: "Isaiah 44:6	Thus", verse: "says Jehovah the King of Israel, And his Redeemer, Jehovah of hosts, I am the First and I am the Last, And apart from Me there is no God.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 813, ref: "2 Samuel 7:12", verse: "When your days are fulfilled and you sleep with your fathers, I will raise up your seed after you, which will come forth from your body, and I will establish his kingdom.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 814, ref: "2 Samuel 7:13", verse: "It is he who will build a house for My name, and I will establish the throne of his kingdom forever.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 815, ref: "2 Samuel 7:14", verse: "I will be his Father, and he will be My son. If he commits iniquity, I will strike him with the rod of men and with the stripes of the sons of men;", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 816, ref: "John 20:17	Jesus", verse: "said to her, Do not touch Me, for I have not yet ascended to the Father; but go to My brothers and say to them, I ascend to My Father and your Father, and My God and your God.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 817, ref: "Hebrews 2:11	For", verse: "both He who sanctifies and those who are being sanctified are all of One, for which cause He is not ashamed to call them brothers,", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Inclusion"
},
{
	id: 818, ref: "Romans 11:17	But", verse: "if some of the branches were broken off, and you, being a wild olive tree, were grafted in among them and became a fellow partaker of the root of fatness of the olive tree,", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 819, ref: "John 3:29	He", verse: "who has the bride is the bridegroom; but the friend of the bridegroom, who stands and hears him, rejoices with joy because of the bridegroom’s voice. This joy of mine therefore is made full.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 820, ref: "John 3:30	He", verse: "must increase, but I must decrease.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 821, ref: "1 Corinthians 7:25", verse: "Now concerning virgins I have no commandment of the Lord, but I give my opinion as one who has been shown mercy by the Lord to be faithful.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 822, ref: "1 Corinthians 7:40", verse: "But she is more blessed if she so remains, according to my opinion; but I think that I also have the Spirit of God.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Deification"
},
{
	id: 823, ref: "Philippians 3:10	To", verse: "know Him and the power of His resurrection and the fellowship of His sufferings, being conformed to His death,", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ"
},
{
	id: 824, ref: "Hebrews 9:15	And", verse: "because of this He is the Mediator of a new covenant, so that, death having taken place for redemption of the transgressions under the first covenant, those who have been called might receive the promise of the eternal inheritance.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ"
},
{
	id: 825, ref: "Isaiah 7:14	Therefore", verse: "the Lord Himself will give you a sign: Behold, the virgin will conceive and will bear a son, and she will call his name Immanuel.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 826, ref: "Luke 1:35	And", verse: "the angel answered and said to her, The Holy Spirit will come upon you, and the power of the Most High will overshadow you; therefore also the holy thing which is born will be called the Son of God.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 827, ref: "John 8:12	Again", verse: "therefore Jesus spoke to them, saying, I am the light of the world; he who follows Me shall by no means walk in darkness, but shall have the light of life.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 828, ref: "Matthew 19:14	But", verse: "Jesus said, Allow the little children and do not prevent them from coming to Me, for of such is the kingdom of the heavens.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 829, ref: "Isaiah 42:3	A", verse: "bruised reed He will not break; And a dimly burning flax He will not extinguish; He will bring forth justice in truth.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 830, ref: "Hebrews 9:12	And", verse: "not through the blood of goats and calves but through His own blood, entered once for all into the Holy of Holies, obtaining an eternal redemption.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 831, ref: "Hebrews 9:28	So", verse: "Christ also, having been offered once to bear the sins of many, will appear a second time to those who eagerly await Him, apart from sin, unto salvation.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 832, ref: "Hebrews 9:26	Since", verse: "then He would have had to suffer often since the foundation of the world. But now once at the consummation of the ages He has been manifested for the putting away of sin through the sacrifice of Himself.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 833, ref: "Hebrews 2:9	But", verse: "we see Jesus, who was made a little inferior to the angels because of the suffering of death, crowned with glory and honor, so that by the grace of God He might taste death on behalf of everything.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 834, ref: "Colossians 2:15	Stripping", verse: "off the rulers and the authorities, He made a display of them openly, triumphing over them in it.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 835, ref: "1 Peter 3:18", verse: "For Christ also has suffered once for sins, the Righteous on behalf of the unrighteous, that He might bring you to God, on the one hand being put to death in the flesh, but on the other, made alive in the Spirit;", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Incarnation"
},
{
	id: 836, ref: "2 Corinthians 5:16", verse: "So then we, from now on, know no one according to the flesh; even though we have known Christ according to the flesh, yet now we know Him so no longer.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Inclusion"
},
{
	id: 837, ref: "Revelation 4:5	And", verse: "out of the throne come forth lightnings and voices and thunders. And there were seven lamps of fire burning before the throne, which are the seven Spirits of God;", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Intensification"
},
{
	id: 838, ref: "Revelation 5:6	And", verse: "I saw in the midst of the throne and of the four living creatures and in the midst of the elders a Lamb standing as having just been slain, having seven horns and seven eyes, which are the seven Spirits of God sent forth into all the earth.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Intensification"
},
{
	id: 839, ref: "Revelation 2:7	He", verse: "who has an ear, let him hear what the Spirit says to the churches. To him who overcomes, to him I will give to eat of the tree of life, which is in the Paradise of God.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Intensification"
},
{
	id: 840, ref: "Revelation 14:1	And", verse: "I saw, and behold, the Lamb standing on Mount Zion, and with Him a hundred and forty-four thousand, having His name and the name of His Father written on their foreheads.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Full-Ministry-of-Christ::Intensification"
},
{
	id: 841, ref: "John 14:1	Do", verse: "not let your heart be troubled; believe into God, believe also into Me.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Divine-and-Mystical-Realm"
},
{
	id: 842, ref: "John 14:16	And", verse: "I will ask the Father, and He will give you another Comforter, that He may be with you forever,", cat: "Verses::High-Peak-of-the-Divine-Revelation::Divine-and-Mystical-Realm"
},
{
	id: 843, ref: "John 17:21	That", verse: "they all may be one; even as You, Father, are in Me and I in You, that they also may be in Us; that the world may believe that You have sent Me.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Divine-and-Mystical-Realm Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 844, ref: "John 17:23	I", verse: "in them, and You in Me, that they may be perfected into one, that the world may know that You have sent Me and have loved them even as You have loved Me.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Divine-and-Mystical-Realm"
},
{
	id: 845, ref: "John 16:33	These", verse: "things I have spoken to you that in Me you may have peace. In the world you have affliction, but take courage; I have overcome the world.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Divine-and-Mystical-Realm"
},
{
	id: 846, ref: "John 15:4	Abide", verse: "in Me and I in you. As the branch cannot bear fruit of itself unless it abides in the vine, so neither can you unless you abide in Me.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Divine-and-Mystical-Realm"
},
{
	id: 847, ref: "Hebrews 9:22	And", verse: "almost all things are purified by blood according to the law, and without shedding of blood there is no forgiveness.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Judicial-Redemption"
},
{
	id: 848, ref: "Romans 3:24	Being", verse: "justified freely by His grace through the redemption which is in Christ Jesus;", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Judicial-Redemption"
},
{
	id: 849, ref: "1 John 4:10", verse: "Herein is love, not that we have loved God but that He loved us and sent His Son as a propitiation for our sins.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Judicial-Redemption"
},
{
	id: 850, ref: "Romans 5:2	Through", verse: "whom also we have obtained access by faith into this grace in which we stand and boast because of the hope of the glory of God.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Judicial-Redemption"
},
{
	id: 851, ref: "Hebrews 13:12	Therefore", verse: "also Jesus, that He might sanctify the people through His own blood, suffered outside the gate.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Judicial-Redemption"
},
{
	id: 852, ref: "Romans 5:18	So", verse: "then as it was through one offense unto condemnation to all men, so also it was through one righteous act unto justification of life to all men.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 853, ref: "Titus 3:5	Not", verse: "out of works in righteousness which we did but according to His mercy He saved us, through the washing of regeneration and the renewing of the Holy Spirit,", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 854, ref: "Romans 6:22	But", verse: "now, having been freed from sin and enslaved to God, you have your fruit unto sanctification, and the end, eternal life.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 855, ref: "Ephesians 4:23	And", verse: "that you be renewed in the spirit of your mind", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 856, ref: "Ephesians 4:24	And", verse: "put on the new man, which was created according to God in righteousness and holiness of the reality.", cat: "Verses::Service::One-Accord Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 857, ref: "Ephesians 4:30	And", verse: "do not grieve the Holy Spirit of God, in whom you were sealed unto the day of redemption.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 858, ref: "Romans 8:23	And", verse: "not only so, but we ourselves also, who have the firstfruits of the Spirit, even we ourselves groan in ourselves, eagerly awaiting sonship, the redemption of our body.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 859, ref: "2 Corinthians 5:4", verse: "For also, we who are in this tabernacle groan, being burdened, in that we do not desire to be unclothed, but clothed upon, that what is mortal may be swallowed up by life.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Organic-Salvation"
},
{
	id: 860, ref: "Romans 5:17	For", verse: "if, by the offense of the one, death reigned through the one, much more those who receive the abundance of grace and of the gift of righteousness will reign in life through the One, Jesus Christ.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Reigning-in-Life"
},
{
	id: 861, ref: "Romans 5:21	In", verse: "order that just as sin reigned in death, so also grace might reign through righteousness unto eternal life through Jesus Christ our Lord.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Gods-Complete-Salvation-and-Reigning-in-Life::Reigning-in-Life"
},
{
	id: 862, ref: "John 12:23	And", verse: "Jesus answered them, saying, The hour has come for the Son of Man to be glorified.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 863, ref: "Luke 24:26	Was", verse: "it not necessary for the Christ to suffer these things and enter into His glory?", cat: "Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 864, ref: "John 14:19	Yet", verse: "a little while and the world beholds Me no longer, but you behold Me; because I live, you also shall live.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 865, ref: "John 16:21	A", verse: "woman, when she gives birth, has sorrow because her hour has come; but when she brings forth the little child, she no longer remembers the affliction because of the joy that a man has been born into the world.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 866, ref: "John 6:29	Jesus", verse: "answered and said to them, This is the work of God, that you believe into Him whom He has sent.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 867, ref: "Hebrews 9:4	Having", verse: "a golden altar and the Ark of the Covenant covered about everywhere with gold, in which were the golden pot that had the manna and Aaron’s rod that budded and the tablets of the covenant,", cat: "Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 868, ref: "Revelation 2:17	He", verse: "who has an ear, let him hear what the Spirit says to the churches. To him who overcomes, to him I will give of the hidden manna, and to him I will give a white stone, and upon the stone a new name written, which no one knows except him who receives it .", cat: "Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 869, ref: "Psalms 27:4	One", verse: "thing I have asked from Jehovah; That do I seek: To dwell in the house of Jehovah All the days of my life, To behold the beauty of Jehovah, And to inquire in His temple.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 870, ref: "Psalms 23:6	Surely", verse: "goodness and lovingkindness will follow me All the days of my life, And I will dwell in the house of Jehovah For the length of my days.", cat: "Verses::High-Peak-of-the-Divine-Revelation::Universal-Divine-Human-Incorporation"
},
{
	id: 871, ref: "1 Timothy 1:3", verse: "Even as I exhorted you, when I was going into Macedonia, to remain in Ephesus in order that you might charge certain ones not to teach different things", cat: "Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 872, ref: "Colossians 1:26	The", verse: "mystery which has been hidden from the ages and from the generations but now has been manifested to His saints;", cat: "Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 873, ref: "Hebrews 2:1	Therefore", verse: "we ought to give heed more abundantly to the things which have been heard lest perhaps we drift away.", cat: "Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 874, ref: "Hebrews 2:3	How", verse: "shall we escape if we have neglected so great a salvation, which, having had its beginning in being spoken by the Lord, has been confirmed to us by those who heard,", cat: "Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 875, ref: "Ephesians 2:20	Being", verse: "built upon the foundation of the apostles and prophets, Christ Jesus Himself being the cornerstone;", cat: "Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 876, ref: "1 Corinthians 4:17", verse: "Because of this I have sent Timothy to you, who is my beloved and faithful child in the Lord, who will remind you of my ways which are in Christ, even as I teach everywhere in every church.", cat: "Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 877, ref: "Titus 1:9	Holding", verse: "to the faithful word, which is according to the teaching of the apostles, that he may be able both to exhort by the healthy teaching and to convict those who oppose.", cat: "Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 878, ref: "2 Timothy 3:10", verse: "But you have closely followed my teaching, conduct, purpose, faith, long-suffering, love, endurance,", cat: "Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 879, ref: "1 Corinthians 11:1", verse: "Be imitators of me, as I also am of Christ.", cat: "Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 880, ref: "2 Timothy 4:7", verse: "I have fought the good fight; I have finished the course; I have kept the faith.", cat: "Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 881, ref: "Jude 1:3	Belove", verse: ", while using all diligence to write to you concerning our common salvation, I found it necessary to write to you and exhort you to earnestly contend for the faith once for all delivered to the saints.", cat: "Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 882, ref: "1 Timothy 6:12", verse: "Fight the good fight of the faith; lay hold on the eternal life, to which you were called and have confessed the good confession before many witnesses.", cat: "Verses::Other-Crucial-Matters::Apostles-Teaching"
},
{
	id: 883, ref: "2 Corinthians 4:1", verse: "Therefore having this ministry as we have been shown mercy, we do not lose heart;", cat: "Verses::Other-Crucial-Matters::New-Testament-Ministry Verses::Other-Crucial-Matters::New-Covenant-Ministers"
},
{
	id: 884, ref: "2 Corinthians 3:7", verse: "Moreover if the ministry of death, engraved in stone in letters, came about in glory, so that the sons of Israel were not able to gaze at the face of Moses because of the glory of his face, a glory which was being done away with,", cat: "Verses::Other-Crucial-Matters::New-Testament-Ministry"
},
{
	id: 885, ref: "2 Corinthians 3:8", verse: "How shall the ministry of the Spirit not be more in glory?", cat: "Verses::Other-Crucial-Matters::New-Testament-Ministry"
},
{
	id: 886, ref: "2 Corinthians 3:9", verse: "For if there is glory with the ministry of condemnation, much more the ministry of righteousness abounds with glory.", cat: "Verses::Other-Crucial-Matters::New-Testament-Ministry"
},
{
	id: 887, ref: "2 Corinthians 5:18", verse: "But all things are out from God, who has reconciled us to Himself through Christ and has given to us the ministry of reconciliation;", cat: "Verses::Other-Crucial-Matters::New-Testament-Ministry"
},
{
	id: 888, ref: "2 Corinthians 5:19", verse: "Namely, that God in Christ was reconciling the world to Himself, not accounting their offenses to them, and has put in us the word of reconciliation.", cat: "Verses::Other-Crucial-Matters::New-Testament-Ministry"
},
{
	id: 889, ref: "2 Corinthians 5:20", verse: "On behalf of Christ then we are ambassadors, as God entreats you through us; we beseech you on behalf of Christ, Be reconciled to God.", cat: "Verses::Other-Crucial-Matters::New-Testament-Ministry"
},
{
	id: 890, ref: "Hebrews 8:10	For", verse: "this is the covenant which I will covenant with the house of Israel after those days, says the Lord: I will impart My laws into their mind, and on their hearts I will inscribe them; and I will be God to them, and they will be a people to Me.", cat: "Verses::Other-Crucial-Matters::New-Testament-Ministry"
},
{
	id: 891, ref: "Hebrews 8:11	And", verse: "they shall by no means each teach his fellow citizen and each his brother, saying, Know the Lord; for all will know Me from the little one to the great one among them.", cat: "Verses::Other-Crucial-Matters::New-Testament-Ministry"
},
{
	id: 892, ref: "2 Corinthians 1:9", verse: "Indeed we ourselves had the response of death in ourselves, that we should not base our confidence on ourselves but on God, who raises the dead;", cat: "Verses::Other-Crucial-Matters::New-Covenant-Ministers"
},
{
	id: 893, ref: "2 Corinthians 4:11", verse: "For we who are alive are always being delivered unto death for Jesus’ sake that the life of Jesus also may be manifested in our mortal flesh.", cat: "Verses::Other-Crucial-Matters::New-Covenant-Ministers"
},
{
	id: 894, ref: "2 Corinthians 1:3", verse: "Blessed be the God and Father of our Lord Jesus Christ, the Father of compassions and God of all comfort,", cat: "Verses::Other-Crucial-Matters::New-Covenant-Ministers"
},
{
	id: 895, ref: "2 Corinthians 1:4", verse: "Who comforts us in all our affliction that we may be able to comfort those who are in every affliction through the comforting with which we ourselves are comforted by God.", cat: "Verses::Other-Crucial-Matters::New-Covenant-Ministers"
},
{
	id: 896, ref: "2 Corinthians 2:14", verse: "But thanks be to God, who always leads us in triumph in the Christ and manifests the savor of the knowledge of Him through us in every place.", cat: "Verses::Other-Crucial-Matters::New-Covenant-Ministers"
},
{
	id: 897, ref: "2 Corinthians 2:15", verse: "For we are a fragrance of Christ to God in those who are being saved and in those who are perishing:", cat: "Verses::Other-Crucial-Matters::New-Covenant-Ministers"
},
{
	id: 898, ref: "2 Corinthians 2:16", verse: "To some a savor out of death unto death, and to the others a savor out of life unto life. And who is sufficient for these things?", cat: "Verses::Other-Crucial-Matters::New-Covenant-Ministers"
},
{
	id: 899, ref: "2 Corinthians 3:3", verse: "Since you are being manifested that you are a letter of Christ ministered by us, inscribed not with ink but with the Spirit of the living God; not in tablets of stone but in tablets of hearts of flesh.", cat: "Verses::Other-Crucial-Matters::New-Covenant-Ministers"
},
{
	id: 900, ref: "2 Corinthians 4:7", verse: "But we have this treasure in earthen vessels that the excellency of the power may be of God and not out of us.", cat: "Verses::Other-Crucial-Matters::New-Covenant-Ministers"
},
{
	id: 901, ref: "1 Timothy 4:6", verse: "If you lay these things before the brothers, you will be a good minister of Christ Jesus, being nourished with the words of the faith and of the good teaching which you have closely followed.", cat: "Verses::Other-Crucial-Matters::New-Covenant-Ministers"
},
{
	id: 902, ref: "1 Corinthians 11:3", verse: "But I want you to know that Christ is the head of every man, and the man is the head of the woman, and God is the head of Christ.", cat: "Verses::Other-Crucial-Matters::Authority-and-Submission"
},
{
	id: 903, ref: "John 4:34	Jesus", verse: "said to them, My food is to do the will of Him who sent Me and to finish His work.", cat: "Verses::Other-Crucial-Matters::Authority-and-Submission"
},
{
	id: 904, ref: "1 Corinthians 11:10", verse: "Therefore the woman ought to have a sign of submission to authority on her head for the sake of the angels.", cat: "Verses::Other-Crucial-Matters::Authority-and-Submission"
},
{
	id: 905, ref: "Ephesians 5:24	But", verse: "as the church is subject to Christ, so also let the wives be subject to their husbands in everything.", cat: "Verses::Other-Crucial-Matters::Authority-and-Submission"
},
{
	id: 906, ref: "Romans 13:1	Let", verse: "every person be subject to the authorities over him, for there is no authority except from God, and those which exist are ordained by God.", cat: "Verses::Other-Crucial-Matters::Authority-and-Submission"
},
{
	id: 907, ref: "1 Samuel 15:22", verse: "And Samuel said, Does Jehovah delight in burnt offerings and sacrifices As much as in obeying the voice of Jehovah? Behold, to obey is better than sacrifice, And to heed, than the fat of rams.", cat: "Verses::Other-Crucial-Matters::Authority-and-Submission Verses::Other-Crucial-Matters::Character"
},
{
	id: 908, ref: "Song of Songs 1", verse: "2	Let him kiss me with the kisses of his mouth! For your love is better than wine.", cat: "Verses::Other-Crucial-Matters::Divine-Human-Romance"
},
{
	id: 909, ref: "Song of Songs 1", verse: "4a	Draw me; we will run after you.", cat: "Verses::Other-Crucial-Matters::Divine-Human-Romance"
},
{
	id: 910, ref: "2 Corinthians 11:2", verse: "For I am jealous over you with a jealousy of God; for I betrothed you to one husband to present you as a pure virgin to Christ.", cat: "Verses::Other-Crucial-Matters::Divine-Human-Romance"
},
{
	id: 911, ref: "Ephesians 5:27	That", verse: "He might present the church to Himself glorious, not having spot or wrinkle or any such things, but that she would be holy and without blemish.", cat: "Verses::Other-Crucial-Matters::Divine-Human-Romance"
},
{
	id: 912, ref: "Hosea 2:19	And", verse: "I will betroth you to Myself forever; Indeed I will betroth you to Myself In righteousness and justice And in lovingkindness and compassions;", cat: "Verses::Other-Crucial-Matters::Divine-Human-Romance"
},
{
	id: 913, ref: "Isaiah 54:5	For", verse: "your Maker is your Husband; Jehovah of hosts is His name. And the Holy One of Israel is your Redeemer; He is called the God of all the earth.", cat: "Verses::Other-Crucial-Matters::Divine-Human-Romance"
},
{
	id: 914, ref: "Revelation 19:7	Let", verse: "us rejoice and exult, and let us give the glory to Him, for the marriage of the Lamb has come, and His wife has made herself ready.", cat: "Verses::Other-Crucial-Matters::Divine-Human-Romance"
},
{
	id: 915, ref: "Acts 19:5	And", verse: "when they heard this, they were baptized into the name of the Lord Jesus.", cat: "Verses::Other-Crucial-Matters::Baptism"
},
{
	id: 916, ref: "Romans 6:3	Or", verse: "are you ignorant that all of us who have been baptized into Christ Jesus have been baptized into His death?", cat: "Verses::Other-Crucial-Matters::Baptism"
},
{
	id: 917, ref: "Romans 6:4	We", verse: "have been buried therefore with Him through baptism into His death, in order that just as Christ was raised from the dead through the glory of the Father, so also we might walk in newness of life.", cat: "Verses::Other-Crucial-Matters::Baptism"
},
{
	id: 918, ref: "Colossians 2:12	Buried", verse: "together with Him in baptism, in which also you were raised together with Him through the faith of the operation of God, who raised Him from the dead.", cat: "Verses::Other-Crucial-Matters::Baptism"
},
{
	id: 919, ref: "Galatians 3:27	For", verse: "as many of you as were baptized into Christ have put on Christ.", cat: "Verses::Other-Crucial-Matters::Baptism"
},
{
	id: 920, ref: "Acts 2:38	And", verse: "Peter said to them, Repent and each one of you be baptized upon the name of Jesus Christ for the forgiveness of your sins, and you will receive the gift of the Holy Spirit.", cat: "Verses::Other-Crucial-Matters::Baptism"
},
{
	id: 921, ref: "Acts 22:16	And", verse: "now, why do you delay? Rise up and be baptized and wash away your sins, calling on His name.", cat: "Verses::Other-Crucial-Matters::Baptism"
},
{
	id: 922, ref: "Genesis 2:7	Jehovah", verse: "God formed man from the dust of the ground and breathed into his nostrils the breath of life, and man became a living soul.", cat: "Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 923, ref: "Job 33:4	The", verse: "Spirit of God has made me, And the breath of the Almighty has enlivened me.", cat: "Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 924, ref: "Job 32:8	But", verse: "there is a spirit in man, And the breath of the Almighty gives them understanding.", cat: "Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 925, ref: "1 Peter 3:4", verse: "But the hidden man of the heart in the incorruptible adornment of a meek and quiet spirit, which is very costly in the sight of God.", cat: "Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 926, ref: "Romans 9:1	I", verse: "speak the truth in Christ, I do not lie, my conscience bearing witness with me in the Holy Spirit,", cat: "Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 927, ref: "Psalms 139:14	I", verse: "will praise You, for I am awesomely and wonderfully made; Your works are wonderful, And my soul knows it well.", cat: "Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 928, ref: "Psalms 42:5	Why", verse: "are you cast down, O my soul? And why are you disquieted within me? Hope in God, for I will yet praise Him For the salvation of His countenance.", cat: "Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 929, ref: "1 Chronicles 28:9", verse: "And you, Solomon my son, know the God of your father, and serve Him with your whole heart and with a willing soul, for Jehovah searches all the hearts and understands every imagination of the thoughts. If you seek Him, He will be found by you; but if you forsake Him, He will cast you away forever.", cat: "Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 930, ref: "Hebrews 10:22	Let", verse: "us come forward to the Holy of Holies with a true heart in full assurance of faith, having our hearts sprinkled from an evil conscience and having our bodies washed with pure water.", cat: "Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 931, ref: "Matthew 9:4	And", verse: "Jesus, knowing their thoughts, said, Why are you thinking evil things in your hearts?", cat: "Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 932, ref: "John 16:22	Therefore", verse: "you also now have sorrow; but I will see you again and your heart will rejoice, and no one takes your joy away from you.", cat: "Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 933, ref: "Acts 11:23	Wh", verse: ", when he arrived and saw the grace of God, rejoiced and encouraged them all to remain with the Lord with purpose of heart;", cat: "Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 934, ref: "1 Samuel 16:7", verse: "But Jehovah said to Samuel, Do not regard his appearance and the height of his stature, because I have rejected him. For it is not how man sees that matters; for man looks on the outward appearance, but Jehovah looks on the heart.", cat: "Verses::Other-Crucial-Matters::Parts-of-Man"
},
{
	id: 935, ref: "2 Timothy 2:21", verse: "If therefore anyone cleanses himself from these, he will be a vessel unto honor, sanctified, useful to the master, prepared unto every good work.", cat: "Verses::Other-Crucial-Matters::Character Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 936, ref: "1 Timothy 6:11", verse: "But you, O man of God, flee these things, and pursue righteousness, godliness, faith, love, endurance, meekness.", cat: "Verses::Other-Crucial-Matters::Character Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 937, ref: "2 Corinthians 11:10", verse: "The truthfulness of Christ is in me, that this boasting shall not be stopped as it regards me in the regions of Achaia.", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 938, ref: "2 Corinthians 10:13", verse: "But we will not boast beyond our measure but according to the measure of the rule which the God of measure has apportioned to us, to reach even as far as you.", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 939, ref: "1 Corinthians 9:27", verse: "But I buffet my body and make it my slave, lest perhaps having preached to others, I myself may become disapproved.", cat: "Verses::Other-Crucial-Matters::Character Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 940, ref: "2 Timothy 2:6", verse: "The laboring farmer must be the first to partake of the fruit.", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 941, ref: "1 Kings 4:29", verse: "And God gave Solomon wisdom and very much understanding and largeness of heart, even as the sand that is on the seashore.", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 942, ref: "1 Corinthians 15:58", verse: "Therefore, my beloved brothers, be steadfast, immovable, always abounding in the work of the Lord, knowing that your labor is not in vain in the Lord.", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 943, ref: "James 5:7	Therefore", verse: "be long-suffering, brothers, until the coming of the Lord. Behold, the farmer eagerly awaits the precious fruit of the earth, exercising long-suffering over it until it receives the early and late rain.", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 944, ref: "Matthew 13:6	But", verse: "when the sun rose, they were scorched; and because they had no root, they withered.", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 945, ref: "Matthew 5:8	Blessed", verse: "are the pure in heart, for they shall see God.", cat: "Verses::Other-Crucial-Matters::Character Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 946, ref: "2 Corinthians 1:12", verse: "For our boasting is this, the testimony of our conscience, that in singleness and sincerity of God, not in fleshly wisdom but in the grace of God, we have conducted ourselves in the world, and more abundantly toward you.", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 947, ref: "Matthew 6:22	The", verse: "lamp of the body is the eye. If therefore your eye is single, your whole body will be full of light;", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 948, ref: "Ecclesiastes 4:12	And", verse: "while a man may prevail against the one, the two will withstand him; and a threefold cord is not quickly broken.", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 949, ref: "1 Peter 4:1", verse: "Since Christ therefore has suffered in the flesh, you also arm yourselves with the same mind (because he who has suffered in the flesh has ceased from sin),", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 950, ref: "Hebrews 13:13	Let", verse: "us therefore go forth unto Him outside the camp, bearing His reproach.", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 951, ref: "1 Peter 5:5", verse: "In like manner, younger men, be subject to elders; and all of you gird yourselves with humility toward one another, because God resists the proud but gives grace to the humble.", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 952, ref: "Matthew 10:22	And", verse: "you will be hated by all because of My name. But he who has endured to the end, this one shall be saved.", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 953, ref: "Matthew 5:44	But", verse: "I say to you, Love your enemies, and pray for those who persecute you,", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 954, ref: "Luke 9:62	But", verse: "Jesus said to him, No one who puts his hand on the plow and looks behind is fit for the kingdom of God.", cat: "Verses::Other-Crucial-Matters::Character"
},
{
	id: 955, ref: "1 Thessalonians 4:4", verse: "That each one of you know how to possess his own vessel in sanctification and honor,", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 956, ref: "Philippians 3:12	Not", verse: "that I have already obtained or am already perfected, but I pursue, if even I may lay hold of that for which I also have been laid hold of by Christ Jesus.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 957, ref: "Philippians 3:13	Brother", verse: ", I do not account of myself to have laid hold; but one thing I do: Forgetting the things which are behind and stretching forward to the things which are before,", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 958, ref: "Philippians 3:14	I", verse: "pursue toward the goal for the prize to which God in Christ Jesus has called me upward.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 959, ref: "1 Timothy 4:7", verse: "But the profane and old-womanish myths refuse, and exercise yourself unto godliness.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 960, ref: "Luke 1:53	The", verse: "hungry He has filled with good things, and the rich He has sent away empty.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 961, ref: "Psalms 139:23	Search", verse: "me, O God, and know my heart; Try me, and know my anxious thoughts;", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 962, ref: "Revelation 3:20	Behol", verse: ", I stand at the door and knock; if anyone hears My voice and opens the door, then I will come in to him and dine with him and he with Me.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 963, ref: "Colossians 3:2	Set", verse: "your mind on the things which are above, not on the things which are on the earth.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 964, ref: "Philippians 4:4	Rejoice", verse: "in the Lord always; again I will say, rejoice.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 965, ref: "2 Timothy 2:4", verse: "No one serving as a soldier entangles himself with the affairs of this life, that he may please the one who enlisted him.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 966, ref: "1 Timothy 6:10", verse: "For the love of money is a root of all evils, because of which some, aspiring after money, have been led away from the faith and pierced themselves through with many pains.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 967, ref: "1 Corinthians 10:26", verse: "For the earth is the Lord’s and the fullness thereof.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 968, ref: "Philippians 4:11	Not", verse: "that I speak according to lack, for I have learned, in whatever circumstances I am, to be content.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 969, ref: "1 Timothy 2:9", verse: "Similarly, that women adorn themselves in proper clothing with modesty and sobriety, not with braided hair and gold or pearls or costly clothing,", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 970, ref: "Colossians 4:6	Let", verse: "your speech be always with grace, seasoned with salt, that you may know how you ought to answer each one.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 971, ref: "Matthew 5:37	But", verse: "let your word be, Yes, yes; No, no; for anything more than these is of the evil one.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 972, ref: "2 Corinthians 6:14", verse: "Do not become dissimilarly yoked with unbelievers. For what partnership do righteousness and lawlessness have? Or what fellowship does light have with darkness?", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 973, ref: "1 Corinthians 10:31", verse: "Therefore whether you eat or drink, or whatever you do, do all to the glory of God.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 974, ref: "Isaiah 40:31	Yet", verse: "those who wait on Jehovah will renew their strength; They will mount up with wings like eagles; They will run and will not become weary; They will walk and will not faint.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 975, ref: "Psalms 23:1	Jehovah", verse: "is my Shepherd; I will lack nothing.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 976, ref: "1 Peter 2:25", verse: "For you were like sheep being led astray, but you have now returned to the Shepherd and Overseer of your souls.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 977, ref: "Psalms 16:5	Jehovah", verse: "is the portion of my inheritance and of my cup; You maintain my lot.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 978, ref: "Revelation 3:18	I", verse: "counsel you to buy from Me gold refined by fire that you may be rich, and white garments that you may be clothed and that the shame of your nakedness may not be manifested, and eyesalve to anoint your eyes that you may see.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 979, ref: "Matthew 7:13	Enter", verse: "in through the narrow gate, for wide is the gate and broad is the way that leads to destruction, and many are those who enter through it.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 980, ref: "Matthew 7:14	Because", verse: "narrow is the gate and constricted is the way that leads to life, and few are those who find it.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 981, ref: "Hebrews 12:1	Therefore", verse: "let us also, having so great a cloud of witnesses surrounding us, put away every encumbrance and the sin which so easily entangles us and run with endurance the race which is set before us,", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 982, ref: "Hebrews 12:2	Looking", verse: "away unto Jesus, the Author and Perfecter of our faith, who for the joy set before Him endured the cross, despising the shame, and has sat down on the right hand of the throne of God.", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 983, ref: "1 Corinthians 9:26", verse: "I therefore run in this way, not as though without a clear aim; I box in this way, not as though beating the air;", cat: "Verses::Other-Crucial-Matters::Preparation-of-the-Vessel"
},
{
	id: 984, ref: "1 Timothy 4:12", verse: "Let no one despise your youth, but be a pattern to the believers in word, in conduct, in love, in faith, in purity.", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 985, ref: "Ecclesiastes 12:1	Remember", verse: "also your Creator in the days of your youth, before the evil days come and the years draw near when you will say, I have no pleasure in them;", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 986, ref: "Ephesians 5:16	Redeeming", verse: "the time, because the days are evil.", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 987, ref: "Titus 2:11	For", verse: "the grace of God, bringing salvation to all men, has appeared,", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 988, ref: "Titus 2:12	Training", verse: "us that, denying ungodliness and worldly lusts, we should live soberly and righteously and godly in the present age,", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 989, ref: "Daniel 11:32b	But", verse: "the people who know their God will show strength and take action.", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 990, ref: "1 John 2:14", verse: "I have written to you, fathers, because you know Him who is from the beginning. I have written to you, young men, because you are strong and the word of God abides in you and you have overcome the evil one.", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 991, ref: "Psalms 119:9	With", verse: "what should a young man keep his way pure? By guarding it according to Your word.", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 992, ref: "1 John 2:17", verse: "And the world is passing away, and its lust, but he who does the will of God abides forever.", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 993, ref: "Luke 2:49	And", verse: "He said to them, Why is it that you were seeking Me? Did you not know that I must be in the things of My Father?", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 994, ref: "Proverbs 3:5	Trust", verse: "in Jehovah with all your heart, And do not rely on your own understanding;", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 995, ref: "Isaiah 55:9	For", verse: "as the heavens are higher than the earth, So My ways are higher than your ways, And My thoughts higher than your thoughts.", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 996, ref: "Proverbs 9:10	The", verse: "fear of Jehovah is the beginning of wisdom, And the knowledge of the Holy One is understanding.", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 997, ref: "Proverbs 4:23	Keep", verse: "your heart with all vigilance, For from it are the issues of life.", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 998, ref: "Nehemiah 8:10b", verse: "And do not be grieved, for the joy of Jehovah is your strength.", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 999, ref: "Acts 20:34", verse: "You yourselves know that these hands have ministered to my needs and to those who are with me.", cat: "Verses::Other-Crucial-Matters::Young-People"
},
{
	id: 1000, ref: "Matthew 10:16", verse: "Behold, I send you forth as sheep in the midst of wolves. Be therefore prudent as serpents and guileless as doves.", cat: "Verses::Other-Crucial-Matters::Young-People"
}
];

export default verses;