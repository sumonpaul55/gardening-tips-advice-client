/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IInputs {
  name: string;
  label: string;
  size?: "sm" | "md" | "lg";
  clasName?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  defaultValue?: string;
  placeholder?: string;
  isRequired?: boolean;
}

export interface IUser {
  _id: string;
  name: string;
  role: string;
  email: string;
  status?: string;
  phoneNumber: string;
  profilePhoto: string;
  createdAt?: string;
  updatedAt?: string;
  verified?: boolean;
  __v?: number;
}

export interface Tpost {
  _id: string;
  title: string;
  post: string;
  userId: UserId;
  category: TCategory;
  activity: any[];
  upVotes: any;
  downVotes: any;
  createdAt?: any;
  __v: number;
}

export interface UserId {
  verified: boolean;
  _id: string;
  name: string;
  role: string;
  email: string;
  follower: any[];
  following: any[];
  upVotesItem: any[];
  downVotesItem: any[];
  phoneNumber: string;
  profilePhoto: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  address: string;
  links: TLink[];
}

export interface TLink {
  socialName: string;
  url: string;
}

export interface TCategory {
  _id: string;
  category: string;
  image: string;
  __v: number;
}
