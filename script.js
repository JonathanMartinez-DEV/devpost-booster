const postLibrary = {
  learningUpdate: [
    `
    🧠 Today I learned: [concept/tech name]
    🔧 What it does: [brief explanation]
    🤯 What tripped me up: [what confused you]
    💡 Finally clicked when: [breakthrough moment]
    📌 Bonus: [link or snippet]
    `,
    `
    Before: I thought [common misconception]
    After: I realized [what you now understand]
    Here’s how I made the leap → [brief explanation or image]
    `,
    `
    It took me 4 hours to understand [concept].
    Here’s the mistake I kept making 👇
    [1-2 lines describing the error]
    This is what finally worked → [solution]
    `,
    `
    One thing that finally clicked today: [concept]
    I used to [struggle with X]
    But I tried [new approach/tool] and it made a huge difference.
    If you’re stuck on this too, try this → [tip/resource]
    `,
    `
    📅 Week [X] of my learning journey:
    ✅ Learned: [bullet list of 2–4 things]
    🚧 Struggled with: [quick mention of a pain point]
    🔁 Going to revisit: [what you’ll re-study or refactor]
    🔜 Next up: [what you’re excited to learn next]
    `,
    `
    Trying to understand [topic] made my head hurt...
    So I turned it into an analogy:
    🧠 “[Analogy in simple language]”
    Hope this helps someone else too!
    `,
    `
    Built a small [project/tool name] to practice [concept].
    💡 Learned: [1 key takeaway]
    🔧 Stack: [HTML/CSS/JS, etc.]
    📸 Screenshot: [drop image or code shot]
    What should I build next?
    `,
    `
    Shoutout to [resource or course name] 🙌
    It helped me finally understand [topic]
    Here’s a quick example I built after going through it:
    [Code snippet or image]
    If you’re stuck on [topic], this might help too.
    `,
    `
    This confused me at first: [tech or syntax]
    I kept thinking it did [wrong assumption]
    But here’s what it *actually* means:
    ✅ [clarified explanation or mini demo]
    Sometimes the smallest things trip you up the most!
    `,
    `
    1 week ago, I didn’t even know [X] existed
    Now I can:
    ✅ [bullet list of mini wins]
    Still a long way to go—but the growth feels good.
    #100DaysOfCode Day [X]
    `,
  ],
  frustration: [
    `
    I was stuck on [X] for [X hours/days].
    Tried everything: [list 2–3 failed attempts]
    What finally worked: [your breakthrough]
    Moral of the story: even ‘simple’ things can wreck you.
    `,
    `
    This one line of code ruined my whole morning:
    [Insert screenshot or describe the bug]
    Spent 2 hours debugging only to realize…
    💀 [facepalm mistake]
    We’ve all been there, right?
    `,
    `
    I saw this error message today:
    ❌ [Copy the exact error]
    Googled it. Got nothing.
    Tried Stack Overflow. Made it worse.
    Eventually… I fixed it by doing [ridiculous/simple solution].
    Dev life.
    `,
    `
    Every day as a beginner dev:
    🤨 Learn something new
    😤 Get confused
    😵 Google it
    😎 Finally get it
    🤯 Realize you still don’t understand
    Repeat 🔁
    #RealDevLife
    `,
    `
    Honestly… I wanted to quit today.
    Nothing worked. I felt stupid.
    But I kept going for one more hour.
    And I finally [X small win].
    Sometimes progress is just not giving up.
    `,
    `
    Why is [insert beginner concept] so hard to understand?!
    I’ve watched 3 videos, read 5 articles… still confused.
    This isn't a flex. I'm just venting.
    If you struggled with this too — how did you get through it?
    `,
    `
    I thought I was the only one who felt this way:
    “I’m not smart enough to be a dev.”
    But I’ve seen so many others talk about it too.
    So if you're feeling that today—you're not alone.
    We just keep showing up.
    `,
    `
    What I thought coding would feel like:
    👨‍💻 “Building cool apps and changing the world”
    What it actually feels like:
    🧯 “Why is margin-left doing this to me?”
    Still worth it, though.
    `,
    `
    🧠 Day X of my dev journey
    I broke my own code trying to ‘optimize’ it
    Lost 2 hours
    Did I learn anything? Maybe.
    Will I do it again? Probably.
    #DevConfessions
    `,
    `
    Things I *still* don’t understand:
    - [Concept 1]
    - [Concept 2]
    - [Concept 3]
    And that’s okay.
    Learning isn’t about being perfect — it’s about not giving up.
    `,
  ],
  progressMilestone: [
    `
    Another brick laid 🧱
    ✅ [What you just finished]
    📅 Day [X] of my journey
    📌 Still figuring out: [mention current struggle]
    But I’m building this thing one block at a time.
    `,
    `
    1 month ago: [what you couldn’t do]
    Today: [what you just built/understood]
    That might not seem like much—but it’s everything to me.
    Progress isn’t loud. It’s consistent.
    `,
    `
    Today something finally *clicked*.
    [Concept/tool/skill] went from confusing → clear.
    It felt like leveling up 🔓
    Small wins like this are why I keep going.
    `,
    `
    Just finished v1 of [project name] 🛠️
    ✅ Built with: [stack/tools]
    📸 [Add image or demo link]
    Still lots to improve—but shipping > perfection.
    #BuildInPublic #FrontendDev
    `,
    `
    From this: [blank editor emoji or screenshot]
    To this: [screenshot of working feature]
    Every working button is a battle won 💪
    Learning JavaScript feels like magic sometimes.
    `,
    `
    ✅ Officially made it to [Module/Topic/Project] on my frontend path
    This one’s a challenge but also exciting.
    [Brief note about why it matters]
    Let’s go 💻 #Scrimba #SelfTaughtDev
    `,
    `
    Mini-milestone reached ✅
    📌 [What you completed]
    🧠 [What you learned]
    ⏭️ Next up: [next concept/project]
    Just showing up every day is progress.
    `,
    `
    📅 Week [X] recap
    ✅ Learned: [list of concepts]
    🔧 Built: [project or feature]
    🧠 Top lesson: [personal insight]
    One week at a time → real momentum.
    `,
    `
    🚢 Just deployed my latest project: [project name]
    🌐 Link: [live site or GitHub]
    🔧 Built with: [stack]
    I know it’s not perfect—but it’s out there.
    Would love feedback 🙏
    `,
    `
    First time ever: [something you just achieved]
    ✅ [e.g., built a landing page from scratch / used Flexbox correctly / deployed to Netlify]
    Feels like a real turning point.
    Little by little, I’m getting this.
    `,
  ],
  insight: [
    `
    One thing that helped me today:
    💡 [Tip or technique]
    I used to [struggle with X] until I found this.
    Give it a try if you're working on [topic].
    `,
    `
    If you’re learning [topic], try this:
    ✅ [Actionable tip or mental model]
    It made things *way* easier for me.
    Small tweaks = big breakthroughs.
    `,
    `
    I didn’t understand [concept] until I saw it like this:
    🧠 [your simplified explanation or analogy]
    Sometimes the right perspective is all you need.
    `,
    `
    Beginner mistake I made: [brief mistake]
    What I should’ve done: [correct action or mindset]
    If you’re learning [topic], watch out for this early on.
    Hope this saves you time!
    `,
    `
    Wish I knew this sooner 👇
    Problem: [Describe the bug/confusion]
    Quick fix: [tip or code snippet]
    Save this for when you hit the same wall.
    `,
    `
    It’s not talked about enough, but...
    [underappreciated tip/tool/concept]
    This helped me [benefit or use case].
    More beginners should know this.
    `,
    `
    Let me break down [concept] in 3 steps:
    1️⃣ [Step 1]
    2️⃣ [Step 2]
    3️⃣ [Step 3]
    Hope this helps someone else like it helped me.
    `,
    `
    I always forget this when coding:
    📌 [Rule, trick, or syntax tip]
    Today it bit me again 😅
    Sharing it here to drill it into my own brain.
    `,
    `
    I tested out [tool/library/concept] today.
    What worked: [win]
    What didn’t: [challenge]
    What I’d do differently next time: [lesson]
    If you're thinking of trying it, here’s my honest take.
    `,
    `
    Mental model I use when learning new code:
    🧠 “[Analogy, principle, or rule of thumb]”
    Helps me reduce overwhelm and focus better.
    What’s yours?
    `,
  ],
  mindsetShift: [
    `
    I used to think [limiting belief or misunderstanding]
    But now I know [empowering truth or mindset shift]
    That small shift changed everything about how I learn code.
    `,
    `
    Learning to code isn’t just about JavaScript or HTML.
    It’s about dealing with:
    😵 Imposter syndrome
    ⏳ Frustration
    🔁 Repetition
    Mastering mindset is the real dev skill.
    `,
    `
    This one idea changed how I approach learning:
    💡 [Mindset shift — e.g., “progress over perfection”]
    I started showing up differently ever since.
    Not faster. Just more consistent.
    `,
    `
    Don’t chase [e.g. perfection / speed / virality]
    Chase [e.g. consistency / clarity / understanding]
    The results will come if the foundation is strong.
    `,
    `
    Every time I feel dumb or stuck while coding, I remind myself:
    This is growth.
    Comfort = plateau.
    Struggle = leveling up.
    Keep going.
    `,
    `
    This one thought almost made me quit:
    “I should be further ahead by now.”
    But the truth is:
    You’re not behind. You’re just comparing.
    Move at your pace. Stay in your lane.
    `,
    `
    If I could go back to Day 1 of my dev journey, I’d say:
    ✅ [Mindset advice or lesson]
    It would’ve saved me hours of frustration — and helped me focus.
    `,
    `
    Had to pause my learning for a while.
    Not starting over — just picking back up.
    Consistency isn’t perfection. It’s returning.
    Recommitment > Restart.
    `,
    `
    Hard truth I needed to hear:
    “You’re not supposed to be good yet.”
    You’re supposed to be *learning*.
    Let that sink in.
    Beginner isn’t broken — it’s a phase. Don’t skip it.
    `,
    `
    I stopped saying:
    ❌ “I *have* to practice code today”
    Started saying:
    ✅ “I *get* to build something today”
    Same task. Different mindset. Better energy.
    `,
  ],
};

// grab elements
const categorySelect = document.getElementById("category-select");
const postIdeaOne = document.getElementById("random-post-one");
const postIdeaTwo = document.getElementById("random-post-two");
const generateBtn = document.getElementById("generate-btn");

// create random index helper function
function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

// map category values to library arrays
const libraryMap = {
  "learning-update": postLibrary.learningUpdate,
  "frustration-real-talk": postLibrary.frustration,
  "progress-milestone": postLibrary.progressMilestone,
  "insight-tip": postLibrary.insight,
  "mindset-shift": postLibrary.mindsetShift,
};

// create render function
function renderPostIdea() {
  let selectedCategory = libraryMap[categorySelect.value];
  if (!selectedCategory) return;

  let indexOne = getRandomIndex(selectedCategory);
  let indexTwo = getRandomIndex(selectedCategory);

  while (indexOne === indexTwo) {
    indexTwo = getRandomIndex(selectedCategory);
  }

  postIdeaOne.textContent = selectedCategory[indexOne];
  postIdeaTwo.textContent = selectedCategory[indexTwo];
}

generateBtn.addEventListener("click", renderPostIdea);
