import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public sendEmail(e: Event) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'info',
      title: 'Enviando ...'
    })

    
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
          Toast.fire({
            icon: 'success',
            title: 'El correo se a enviado satisfactoriamente'
          })
        },
        (error) => {
          console.log(error.text);
          Toast.fire({
            icon: 'error',
            title: 'Error al enviar le correo'
          })
        }
      );
  }
}
