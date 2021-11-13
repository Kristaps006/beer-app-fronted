import Layout from '@/components/Layout'
import { useState } from 'react'
import { useRouter } from 'next/router'
import {BEER_URL} from '@/config/index'
import success, { Toaster } from 'react-hot-toast';
import styles from '@/styles/Add.module.scss'



export default function addBeer({beers}) {


    const [ beer, setBeer] = useState({

        name:'',
        description:'',
        type:''
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
        <div className={styles.add__container}>
            <h1 className={styles.fav_beer}>Add your favorite beer</h1>
            <form className={styles.beer_form} onSubmit={submitBeer}>
                <div className={styles.name}>
                    <label htmlFor="name">Beer Name</label>
                    <input 
                    type="text" 
                    id="name"
                    name="name" 
                    value={beer.name}
                    onChange={inputChange}
                    required
                    />
                </div>
               <div className={styles.desc}> 
                    <label htmlFor="description">Description</label>
                    <textarea
                    type="text" 
                    id="description"
                    name="description" 
                    value={beer.description}
                    onChange={inputChange}
                    required
                    />
               </div> 
                <div className={styles.type}>
                    <label htmlFor="type">Beer Type</label>
                    <input 
                    type="text" 
                    id="type"
                    name="type" 
                    value={beer.type}
                    onChange={inputChange}
                    required
                    />
                </div>
                <input  className={styles.btn} type="submit" value="add beer" />
            </form>
            
        </div>
        </Layout>
    )
}





  