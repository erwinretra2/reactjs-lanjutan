import { Link as ChakraLink } from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav style={{ background: "#3498db", padding: "20px" }}>
            <div className="logo">
                <ChakraLink
                    as={ReactRouterLink}
                    to="/"
                    data-testid="home-page"
                    style={{
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "24px",
                        fontWeight: "bold",
                    }}
                >
                    Student Portal
                </ChakraLink>
            </div>
            <ul className="nav-links" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                <li style={{ display: "inline-block", marginLeft: "20px" }}>
                    <ChakraLink
                        as={ReactRouterLink}
                        to="/student"
                        data-testid="student-page"
                        style={{ color: "#fff", textDecoration: "none" }}
                    >
                        All Students
                    </ChakraLink>
                </li>
                <li style={{ display: "inline-block", marginLeft: "20px" }}>
                    <ChakraLink
                        as={ReactRouterLink}
                        to="/add"
                        data-testid="add-page"
                        style={{ color: "#fff", textDecoration: "none" }}
                    >
                        Add Student
                    </ChakraLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
