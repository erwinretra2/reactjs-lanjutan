import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                background: "linear-gradient(135deg, #1a237e, #3949ab)"
            }}
        >
            <div style={{ textAlign: "center", color: "#fff" }}>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMY3t0xZfP7Zli4NZI6Wy_lv5oi0vRsrKfzA&usqp=CAU"
                    alt="Campus"
                    style={{ width: "300px", borderRadius: "50%", marginBottom: "30px" }}
                />
                <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "20px" }}>
                    Welcome to the Student Portal
                </h1>
                <p style={{ fontSize: "18px", marginBottom: "30px" }}>
                    Explore and access various information about your campus
                </p>
                {/* Updated code using Chakra UI Button component */}
                <Button
                    as={Link}
                    to="/student"
                    style={{
                        display: "inline-block",
                        padding: "10px 20px",
                        backgroundColor: "#fff",
                        color: "#1a237e",
                        textDecoration: "none",
                        fontWeight: "bold",
                        borderRadius: "4px",
                        transition: "background-color 0.3s ease"
                    }}
                    data-testid="student-btn"
                >
                    All Students
                </Button>
            </div>
            <Footer />
        </div>

    );
};

export default Home;
