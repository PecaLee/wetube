import User from "../models/User";
import bcrypt from "bcrypt";

export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = async (req, res) => {
  const { name, username, email, password, password2, location } = req.body;
  const pageTitle = "Join";
  if (password !== password2) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "Password confirmation does not match.",
    });
  }
  const usernameExists = await User.exists({ username });
  if (usernameExists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This username is already taken.",
    });
  }
  const emailExists = await User.exists({ email });
  if (emailExists) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: "This email is already taken.",
    });
  }
  // const mongooseOr = await.exists({$or:[{username},{email}]});
  // or로 여러조건을 찾을 수 있다. 조건에 부합하는 것을 프로미스.
  try {
    await User.create({
      name,
      username,
      email,
      password,
      location,
    });
    return res.redirect("/login");
  } catch (error) {
    return res.status(400).render("join", {
      pageTitle,
      errorMessage: error._message,
    });
  }
};

export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Login" });
};
export const postLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  const pageTitle = "Login";
  if (!user) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "This user doesn't exist.",
    });
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(400).render("login", {
      pageTitle,
      errorMessage: "Wrong password",
    });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  res.redirect("/");
};

export const edit = (req, res) => res.send("edit user");
export const remove = (req, res) => res.send("remove user");
export const logout = (req, res) => res.send("logout");
export const see = (req, res) => res.send("see");
