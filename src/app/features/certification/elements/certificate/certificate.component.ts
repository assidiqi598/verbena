import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../../core/services/theme.service';

@Component({
  selector: 'certificate',
  standalone: true,
  templateUrl: './certificate.component.html',
  styleUrl: './certificate.component.css',
})
export class Certificate {
  certificates: { id: string; title: string; link: string; issuer: string }[] = [
    {
      id: 'azure-fundamentals',
      title: 'Microsoft Certified: Azure Fundamentals',
      link: 'https://learn.microsoft.com/api/credentials/share/en-gb/VerbenaHaritzahAssidiqi-2802/5F88A5FD2D9F96B2?sharingId',
      issuer: 'Microsoft',
    },
    {
      id: 'microsoft-365-fundamentals',
      title: 'Microsoft 365 Certified: Fundamentals',
      link: 'https://learn.microsoft.com/en-gb/users/verbenaharitzahassidiqi-2802/credentials/7501914b9f84572d',
      issuer: 'Microsoft',
    },
    {
      id: 'dicoding-microservices',
      title: 'Belajar Membangun Arsitektur Microservices',
      link: 'https://www.dicoding.com/certificates/MEPJQD4JWX3V',
      issuer: 'Dicoding Indonesia',
    },
    {
      id: 'dicoding-linux-admin',
      title: 'Menjadi Linux System Administrator',
      link: 'https://www.dicoding.com/certificates/4EXGV1YKEXRL',
      issuer: 'Dicoding Indonesia',
    },
    {
      id: 'dicoding-ci-cd',
      title: 'Belajar Implementasi CI/CD',
      link: 'https://www.dicoding.com/certificates/53XEDJYOKPRN',
      issuer: 'Dicoding Indonesia',
    },
    {
      id: 'dicoding-dasar-devops',
      title: 'Belajar Dasar-Dasar DevOps',
      link: 'https://www.dicoding.com/certificates/1RXY2R14QXVM',
      issuer: 'Dicoding Indonesia',
    },
    {
      id: 'dicoding-jaringan-komputer',
      title: 'Belajar Jaringan Komputer untuk Pemula',
      link: 'https://www.dicoding.com/certificates/6RPNYLKLRZ2M',
      issuer: 'Dicoding Indonesia',
    },
    {
      id: 'udemy-flutter',
      title: 'The Complete Flutter Development Bootcamp with Dart',
      link: 'https://www.udemy.com/certificate/UC-46566e6d-e07f-462d-ac15-be620641e6ab/',
      issuer: 'Udemy',
    },
    {
      id: 'udemy-golang',
      title: "Go: The Complete Developer's Guide (Golang)",
      link: 'https://www.udemy.com/certificate/UC-29f0e2d4-d001-4570-9662-c27815298ce3/',
      issuer: 'Udemy',
    },
    {
      id: 'udemy-cypress',
      title: 'Automated Software Testing with Cypress',
      link: 'https://ude.my/UC-cd9ee8f2-5ca4-43d0-a790-46a3e94eaa4d',
      issuer: 'Udemy',
    },
    {
      id: 'udemy-web-dev-2021',
      title: 'The Complete 2021 Web Development Bootcamp',
      link: 'https://ude.my/UC-2b96e757-5266-4230-af06-414d5957f5f3',
      issuer: 'Udemy',
    },
  ];

  theme: ThemeService = inject(ThemeService);
}
