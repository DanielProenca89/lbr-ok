import emailjs from 'emailjs-com';





export async function sendMail(name, mail, message){
   const res = await emailjs.send("service_t1v765f","template_gi5qo5e",{
        from_name: name,
        from_mail: mail,
        message: message,
        }, 'mqzfwjc5VkXnPituS');
    return res;
}