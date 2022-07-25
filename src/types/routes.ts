export enum ROUTES {
  VISION = "/",
  PEOPLE = "/ppl",
  SPONSORS = "/sponsors",
  HELPUS = "/helpus",
}

const menuLinks=[
  {id:1, to:ROUTES.VISION, label:"Vision"},
  {id:2, to:ROUTES.PEOPLE, label:"People"},
  {id:3, to:ROUTES.SPONSORS, label:"Sponsors"},
  {id:4, to:ROUTES.HELPUS, label:"Help Us"},
];
export default menuLinks;
