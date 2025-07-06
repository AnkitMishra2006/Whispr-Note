# Whispr Note 📝

**Whispr Note** is a full-stack anonymous feedback platform inspired by apps like Qooh.me and NGL. It enables users to sign up, receive anonymous messages via a unique link, and manage them privately from a dashboard. Built using **Next.js (App Router)**, **MongoDB**, **NextAuth**, and **Tailwind CSS**, it includes email verification and AI-powered message suggestions.

[🚀 Live Demo](https://whispr-note.vercel.app)

---

## ✨ Features

- 🔐 **User Authentication** with NextAuth (Credentials Provider)
- ✉️ **Email Verification** via one-time code
- 🆔 **Unique Message URL** for each user (`/u/username`)
- 💬 **Anonymous Messaging** with AI-suggested questions
- 📥 **Dashboard to View/Delete Messages**
- ✅ **Toggle Message Acceptance**
- 🧠 **HuggingFace AI Integration** for prompt generation
- 🎨 Beautiful UI with Tailwind CSS and ShadCN

---

## 🧰 Tech Stack

- **Frontend:** Next.js 14 (App Router), Tailwind CSS, ShadCN UI
- **Backend:** API Routes, MongoDB (Mongoose), NextAuth
- **Email:** Resend (React Email)
- **AI Integration:** HuggingFace Inference API
- **Validation:** Zod + React Hook Form
- **Deployment:** Vercel


---

## 📁 Project Structure

```
src/
│
├── app/              # App Router structure
│   ├── (auth)/       # sign-in, sign-up, verify
│   ├── (app)/        # homepage, dashboard
│   ├── api/          # backend logic (auth, messages)
│   └── u/[username]  # public anonymous message form
│
├── components/       # UI and custom components
├── context/          # AuthProvider for session
├── helpers/          # Utility for sending emails
├── lib/              # DB connection, Resend config
├── model/            # Mongoose models
├── schemas/          # Zod validation schemas
├── types/            # TS types
└── messages.json     # Pre-defined fallback messages
```

---

## 🧪 Local Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/whispr-note.git
   cd whispr-note
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Rename `.env.sample` to `.env` and fill in the values:
   ```env
   MONGODB_URI=your_mongo_connection
   NEXTAUTH_SECRET=your_secret
   NEXTAUTH_URL=http://localhost:3000
   RESEND_API_KEY=your_resend_key
   HUGGINGFACE_API_KEY=your_huggingface_key
   ```

4. **Run the app**
   ```bash
   npm run dev
   ```

---

## 🧠 AI Message Suggestion

Uses HuggingFace's `mistralai/Mistral-7B-Instruct-v0.1` model to generate 3 open-ended questions separated by `||`, promoting meaningful conversation.

---

## 🔒 Auth & Verification

- Users sign up with email/username/password
- One-time code sent via Resend email
- Must verify before logging in or receiving messages

---

## ✅ Todos & Enhancements

- [ ] Add rate-limiting on message sending
- [ ] Enable message "likes" or reactions
- [ ] Admin dashboard (moderation)
- [ ] Mobile PWA support

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Made with ❤️ by [Ankit Mishra](https://github.com/ankitmishra2006)
