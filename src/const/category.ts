export const CATEGORY = {
  SHARING: '나눔',
  QUESTION: '질문',
  TIP: '꿀팁',
  FREE: '자유게시판',
};

export type CategoryType = 'SHARING' | 'QUESTION' | 'TIP' | 'FREE';

export type CommentType = {
  id: number;
  created_At: string;
  content: string;
  host: string;
  heart: number;
};

export type PostType = {
  id: number;
  created_At: string;
  category: CategoryType;
  host: string;
  title: string;
  content: string;
  heart: number;
  save: number;
  commentList: CommentType[];
};
