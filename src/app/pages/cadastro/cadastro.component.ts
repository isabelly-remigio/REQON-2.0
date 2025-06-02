import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PerfilService } from '../../services/perfil.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  protected perfilService = inject(PerfilService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  // Formulário dinâmico
  cadastroForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    nome: ['', Validators.required],
    ...(this.perfilService.getPerfil() === 'aluno'
      ? { matricula: ['', Validators.required], curso: [''] }
      : { matriculaFuncional: ['', Validators.required], setor: [''] }
    ),
    senha: ['', [Validators.required, Validators.minLength(6)]]
  });

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log('Dados cadastrados:', this.cadastroForm.value);
      this.router.navigate(['/login']);
    }
  }
}