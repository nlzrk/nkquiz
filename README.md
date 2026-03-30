# NKQuiz

A lightweight, browser-based quiz app. Load a question file, take the quiz, and self-mark your answers — no accounts, no servers, no install.

<img width="1449" height="796" alt="image" src="https://github.com/user-attachments/assets/fcf56015-2c7b-48d6-b574-8c5c3f5d40f8" />

[quiz.nlzrk.net](quiz.nlzrk.net)

---

## How to use

1. Open the app in your browser.
2. **Upload** a `.md` or `.txt` quiz file, or **paste** the contents directly into the text box.
3. Optionally enable **Shuffle** to randomise question order.
4. Click **Start Quiz**.
5. Answer each question:
   - **Multiple choice** — click an option. The correct answer is revealed immediately.
   - **Short answer** — write your answer in the text box, then click **Reveal Answer** to see the sample answer. Mark yourself 0–M, which unlocks Next.
6. After the last question, click **Finish →** to view your score and a full review.

---

## Creating a quiz file

Quiz files are plain `.md` or `.txt` files. Questions are written using a simple block syntax — everything outside a question block is ignored, so you can freely mix in notes, headings, or any other text.

### Multiple choice

```
{type:MC, Q:Question text, A:a;Option 1 *b;Correct option c;Option 3 d;Option 4}
```

- Options are written as `label;text` separated by spaces.
- Mark the correct answer with a `*` before its label (e.g. `*b;Correct option`).
- Any number of options is supported (minimum 2).

### Short answer

```
{type:SA, Q:Question text, A:Sample answer text, M:5}
```

- `A:` is the **sample answer** shown after clicking Reveal Answer.
- `M:` sets the **marks available** (default `5` if omitted). Click a number (0–M) to record your mark, which unlocks Next.

### Question bank

Add `{bank:N}` anywhere in the file to turn it into a question bank. The quiz will randomly pick `N` questions from the full set each time.

```
{bank:10}

{type:MC, Q:...}
{type:SA, Q:...}
... as many questions as you like
```

- `N` must be ≤ the total number of questions in the file.
- Each run and each Restart draws a fresh random selection.
- The **Shuffle** toggle randomises the order of the selected questions on top of the random draw.

### LaTeX

Use `$...$` for inline math and `$$...$$` for a display (block) equation inside any question field:

```
{type:MC, Q:Solve $x^2 = 9$ for $x$, A:a;x=1 *b;x=±3 c;x=±6 d;x=9}

{type:SA, Q:Evaluate $$\int_0^1 x^2 \, dx$$, A:The integral evaluates to $\frac{1}{3}$., M:3}
```

### Images

Use `{img:path}` inside the question field to embed an image:

```
{type:SA, Q:Name the organelle shown. {img:./images/mitochondria.png}, A:Mitochondria, M:1}
```

Paths are relative to the quiz file location, or you can use an absolute URL.

---

## Full example file

```markdown
# Biology Quiz — Cell Structure

{bank:4}

{type:MC, Q:What is the powerhouse of the cell?, A:a;Nucleus *b;Mitochondria c;Ribosome d;Vacuole}

{type:SA, Q:Describe the role of the cell membrane., A:The cell membrane is a selectively permeable phospholipid bilayer that controls what enters and exits the cell., M:3}

{type:MC, Q:Which organelle contains the cell's DNA?, A:*a;Nucleus b;Mitochondria c;Golgi apparatus d;Lysosome}

{type:SA, Q:Explain the difference between mitosis and meiosis., A:Mitosis produces two genetically identical diploid cells for growth and repair. Meiosis produces four genetically unique haploid cells for sexual reproduction., M:5}

{type:MC, Q:Plant cells have a cell wall made of:, A:a;Chitin *b;Cellulose c;Keratin d;Collagen}
```

---



## Generating questions with an AI chatbot

Rather than writing questions by hand, paste the prompt below into any AI chatbot (ChatGPT, Gemini, etc.). Fill in the `[bracketed]` parts before sending.

```
You are a quiz question writer. Generate a quiz file for NKQuiz using the exact syntax rules below.

TOPIC: [e.g. "The French Revolution", "Cell Biology", "Quadratic Equations", "World War II"]
DIFFICULTY: [Easy / Medium / Hard]
NUMBER OF QUESTIONS: [e.g. 10]
QUESTION MIX: [e.g. "7 multiple choice, 3 short answer" — or just "mixed"]

---

SYNTAX RULES (follow these exactly):

1. MULTIPLE CHOICE
{type:MC, Q:Question text, A:a;Option 1 *b;Correct option c;Option 3 d;Option 4}
- Mark the correct answer with * before its label (e.g. *b;Correct option)
- Write options as: label;text separated by spaces
- Use exactly 4 options per question

2. SHORT ANSWER (self-marked)
{type:SA, Q:Question text, A:Sample answer text, M:5}
- A: is a sample/model answer shown to the user after they reveal — write a thorough answer
- M: is the marks available (1–5). Use M:1 for simple factual recall, M:3 for explanation, M:5 for extended response

3. QUESTION BANK (optional)
{bank:N}
- Place anywhere in the file to have the quiz pick N random questions each run
- N must be less than or equal to the total number of questions

4. LATEX
- Inline math: $...$  (e.g. $x^2 + y^2 = z^2$)
- Display math: $$...$$ on its own line
- Use LaTeX wherever mathematical or scientific notation appears

5. GENERAL RULES
- Each question must be on its own line
- Do not add any text outside the question blocks (no numbering, no headers, no commentary)
- Every field (type, Q, A, and M for SA) must be present
- Multiple choice must have exactly one correct answer marked with *

---

OUTPUT FORMAT:
Return only the raw question blocks, one per line, ready to paste into NKQuiz. No explanation, no markdown code fences, no extra text.
```

### Tips for better results

- **Be specific about the topic.** "The causes of World War I" gives better questions than "History".
- **Ask for a difficulty mix.** "3 easy, 4 medium, 3 hard" produces a more balanced quiz.
- **Request LaTeX explicitly** for maths and science topics: add *"Use LaTeX notation for all equations"* to the prompt.
- **Iterate.** After the AI generates questions, ask it to *"add 5 more questions focusing on [subtopic]"* — it will match the format.

### Example output

```
{type:MC, Q:What are the solutions to $x^2 - 5x + 6 = 0$?, A:a;x=1,6 *b;x=2,3 c;x=−2,3 d;x=−2,−3}
{type:MC, Q:Which method solves $x^2 + 6x + 5 = 0$ most easily?, A:*a;Factoring b;Integration c;Differentiation d;Long division}
{type:SA, Q:Derive the quadratic formula from $ax^2 + bx + c = 0$ by completing the square., A:Divide through by a, move c/a to the right, complete the square by adding $(b/2a)^2$ to both sides, then take the square root to get $x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$., M:5}
```

Paste the output directly into NKQuiz and click **Start Quiz**.
