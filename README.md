# Project Overview

## Project Links

- [https://git.generalassemb.ly/rlopez4042/project-2-react]()

## Project Description

The goal of this project is to display current surf conditions at different beaches in San Diego. The site will display conditions and suit/board recomendations. The user can also add specific breaks to a favorites tab.

## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 

https://services.surfline.com/search/site?q=lajolla access to the La Jolla spot ID
https://services.surfline.com/kbyg/spots/reports?spotId={specific spot ID}

"wind": {
"speed": 5,
"direction": 270.88541,
"directionType": "Onshore"
},
"waveHeight": {
"human": true,
"min": 3,
"max": 5,
"occasional": null,
"humanRelation": "Waist to head high",
"plus": false
}

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

- https://wireframepro.mockflow.com/editor.jsp?editor=off&perm=Owner&projectid=M0BbJoF0pnb&publicid=13d9276bcbf34d8d856235bf81df8ade#/page/D9e0950a16ff51d85c20a9b814ebf04e3

#### MVP
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- Allow user to select and add beaches to a favorites tab

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Home | This will render the header include the nav, it will also show all the available beaches in San Diego | 
| Beach | This will render the header include the nav, it will also show info for one specific beach | 
| Favorites | This will display only the favorited locations and give a quick description of their current conditions| 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Working with API | H | 4hrs| 3hrs | 8hrs |
| Formating all components | M | 3hrs| 2.5hrs | 6hrs |

## Code Snippet

The code snippet below was designed to change the theme of my page. 
I used the Date() method to get the updated hour and then used an "if statement"
to change the background when the hour was at night/day
 
  var newDate = new Date();
  var time = newDate.getHours();
  console.log(time);
  document.getElementById("body").id = "body1";
  if (time > 17.5 || time < 6) {
    document.getElementById("body1").id = "body2";
    displayData = item;
  } else {
    document.getElementById("body1").id = "body1";
  }
