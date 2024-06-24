import { NextApiRequest, NextApiResponse } from "next";

const cheerio = require("cheerio");


export const fetchGoodReads = async () => {
  const user = "55118887-jack-burgess";
  const response = await fetch(`https://www.goodreads.com/user/show/${user}`);
  const $ = cheerio.load(await response.text());

  const bookElements = $('#currentlyReadingReviews .Updates').toArray();


  const books = bookElements.map((element: any) => {
    const title = $(element).find('div.whos-review a.bookTitle').text();
    const author = $(element).find('div.whos-review a.authorName').text();
    const image = $(element).find('div.firstcol img').attr("src").replace("._SX98_.", ".");
    return { title, author, image };
  });


  return books;
};

export default async function scrapeGoodReadsForBook(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const books = await fetchGoodReads();


  return res.status(200).send(books);
}


