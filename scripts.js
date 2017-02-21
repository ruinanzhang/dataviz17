/* Description of my data here */
			/* These data shows Colombian Refugees' number, IDPs' numbers, problems Colombian refugees facing, hosting countries and their living conditions.*/
			/* This is number, the number shows that the total Colombian refugees number is 90836 according to UNHCR's report by the end of 2015.*/
			var Colombian_Refugees_number = 90836;
			/* This is number, the number shows that the total Colombian IDPs number is 6939067 according to UNHCR's report by the end of 2015.*/
			var Colombian_Idps_number = 6939067;
			/* This is an object */
			/* This shows the all problems Colombian facing in hosting countries: lack of security; lack of protection of women and children; failure of local assimilation; lack of legal status. */
			/* The problem2 includes an array that lists three major issues women and children facing.*/
			/* The problem3 incldues an object that shows difficulties that Colombian refugees facing when it comes to local assimilation.*/
			var Colombian_Refugees_problem = {
				"problem1" : "Security",
				"problem2" : ["women are forced to prostitution", "women are facing sexual harassment", "children cannot access to secondary education"],
				"problem3" : {
					"local_assimilation1" : "Unemployment",
					"local_assimilation2" : "culture differences",
					"local_assimilation3" : "lack of fundings and resources"
				},
				"problem4" : "illegal status"
			};
			/* This is a list*/
			/* The list shows the destination countries that Colombian refugees fled*/
			var Colombian_Refugees_destination = ["Ecuador", "Panama", "Venezuela", "Canada", "U.S."];
			/* This is a boolean*/
			/* This shows most Colombian refugees are not in a good living condition.*/
			var Colombian_Refugees_goodcondition = false;
			/* This is a string*/
			/* This shows most assistance Colombian Refugees accepted is from UNHCR.*/
			var Colombian_Refugees_most_assistance = "UNHCR";

			console.log("This is my first time use console.log function");

			console.log(Colombian_Refugees_destination);

			console.log(Colombian_Refugees_problem);

			/*This is my JavaScript list of my articles about my first story.*/
			/*Each article is an object in my list.*/

			var my_relevant_stories = [{

				/* This is my first article, I create 6 properties for every article:
				 * Headline;Published_year;Program;URL_link;Picture;Story_Summary.
				 * And I will use this as a template for all my articles below.
				 */

				"Headline" : "Bronx Farm Helps Refugees Put Down Roots",
				/* This is my article's titile, it's about the New Roots program in NYC.*/

				"Published_year" : "2016",
				/* This is article is published in 2016. */

				"Program" : "New Roots",
				/* This is about an organization that supported by IRC called New Root. */

				"URL_link" : "http://urbanomnibus.net/2016/02/bronx-farm-helps-refugees-put-down-roots/",
				/* This is my article's url link. */

				"Picture" : "http://urbanomnibus.net/redux/wp-content/uploads/2016/02/IMG_20150604_154948380_Resized-650x366.jpg",
				/* I found this picture used in the article and it was a picture of the farm.*/

				"Story_summary" : "New Roots program manager Kathleen Mctigue talks about many roles of the farm and its crucial place in the refugee resettlement process."
				/* This is my summary of my article. */

			}, {
				/*This is my second article about New Roots program from another website. */

				"Headline" : "International Rescue Committee Helps Refugees Plant New Roots",
				/* This is my article's titile, it's another story about the New Roots program.*/

				"Published_year" : "2015",
				/* This is article is published in 2015. */

				"Program" : "New Roots",
				/* This is about an organization that supported by IRC called New Root. */

				"URL_link" : "http://modernfarmer.com/2015/10/international-rescue-committee-new-roots/",
				/* This is my article's url link. */

				"Picture" : "http://cdn.modernfarmer.com/wp-content/uploads/2015/10/refugees-hero.jpg",
				/* This is a picture of Koffi Ogou holding vegetables in front of the farm. */

				"Story_summary" : "This is a story about Koffi Ogou, a refugee from Togolese that joined the New Roots in Phoenix, AZ. "
				/* This is my summary of my article. */

			}, {

				/*This is my third article about a restaurant called Safari run by a Somali refugee. */

				"Headline" : "Safari Brings Somali Cuisine to Harlem",
				/* This is my article's titile, it's a story about the restaurant Safari.*/

				"Published_year" : "2015",
				/* This is article is published in 2015. */

				"Program" : "Somali Restaurant",
				/* This is about a restaurant run owned by Somali refugees. */

				"URL_link" : "https://www.nytimes.com/2015/10/07/dining/hungry-city-safari-somali-restaurant-harlem.html?smid=pl-share&_r=1",
				/* This is my article's url link. */

				"Picture" : "https://static01.nyt.com/images/2015/10/07/dining/07HUNGRY-SAFARI-slide-C97U/07HUNGRY-SAFARI-slide-C97U-master1050.jpg",
				/* This is a picture of the cuisine that provided by Safari. */

				"Story_summary" : "This is a story about the restaurant called Safari that owned by Maymuuna Birjeeb, a Somali refugee came to the U.S 15 years ago. "
				/* This is my summary of my article. */

			}, {

				/*This is my forth article about a startup company called Eat Offbeat. */

				"Headline" : "Inside Eat Offbeat, The Refugee-Run Kitchen That's Satisfying Adventurous Eaters With A Taste For Social Good",
				/* This is my article's titile, it's a story about Eat Offbeat -- a startup company runs by refugees in NYC.*/

				"Published_year" : "2016",
				/* This is article is published in 2016. */

				"Program" : "Eat Offbeat",
				/* This is about another food projects related to refugees called Eat Offbeat. */

				"URL_link" : "http://www.forbes.com/sites/katiesola/2016/08/22/inside-eat-offbeat-the-refugee-run-kitchen-thats-satisfying-adventurous-eaters-with-a-taste-for-social-good/#447b31b222d5",
				/* This is my article's url link. */

				"Picture" : "http://specials-images.forbesimg.com/imageserve/57b1e71b4bbe6f092f72d639/960x.jpg",
				/* This is a picture of the chef of Eat Offbeat, who grew up in Iraq.*/

				"Story_summary" : "This is a story about how Eat Offbeat bring all kinds of food from refugees hometowns to people in NYC."
				/* This is my summary of my article. */

			}];

			/* My Goal: loop through my list of stories (my_relevant_stories) and console log print only the ones that published in 2016. */

			/* I created a for loop to go through my list of relevant stories*/

			function IDNYTimes(list_of_articles) {
				//Inside function, list_of_articles means any list you are using now.//

				for (var counter = 0; counter < list_of_articles.length; counter++) {

					/* For every item in my list that I will loop through, I count from 0 and I want to go through all items in my list.
					 * And I will count and add up by 1.
					 * The loop will continue as long as it not longer than my list.
					 */
					var a_story = list_of_articles[counter];
					/* To look at stories in my list that published in 2016.
					 * I created another box called a_story to put all my stories that published in 2016*/

					if (a_story.Published_year == "2016") {
						/* I use the function if to check whether the property: Published_year of the object in my list is 2016.
						 * So if the value is 2016,
						 * I want use console log to print this story.*/
						console.log(a_story);
					}
					/* If the value is not 2016,
					 * then I want console log to print "Not 2016"*/
					else {
						console.log("Not 2016")
					}

				}

			}
			/*Call the my newly-wrote function*/
			/*Calling it with y first list */
			IDNYTimes(my_relevant_stories);
			
			/*Calling it with my second list:
			 * If we have second list
			 */ 
			// IDNYTimes(my_relevant_stories_2);