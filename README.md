<p align="center">
  <img src="public\arctusaerospace_logo.png" alt="Arctus Aerospace Logo" width="120" height="120" />
</p>

# Arctus Aerospace

This is the project website for Arctus Aerospace, a visionary defense and space manufacturing startup. The project is a modern, responsive web application built with Next.js and styled with Tailwind CSS, showcasing the company’s mission, vision, and innovation in aerospace.

---

## Core Features

- **Dynamic Hero Section:** Visually striking hero with a looping UAV video and animated tagline.
- **Company Overview:** Mission, vision, and specialization in high-end unmanned aerial systems for earth observation and defense.
- **Dynamic Blog Grid:** Sleek blog layout with previews, excerpts, and “Read More” links.
- **Simple Contact Form:** User-friendly form with built-in validation.
- **Responsive Design:** Optimized for desktops, tablets, and smartphones.
- **Minimal & Modern UI/UX:** Clean, professional design using ShadCN UI and Tailwind CSS.

---

## Tech Stack

- **Framework:** [Next.js (App Router)](https://nextjs.org/docs/app)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **UI Framework:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [ShadCN UI](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Form Management:** [React Hook Form](https://react-hook-form.com/)
- **Schema Validation:** [Zod](https://zod.dev/)

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/)

### Installation & Setup

1. **Clone the repository**
    ```sh
    git clone <repository-url>
    cd arctus-aerospace
    ```

2. **Install dependencies**
    ```sh
    npm install
    ```

3. **Create a `.env` file** (if needed for environment variables).

### Running the Development Server

Start the dev server at [http://localhost:9002](http://localhost:9002):

```sh
npm run dev
```

### Building for Production

Create an optimized production build:

```sh
npm run build
npm start
```

---

## File Structure

```
/
├── public/                 # Static assets (images, fonts, etc.)
│   └── ccdbg2.png          # Project logo
├── src/
│   ├── app/                # Application routes
│   │   ├── hire-me/        # Hire Me page
│   │   │   └── page.tsx    # Hire Me page component
│   │   ├── page.tsx        # Homepage component
│   │   └── layout.tsx      # Root layout
│   ├── components/         # Reusable components
│   │   ├── landing/        # Landing page components
│   │   ├── ui/             # ShadCN UI components
│   │   └── timeline.tsx    # Timeline component
│   ├── lib/                # Utility functions
│   └── ai/                 # Genkit configuration for AI features
├── .env                    # Environment variables (not committed)
├── .gitignore
├── package.json
├── tailwind.config.ts
└── README.md
```


## 🚀 Deployment

This project is deployed with Vercel.
visit : [https://arctus-aerospace.vercel.app/]

## License

This project is for demonstration and educational purposes.

Licensed under the [MIT License](LICENSE).

---

**Made with ❤️ by Vinamra Hetawal**
