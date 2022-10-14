import React,{useRef} from 'react';
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay';
import { Image, Button, createStyles} from "@mantine/core";



const useStyles = createStyles((theme, _params) => ({
   

  blurBanner:{

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
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
          height:'70px'
        },

  },


}));



export default function CarouselLBR(){

   
    const autoplay = useRef(Autoplay({ delay: 7000 }));
    
   
    
      const {classes} = useStyles();
    return(

    <Carousel  
      height={350}     
      slideSize="50%"
      breakpoints={[{ maxWidth: 'lg', slideSize: '100%', slideGap: 1 }]}
      slideGap="xs"
      withControls
      loop
      align="start"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      >
        
      <Carousel.Slide><div><div className={classes.blurBanner}>Proteja seu patrimônio de onde estiver <Button size='xs' ml={30} variant="default">Saiba mais</Button></div><Image height={350} src="https://www.multisafe.com.br/wp-content/uploads/2019/10/como-conectar-meu-cftv-ao-meu-celular.jpg"></Image></div></Carousel.Slide>
      <Carousel.Slide><div><div className={classes.blurBanner}>Centrais de monitoramento 24H <Button size='xs' ml={30} variant="default">Saiba mais</Button></div><Image height={350} src="https://www.dicomp.com.br/blog/wp-content/uploads/2022/03/Blog-Seguranca-900x600.jpg"></Image></div></Carousel.Slide>
<Carousel.Slide><div><div className={classes.blurBanner} >Biometria e controle facial<Button size='xs' ml={30} variant="default">Saiba mais</Button></div><Image height={350} src="https://http2.mlstatic.com/D_NQ_NP_860296-MLB31344485006_072019-O.jpg"></Image></div></Carousel.Slide>
<Carousel.Slide><div><div className={classes.blurBanner} >Infraestrutura lógica<Button size='xs' ml={30} variant="default">Saiba mais</Button></div><Image height={350} src="https://itforum.com.br/wp-content/uploads/2018/06/redes_2_1-1.jpg"></Image></div></Carousel.Slide>
    </Carousel>

    )
}