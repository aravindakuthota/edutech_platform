// ======== SAMPLE BLOG DATA ========
const blogs = [
  {
    id: 1,
    title: "The Magic of Learning JavaScript",
    date: "October 20, 2025",
    summary: "Learn why JavaScript is one of the most powerful and fun languages to build websites.",
    content: `
      JavaScript is like the magic wand of the web. 🌟
      It helps websites move, talk, and do fun stuff!
      For example, when you click a button and something happens – that’s JavaScript.
      Learning it step-by-step makes you a web wizard 🧙‍♂️.
      Start with basics like variables and functions, and soon you’ll build games and websites!
    `
  },
  {
    id: 2,
    title: "Understanding HTML – The Building Blocks",
    date: "October 22, 2025",
    summary: "HTML is the skeleton of the web. Let’s learn what makes it so important.",
    content: `
      HTML (HyperText Markup Language) is what gives structure to your website.
      Think of it as the skeleton 🦴 of your body.
      It defines where the head, body, hands (buttons), and legs (links) go.
      Once you master HTML, you can combine it with CSS and JS to make magic happen.
    `
  },
  {
    id: 3,
    title: "CSS Makes Everything Beautiful",
    date: "October 25, 2025",
    summary: "CSS is the paint and decoration for your web page. Let’s make it pretty!",
    content: `
      CSS stands for Cascading Style Sheets. 🎨
      It makes your web pages colorful, stylish, and well-arranged.
      You can change colors, fonts, borders, and even animations!
      Without CSS, every website would look plain and boring.
    `
  },
  {
    id: 4,
    title: "The Future of AI and Coding",
    date: "October 26, 2025",
    summary: "AI is changing how we write code, design, and solve problems. Let’s explore!",
    content: `
      Artificial Intelligence is everywhere now – in phones, games, and websites.
      It helps you code faster, design smarter, and solve problems quicker.
      Learning AI will give you superpowers 💪 for your tech career.
    `
  },
  {
    id: 5,
    title: "Why Practice Makes a Great Coder",
    date: "October 28, 2025",
    summary: "Becoming a good coder is like learning to ride a bicycle – practice makes perfect!",
    content: `
      When you practice coding daily, your brain builds muscle memory.
      The more you code, the more patterns you start recognizing.
      Even small daily practice makes a big difference.
      So, never stop coding and learning 🚀.
    `
  }
];

// ======== DISPLAY BLOG LIST ========
if (document.getElementById("blog-container")) {
  const container = document.getElementById("blog-container");

  blogs.forEach(blog => {
    const card = document.createElement("div");
    card.classList.add("blog-card");

    card.innerHTML = `
      <h2>${blog.title}</h2>
      <small>${blog.date}</small>
      <p>${blog.summary}</p>
      <button onclick="viewPost(${blog.id})">View More</button>
    `;

    container.appendChild(card);
  });
}

// ======== OPEN SELECTED POST ========
function viewPost(id) {
  localStorage.setItem("selectedBlogId", id);
  window.location.href = "post.html";
}

// ======== SHOW POST CONTENT ========
if (document.getElementById("post-content")) {
  const postContainer = document.getElementById("post-content");
  const id = localStorage.getItem("selectedBlogId");
  const blog = blogs.find(b => b.id == id);

  if (blog) {
    postContainer.innerHTML = `
      <h2>${blog.title}</h2>
      <small>${blog.date}</small>
      <p>${blog.content}</p>
      <button onclick="goBack()">⬅️ Back to Blogs</button>
    `;
  } else {
    postContainer.innerHTML = "<p>Blog not found!</p>";
  }
}

function goBack() {
  window.location.href = "index.html";
}
