import Head from 'next/head';
import Header from '../components/header';
import Beranda from './user/home';

export default function Home(){
    return(
      <div>
        <Head>
          <title>Home</title>
        </Head>
        <Header/>
        <Beranda/>
      </div>
    ) 
};

