Here's a sample `README.md` file for your Gemini-powered AI assistant app (`bhAI`), using React, Firebase Authentication, and Gemini API (via a custom `run()` function). You can customize it as per your project name and functionality.

---

## 🧠 bhAI - Your Personal AI Assistant

`bhAI` is a simple, clean, and interactive AI chat application built using **React**, **Firebase**, and **Gemini AI API**. It allows users to sign in, ask questions, and get intelligent responses. The app also supports features like chat history, prompt suggestions, and real-time response rendering with rich formatting.

---

### 🚀 Features

- 🔐 Firebase Authentication
- 🤖 Integration with Google Gemini (via `run()` config)
- 🧾 Chat history management
- 💬 Suggested prompts with quick access
- ⌨️ Typing animation for greetings
- 📱 Responsive design for mobile and desktop

---

### 📁 Folder Structure

```
client/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── config/
│   ├── App.jsx
│   └── main.jsx
vite.config.js
firebase.js
```

---

### ⚙️ Tech Stack

- **ReactJS**
- **Vite**
- **Firebase Authentication**
- **CSS (Custom + Media Queries)**
- **Gemini AI API** (through a custom `run()` function)

---

### 🛠️ Installation

1. **Clone the repository**

```bash
git https://github.com/ShreyasChavan1/Prompt-GPT.git
cd Prompt-GPT/client
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Firebase**

Create a `firebase.js` in `client/src/lib/firebase.js` and set up Firebase Auth:

```js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID',
  ...
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
```

4. **Set up Gemini API**

In `client/src/config/gemini.js`:

```js
const run = async (prompt) => {
  // Your Gemini API call logic
};
export default run;
```

5. **Run the development server**

```bash
npm run dev
```

---

### ✨ Usage

- Sign in using email/password.
- Click on a prompt or type your own.
- View AI-generated responses.
- Start new chats using the sidebar toggle.

---

### 📦 Build

To create a production-ready build:

```bash
npm run build
```

---

### 🙌 Contributions

Feel free to fork this repo and improve it further by adding features like:

- Persistent chat history (Firestore or localStorage)
- Voice recognition
- Theme switcher
- Language support

---



