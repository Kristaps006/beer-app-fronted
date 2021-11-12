import  {beers}  from './data.json'

export default function handler(req, res) {

  const beerSlug = beers.filter(beer => beer.slug === req.query.slug)

  res.status(200).json(beerSlug)
}