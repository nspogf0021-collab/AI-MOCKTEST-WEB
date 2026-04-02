# AI MockTest Pro

Experience the future of test preparation with AI-powered mock tests. Generate personalized exams for SAT, GRE, JEE, NEET, UPSC, and 30+ more exams.

## Features

- 🤖 **100% AI-Generated Questions** - Every question is real AI-generated
- 📊 **30+ Exam Types** - SAT, GRE, JEE, NEET, UPSC, and more
- ⏱️ **Timed Tests** - Customizable time limits
- 📈 **Smart Analytics** - Performance tracking and weak area identification
- 💾 **Complete History** - All test results saved locally
- 🎯 **Fully Customizable** - Set exact question counts per subject and difficulty

## Tech Stack

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript
- Google Gemini API
- Firebase Hosting

## GitHub Repository

**Repository:** `nspogf0021-collab/AI-MOCKTEST-WEB`

### GitHub Actions (CI/CD)

This repository uses GitHub Actions for automatic deployment:

- **Push to main branch** → Automatic deployment to Firebase Hosting
- **Pull requests** → Preview deployment for testing

#### Setting up GitHub Actions:

1. **Add Firebase Service Account Secret:**
   - Go to Firebase Console → Project Settings → Service Accounts
   - Generate new private key
   - In GitHub: Settings → Secrets → Actions → New repository secret
   - Name: `FIREBASE_SERVICE_ACCOUNT_AI_MOCKTEST_WEB`
   - Value: Paste the JSON content

2. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: AI MockTest Pro"
   git remote add origin https://github.com/nspogf0021-collab/AI-MOCKTEST-WEB.git
   git branch -M main
   git push -u origin main
   ```

3. **Automatic Deployment:**
   - After pushing, GitHub Actions will automatically deploy to Firebase
   - Live URL: `https://ai-mocktest-web.web.app`

## Installation & Setup

### Prerequisites

- Node.js (for Firebase CLI)
- Google Gemini API key

### 1. Get Google Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Create a new API key
3. Copy the API key

### 2. Install Firebase CLI

```bash
npm install -g firebase-tools
```

### 3. Login to Firebase

```bash
firebase login
```

### 4. Initialize Firebase Project

```bash
firebase init hosting
```

Follow the prompts:
- Select your Firebase project or create a new one
- Set public directory to current directory (.)
- Configure as single-page app: Yes
- Overwrite index.html: No

### 5. Deploy to Firebase

```bash
firebase deploy
```

## Usage

1. **Open your deployed site** (URL will be shown after deployment)
2. **Accept Terms & Conditions**
3. **Select your exam** (SAT, JEE, UPSC, etc.)
4. **Configure test settings**:
   - Set question counts per subject
   - Choose difficulty level
   - Set time limit
   - Enter your Gemini API key
5. **Generate AI Test** - Watch AI create unique questions
6. **Take the test** - Timed, interactive experience
7. **Review results** - Detailed analytics and explanations

## API Key Configuration

You can configure your API key in two ways:

1. **Embedded in code** (for production)
2. **Input field** (for testing/development)

## Local Development

```bash
# Start local server
python -m http.server 8000
# or
npx serve .

# Open browser to http://localhost:8000
```

## Project Structure

```
├── index.html          # Main application
├── firebase.json       # Firebase hosting config
├── .gitignore          # Git ignore file
└── README.md          # This file
```

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Troubleshooting

### API Key Issues
- Ensure your Gemini API key is valid
- Check API quota limits
- Verify API is enabled in Google Cloud Console

### CORS Issues
- The application uses direct API calls which should work
- If issues persist, check browser console for errors

### Performance
- First-time generation may take 10-30 seconds
- Subsequent tests load faster
- Large question counts (50+) may take longer

## License

This project is open source and available under the MIT License.

## Support

For issues and questions:
1. Check the browser console for errors
2. Verify your API key is working
3. Ensure you have internet connection
4. Contact support if issues persist