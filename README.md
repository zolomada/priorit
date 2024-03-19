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

- As a user, I want to be able to sign up for an account using an email and password
- As a user once I sign up, I want to be able to setup my goals for each quarter
- As a user, I want to manage my goals for the year
- As a user, I want the application to be responsive, allowing me to access it seemlessly on mobile, tablet and desktop devices.

- As a logged in user, I want to access the home page
- As a logged in user, I want to see on the home page, the current quarters and the goals for the current quarter
- As a logged in user, I want to see a countdown timer on my home page showing time remaining to the end of the quarter
- As a logged in user, I want to track the progress of my goals and mark them as not started, in progress or complete
- As a logged in user, I want to visualize my progress towards completing my goals
- As a logged in user, I want the option to set reminders for each milestone
  -As a logged in user, I want to receive reminders for approaching deadlines for individual goals
- As a logged in user, I want to receive reminder when the end of quarter is approaching and I have incomplete goals
- As a logged in user, if my quarterly goals are not achieved, I want the option to discard the goals or move it to the next quarter

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
  - Sign Up submit button
  - Link to Login Page if existing user

- Login Page

  - Website URL takes you to this Login Page
  - Has a brief description of product
  - Has login form: Email and Password
  - Login submit button
  - Link to Sign Up page
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

Currently not available

### Data

- Need help structuring the database
- User table

  - ID
  - Name
  - Email
  - Password
  - Some foreign key to the goals table?

- Goals table

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.

### Auth

- JWT
  - Other options I am considering OpenID or OAuth

## Roadmap

- Project Setup

  - Create client

    - react project with routes and boilerplate pages

  - Create server

    - express project with routing, with placeholder 200 responses

  - Create database
    - database tables with relationships

- Feature: Sign Up page

  - Create POST /user/register endpoint to handle user registration
  - Develop a sign up page with a form

- Feature: Login page

  - Create POST /user/login endpoint to handle user login
  - Develop login page with a form

- Feature: Goal Setting page

  - Create POST /goals endpoint to allow users set their goals
  - Develop page with a form to input quarterly goals
  - Store information in database

- Feature: Goals List page
    <!-- Display is goals based on logged in user -->

  - Create GET /goals/:userId endpoint to fetch goals for a specific user
  - Develop goals list page to display all goals for the current year

- Feature: Home page
    <!-- Need help with the endpoint. Display is based on user logged in and the current quarter -->

  - Create GET /home endpoint
  - Develop home page

- Bug fixes

- Demo Day

## Nice-to-haves

- Demo login button on Login Page
- Profile Page
  - Account settings
  - Logout
  - Icon will be included on pages that have navigation icons
- Chat GPT Integration on Goals List Page
- Restrict reminder based on the Quarter the goal is placed in
- DSpecifiy if quarter goals are all linked to 1 annual goal
- End of quarter
  - If unfinshed goals, get a prompt asking if you want to move goals to the next quarter
  - This shifts everything down
  - Finished goals are archived
- End of year
  - Finished goals are achieved
- Archive Page
  - Stores all goals for the past 5 years from the current year
