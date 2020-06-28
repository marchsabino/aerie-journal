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

export interface NewsArticle extends BaseArtifact {
  author: User;
  title: string;
  content: string;
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
