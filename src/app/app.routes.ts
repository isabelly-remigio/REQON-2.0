import { Routes } from '@angular/router';
import { EscolhaPerfilComponent } from './pages/escolha-perfil/escolha-perfil.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardAlunoComponent } from './pages/dashboard-aluno/dashboard-aluno.component';
import { DashboardServidorComponent } from './pages/dashboard-servidor/dashboard-servidor.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';


export const routes: Routes = [
  { path: '', component: EscolhaPerfilComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Cadastro', component: CadastroComponent },
  { path: 'DashboardAluno', component: DashboardAlunoComponent },
  { path: 'DashboardServidor', component: DashboardServidorComponent },
  { path: '**', redirectTo: '' }

];
