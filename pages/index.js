import { useEffect, useRef, useState } from 'react';
import { useScrollIntoView, useDocumentVisibility, useWindowScroll  } from '@mantine/hooks';
import { MantineProvider, AppShell, Header, Image,Grid ,Divider, Box, Text, NavLink, MediaQuery, Burger, Aside, Navbar } from "@mantine/core";
import CarouselLBR from './components/carrousel';
import TopMenu from './components/topMenu';
import TextPage from './content';
import Servicos from './servicos';
import Clientes from './clientes';
import Empresa from './empresa';
import {
  FacebookIcon,
  WhatsappIcon,
  EmailIcon
} from 'next-share';


export default function Home(){

  const [opened, setOpened] = useState(false);

  const { scrollIntoView, targetRef } = useScrollIntoView({onScrollFinish:()=>setTarget(""),offset: 60 });
  const [page, setPage] = useState("home")
  const { voidFunction, voidRef } = useState();
  const [target, setTarget] = useState("home")
  const [scroll, scrollTo] = useWindowScroll();



  useEffect(()=>{

  
    if(scroll.y > 0 && scroll.y < 1125) setPage("home");
    if(scroll.y >= 1125 && scroll.y < 2612) setPage("servicos");
    if(scroll.y >= 2612) setPage("clientes");
    if(scroll.y >= 3000) setPage("empresa");
    

  })
  
useEffect(()=> {if(target != "") scrollIntoView({alignment:'start'})})

  const ScrollTarget = (target)=>{

    setTarget(target)
    setPage(target)

    if(opened) setOpened((o) => !o)

  }

  return(
  
  <MantineProvider
  withGlobalStyles
  withNormalizeCSS
  theme={{
    colorScheme: 'light',
    colors: {
      greenLigth: ['#008B8B', '#00FFFF', '#00CED1' /* ... */],
      headerBar:['#ffffffd4']
    },
  }}
  
  >
  <AppShell
  aside={
    <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
      <Aside p="md" hidden={!opened} hiddenBreakpoint="sm"  >
      <Navbar sx={{backgroundColor:'#000'}}>
      <Navbar.Section>
      <Box sx={{ width: 240, marginLeft:'1em', float:'right'}} >

        <NavLink label="Home" onClick={() => ScrollTarget("home")} sx={{color:'#fff'}} active={page=='home'?true:false} variant={'subtle'}/>
        <NavLink label="Serviços" onClick={() => ScrollTarget("servicos")} active={page=='servicos'?true:false} sx={{color:'#fff'}} variant={'subtle'}/>
        <NavLink label="Clientes"  onClick={() => ScrollTarget("clientes")} active={page=='clientes'?true:false} sx={{color:'#fff'}} variant={'subtle'}/>
        <NavLink label="A Empresa" onClick={() => ScrollTarget("empresa")} active={page=='empresa'?true:false} sx={{color:'#fff'}} variant={'subtle'}/>
  
    </Box>

      </Navbar.Section>
</Navbar>
      </Aside>
    </MediaQuery>
}
  padding="md"
  header={
  <Header style={{backgroundColor:'#000', border:'none'}} height={60} p="xs"> 
<MediaQuery smallerThan="sm" styles={{ display: 'flex',alignItems: 'center', height: '100%', justifyContent: 'space-between' }}>
  <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
  <Image src='https://static.wixstatic.com/media/1c3ccd_a6d156c88a544e31a7c960135305b7a6.png' style={{width:'6em'}}/>
  
  
  <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
<Burger
  opened={opened}
  onClick={() => setOpened((o) => !o)}
  size="sm"
  color={'#fff'}
  mr="xl"
    />
</MediaQuery>


<MediaQuery smallerThan={'sm'} styles={{display:'none'}}>
<div hidden={opened}>
<TopMenu ScrollTarget = {ScrollTarget} page={page}/>
</div>
</MediaQuery>
  </div>
</MediaQuery>
  </Header>}



  styles={(theme) => ({
    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.greenLigth[0] },
  })}
>
<CarouselLBR ref = {target == "home"?targetRef:voidRef}/>

<Text weight={'bold'} size='lg' align='center' mt='100px' color={'#ffffffa1'} >VEJA TUDO QUE A LBR É CAPAZ DE OFERECER</Text>
<Divider size="xs" />
<TextPage/> 
<Text weight={'bold'} size='lg' align='center' mt='100px' color={'#ffffffa1'} ref = {target == "servicos"?targetRef:voidRef} >NOSSOS SERVIÇOS</Text>
<Divider size="xs" />
<Servicos />
<Text weight={'bold'} size='lg' align='center' mt='100px' color={'#ffffffa1'} ref = {target == "clientes"?targetRef:voidRef} >CLIENTES</Text>
<Divider size="xs" />
<Clientes/>
<Text weight={'bold'} size='lg' align='center' mt='100px' color={'#ffffffa1'} ref = {target == "empresa"?targetRef:voidRef} >SOBRE A EMPRESA</Text>
<Divider size="xs" />
<Empresa style={{height:'100vh'}}/>

<Divider size="xs" />
<footer style={{widht:'100%'}}>
<Grid columns={3}>
<Grid.Col span ={1}>
<Text weight={'light'} size='lg' color={'#ffffffa1'} >Redes</Text>
<FacebookIcon size={50}></FacebookIcon>
</Grid.Col>
<Grid.Col span ={1}>
<Text weight={'light'} size='lg' color={'#ffffffa1'} >Contatos</Text>
<Text color={'#fff'}>24 98825-1622</Text> 
<Text color={'#fff'}>24 98801-1608</Text>

</Grid.Col>
<Grid.Col span={1}>
<Text weight={'light'} size='lg' color={'#ffffffa1'} >Fale Conosco</Text>
<WhatsappIcon size={50} style={{marginRight:'10px'}}></WhatsappIcon>
<EmailIcon size={50}/>

</Grid.Col>
</Grid>
</footer>
</AppShell>

</MantineProvider>
  )


}