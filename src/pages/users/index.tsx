import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';


export const UserIndexPage: FC = () => {
  const params = useParams<{ userId: string }>()

  const rows = [
    { name: '名前', age: '年齢', fat: '体重' }
  ]

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setChecked(event.target.checked);
  };

  return (
    <React.Fragment>
      <div>{`UserShow: ${params.userId}`}</div>
      <div><Link to="/users">ユーザー一覧</Link></div>
      <div><Link to="/">トップ</Link></div>

      <Box m={10} p={10}>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              せいや
        </Typography>
            <Typography variant="h5" component="h2">
              男
        </Typography>
            <Typography color="textSecondary">
              松原
        </Typography>
            <Typography variant="body2" component="p">
              テスト
        </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box m={5} p={5} >
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              コピー
        </Typography>
            <Typography variant="h5" component="h2">
              した
        </Typography>
            <Typography color="textSecondary">
              だけ
        </Typography>
            <Typography variant="body2" component="p">
              スタイルテスト
        </Typography>
          </CardContent>
        </Card>
      </Box>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={"あいうえお"}>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
      </Button>
        <Button variant="contained" color="secondary">
          Secondary
      </Button>
        <Button variant="contained" disabled>
          Disabled
      </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
      </Button>
      </div>

      <div>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
        <Checkbox
          defaultChecked
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
        <Checkbox disabled inputProps={{ 'aria-label': 'disabled checkbox' }} />
        <Checkbox disabled checked inputProps={{ 'aria-label': 'disabled checked checkbox' }} />
        <Checkbox
          defaultChecked
          indeterminate
          inputProps={{ 'aria-label': 'indeterminate checkbox' }}
        />
        <Checkbox
          defaultChecked
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        <Checkbox
          defaultChecked
          size="small"
          inputProps={{ 'aria-label': 'checkbox with small size' }}
        />
      </div>
    </React.Fragment>
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();
}

