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
