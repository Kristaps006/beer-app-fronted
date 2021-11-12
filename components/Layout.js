import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'



export default function Layout({title, keywords, children}) {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
            </Head>
            <Header/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}


Layout.defaultProps = {

    title: 'BeerMe Up Copenhaghen',
    keywords : 'buy beer cheap near you'

}