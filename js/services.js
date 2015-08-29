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
            bio: 'Christopher Ashton Kutcher is an American actor, producer, investor and former model. Kutcher began his career as a model. He began his acting career portraying Michael Kelso in the Fox sitcom That 70s Show, which aired for eight seasons.',
            birthday: 'February 7, 1978'
          },
          {
            name: 'Shia LeBeauf',
            headshot_url: 'img/lebeauf.jpg',
            bio: 'Shia Saide LaBeouf is an American actor and director who became known among younger audiences as Louis Stevens in the Disney Channel series Even Stevens',
            birthday: 'June 11, 1986'
          },
          {
            name: 'Charlie Sheen',
            headshot_url: 'img/sheen.jpg',
            bio: 'Carlos Irwin Estévez, best known by his stage name Charlie Sheen, is an American actor. Sheen rose to fame after a series of successful films such as Platoon (1986), Lucas (1986), Ferris Bueller\'s Day Off (1986), Wall Street (1987), Young Guns (1988), Eight Men Out (1988), Major League (1989), Hot Shots! (1991), The Three Musketeers (1993), The Arrival (1996), Money Talks (1997), and Being John Malkovich (1999).',
            birthday: 'September 3, 1965'
          },
          {
            name: 'Dwayne Johnson',
            headshot_url: 'img/johnson.jpg',
            bio: 'Dwayne Douglas Johnson, also known by his ring name The Rock, is an American and Canadian actor, producer, and professional wrestler.',
            birthday: 'May 2, 1972'
          },
          {
            name: 'Zac Efron',
            headshot_url: 'img/efron',
            bio: 'Zachary David Alexander "Zac" Efron (born October 18, 1987)[2] is an American actor and singer. He began acting professionally in the early 2000s, and became known as a teen idol after his lead roles in the Disney Channel Original Movie High School Musical, the WB series Summerland, and the 2007 film version of the Broadway musical Hairspray.[3][4][5] Efron has since starred in the films 17 Again, Me and Orson Welles, Charlie St. Cloud, New Year\'s Eve, The Lucky One, That Awkward Moment, Neighbors, and The Lorax.',
            birthday: 'October 18, 1987'
          },
          {
            name: 'Owen Wilson',
            headshot_url: 'img/wilson.jpg',
            bio: 'Owen Cunningham Wilson is an American actor, voice-over artist, writer, producer, and screenwriter. His older brother Andrew and his younger brother Luke are also actors.',
            birthday: 'November 18, 1968'
          },
          {
            name: 'Rob Schneider',
            headshot_url: 'img/schneider.jpg',
            bio: 'Robert Michael "Rob" Schneider (born October 31, 1963) is an American actor, comedian, screenwriter, and director. A stand-up comic and veteran of the NBC sketch comedy series Saturday Night Live, he went on to a successful career in feature films, including starring roles in several comedy films',
            birthday: 'October 31, 1963'
          },
          {
            name: 'Andy Dick',
            headshot_url: 'img/andy_d.jpg',
            bio: 'Andrew Roane "Andy" Dick (born December 21, 1965) is an American comedian, actor, musician and television/film producer. He is best known as a comic, for his eccentric and controversial behavior.',
            birthday: 'December 21, 1965'
          },
          {
            name: 'Nicolas Cage',
            headshot_url: 'img/cage.jpg',
            bio: 'Nicolas Kim Coppola, known professionally as Nicolas Cage, is an American actor and producer. He has performed in leading roles in a variety of films, ranging from romantic comedies and dramas to science fiction and action films.',
            birthday: 'January 7, 1964'
          },
          {
            name: 'Jaden Smith',
            headshot_url: 'img/smith.jpg',
            bio: 'Jaden Christopher Syre Smith is an American actor and rapper. He is the son of actors Jada Pinkett Smith and Will Smith, elder brother of singer Willow Smith and younger half-brother of Trey Smith.',
            birthday: 'July 8, 1998'
          },
          {
            name: 'Chuck Norris',
            headshot_url: 'img/norris.jpg',
            bio: 'Carlos Ray "Chuck" Norris is an American martial artist, actor, film producer and screenwriter. After serving in the United States Air Force, he began his rise to fame as a martial artist, and has since founded his own school, Chun Kuk Do.',
            birthday: 'March 10, 1940'
          },
          {
            name: 'Kristen Stewart',
            headshot_url: 'img/stewart.jpg',
            bio: 'Kristen Jaymes Stewart is an American actress, known for playing the protagonist Bella Swan in The Twilight Saga film series from 2008–12, which has grossed over $3.3 billion worldwide. She is the "face" of Chanel and Balenciaga fashion brands.',
            birthday: ' April 9, 1990'
          },
          {
            name: 'Lindsey Lohan',
            headshot_url: 'img/lohan.jpg',
            bio: "Lindsay Dee Lohan is an American actress, singer, songwriter, model, director and producer, whose career has included critical and popular success in her youth, followed by a period of substance abuse and legal troubles that have been well-documented in the tabloids.",
            birthday: 'July 2, 1986'
          },
          {
            name: 'Sarah Jessica Parker',
            headshot_url: 'img/parker.jpg',
            bio: 'Sarah Jessica Parker is an American actress, producer, and designer. She is best known for her leading role as Carrie Bradshaw on the HBO television series Sex and the City (1998–2004). She was also an executive producer on the show, and won two Emmy Awards, for Outstanding Comedy Series in 2001 and Outstanding Lead Actress in a Comedy Series in 2004.',
            birthday: 'March 25, 1965'
          },
          {
            name: 'Paris Hilton',
            headshot_url: 'img/hilton.jpg',
            bio: 'Paris Whitney Hilton is an American socialite, television personality, model, actress, singer, DJ and author. She is the great-granddaughter of Conrad Hilton, the founder of Hilton Hotels. Born in New York City and raised there and in Beverly Hills, California, Hilton began her modeling career as a teenager when she signed with Donald Trump\'s agency, Trump Model Management.',
            birthday: 'February 17, 1981'
          },
          {
            name: 'Janet Jackson',
            headshot_url: 'img/jackson.jpg',
            bio: 'Janet Damita Jo Jackson is an American singer, songwriter, and actress. Known for a series of sonically innovative, socially conscious and sexually provocative records, as well as elaborate stage shows, television and film roles, she has been a prominent figure in popular culture for over 25 years.',
            birthday: 'May 16, 1966'
          },
          {
            name: 'Mariah Carey',
            headshot_url: 'img/carey.jpg',
            bio: 'Mariah Carey is an American singer, songwriter, record producer, and actress. She rose to prominence after releasing her self-titled debut studio album Mariah Carey in 1990; it went multiplatinum and spawned four consecutive number one singles on the U.S. Billboard Hot 100 chart.',
            birthday: 'March 27, 1969'
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
            bio: 'Britney Jean Spears is an American singer and actress. Born in McComb, Mississippi, and raised in Kentwood, Louisiana, she performed acting roles in stage productions and television shows as a child before signing with Jive Records in 1997.',
            birthday: 'December 2, 1981'
          },
          {
            name: 'Miley Cyrus',
            headshot_url: 'Miley Ray Cyrus (born as Destiny Hope Cyrus) is an American singer, songwriter, and actress. Her father is country singer Billy Ray Cyrus. She held minor roles in the television series Doc and the film Big Fish in her childhood. In 2006, Cyrus rose to prominence as a teen idol after being cast in the Disney Channel television series Hannah Montana, in which she portrayed the starring character Miley Stewart.',
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
