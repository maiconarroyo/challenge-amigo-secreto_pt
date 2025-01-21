# Sorteio de Amigos

Este é um simples aplicativo de sorteio de amigos. O usuário pode adicionar amigos à lista e, ao clicar no botão para sortear, o sistema escolherá aleatoriamente um amigo da lista, riscando o nome do sorteado na lista e mostrando-o como resultado.

## Funcionalidades

- **Adicionar amigo**: O usuário pode adicionar o nome de um amigo na lista. O nome será capitalizado automaticamente (primeira letra maiúscula).
- **Sorteio de amigo**: Ao clicar no botão para sortear, o sistema escolhe um amigo aleatoriamente da lista, risca o nome do sorteado na lista de amigos e exibe o nome do amigo sorteado.
- **Alertas**: O sistema alerta o usuário caso haja menos de dois amigos na lista, solicitando a adição de mais um amigo para realizar o sorteio.

## Como usar

1. **Adicionar amigos**:
   - No campo de texto, insira o nome de um amigo e clique no botão para adicionar à lista.
   - O nome do amigo será formatado automaticamente com a primeira letra maiúscula.
   
2. **Sorteio de amigos**:
   - Após adicionar ao menos dois amigos, clique no botão "Sortear Amigo" para realizar o sorteio.
   - O nome do amigo sorteado será riscado na lista e exibido como resultado.

3. **Restrições**:
   - Se houver apenas um amigo na lista, será exibido um alerta pedindo para adicionar mais um amigo antes de realizar o sorteio.
   - Caso todos os amigos já tenham sido sorteados, um alerta informará ao usuário que não há mais amigos para sortear.

## Tecnologias

Este projeto é baseado em HTML, CSS e JavaScript puro, sem o uso de frameworks adicionais.

## Como rodar o projeto

1. Clone ou baixe o repositório:
   ```bash
   git clone https://github.com/maiconarroyo/sorteio-de-amigos.git