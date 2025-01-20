# FEATURE:
### 1. Customer Email Collection:
- Prompt users to provide their email address before starting the assessment.
### 2. Questionnaire:
- Present the 10 questions and associated options provided in the JSON.
- Capture responses with associated scores.
### 3. Maturity Level Calculation:
- Use the results ranges in the JSON file to determine the customer's maturity level through Javascript logic execution.
### 4. Results Delivery:
- Send the maturity level and its description to the customer.
### 5. Social Media Sharing:
- Generate a shareable link for the results and integrate sharing on Facebook.
### 6. Scoring Logic:
- Sum the scores of the selected options and compare them to the level ranges provided in the JSON.

# DEPLOYMENT STEPS:
### 1. Set up the project:
- Create folder structure
- Include dependencies: Use minimal libraries (e.g., vanilla JavaScript or lightweight frameworks if necessary). Link common stylesheets and scripts in all HTML files.
### 2. Create the Quizz
- Prepare the JSON Files:
> question.json: Define quiz questions, options, and their scores.
> 
> result.json: Define ranges for each maturity level and its related data (image, description, actions).
- Implement the Quiz Logic (quizz.html):
  - Fetch and parse question.json and result.json using fetch.
  - Create a dynamic question loader:
      - Show one question at a time with its options as buttons.
      - Highlight the selected option with a visual cue.
  - Track user responses (userAnswers object).
  - Add navigation (next/previous) buttons to traverse the questions.
  - Calculate the total score at the end to determine the maturity level (based on result.json).
### 3. Display Results
- Render the Result Page (quizz.html):
    - After calculating the score, find the appropriate result from result.json (matching the score range).
    - Dynamically display the result (name, description, key actions, and related image).
- Add a Button to Share Results:
    - Create a button to navigate to share.html while passing the selected image (e.g., capdo1.png) and result details as URL parameters.
 ### 4. Create the Sharing Page
- Design the Sharing UI (share.html):
    - Show the result image and description using the passed URL parameters.
    - Add sharing options:
        - Facebook Share: Open Facebook's share dialog with the result image and current page URL.
- Implement the Sharing Logic:
    - For Facebook: Use https://www.facebook.com/sharer/sharer.php?u=[URL]&picture=[Image URL].
### 5. Add Styling
- Shared Styles (styles.css):
    - Define base styles for all pages.
    - Ensure a consistent layout, typography, and spacing across the app.
    - Add hover effects for buttons and visual cues for selections.
- Result and Sharing Page:
    - Style the result image, buttons, and lists for a user-friendly interface.
### 7. Deployment
- Host the Project:
    - Use a platform like Netlify, Vercel, or GitHub Pages to host the project.
    - Ensure all images are accessible with absolute URLs for Facebook sharing.
- Optimize for Performance:
    - Minify CSS and JavaScript.
    - Optimize images for faster loading.
