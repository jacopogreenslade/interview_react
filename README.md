# Survey160 Interview: React

Everything you need for the project is inside `src/Interview`.  Add your work inside of that folder.  Use 3rd party libraries as you please, but make a note of it so I can include them when I test. Google all you want.

When you are done grab the `src/Interview` folder, zip it, rename it to include your first and last name (E.G. `McDonald_Johnny_Interview.zip`), and email it to `cmack@survey160.com`. Your deliverables are any files/components that you modified/created in the `src/Interview` folder.  

## Scenario
You're in charge of development for a web dashboard that displays a series of boxes that contain a list of users and a list of devices. Each box allows you to select multiple list items. You are tasked with improving and refactoring the code for the Users and Devices display boxes to be more modular and reusable (that's what's in this test). You are also told that in the near future there will be more boxes added with similar functionality but different data to be displayed.

> The code in the repo represents a small part of the web dashboard, which contains hundreds of components.

### Your assignment:
 1. Refactor the `Interview` component. Create as many files and components as you deem necessary. Keep in mind these 3 principles while making your changes: reusability of components, separation of responsibilities, and common React patterns. 

 2. Add a counter to the header of each box that displays the number of selected items. The counter can be placed anywhere on the header. Every box must have it's own counter independent from all the other counters. Each counter must update each time an item is selected or deselected. Once again, keep the 3 principles in mind! 

 > Note: This test is for your React skills. Styles and clean CSS are great if you think you've aced the refactor but it won't make up for the React portion. 

## Installation
Clone the repo to your machine and install dependencies using `npm install` or `yarn install`.

The project uses `create-react-app`, which means you can run it locally with `yarn/npm start`, which is all you should need.
