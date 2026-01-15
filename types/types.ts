export interface INichoEmAlta {
   /** Tamanho da imagem: 260 x 146 */
   foto: string;
   titulo: string;
}

export interface IOqueIraReceber {
   titulo: string;
   descricao: string;
}

export interface IBonus {
   titulo: string;
   descricao: string;
   precoAnterior: number | string;
   precoAtual: number | string;
   /** Tamanho da imagem: X x X */
   foto: string;
   /** Somente utilizar no componente CardBonus */
   chave?: number;
}

export interface IPerguntaResposta {
   pergunta: string;
   resposta: string;
}
