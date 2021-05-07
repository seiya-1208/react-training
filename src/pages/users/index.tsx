import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { TableHead } from '@material-ui/core';

export const UserIndexPage: FC = () => {
  return (
    <React.Fragment>
      <div>UserIndex</div>
      <Link to="/users/1">ユーザーA</Link>
      <Paper className='クラスネーム'>
        <TableContainer className=''>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>見出し</TableCell>
                <TableCell>見出し2</TableCell>
                <TableCell>見出し3</TableCell>
                <TableCell>見出し4</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  テスト
              </TableCell>
                <TableCell>
                  テスト2
              </TableCell>
                <TableCell>
                  テスト3
              </TableCell>
                <TableCell>
                  テスト4
              </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </React.Fragment>
  )
}