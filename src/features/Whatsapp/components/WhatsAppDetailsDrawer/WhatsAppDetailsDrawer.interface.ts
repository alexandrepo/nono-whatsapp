import { WhatsAppResult } from '../../api/endpoints/useGetWhatsappMessages/useGetWhatsappMessages.interface';

export interface WhatsAppDetailsDrawerProps {
  open?: boolean;
  setOpen: (value: boolean) => void;
  selected: WhatsAppResult | null;
}
