This serverless, progressive web application (PWA) is built with React using a
test-driven development (TDD) technique. The application uses the Google
Calendar API to fetch upcoming events.
<br><br>
Key Features:<br>
<li>
  <ul>
● Filter events by city.
  </ul>
  <ul>
● Show/hide event details.
  </ul>
  <ul>
● Specify number of events.
  </ul>
  <ul>
● Use the app when offline.
  </ul>
  <ul>
● Add an app shortcut to the home screen.
  </ul>
  <ul>
● View a chart showing the number of upcoming events by city.
  </ul>
</li>
<br>
User stories and Gherkin syntax
<br>
FEATURE 1: FILTER EVENTS BY CITY<br>
USER STORY FEATURE 1: As a user, I should be able to filter events by city, so that I can see what is happening where I am located.<br>
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
<li>
  <ul>
⦁	Given user hasn’t searched for any city;
  </ul>
  <ul>
⦁	When the user opens the app;
  </ul>
  <ul>
⦁	Then the user should see a list of all upcoming events.
  </ul>
  </li><br>
Scenario 2: User should see a list of suggestions when they search for a city.
<li>
  <ul>
⦁	Given the main page is open;
  </ul>
  <ul>
⦁	When user starts typing in the city textbox;
  </ul>
  <ul>
⦁	Then the user should see a list of cities (suggestions) that match what they’ve typed.
  </ul>
  </li><br>
Scenario 3: User can select a city from the suggested list.
<li>
  <ul>
⦁	Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing;
  </ul>
  <ul>
⦁	When the user selects a city (e.g., “Berlin, Germany”) from the list;
  </ul>
  <ul>
⦁	Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city.
</ul>
</li><br>

FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS<br>
USER STORY FEATURE 2: As a user, I should be able to show/hide an event's details, so that I can see what is exactly happening at each event.<br>
Scenario 1: An event element is collapsed by default.
<li>
  <ul>
⦁	Given an app and list event element has been loaded;
    </ul>
  <ul>
⦁	When the user hasn't clicked on details button yet;
  </ul>
  <ul>
⦁	Then an event element is collapsed by default.
  </ul>
  </li><br>
Scenario 2: User can expand an event to see its details.
<li>
  <ul>
⦁	Given an app and list event element has been loaded;
     </ul>
  <ul>
⦁	When the user clicks on details button;
     </ul>
  <ul>
⦁	Then an event element will expand to show its details.
     </ul>
  </li><br>
Scenario 3: User can collapse an event to hide its details.
<li>
  <ul>
⦁	Given an app is loaded and event element has been expanded;
     </ul>
  <ul>
⦁	When the user clicks on hide details button;
     </ul>
  <ul>
⦁	Then an event element will collapse to hide its details.
     </ul>
  </li><br>

FEATURE 3: SPECIFY NUMBER OF EVENTS<br>
USER STORY FEATURE 3: As a user, I should be able to change the number of events, so that I can choose the number of events to view at one time.<br>
Scenario 1: When user hasn’t specified a number, 32 is the default number.
<li>
  <ul>
⦁	Given the user hasn't specified the number of events;
     </ul>
  <ul>
⦁	When the app is loaded;
     </ul>
  <ul>
⦁	Then the default number of events to load is 32.
     </ul>
  </li><br>
Scenario 2: User can change the number of events they want to see.
<li>
  <ul>
⦁	Given the app and events are loaded;
     </ul>
  <ul>
⦁	When the user changes the default number of events to show;
     </ul>
  <ul>
⦁	Then the number of events loaded should change to match the number user chose.
     </ul>
  </li><br>

FEATURE 4: USE THE APP WHEN OFFLINE<br>
USER STORY FEATURE 4: As a user, I should be able to use the app offline, so that  I don’t need internet access to see the events I was viewing previously.<br>
Scenario 1: Show cached data when there’s no internet connection.
<li>
  <ul>
⦁	Given there is no internet connection;
     </ul>
  <ul>
⦁	When the user opens the app;
     </ul>
  <ul>
⦁	Then the app should show data that was loaded last.
     </ul>
  </li><br>
Scenario 2: Show error when user changes the settings (city, time range).
<li>
  <ul>
⦁	Given there is no internet connection and the app is open;
     </ul>
  <ul>
⦁	When the user tries changing settings (city, time range);
     </ul>
  <ul>
⦁	Then the app shows error message saying in order to change settings the user must reconnect to internet.
     </ul>
  </li><br>

FEATURE 5: DATA VISUALIZATION<br>
USER STORY FEATURE 5: As a user, I should be able to view a chart of events in each city, so that I can see the number of upcoming events in each city.<br>
Scenario 1: Show a chart with the number of upcoming events in each city.
<li>
  <ul>
⦁	Given the user has selected to view events in few cities;
     </ul>
  <ul>
⦁	When the user opens an app;
     </ul>
  <ul>
⦁	Then the user should be able to see a graph or chart with multiple cities and number of events in each city for better visualisation and easier choosing.
     </ul>
  </li>
