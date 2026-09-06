📰ZnB News App

A real-time news aggregator that fetches and displays live news articles from a REST API — built as a first independent JavaScript application.

GitHub: github.com/Zees1122/MY-FIRST-APP-News-App-

How It Works
User opens app
      │
      ▼
JavaScript calls News API (REST)
      │
      ▼
fetch() → Promise → JSON response
      │
      ▼
DOM manipulation → Articles rendered on page
      │
      ▼
User sees live news, no page refresh needed
Tech Stack
JavaScript (Vanilla) — async API calls, DOM manipulation
REST API — NewsAPI.org for live article data
HTML5 / CSS3 — clean card-based UI
Key JavaScript Concepts Applied
javascript
// Async data fetching
fetch(`https://newsapi.org/v2/top-headlines?apiKey=${API_KEY}`)
  .then(response => response.json())
  .then(data => renderArticles(data.articles))

// DOM manipulation
function renderArticles(articles) {
  articles.forEach(article => {
    const card = document.createElement('div');
    card.innerHTML = `<h3>${article.title}</h3>`;
    container.appendChild(card);
  });
}
Getting Started
bash
git clone https://github.com/Zees1122/MY-FIRST-APP-News-App-.git
# Add your free API key from newsapi.org to the config
# Open index.html in browser

Note: Get a free API key at newsapi.org

What I Learned
Making asynchronous HTTP requests using fetch() and handling Promises
Parsing and rendering JSON data dynamically without page reload
Building a complete, user-facing application independently
Handling API keys, error states, and loading indicators
