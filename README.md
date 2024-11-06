# 🚀 WithU - E-learning Platform for Differently-Abled Students

WithU is an innovative and accessible E-learning platform built to empower differently-abled students by providing educational resources tailored to their needs. It leverages modern web technologies to create an inclusive learning experience, ensuring education is accessible to everyone.

## 📚 Key Features

1. 🔍 **Course Browsing and Filtering**: Easily browse and filter courses based on categories and preferences.
2. 💳 **Course Purchase with Stripe**: Seamless course purchases using Stripe integration.
3. 📈 **Progress Tracking**: Mark chapters as complete/incomplete with automatic course progress tracking.
4. 📊 **Student Dashboard**: Custom student dashboard to track learning progress.
5. 🎓 **Teacher Mode**: Allows teachers to create and manage courses with full control over chapters and materials.
6. 🛠️ **Course Creation**: Teachers can create and organize new courses and chapters.
7. 🔄 **Drag-and-Drop Reordering**: Easily reorder chapters within courses using drag-and-drop functionality.
8. 📂 **Media Upload**: Upload course materials like thumbnails, attachments, and videos using UploadThing.
9. 🎥 **Video Processing with Mux**: Video content is processed and streamed using the Mux platform for smooth playback.
10. 🎞️ **HLS Video Player**: Integrate Mux HLS streaming for a seamless video experience.
11. ✏️ **Rich Text Editor**: Manage chapter descriptions with a rich text editor for enhanced formatting.
12. 🔐 **Authentication via Clerk**: Secure user authentication using Clerk.
13. 🗄️ **Database Management with Prisma**: ORM for managing data models using Prisma.
14. 🛢️ **MySQL Database with Planetscale**: Scalable MySQL database setup using Planetscale.

---

## 💡 Enhancements

1. 🔍 **Search Functionality**: Added a search feature to enhance the user experience on the courses page.
2. 💻 **UI Improvements**: Enhanced user interfaces for both student and teacher dashboards to improve usability.

---

## 🎯 Planned Enhancements

1. 🎓 **Quizmify Integration**: Plan to integrate Elliot Chong’s Quizmify feature for creating and managing quizzes within the platform.

---

## 🛠️ Usage

To use this repository, ensure that you have **Node.js** and **NPM** installed on your machine. Once you have the necessary tools, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Amitansu-priyadarsan/lms.git

2. **📦 Install dependencies:
   ```bash
   cd lms
   Install the dependencies: npm install 
   ```
3. **💻 Start the development server:
   ```bash
   npm run dev
   ```
4.🗃️ Database Setup
To reset and push the database schema, use the following Prisma commands:

```bash
Copy code
npx prisma migrate reset
npx prisma db push

```

5.Open your browser and visit: http://localhost:3000




