import { WhatsappApi } from '../../Whatsapp.api';
import { parse } from 'papaparse';
import { WhatsAppResult } from './useGetWhatsappMessages.interface';

export const whatsAppEndpoints = WhatsappApi.injectEndpoints({
  endpoints: (builder) => ({
    getWhatsAppData: builder.query<WhatsAppResult[], void>({
      query: () => ({
        responseHandler: 'text',
        url: 'https://alexandrepo.github.io/nono-whatsapp/dataframe-final.csv',
        method: 'GET',
      }),
      transformResponse: (response: string) => {
        const result = (parse(response, { header: true }).data as unknown as WhatsAppResult[])
          .filter((item) => item.ready === 'Yes')
          .map((item) => ({
            ...item,
            listTags:
              item.tags && item.tags.length > 0
                ? item.tags.replaceAll("'", '').replace('[', '').replace(']', '').split(',')
                : [],
          }))
          .reverse();
        return result;
      },
    }),
    getWhatsAppYoutubeTags: builder.query<{ index: string; value: string, tag_alias:string }[], void>({
      query: () => ({
        responseHandler: 'text',
        url: 'https://alexandrepo.github.io/nono-whatsapp/dataframe-tags.csv',
        method: 'GET',
      }),
      transformResponse: (response: string) => {
        const result = parse(response.trim(), { header: true }).data as unknown as {
          index: string;
          value: string;
          tag_alias: string;
        }[];

        return result.slice(0, 15);
      },
    }),
  }),
});

export const { useGetWhatsAppDataQuery, useGetWhatsAppYoutubeTagsQuery } = whatsAppEndpoints;
