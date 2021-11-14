import {BEER_URL} from '@/config/index'
import Layout from '@/components/Layout'
import BeerItem from '@/components/BeerItem'
import styles from '@/styles/Home.module.scss'

export default function HomePage( {beers}) {


  /*
  
  Commented out section is used as an example to show how we could add beer locally using next api routes 
  

  const [values, setValues] = useState({
    name: '',
    description: '',
   
  })

  const initialState = {
    name: '',
    description: '',  
  };
   
  
  const clearState = () => {
    setValues({...initialState})
  };



  const handleSubmit = async (e) => {
    e.preventDefault()
   
     const newBeer = beers.push(values)
      
    setValues(newBeer)
    setValues({...values,name:"",description:""})
    clearState()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }
  

  } */




 


  return (
    <Layout>
    <div className={styles.homepage}>
        <h1>BeerMe Up</h1>
        {beers.length === 0 && <h1>No, beers to show! Start adding beers</h1>}
        <p className={styles.homepage__text}>Here you will find {beers.length} best beers in Copenhagen</p>
       <div className={styles.beeritem_wrapper}>
        {beers.map((beer)=>(
          <BeerItem key={beer.id} beer={beer} />
        ))}
        </div>
    </div>
    </Layout>
  )
}


// fatching beer data from our api route with ServerSide props, 
// it is due to dynamic data that is being added to the site
//due to rendering on server for SEO crawlers 

export const getStaticProps = async () => {
  const res = await fetch(`${BEER_URL}/beers`)
  const beers = await res.json()

  return {
    props: 
      {beers},
      revalidate: 1,
    
  }
}
