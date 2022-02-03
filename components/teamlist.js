import { Link, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styles from '../styles/Modal.module.css'
import { logos } from './images'

const TeamList = ({ open, onClose, teams }) => {

    const getTypeName = (type) => {
        switch(type) {
            case 'wftda':
                return 'WFTDA';
              case 'mrda':
                return 'MRDA';
              case 'wftda+mrda':
                return 'All-gender';
              case 'jrda':
                return 'JRDA';
              case 'wftda+jrda':
                return 'WFTDA + JRDA';
              case 'mrda+jrda':
                return 'MRDA + JRDA';
              case 'wftda+mrda+jrda':
                return 'All-gender + JRDA';
              default:
                return '';
              }
    }

    return (
        <Modal 
            open={open}
            onClose={onClose}
        >
            <Box className={styles.modal}>
                <Typography variant="h6" component="h2">
                    Teams list
                </Typography>
                <Box className={styles.scrollContainer}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Membership</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {teams.map(team => (
                                    <TableRow key={team.name}>
                                        <TableCell>{team.name}</TableCell>
                                        <TableCell>{getTypeName(team.type)}</TableCell>
                                        <TableCell>
                                            {team.memberships.map(membership => (
                                                <img key={`${team.name}-${membership}`} src={logos[membership]} width="32" height="32" />
                                            ))}                                            
                                        </TableCell>
                                        <TableCell><Link href={team.url} target="_blank">Website</Link></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Modal>
    )
}

export default TeamList;