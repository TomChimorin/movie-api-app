## React.js TMDB Movie App

This project was built by following Tech With Tim's **"Learn React With This ONE Project"**  
(uploaded November 24, 2024)

Watch the video [HERE](https://www.youtube.com/watch?v=G6D9cBaLViA&ab_channel=TechWithTim)

---

## TMDB Movie App

This is a movie search API web app built as part of a follow-along YouTube course by Tech With Tim. The project was developed using **React.js** and the **TMDB API**. The UI is styled with **Custom CSS**. This follow-along project was done in order to deepen understanding in various **React.js** concepts. 

---

## Description

This app allows users to search for movies via the TMDB API. It displays the first 20 most popular movies depending on the date. Once a user searches a search term and then presses enter or the search button, it searches for all movies that starts with that search term. It uses routing to connect two interfaces (Home, Favorites). Favorites tab allows user to store their favorite movies by hearting it.

### Features
- **Movie Search** 
- **Popular Movies**
- Each movie displays:
  - Poster
  - Title
  - Release Year
- **Loading...** text
-  Responsive layout with **Custom CSS**

---

## Tech Stack

- **React.js**
- **CSS**
- **TMDB API**

---

## Concepts Learned

<details>
<summary>Click to view concepts</summary>

- Custom external CSS set up
- React hooks:  
  - `useState`  
  - `useEffect`   
- Working with third-party APIs (TMDB)  
- Routing different pages in App.jsx
- Handling API errors with try/catch blocks  

</details>

---

## Deployment

This project is deployed on **Vercel**. You can visit the live site [here](https://movie-api-app-zgg4.vercel.app/).

---

## Installation

1. Clone the repo  
```bash
git clone https://github.com/TomChimorin/.git
```

2. Navigate to the project directory 
  ```bash
   cd movie-api-app
  ```

3. Install dependencies
  ```bash
   npm install
  ```
4. Run the development server
  ```bash
   npm run dev
  ```
5. Open the deployed app in your browser at: https://movie-api-app-zgg4.vercel.app/
