import { NextApiRequest, NextApiResponse } from "next";

const cheerio = require("cheerio");

export const fetchGoodReads = async () => {
  const user = "55118887-jack-burgess";
  const response = await fetch(`https://www.goodreads.com/user/show/${user}`);
  const $ = cheerio.load(await response.text());
  const title = $(`a[class='bookTitle']`).text();
  const author = $(`a[class='authorName']`).text();
  const image = $(`div.firstcol img`).attr("src").replace("._SX98_.", ".");
  return { title, author, image };
};

export default async function scrapeGoodReadsForBook(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { title, author, image } = await fetchGoodReads();

  return res.status(200).send({ title, author, image });
}
