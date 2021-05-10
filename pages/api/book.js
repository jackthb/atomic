const cheerio = require('cheerio');

export const fetchGoodReads = async () => {
  try {
    const user = '55118887-jack-burgess';
    const response = await fetch(`https://www.goodreads.com/user/show/${user}`);
    const $ = cheerio.load(await response.text());
    const title = $(`a[class='bookTitle']`).text();
    const author = $(`a[class='authorName']`).text();
    const image = $(`div.firstcol img`).attr('src').replace('._SX98_.', '.');
    return { data: { title, author, image }, err: null };
  } catch (err) {
    return { data: null, err: err.message };
  }
};

export default async function scrapeGoodReadsForBook(req, res) {
  const { data, err } = await fetchGoodReads();

  if (err) return res.status(400).send({ err });
  return res.status(200).send({ data });
}
