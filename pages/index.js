import React, { useState } from 'react'
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import leagues from '../data/leagues.json';
import { AppBar, Box, Button, Container, IconButton, Link, Toolbar, Typography } from '@mui/material';
import Map from '../components/map';
import AboutModal from '../components/about';
import TeamList from '../components/teamlist';
import Distances from '../components/distances';
import { githubLogo } from '../components/images';

const Home = () => {

  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isTeamListModalOpen, setIsTeamListModalOpen] = useState(false);
  const [isDistancesModalOpen, setIsDistancesModalOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>UK Roller Derby Leagues</title>
        <meta name="description" content="Find local roller derby teams in the UK using our comprehensive list of active leagues" />
        <meta name="keywords" content={['roller derby', 'roller skates', 'skating', 'teams', 'leagues', 'UK', 'England', 'Scotland', 'Northern Ireland', 'Wales', 'roller derby leagues', 'roller derby teams', 'derby leagues', 'derby teams', 'UKRDA', 'WFTDA', 'MRDA', ...leagues.map(l => l.Name)]} />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <meta property="og:image" content="http://ukderbyleagues.com/images/thumbnail.png" />
        <meta property="og:url" content="http://ukderbyleagues.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="UK Roller Derby Leagues" />
        <meta property="og:description" content="Find local roller derby teams in the UK using our comprehensive list of active leagues" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <main className={styles.main}>
        <AppBar position="fixed">
          <Toolbar className={styles.toolbar}>
            {/* <IconButton size="large" edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Typography variant="h6" noWrap component="div" className={styles.sitename}>
              UK Roller Derby Leagues
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
              <Button onClick={() => setIsAboutModalOpen(true)} className={styles.toolbarButton}>About</Button>
              <Button onClick={() => setIsTeamListModalOpen(true)} className={styles.toolbarButton}>Teams</Button>
              <Button onClick={() => setIsDistancesModalOpen(true)} className={styles.toolbarButton}>Distance calculator</Button>
            </Box>
          </Toolbar>
        </AppBar> 
        <AboutModal open={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
        <TeamList teams={leagues} open={isTeamListModalOpen} onClose={() => setIsTeamListModalOpen(false)} />
        <Distances teams={leagues} open={isDistancesModalOpen} onClose={() => setIsDistancesModalOpen(false)} />
        <Map leagues={leagues} />
        <AppBar position="fixed" className={styles.footer} sx={{ top: 'auto', bottom: 0}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Copyright © {new Date().getFullYear()} Daniel Errington. Please e-mail <Link href="mailto:contact@ukderbyleagues.com">contact@ukderbyleagues.com</Link> with any queries.
            </Typography>
            <Box>
              <IconButton>
                <Link href="https://github.com/awsxdr/ukderbyleagues.com" target="_new">
                  <img className={styles.githublogo} src={githubLogo} />
                </Link>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </main>
    </div>
  )
};

export default Home;