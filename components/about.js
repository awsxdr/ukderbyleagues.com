import { Link, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import styles from '../styles/Modal.module.css'

const AboutModal = ({ open, onClose }) => {

    return (
        <Modal 
            open={open}
            onClose={onClose}
        >
            <Box className={styles.modal}>
                <Typography variant="h6" component="h2">
                    About UKDerbyLeagues
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Welcome to UKDerbyLeagues.com!
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    Our aim is to list all active flat-track, WFTDA rules roller derby leagues in the UK and show where they train or play to make it easier to find teams near you to join or play against.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    The list has been compiled and refined over several years and we believe it to be a fairly accurate picture of roller derby in the UK. However, if you notice any discrepancies or would like to bring a new league to our attention, please e-mail <Link href="mailto:contact@ukderbyleagues.com">contact@ukderbyleagues.com</Link> with the details.
                </Typography>
                <Typography sx={{ mt: 2 }}>
                    The list is licensed under the <Link href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL General Public License v3</Link>.
                </Typography>
            </Box>
        </Modal>
    )
}

export default AboutModal;