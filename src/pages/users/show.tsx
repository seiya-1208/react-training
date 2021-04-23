import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export const UserShowPage: FC = () => {
  const params = useParams<{ userId:string }>()

  return (
    <React.Fragment>
      <div>{ `UserShow: ${params.userId}` }</div>
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
    </React.Fragment>
  )
}