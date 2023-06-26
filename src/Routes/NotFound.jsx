import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="not-found-container">
            <h1 className="not-found-heading">404 | Not Found</h1>
            <Button
                className="not-found-button"
                onClick={handleGoBack}
                data-testid="back"
            >
                Go Back
            </Button>
        </div>
    );
};

export default NotFound;
