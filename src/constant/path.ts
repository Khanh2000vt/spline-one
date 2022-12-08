export enum Path {
  HOME = "/",
  SIGN_UP = "/sign-up",
  ABOUT = "/about",
}

export const dataPath = [
  {
    id: 0,
    label: "Home",
    router: Path.HOME,
  },
  {
    id: 1,
    label: "About",
    router: Path.ABOUT,
  },
  {
    id: 2,
    label: "Tours",
    router: "/tours",
  },
  {
    id: 3,
    label: "Hotels",
    router: "/hotels",
  },
  {
    id: 4,
    label: "Contact",
    router: "/contact",
  },
  {
    id: 5,
    label: "Login",
    router: "/auth",
  },
];
