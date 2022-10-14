import {Box, Grid, Text, Image, Button, Badge } from '@mantine/core';
import { createStyles } from '@mantine/core';



export default function Clientes(){

    const useStyles = createStyles((theme, _params) => ({
   


        blurBannerBuss:{
      
            position:'absolute', 
            zIndex:'1',
            bottom:0, 
            width:'100%', 
            height:'55px',
            backdropFilter:'blur(10px)', 
            backgroundImage:'linear-gradient(1deg, #0000006e, transparent)', 
            color:'white' ,
            textAlign:'center', 
            paddingTop:'8px', 
            fontWeight:'500',
            transition: 'height 0.7s',
            [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
                height:'70px'
              },
      
              '&:hover':{
      
                height:'100%',
                backgroundImage:'linear-gradient(1deg, #000000db, #0000002b)'
           
               
              },
              '.texto':{
                
                opacity:0,
                transition:'opacity 0.5s linear'
              },
              '&:hover .texto':{
                
                opacity:1
           
               
              },
         
        },

      
      
      }));


      const {classes} = useStyles()

    return(

        <>

<p style={{color:'white', fontSize:'17px', marginBottom:'2em',textAlign:'center'}}>
Conheça alguns dos parceiros que acreditam no nosso modelo de negócios. </p>
<Grid  justify={'center'} mt={10} style={{backgroundColor:'#00000059'}}>


<Grid.Col   md={6} lg={3} >
<Box sx={{backgroundColor:'#ffffffa6', backdropFilter:'blur(5px)', height:'100%', width:'100%'}}>
    <div style={{position:'absolute', zIndex:'1'}}>
    <Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>CFTV</Badge>
    <Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Alarme</Badge>
    <Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Catraca</Badge>
    </div>
<img


style={{objectFit:'scale-down', backgroundColor:'#fff', height:'50vh', width:'100%' }}
src="https://www.gpssa.com.br/wp-content/uploads/2020/05/logo_gps.png"
/>
<div className={classes.blurBannerBuss} style={{backgroundColor:'#868d884f'}}><Text weight={'bold'} color={'midnightblue'}>Grupo GPS</Text><Text size={'sm'} variant='link' color={'white'}>Ver mais...</Text>
<text className='texto'>Infraestrutura para instalação de CFTV, catracas de pedestre e alarmes em diversos clientes do grupo.</text>
</div>
</Box>


</Grid.Col>


<Grid.Col  md={6} lg={3}>

<Box sx={{backgroundColor:'#ffffffa6', backdropFilter:'blur(5px)',  height:'50vh', width:'100%'}}>
<div style={{position:'absolute', zIndex:'1'}}>
  
    <Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'purple', to: 'cyan', deg: 105 }}>Fibra Óptica</Badge>
    </div>
<img


style={{objectFit:'scale-down', backgroundColor:'#fff', height:'100%', width:'100%'}}
src="https://mv1.com.br/wp-content/uploads/2021/07/logo_mv1-100px.png"

/>
<div className={classes.blurBannerBuss} style={{backgroundColor:'#868d884f'}}><Text weight={'bold'} color={'midnightblue'}>Rede MV1</Text> <Text size={'sm'} variant='link' color={'white'}>Ver mais...</Text>
<text className='texto'>Reparo e modernização de link de fibra ótica.</text>
</div>
</Box>


</Grid.Col>

<Grid.Col  md={6} lg={3}>

<Box sx={{backgroundColor:'#ffffffa6', backdropFilter:'blur(5px)',  height:'50vh', width:'100%'}}>
<div style={{position:'absolute', zIndex:'1'}}>
    <Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>CFTV</Badge>
 
    <Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'purple', to: 'cyan', deg: 105 }}>Rede</Badge>
    </div>
<img


style={{objectFit:'scale-down', backgroundColor:'#fff', height:'100%', width:'100%'}}
src="https://media-exp1.licdn.com/dms/image/C4D0BAQGLI0If52p-Sw/company-logo_200_200/0/1593541403591?e=2147483647&v=beta&t=S7TvQmcvGrOiNZxKpCCW3TkI17A0Y6W97XTeMS6ZMOA"

/>

<div className={classes.blurBannerBuss} style={{backgroundColor:'#868d884f'}}><Text weight={'bold'} color={'midnightblue'}>Multitex Logística</Text><Text size={'sm'} variant='link' color={'white'}>Ver mais...</Text>
<text className='texto'>Pojetos de CFTV e links de rádio na unidade de Volta Redonda.</text>
</div>
</Box>


</Grid.Col>

<Grid.Col   lg={3}>
<Box sx={{backgroundColor:'#ffffffa6', backdropFilter:'blur(5px)',  height:'50vh', width:'100%'}}>
<div style={{position:'absolute', zIndex:'1'}}>
    <Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>CFTV</Badge>
    <Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Catraca</Badge>
    <Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Biometria</Badge>
    </div>


<img


style={{objectFit:'scale-down', backgroundColor:'#fff', height:'100%', width:'100%', padding:'10px'}}
src="https://static.wixstatic.com/media/1c3ccd_ae0341c09bc54161b559039f372970ea~mv2.png/v1/fill/w_1078,h_270,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1c3ccd_ae0341c09bc54161b559039f372970ea~mv2.png"

/>
<div className={classes.blurBannerBuss} style={{backgroundColor:'#868d884f'}}><Text weight={'bold'} color={'midnightblue'}>AMBEV</Text><Text size={'sm'} variant='link' color={'white'}>Ver mais...</Text> 
<text className='texto'>Instalação de CFTV catracas de acesso na filial Vidros</text>
</div>
</Box>


</Grid.Col>

<Grid.Col  md={6} lg={3}>

<Box sx={{backgroundColor:'#ffffffa6', backdropFilter:'blur(5px)',  height:'50vh', width:'100%'}}>
<div style={{position:'absolute', zIndex:'1'}}>
    <Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'purple', to: 'cyan', deg: 105 }}>Rede</Badge>
    </div>
<img


style={{objectFit:'scale-down', backgroundColor:'#fff', height:'100%', width:'100%'}}
src="https://static.wixstatic.com/media/1c3ccd_8b813482f8934477af152054082d159b~mv2.png/v1/fill/w_308,h_192,al_c,q_80,usm_0.66_1.00_0.01/1c3ccd_8b813482f8934477af152054082d159b~mv2.png"

/>
<div className={classes.blurBannerBuss} style={{backgroundColor:'#868d884f'}}><Text weight={'bold'} color={'midnightblue'}>AVA Logística</Text><Text size={'sm'} variant='link' color={'white'}>Ver mais...</Text> 
<text className='texto'>Instalação de cabeamento de rede.</text>
</div>
</Box>


</Grid.Col>

<Grid.Col  md={6} lg={3}>

<Box sx={{backgroundColor:'#ffffffa6', backdropFilter:'blur(5px)',  height:'50vh', width:'100%'}}>
<div style={{position:'absolute', zIndex:'1'}}>
<Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>CFTV</Badge>
    </div>
<img


style={{objectFit:'scale-down', backgroundColor:'#fff', height:'100%', width:'100%'}}
src="https://static.wixstatic.com/media/1c3ccd_12f3b18e65d14e7982229cac9cbde026.png/v1/fill/w_308,h_153,al_c,q_80,usm_0.66_1.00_0.01/1c3ccd_12f3b18e65d14e7982229cac9cbde026.png"

/>
<div className={classes.blurBannerBuss} style={{backgroundColor:'#868d884f'}}><Text weight={'bold'} color={'midnightblue'}>PMVR</Text><Text size={'sm'} variant='link' color={'white'}>Ver mais...</Text> 
<text className='texto'>Manutenção das câmeras de segurança dos prédios internos do município.</text>
</div>
</Box>


</Grid.Col>

<Grid.Col  md={6} lg={3}>

<Box sx={{backgroundColor:'#ffffffa6', backdropFilter:'blur(5px)',  height:'50vh', width:'100%'}}>
<div style={{position:'absolute', zIndex:'1'}}>
<Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'purple', to: 'cyan', deg: 105 }}>Rede</Badge>
    </div>
<img


style={{objectFit:'scale-down', backgroundColor:'#fff', height:'100%', width:'100%'}}
src="https://lirp.cdn-website.com/b7361548/dms3rep/multi/opt/logotipo-manetoni-158w.png"

/>
<div className={classes.blurBannerBuss} style={{backgroundColor:'#868d884f'}}><Text weight={'bold'} color={'midnightblue'}>Manetoni Aços</Text><Text size={'sm'} variant='link' color={'white'}>Ver mais...</Text> 
<text className='texto'>Manetoni Soluções em aço</text>
</div>
</Box>


</Grid.Col>


<Grid.Col  md={6} lg={3}>

<Box sx={{backgroundColor:'#ffffffa6', backdropFilter:'blur(5px)',  height:'50vh', width:'100%'}}>
<div style={{position:'absolute', zIndex:'1'}}>
<Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>CFTV</Badge>
<Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'purple', to: 'cyan', deg: 105 }}>Rede</Badge>
    </div>
<img


style={{objectFit:'scale-down', backgroundColor:'#fff', height:'100%', width:'100%'}}
src="https://static.wixstatic.com/media/1c3ccd_27594c6f122f4fb1b15a31e097d1ce46.png/v1/fill/w_250,h_86,al_c,q_85,enc_auto/1c3ccd_27594c6f122f4fb1b15a31e097d1ce46.png"

/>
<div className={classes.blurBannerBuss} style={{backgroundColor:'#868d884f'}}><Text weight={'bold'} color={'midnightblue'}>AABREU</Text><Text size={'sm'} variant='link' color={'white'}>Ver mais...</Text>
<text className='texto'>Manutenção do sistema de CFTV pré-existente, ampliação do número de câmeras e implantação da central de monitoramento com 112 câmeras instaladas.
Organização de cabeamento de rede e racks</text>
 </div>
</Box>


</Grid.Col>

<Grid.Col  md={6} lg={3}>

<Box sx={{backgroundColor:'#ffffffa6', backdropFilter:'blur(5px)',  height:'50vh', width:'100%'}}>
<div style={{position:'absolute', zIndex:'1'}}>
<Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>CFTV</Badge>
</div>
<img


style={{objectFit:'scale-down', backgroundColor:'#fff', height:'100%', width:'100%'}}
src="https://static.wixstatic.com/media/1c3ccd_1a017320cd6d4037845943c84763f8cd.png/v1/fill/w_318,h_85,al_c,q_85,enc_auto/1c3ccd_1a017320cd6d4037845943c84763f8cd.png"

/>
<div className={classes.blurBannerBuss} style={{backgroundColor:'#868d884f'}}><Text weight={'bold'} color={'midnightblue'}>Colégio ANGLO-AMERICANO</Text><Text size={'sm'} variant='link' color={'white'}>Ver mais...</Text> 
<text className='texto'>Implantação de sistema de câmeras na unidade do Colégio Anglo Americano de Volta Redonda</text>
</div>
</Box>


</Grid.Col>


<Grid.Col  md={6} lg={3}>

<Box sx={{backgroundColor:'#ffffffa6', backdropFilter:'blur(5px)',  height:'50vh', width:'100%'}}>
<div style={{position:'absolute', zIndex:'1'}}>
<Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>CFTV</Badge>
<Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'purple', to: 'cyan', deg: 105 }}>Fibra Óptica</Badge>
</div>
<img


style={{objectFit:'scale-down', backgroundColor:'#fff', height:'100%', width:'100%'}}
src="https://static.wixstatic.com/media/1c3ccd_bd5e3423ce954d36aeca030b6de960fb.jpg/v1/fill/w_201,h_78,al_c,q_80,enc_auto/1c3ccd_bd5e3423ce954d36aeca030b6de960fb.jpg"

/>
<div className={classes.blurBannerBuss} style={{backgroundColor:'#868d884f'}}><Text weight={'bold'} color={'midnightblue'}>Litografia VALENÇA</Text><Text size={'sm'} variant='link' color={'white'}>Ver mais...</Text> 
<text className='texto'>Implantação do sistema de câmeras na unidade de Barra Mansa - RJ. Manutenção de CFTV em todas as unidades do grupo.
Instalação de link de fibra ótica na unidade BM.</text>
</div>
</Box>


</Grid.Col>

<Grid.Col  md={6} lg={3}>

<Box sx={{backgroundColor:'#ffffffa6', backdropFilter:'blur(5px)',  height:'50vh', width:'100%'}}>
<div style={{position:'absolute', zIndex:'1'}}>
<Badge  mt={'10px'} ml={'5px'} variant="gradient" gradient={{ from: 'purple', to: 'cyan', deg: 105 }}>Rede</Badge>
    </div>
<img


style={{objectFit:'scale-down', backgroundColor:'#fff', height:'100%', width:'100%'}}
src="https://static.wixstatic.com/media/1c3ccd_d1356410bd4940efb2720dc90e0e3d3a.jpg/v1/fill/w_187,h_139,al_c,q_80,enc_auto/1c3ccd_d1356410bd4940efb2720dc90e0e3d3a.jpg"

/>
<div className={classes.blurBannerBuss} style={{backgroundColor:'#868d884f'}}><Text weight={'bold'} color={'midnightblue'}>REAL PRINT Litografia</Text><Text size={'sm'} variant='link' color={'white'}>Ver mais...</Text>
<text className='texto'>Implantação de sistema de monitoramento CFTV na fábrica de Floriano/Quatis, RJ.Manutenção da rede do CPD, organização dos cabos e racks.</text> </div>
</Box>


</Grid.Col>
        </Grid>
        </>
    )

} 