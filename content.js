/* content.js — All tutorial content for JSLearn */

const TOPICS = {

  home: {
    title: 'Home',
    render: () => `
      <div class="home-hero fade-in">
        <h1>Learn <span>JavaScript</span><br>From Scratch</h1>
        <p>A free, beginner-friendly guide to JavaScript — with interactive code examples, quizzes, and a live playground.</p>
        <button class="hero-cta" onclick="loadTopic('intro')">
          Start Learning &rarr;
        </button>
      </div>

      <div class="stats-bar fade-in">
        <div class="stat-item"><span class="stat-num">13</span><span class="stat-label">Topics</span></div>
        <div class="stat-item"><span class="stat-num">40+</span><span class="stat-label">Code Examples</span></div>
        <div class="stat-item"><span class="stat-num">15+</span><span class="stat-label">Quizzes</span></div>
        <div class="stat-item"><span class="stat-num">100%</span><span class="stat-label">Free</span></div>
      </div>

      <h2 style="font-size:22px;font-weight:800;color:var(--crimson-dark);margin-bottom:18px;border-bottom:3px solid var(--yellow);padding-bottom:8px;">All Topics</h2>
      <div class="topics-grid fade-in">
        ${[
          { id:'intro',       icon:'📖', title:'Introduction',     desc:'What is JavaScript and why learn it?',      tag:'Beginner' },
          { id:'setup',       icon:'⚙️', title:'Setup & Hello World', desc:'Write your very first JS program.',        tag:'Beginner' },
          { id:'variables',   icon:'📦', title:'Variables',         desc:'var, let, and const explained.',            tag:'Beginner' },
          { id:'datatypes',   icon:'🔤', title:'Data Types',        desc:'Strings, numbers, booleans, and more.',     tag:'Beginner' },
          { id:'operators',   icon:'➕', title:'Operators',         desc:'Arithmetic, comparison, and logic ops.',    tag:'Beginner' },
          { id:'strings',     icon:'💬', title:'Strings',           desc:'Working with text in JavaScript.',         tag:'Core' },
          { id:'numbers',     icon:'🔢', title:'Numbers',           desc:'Math, NaN, Infinity, and Number methods.',  tag:'Core' },
          { id:'conditionals',icon:'🔀', title:'If / Else',         desc:'Make decisions in your code.',              tag:'Core' },
          { id:'switch',      icon:'🎛️', title:'Switch',            desc:'The elegant alternative to long if-else.',  tag:'Core' },
          { id:'loops',       icon:'🔁', title:'Loops',             desc:'for, while, and do-while loops.',           tag:'Core' },
          { id:'functions',   icon:'⚡', title:'Functions',         desc:'Reusable blocks of code.',                  tag:'Core' },
          { id:'arrays',      icon:'📋', title:'Arrays',            desc:'Lists of data and array methods.',          tag:'Core' },
          { id:'objects',     icon:'🧩', title:'Objects',           desc:'Key-value pairs and properties.',           tag:'Core' },
          { id:'dom',         icon:'🌐', title:'DOM Basics',        desc:'Interact with HTML from JavaScript.',       tag:'Browser' },
          { id:'events',      icon:'🖱️', title:'Events',            desc:'Respond to user clicks and input.',         tag:'Browser' },
        ].map(t => `
          <div class="topic-card" onclick="loadTopic('${t.id}')" tabindex="0" role="button" aria-label="Go to ${t.title}">
            <div class="topic-card-icon">${t.icon}</div>
            <h3>${t.title}</h3>
            <p>${t.desc}</p>
            <span class="topic-card-tag">${t.tag}</span>
          </div>
        `).join('')}
      </div>
    `
  },

  /* ============================================================
     INTRODUCTION
  ============================================================ */
  intro: {
    title: 'Introduction to JavaScript',
    prev: null,
    next: 'setup',
    render: () => `
      <div class="topic-header">
        <span class="tag">Getting Started</span>
        <h1>Introduction to JavaScript</h1>
        <p class="subtitle">Understand what JavaScript is, where it runs, and why it's the most popular language on the web.</p>
      </div>

      <div class="toc">
        <div class="toc-title">📑 On this page</div>
        <ul>
          <li><a href="#what-is-js">What is JavaScript?</a></li>
          <li><a href="#where-runs">Where does it run?</a></li>
          <li><a href="#what-can-do">What can it do?</a></li>
          <li><a href="#js-vs-html">JS vs HTML vs CSS</a></li>
        </ul>
      </div>

      <div class="section" id="what-is-js">
        <h2>What is JavaScript?</h2>
        <p><strong>JavaScript</strong> (often shortened to <strong>JS</strong>) is a lightweight, interpreted programming language. It was originally created to make web pages interactive — and today it powers almost everything on the internet.</p>
        <p>Unlike many languages, JavaScript runs <em>directly in your web browser</em> — no installation required to get started.</p>
        <div class="info-box">
          <strong>📅 Fun Fact:</strong> JavaScript was created in just <strong>10 days</strong> in 1995 by Brendan Eich. Despite the name, it has <em>nothing to do</em> with the Java programming language!
        </div>
      </div>

      <div class="section" id="where-runs">
        <h2>Where does JavaScript run?</h2>
        <p>JavaScript runs in two main environments:</p>
        <ul>
          <li><strong>In the Browser</strong> — Chrome, Firefox, Safari, Edge all have a built-in JS engine. Open DevTools (F12) and you get a JS console instantly.</li>
          <li><strong>On the Server</strong> — Using <strong>Node.js</strong>, JS can run on servers, build APIs, and power backends.</li>
        </ul>
        <p>For this course, we focus on the browser — the easiest way to get started.</p>
      </div>

      <div class="section" id="what-can-do">
        <h2>What can JavaScript do?</h2>
        <ul>
          <li>🖱️ React to user actions (clicks, keypresses, form submissions)</li>
          <li>🎨 Change HTML and CSS on the fly</li>
          <li>📡 Fetch data from the internet (APIs)</li>
          <li>💾 Store data in the browser (localStorage)</li>
          <li>✅ Validate form input before sending to a server</li>
          <li>🎮 Build games, animations, and interactive UIs</li>
        </ul>
      </div>

      <div class="section" id="js-vs-html">
        <h2>JS vs HTML vs CSS</h2>
        <p>Think of a webpage like a house:</p>
        <ul>
          <li><strong>HTML</strong> is the <em>structure</em> — the walls, floors, and rooms.</li>
          <li><strong>CSS</strong> is the <em>style</em> — the paint, furniture, and decoration.</li>
          <li><strong>JavaScript</strong> is the <em>behaviour</em> — the electricity, running water, and doors that open.</li>
        </ul>
      </div>

      ${codeBlock('javascript', `// Your very first JavaScript line!
console.log("Hello, JavaScript!");`, true, `Hello, JavaScript!`)}

      <div class="info-box tip">
        <strong>💡 Tip:</strong> Press <strong>▶ Run</strong> above to execute any code block. The output appears below it!
      </div>

      ${quiz('intro-q1', 'What does JavaScript primarily add to a webpage?', [
        { text: 'Structure (headings, paragraphs)', correct: false },
        { text: 'Behaviour and interactivity', correct: true },
        { text: 'Visual styling and colours', correct: false },
        { text: 'Database storage', correct: false },
      ], 'JavaScript adds behaviour — making pages interactive and dynamic!')}
    `
  },

  /* ============================================================
     SETUP
  ============================================================ */
  setup: {
    title: 'Setup & Hello World',
    prev: 'intro',
    next: 'variables',
    render: () => `
      <div class="topic-header">
        <span class="tag">Getting Started</span>
        <h1>Setup &amp; Hello World</h1>
        <p class="subtitle">No installation needed — write your first JavaScript program right in the browser.</p>
      </div>

      <div class="section">
        <h2>Where to write JavaScript</h2>
        <p>There are three ways to add JavaScript to a webpage:</p>

        <h3>1. Inline (inside an HTML tag)</h3>
        ${codeBlock('html', `<button onclick="alert('Clicked!')">Click me</button>`)}

        <h3>2. Inside a &lt;script&gt; tag</h3>
        ${codeBlock('html', `<script>
  console.log("Hello from a script tag!");
</script>`)}

        <h3>3. External .js file (Recommended ✅)</h3>
        ${codeBlock('html', `<!-- In your HTML -->
<script src="script.js"></script>`)}
        ${codeBlock('javascript', `// In your script.js file
console.log("Hello from an external file!");`, true, `Hello from an external file!`)}
      </div>

      <div class="section">
        <h2>Your First Program</h2>
        <p>The classic starter — printing to the console:</p>
        ${codeBlock('javascript', `console.log("Hello, World!");
console.log("My name is JavaScript.");
console.log(2 + 2);`, true, `Hello, World!\nMy name is JavaScript.\n4`)}
        <div class="info-box">
          <strong>🔍 What is the console?</strong> The console is a tool in your browser's DevTools (press <code>F12</code>) where JavaScript prints messages. It's your best friend for debugging!
        </div>
      </div>

      <div class="section">
        <h2>Showing output to the user</h2>
        <p>Besides the console, you can show output in other ways:</p>
        ${codeBlock('javascript', `// 1. Show a popup
alert("Hello!");

// 2. Write to the page
document.write("Hello from JS!");

// 3. The console (most common for developers)
console.log("Only developers see this.");`)}
      </div>

      <div class="section">
        <h2>Comments</h2>
        <p>Comments are notes in your code that JavaScript ignores. They help you (and others) understand the code:</p>
        ${codeBlock('javascript', `// This is a single-line comment

/*
  This is a
  multi-line comment
*/

console.log("This runs."); // But not this part`, true, `This runs.`)}
      </div>

      ${quiz('setup-q1', 'Which method is the recommended way to write JavaScript?', [
        { text: 'Inline onclick attribute', correct: false },
        { text: 'Inside a &lt;script&gt; tag in HTML', correct: false },
        { text: 'In a separate .js file linked with &lt;script src&gt;', correct: true },
        { text: 'In a &lt;style&gt; tag', correct: false },
      ], 'Keeping JS in a separate file keeps your code organised and reusable!')}
    `
  },

  /* ============================================================
     VARIABLES
  ============================================================ */
  variables: {
    title: 'Variables',
    prev: 'setup',
    next: 'datatypes',
    render: () => `
      <div class="topic-header">
        <span class="tag">Core Concepts</span>
        <h1>Variables</h1>
        <p class="subtitle">Variables are containers that store data. Learn the difference between var, let, and const.</p>
      </div>

      <div class="section">
        <h2>What is a Variable?</h2>
        <p>Think of a variable as a <strong>labelled box</strong> — you put something inside it, give it a name, and later you can use that name to get the value back.</p>
        ${codeBlock('javascript', `let name = "Alice";
let age = 25;
console.log(name); // Alice
console.log(age);  // 25`, true, `Alice\n25`)}
      </div>

      <div class="section">
        <h2>let — The modern way</h2>
        <p>Use <code>let</code> when the value can <strong>change</strong> later.</p>
        ${codeBlock('javascript', `let score = 0;
console.log(score); // 0

score = 10; // change the value
console.log(score); // 10`, true, `0\n10`)}
      </div>

      <div class="section">
        <h2>const — For values that don't change</h2>
        <p>Use <code>const</code> for values that should <strong>never be reassigned</strong>.</p>
        ${codeBlock('javascript', `const PI = 3.14159;
const siteName = "JSLearn";
console.log(PI);
console.log(siteName);`, true, `3.14159\nJSLearn`)}
        <div class="info-box tip">
          <strong>📌 Rule of Thumb:</strong> Always use <code>const</code> by default. Only switch to <code>let</code> if you know the value will change.
        </div>
      </div>

      <div class="section">
        <h2>var — The old way (avoid it)</h2>
        <p><code>var</code> is older and has confusing behaviour. Beginners should stick with <code>let</code> and <code>const</code>.</p>
        ${codeBlock('javascript', `var oldStyle = "avoid this";
// var has function scope and can be re-declared (confusing!)
var oldStyle = "re-declared!"; // No error — this is a problem!
console.log(oldStyle);`, true, `re-declared!`)}
      </div>

      <div class="section">
        <h2>Naming Rules</h2>
        <ul>
          <li>Must start with a letter, underscore (_), or dollar sign ($)</li>
          <li>Cannot start with a number</li>
          <li>Case-sensitive: <code>name</code> ≠ <code>Name</code></li>
          <li>Cannot use reserved words: <code>let</code>, <code>const</code>, <code>if</code>, etc.</li>
        </ul>
        ${codeBlock('javascript', `let firstName = "Bob";   // ✅ camelCase (recommended)
let _private = 42;       // ✅ underscore prefix
let $price = 9.99;       // ✅ dollar sign
// let 1stPlace = "..."; // ❌ Cannot start with a number

console.log(firstName, _private, $price);`, true, `Bob 42 9.99`)}
      </div>

      <div class="section">
        <h2>Try it yourself!</h2>
        ${interactiveEditor(`let myName = "JavaScript";
let myAge = 1;

console.log("Hello, I am " + myName);
console.log("I am " + myAge + " year(s) old.");`, 'variables-editor')}
      </div>

      ${quiz('vars-q1', 'Which keyword should you use for a value that never changes?', [
        { text: 'var', correct: false },
        { text: 'let', correct: false },
        { text: 'const', correct: true },
        { text: 'final', correct: false },
      ], 'const prevents a variable from being reassigned. Use it for constants!')}
    `
  },

  /* ============================================================
     DATA TYPES
  ============================================================ */
  datatypes: {
    title: 'Data Types',
    prev: 'variables',
    next: 'operators',
    render: () => `
      <div class="topic-header">
        <span class="tag">Core Concepts</span>
        <h1>Data Types</h1>
        <p class="subtitle">Every value in JavaScript has a type. Learn the 7 primitive types and the object type.</p>
      </div>

      <div class="section">
        <h2>The 7 Primitive Types</h2>

        <h3>1. String — Text</h3>
        ${codeBlock('javascript', `let greeting = "Hello!";
let name = 'World';    // single or double quotes
let template = \`Hi \${name}!\`; // template literal
console.log(greeting, name, template);`, true, `Hello! World Hi World!`)}

        <h3>2. Number — Integers & Decimals</h3>
        ${codeBlock('javascript', `let age = 30;
let price = 9.99;
let negative = -5;
console.log(age, price, negative);`, true, `30 9.99 -5`)}

        <h3>3. Boolean — True or False</h3>
        ${codeBlock('javascript', `let isLoggedIn = true;
let hasAccount = false;
console.log(isLoggedIn, hasAccount);`, true, `true false`)}

        <h3>4. Undefined — No value assigned</h3>
        ${codeBlock('javascript', `let x;
console.log(x);         // undefined
console.log(typeof x);  // "undefined"`, true, `undefined\nundefined`)}

        <h3>5. Null — Intentional absence of value</h3>
        ${codeBlock('javascript', `let user = null; // no user logged in
console.log(user);`, true, `null`)}

        <h3>6. BigInt — Very large integers</h3>
        ${codeBlock('javascript', `const big = 9007199254740991n;
console.log(big);`, true, `9007199254740991`)}

        <h3>7. Symbol — Unique identifiers (advanced)</h3>
        ${codeBlock('javascript', `const id = Symbol("id");
console.log(typeof id);`, true, `symbol`)}
      </div>

      <div class="section">
        <h2>The typeof Operator</h2>
        <p>Use <code>typeof</code> to check what type a value is:</p>
        ${codeBlock('javascript', `console.log(typeof "hello");    // string
console.log(typeof 42);         // number
console.log(typeof true);       // boolean
console.log(typeof undefined);  // undefined
console.log(typeof null);       // object (historical bug!)
console.log(typeof []);         // object
console.log(typeof {});         // object`, true, `string\nnumber\nboolean\nundefined\nobject\nobject\nobject`)}
      </div>

      <div class="section">
        <h2>Type Coercion</h2>
        <p>JavaScript automatically converts types in some situations — this is called <strong>type coercion</strong>:</p>
        ${codeBlock('javascript', `console.log("5" + 2);   // "52" (string wins!)
console.log("5" - 2);   // 3   (subtraction converts to number)
console.log(true + 1);  // 2   (true becomes 1)`, true, `52\n3\n2`)}
        <div class="info-box">
          <strong>⚠️ Watch out!</strong> Always use <code>===</code> (strict equality) instead of <code>==</code> to avoid unexpected coercion.
        </div>
      </div>

      ${quiz('dt-q1', 'What does typeof null return?', [
        { text: '"null"', correct: false },
        { text: '"undefined"', correct: false },
        { text: '"object"', correct: true },
        { text: '"string"', correct: false },
      ], 'This is a famous JavaScript bug. typeof null returns "object" — but null is NOT an object!')}
    `
  },

  /* ============================================================
     OPERATORS
  ============================================================ */
  operators: {
    title: 'Operators',
    prev: 'datatypes',
    next: 'strings',
    render: () => `
      <div class="topic-header">
        <span class="tag">Core Concepts</span>
        <h1>Operators</h1>
        <p class="subtitle">Operators let you perform calculations, compare values, and combine conditions.</p>
      </div>

      <div class="section">
        <h2>Arithmetic Operators</h2>
        ${codeBlock('javascript', `let a = 10, b = 3;

console.log(a + b);  // 13  — addition
console.log(a - b);  // 7   — subtraction
console.log(a * b);  // 30  — multiplication
console.log(a / b);  // 3.33... — division
console.log(a % b);  // 1   — remainder (modulo)
console.log(a ** b); // 1000 — exponentiation`, true, `13\n7\n30\n3.3333333333333335\n1\n1000`)}
      </div>

      <div class="section">
        <h2>Assignment Operators</h2>
        ${codeBlock('javascript', `let x = 10;
x += 5;  console.log(x); // 15 (x = x + 5)
x -= 3;  console.log(x); // 12
x *= 2;  console.log(x); // 24
x /= 4;  console.log(x); // 6
x **= 2; console.log(x); // 36`, true, `15\n12\n24\n6\n36`)}
      </div>

      <div class="section">
        <h2>Comparison Operators</h2>
        <p>Always returns <code>true</code> or <code>false</code>:</p>
        ${codeBlock('javascript', `console.log(5 == "5");  // true  (loose — converts types)
console.log(5 === "5"); // false (strict — no conversion!)
console.log(5 !== 6);   // true
console.log(10 > 3);    // true
console.log(10 >= 10);  // true
console.log(3 < 1);     // false`, true, `true\nfalse\ntrue\ntrue\ntrue\nfalse`)}
        <div class="info-box tip">
          <strong>✅ Best Practice:</strong> Always use <code>===</code> and <code>!==</code> (strict equality). Avoid <code>==</code> and <code>!=</code>.
        </div>
      </div>

      <div class="section">
        <h2>Logical Operators</h2>
        ${codeBlock('javascript', `let isAdult = true;
let hasID = false;

console.log(isAdult && hasID);  // false — both must be true
console.log(isAdult || hasID);  // true  — at least one is true
console.log(!isAdult);          // false — NOT operator`, true, `false\ntrue\nfalse`)}
      </div>

      <div class="section">
        <h2>Increment &amp; Decrement</h2>
        ${codeBlock('javascript', `let count = 5;
count++;          // count becomes 6
console.log(count);
count--;          // count becomes 5 again
console.log(count);`, true, `6\n5`)}
      </div>

      ${quiz('op-q1', 'What is the result of: 5 === "5" ?', [
        { text: 'true', correct: false },
        { text: 'false', correct: true },
        { text: '"55"', correct: false },
        { text: 'NaN', correct: false },
      ], '=== is STRICT equality — it checks both value AND type. 5 (number) ≠ "5" (string).')}
    `
  },

  /* ============================================================
     STRINGS
  ============================================================ */
  strings: {
    title: 'Strings',
    prev: 'operators',
    next: 'numbers',
    render: () => `
      <div class="topic-header">
        <span class="tag">Core Concepts</span>
        <h1>Strings</h1>
        <p class="subtitle">Learn to work with text — one of the most common data types in JavaScript.</p>
      </div>

      <div class="section">
        <h2>Creating Strings</h2>
        ${codeBlock('javascript', `let s1 = "Double quotes";
let s2 = 'Single quotes';
let s3 = \`Template literal\`;  // backtick — most powerful!
console.log(s1, s2, s3);`, true, `Double quotes Single quotes Template literal`)}
      </div>

      <div class="section">
        <h2>Template Literals (ES6)</h2>
        <p>Embed expressions directly into strings using <code>\${'{}'}</code>:</p>
        ${codeBlock('javascript', `const name = "Alice";
const age = 25;
const msg = \`My name is \${name} and I am \${age} years old.\`;
console.log(msg);
console.log(\`2 + 2 = \${2 + 2}\`);`, true, `My name is Alice and I am 25 years old.\n2 + 2 = 4`)}
      </div>

      <div class="section">
        <h2>Useful String Properties &amp; Methods</h2>
        ${codeBlock('javascript', `const str = "Hello, JavaScript!";

console.log(str.length);         // 18
console.log(str.toUpperCase());  // HELLO, JAVASCRIPT!
console.log(str.toLowerCase());  // hello, javascript!
console.log(str.includes("Java")); // true
console.log(str.indexOf("Java")); // 7
console.log(str.slice(7, 17));    // JavaScript
console.log(str.replace("Hello", "Hi")); // Hi, JavaScript!
console.log("  trim me  ".trim()); // trim me`, true, `18\nHELLO, JAVASCRIPT!\nhello, javascript!\ntrue\n7\nJavaScript\nHi, JavaScript!\ntrim me`)}
      </div>

      <div class="section">
        <h2>String Concatenation</h2>
        ${codeBlock('javascript', `const first = "Hello";
const second = "World";

// Old way
console.log(first + " " + second);

// New way (preferred)
console.log(\`\${first} \${second}\`);`, true, `Hello World\nHello World`)}
      </div>

      <div class="section">
        <h2>Escape Characters</h2>
        ${codeBlock('javascript', `console.log("She said: \\"Hello\\"");  // quotes in string
console.log("Line 1\\nLine 2");           // newline
console.log("Tab\\there");               // tab`, true, `She said: "Hello"\nLine 1\nLine 2\nTab\there`)}
      </div>

      ${quiz('str-q1', 'What does "hello".length return?', [
        { text: '4', correct: false },
        { text: '5', correct: true },
        { text: '6', correct: false },
        { text: 'undefined', correct: false },
      ], '"hello" has 5 characters: h, e, l, l, o. length counts all of them.')}
    `
  },

  /* ============================================================
     NUMBERS
  ============================================================ */
  numbers: {
    title: 'Numbers',
    prev: 'strings',
    next: 'conditionals',
    render: () => `
      <div class="topic-header">
        <span class="tag">Core Concepts</span>
        <h1>Numbers</h1>
        <p class="subtitle">JavaScript has just one number type — learn its quirks, math methods, and parsing.</p>
      </div>

      <div class="section">
        <h2>Number Basics</h2>
        ${codeBlock('javascript', `let integer = 42;
let decimal = 3.14;
let negative = -100;
let scientific = 1.5e3; // 1500

console.log(integer, decimal, negative, scientific);`, true, `42 3.14 -100 1500`)}
      </div>

      <div class="section">
        <h2>Special Number Values</h2>
        ${codeBlock('javascript', `console.log(1 / 0);        // Infinity
console.log(-1 / 0);       // -Infinity
console.log("hello" * 2);  // NaN (Not a Number)
console.log(isNaN("hi"));  // true
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991`, true, `Infinity\n-Infinity\nNaN\ntrue\n9007199254740991`)}
      </div>

      <div class="section">
        <h2>The Math Object</h2>
        ${codeBlock('javascript', `console.log(Math.round(4.7));   // 5
console.log(Math.floor(4.9));   // 4 (round down)
console.log(Math.ceil(4.1));    // 5 (round up)
console.log(Math.abs(-7));      // 7 (absolute value)
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1
console.log(Math.sqrt(16));     // 4
console.log(Math.PI);           // 3.141592...`, true, `5\n4\n5\n7\n5\n1\n4\n3.141592653589793`)}
      </div>

      <div class="section">
        <h2>Random Numbers</h2>
        ${codeBlock('javascript', `// Math.random() gives 0 to 0.9999...
let rand = Math.random();
console.log(rand);

// Random integer from 1 to 10:
let dice = Math.floor(Math.random() * 10) + 1;
console.log("Dice roll:", dice);`, true, `[random 0-1]\n[random 1-10]`)}
      </div>

      <div class="section">
        <h2>Converting Strings to Numbers</h2>
        ${codeBlock('javascript', `console.log(Number("42"));     // 42
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14px")); // 3.14
console.log(Number("hello"));  // NaN`, true, `42\n42\n3.14\nNaN`)}
      </div>

      ${quiz('num-q1', 'What does Math.floor(4.9) return?', [
        { text: '5', correct: false },
        { text: '4', correct: true },
        { text: '4.9', correct: false },
        { text: 'NaN', correct: false },
      ], 'Math.floor() always rounds DOWN — so 4.9 becomes 4.')}
    `
  },

  /* ============================================================
     CONDITIONALS
  ============================================================ */
  conditionals: {
    title: 'If / Else',
    prev: 'numbers',
    next: 'switch',
    render: () => `
      <div class="topic-header">
        <span class="tag">Control Flow</span>
        <h1>If / Else Statements</h1>
        <p class="subtitle">Make decisions in your code — run different blocks depending on conditions.</p>
      </div>

      <div class="section">
        <h2>Basic if Statement</h2>
        ${codeBlock('javascript', `let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}`, true, `You are an adult.`)}
      </div>

      <div class="section">
        <h2>if...else</h2>
        ${codeBlock('javascript', `let temperature = 15;

if (temperature > 25) {
  console.log("It's hot outside!");
} else {
  console.log("It's a bit cool today.");
}`, true, `It's a bit cool today.`)}
      </div>

      <div class="section">
        <h2>else if — Multiple Conditions</h2>
        ${codeBlock('javascript', `let score = 75;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}`, true, `Grade: C`)}
      </div>

      <div class="section">
        <h2>Truthy &amp; Falsy</h2>
        <p>In JavaScript, conditions don't have to be exactly <code>true</code>/<code>false</code>. Some values are "truthy" and some are "falsy":</p>
        <ul>
          <li><strong>Falsy:</strong> <code>false</code>, <code>0</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code></li>
          <li><strong>Truthy:</strong> Everything else — including <code>"0"</code>, <code>[]</code>, <code>{}</code></li>
        </ul>
        ${codeBlock('javascript', `let name = "";      // falsy!
if (name) {
  console.log("Has a name");
} else {
  console.log("No name given");
}`, true, `No name given`)}
      </div>

      <div class="section">
        <h2>Ternary Operator — Short If/Else</h2>
        ${codeBlock('javascript', `let age = 20;
let result = age >= 18 ? "Adult" : "Minor";
console.log(result);`, true, `Adult`)}
      </div>

      <div class="section">
        <h2>Try it yourself!</h2>
        ${interactiveEditor(`let hour = 14; // try changing this!

if (hour < 12) {
  console.log("Good morning!");
} else if (hour < 17) {
  console.log("Good afternoon!");
} else {
  console.log("Good evening!");
}`, 'cond-editor')}
      </div>

      ${quiz('if-q1', 'Which value is FALSY in JavaScript?', [
        { text: '"false" (string)', correct: false },
        { text: '[] (empty array)', correct: false },
        { text: '0 (zero)', correct: true },
        { text: '{} (empty object)', correct: false },
      ], 'Only 0 is falsy. "false" (string) and empty arrays/objects are truthy!')}
    `
  },

  /* ============================================================
     SWITCH
  ============================================================ */
  switch: {
    title: 'Switch Statement',
    prev: 'conditionals',
    next: 'loops',
    render: () => `
      <div class="topic-header">
        <span class="tag">Control Flow</span>
        <h1>Switch Statement</h1>
        <p class="subtitle">A cleaner way to write multiple conditions based on a single value.</p>
      </div>

      <div class="section">
        <h2>Basic Switch</h2>
        ${codeBlock('javascript', `let day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Friday":
    console.log("Almost weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("Just a regular weekday.");
}`, true, `Start of the work week!`)}
        <div class="info-box">
          <strong>⚠️ Don't forget break!</strong> Without <code>break</code>, execution "falls through" to the next case.
        </div>
      </div>

      <div class="section">
        <h2>Fall-through Example</h2>
        ${codeBlock('javascript', `let grade = "B";

switch (grade) {
  case "A":
  case "B":
    console.log("Great job!"); // both A and B get this
    break;
  case "C":
    console.log("You passed.");
    break;
  default:
    console.log("Try again.");
}`, true, `Great job!`)}
      </div>

      <div class="section">
        <h2>Switch vs If-Else</h2>
        <p>Use <code>switch</code> when you're comparing <strong>one variable against many specific values</strong>. Use <code>if-else</code> for range-based or complex conditions.</p>
      </div>

      ${quiz('sw-q1', 'What happens if you forget the "break" keyword in a switch case?', [
        { text: 'The program crashes', correct: false },
        { text: 'Execution falls through to the next case', correct: true },
        { text: 'It skips the entire switch', correct: false },
        { text: 'Nothing — break is optional', correct: false },
      ], 'Without break, JavaScript keeps running through the next cases — this is called "fall-through".')}
    `
  },

  /* ============================================================
     LOOPS
  ============================================================ */
  loops: {
    title: 'Loops',
    prev: 'switch',
    next: 'functions',
    render: () => `
      <div class="topic-header">
        <span class="tag">Control Flow</span>
        <h1>Loops</h1>
        <p class="subtitle">Repeat a block of code multiple times — the backbone of programming.</p>
      </div>

      <div class="section">
        <h2>for Loop</h2>
        <p>Best when you know how many times to repeat:</p>
        ${codeBlock('javascript', `for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}`, true, `Count: 1\nCount: 2\nCount: 3\nCount: 4\nCount: 5`)}
        <p>The three parts: <code>initialiser</code>; <code>condition</code>; <code>update</code></p>
      </div>

      <div class="section">
        <h2>while Loop</h2>
        <p>Best when you don't know how many times to repeat upfront:</p>
        ${codeBlock('javascript', `let count = 0;

while (count < 3) {
  console.log("while count:", count);
  count++;
}`, true, `while count: 0\nwhile count: 1\nwhile count: 2`)}
      </div>

      <div class="section">
        <h2>do...while Loop</h2>
        <p>Runs the code <strong>at least once</strong>, then checks the condition:</p>
        ${codeBlock('javascript', `let num = 10;

do {
  console.log("Running once:", num);
  num++;
} while (num < 5); // condition is false, but it already ran!`, true, `Running once: 10`)}
      </div>

      <div class="section">
        <h2>break &amp; continue</h2>
        ${codeBlock('javascript', `// break — exit the loop early
for (let i = 0; i < 10; i++) {
  if (i === 4) break;
  console.log("break example:", i);
}

// continue — skip the current iteration
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log("continue example:", i);
}`, true, `break example: 0\nbreak example: 1\nbreak example: 2\nbreak example: 3\ncontinue example: 0\ncontinue example: 1\ncontinue example: 3\ncontinue example: 4`)}
      </div>

      <div class="section">
        <h2>Looping over an Array</h2>
        ${codeBlock('javascript', `const fruits = ["Apple", "Banana", "Cherry"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}`, true, `Apple\nBanana\nCherry`)}
      </div>

      ${quiz('loop-q1', 'What does the "break" keyword do inside a loop?', [
        { text: 'Skips the current iteration', correct: false },
        { text: 'Exits the loop immediately', correct: true },
        { text: 'Pauses the loop for 1 second', correct: false },
        { text: 'Resets the loop counter', correct: false },
      ], 'break immediately exits the loop. Use "continue" to skip just the current iteration.')}
    `
  },

  /* ============================================================
     FUNCTIONS
  ============================================================ */
  functions: {
    title: 'Functions',
    prev: 'loops',
    next: 'scope',
    render: () => `
      <div class="topic-header">
        <span class="tag">Functions &amp; Scope</span>
        <h1>Functions</h1>
        <p class="subtitle">Reusable blocks of code — the most important concept in programming.</p>
      </div>

      <div class="section">
        <h2>Declaring a Function</h2>
        ${codeBlock('javascript', `function greet() {
  console.log("Hello!");
}

// Call the function
greet();
greet(); // call it again!`, true, `Hello!\nHello!`)}
      </div>

      <div class="section">
        <h2>Functions with Parameters</h2>
        ${codeBlock('javascript', `function greetUser(name) {
  console.log("Hello, " + name + "!");
}

greetUser("Alice");
greetUser("Bob");`, true, `Hello, Alice!\nHello, Bob!`)}
      </div>

      <div class="section">
        <h2>Return Values</h2>
        ${codeBlock('javascript', `function add(a, b) {
  return a + b;
}

let result = add(5, 3);
console.log(result);          // 8
console.log(add(10, 20));     // 30`, true, `8\n30`)}
        <div class="info-box">
          <strong>📌 Note:</strong> A function stops running the moment it hits <code>return</code>.
        </div>
      </div>

      <div class="section">
        <h2>Default Parameters</h2>
        ${codeBlock('javascript', `function greet(name = "stranger") {
  console.log(\`Hello, \${name}!\`);
}

greet("Alice");   // Hello, Alice!
greet();          // Hello, stranger! (uses default)`, true, `Hello, Alice!\nHello, stranger!`)}
      </div>

      <div class="section">
        <h2>Function Expressions</h2>
        ${codeBlock('javascript', `const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // 20`, true, `20`)}
      </div>

      <div class="section">
        <h2>Try it yourself!</h2>
        ${interactiveEditor(`function calculateArea(width, height) {
  return width * height;
}

let area = calculateArea(5, 10);
console.log("Area:", area);
console.log("Square 7x7:", calculateArea(7, 7));`, 'func-editor')}
      </div>

      ${quiz('fn-q1', 'What does a function "return"?', [
        { text: 'It prints a value to the screen', correct: false },
        { text: 'It sends a value back to wherever the function was called', correct: true },
        { text: 'It stores a value in a variable', correct: false },
        { text: 'It ends the program', correct: false },
      ], '"return" sends the result back to the calling code. Without return, the function gives back "undefined".')}
    `
  },

  /* ============================================================
     SCOPE
  ============================================================ */
  scope: {
    title: 'Scope',
    prev: 'functions',
    next: 'arrow',
    render: () => `
      <div class="topic-header">
        <span class="tag">Functions &amp; Scope</span>
        <h1>Scope</h1>
        <p class="subtitle">Scope controls where variables are accessible in your code.</p>
      </div>

      <div class="section">
        <h2>Global Scope</h2>
        <p>Variables declared outside any function are global — accessible everywhere:</p>
        ${codeBlock('javascript', `let globalMessage = "I am global!";

function showMessage() {
  console.log(globalMessage); // accessible inside function
}

showMessage();
console.log(globalMessage);   // accessible outside too`, true, `I am global!\nI am global!`)}
      </div>

      <div class="section">
        <h2>Local (Function) Scope</h2>
        <p>Variables declared inside a function only exist inside it:</p>
        ${codeBlock('javascript', `function makeSecret() {
  let secret = "Only I know this!";
  console.log(secret); // works
}

makeSecret();
// console.log(secret); // ERROR! secret is not defined outside`, true, `Only I know this!`)}
      </div>

      <div class="section">
        <h2>Block Scope (let &amp; const)</h2>
        <p><code>let</code> and <code>const</code> are block-scoped — they only exist inside the <code>{}</code> block where they were created:</p>
        ${codeBlock('javascript', `if (true) {
  let blockVar = "inside block";
  console.log(blockVar); // works
}
// console.log(blockVar); // ERROR — blockVar doesn't exist here

for (let i = 0; i < 3; i++) {
  // i only exists inside this for loop
}
// console.log(i); // ERROR`, true, `inside block`)}
      </div>

      <div class="info-box">
        <strong>📌 Key Rule:</strong> Inner scopes can access outer scopes, but NOT vice versa.
      </div>

      ${quiz('scope-q1', 'Can a variable declared with "let" inside an if-block be used outside it?', [
        { text: 'Yes, always', correct: false },
        { text: 'Yes, but only with var', correct: false },
        { text: 'No, let and const are block-scoped', correct: true },
        { text: 'Only if you use "return"', correct: false },
      ], 'let and const are block-scoped. Only var ignores block scope — which is why we prefer let/const!')}
    `
  },

  /* ============================================================
     ARROW FUNCTIONS
  ============================================================ */
  arrow: {
    title: 'Arrow Functions',
    prev: 'scope',
    next: 'arrays',
    render: () => `
      <div class="topic-header">
        <span class="tag">Functions &amp; Scope</span>
        <h1>Arrow Functions</h1>
        <p class="subtitle">A shorter, modern syntax for writing functions introduced in ES6.</p>
      </div>

      <div class="section">
        <h2>Basic Syntax</h2>
        ${codeBlock('javascript', `// Old way
function add(a, b) {
  return a + b;
}

// Arrow function
const addArrow = (a, b) => {
  return a + b;
};

// Even shorter (implicit return for single expressions)
const addShort = (a, b) => a + b;

console.log(add(2, 3));      // 5
console.log(addArrow(2, 3)); // 5
console.log(addShort(2, 3)); // 5`, true, `5\n5\n5`)}
      </div>

      <div class="section">
        <h2>Single Parameter — No Parentheses</h2>
        ${codeBlock('javascript', `const double = x => x * 2;
console.log(double(5)); // 10`, true, `10`)}
      </div>

      <div class="section">
        <h2>No Parameters — Empty Parentheses</h2>
        ${codeBlock('javascript', `const sayHi = () => console.log("Hi!");
sayHi();`, true, `Hi!`)}
      </div>

      <div class="section">
        <h2>Arrow Functions with Arrays</h2>
        <p>Arrow functions really shine with array methods:</p>
        ${codeBlock('javascript', `const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(n => n * 2);
console.log(doubled);

// Filter even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);`, true, `[2, 4, 6, 8, 10]\n[2, 4]`)}
      </div>

      ${quiz('arr-q1', 'Which is the correct arrow function syntax?', [
        { text: 'function => (x) { return x; }', correct: false },
        { text: 'x => x * 2', correct: true },
        { text: '(x) -> x * 2', correct: false },
        { text: 'arrow x { return x; }', correct: false },
      ], 'Arrow functions use => and are written as: (params) => expression or (params) => { body }')}
    `
  },

  /* ============================================================
     ARRAYS
  ============================================================ */
  arrays: {
    title: 'Arrays',
    prev: 'arrow',
    next: 'objects',
    render: () => `
      <div class="topic-header">
        <span class="tag">Data Structures</span>
        <h1>Arrays</h1>
        <p class="subtitle">Arrays store lists of values. Learn to create, access, and manipulate them.</p>
      </div>

      <div class="section">
        <h2>Creating Arrays</h2>
        ${codeBlock('javascript', `const fruits = ["Apple", "Banana", "Cherry"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["text", 42, true, null]; // mixed types

console.log(fruits);
console.log(fruits.length); // 3`, true, `["Apple","Banana","Cherry"]\n3`)}
      </div>

      <div class="section">
        <h2>Accessing Elements</h2>
        <p>Arrays are <strong>zero-indexed</strong> — the first element is at index 0:</p>
        ${codeBlock('javascript', `const colors = ["Red", "Green", "Blue"];

console.log(colors[0]); // Red
console.log(colors[1]); // Green
console.log(colors[2]); // Blue
console.log(colors[colors.length - 1]); // Blue (last element)`, true, `Red\nGreen\nBlue\nBlue`)}
      </div>

      <div class="section">
        <h2>Modifying Arrays</h2>
        ${codeBlock('javascript', `const arr = ["a", "b", "c"];

arr.push("d");        // add to end
console.log(arr);

arr.pop();            // remove from end
console.log(arr);

arr.unshift("z");     // add to beginning
console.log(arr);

arr.shift();          // remove from beginning
console.log(arr);`, true, `["a","b","c","d"]\n["a","b","c"]\n["z","a","b","c"]\n["a","b","c"]`)}
      </div>

      <div class="section">
        <h2>Useful Array Methods</h2>
        ${codeBlock('javascript', `const nums = [3, 1, 4, 1, 5, 9, 2, 6];

// map — transform each element
const doubled = nums.map(n => n * 2);
console.log(doubled);

// filter — keep elements that match condition
const big = nums.filter(n => n > 4);
console.log(big);

// find — get first match
const first = nums.find(n => n > 4);
console.log(first); // 5

// includes — check if value exists
console.log(nums.includes(9)); // true

// join — combine into string
console.log(nums.join(", "));`, true, `[6,2,8,2,10,18,4,12]\n[5,9,6]\n5\ntrue\n3, 1, 4, 1, 5, 9, 2, 6`)}
      </div>

      <div class="section">
        <h2>for...of Loop (Easy Array Iteration)</h2>
        ${codeBlock('javascript', `const animals = ["Cat", "Dog", "Bird"];

for (const animal of animals) {
  console.log(animal);
}`, true, `Cat\nDog\nBird`)}
      </div>

      ${quiz('array-q1', 'What index does the first element of an array have?', [
        { text: '1', correct: false },
        { text: '0', correct: true },
        { text: '-1', correct: false },
        { text: 'It depends on the browser', correct: false },
      ], 'Arrays are zero-indexed — the first element is always at index 0!')}
    `
  },

  /* ============================================================
     OBJECTS
  ============================================================ */
  objects: {
    title: 'Objects',
    prev: 'arrays',
    next: 'dom',
    render: () => `
      <div class="topic-header">
        <span class="tag">Data Structures</span>
        <h1>Objects</h1>
        <p class="subtitle">Objects store related data as key-value pairs — the foundation of real-world JS data.</p>
      </div>

      <div class="section">
        <h2>Creating an Object</h2>
        ${codeBlock('javascript', `const person = {
  name: "Alice",
  age: 25,
  city: "London",
  isStudent: true
};

console.log(person);
console.log(person.name); // dot notation
console.log(person["age"]); // bracket notation`, true, `{name:"Alice",age:25,city:"London",isStudent:true}\nAlice\n25`)}
      </div>

      <div class="section">
        <h2>Modifying Objects</h2>
        ${codeBlock('javascript', `const car = { brand: "Toyota", year: 2020 };

car.color = "Red";      // add new property
car.year = 2024;        // update existing
delete car.year;        // remove property

console.log(car);`, true, `{brand:"Toyota",color:"Red"}`)}
      </div>

      <div class="section">
        <h2>Object Methods</h2>
        <p>Functions inside objects are called <strong>methods</strong>:</p>
        ${codeBlock('javascript', `const calculator = {
  brand: "CalcBrand",
  add: function(a, b) {
    return a + b;
  },
  multiply: (a, b) => a * b   // arrow method
};

console.log(calculator.add(5, 3));       // 8
console.log(calculator.multiply(4, 6));  // 24`, true, `8\n24`)}
      </div>

      <div class="section">
        <h2>Looping over Objects</h2>
        ${codeBlock('javascript', `const user = { name: "Bob", age: 30, role: "admin" };

for (const key in user) {
  console.log(key + ": " + user[key]);
}`, true, `name: Bob\nage: 30\nrole: admin`)}
      </div>

      <div class="section">
        <h2>Destructuring</h2>
        ${codeBlock('javascript', `const { name, age } = { name: "Charlie", age: 22, city: "Paris" };
console.log(name); // Charlie
console.log(age);  // 22`, true, `Charlie\n22`)}
      </div>

      ${quiz('obj-q1', 'How do you access the "name" property of an object called "user"?', [
        { text: 'user->name', correct: false },
        { text: 'user.name or user["name"]', correct: true },
        { text: 'user:name', correct: false },
        { text: 'get(user.name)', correct: false },
      ], 'You can use dot notation (user.name) or bracket notation (user["name"]) to access properties.')}
    `
  },

  /* ============================================================
     DOM BASICS
  ============================================================ */
  dom: {
    title: 'DOM Basics',
    prev: 'objects',
    next: 'events',
    render: () => `
      <div class="topic-header">
        <span class="tag">The Browser</span>
        <h1>DOM Basics</h1>
        <p class="subtitle">The DOM lets you read and change HTML from JavaScript. It's how pages become dynamic!</p>
      </div>

      <div class="section">
        <h2>What is the DOM?</h2>
        <p>The <strong>Document Object Model (DOM)</strong> is a tree-like representation of your HTML that JavaScript can read and modify. Every tag becomes a "node" in this tree.</p>
        ${codeBlock('javascript', `// The document object IS the DOM
console.log(document.title);
console.log(document.URL);`, true, `JSLearn — JavaScript for Beginners\nhttps://example.com/`)}
      </div>

      <div class="section">
        <h2>Selecting Elements</h2>
        ${codeBlock('javascript', `// By ID — returns ONE element
const heading = document.getElementById("my-heading");

// By CSS selector — returns FIRST match
const btn = document.querySelector(".my-button");

// By CSS selector — returns ALL matches
const items = document.querySelectorAll("li");

// By class name — returns HTMLCollection
const cards = document.getElementsByClassName("card");`, false)}
      </div>

      <div class="section">
        <h2>Changing Content</h2>
        ${codeBlock('javascript', `// innerHTML — parses HTML
element.innerHTML = "<strong>Bold text</strong>";

// textContent — plain text only (safer!)
element.textContent = "Just text";

// Value (for input fields)
inputField.value = "new value";`, false)}
      </div>

      <div class="section">
        <h2>Changing Styles</h2>
        ${codeBlock('javascript', `const box = document.querySelector(".box");

// Change individual styles
box.style.color = "red";
box.style.backgroundColor = "#fff";
box.style.fontSize = "20px";

// Better: add/remove CSS classes
box.classList.add("highlight");
box.classList.remove("hidden");
box.classList.toggle("active");`, false)}
      </div>

      <div class="section">
        <h2>Creating &amp; Removing Elements</h2>
        ${codeBlock('javascript', `// Create a new element
const newPara = document.createElement("p");
newPara.textContent = "I was created with JS!";

// Add it to the page
document.body.appendChild(newPara);

// Remove an element
const toRemove = document.getElementById("old-element");
toRemove.remove();`, false)}
      </div>

      <div class="info-box tip">
        <strong>💡 Interactive Tip:</strong> The DOM examples above don't produce console output — they modify the page. Open this page's DevTools Console and try running them yourself!
      </div>

      ${quiz('dom-q1', 'Which method selects a SINGLE element by its ID?', [
        { text: 'document.querySelector("#id")', correct: false },
        { text: 'document.getElementById("id")', correct: false },
        { text: 'Both of the above work', correct: true },
        { text: 'document.select("id")', correct: false },
      ], 'Both getElementById("id") and querySelector("#id") select a single element by its ID!')}
    `
  },

  /* ============================================================
     EVENTS
  ============================================================ */
  events: {
    title: 'Events',
    prev: 'dom',
    next: null,
    render: () => `
      <div class="topic-header">
        <span class="tag">The Browser</span>
        <h1>Events</h1>
        <p class="subtitle">Events let your code respond to user actions — clicks, typing, hovering, and more.</p>
      </div>

      <div class="section">
        <h2>What is an Event?</h2>
        <p>Every time a user does something — clicks a button, types a key, moves the mouse — the browser fires an <strong>event</strong>. JavaScript can listen for these events and run code when they happen.</p>
      </div>

      <div class="section">
        <h2>addEventListener — The Right Way</h2>
        ${codeBlock('javascript', `const button = document.querySelector("#myBtn");

button.addEventListener("click", function() {
  console.log("Button was clicked!");
});

// Or with an arrow function:
button.addEventListener("click", () => {
  console.log("Clicked with arrow!");
});`, false)}
      </div>

      <div class="section">
        <h2>Common Event Types</h2>
        ${codeBlock('javascript', `// Mouse events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseenter", handler);
element.addEventListener("mouseleave", handler);

// Keyboard events
document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
});

// Form events
input.addEventListener("input", (e) => {
  console.log("Value:", e.target.value);
});
form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent page reload
});`, false)}
      </div>

      <div class="section">
        <h2>The Event Object</h2>
        ${codeBlock('javascript', `document.addEventListener("click", (event) => {
  console.log("Clicked at:", event.clientX, event.clientY);
  console.log("Target element:", event.target);
});`, false)}
      </div>

      <div class="section">
        <h2>Live Demo Area</h2>
        <div class="interactive-editor" style="border-color: var(--yellow)">
          <div class="editor-header" style="background: var(--crimson-dark)">
            🎉 Click the button below — it uses DOM + Events!
          </div>
          <div style="padding: 20px; background: var(--warm-bg); display:flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <button id="demo-event-btn" style="background:var(--crimson);color:#fff;border:none;padding:10px 22px;font-size:14px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif;border-radius:0;" onclick="demoEventClick(this)">Click Me!</button>
            <button id="demo-color-btn" style="background:var(--yellow);color:var(--crimson-dark);border:none;padding:10px 22px;font-size:14px;font-weight:700;cursor:pointer;font-family:Inter,sans-serif;border-radius:0;" onclick="demoColorClick(this)">Change My Color!</button>
            <span id="demo-counter" style="font-family:JetBrains Mono,monospace;font-size:14px;color:var(--crimson);font-weight:700;">Clicks: 0</span>
          </div>
        </div>
      </div>

      ${quiz('ev-q1', 'Which method is the recommended way to attach event listeners?', [
        { text: 'onclick="..." in HTML', correct: false },
        { text: 'element.onclick = function() {}', correct: false },
        { text: 'element.addEventListener("click", handler)', correct: true },
        { text: 'document.listen("click", handler)', correct: false },
      ], 'addEventListener is best — it lets you attach multiple listeners and is easier to remove.')}

      <hr class="divider">
      <div style="text-align:center; padding: 20px 0;">
        <h2 style="font-size:24px; color: var(--crimson-dark); margin-bottom: 12px;">🎉 Congratulations!</h2>
        <p style="color: var(--text-muted); font-size:16px;">You've completed all the JavaScript basics. Keep practising in the Playground!</p>
        <button class="hero-cta" style="margin: 16px auto; display:inline-flex;" onclick="loadTopic('playground')">Open Playground &#9658;</button>
      </div>
    `
  },

  /* ============================================================
     PLAYGROUND
  ============================================================ */
  playground: {
    title: 'Playground',
    prev: null,
    next: null,
    render: () => `
      <div class="topic-header">
        <span class="tag">Tool</span>
        <h1>&#9658; JS Playground</h1>
        <p class="subtitle">Write and run JavaScript code live. No setup needed.</p>
      </div>

      <div class="playground-wrap">
        <div class="playground-editor-side">
          <div class="playground-pane-header">
            Editor
            <span style="font-size:10px;opacity:0.7;font-weight:400;">Write your code here</span>
          </div>
          <textarea id="playground-textarea" spellcheck="false">// Welcome to the JS Playground!
// Write any JavaScript below and click Run.

const greet = (name) => {
  return \`Hello, \${name}! Welcome to JSLearn.\`;
};

console.log(greet("World"));
console.log(2 ** 10);       // 1024
console.log([1,2,3].map(x => x * x));
</textarea>
          <div class="playground-actions">
            <button class="btn-run-editor" onclick="runPlayground()">&#9658; Run Code</button>
            <button class="btn-clear-editor" onclick="clearPlayground()">Clear Output</button>
            <button class="btn-clear-editor" onclick="resetPlayground()">Reset Editor</button>
          </div>
        </div>
        <div class="playground-output-side">
          <div class="playground-pane-header">
            Output
            <button class="playground-clear-btn" onclick="clearPlayground()">Clear</button>
          </div>
          <div id="playground-output">// Output will appear here…</div>
        </div>
      </div>

      <div class="info-box" style="margin-top:20px;">
        <strong>💡 Tip:</strong> Try pasting any code from the tutorial here to experiment with it!
        <br>Note: <code>alert()</code> and <code>prompt()</code> are blocked in the sandbox. Use <code>console.log()</code> instead.
      </div>

      <div style="margin-top:28px;">
        <h2 style="font-size:18px;font-weight:700;color:var(--crimson-dark);border-bottom:3px solid var(--yellow);padding-bottom:6px;margin-bottom:16px;">Quick Snippets — Click to Load</h2>
        <div style="display:flex;flex-wrap:wrap;gap:8px;">
          ${[
            { label: 'FizzBuzz', code: `for (let i = 1; i <= 20; i++) {\n  if (i % 15 === 0) console.log("FizzBuzz");\n  else if (i % 3 === 0) console.log("Fizz");\n  else if (i % 5 === 0) console.log("Buzz");\n  else console.log(i);\n}` },
            { label: 'Fibonacci', code: `function fib(n) {\n  let a = 0, b = 1;\n  for (let i = 0; i < n; i++) {\n    console.log(a);\n    [a, b] = [b, a + b];\n  }\n}\nfib(10);` },
            { label: 'Palindrome', code: `function isPalindrome(str) {\n  const clean = str.toLowerCase().replace(/[^a-z]/g, '');\n  return clean === clean.split('').reverse().join('');\n}\nconsole.log(isPalindrome("racecar")); // true\nconsole.log(isPalindrome("hello"));   // false` },
            { label: 'Array methods', code: `const nums = [5, 3, 8, 1, 9, 2, 7, 4, 6];\nconst evens = nums.filter(n => n % 2 === 0);\nconst doubled = nums.map(n => n * 2);\nconst sum = nums.reduce((acc, n) => acc + n, 0);\nconsole.log("Evens:", evens);\nconsole.log("Doubled:", doubled);\nconsole.log("Sum:", sum);` },
            { label: 'Random color', code: `function randomHex() {\n  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');\n}\nfor (let i = 0; i < 5; i++) {\n  console.log(randomHex());\n}` },
          ].map((s, i) => `<button onclick="loadSnippet(${i})" style="background:var(--warm-card);border:2px solid var(--warm-border);color:var(--text-mid);font-size:12px;font-weight:700;padding:7px 14px;cursor:pointer;font-family:Inter,sans-serif;transition:all 0.18s;border-radius:0;" onmouseover="this.style.borderColor='var(--crimson)';this.style.color='var(--crimson)'" onmouseout="this.style.borderColor='var(--warm-border)';this.style.color='var(--text-mid)'">${s.label}</button>`).join('')}
        </div>
      </div>
    `
  }
};

// Helper: snippets data for playground
const SNIPPETS = [
  `for (let i = 1; i <= 20; i++) {\n  if (i % 15 === 0) console.log("FizzBuzz");\n  else if (i % 3 === 0) console.log("Fizz");\n  else if (i % 5 === 0) console.log("Buzz");\n  else console.log(i);\n}`,
  `function fib(n) {\n  let a = 0, b = 1;\n  for (let i = 0; i < n; i++) {\n    console.log(a);\n    [a, b] = [b, a + b];\n  }\n}\nfib(10);`,
  `function isPalindrome(str) {\n  const clean = str.toLowerCase().replace(/[^a-z]/g, '');\n  return clean === clean.split('').reverse().join('');\n}\nconsole.log(isPalindrome("racecar")); // true\nconsole.log(isPalindrome("hello"));   // false`,
  `const nums = [5, 3, 8, 1, 9, 2, 7, 4, 6];\nconst evens = nums.filter(n => n % 2 === 0);\nconst doubled = nums.map(n => n * 2);\nconst sum = nums.reduce((acc, n) => acc + n, 0);\nconsole.log("Evens:", evens);\nconsole.log("Doubled:", doubled);\nconsole.log("Sum:", sum);`,
  `function randomHex() {\n  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');\n}\nfor (let i = 0; i < 5; i++) {\n  console.log(randomHex());\n}`,
];

/* ─── RENDERING HELPERS ─────────────────────────────────────── */

let codeBlockCounter = 0;

function codeBlock(lang, code, runnable = false, expectedOutput = '') {
  const id = 'cb-' + (++codeBlockCounter);
  const outputId = id + '-out';
  const _eo = expectedOutput;
  return `
    <div class="code-block" id="${id}">
      <div class="code-block-header">
        <span class="code-lang">${lang}</span>
        <div class="code-actions">
          <button class="btn-copy" onclick="copyCode('${id}')" id="${id}-copy">Copy</button>
          ${runnable ? `<button class="btn-run" onclick="runCodeBlock('${id}', '${outputId}', \`${_eo.replace(/`/g, '\\`')}\`)">&#9658; Run</button>` : ''}
        </div>
      </div>
      <pre>${escHtml(code)}</pre>
      ${runnable ? `<div class="code-output" id="${outputId}"><div class="output-label">Output</div><div class="output-content"></div></div>` : ''}
    </div>
  `;
}

function interactiveEditor(defaultCode, editorId) {
  const outId = editorId + '-output';
  return `
    <div class="interactive-editor">
      <div class="editor-header">
        ✏️ Try It Yourself
        <span style="font-size:10px;font-weight:400;opacity:0.8;">Edit the code and click Run</span>
      </div>
      <textarea class="editor-textarea" id="${editorId}" spellcheck="false">${escHtml(defaultCode)}</textarea>
      <div class="editor-footer">
        <button class="btn-run-editor" onclick="runEditor('${editorId}', '${outId}')">&#9658; Run</button>
        <button class="btn-clear-editor" onclick="clearEditor('${editorId}', '${outId}')">Reset</button>
      </div>
      <div class="editor-output" id="${outId}"></div>
    </div>
  `;
}

let quizCounter = 0;
function quiz(id, question, options, explanation) {
  quizCounter++;
  return `
    <div class="quiz-box">
      <div class="quiz-header">📝 Quick Check</div>
      <div class="quiz-body">
        <div class="quiz-question">${question}</div>
        <div class="quiz-options" id="${id}-opts">
          ${options.map((opt, i) => `
            <div class="quiz-option" onclick="checkQuiz('${id}', ${i}, ${opt.correct}, this)">
              <span style="font-weight:700;color:var(--crimson);min-width:20px;">${String.fromCharCode(65+i)}.</span>
              ${opt.text}
            </div>
          `).join('')}
        </div>
        <div class="quiz-feedback" id="${id}-fb"></div>
        <div style="margin-top:8px;font-size:13px;color:var(--text-muted);display:none;" id="${id}-exp">${explanation}</div>
        <button class="quiz-retry" id="${id}-retry" onclick="retryQuiz('${id}')">Try Again</button>
      </div>
    </div>
  `;
}

function escHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
