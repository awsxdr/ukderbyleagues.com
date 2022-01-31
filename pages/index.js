import Head from 'next/head'
import styles from '../styles/Home.module.css'
import leagues from '../data/leagues.json'
import { AppBar, Box, IconButton, Link, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import Map from '../components/map'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roller Derby Leagues UK</title>
        <meta name="description" content="Find local roller derby teams in the UK using our comprehensive list of active leagues" />
        <meta name="keywords" content={['roller derby', 'roller skates', 'skating', 'teams', 'leagues', 'UK', 'England', 'Scotland', 'Northern Ireland', 'Wales', 'roller derby leagues', 'roller derby teams', 'derby leagues', 'derby teams', 'UKRDA', 'WFTDA', 'MRDA', ...leagues.map(l => l.Name)]} />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
        <meta property="og:image" content="http://rollerderbyleagues.co.uk/images/thumbnail.png" />
        <meta property="og:url" content="http://rollerderbyleagues.co.uk" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Roller Derby Leagues UK" />
        <meta property="og:description" content="Find local roller derby teams in the UK using our comprehensive list of active leagues" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <main className={styles.main}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton size="large" edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar> 
        <Map leagues={leagues} />
        <AppBar position="fixed" className={styles.footer} sx={{ top: 'auto', bottom: 0}}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Copyright © {new Date().getFullYear()} Daniel Errington. Please e-mail <Link href="mailto:contact@rollerderbyleagues.co.uk">contact@rollerderbyleagues.co.uk</Link> with any queries.
            </Typography>
            <Box>
              <IconButton>
                <Link href="https://github.com/awsxdr/rollerderbyleagues.co.uk" target="_new">
                  <img className={styles.githublogo} src="img/GitHub_Logo.png" />
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