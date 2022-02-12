# Project Overview

## Project Links

- [add your github repo link]()
- [add your deployment link]()

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
},
```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [add link to your wireframes]()
- [add link to your react architecture]()


### MVP/PostMVP - 5minutes

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP
- Find and use external api 
- Render data on page 
- Allow user to interact with the page
- Allow user to select and add beaches to a favorites tab

#### PostMVP EXAMPLE

- Include java animations

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Home | This will render the header include the nav, it will also show all the available beaches in San Diego | 
| Beach | This will render the header include the nav, it will also show info for one specific beach | 
| Favorites | This will display only the favorited locations and give a quick description of their current conditions| 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 6hrs| 0hrs |  |
| Working with API | H | 4hrs| 0hrs |  |
| Formating all components | M | 0hrs| 2.5hrs |  |
| Total | H | 16hrs| 0hrs |  |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
