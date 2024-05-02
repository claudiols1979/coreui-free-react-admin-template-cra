/* eslint-disable */
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box, Typography } from '@mui/material';

// Dummy data for the support personnel
const supportData = [
    { id: 1, name: 'Claudio Lopez', role: 'SRE/Developer', email: 'claudio.lopez1@equifax.com', phone: '+50688214135' },
    { id: 2, name: 'Kartik', role: 'Project Lead', email: 'kartik@equifax.com', phone: '+0987654321' },    
];

const SupportTable = () => {
    // State to manage the selected support person's info display
    const [selectedId, setSelectedId] = React.useState(null);

    const handleToggle = (id) => {
        // Toggle visibility of contact information
        setSelectedId(selectedId === id ? null : id);
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="support contact table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Role</TableCell>
                        <TableCell>Contact</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {supportData.map((person) => (
                        <React.Fragment key={person.id}>
                            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                                <TableCell component="th" scope="row">{person.name}</TableCell>
                                <TableCell>{person.role}</TableCell>
                                <TableCell>
                                    <Button onClick={() => handleToggle(person.id)} variant="outlined">
                                        {selectedId === person.id ? 'Hide' : 'Show Details'}
                                    </Button>
                                </TableCell>
                            </TableRow>
                            {selectedId === person.id && (
                                <TableRow>
                                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                                        <Box margin={1}>
                                            <Typography variant="h6" gutterBottom component="div">
                                                Contact Information
                                            </Typography>
                                            <Typography variant="body2">Email: {person.email}</Typography>
                                            <Typography variant="body2">Phone: {person.phone}</Typography>
                                        </Box>
                                    </TableCell>
                                </TableRow>
                            )}
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SupportTable;
