import { notFound } from "next/navigation";
import { coursesData } from "@/content/coursesData";
import { CourseDetailClient } from "@/components/CourseDetailClient";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = coursesData.find((item) => item.slug === slug);

  if (
    !course ||
    slug === "accounting-auditing" ||
    slug === "talent-development-atd"
  ) {
    notFound();
  }

  return <CourseDetailClient course={course} />;
}
