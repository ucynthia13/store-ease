export interface FileCardProps {
  image: string
  name: string
  size?: string
  date: string
  author: string
}


const fileData = [
    {
      id: 1,
      name: "Resume_Cynthia.pdf",
      size: "1.2 GB",
      date: "Mar 2nd, 2024",
      author: "Cynthia Umwali",
      image: "/assets/icons/file-csv.svg"
    },
    {
      id: 2,
      name: "Project_Pitch.mp4",
      size: "3.4 GB",
      date: "Jan 15th, 2024",
      author: "John Doe",
      image: "/assets/icons/file-doc.svg",
    },
    {
      id: 3,
      name: "design_mockup.fig",
      size: "500 MB",
      date: "Dec 11th, 2023",
      author: "Sarah Kim",
      image: "/assets/icons/file-document.svg"
    },
    {
      id: 4,
      name: "marketing_report.pdf",
      size: "900 MB",
      date: "Nov 28th, 2023",
      author: "Daniel Ouma",
      image: "/assets/icons/file-csv.svg",
    },
    {
      id: 5,
      name: "budget.xlsx",
      size: "220 MB",
      date: "Oct 3rd, 2023",
      author: "Jane Niyonsaba",
      image: "/assets/icons/file-video.svg",
    },
    {
      id: 6,
      name: "prototype.sketch",
      size: "1.1 GB",
      date: "Jul 21st, 2023",
      author: "Michael Lee",
      image: "/assets/icons/file-image.svg",
    },
    {
      id: 7,
      name: "team_roster.csv",
      size: "320 KB",
      date: "May 9th, 2023",
      author: "Fatima Ali",
      image: "/assets/icons/file-video.svg",
    },
    {
      id: 8,
      name: "api_docs.json",
      size: "150 KB",
      date: "Apr 12th, 2023",
      author: "Ethan Blake",
      image: "/assets/icons/file-document.svg",
    },
    {
      id: 9,
      name: "logo_variants.ai",
      size: "880 MB",
      date: "Feb 23rd, 2023",
      author: "Grace Umwali",
      image: "/assets/icons/file-doc.svg",
    },
    {
      id: 10,
      name: "dev_notes.txt",
      size: "75 KB",
      date: "Jan 2nd, 2023",
      author: "Cynthia Umwali",
      image: "/assets/icons/file-video.svg",
    },
    {
      id: 11,
      name: "meeting_minutes.docx",
      size: "140 KB",
      date: "Mar 18th, 2023",
      author: "Alex King",
      image: "/assets/icons/file-video.svg",
    },
    {
      id: 12,
      name: "roadmap_2025.pdf",
      size: "1.3 GB",
      date: "Aug 29th, 2023",
      author: "Naomi Wambui",
      image: "/assets/icons/file-doc.svg",
    },
    {
      id: 13,
      name: "user_testing_results.xlsx",
      size: "300 MB",
      date: "Sep 15th, 2023",
      author: "Cynthia Umwali",
      image: "/assets/icons/file-video.svg",
    },
    {
      id: 14,
      name: "screenshot1.png",
      size: "2 MB",
      date: "Jun 17th, 2023",
      author: "Peter Mugenzi",
      image: "/assets/icons/file-video.svg",
    },
    {
      id: 15,
      name: "invoice_007.pdf",
      size: "600 KB",
      date: "Oct 19th, 2023",
      author: "Linda Aimee",
      image: "/assets/icons/file-video.svg",
    },
    {
      id: 16,
      name: "code_snippets.js",
      size: "50 KB",
      date: "May 6th, 2023",
      author: "Samuel K.",
      image: "/assets/icons/file-video.svg",
    },
    {
      id: 17,
      name: "wireframes.zip",
      size: "10 MB",
      date: "Mar 22nd, 2023",
      author: "Cynthia Umwali",
      image: "/assets/icons/file-video.svg",
    },
    {
      id: 18,
      name: "onboarding_video.mp4",
      size: "1.5 GB",
      date: "Jul 14th, 2023",
      author: "Davis Maina",
      image: "/assets/icons/file-video.svg",
    },
    {
      id: 19,
      name: "changelog.md",
      size: "35 KB",
      date: "Sep 8th, 2023",
      author: "Kim N.",
      image: "/assets/icons/file-video.svg",
    },
    {
      id: 20,
      name: "fullstack_notes.pdf",
      size: "2.1 GB",
      date: "Dec 25th, 2023",
      author: "Cynthia Umwali",
      image: "/assets/icons/file-video.svg",
    }
  ];
  
  export default fileData;
  