import { Card, CardContent, Link, Typography } from '@mui/material'

const LeagueInfo = ({leagueName, leagueType, leagueUrl}) => {

    const getTeamDescription = (teamType) => {
      switch(teamType) {
        case 'wftda':
          return { name: 'WFTDA', policy: '' };
        case 'mrda':
          return { name: 'MRDA', policy: '' };
        case 'wftda+mrda':
          return { name: 'All-gender', policy: '' };
        case 'jrda':
          return { name: 'JRDA', policy: '' };
        case 'wftda+jrda':
          return { name: 'WFTDA + JRDA', policy: '' };
        case 'mrda+jrda':
          return { name: 'MRDA + JRDA', policy: '' };
        case 'wftda+mrda+jrda':
          return { name: 'All-gender + JRDA', policy: '' };
        default:
          return { name: '', policy: '' };
      }
    }

    const { name, policy } = getTeamDescription(leagueType);

    if(!league) {
      return (<div></div>);
    }

    return (
        <Card>
          <CardContent>
            <Typography variant="h5">
              {leagueName}
            </Typography>
            <Typography variant="body2">
              {name} <Link href={policy} />
            </Typography>
            <Link href={leagueUrl}>
              {leagueUrl}
            </Link>
          </CardContent>
        </Card>
  )
};

export default LeagueInfo;