import Head from 'next/head';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Typing from '../components/typing';
import Link from 'next/link';
import  ComputerInception3D from '../components/computerInception3'
export default function Home() {
  return (
    <>
      <Head>
        <title>WebGL-Practice</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Parallax
          pages={3}
          // style={{
          //   backgroundImage: `url(/assets/DALLE.png)`,
          //   backgroundSize: 'cover',
          // }}
      >

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
        >
          <div style={{display: 'flex', flexDirection: 'column', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
            <Typing text={["Scroll down...", "but not to fast."]} cssName={'name'} />
            <Typing text={["안녕하십니까 저는 오원준입니다."]} cssName={'subtitle'} />
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2.5}
          speed={3}
          factor={2}
        >
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'end', width: '100vw', justifyContent: 'end',height:"30px",borderRaidus:"9px"}}>
            <Link href={'/computer'}><button className='btn'>computer</button></Link>
            <Link href={'/skybox'}><button className='btn'>skybox</button></Link>
            <Link href={'/template'}><button className='btn'>template</button></Link>
            <Link href={'/shinyball'}><button className='btn'>shiny ball</button></Link>
            <Link href={'/physicsExample'}><button className='btn'>physics example</button></Link>
            <Link href={'/morph'}><button className='btn'>wavyboi</button></Link>
            <Link href={'/screen'}><button className='btn'>floating youtube vid</button></Link>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start: 0, end: 1.1}}
        >
          <img src='/assets/cat.gif' className='stickyCat'/>
        </ParallaxLayer>
      </Parallax>

    </>
  );
}