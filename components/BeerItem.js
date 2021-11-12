import Link from 'next/link'

const BeerList =({beer}) =>{

console.log(beer.slug)


   
    return (
        <div>
            <h1>{beer.name}</h1>
            <p>{beer.description}</p>
            <Link href={`/beers/${beer.slug}`} >
                 <a>Details</a>
            </Link>
           

    
        </div>
    
    )


}


export default BeerList