import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { PerfilService } from '../../services/perfil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  protected perfilService = inject(PerfilService); // Alterado para protected
  private fb = inject(FormBuilder);
  private router = inject(Router);

  loginForm = this.fb.group({
    matricula: ['', Validators.required],
    senha: ['', Validators.required]
  });
 navigateToCadastro() {
    // Garante que há um perfil selecionado antes de navegar
    if (!this.perfilService.getPerfil()) {
      alert('Por favor, selecione um perfil primeiro');
      this.router.navigate(['/']);
    } else {
      this.router.navigate(['/Cadastro']);
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const perfil = this.perfilService.getPerfil();
      if (perfil === 'aluno') {
        this.router.navigate(['/dashboard-aluno']);
      } else if (perfil === 'servidor') {
        this.router.navigate(['/dashboard-servidor']);
      }
    }
  }
}