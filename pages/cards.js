import { Card, Image, Grid, Group,Text, Center} from "@mantine/core";


export default function Cards(){


    return(


        <>
         <Center style={{ width: '50%' }}>
<Grid columns={3}  justify="center" style={{width:'100%'}}>

<Grid.Col span={1} style = {{ width:'30%'}}>

<Card style={{backdropFilter:'blur(2px)', backgroundColor:'#ffffff8c'}}>
<Card.Section>
<Image  src="https://static.wixstatic.com/media/1c3ccd_d212efb67b3443eca217a6614ed66ac2.png/v1/fill/w_75,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1c3ccd_d212efb67b3443eca217a6614ed66ac2.png"></Image>
</Card.Section>



</Card>
</Grid.Col>

<Grid.Col span={1}>
<Card style={{backdropFilter:'blur(2px)', backgroundColor:'#ffffff8c'}}>
<Image  src="https://static.wixstatic.com/media/1c3ccd_10649e02d3dc41668814c0e3c7e9dbdd.png/v1/fill/w_75,h_76,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1c3ccd_10649e02d3dc41668814c0e3c7e9dbdd.png"></Image>
</Card>
</Grid.Col>   

<Grid.Col span={1}>
<Card style={{backdropFilter:'blur(2px)', backgroundColor:'#ffffff8c'}}>
<Image  src="https://static.wixstatic.com/media/1c3ccd_68f955999d7449e588018552a0c1f40c.png/v1/fill/w_89,h_89,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/1c3ccd_68f955999d7449e588018552a0c1f40c.png"></Image>
</Card>
</Grid.Col>  

</Grid>
</Center>
        </>

    )

}