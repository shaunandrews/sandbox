# Ok, lets build something.

A recipe web app that allows multiple people to plan a weekly meal plan and shopping list.

## Our use case:
Amy, me, and our three kids (Jackson, Tyler, and Mason) try to have dinner together (or, in proximity) most nights. But we don't always have time (or remember) to plan ahead, and when it comes time to do the grocery shopping we'll resort to unhealthy, quick (and expensive!) meals. We also end up having the same meals again and again because we know what ingredients to buy. Instacart makes this worse by recommending previously purchased items.

In reality, we'd much prefer to sit down as a family and think about what we want to eat, and how we can improve all our diets.

## The app
At it's core, our app should make it easy for anyone in our family to request a specific meal, or a specific purchase for our weekly grocery shopping. The app should encourage variety of meals and cuisines, along with leaning towards healthy diets low in sugary and fats.

### Mock flows
#### Jackson's watching a movie, and see's a character eating spagetti and meatballs. Yum. He want's some too. He switches to our app (he's watching the movie on his iPad, and already has our app saved to the home screen), and see's "this week's menu", and the current list of "options for next week". Jackson taps the "new suggestion" button. A text input appears with a blinking cursor; Inside the input is some placeholder test that reads: Suggest a meal or purchase...

Jackson startings typing: "spagheti & meatballs" and taps the return key. The text input disappears, and a new item is added to the list of "options for next week". The new item reads: "spagheti & meatballs, added just now by [blue]Jackson[/blue]"

Jackson swipes back to his movie and hopes everyone votes for his new suggestions tomorrow when Dad does picks the menu.

#### Mason just got home from school, and he's hungry. He opens our app on his phone to see what's for dinner tonight. He already has the app saved to his browser's favorites. He see's tonight's option in big letters: "Wed Dec 20, Beef and Broccoli with Rice"

#### Dad's looking through the fridge and thinking we'll need to order some groceries soon. He opens the app on his phone and taps the "plan meals" button. He see's a list of suggestion that have been made, with the newest at the top:

- spagheti & meatballs, 2 hrs ago, [blue]Jackson[/blue], 2 thumbs up
- pizza, yesterday, [green]Mason[green], 2 thumbs up
- pork tenderloin, 3 thumbs up
- mashed potatoes, 4 thumbs up
- asparagus, 5 thumbs up
- bok choy, 2 thumbs up
- ramen, 3 thumbs up
- chicken with mushrooms and carrots, 2 thumbs up
- tacos! tacos! tacos!, 4 thumbs up

The list continues with a mixture of specific meals, and some options for sides. He taps a few of the options that look good, Jackson just asked for spagheti and meatballs, so we'll do that. Dad taps the big button that says "Continue" at the bottom of his screen.

A new screen appears and, based on the previous selection, offers a few new variants, and some more healthy sideas. He sees:

- Sneak some zucchini into your meatballs?                      [ Yes ]  No
- Replace spagheti with spagheti squash?                        [ Yes ]  No
- You bought cheeze-it's last week. Maybe take a break?         [ Yes ]  No
- How about switching to chicken thighs? Cheaper, and tastier.  [ Yes ]  No

The list of changes is presented all at once, and in a way that makes it easy to scroll through and tap "No" on a few he doesn't like. These changes try to offer more variety in meals in terms of ingredients, cuisines, and complexity. They also encourage reducing carbohydrates and sugars, while increasing vitamins and whole foods.

Dad once again taps the "Continue" button, and a new screen appears with a final list of meal options. Dad planning on buying groceries for the next 4 days: Thurs Dec 21, Fri Dec 22, Sat Dec 23, and Sun Dec 24.

He taps his first choice; The selected meal floats to the top of the list and now includes "Thus Dec 21". He taps another meal, and that meals floats up and positions itself just below the first selection. This new selection now includes "Fri Dec 22." Dad does this two more times, and then taps the "Done" button.

Dad now see's our apps main screen. It reads "Wed Dec 20, Beef and Broccoli with Rice." There's a new message at the bottom of the screne that reads "New Meals added for the next 4 days. [ View Meals ]"

#### Mom get's a message in the family's group chat. It's Dad. He's just picked out a bunch of meals for the next few days. Mom taps the link in the group chat; He browser opens to our app, and she see's the following:


*** Upcoming Meals ***
- (Today) Wed Dec 20, Beef and Broccoli with Rice
- Thur Dec 21, Moroccan Chicken Thighs with Zucchini, Carrots, and Onion
- Fri Dec 22, Roasted Pork with Potatoes and Carrots served with Garden Salad
- Sat Dec 23, Baked Chicken with Black Beans and Rice
- Sun Dec 24, Smoke Baby Back Ribs, Mac 'n Cheese, Stuffed Mushrooms, and Asparagus

[ new suggestion ] [ plan meals ] [ more ]


Mom looks through the list and gets hungry. She taps the "more" button, and a menu appears. She finds a "Shop in Instacart" options and taps it. The list of "Upcoming Meals" morphs into a tappable list of options, with each item now showing a checked checkmark button:


*** Choose what meals to shop for... ***
[*] (Today) Wed Dec 20, Beef and Broccoli with Rice
[*] Thur Dec 21, Moroccan Chicken Thighs with Zucchini, Carrots, and Onion
[*] Fri Dec 22, Roasted Pork with Potatoes and Carrots served with Garden Salad
[*] Sat Dec 23, Baked Chicken with Black Beans and Rice
[*] Sun Dec 24, Smoke Baby Back Ribs, Mac 'n Cheese, Stuffed Mushrooms, and Asparagus

[ Send to Instacart ]


She already shopped for the beef and broccoli, so she untaps that and then taps the send button. Instacart opens and includes all the ingredients needs for the next four nights of family meals.