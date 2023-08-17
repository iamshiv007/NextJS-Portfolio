# Shiv's Portfolio [Live](https://shiv-s-portfolio.vercel.app) - 👌 Best NextJS Portfolio

![Welcome Screen](https://shiv-s-portfolio.vercel.app/images/welcome-screen.png)

## Table of content

1. Features
2. Sections
3. Tech Stacks
4. Getting Started
5. How to Edit This Portfolio (Make It Your's)
6. How to Implement a Live Chat System Using [Tawk.to](https://www.tawk.to/)
7. Required APIs for This Project (All Are Free APIs)
8. .env.local - file
9. Contribute


## 1. Features ✅

- Simple and Clean Design
- Dark and Light Theme
- Mobile Responsiveness
- Chat System - [tawk.to](https://www.tawk.to/)
- Message by gmail - [nodemailer](https://nodemailer.com/about/)

## 2. Sections 🧱

1. [Home | Intro | Welcome](https://shiv-s-portfolio.vercel.app)
2. [Skills](https://shiv-s-portfolio.vercel.app/#skills)
3. [Projects](https://shiv-s-portfolio.vercel.app/#projects)
4. [Blogs](https://shiv-s-portfolio.vercel.app/#blogs)
5. [My Journey](https://shiv-s-portfolio.vercel.app/#myJourney)
6. [Apps](https://shiv-s-portfolio.vercel.app/#apps)

## 3. Tech Stack 💻

- [Next JS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Libraries:

  - [react-icons](https://react-icons.github.io/react-icons/search)
  - [framer-motion](https://www.framer.com/)
  - [axios](https://axios-http.com/docs/intro)
  - [mongoose](https://mongoosejs.com/)
  - [nodemailer](https://nodemailer.com/about)
  - [react-responsive-carousel](https://react-responsive-carousel.js.org/)
  - [react-responsive-masonry](https://www.npmjs.com/package/react-responsive-masonry)
  - [react-syntax-highlighter](https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/)

## 4. Getting Started ▶️

Follow these steps to set up and run the project on your local machine.

#### 1. Clone the Repository

To get a local copy of this repository, run the following command in your terminal:

```sh
git clone https://github.com/iamshiv007/Next-Portfolio.git
```

#### 2. Navigate to the Project

Change your working directory to the project folder:

```sh
cd next-portfolio
```

#### 3. Install Dependencies

Install the required packages using npm:

```sh
npm i
```

#### 4. Start the Project

Run the following command to launch the Next.js project in your local environment:

```sh
npm run dev
```

#### 5. Access the Project

Open your web browser and go to [http://localhost:3000](http://localhost:3000) to view the project.

That's it! You're now ready to explore the project locally.

Happy coding! 🚀


## 5. How to Edit This Portfolio (Make It Your's)

*Note :-This is a beginner's guide for those who have never worked on a Next.js project before. If you can understand the project, it's in your hands to make changes and create a portfolio that's 10 times better. You can use its clone for a quick start.*

### 1. Your Name and Photo

In the `root` directory, you'll find a `sections` folder. Inside this folder, locate the `Intro.jsx` file.

Within the `intro` file, update the following details:
- Shivraj - Your Name
- Web Developer - Profession
- /images/cartoon0.png - Your Photo

Remember to have your photo uploaded in the `images` folder located within the `public` directory.

### 2. Skills

In the `root` directory, you'll find a `constants` folder. Inside this folder, locate the `SkillsData.jsx`

- Add or remove skills according to your preferences.
- Use Desire icon from `react-icons` library.
- Give desire color to icon.

### 3. Projects

Just like with Skills, we have a `ProjectsData.js` file located in the `constants` folder.

All you need to do is replace the existing data with your own (name: Your project name, url: Project Live URL, imageUrl: Image URL from the `images` folder in the public `directory`).

### 4. My Journey

Similar to Skills and Projects, you only need to customize the data in the `JourneyData.jsx` file according to yourself.

### 5. Apps 

You don't need to change the app data, but if you want, you can create similar easy apps and replace the data in the `AppsData.jsx` file.

Suggetion for apps :- To-do List App, Weather App, Random Quote Generator, Random Jokes Generator, Basic Calculator, Countdown Timer, Recipe Finder etc.

> Note :- If you're not able to customize the portfolio or run the project in your local environment, **don't worry**. It's not a journey of just 1 or 2 days, it takes time. For me, I was able to create it after 1 year of consistent learning. If you're not able to use its clone, just leave it and keep learning. You'll create a better portfolio or project one day.

<div align="center">
  <h4>⭐️ If You want to show your appreciation, please give this repository a star.</h4>
</div>

## 6. How to Implement a Live Chat System Using [Tawk.to](https://www.tawk.to/)

I'm excited to introduce you to this amazing feature, and the best part is, it's completely free!

Follow these steps to set up your live chat system:

**Step 1:** Sign up on [tawk.to](https://dashboard.tawk.to/signup).

**Step 2:** Complete the simple 4-step process to create your free account.

**Step 3:** Once you've completed the process, copy the code snippet provided at the end.

**Step 4:** Now, integrate the copied code into your application:

Navigate to the `Components` directory, locate the `ChatSystem.jsx` file, and inside the `useEffect` function, paste the copied code.

By following these steps, you'll have an efficient live chat system up and running in no time, enhancing your user experience and engagement.


## 7. Required APIs for This Project (All Are Free APIs)

1. **ChatGPT API** from RapidAPI - [Details](https://rapidapi.com/haxednet/api/chatgpt-api8)

2. **Microsoft Translator API** from RapidAPI - [Details](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/microsoft-translator-text)

3. **Google News API** from Google - [Details](https://newsapi.org/s/google-news-api)

4. **Quiz API** from Trivia API (No API Key Required) - [Details](https://opentdb.com/api_config.php)

5. **Images API** from Pexels API - [Details](https://www.pexels.com/api/)

## 8. .env.local - file

After obtaining the above mentioned API, create a `.env.local` file and put values and restart your project.

```sh
const RAPID_API_KEY = VALUE_XXXX
const GOOGLE_NEWS_API_KEY = VALUE_XXXX
const PEXELS_API_KEY = VALUE_XXXX
const MONGODB_CONNECTION_STRING = VALUE_XXXX
```


## 9. Contribute 🎁

Thank you for checking out my portfolio! I invite you to join in and make it your own. Feel free to contribute by editing the information, images, and name to personalize it according to your skills and achievements.

### How to Contribute:

1. **Fork the Repository:** Start by forking this repository to your GitHub account. This will create a copy of the portfolio project in your account.

2. **Make Your Changes:** Edit the portfolio content, update images, and customize details like your name, skills, projects, and journey.

3. **Preview Your Portfolio:** You can locally preview your changes by following the setup instructions mentioned in the repository's README.

4. **Create a Pull Request:** Once you're satisfied with your changes, submit a pull request back to the original repository. I'll review your contributions and, if everything looks good, merge your changes.

### Why Contribute:

- Showcase Your Work: Share your accomplishments and projects with the world through your personalized portfolio.
- Learn and Improve: Practice your coding skills while experimenting with HTML, CSS, and JavaScript.
- Join the Community: Connect with others who are also building their portfolios, and receive feedback and support.

Remember, your portfolio is a reflection of your unique skills and experiences. Personalize it to make it truly yours!

Happy coding and designing! 🚀🎨
