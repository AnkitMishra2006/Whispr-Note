# Whispr Note 📝

**Whispr Note** is a modern, full-stack anonymous feedback platform inspired by popular apps like Qooh.me and NGL. It provides a secure space for users to receive honest, anonymous feedback through unique shareable links. Built with cutting-edge technologies including **Next.js 15** with App Router, **MongoDB**, **NextAuth v4**, and **Tailwind CSS v4**, the platform features robust email verification and AI-powered message suggestions for enhanced user engagement.

[🚀 Live Demo](https://whispr-note.vercel.app) | [📚 Documentation](#-getting-started) | [🐛 Report Bug](https://github.com/AnkitMishra2006/Whispr-Note/issues)

---

## 🌟 Overview

Whispr Note empowers users to:

- **Receive genuine feedback** from friends, colleagues, or followers anonymously
- **Share a unique URL** (`/u/username`) to collect messages from anyone
- **Manage privacy** with toggleable message acceptance settings
- **Get conversation starters** with AI-generated question suggestions
- **Maintain security** through email verification and secure authentication

Perfect for content creators, professionals seeking feedback, students, or anyone curious about honest opinions from their network.

---

## ✨ Key Features

### 🔐 **Secure Authentication System**

- **NextAuth v4** integration with credentials provider
- **Email verification** with one-time verification codes
- **Session management** with JWT tokens
- **Password encryption** using bcryptjs

### 💬 **Anonymous Messaging**

- **Public message forms** accessible via `/u/username` URLs
- **Real-time message delivery** to user dashboards
- **Message management** with delete functionality
- **Privacy controls** to enable/disable message acceptance

### 🤖 **AI-Powered Features**

- **Smart question generation** using HuggingFace Mistral-7B model
- **Conversation starters** to encourage meaningful interactions
- **Fallback message system** with predefined engaging questions

### 🎨 **Modern UI/UX**

- **Responsive design** optimized for all devices
- **ShadCN UI components** for consistent styling
- **Tailwind CSS v4** for modern aesthetics
- **Interactive carousels** showcasing sample messages
- **Toast notifications** for user feedback

### 📧 **Email Integration**

- **Resend API** for reliable email delivery
- **React Email** templates for beautiful verification emails
- **Automated verification** workflow

---

## 🛠️ Tech Stack

### **Frontend**

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development
- **Tailwind CSS v4** - Utility-first CSS framework
- **ShadCN UI** - High-quality component library
- **Lucide React** - Beautiful icon library

### **Backend**

- **Next.js API Routes** - Serverless backend functions
- **MongoDB** - NoSQL database with Mongoose ODM
- **NextAuth v4** - Authentication library
- **Zod** - Schema validation
- **bcryptjs** - Password hashing

### **External Services**

- **Resend** - Email delivery service
- **HuggingFace** - AI model inference
- **Vercel** - Deployment platform

### **Development Tools**

- **ESLint** - Code linting
- **React Hook Form** - Form management
- **Axios** - HTTP client
- **Day.js** - Date manipulation

---

## � Screenshots & Demo

### 🏠 Homepage

Beautiful landing page with animated message carousel showcasing the platform's purpose.

### 🔑 Authentication Flow

- **Sign Up**: Create account with email, username, and password
- **Email Verification**: Receive and enter verification code
- **Sign In**: Secure login with credentials

### 📊 User Dashboard

- **Message Management**: View, delete, and organize received messages
- **Privacy Controls**: Toggle message acceptance on/off
- **Profile Settings**: Manage account preferences
- **Share Link**: Easy copy-paste URL sharing

### 📝 Public Message Form (`/u/username`)

- **Anonymous Messaging**: Send messages without revealing identity
- **AI Suggestions**: Get conversation starters with one click
- **User-Friendly**: Clean, intuitive interface for message composition

> **Note**: Screenshots coming soon! The live demo is available at [whispr-note.vercel.app](https://whispr-note.vercel.app)

---

## 🏗️ Architecture & Project Structure

```
whispr-note/
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── next.config.ts            # Next.js configuration
│   ├── tailwind.config.js        # Tailwind CSS setup
│   ├── tsconfig.json             # TypeScript configuration
│   └── eslint.config.mjs         # ESLint rules
│
├── 📁 src/
│   ├── 📁 app/                   # Next.js App Router
│   │   ├── layout.tsx            # Root layout with providers
│   │   ├── globals.css           # Global styles
│   │   │
│   │   ├── 📁 (app)/             # Main application routes
│   │   │   ├── layout.tsx        # App layout with navbar
│   │   │   ├── page.tsx          # Homepage
│   │   │   └── dashboard/        # User dashboard
│   │   │       └── page.tsx
│   │   │
│   │   ├── 📁 (auth)/            # Authentication routes
│   │   │   ├── sign-in/          # Login page
│   │   │   ├── sign-up/          # Registration page
│   │   │   └── verify/           # Email verification
│   │   │       └── [username]/
│   │   │
│   │   ├── 📁 api/               # Backend API routes
│   │   │   ├── auth/             # NextAuth configuration
│   │   │   │   └── [...nextauth]/
│   │   │   ├── sign-up/          # User registration
│   │   │   ├── verify-code/      # Email verification
│   │   │   ├── send-message/     # Anonymous message sending
│   │   │   ├── get-messages/     # Fetch user messages
│   │   │   ├── delete-message/   # Message deletion
│   │   │   ├── accept-messages/  # Toggle message acceptance
│   │   │   ├── suggest-messages/ # AI question generation
│   │   │   └── check-username-unique/ # Username validation
│   │   │
│   │   └── 📁 u/                 # Public message submission
│   │       └── [username]/
│   │
│   ├── 📁 components/            # Reusable UI components
│   │   ├── MessageCard.tsx       # Message display component
│   │   ├── Navbar.tsx            # Navigation bar
│   │   └── ui/                   # ShadCN UI components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── form.tsx
│   │       ├── input.tsx
│   │       └── ...
│   │
│   ├── 📁 context/               # React Context providers
│   │   └── AuthProvider.tsx      # NextAuth session provider
│   │
│   ├── 📁 lib/                   # Utility libraries
│   │   ├── dbConnect.ts          # MongoDB connection
│   │   ├── resend.ts             # Email service setup
│   │   └── utils.ts              # Common utilities
│   │
│   ├── 📁 model/                 # Database models
│   │   └── User.ts               # User and Message schemas
│   │
│   ├── 📁 schemas/               # Zod validation schemas
│   │   ├── signUpSchema.ts
│   │   ├── signInSchema.ts
│   │   ├── messageSchema.ts
│   │   ├── acceptMessageSchema.ts
│   │   └── verifySchema.ts
│   │
│   ├── 📁 types/                 # TypeScript definitions
│   │   ├── ApiResponse.ts        # API response types
│   │   └── next-auth.d.ts        # NextAuth type extensions
│   │
│   ├── 📁 helpers/               # Helper functions
│   │   └── sendVerificationEmail.ts
│   │
│   └── messages.json             # Sample messages for carousel
│
├── 📁 emails/                    # Email templates
│   └── VerificationEmail.tsx     # React Email template
│
└── 📁 public/                    # Static assets
    └── favicon.ico
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or later)
- **npm** or **yarn** or **pnpm**
- **MongoDB** (local or cloud instance)
- **Git** for version control

### 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AnkitMishra2006/Whispr-Note.git
   cd Whispr-Note
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**

   Create a `.env.local` file in the root directory:

   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/whispr-note
   # or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/whispr-note

   # NextAuth Configuration
   NEXTAUTH_SECRET=your-super-secret-key-here
   NEXTAUTH_URL=http://localhost:3000

   # Email Service (Resend)
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxx

   # AI Integration (HuggingFace)
   HUGGINGFACE_API_KEY=hf_xxxxxxxxxxxxxxxxx
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### 🔑 Environment Variables Setup Guide

#### **MongoDB URI**

- **Local**: `mongodb://localhost:27017/whispr-note`
- **MongoDB Atlas**: Get connection string from Atlas dashboard
- **Docker**: `mongodb://mongo:27017/whispr-note`

#### **NextAuth Secret**

- Generate a secure random string: `openssl rand -base64 32`
- Or use: [generate-secret.vercel.app](https://generate-secret.vercel.app/32)

#### **Resend API Key**

1. Sign up at [resend.com](https://resend.com)
2. Create an API key in the dashboard
3. Verify your domain (for production)

#### **HuggingFace API Key**

1. Create account at [huggingface.co](https://huggingface.co)
2. Go to Settings → Access Tokens
3. Create a new token with "Read" permissions

---

## 🧠 AI Integration Details

### **Question Generation System**

Whispr Note uses HuggingFace's **Mistral-7B-Instruct-v0.1** model to generate engaging conversation starters:

```typescript
const prompt = `Create a list of three open-ended and engaging questions 
formatted as a single string. Each question should be separated by '||'. 
These questions are for an anonymous social messaging platform, like Qooh.me, 
and should be suitable for a diverse audience. Avoid personal or sensitive topics, 
focusing instead on universal themes that encourage friendly interaction.`;
```

**Features:**

- **Context-Aware**: Questions designed for anonymous platforms
- **Safe Content**: Filtered to avoid sensitive topics
- **Engaging Format**: Open-ended questions promoting interaction
- **Fallback System**: Uses `messages.json` when AI is unavailable

**Example Generated Questions:**

- "What's a hobby you've recently started?"
- "If you could have dinner with any historical figure, who would it be?"
- "What's a simple thing that makes you happy?"

---

## 🔒 Security & Authentication

### **Authentication Flow**

1. **Registration**: Email, username, password with validation
2. **Email Verification**: 6-digit code sent via Resend
3. **Password Security**: bcryptjs hashing with salt
4. **Session Management**: JWT tokens with NextAuth
5. **Route Protection**: Middleware for authenticated routes

### **Security Features**

- **Input Validation**: Zod schemas for all user inputs
- **SQL Injection Prevention**: Mongoose ODM protection
- **CSRF Protection**: NextAuth built-in security
- **Secure Headers**: Next.js security headers
- **Environment Variables**: Sensitive data protection

### **Data Protection**

- **Anonymous Messages**: No sender identification stored
- **User Privacy**: Toggle message acceptance
- **Secure Storage**: Encrypted passwords and sessions
- **GDPR Compliance**: User data deletion capabilities

---

## 🚀 Deployment Guide

### **Vercel Deployment (Recommended)**

1. **Connect Repository**

   ```bash
   # Push your code to GitHub
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**

   - Import project from GitHub
   - Configure environment variables
   - Deploy automatically

3. **Production Environment Variables**
   ```env
   MONGODB_URI=mongodb+srv://...
   NEXTAUTH_SECRET=production-secret
   NEXTAUTH_URL=https://your-app.vercel.app
   RESEND_API_KEY=re_...
   HUGGINGFACE_API_KEY=hf_...
   ```

### **Alternative Deployment Options**

#### **Docker Deployment**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

#### **Railway/Render Deployment**

- Connect GitHub repository
- Set environment variables
- Deploy with automatic builds

---

## 📊 API Documentation

### **Authentication Endpoints**

#### `POST /api/sign-up`

Register a new user account.

```json
{
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

#### `POST /api/verify-code`

Verify email with verification code.

```json
{
  "username": "johndoe",
  "code": "123456"
}
```

### **Message Endpoints**

#### `POST /api/send-message`

Send anonymous message to user.

```json
{
  "username": "johndoe",
  "content": "Your anonymous message here"
}
```

#### `GET /api/get-messages`

Fetch user's received messages (authenticated).

#### `DELETE /api/delete-message/[messageid]`

Delete specific message (authenticated).

### **Utility Endpoints**

#### `POST /api/suggest-messages`

Get AI-generated question suggestions.

#### `GET /api/check-username-unique?username=johndoe`

Check if username is available.

#### `POST /api/accept-messages`

Toggle message acceptance setting.

---

## 🧪 Testing

### **Manual Testing Checklist**

#### **Authentication Flow**

- [ ] User registration with validation
- [ ] Email verification process
- [ ] Login with credentials
- [ ] Session persistence
- [ ] Logout functionality

#### **Core Features**

- [ ] Anonymous message sending
- [ ] Message display in dashboard
- [ ] Message deletion
- [ ] Toggle message acceptance
- [ ] AI question generation
- [ ] Public profile access (`/u/username`)

#### **Edge Cases**

- [ ] Invalid email formats
- [ ] Duplicate usernames
- [ ] Expired verification codes
- [ ] Non-existent user profiles
- [ ] Rate limiting (if implemented)

### **Running Tests**

```bash
# Add test scripts to package.json
npm run test
npm run test:watch
npm run test:coverage
```

---

## 🔧 Troubleshooting

### **Common Issues**

#### **MongoDB Connection Issues**

```bash
# Check MongoDB status
mongosh
# or for Atlas
mongosh "mongodb+srv://cluster.mongodb.net/whispr-note"
```

#### **Email Not Sending**

- Verify Resend API key
- Check domain verification status
- Confirm email template formatting

#### **AI Suggestions Not Working**

- Validate HuggingFace API key
- Check model availability
- Verify network connectivity

#### **Build Errors**

```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

### **Environment Issues**

```bash
# Check environment variables
echo $MONGODB_URI
echo $NEXTAUTH_SECRET
```

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### **Development Setup**

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly
5. Commit: `git commit -m 'Add amazing feature'`
6. Push: `git push origin feature/amazing-feature`
7. Open a Pull Request

### **Contribution Guidelines**

- **Code Style**: Follow existing patterns and ESLint rules
- **Commits**: Use conventional commit messages
- **Testing**: Add tests for new features
- **Documentation**: Update README for significant changes

### **Areas for Contribution**

- [ ] Rate limiting implementation
- [ ] Message reactions/likes system
- [ ] Admin dashboard for moderation
- [ ] Mobile app (React Native)
- [ ] Message export functionality
- [ ] Dark mode theme
- [ ] Internationalization (i18n)

---

## 🗺️ Roadmap

### **Phase 1: Core Enhancements** ✅

- [x] Email verification system
- [x] AI-powered question suggestions
- [x] Responsive design
- [x] Basic security measures

### **Phase 2: Advanced Features** 🚧

- [ ] **Rate Limiting**: Prevent spam and abuse
- [ ] **Message Reactions**: Like/dislike functionality
- [ ] **User Profiles**: Public profile customization
- [ ] **Analytics Dashboard**: Message statistics

### **Phase 3: Scalability** 📋

- [ ] **Admin Panel**: Content moderation tools
- [ ] **API Rate Limiting**: Comprehensive protection
- [ ] **Caching**: Redis integration for performance
- [ ] **CDN Integration**: Asset optimization

### **Phase 4: Mobile & PWA** 🔮

- [ ] **Progressive Web App**: Offline capabilities
- [ ] **Push Notifications**: Real-time message alerts
- [ ] **Mobile App**: React Native implementation
- [ ] **Share Integration**: Native mobile sharing

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2024 Ankit Mishra

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Vercel** - For hosting and deployment platform
- **ShadCN** - For beautiful UI components
- **HuggingFace** - For AI model inference capabilities
- **Resend** - For reliable email delivery
- **MongoDB** - For flexible database solutions

---

## 👨‍💻 Author

**Ankit Mishra**

- 📧 **Email**: ankit.kumar.mishra2006@gmail.com
- 🐙 **GitHub**: [@AnkitMishra2006](https://github.com/AnkitMishra2006)

---

## 📞 Support

If you find this project helpful, please consider:

- ⭐ **Starring** the repository
- 🐛 **Reporting bugs** via [Issues](https://github.com/AnkitMishra2006/Whispr-Note/issues)
- 💡 **Suggesting features** or improvements
- 🤝 **Contributing** to the codebase

---

<div align="center">
  <h3>Built with ❤️ by <a href="https://github.com/AnkitMishra2006">Ankit Mishra</a></h3>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
