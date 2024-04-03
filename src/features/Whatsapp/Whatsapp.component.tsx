import { Box } from '@mui/material';
import { useGetWhatsAppDataQuery } from './api/endpoints';
import { useCallback, useState } from 'react';
import { WhatsAppResult } from './api/endpoints';
import { WhatsAppDetailsDrawer, WhatsAppFilterDrawer, WhatsAppListLoader } from './components';
import WhatsAppList from './components/WhatsAppList/WhatsAppList.component';

export const Whatsapp = () => {
  const { data, isLoading, isFetching } = useGetWhatsAppDataQuery();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<WhatsAppResult | null>(null);
  const handleClick = useCallback(
    (video: WhatsAppResult) => {
      setOpen(true);
      setSelected(video);
    },
    [setOpen, setSelected]
  );
  if (isLoading || isFetching) return <WhatsAppListLoader />;
  return (
    <>
      <WhatsAppDetailsDrawer selected={selected} setOpen={setOpen} open={open} />
      <WhatsAppFilterDrawer />
      <WhatsAppList handleClick={handleClick} data={data} />
    </>
  );
};
