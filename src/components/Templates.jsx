import React from 'react';
import Template from './Template';

const resumeData = {
  pic: "https://media.licdn.com/dms/image/C5603AQGzEPwq6BPOog/profile-displayphoto-shrink_200_200/0/1645903709168?e=2147483647&v=beta&t=sHF9D3w7tcjQ9mvtQg-FPlSaGh-724NKC-xvrPXeN8g",
  name: "Akash Singh",
  title: "Frontend Developer",
  email: "akash6998s@gmail.com",
  mobile: "9315729158",
  linkedin: "https://www.linkedin.com/in/the-akashsingh/",
  website: "https://github.com/akash6998s",
  summary: "A highly motivated and results-driven frontend developer. Passionate about creating visually appealing and user-friendly websites, and eager to contribute my skills and knowledge to a dynamic team.",
  education: [
    {
      degree: "BBA",
      school: "Institute of Management Studies",
      graduationYear: "2022"
    },
    {
      degree: "Intermediate",
      school: "CSHP Public School",
      graduationYear: "2019"
    }
  ],
  jobTitle: "Frontent Developer",
  companyName: "Meon Technologies",
  startDate: "May 2023",
  endDate: "Present",
  jobDesc: [
    "Collaborated with the design team to implement responsive and visually appealing user interfaces.",
    "Wrote clean and maintainable JavaScript code to enhance user interactivity and functionality.",
    "Worked on optimizing web performance and ensuring cross browser compatibility. ",
    "Issisted in integrating web applications with backend services."
  ],
  projects: [
    { name: "Digital Demat Account Creation with Advanced KYC/ReKYC Process", description: "As a Frontend Developer, I collaborated with a dedicated backend developer to create a cutting-edge website facilitating the seamless creation of Demat accounts through a robust Know Your Customer (KYC) and Re-KYC process. The project incorporated various APIs to enhance user verification and data collection, ensuring a secure and efficient onboarding experience" },

    // { name: "Inventory Management System", description: "Designed and implemented a scalable inventory management system using Java and MySQL." },
    // { name: "Customer Relationship Management (CRM) System", description: "Architected a CRM system to streamline customer interactions and improve sales processes using Salesforce and custom Apex development." }
  ],
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Bootstrap", "Tailwind", "Git", "Jquery", "Jinja", "User interface design"],
  languages: [
    { name: "English", proficiency: "Native Speaker" },
    { name: "Spanish", proficiency: "Professional Working Proficiency" },
    { name: "French", proficiency: "Intermediate Proficiency" }
  ],
  awards: [
    { name: "Outstanding Contribution Award", year: "2022" },
    { name: "Certified Scrum Master (CSM)", year: "2020" },
    { name: "Innovation Excellence Award", year: "2023" }
  ],
  references: "References available upon request."
};

function Templates() {
  return (
    <div className="dark-theme">
      <Template data={resumeData} />
    </div>
  );
}

export default Templates;
