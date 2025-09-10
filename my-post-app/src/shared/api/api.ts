export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
};
export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};

export type CommentsByPostId = {
  [postId: number]: Comment[];
};

export const mockPosts: Post[] = [
    {
        userId: 1,
        id: 1,
        title: 'title1',
        body: 'body text 1'
    },
    {
        userId: 1,
        id: 2,
        title: 'title2',
        body: 'body text 2'
    },
    {
        userId: 2,
        id: 3,
        title: 'title3',
        body: 'body text 3'
    },
    {
        userId: 2,
        id: 4,
        title: 'title4',
        body: 'body text 4'
    },
    {
        userId: 3,
        id: 5,
        title: 'title5',
        body: 'body text 5'
    },
    {
        userId: 3,
        id: 6,
        title: 'title6',
        body: 'body text 5'
    },
];

export const mockComments: CommentsByPostId = {
  1: [
    {
      id: 1,
      postId: 1,
      name: 'John Smith',
      email: 'john@example.com',
      body: 'comment1'
    },
    {
      id: 2,
      postId: 1,
      name: 'Oliver Taylor',
      email: 'oliver@example.com',
      body: 'comment2'
    },
    {
      id: 3,
      postId: 1,
      name: 'Jack  Brown',
      email: 'jack@example.com',
      body: 'comment3'
    }
  ],
  2: [
    {
      id: 4,
      postId: 2,
      name: 'John Smith',
      email: 'john@example.com',
      body: 'comment4'
    }
  ],
  3: [
    {
      id: 5,
      postId: 3,
      name: 'Oliver Taylor',
      email: 'oliver@example.com',
      body: 'comment5'
    },
    {
      id: 6,
      postId: 3,
      name: 'Jack  Brown',
      email: 'jack@example.com',
      body: 'comment6'
    }
  ],
  4: [
    {
      id: 5,
      postId: 3,
      name: 'John Smith',
      email: 'john@example.com',
      body: 'comment7'
    },
    {
      id: 6,
      postId: 3,
      name: 'Jack  Brown',
      email: 'jack@example.com',
      body: 'comment8'
    }
  ],
  5: [
    {
      id: 5,
      postId: 3,
      name: 'Oliver Taylor',
      email: 'oliver@example.com',
      body: 'comment9'
    },
    {
      id: 6,
      postId: 3,
      name: 'Jack  Brown',
      email: 'jack@example.com',
      body: 'comment10'
    }
  ],
  6: [
    {
      id: 5,
      postId: 3,
      name: 'John Smith',
      email: 'john@example.com',
      body: 'comment11'
    },
    {
      id: 6,
      postId: 3,
      name: 'Oliver Taylor',
      email: 'oliver@example.com',
      body: 'comment12'
    }
  ]
};