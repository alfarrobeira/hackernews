# Hacker News
Hacker News is a social news website focusing on computer science and entrepreneurship. You can find the original here: https://news.ycombinator.com/news 
This project displays a simplified version of a Hacker News page with a search feature.

## Description
Build a version of Hacker News with a search feature by using their API: https://hn.algolia.com/api
Tasks: 
- on first start-up load and display the top stories in a list
- provide search for any term
- display and update search results accordingly
- add pagination control for navigating through list

## Learnings
- nested fetch: use story IDs from the result for requesting story details (depending on current page)
- send request to fetch top stories
- send search request to get all stories matching the search term
- Promises, async/await, .then
- pass parameters to child components
- Loader from Semantic UI
- Pagination with Semantic UI
- React useEffect, useRef, useState hooks

## Technologies
- React
- HTML
- CSS

## Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).
