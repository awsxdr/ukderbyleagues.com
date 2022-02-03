import { Button, Link, Menu, MenuItem, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import styles from '../styles/Modal.module.css'
import { logos } from './images';

const Distances = ({ open, onClose, teams }) => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState('');
    const [menuAnchor, setMenuAnchor] = useState(undefined);

    const getDistance = (team) => {
        const toRadians = (val) => {
            return val * Math.PI / 180.0;
        };

        const lat1 = team.lat;
        const lon1 = team.lng;
        const lat2 = selectedTeam.lat;
        const lon2 = selectedTeam.lng;

        const r = 6371000; // metres
        const φ1 = toRadians(lat1);
        const φ2 = toRadians(lat2);
        const Δφ = toRadians(lat2 - lat1);
        const Δλ = toRadians(lon2 - lon1);

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const d = r * c;

        return d / 1000.0;
    };

    const sortedTeams = 
        selectedTeam
        ? 
            teams.map(team => { return { 
                distance: getDistance(team).toFixed(1),
                name: team.name, 
                url: team.url, 
                lat: team.lat, 
                lng: team.lng, 
                type: team.type, 
                memberships: team.memberships 
            };})
            .sort((first, second) => first.distance < second.distance ? -1 : 1)
        : teams;

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
                    Distances to teams
                </Typography>
                <Box>
                    <Button onClick={e =>
                    {
                        setMenuAnchor(e.currentTarget);
                        setMenuIsOpen(true);
                    }}>
                        {(selectedTeam && selectedTeam.name) || "(Select team)"}
                    </Button>
                    <Menu anchorEl={menuAnchor} open={menuIsOpen} onClose={() => setMenuIsOpen(false)}>
                        {teams.map(team => (
                            <MenuItem 
                                key={team.name}
                                selected={team.name === selectedTeam.name}
                                onClick={() => {
                                    setSelectedTeam(team);
                                    setMenuIsOpen(false);
                                }}>
                                    {team.name}
                                </MenuItem>
                        ))}
                    </Menu>
                </Box>
                <Box className={styles.scrollContainer}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Membership</TableCell>
                                    <TableCell>Distance (km)</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {sortedTeams.map(team => (
                                    <TableRow key={team.name}>
                                        <TableCell>{team.name}</TableCell>
                                        <TableCell>{getTypeName(team.type)}</TableCell>
                                        <TableCell>
                                            {team.memberships.map(membership => (
                                                <img key={`${team.name}-${membership}`} src={logos[membership]} width="32" height="32" />
                                            ))}                                            
                                        </TableCell>
                                        <TableCell>{selectedTeam && team.distance}</TableCell>
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

export default Distances;