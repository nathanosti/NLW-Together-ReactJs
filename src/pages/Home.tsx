import React from 'react';
import * as images from '../assets';

import '../styles/auth.scss';

export function Home() {
  return (
    <>
      <div id="page-auth">
        <aside>
          <img src={images.IllustrationSVG} alt="Aside image" />
          <h1>Toda pergunta tem uma resposta.</h1>
          <span>Aprenda e compartilhe conhecimento com outras pessoas</span>
        </aside>

        <main>
          <div id="content-div">
            <img id="logo-image" src={images.LogoSVG} alt="Let-Me Ask Logo" />

            <button id="google-create-room-button">
              <img src={images.GoogleSVG} alt="Google Icon" /> Crie sua sala com
              o Google
            </button>

            <div id="divider">ou entre em uma sala</div>

            <form>
              <input type="text" placeholder="Digite o código da sala" />
              <button>Entrar na sala</button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
}
