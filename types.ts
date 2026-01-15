export interface CourseModule {
  id: number;
  title: string;
  hours: number;
  type: 'theory' | 'practice' | 'mixed';
  description: string;
  objectives: string[];
  keyPoints: string[];
  deliverables?: string;
}

export interface ResourceItem {
  title: string;
  author?: string;
  type: 'book' | 'web' | 'tool';
  url?: string;
}

export interface AssessmentItem {
  name: string;
  value: number;
  color: string;
  details?: string;
}
