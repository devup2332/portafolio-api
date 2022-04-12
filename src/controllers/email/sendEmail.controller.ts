import { Response, Request } from "express";
import { createTransport } from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import hbs from "handlebars";
import { environments } from "../../environments";
import fs from "fs-extra";
import path from "path";
import SMTPTransport from "nodemailer/lib/smtp-transport";

export const SendEmailController = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    const {
      email: remiter,
      message: content,
      subject,
      phone,
      fullname,
    } = req.body;
    const conf: SMTPTransport.Options = {
      service: "gmail",
      host: "smtp.gmail.com",
      auth: {
        user: environments.NODEMAILER.NODEMAILER_EMAIL,
        pass: environments.NODEMAILER.NODEMAILER_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    };

    const html = await fs.readFile(
      path.resolve(__dirname, "../../public/email/email.html"),
      "utf8"
    );
    const data = {
      email: remiter,
      subject,
      message: content,
      phone,
      fullname,
    };
    const template = hbs.compile(html);

    const emailHTML = template(data);

    const transporter = createTransport(conf);
    const message: Mail.Options = {
      from: remiter,
      to: environments.NODEMAILER.NODEMAILER_EMAIL,
      subject,
      html: emailHTML,
    };
    await transporter.sendMail(message);
    return res.status(200).json({
      status: 1,
      message: "Email send successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 0,
      message: "Server fail to send",
    });
  }
};
