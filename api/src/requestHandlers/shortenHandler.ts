import { RequestHandler } from 'express';
import { nanoid } from 'nanoid';
import { IUrlDriver } from '../db/IUrlDriver.js';

type ShortenHandlerResponseBody = { slug: string; error?: never } | { slug?: never; error: string };

export const shortenHandler =
  (urlDriver: IUrlDriver): RequestHandler<object, ShortenHandlerResponseBody, { url: string }> =>
  (req, res) => {
    const url = req.body.url;
    /** Handle possible error: no url provided */

    const existingSlug = urlDriver.retrieveSlug(url);

    if (existingSlug) {
      res.status(200).send({ slug: existingSlug });
      return;
    }

    const slug = nanoid(10);
    const isAdded = urlDriver.addUrl({ url, slug });

    if (isAdded) {
      res.status(200).send({ slug });
    } else {
      res.status(400).send({
        error: 'Shorten operation failed !',
      });
    }
  };
