# Running my solution
- Install the latest lts version of nodejs (I personally like to use nvm for this. [link to nvm](https://github.com/nvm-sh/nvm))
- Download my solution, extract, and place in desired location.
- Navigate to story-prompt folder in your cli and run **npm install esm**
- Then navigate to the mad-lib directory and run **npm link**
- Repeate the above step while inside the dis-stats directory.
- Go back to the main story-prompt repository.
- To run the mad-lib application enter the name of the app, followed by a json string as an argument, into your cli. Ex: **mad-lib '{JSON STRING}'**
- To run dis-stats simply enter the name of the app with no arguments. Ex: **dis-stats**

# Prompt
## Instructions

Thanks for doing this project as part of your interview process. We appreciate your time and want to make this a fun experience. If you have any questions at all, please reach out to us and we'll get back to you.

Fork a copy of this repository to your Github account and when you have completed the project below, send a link to ben@commonpaper.com.

## Project

### Story Prompt Generator

One day Anna was walking her {{NUMBER}} {{UNIT_OF_MEASURE}} commute to {{PLACE}} and found a {{ADJECTIVE}} {{NOUN}} on the ground.

Write a command line application in any language that accepts a json string of key-value inputs for the template above. With valid input, the application sends to STDOUT the story using the inputs provided. For example, "One day Anna was walking her 2 mile commute to school and found a blue rock on the ground." The application stores a record of valid inputs locally in a file. For the template above, you can assume NUMBER to be numerical data and all other inputs to be strings containing spaces, special characters, etc. Set sensible string validations for length. Validate all inputs and handle validation errors gracefully.

Write a second command line application that sends to STDOUT statistics about the stored records, including the maximum and minimum values for numerical inputs, the most common responses for string inputs, and anything else you think might be relevant.

Instructions for installing and running your applications should be added to this README file.
