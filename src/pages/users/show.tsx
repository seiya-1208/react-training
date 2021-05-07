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

export const UserShowPage: FC = () => {
  const params = useParams<{ userId: string }>()

  const rows = [
    { name: '名前', age: '年齢', fat: '体重' }
  ]

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
    </React.Fragment>
  )
}

