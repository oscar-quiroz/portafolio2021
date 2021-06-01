import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public sendEmail(e: Event) {
    alert('entró');
    console.log('entró al evento');
    e.preventDefault();
    emailjs
      .sendForm(
        'service_jjv06sh',
        'template_f6hdl17',
        e.target as HTMLFormElement,
        'user_HQLJhDumGGDaDB5JrWBpR'
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
          console.log(result, 'result solo');
          console.log('mensaje enviado');
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
