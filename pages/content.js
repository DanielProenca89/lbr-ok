import { TypographyStylesProvider, Text, Center } from '@mantine/core';

export default function TextPage() {
  return (
    <Text lineClamp={3}>
      <TypographyStylesProvider>
        <h2 style={{textAlign:'center', color:'white'}}>Segurança</h2>
        <Center><div style={{width:'80%'}}>
        <p style={{color:'white', fontSize:'15px'}}>
          Oferecemos soluções completas e modernas em CFTV, controle de acesso e alarmes. Tudo isso, unindo tecnologia de ponta das marcas mais conceituadas do ramo e projetos personalizados para atender as necessidades da sua empresa.
        </p>
        </div></Center>
      </TypographyStylesProvider>
      <TypographyStylesProvider>
        <h2 style={{textAlign:'center', color:'white'}}>Estabilidade</h2>
        <Center><div style={{width:'80%'}}>
        <p style={{color:'white', fontSize:'15px'}}>
        Trafegar informações, nunca foi tão importante como é hoje. Para garantir que essas informações cheguem ao seu destino é imprecindível que se tenha uma infraestrutura lógica bem definida, organizada e bem planejada. A LBR Telecom entende essa necessidade e está preparada para te atender, do projeto à execução.
        </p>
        </div></Center>
      </TypographyStylesProvider>
      <TypographyStylesProvider>
        <h2 style={{textAlign:'center', color:'white'}}>Inovação</h2>
        <Center><div style={{width:'80%'}}>
        <p style={{color:'white', fontSize:'15px'}}>
       Nossa empresa está sempre trabalhando para inovar a sua! Para isso, contamos com um laboratório, onde testamos equipamentos e também desenvolvemos soluções e softwares para atender diferentes necessidades dos nossos clientes.  
        </p>
        </div></Center>
      </TypographyStylesProvider>
    </Text>
    
  );
}