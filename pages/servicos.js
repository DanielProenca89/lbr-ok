import {Box, Grid, Text, Image } from '@mantine/core';


export default function Servicos(){


    return (
        
<Grid justify={'center'} mt={10}>

    <Grid.Col  md={6} lg={3}>
    <Box style={{backdropFilter:'blur(10px)', backgroundImage:'linear-gradient(341deg, #1c1446d6, transparent)', borderRadius:'1em', height:'100%'}} p="md" >
        <Text align='center' weight={500} size={'xl'} color={'#fff'}>CFTV E ALARMES</Text>
      <Image
        height={300}
        radius="md"
        src="https://static.wixstatic.com/media/1c3ccd_928facba6543420bb9e959e4384a08c7.jpg/v1/fill/w_285,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1c3ccd_928facba6543420bb9e959e4384a08c7.jpg"
        
       
        
/>
<p style={{color:'white', fontSize:'13px'}}>
Oferecemos soluções adequadas à sua necessidade. Câmeras analógicas de alta resolução, 
câmeras HD com cabeamento analógico, câmeras IP de altíssima resolução. Para cada necessidade
temos a solução, alinhando funcionalidade ao custo.
        </p>
        </Box>
</Grid.Col >
<Grid.Col  md={6} lg={3}>
<Box style={{backdropFilter:'blur(10px)', backgroundImage:'linear-gradient(341deg, #9f009a, #0000001f)', borderRadius:'1em', height:'100%'}} p="md">
<Text align='center' weight={500} size={'xl'} color={'#fff'}>INFRAESTRUTURA LÓGICA</Text>
      <Image
        height={300}
        radius="md"
        src="https://th.bing.com/th/id/R.753021c94d3a86154dd5c25372dd6db8?rik=G3bR1DRK2%2f%2b%2bGg&riu=http%3a%2f%2fwww.gs.xinhuanet.com%2fzhuanti%2f2018-05%2f10%2f1122814195_15259451453221n.jpg&ehk=3c2jsD8laUS1FmCBILMUTMFfH0U4ToFxvNxNQNx4KZc%3d&risl=&pid=ImgRaw&r=0"
        
       
        
/>
<p style={{color:'white', fontSize:'13px'}}>
O cabeamento de rede
projetado e instalado da maneira correta, garante disponibilidade total dos serviços e
aumenta a segurança das informações, além de reduzir o custo da sua empresa com suporte e emergências.
        </p>
</Box>

</Grid.Col>

<Grid.Col  md={6} lg={3}>
<Box style={{backdropFilter:'blur(1px)',backgroundImage:'linear-gradient(341deg, black, #0000002b)', borderRadius:'1em'}} p="md" >
<Text align='center'  weight={500} size={'xl'} color={'#fff'}>ACESSO BIOMÉTRICO</Text>
      <Image
        height={300}
        radius="md"
        src="https://th.bing.com/th/id/R.f87bd053098353dcdc3c49ea88a2c6b1?rik=cfJeSkQW4jMIlg&riu=http%3a%2f%2fureadthis.com%2fwp-content%2fuploads%2f2020%2f02%2fPublic-School-Security-System.jpg&ehk=I8RAJsAUB7fFxHO0Atjldov9Es8sz%2bWQiiQac2YWqnQ%3d&risl=&pid=ImgRaw&r=0"
        
       
        
/>
<p style={{color:'white', fontSize:'13px'}}>
    

Combinando segurança e tecnologia, controle e garanta que somente pessoas autorizadas tenham acesso à areas importantes da

empresa. Temos soluções biométricas com reconhecimento de digital,

reconhecimento facial e por voz. Tudo integrado à sua central de segurança, com

relatórios inteligentes.
</p>
</Box>
</Grid.Col>
</Grid>

    )


}