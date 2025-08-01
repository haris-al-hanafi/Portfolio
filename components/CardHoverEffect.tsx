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
      "A serverless, intelligent receipt tracking solution built on AWS. It automatically extracts key information from uploaded receipts, stores structured data in DynamoDB, and notifies users via SES email — all triggered seamlessly by an S3 upload.",
    link: "https://github.com/haris-al-hanafi/Reciept-Tracker-with-AWS.git",

  },
  {
    title: "Personal Portfolio",
    description:
      "A modern, responsive portfolio built with Next.js, Tailwind CSS, and Framer Motion to showcase my projects and skills. It features smooth animations, a minimal UI, and an interactive floating dock for quick access to my social profiles.",
    link: "https://github.com/haris-al-hanafi/Reciept-Tracker-with-AWS.git",

  },
];
