import { RequestHandler } from 'express';
import { IUrlDriver } from '../db/IUrlDriver';

type QueryParams = { slug: string };

export const slugHandler =
  (urlDriver: IUrlDriver): RequestHandler<QueryParams> =>
  (req, res) => {
    const slug = req.params.slug;

    const url = urlDriver.retrieveUrl(slug);

    if (!url) {
      return res.status(404).send('NOT FOUND');
    }

    return res.status(301).redirect(url);
  };
