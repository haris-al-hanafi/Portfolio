import { HoverEffect } from '@/components/ui/card-hover-effect';

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
];
