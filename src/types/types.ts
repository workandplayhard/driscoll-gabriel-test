export interface UserData {
  id: number;
  userName: string;
  fullName: string;
}
export interface UserState {
  users: UserData[];
  selectedUser: any;
}
export interface NewsData {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
}
export interface NewsState {
  news: NewsData[];
}
export interface RootState {
  users: UserState;
  news: NewsState;
}
