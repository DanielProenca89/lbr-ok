import { useState } from 'react';
import { useForm } from "@mantine/form";
import { Modal, Button, Group, TextInput, Textarea } from '@mantine/core';
import { sendMail } from './api/email';


export default function EmailForm({setOpenedForm, openedForm}){


    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const send = async (value)=>{
        setLoading(true);
        const res  =  await sendMail(value.nome, value.email, value.mensagem)

        
        if(res.status==200){
            setError(false);
            setLoading(false);

            setTimeout(()=>setOpenedForm(false),3000)
        }else{
            setError(true);
            setLoading(false);
        }

    }


  const form = useForm({
    initialValues: {
      email: '',
      nome:'',
      mensagem:''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Email inválido'),
    },
  });

  return (
    <>
      <Modal
        opened={openedForm}
        onClose={() => setOpenedForm(false)}
        title="Envie uma mensagem e entraremos em contato"
      >

    <form onSubmit={form.onSubmit((values) => send(values))}>
<TextInput 
label="Nome"
{...form.getInputProps('nome')}
/>
<TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
/>

<Textarea
label="Mensagem"
{...form.getInputProps('mensagem')}

/>
<Button mt={"sm"} color={error==null?"blue":(error?"red":"green")} type="submit" loading = {loading}>{error==null?"Enviar":(error?"Houve um erro":"Email enviado!")}</Button>
    </form>
        
      </Modal>

   
    </>
  );
}

