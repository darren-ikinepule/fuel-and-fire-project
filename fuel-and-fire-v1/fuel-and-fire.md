




# 🧩 Fuel & Fire: MVP Feature Breakdown

## 1️⃣ Features (MVP Scope)

| Feature            | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| **Food Selector**  | Dropdown/list of junk food items with calorie counts                        |
| **User Input**     | Simple form to collect age and weight                                       |
| **Exercise Calc.** | Function to translate calories into exercise equivalents (age/weight based) |
| **Results Display**| Show calorie count & multiple exercise options (time/reps estimates)        |
| **Basic UI**       | Responsive, readable React components & state management                    |

---

## 2️⃣ Tech Stack

| Layer      | Tech Choices                                              |
|------------|----------------------------------------------------------|
| Frontend   | React (Hooks: useState/useEffect), CSS/styled-components |
| Backend    | Node.js + Express (serve static data, simple API)        |
| Hosting    | Netlify (frontend), Render/Heroku (backend, optional)    |

---

## 3️⃣ Project Phases & Timeline

### 🗓️ Weeks 1–2: Planning & Setup
- [ ] Finalize food list + calorie values
- [ ] Research exercise equivalents per calorie
- [ ] Plan calorie → exercise logic
- [ ] Create wireframes/sketches
- [ ] Set up React app & Node.js backend

### 🗓️ Weeks 3–4: Core Feature Development
- [ ] Build food selector component
- [ ] Create age & weight input form
- [ ] Build exercise equivalent calculator
- [ ] Display results (reusable UI)
- [ ] Connect frontend to backend for food data

### 🗓️ Week 5: Polish & Test
- [ ] Improve responsiveness/styling
- [ ] Add error handling & validation
- [ ] Test with various user inputs

### 🗓️ Week 6: Deployment & Wrap-up
- [ ] Deploy frontend & backend
- [ ] Document codebase
- [ ] Reflect on learnings (React, UI, architecture)

---

## 4️⃣ Data Needed

- **Junk Food List** (10–20 items):  
  _Name, Calories per serving_

- **Exercise Table/Formula:**  
  _Calories burned per min/reps for:_
  - Running
  - Walking
  - Cycling
  - Push-ups

- **Default Assumptions:**  
  _If missing inputs: average weight = 70kg, age = 25_

---

## 5️⃣ React Learning Goals

| Skill                | Feature to Practice                        |
|----------------------|--------------------------------------------|
| Components           | FoodList, ExerciseResults, UserInput       |
| State Management     | useState for age, weight, selected food    |
| Side Effects         | useEffect for fetching food list           |
| Props & Reusability  | Result cards for each exercise type        |
| Simple Routing (opt)


## Grad Project Brief for Students
So you’re about to graduate. Now we know that you’ve got some chops. In order to convince potential employers of the same thing, a grad project goes a long way! And of course we’ll cram in some more learning and development.
Overview
1. Select a project
2. Set your scope
    * write user stories (3-4 stories + acceptance criteria), and add them on GitHub
    * make sketches of the UI and add to GitHub README
3. Write a timeline
4. Iterations and beta testing
5. Demo
Selecting a Project
* Showcase your skills, build your skills.
* It’s not about using every tool under your belt, but about showing that you can build quality software → don’t pick something too complex
* Do something that’s not trivial and then polish it with as much tender love and care as you can muster → people are wow-ed by looks and first impressions
Good Examples
* Using a complex API and giving it a novel user-interface. For example, there are many weather apps out there – but there are few that focus on rain only and look absolutely stunning. There are many IMDB clones to help you pick a movie – but few that work like a game and only with images.
* Something that you wish existed to help you with your tech education, like an interactive tutorial on a specific subject.
* A novel take on a classic problem, like a mental health tracker that asks to be your new start page and uses your own prompts to help you through the tough times.
* A game, e.g. a platformer, a puzzle game, whatever you feel like – can’t go wrong with a game, but it’s also the hardest type of project due to everything involved
Bad Examples
* A direct copy of an online tutorial without any original enhancements.
* Basic projects like a simple to-do list or calculator without any unique features.
* A half-finished app with minimal functionality and numerous bugs.
Notes
* Do it yourself, but do get help when you need it
* Make sure to include an about page featuring:
    * an avatar of sorts (can be a portrait, a digital approximation like a Memoji, a ChatGPT-stylized version of your portrait, …)
    * a brief text about why you did this project, what you love about it, what kind of struggles you overcame with it. Remember, in this project, you must be the hero of your own story.
    * a tiny description (or logo-wall) of your tech stack (do not include HTML & CSS)
    * a validated way to get in touch with you (email, LinkedIn – make sure the link works)
* You can make a copy of this Google form and use it as a way to get feedback from your testers.
Tips and Tricks
* Test early, test often. Remember what Aaron Ward and the other product people we’ve had on the course said: you’ll make assumptions about your users, and you’ll get it wrong. This is normal. Over the lifetime of your project, grab at least two classmates and two staff to use your page and have them fill the feedback form you made for them**.** If you get a chance, do a user interview with them.
* It’s not about having 100% test coverage (but, go for it if that’s your thing), but untested software is a lot less likely to get you hired.
* Break down your features, pages, functionalities, and use GitHub’s issues for your own project management.
* Iterate on the feedback you get from your peers!
* If you haven’t refactored at least once, it’s probably not good code yet.
* Your README needs instructions on how to set up a local dev environment (commands, dependencies, …)
* Remember that this repo might be part of your calling card. It pays to use descriptive language in your commit messages, tag issues, clean up and comment your code, …
Iteration
* Setup CI/CD to auto-test and auto-deploy your code after a git push
* Deploy on day 1. Add the URL to your README
* Start a feature rough, then make it look good, but not perfect
* When you’re 99% done, that’s the time to make it look perfect
Evaluation
Your project will be evaluated based on the following criteria. This aims to reflect how one of your future peers, an engineer looking at your resumé, will evaluate it.
* Functionality: Does the project work as intended? Are all features implemented?
* Code Quality: Is the code well-organized, well-formatted, and properly documented? Is there an up-to-date README how to start local development?
* User Experience: Is the interface intuitive and user-friendly? Does it provide a good user experience? Is it fun to use?
* Wow-factor: Does the project show creativity, something original? Is there something novel about it? Does it look polished?
Timeline
* Project Proposal – 1 week – submit on Slack
* Development Phase – 4 weeks
* Beta Test and Fixes - up to 2 weeks
* Final Submission
* Presentation/Demo Day – TBD
Submission
Please set a tag v1.0 in your git repo for the exact revision you want to be graded on. To give a tag for the current commit, you can do:
git tag -af v1.0
git push --tags
Then, create a git archive:
git archive -v --format=zip --output=submission.zip v1.0
For the online classrooms, please send your submission.zip via Slack to your teacher.
For the offline classrooms, please upload your submission.zip to the shared server.

## what is fuel and fire

We all know that feeling, don't we? That moment of pure bliss as you bite into a juicy hamburger or a crispy piece of fried chicken. It’s delicious, it’s comforting, and sometimes, it’s just what you need. But then, a little voice in the back of your head starts to whisper: "How many calories was that? How long will it take to burn it off?" For many of us, that whisper can turn into a nagging worry, especially if we’re trying to stay active and healthy.
Imagine an app that could quiet that nagging voice, or better yet, empower you to make informed choices. I’m thinking of an app I’d call "Fuel & Fire" – a simple, straightforward tool designed to help you understand the connection between the food you eat and the activity you need to do to balance it out. It’s not about guilt or deprivation; it’s about giving you the knowledge and the power to enjoy your favourite treats while staying on track with your fitness goals.

So, what exactly is Fuel & Fire for? Simply put, it’s a fast food converter. Let’s say you’ve just enjoyed a classic hamburger. Instead of leaving you to wonder, Fuel & Fire would instantly tell you what it would take to "burn off" that burger. Think of it as a helpful guide, showing you the effort required to balance out your indulgence.
Who would use Fuel & Fire? Anyone who enjoys a bit of fast food or "junk food" now and then, but also wants to maintain a healthy lifestyle. This isn’t for professional athletes or people on extremely strict diets. This is for the everyday person – like you and me – who wants to enjoy life’s culinary pleasures without completely derailing their fitness efforts. It's for people who are genuinely willing to put in the work to stay fit, even after enjoying a treat. Perhaps you’re a busy parent grabbing a quick takeaway, a student enjoying a late-night pizza, or simply someone who loves a good dessert. If you’re willing to make the effort to balance your diet with exercise, Fuel & Fire would be your perfect companion.

Now, let’s talk about what Fuel & Fire can actually do – its main features. The core idea is to translate the calories from your favourite junk food into understandable exercise options. So, if you input "hamburger," the app wouldn't just show you a calorie count. Instead, it would offer you a range of practical activities to burn those calories. For instance, it might suggest:

* Running for 30 minutes: A good cardiovascular workout.
* Walking briskly for an hour: A more gentle, but still effective, option.
* Cycling for 40 minutes: Great for leg strength and endurance.
* Performing 50 push-ups: A quick burst of strength training.


But it wouldn't stop there. Fuel & Fire could also suggest combinations of exercises. Maybe you don’t want to run for 30 minutes straight. The app could propose: "How about 15 minutes of running, followed by 20 minutes of cycling?" This flexibility is key, as it caters to different fitness levels and preferences. You could even customise your activity choices based on what equipment you have available or what you enjoy doing. The goal is to make it as easy as possible to find an activity that works for you.

So, how does Fuel & Fire help people or make life easier? In a few significant ways. Firstly, it empowers you to enjoy your favourite fast foods without feeling completely guilty. Knowing that there's a plan to balance it out can reduce stress and allow for a more flexible approach to eating. You can have that burger, knowing you’ve got the tools to address its caloric impact.
Secondly, it provides a clear, tangible link between food intake and physical activity. Instead of abstract calorie numbers, you get concrete actions. This insight can be incredibly motivating. When you see that a certain food requires an hour of walking, it gives you a much better understanding of its impact than just seeing "500 calories." This clarity helps you make more informed choices about what and how much you eat. It's about giving you that "aha!" moment where you connect the dots between your food and your fitness goals.
Thirdly, it offers a practical roadmap for burning off those calories. No more guesswork or endless searching for exercise ideas. The app provides immediate, actionable suggestions, making it easier to integrate fitness into your day, even after an unplanned treat.

Finally, why do I think Fuel & Fire would be a truly great app? It comes down to a few key reasons. For one, it offers a powerful dose of reality. When you see how much exercise is required to burn off a seemingly small treat, it can genuinely make you think twice about what you're eating. That visual connection between food and effort can be a powerful deterrent for mindless eating, encouraging more mindful choices. It’s not about scaring people, but about informing them in a very relatable way.

Secondly, it's about balance, not restriction. Many people struggle with strict diets and feel deprived. Fuel & Fire doesn't tell you "don't eat that." Instead, it says, "If you eat that, here’s what you can do to balance it out." This approach is much more sustainable and promotes a healthier relationship with food and exercise. It acknowledges that life happens, and sometimes, you just want to enjoy a delicious, indulgent meal.
Lastly, and perhaps most importantly, it empowers individuals to take control of their health in a practical, understandable way. You don’t need to be a fitness expert or a nutritionist to use Fuel & Fire. It translates complex nutritional information into simple, actionable steps, making healthy living accessible to everyone. It’s a tool that helps bridge the gap between enjoying your life and staying fit, giving you the power to make conscious decisions about your well-being. In a world where convenience often clashes with health goals, Fuel & Fire would be that helpful hand, guiding you toward a more balanced and active lifestyle.

