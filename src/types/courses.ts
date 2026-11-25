export interface CoursePlan {
  id: string;
  label: string;
  labelAr: string;
  audience: "individual" | "company";
  enrollment: "registered" | "live";
  price: string;
  priceNote: string;
  priceNoteAr: string;
  description: string;
  descriptionAr: string;
  path: string;
  pathAr: string;
  features: string[];
  featuresAr: string[];
}

export interface CourseCertification {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  badge: string;
  awardingBody: string;
  awardingBodyAr: string;
  logo?: string;
  plans: CoursePlan[];
}

export interface Courses {
  slug: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  price: string;
  certificate: string;
  badge: string;
  certifications: CourseCertification[];
}

export type CoursesHeading = {
  coursesPrimaryHeading: string;
  coursesSecondaryHeading: string;
};
