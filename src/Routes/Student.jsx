import React, { useEffect, useState } from 'react';
import {
    Box,
    Heading,
    Select,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Student = () => {
    const [students, setStudents] = useState([]);
    const [filteredStudents, setFilteredStudents] = useState([]);
    const [selectedFaculty, setSelectedFaculty] = useState('All');

    useEffect(() => {
        fetchStudents();
    }, []);

    useEffect(() => {
        const filterStudentsByFaculty = () => {
            if (selectedFaculty === 'All') {
                setFilteredStudents(students);
            } else {
                const filtered = students.filter(
                    (student) => student.faculty === selectedFaculty
                );
                setFilteredStudents(filtered);
            }
        };
        filterStudentsByFaculty();
    }, [students, selectedFaculty]);

    const fetchStudents = async () => {
        try {
            const response = await fetch('http://localhost:3001/student');
            const data = await response.json();
            setStudents(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFacultyChange = (event) => {
        setSelectedFaculty(event.target.value);
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:3001/student/${id}`, {
                method: 'DELETE',
            });
            const updatedStudents = students.filter((student) => student.id !== id);
            setStudents(updatedStudents);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="container-student">
                <Navbar />
                <Heading as="h2" size="md" mb={4}>
                    All Students
                </Heading>
                <Select value={selectedFaculty} onChange={handleFacultyChange} data-testid="filter" mb={4}>
                    <option value="All">All</option>
                    <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                    <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
                    <option value="Fakultas Teknik">Fakultas Teknik</option>
                    <option value="Fakultas Teknologi Informasi dan Sains">
                        Fakultas Teknologi Informasi dan Sains
                    </option>
                </Select>

                {filteredStudents.length > 0 ? (
                    <TableContainer>
                        <Table id="table-student">
                            <TableCaption>Student Data</TableCaption>
                            <Thead>
                                <Tr>
                                    <Th>No</Th>
                                    <Th>Full Name</Th>
                                    <Th>Faculty</Th>
                                    <Th>Program Study</Th>
                                    <Th>Option</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {filteredStudents.map((student, index) => (
                                    <Tr key={index} className="student-data-row">
                                        <Td>{index + 1}</Td>
                                        <Td>
                                            <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                                        </Td>
                                        <Td>{student.faculty}</Td>
                                        <Td>{student.programStudy}</Td>
                                        <Td>
                                            <Box
                                                as="button"
                                                data-testid={`delete-${student.id}`}
                                                onClick={() => handleDelete(student.id)}
                                                bg="transparent"
                                                border="none"
                                                cursor="pointer"
                                                textDecoration="underline"
                                            >
                                                Delete
                                            </Box>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                ) : (
                    <p>Loading ...</p>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Student;
