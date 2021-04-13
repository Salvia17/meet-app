Feature: Show/hide event details.

Scenario: An event element is collapsed by default
Given an app is open 
And list event element has been loaded
When the user hasn't clicked on details button yet
Then an event element is collapsed by default

Scenario: User can expand an event to see its details
Given an app is open 
And list event element has been loaded
When the user clicks on details button
Then an event element will expand to show its details

Scenario: User can collapse an event to hide its details
Given an app is open
And event element has been expanded
When the user clicks on hide details button
Then an event element will collapse to hide its details