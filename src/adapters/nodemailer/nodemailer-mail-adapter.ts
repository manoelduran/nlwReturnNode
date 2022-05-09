import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "f397cd78d9c775",
        pass: "343936a5016f0e"
    }
});
export class NodemailerMailAdapter implements MailAdapter{
   async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feed.com>',
        to:'Manoel Duran <manoel.duran@hotmail.com>',
        subject,
        html: body,
    });
   }
}