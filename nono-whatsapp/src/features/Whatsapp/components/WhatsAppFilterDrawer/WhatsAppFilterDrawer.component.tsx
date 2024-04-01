import { Close, List as ListIcon, Comment as CommentIcon } from '@mui/icons-material';
import {
  Box,
  Button,
  Drawer,
  IconButton,
  Typography,
  List,
  ListItem,
  Checkbox,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid,
  FormGroup,
  FormControlLabel,
} from '@mui/material';
import { useState } from 'react';
import { useGetWhatsAppYoutubeTagsQuery } from '../../api';

export const WhatsAppFilterDrawer = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { data } = useGetWhatsAppYoutubeTagsQuery();
  console.log(data);
  return (
    <>
      <Box
        position="fixed"
        left="50%"
        zIndex={1}
        bottom="20px"
        sx={{ transform: 'translate(-50%)' }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{ borderRadius: '50px' }}
          color="secondary"
          startIcon={<ListIcon />}
          onClick={() => {
            setOpen(true);
          }}
        >
          Filtrar
        </Button>
      </Box>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        variant="temporary"
        PaperProps={{
          sx: { width: '100%', maxWidth: '400px', overflowX: 'hidden' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 1,
            paddingX: 2,
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="subtitle2">Filtros</Typography>
          <IconButton
            onClick={() => {
              setOpen(false);
            }}
          >
            <Close />
          </IconButton>
        </Box>
        <Box px={2}>
          <Typography variant="h6">Tags</Typography>
        </Box>
        <List sx={{ width: '100%' }}>
          <Grid container>
            {data?.map((item) => (
              <Grid item  key={item.index} xs={6}>
                <ListItem disablePadding>
                  <ListItemButton role={undefined} dense>
                    <FormControlLabel control={<Checkbox  />} label={item.index}  />
                  </ListItemButton>
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </List>
      </Drawer>
    </>
  );
};
