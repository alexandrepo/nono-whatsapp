import { WhatsAppResult } from '../../api';

export interface WhatsAppListProps {
  data?: WhatsAppResult[];
  handleClick: (video: WhatsAppResult) => void;
}
