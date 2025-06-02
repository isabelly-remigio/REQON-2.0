import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PerfilService {
  private _perfilSelecionado: string = '';

  setPerfil(perfil: string): void {
    this._perfilSelecionado = perfil;
    console.log('Perfil definido:', perfil); // Adicione para debug
  }

  getPerfil(): string {
    return this._perfilSelecionado;
  }
}