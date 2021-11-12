import {BEER_URL} from '@/config/index'
import Layout from '@/components/Layout'
import BeerItem from '@/components/BeerItem'
import { useState } from 'react'

export default function HomePage( {beers}) {


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
  

  }


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <div>
      <Layout>
        <h1>This is home Page about beers</h1>
        {beers.map((beer)=>(
          <BeerItem key={beer.id} beer={beer} />
        ))}
          
          <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor='name'>Event Name</label>
            <input
              type='text'
              id='name'
              name='name'
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor='description'>Performers</label>
            <input
              type='text'
              name='description'
              id='description'
              value={values.description}
              onChange={handleInputChange}
            />
          </div>
          <input type='submit' value='Add Event' className='btn' />
          </form>
       
      </Layout>
    </div>
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
