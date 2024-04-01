import { ChevronLeft, Close } from '@mui/icons-material';
import { Box, Chip, Drawer, IconButton, Typography } from '@mui/material';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import { WhatsAppDetailsDrawerProps } from './WhatsAppDetailsDrawer.interface';
import { FunctionComponent } from 'react';

export const WhatsAppDetailsDrawer: FunctionComponent<WhatsAppDetailsDrawerProps> = ({
  open = false,
  setOpen,
  selected,
}) => {
  return (
    <Drawer
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      variant="temporary"
      PaperProps={{
        sx: { width: '100%', maxWidth: '600px', overflowX: 'hidden' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 1,
          paddingLeft: 2,
          paddingRight: 2,
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="subtitle2">{selected?.channelTitle}</Typography>
        <IconButton
          onClick={() => {
            setOpen(false);
          }}
        >
          <Close />
        </IconButton>
      </Box>
      <LiteYouTubeEmbed id={selected?.youtube_id || ''} title={selected?.title || ''} />
      <Box py={1} px={2}>
        <Typography variant="h6" fontWeight="bold">
          {selected?.title}
        </Typography>
      </Box>
      <Box py={1} px={2}>
        <Typography variant="body1">
          {selected?.description.split('\n').map((item, key) => {
            return (
              <span key={key}>
                {item}
                <br />
              </span>
            );
          })}
        </Typography>
      </Box>
      <Box py={1} px={2}>
        {selected?.listTags &&
          selected?.listTags?.map((item: string, index: number) => (
            <Chip key={`${item}`} label={item} sx={{ marginRight: 0.5, marginBottom: 0.5 }} />
          ))}
      </Box>
    </Drawer>
  );
};
