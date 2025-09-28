ANOTAÇÕES

Quando você está trabalhando com frameworks como Next.js, React, ou outros, a pasta public é geralmente usada para armazenar arquivos estáticos. Para acessar esses arquivos, você deve referenciar os caminhos a partir da raiz da pasta public, sem o ./ ou o próprio nome da pasta public.

Por exemplo, se sua imagem está em public/images/logoName.png, você deve fazer o seguinte:

<!-- <img src="/images/logoName.png" alt="logoHeader" /> -->