import Layout from '@/components/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'
import {BEER_URL} from '@/config/index'
import success, { Toaster } from 'react-hot-toast';

// import {API_URL} from '@/components/index'


export default function addBeer() {


    const [ beer, setBeer] = useState({

        name:'',
        description:''
    })

    const router = useRouter()

    const notify = () => success('Your Beer is Added BO',{
        style: {
          border: '1px solid black',
          backgroundColor: 'lightgrey'
        },
      });

    const inputChange = (e)=>{
       
        const {name, value}= e.target
        setBeer({...beer,[name]:value})
        

    }

    const submitBeer= async (e)=>{
        e.preventDefault()
      notify()

      const res = await fetch(`${BEER_URL}/beers`,{
          method:'POST',
          headers: {
              'Content-Type':'application/json'
          },
          body: JSON.stringify(beer)
      })
       if(res.ok){
           const data = await res.json()
           router.push(`/beers/${data.slug}`)
       }
    }
    

    return (
        <Layout title='Add Beer'>
        <Toaster/>
        
            <h1>Add Beer</h1>

            <form onSubmit={submitBeer}>
                <label htmlFor="name">Beer Name</label>
                <input 
                type="text" 
                id="name"
                 name="name" 
                 value={beer.name}
                onChange={inputChange}
                required
                />
                <label htmlFor="description">Description</label>
                <input 
                type="text" 
                id="description"
                 name="description" 
                 value={beer.description}
                onChange={inputChange}
                required
                />
                
                <input type="submit" value="add beer" />
            </form>
        </Layout>
    )
}
