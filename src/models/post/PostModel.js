import { type } from "@testing-library/user-event/dist/type";

export const Post = Interface('Post')({
    title: type('string'),
    description: type('string'),
    image_src: type('string'),
    upvotes: type('number'),
    comments: type('string'),
    subhstk: type('Subhstk'),
    username: type('string'),
  },{
    error: true,
    strict: true
  })
