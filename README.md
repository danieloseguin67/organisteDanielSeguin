# organisteDanielSeguin
Music website for organist Daniel Seguin

## 🎵 Features
- Browse and search music songs by category, name, or author
- View detailed information about each song
- Direct links to YouTube performances
- Special request form for new songs
- Contact form for web master
- Register as a fan
- **No external server required** - uses local JSON data

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation
```bash
npm install
```

### Running the Application
```bash
npm start
```
The application will be available at `http://localhost:4201/`

### Building for Production
```bash
npm run build
```

## � EmailJS Configuration

The application uses EmailJS to send emails to daniel@seguin.dev. To set this up:

1. See `EMAILJS_SETUP.md` for detailed setup instructions
2. See `EMAILJS_QUICK_START.md` for quick reference

**Important**: You need to configure EmailJS credentials before the email features will work.

## �📁 Data Management
The music data is stored locally in `src/data/music.json`. No external JSON server is required. The application loads the music data directly from this file.

To add or modify songs, edit the `src/data/music.json` file and rebuild the application.

# Project Architecture
![MusicSolution drawio (2)](https://github.com/danieloseguin67/organisteDanielSeguin/assets/63018494/8140b0f3-c621-421a-9733-c2a5f8bfd3f0)


# Project overview in Azure Devops:

https://dev.azure.com/seguindev23/organisteDanielSeguin/_boards/board/t/organisteDanielSeguin%20Team/Issues

Application Screen Shots:

![image](https://github.com/danieloseguin67/organisteDanielSeguin/assets/63018494/a68dea00-69f1-41b6-8c1f-d6260dc0f059) 

![image](https://github.com/danieloseguin67/organisteDanielSeguin/assets/63018494/863b2119-affb-4d5a-b766-a82e412f3b85) 

![image](https://github.com/danieloseguin67/organisteDanielSeguin/assets/63018494/a382f53e-c89c-45a8-95b2-5453b617d794)

![image](https://github.com/danieloseguin67/organisteDanielSeguin/assets/63018494/18d58d1c-e4f6-4615-90aa-b95121d4d103)

![image](https://github.com/danieloseguin67/organisteDanielSeguin/assets/63018494/ab3176d1-c6eb-4863-b9f6-e63efc052234)


