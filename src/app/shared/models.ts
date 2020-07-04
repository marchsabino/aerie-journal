export enum Privilege {
  STAFF,
  MODERATOR,
  ADMIN,
  ROOT,
}

export interface BaseArtifact {
  createdAt: Date;
  updatedAt: Date;
}

export interface Image {
  content: string;
}

export interface User extends BaseArtifact {
  firstName: string;
  lastName: string;
  email: string;
  privilege: Privilege;
  position: string;
  profileImage?: Image;
}

export interface Archive extends BaseArtifact {
  title: string;
  content: string;
  coverImage?: Image;
}

export interface Announcement extends BaseArtifact {
  title: string;
  content: string;
  author: User;
  status?: string;
}

export interface ForumBoard extends BaseArtifact {
  id: number;
  title: string;
  description?: string;
  threads?: ForumThread[];
}

export interface ForumThread extends BaseArtifact {
  id: number;
  title: string;
  content: string;
  attachments?: any[];
  author: User;
  comments?: ForumComment[];
}

export interface ForumComment extends BaseArtifact {
  id: number;
  content: string;
  author: User;
}

export interface FieldData<T> {
  data: T;
  disabled?: boolean;
  checked?: boolean;
}
