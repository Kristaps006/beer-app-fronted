
import Link from 'next/link'

export default function NotFound() {
    return (
        <div>
            <p>Ups....Bo, Apperantly you hit the wall</p> 
            <p>Please, go Back</p>
            <Link href="/">
                 <button>Back</button>
            </Link>
            
        </div>
    )
}
