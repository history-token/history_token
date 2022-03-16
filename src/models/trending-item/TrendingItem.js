import { type } from "@testing-library/user-event/dist/type";
import { Subhstk } from "../subhstk/Subhstk";

export const TrendingItems = Interface('TrendingItems')({
    image_src: type('string'),
    title: type('string'),
    description: type('string'),
    subhstk: type('Subhstk'),

  },{
    error: true,
    strict: true
  })