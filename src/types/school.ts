export interface Teacher {
  id: string;
  name: string;
  role: string;
  subject: string;
  category: 'aniq' | 'tabiiy' | 'tillar' | 'boshlangich' | 'sport';
  categoryLabel: string;
  experience: number;
  degree: string;
  avatar: string;
  bio: string;
  phone?: string;
  achievements: string[];
}

export interface Club {
  id: string;
  name: string;
  mentor: string;
  category: string;
  days: string;
  time: string;
  room: string;
  ageGroup: string;
  description: string;
  iconName: string;
  spotsLeft: number;
}

export interface ScheduleDay {
  day: string;
  lessons: {
    order: number;
    subject: string;
    teacher: string;
    room: string;
    time: string;
  }[];
}

export interface Achievement {
  id: string;
  year: string;
  studentName: string;
  grade: string;
  competition: string;
  level: 'Xalqaro' | 'Respublika' | 'Shahar';
  place: string;
  badgeColor: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'bino' | 'laboratoriya' | 'kutubxona' | 'tadbirlar';
  categoryLabel: string;
  imageUrl: string;
  description: string;
}

export interface AdmissionRequirement {
  id: number;
  title: string;
  description: string;
}
