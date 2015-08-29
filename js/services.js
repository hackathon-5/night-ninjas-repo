(function () {
  'use strict';

  angular
    .module('badActors')
    .factory('MainService', function ($http, $rootScope) {

        var getMovies = function(nameArray){
          console.log("nameArray: ", nameArray);
          var url = 'http://netflixroulette.net/api/api.php?actor=';
          if(nameArray.length === 3){
            url = url + nameArray[0] + '%20' + nameArray[1] + '%20' + nameArray[2];
          }
          if(nameArray.length === 2){
            url = url + nameArray[0] + '%20' + nameArray[1];
          }
          if(nameArray.length === 1){
            url = url + nameArray[0];
          }
          return $http.get(url);
        }

        var getActors = function(){
          var array = [
            {
            name: 'Ashton Kutcher',
            headshot_url: 'img/kutcher.jpg',
            bio: 'Christopher Ashton Kutcher is an American actor, producer, investor and former model. Kutcher began his career as a model. He began his acting career portraying Michael Kelso in the Fox sitcom That 70s Show, which aired for eight seasons. He made his film debut in the romantic comedy Coming Soon and became known by audiences in the comedy film Dude, Where\'s My Car?, which was a box office hit. In 2003, he appeared in romantic comedies Just Married and My Boss\'s Daughter and the same year created, produced and hosted Punk\'d which aired on MTV for five seasons until its revival in 2012 which has since completed its ninth season. In 2004, Kutcher starred in the lead role of the psychological film The Butterfly Effect and gained public recognition. Subsequently, Kutcher appeared in more romantic comedies including Guess Who (2005), and A Lot Like Love (2005), his recent ones include What Happens in Vegas (2008) and No Strings Attached (2011). From 2011 to 2015, he has starred as Walden Schmidt on the CBS sitcom Two and a Half Men, replacing Charlie Sheen. In 2013, Kutcher portrayed Steve Jobs in the biographical film Jobs.',
            birthday: 'February 7, 1978'
          },
          {
            name: 'Shia LaBeouf',
            headshot_url: 'img/labeouf.jpg',
            bio: 'Shia Saide LaBeouf is an American actor and director who became known among younger audiences as Louis Stevens in the Disney Channel series Even Stevens. LaBeouf received a Young Artist Award nomination in 2001 and won a Daytime Emmy Award in 2003 for his role. He made his film debut in Holes (2003), based on the novel of the same name by Louis Sachar. In 2004, he made his directorial debut with the short film Let\'s Love Hate and later directed a short film titled Maniac (2011), starring American rappers Cage and Kid Cudi. In 2007, LaBeouf starred in the lead role of the commercially successful films Disturbia and Surf\'s Up. The same year he was cast in Michael Bay\'s science fiction film Transformers as Sam Witwicky, the main protagonist of the series. Despite mixed reviews, Transformers was a box office success and one of the highest grossing films of 2007. LaBeouf later appeared in its sequels Transformers: Revenge of the Fallen (2009) and Transformers: Dark of the Moon (2011), both also box office successes. In 2008, he played Henry "Mutt Williams" Jones III in Indiana Jones and the Kingdom of the Crystal Skull, the fourth film in the Indiana Jones franchise. His other films include Wall Street: Money Never Sleeps (2010), Lawless (2012), The Company You Keep (2012), Nymphomaniac (2013) and Fury (2014).',
            birthday: 'June 11, 1986'
          },
          {
            name: 'Charlie Sheen',
            headshot_url: 'img/sheen.jpg',
            bio: 'Carlos Irwin Estévez, best known by his stage name Charlie Sheen, is an American actor. Sheen rose to fame after a series of successful films such as Platoon (1986), Lucas (1986), Ferris Bueller\'s Day Off (1986), Wall Street (1987), Young Guns (1988), Eight Men Out (1988), Major League (1989), Hot Shots! (1991), The Three Musketeers (1993), The Arrival (1996), Money Talks (1997), and Being John Malkovich (1999). In the 2000s, Sheen became best known for his television roles. He replaced Michael J. Fox in Spin City and his performance earned him a Golden Globe Award for Best Actor – Television Series Musical or Comedy and then starred in Two and a Half Men which earned him several Golden Globe and Emmy Award nominations. He most recently starred in the FX comedy series Anger Management, which concluded its 100-episode run in 2014. In 2010, Sheen was the highest paid actor on television and earned US$1.8 million per episode of Two and a Half Men. Sheen\'s personal life has made headlines, including reports of alcohol and drug abuse and marital problems, as well as allegations of domestic violence. He was fired from Two and a Half Men by CBS and Warner Bros. in March 2011. Sheen subsequently went on tour.',
            birthday: 'September 3, 1965'
          },
          {
            name: 'Dwayne Johnson',
            headshot_url: 'img/johnson.jpg',
            bio: 'Dwayne Douglas Johnson, also known by his ring name The Rock, is an American and Canadian actor, producer, and professional wrestler. Johnson was a college football player for the University of Miami, winning a national championship on the 1991 Miami Hurricanes football team. He later played for the Calgary Stampeders in the Canadian Football League, and was cut two months into the 1995 season. This led him to become a professional wrestler like his grandfather, Peter Maivia, and his father, Rocky Johnson (from whom he also inherited his Canadian citizenship). Originally billed as "Rocky Maivia", he gained mainstream fame in the World Wrestling Federation (WWF/E) from 1996 to 2004 as a major figure in the company\'s Attitude Era, and was the first third-generation wrestler in the company\'s history. He returned to wrestling part-time for WWE from 2011 to 2013 and continues to make sporadic non-wrestling appearances for the company. As of August 2015, he has had seventeen championship reigns in WWE, including ten as a world champion, winning the WWF/E Championship eight times and the WCW/World Championship twice. He won the Intercontinental Championship twice and the WWF Tag Team Championship five times. He is the sixth Triple Crown Champion in WWE history, and won the 2000 Royal Rumble.',
            birthday: 'May 2, 1972'
          },
          {
            name: 'Zac Efron',
            headshot_url: 'img/efron.jpg',
            bio: 'Zachary David Alexander "Zac" Efron (born October 18, 1987)[2] is an American actor and singer. He began acting professionally in the early 2000s, and became known as a teen idol after his lead roles in the Disney Channel Original Movie High School Musical, the WB series Summerland, and the 2007 film version of the Broadway musical Hairspray.[3][4][5] Efron has since starred in the films 17 Again, Me and Orson Welles, Charlie St. Cloud, New Year\'s Eve, The Lucky One, That Awkward Moment, Neighbors, and The Lorax.',
            birthday: 'October 18, 1987'
          },
          {
            name: 'Owen Wilson',
            headshot_url: 'img/wilson.jpg',
            bio: 'Owen Cunningham Wilson is an American actor, voice-over artist, writer, producer, and screenwriter. His older brother Andrew and his younger brother Luke are also actors. He has had a long association with filmmaker Wes Anderson, whom he shared writing and acting credits with for Bottle Rocket (1996) and The Royal Tenenbaums (2001), the latter being nominated for an Academy Award for Best Original Screenplay. He has also had one with Ben Stiller. The two had appeared in 10 films together. Wilson is best known for his roles in Meet the Parents (2000), Shanghai Noon (2000), Zoolander (2001), Shanghai Knights (2003), Wedding Crashers (2005), Cars (2006), Marley & Me (2008), Midnight in Paris (2011), Cars 2 (2011), The Internship (2013), and the Night at the Museum trilogy (2006, 2009, and 2014).',
            birthday: 'November 18, 1968'
          },
          {
            name: 'Rob Schneider',
            headshot_url: 'img/schneider.jpg',
            bio: 'Robert Michael "Rob" Schneider (born October 31, 1963) is an American actor, comedian, screenwriter, and director. A stand-up comic and veteran of the NBC sketch comedy series Saturday Night Live, he went on to a successful career in feature films, including starring roles in several comedy films.',
            birthday: 'October 31, 1963'
          },
          {
            name: 'Andy Dick',
            headshot_url: 'img/andy_d.jpg',
            bio: 'Andrew Roane "Andy" Dick (born December 21, 1965) is an American comedian, actor, musician and television/film producer. He is best known as a comic, for his eccentric and controversial behavior. His first regular television role was on the short-lived but influential Ben Stiller Show. In the mid-1990s, he had a long-running stint on NBC\'s NewsRadio and was a supporting character on Less than Perfect. He briefly had his own program, The Andy Dick Show on MTV. He is noted for his outlandish behavior from a number of Comedy Central Roasts. Andy landed in 7th place on the 16th season of Dancing with the Stars.',
            birthday: 'December 21, 1965'
          },
          {
            name: 'Nicolas Cage',
            headshot_url: 'img/cage.jpg',
            bio: 'Nicolas Kim Coppola, known professionally as Nicolas Cage, is an American actor and producer. He has performed in leading roles in a variety of films, ranging from romantic comedies and dramas to science fiction and action films. In the early years of his career, Cage starred in films such as Valley Girl (1983), Racing with the Moon (1984), Birdy (1984), Peggy Sue Got Married (1986), Raising Arizona (1987), Moonstruck (1987), Vampire\'s Kiss (1989), Wild at Heart (1990), Honeymoon in Vegas (1992), and Red Rock West (1993).Cage received an Academy Award, a Golden Globe, and Screen Actors Guild Award for his performance as an alcoholic Hollywood writer in Leaving Las Vegas (1995) before coming to the attention of wider audiences with mainstream films such as The Rock (1996), Face/Off (1997), Con Air (1997), City of Angels (1998), and National Treasure (2004). He earned his second Academy Award nomination for his performance as Charlie and Donald Kaufman in Adaptation (2002). In 2002, he directed the film Sonny, for which he was nominated for Grand Special Prize at Deauville Film Festival. Cage owns the production company Saturn Films and has produced films such as Shadow of the Vampire (2000) and The Life of David Gale (2003).Through his performances in The Weather Man (2005), Lord of War (2005), The Bad Lieutenant: Port of Call New Orleans (2009), and Kick-Ass (2010) he earned critical acclaim. Films such as Ghost Rider (2007) and Knowing (2009) were box office successes. Cage has been strongly criticized in recent years for his choice of roles, some of which have been universally panned.[2][3] However, he recently starred in The Croods and Joe, both of which were warmly received by critics.',
            birthday: 'January 7, 1964'
          },
          {
            name: 'Jaden Smith',
            headshot_url: 'img/smith.jpg',
            bio: 'Jaden Christopher Syre Smith is an American actor and rapper. He is the son of actors Jada Pinkett Smith and Will Smith, elder brother of singer Willow Smith and younger half-brother of Trey Smith. His first movie role was in the 2006 film The Pursuit of Happyness, with his father. He has also appeared in the remakes of The Day the Earth Stood Still and The Karate Kid, as well as the 2013 film After Earth - also with his father.',
            birthday: 'July 8, 1998'
          },
          {
            name: 'Chuck Norris',
            headshot_url: 'img/norris.jpg',
            bio: 'Carlos Ray "Chuck" Norris is an American martial artist, actor, film producer and screenwriter. After serving in the United States Air Force, he began his rise to fame as a martial artist, and has since founded his own school, Chun Kuk Do. Norris appeared in a number of action films, such as Way of the Dragon, in which he starred alongside Bruce Lee, and was The Cannon Group\'s leading star in the 1980s. He played the starring role in the television series Walker, Texas Ranger from 1993 until 2001. Norris is a devout Christian and politically conservative. He has written several books on Christianity and donated to a number of Republican candidates and causes. In 2007 and 2008, he campaigned for former Arkansas Governor Mike Huckabee, who was running for the Republican nomination for president in 2008. Norris also writes a column for the conservative website WorldNetDaily. Since 2005 Norris has been widely associated with an internet meme which documents fictional and often absurd feats associated with him.',
            birthday: 'March 10, 1940'
          },
          {
            name: 'Kristen Stewart',
            headshot_url: 'img/stewart.jpg',
            bio: 'Kristen Jaymes Stewart is an American actress, known for playing the protagonist Bella Swan in The Twilight Saga film series from 2008–12, which has grossed over $3.3 billion worldwide. She is the "face" of Chanel and Balenciaga fashion brands. tewart began her career in 1999 and came to prominence playing Jodie Foster\'s daughter in the 2002 thriller Panic Room. She has since starred in a range of films, including Speak (2004), Zathura (2005), Into The Wild (2007), Adventureland (2009), The Runaways (2010), Snow White and the Huntsman (2012), On the Road (2012), Camp X-Ray (2014), Still Alice (2014) and Equals (2015). Stewart was listed as the highest-earning female actress in the Vanity Fair "Hollywood Top Earners List of 2010", with an estimated earning of $28.5 million. In 2011, she was named number one on Forbes magazine\'s list of "Hollywood\'s Best Actors for the Buck". Forbes also named her as the highest paid actress in 2012, with total earnings of $34.5 million. She won the Rising Star BAFTA Award in 2010, and became the first American actress to win a Cesar Award, when she won Best Supporting Actress in 2015 for her role opposite Juliette Binoche in Clouds of Sils Maria (2014).',
            birthday: ' April 9, 1990'
          },
          {
            name: 'Lindsay Lohan',
            headshot_url: 'img/lohan.jpg',
            bio: "Lindsay Dee Lohan is an American actress, singer, songwriter, model, director and producer, whose career has included critical and popular success in her youth, followed by a period of substance abuse and legal troubles that have been well-documented in the tabloids. he began her career as a child fashion model when she was three, and was later featured on the soap opera Another World for a year when she was 10. At age 11, Lohan made her motion picture debut in Disney's remake of The Parent Trap (1998), a critical and commercial success. Her next major motion picture, Disney's remake of Freaky Friday (2003), was also a critical and commercial success. With the release of Mean Girls (2004), another critical and commercial success, and Disney's Herbie: Fully Loaded (2005), another commercial success, Lohan became a teen idol sensation, a household name and a frequent focus of paparazzi and tabloids. Lohan's next starring role in the romantic comedy Just My Luck (2006) was a commercial success. Following Just My Luck, Lohan focused on smaller more mature roles in independent movies, receiving positive comments on her work, including A Prairie Home Companion (2006), Bobby (2006) and Chapter 27 (2007).",
            birthday: 'July 2, 1986'
          },
          {
            name: 'Sarah Jessica Parker',
            headshot_url: 'img/parker.jpg',
            bio: 'Sarah Jessica Parker is an American actress, producer, and designer. She is best known for her leading role as Carrie Bradshaw on the HBO television series Sex and the City (1998–2004). She was also an executive producer on the show, and won two Emmy Awards, for Outstanding Comedy Series in 2001 and Outstanding Lead Actress in a Comedy Series in 2004. Parker made her Broadway debut in 1976 aged 11, in the revival of The Innocents, before going on to star in the title role of the Broadway musical Annie in 1979. She then appeared in the 1984 films Footloose and Firstborn. She returned to Broadway in the 1989 play The Heidi Chronicles. Her other film roles include L.A. Story (1991), Honeymoon in Vegas (1992), Hocus Pocus (1993), Ed Wood (1994), The First Wives Club (1996), The Family Stone (2005) and Failure to Launch (2006). In addition to her two Emmy wins, she also won four Golden Globe Awards and three Screen Actors Guild Awards for Sex and the City. She reprised her role of Carrie Bradshaw in the films Sex and the City: The Movie (2008) and Sex and the City 2 (2010).',
            birthday: 'March 25, 1965'
          },
          {
            name: 'Paris Hilton',
            headshot_url: 'img/hilton.jpg',
            bio: 'Paris Whitney Hilton is an American socialite, television personality, model, actress, singer, DJ and author. She is the great-granddaughter of Conrad Hilton, the founder of Hilton Hotels. Born in New York City and raised there and in Beverly Hills, California, Hilton began her modeling career as a teenager when she signed with Donald Trump\'s agency, Trump Model Management. Her lifestyle and rumored short-lived relationships made her a feature of entertainment news, and Hilton was proclaimed "New York\'s leading It Girl" in 2001. In 2003, a sex tape with Hilton and her then-boyfriend Rick Salomon, later released as 1 Night in Paris, was made public. Released only three weeks before the premiere of the reality television series The Simple Life, in which she starred alongside her long-time friend Nicole Richie, the sex tape became a media sensation. The Simple Life continued for five seasons and gave both women international recognition.',
            birthday: 'February 17, 1981'
          },
          {
            name: 'Janet Jackson',
            headshot_url: 'img/jackson.jpg',
            bio: 'Janet Damita Jo Jackson is an American singer, songwriter, and actress. Known for a series of sonically innovative, socially conscious and sexually provocative records, as well as elaborate stage shows, television and film roles, she has been a prominent figure in popular culture for over 25 years. The youngest child of the Jackson family, she began her career with the variety television series The Jacksons in 1976 and went on to appear in other television shows throughout the 1970s and early 1980s, including Good Times and Fame. After signing a recording contract with A&M Records arranged by her father and manager Joseph Jackson in 1982, she became a pop icon following the release of her third studio album Control (1986). Her collaborations with record producers Jimmy Jam and Terry Lewis incorporated elements of rhythm and blues, funk, disco, rap, and industrial beats, which led to crossover success in popular music. In addition to receiving recognition for the innovation in her records, choreography, music videos, and prominence on radio airplay and MTV, she was acknowledged as a role model for her socially conscious lyrics.',
            birthday: 'May 16, 1966'
          },
          {
            name: 'Kim Kardashian',
            headshot_url: 'img/kardashian.jpg',
            bio: 'Kimberly "Kim" Kardashian West (born Kimberly Noel Kardashian) is an American television and social media personality, socialite, and model. Born and raised in Los Angeles, California, Kardashian first gained media attention through her friendship with Paris Hilton, but she received wider notice after a 2003 sex tape with her former boyfriend Ray J was leaked in 2007.',
            birthday: 'October 21, 1980'
          },
          {
            name: 'Britney Spears',
            headshot_url: 'img/spears.jpg',
            bio: 'Britney Jean Spears is an American singer and actress. Born in McComb, Mississippi, and raised in Kentwood, Louisiana, she performed acting roles in stage productions and television shows as a child before signing with Jive Records in 1997. Spears\'s first and second studio albums, ...Baby One More Time (1999) and Oops!... I Did It Again (2000), became international successes, with the former becoming the best-selling album by a teenage solo artist.[1] Title tracks "...Baby One More Time" and "Oops!... I Did It Again" broke international sales records. In 2001, Spears released her self-titled third studio album, Britney, and played the starring role in the film Crossroads (2002). She assumed creative control of her fourth studio album, In the Zone (2003), which yielded the worldwide success of the "Toxic" single.',
            birthday: 'December 2, 1981'
          },
          {
            name: 'Miley Cyrus',
            headshot_url: 'img/cyrus.jpg',
            bio: 'Miley Ray Cyrus (born as Destiny Hope Cyrus) is an American singer, songwriter, and actress. Her father is country singer Billy Ray Cyrus. She held minor roles in the television series Doc and the film Big Fish in her childhood. In 2006, Cyrus rose to prominence as a teen idol after being cast in the Disney Channel television series Hannah Montana, in which she portrayed the starring character Miley Stewart. After signing a recording contract with Hollywood Records in 2007, Cyrus released her debut studio album Meet Miley Cyrus. It was certified quadruple-platinum by the Recording Industry Association of America (RIAA) for exceeding four million shipments, and produced the hit single "See You Again". In 2008, Cyrus released her second album Breakout, which featured the successful track "7 Things", and launched her film career as the voice actress in the animated film Bolt. In 2009, Cyrus starred in the feature film Hannah Montana: The Movie; its soundtrack produced the hit single "The Climb". Cyrus developed a maturing image with the EP The Time of Our Lives (2009), which featured the successful track "Party in the U.S.A.". The transition continued with her third album Can\'t Be Tamed (2010); the title track would become another top ten for Cyrus; however, it made little commercial impact and became the lowest-selling record of her career. Later that year, Cyrus starred in the coming-of-age film The Last Song. During its production, she was involved in an on-again, off-again relationship with her co-star Liam Hemsworth; the couple ultimately separated after ending their year-long engagement in 2013.',
            birthday: 'November 23, 1992'
          }
        ]
        console.log(array)

          return array;
        }

      return {
          getMovies: getMovies,
          getActors: getActors
        };


    })
})();
