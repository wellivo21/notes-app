## NOTES APP

### Descrição

Esta aplicação permite o usuário criar/remover notas, no formato de _sticky notes_.

Você pode conferir este aplicativo clicando [aqui](https://notes-app-ivo.netlify.app/)

### Explicação

A aplicação:

1. Permite a criação de notas, através da captura dos dados colocados nos _inputs_;
2. Faz a contagem. na área de texto, de quantos caracteres faltam para que o limite seja alcançado;
3. Inserção, de um elemento criado dinamicamente e com dados capturados, no DOM, com JavaScript;
4. Permite a remoção das _sticky notes_ através do clique no "X", presente no canto superior direito de cada nota.

### Processo de criação da aplicação

Após a criação/estilização do _template_ base (que é bem simplório, diga-se de passagem), criei, basicamente, 4 (três) funções:

1. A primeira, _charsLeftCount_, faz a contagem de quantos caracteres faltam para que se chegue ao limite máximo da área de texto. A contagem é feita de maneira completamente dinâmica, sem contar com dados brutos (_brute force_), através da captura do atributo "maxlength" presente no HTML e do tamanho da _string_ presente na área do texto. O resto é simples de entender;
2. A segunda, _createNote_, faz a criação da nota per se. Aqui, ocorrem várias coisas, como a captura dos valores no _input_ do título e na área de texto, ambas da nota. Ainda, são gerados números randômicos tanto para a escolha a cor do fundo da nota bem como de sua rotação, que varia de -20º à 20º. Após, é gerado o _markup_ a ser inserido no DOM, e, ainda, é colocado um _eventListener_, através da delegação de eventos, no botão "X" (fechar) presente no canto superior direito de cada nota, que faz com que a mesma seja removida. Ainda, há a remoção deste mesmo eventListener (somente no cartão removido), para evitar _bugs_;
3. A terceira, _formSubmit_ faz a submissão do formulário, criando a nota (ao invocar a função anterior) e reseta os valores do _input_ e da área de texto, bem como do número de caracteres faltantes para que se chegue ao limite máximo desta;
4. A última, _init_, é a função que inicia a execução da aplicação.
