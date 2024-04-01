import { FunctionComponent, memo, useCallback, useState } from 'react';
import { WhatsAppListProps } from './WhatsAppList.interface';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import { WhatsAppResult } from '../../api';
const WhatsAppList: FunctionComponent<WhatsAppListProps> = ({ data, handleClick }) => {
  const [page, setPage] = useState(0);
  const click = useCallback(
    (video: WhatsAppResult) => {
      handleClick(video);
    },
    [handleClick]
  );
  console.log('WhatsAppList');
  return (
    <>
      <Grid container alignItems="stretch" justifyContent="center" gap={1}>
        {data ? (
          data.slice(0, page * 30 + 30).map((video, index) => (
            <Grid item xs={11} sm={5.6} md={5.6} lg={3} xl={2.5} key={video.youtube_id + index}>
              <Box height="100%" width="100%" display="flex">
                <CardActionArea>
                  <Card sx={{ height: '100%', width: '100%' }} onClick={() => click(video)}>
                    {video.thumbnail_medium.length > 0 && (
                      <CardMedia
                        sx={{ height: 200 }}
                        image={video.thumbnail_medium}
                        title={video.title}
                      />
                    )}
                    <CardContent>
                      <Box>
                        <Box>
                          <Typography variant="caption">{video?.channelTitle}</Typography>
                        </Box>
                        <Typography variant="subtitle2">{video.title}</Typography>
                      </Box>
                      <Box mt={1}>
                        {video.listTags &&
                          video.listTags
                            .slice(0, 5)
                            ?.map((item: string, index: number) => (
                              <Chip
                                key={`${item}`}
                                label={item}
                                size="small"
                                sx={{ marginRight: 0.5, marginBottom: 0.5 }}
                              />
                            ))}
                        {video.listTags && video.listTags.length > 5 ? (
                          <Chip
                            label={`+ ${video.listTags.length - 5}`}
                            size="small"
                            sx={{ marginRight: 0.5, marginBottom: 0.5 }}
                          />
                        ) : (
                          <></>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </CardActionArea>
              </Box>
            </Grid>
          ))
        ) : (
          <></>
        )}
      </Grid>
      <Box display="flex" alignItems="center" justifyContent="center" mt={4} mb={26}>
        <Button
          variant="contained"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Carregar mais
        </Button>
      </Box>
    </>
  );
};
export default memo(WhatsAppList);
