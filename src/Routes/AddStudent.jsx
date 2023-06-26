import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, FormControl, FormLabel, Input, Stack } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

const AddStudent = () => {
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("");
    const [profilePicture, setProfilePicture] = useState("");
    const [address, setAddress] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [gender, setGender] = useState("");
    const [programStudy, setProgramStudy] = useState("");

    useEffect(() => {
        // Reset the form fields when the component mounts
        setFullName("");
        setProfilePicture("");
        setAddress("");
        setPhoneNumber("");
        setBirthDate("");
        setGender("");
        setProgramStudy("");
    }, []);

    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };

    const handleProfilePictureChange = (e) => {
        setProfilePicture(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleBirthDateChange = (e) => {
        setBirthDate(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleProgramStudyChange = (e) => {
        setProgramStudy(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newStudent = {
            fullname: fullName,
            profilePicture,
            address,
            phoneNumber,
            birthDate,
            gender,
            programStudy,
            faculty: getFacultyByProgramStudy(programStudy),
        };

        // Perform the API request to add the new student
        fetch("http://localhost:3001/student", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newStudent),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Redirect to the Student page after successful submission
                navigate("/student");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const getFacultyByProgramStudy = (programStudy) => {
        switch (programStudy) {
            case "Ekonomi":
            case "Manajemen":
            case "Akuntansi":
                return "Fakultas Ekonomi";
            case "Administrasi Publik":
            case "Administrasi Bisnis":
            case "Hubungan Internasional":
                return "Fakultas Ilmu Sosial dan Politik";
            case "Teknik Sipil":
            case "Arsitektur":
                return "Fakultas Teknik";
            case "Matematika":
            case "Fisika":
            case "Informatika":
                return "Fakultas Teknologi Informasi dan Sains";
            default:
                return "";
        }
    };

    return (
        <>
            <Navbar />
            <Box p={4} maxWidth={400} mx="auto">
                <form onSubmit={handleSubmit}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>Full Name:</FormLabel>
                            <Input
                                type="text"
                                value={fullName}
                                onChange={handleFullNameChange}
                                data-testid="name"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Profile Picture:</FormLabel>
                            <Input
                                type="text"
                                value={profilePicture}
                                onChange={handleProfilePictureChange}
                                data-testid="profilePicture"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Address:</FormLabel>
                            <Input
                                type="text"
                                value={address}
                                onChange={handleAddressChange}
                                data-testid="address"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Phone Number:</FormLabel>
                            <Input
                                type="text"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                data-testid="phoneNumber"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Birth Date:</FormLabel>
                            <Input
                                type="text"
                                value={birthDate}
                                onChange={handleBirthDateChange}
                                data-testid="date"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Gender:</FormLabel>
                            <Input
                                type="text"
                                value={gender}
                                onChange={handleGenderChange}
                                data-testid="gender"
                            />
                        </FormControl>
                        <FormControl>
                            <FormLabel>Program Study:</FormLabel>
                            <Input
                                type="text"
                                value={programStudy}
                                onChange={handleProgramStudyChange}
                                data-testid="prody"
                            />
                        </FormControl>
                        <Button type="submit" colorScheme="teal" data-testid="add-btn">
                            Add Student
                        </Button>
                    </Stack>
                </form>
            </Box>
            <Footer />
        </>

    );
};

export default AddStudent;
