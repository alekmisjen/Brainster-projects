export interface Hero {
  bgImg?: string;
  title?: string;
  subTitle?: string;
}
export interface Card {
  title: string;
  desc: string;
  icon?: string;
}
export interface Content {
  subTitle?: string;
  text?: string;
}

export interface Body {
  title: string;
  desc?: string;
  content?: Content[];
}
export interface SIEMServicePage {
  hero: Hero[];
  title: string;
  icon: string;
  card: Card[];
  body: Body[];
}
export interface NewsletterPage {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  body: Body[];
}
export interface PTestingServicePage {
  hero: Hero[];
  title: string;
  icon: string;
  card: Card[];
  body: Body[];
}
export interface IndustriesPage {
  hero: Hero[];
  title: string;
  card: Card[];
  blockSection: string;
}
export interface ContactPage {
  hero: Hero[];
  title: string;
  blockSection: string;
  subTitle: string;
  address: string;
  email: string;
  phone: string;
}

export interface Job {
  date: string;
  title: string;
  desc: string;
  employmentType: string[];
  salary: string;
}
export interface Client {
  subTitle: string;
  content: string;
}
export interface TestimonialClient {
  icon: string;
  body: Client[];
}
export interface Location {
  country: string;
  city: string;
  address: string;
  postalCode: string;
  icon: string;
}
export interface LocationSectionData {
  title: string;
  bgImg: string;
  locations: Location[];
}
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}
export interface WhoWeAre {
  title: string;
  content: string;
}
export interface VideoSection {
  title: string;
  image: string;
}
export interface sectionThree {
  title?: string;
  content: string;
}
export interface Contant {
  name: string;
  email: string;
  message: string;
  newsletter: boolean;
  id: number;
}
export interface Testimonials {
  id: string;
  first_name: string;
  last_name: string;
  message: string;
  rating: number;
  avatar: string;
}
export interface TeamMember {
  first_name: string;
  last_name: string;
  avatar: string;
  position: string;
  desc: string;
  bio: string;
}
export interface CertificateCard {
  title: string;
  description: string;
  icon: string;
}
