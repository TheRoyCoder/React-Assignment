## Documentation:

- In this project I translating visual designs into functional React components.
- I depoly this web site at netlify <h3> <a href= "https://subha-react-design.netlify.app/" >View Demo</a> </h3>

#### Code Description:

- I created 3 functional component :

  1. Header Component
  2. Sidebar Component
  3. Body Component

- Then Header Component and Sidebar Component are used at Body component and then finally body component used at App,js file.

#### Tech Stack:

- For styling this design I used `Tailwind CSS`
- All icon are import from `react-icons`

#### Setup:

- `npx create-react-app react-app` : run this command to create a react app.
- `cd react-app` : change the Directery.
- `npm start` : to start the project and preview in browser.

#### Setup Tailwind Css:

- `npm install -D tailwindcss`: run this command to Install Tailwind CSS at development mode.
- `npx tailwindcss init` : run this command to initiate Tailwind CSS.
- ` ["./src/**/*.{html,js}"]` : add this at tailwind.config,js file.

- Add this 3 line at index.css file

1. `@tailwind base;` <br>
2. `@tailwind components; `<br>
3. `@tailwind utilities;`
