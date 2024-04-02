# Project Title

Priorit

## Overview

Priorit is a simple App to prioritize and track your goals (Annual Goals) by breaking it into quaterly goals.

### Problem

Every year we set New Year Resolutions or Annual goals that are usually not achieved because we list down so many things we want to achieve within the year. The goal of the App is to force users to think deeply about their goals and select only 4 major goals for the year. These goals are then set up as "Major Quarterly" goals. Each Quarterly goal will be linked to 3 or 4 "Minor" goals that relate to achieving the "Major" goal.

The Quaterly goals can be independent or they can all be goals that lead up to one "Major Annual" goal.

### Installation

- Git clone repo and on your local machine `npm install` to install all dependencies.

- Create your .env file using sample env file provided.

### Tech Stack

- React
- Express
- MySQL or PostgresQL
- Additional libraries/frameworks may be used and will be updated here as needed.

## Future Features

- Demo login button on Login Page
- Countdown Timer to the end of quarter
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
