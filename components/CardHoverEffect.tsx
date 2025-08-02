import { HoverEffect } from './ui/card-hover-effect';

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8 mt-10">
      <h1 className='text-center text-3xl font-semibold'>Projects</h1>
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "AWS Recipt Tracker",
    description:
      "A serverless AWS solution that extracts data from uploaded receipts, stores it in DynamoDB, and sends user notifications via SES—all triggered by an S3 upload.",
    link: "https://github.com/haris-al-hanafi/Reciept-Tracker-with-AWS.git",

  },
  {
    title: "Personal Portfolio",
    description:
      "A modern portfolio built with Next.js, Tailwind CSS, and Framer Motion, featuring smooth animations, minimal UI, and an interactive floating dock.",
    link: "https://github.com/haris-al-hanafi/Portfolio.git",

  },
];
