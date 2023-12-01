import React from 'react';
import styles from './Area3.module.css';
import Atributos from './Atributos';

export default function Area3() {
  return (
    <section className={styles.area3}>
      <h1 className="titulo">E oque é cada coisa?</h1>
      <nav className={styles.diferenciais}>
        <ul>
          <li>Analise</li>
          <li>Calendário</li>
          <li>Monitoramento</li>
          <li>Tendências</li>
          <li>Site</li>
        </ul>
      </nav>
      <nav>
        <ul>
          <Atributos
            img="/atributos/telescope"
            title="Análise de perfil"
            text="Em nossa abordagem cósmica,  pesquisamos a verdadeira essência que define você. 
            A 'bio' é o seu cartão de visitas para o universo, sendo o ponto de partida para transformações estelares.
            A análise do perfil é nossa prioridade inicial, explorando a identidade visual, nome, foto de perfil, biografia, destaques e conteúdos do feed como constelações a serem descobertas."
          />
          <Atributos
            img="/atributos/fasesLua"
            title="Calendário de conteúdo"
            text="Nas redes sociais, criamos um plano com nosso calendário estratégico. Nele, escolhemos os conteúdos que darão brilho ao perfil, assegurando visibilidade. Buscamos pelas interações, avaliando se nossa estratégia está gerando engajamento. O calendário é a chave para decifrar os mistérios do sucesso online, onde cada postagem é uma peça essencial nesse universo digital. 🌌✨"
          />
          <Atributos
            img="/atributos/monitorar"
            title="Monitoramento de Métricas"
            text="No universo digital, é crucial observar de perto as interações do perfil para avaliar a eficácia da estratégia. Esse monitoramento atua como um guia, indicando se estamos alcançando melhores resultados no engajamento das redes sociais. Uma abordagem direcionada que proporciona clareza sobre o impacto e as oportunidades online."
          />
          <Atributos
            img="/atributos/descobertas"
            title="Tendências"
            text="Quando lidamos com as mídias sociais, precisamos estar atentos às tendências do mercado para não sair por baixo. E para dar um toque único com a cara do cliente, podemos fazer as alterações necessárias para ficar ainda mais especial!"
          />
          <Atributos
            img="/atributos/globo"
            title="Seu site"
            text="Essa é outra forma de divulgar e ficar mais perto do seu cliente: com um site próprio para seu negócio. Ele também pode ser seu portfólio e a porta de entrada para prospecção de consumidores."
          />
        </ul>
      </nav>
    </section>
  );
}
