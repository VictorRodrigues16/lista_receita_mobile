# Tabs Navigator - React Native

Aplicativo de demonstração para aula de React Native com Tab Navigator.

## Funcionalidades

- **Tab Navigator**: Navegação entre telas usando bottom tabs
- **Telas incluídas**:
  - Home: Tela inicial com informações e navegação
  - Login: Tela de login com formulário
  - Register: Tela de cadastro com formulário

## Estrutura do Projeto

```
src/
├── navigation/
│   └── TabNavigator.tsx    # Configuração do Tab Navigator
├── screens/
│   ├── HomeScreen.tsx      # Tela inicial
│   ├── LoginScreen.tsx     # Tela de login
│   └── RegisterScreen.tsx  # Tela de cadastro
```

## Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm start
```

3. Escaneie o QR code com o Expo Go ou execute em um emulador.

## Conceitos Demonstrados

- **Navegação entre tabs**: Como navegar entre diferentes telas
- **Passagem de parâmetros**: Exemplos de navegação com dados
- **Headers personalizados**: Customização de headers
- **Ícones dinâmicos**: Ícones que respondem ao estado
- **Formulários**: Captura de dados do usuário

## Tecnologias Utilizadas

- React Native
- Expo
- React Navigation (Tab Navigator)
- TypeScript
- Expo Vector Icons
