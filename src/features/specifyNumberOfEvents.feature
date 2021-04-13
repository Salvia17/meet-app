Feature: Specify number of events

Scenario: When user hasn’t specified a number, 15 is the default number
Given the user hasn't specified the number of events
When the app is loaded
Then the default number of events to load is 15

Scenario: User can change the number of events they want to see
Given the app and events are loaded
When the user changes the default number of events to show
Then the number of events loaded should change to match the number user chose