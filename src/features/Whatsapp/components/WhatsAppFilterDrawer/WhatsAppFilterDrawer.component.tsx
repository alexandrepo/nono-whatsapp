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
import { useCallback, useEffect, useState } from 'react';
import { useGetWhatsAppYoutubeTagsQuery } from '../../api';
import { changeFilter, whatsAppFilterSelector } from '../../WhatsApp.slice';
import { useDispatch, useSelector } from '@/app/store.hooks';

export const WhatsAppFilterDrawer = () => {
  const [open, setOpen] = useState<boolean>(false); 
  const { data } = useGetWhatsAppYoutubeTagsQuery(); 
  const dispatch = useDispatch()
  const filters:string[] = useSelector(whatsAppFilterSelector) 

  const handleToggle = (value: string) => () => {
    const currentIndex = filters.indexOf(value); 
    const newChecked = [...filters];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    dispatch(
      changeFilter(newChecked)
    ) 
  }; 
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
        {/* <Box px={2}>
          <Typography variant="h6">Categorias</Typography>
        </Box> */}
        <Box px={2}>
          <Typography variant="h6">Tags</Typography>
        </Box>
          <List sx={{ width: '100%' }}>
            {data?.map((item, index) => (
                <ListItem key={item.index} disablePadding onClick={handleToggle(item.index)}>
                  <ListItemButton role={undefined} dense>
                        <Checkbox 
                          disableRipple
                          checked={filters.indexOf(item.index) !== -1}  
                          tabIndex={-1}
                          inputProps={{ 'aria-labelledby': index+item.index }}
                      /> 
                      <ListItemText tabIndex={-1}  id={index+item.index} primary={item.index + ' ('+item.tag_alias+')'} />
                  </ListItemButton>
                </ListItem>
            ))}
          </List>
        {/* <Box px={2}>
          <Typography variant="h6">Idiomas</Typography>
        </Box> */}
      </Drawer>
    </>
  );
};
