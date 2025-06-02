import { Component } from '@angular/core';
import { PerfilService } from '../../services/perfil.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escolha-perfil',
  standalone: true,
  imports: [CommonModule, RouterModule], // RouterModule adicionado
  templateUrl: './escolha-perfil.component.html',
  styleUrls: ['./escolha-perfil.component.css']
})
export class EscolhaPerfilComponent {
  constructor(
    private perfilService: PerfilService,
    private router: Router
  ) {}

  selecionarPerfil(perfil: 'aluno' | 'servidor') {
    this.perfilService.setPerfil(perfil);
    this.router.navigate(['/Login']).then(success => {
      if (!success) {
        console.error('Falha na navegação! Verifique as rotas.');
      }
    });
  }
}