# Project Title

Priorit

## Overview

Priorit is a simple App to prioritize and track your goals (Annual Goals) by breaking it into quaterly goals.

### Problem

Every year we set New Year Resolutions or Annual goals that are usually not achieved because we list down so many things we want to achieve within the year. The goal of the App is to force users to think deeply about their goals and select only 4 major goals for the year. These goals are then set up as "Major Quarterly" goals. Each Quarterly goal will be linked to 3 or 4 "Minor" goals that relate to achieving the "Major" goal.

The Quaterly goals can be independent or they can all be goals that lead up to one "Major Annual" goal.

### User Profile

- Anyone who set goals for the year but never achieves it
- Anyone who would like to set goals but doesn't have a way to track it properly

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

## Implementation

### Tech Stack

- React
- Express
- MySQL or PostgresQL
- Additional libraries/frameworks may be used and will be updated here as needed.

### APIs

- Under Nice to Have Section

### Sitemap

- Sign Up page

  - link from Login page brings Users here
  - Need to provide Name, Username?, Email, Password

- Login Page

  - Website URL takes you to this Login Page
  - Has a brief description of product
  - Has login form: Email and Password
  - Logged in user is navigated to the Home Page

- Home Page

  - Countdown timer to end of quarter
  - Current Quarter major and minor goals are displayed
  - Some form of visual showing progress for the quarter
  - Navigation icons
    - Icon to Goals List Page
    - Icon to Home Page

- Goals Setting Page

  - Shows 4 sections which will have 1 major goal area and 3 or 4 minor goals area to fill in
  - When form is saved, information is transfered and user is navigated to the Goals List Page.
  - The four sections are collapsible
  - Can set reminder for each goal

- Goals List Page
  - List all the goals set.
  - Page is divided into 4 sections which represent the quaters
  - Each goal is in its respective quarter
  - Can edit goals with a pop up confirming that you want to edit
  - Navigation icons
    - Icon to Goals List Page
    - Icon to Home Page

### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

## Nice-to-haves

- Profile Page
  - Icon will be included on pages that have navigation icons
- Chat GPT Integration on Goals List Page
- Restrict reminder based on the Quarter the goal is placed in

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.
