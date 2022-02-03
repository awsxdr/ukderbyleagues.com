import { Card, CardContent, Link, Typography } from '@mui/material'

const LeagueInfo = ({leagueName, leagueType, leagueUrl}) => {

    const getTeamDescription = (teamType) => {
      switch(teamType) {
        case 'wftda':
          return { name: 'WFTDA', policies: [ 'wftda' ] };
        case 'mrda':
          return { name: 'MRDA', policies: [ 'mrda' ] };
        case 'wftda+mrda':
          return { name: 'All-gender', policies: [ 'wftda', 'mrda' ] };
        case 'jrda':
          return { name: 'JRDA', policies: [] };
        case 'wftda+jrda':
          return { name: 'WFTDA + JRDA', policies: [ 'wftda' ] };
        case 'mrda+jrda':
          return { name: 'MRDA + JRDA', policies: [ 'mrda' ] };
        case 'wftda+mrda+jrda':
          return { name: 'All-gender + JRDA', policies: [ 'wftda', 'mrda' ] };
        default:
          return { name: '', policies: [] };
      }
    }

    const policyDetails = {
      wftda: { name: 'WFTDA', url: 'https://resources.wftda.org/womens-flat-track-derby-association-statement-about-gender/' },
      mrda: { name: 'MRDA', url: 'https://mrda.org/resources/mrda-non-discrimination-policy/' },
    }

    const { name, policies } = getTeamDescription(leagueType);

    return (
        <Card>
          <CardContent>
            <Typography variant="h5">
              {leagueName}
            </Typography>
            <Typography variant="body2">
              {name} {policies.map(policyName => policyDetails[policyName]).map(policy => <Link key={policy} sx={{ fontSize: '.8em', marginRight: '.5em' }} href={policy.url} target="_blank">Gender policy{policies.length > 1 && `(${policy.name})`}</Link>)}
            </Typography>
            <Link href={leagueUrl} target="_blank">
              {leagueUrl}
            </Link>
          </CardContent>
        </Card>
  )
};

export default LeagueInfo;