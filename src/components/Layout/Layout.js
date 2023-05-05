import Nav from "../Nav/Nav";
import Container from "./Container";

const Layout = ({children}) => {
    return ( <>
        <Nav/>
        <Container>
        {children}
        </Container>
    </> );
}
 
export default Layout;