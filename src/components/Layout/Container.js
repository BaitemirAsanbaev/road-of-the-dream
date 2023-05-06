import Header from "../../pages/Header/Header";
import classes from "./Container.module.scss";
import Nav from "../Nav/Nav";

const Container = ({ children }) => {
  return (
    <div className={classes.Container}>
      <Header />
      <Nav />
      {children}
    </div>
  );
};

export default Container;
