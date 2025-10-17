# 📱 App de Receitas Culinárias

<div align="center">

**Aplicativo mobile de gerenciamento de receitas desenvolvido com React Native e Expo**

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

</div>

---

## 📋 Sobre o Projeto

Aplicativo mobile completo para gerenciamento de receitas culinárias, desenvolvido como projeto acadêmico para demonstrar conhecimentos em:
- Navegação em React Native (Tab + Stack Navigation)
- Hooks do React (useState, useContext, useEffect)
- Formulários com validação
- Gerenciamento de estado global
- TypeScript
- Design moderno e responsivo

---

## ✨ Funcionalidades Implementadas

### 🧭 Navegação

#### Tab Navigation
- **Aba "Todas as Receitas"**: Exibe lista completa de receitas cadastradas
- **Aba "Adicionar Receita"**: Formulário para cadastrar novas receitas
- Navegação fluida entre abas com ícones intuitivos
- Indicador visual da aba ativa

#### Stack Navigation
- Ao clicar em qualquer receita da lista, empilha a tela de **"Detalhes da Receita"**
- Botão de voltar nativo do dispositivo
- Header customizado com título da receita
- Transições suaves entre telas

### 📝 Formulário e Validação

#### Campos do Formulário
1. **Nome da Receita** (obrigatório)
   - Input de texto
   - Validação: não pode estar vazio
   
2. **Ingredientes** (opcional)
   - Área de texto multilinha
   - Placeholder com exemplo
   - Valor padrão: "Não especificado"

3. **Tempo de Preparo** (obrigatório)
   - Input numérico
   - Validação: deve ser número positivo
   - Exibido em minutos

4. **Reservar na Geladeira** (booleano)
   - Switch toggle
   - Valor padrão: false
   - Indicador visual claro

#### Validação com useState
- ✅ **Nome da Receita**: Verifica se não está vazio
- ✅ **Tempo de Preparo**: Valida se é número positivo
- ✅ Mensagens de erro em tempo real
- ✅ Feedback visual (bordas vermelhas nos campos com erro)
- ✅ Botão desabilitado quando há erros
- ✅ Limpeza do formulário após sucesso

### 🎨 Design Moderno

- **Paleta de cores**: Tons quentes (laranja/âmbar) apropriados para culinária
- **Cards elevados**: Sombras suaves e bordas arredondadas
- **Ícones**: Ionicons para interface intuitiva
- **Tipografia**: Hierarquia clara e legível
- **Feedback visual**: Animações e estados de hover/press
- **Layout responsivo**: Adapta-se a diferentes tamanhos de tela

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (opcional, mas recomendado)
- Emulador Android/iOS **OU** dispositivo físico com [Expo Go](https://expo.dev/client)

### Instalação Passo a Passo

1. **Clone ou baixe o projeto**

```bash
# Se estiver no GitHub
git clone https://github.com/VictorRodrigues16/lista_receita_mobile.git
cd lista_receita_mobile

# OU baixe o ZIP e extraia
```

2. **Instale as dependências**

```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**

```bash
npx expo start
# ou
expo start
# ou
npm start
```

4. **Execute no emulador ou dispositivo**

Após iniciar, você verá um QR code no terminal. Escolha uma opção:

- **Android Emulator**: Pressione `a`
- **iOS Simulator**: Pressione `i` (apenas no macOS)
- **Dispositivo Físico**: 
  1. Instale o app [Expo Go](https://expo.dev/client)
  2. Escaneie o QR code com a câmera (iOS) ou com o app Expo Go (Android)

---

## 📁 Estrutura do Projeto

```
recipe-app/
├── App.tsx                              # Componente raiz com NavigationContainer
├── app.json                             # Configurações do Expo
├── package.json                         # Dependências do projeto
├── tsconfig.json                        # Configurações TypeScript
├── assets/                              # Imagens e ícones
│   ├── icon.png
│   ├── splash-icon.png
│   └── ...
├── src/
│   ├── navigation/
│   │   ├── TabNavigator.tsx            # Navegação por abas (Bottom Tabs)
│   │   └── RecipesStackNavigator.tsx   # Navegação em pilha (Stack)
│   │
│   ├── screens/
│   │   ├── RecipesListScreen.tsx       # 📋 Lista de todas as receitas
│   │   ├── AddRecipeScreen.tsx         # ➕ Formulário para adicionar receita
│   │   └── RecipeDetailsScreen.tsx     # 📖 Detalhes completos da receita
│   │
│   ├── context/
│   │   └── RecipesContext.tsx          # 🔄 Context API para estado global
│   │
│   └── types/
│       └── navigation.ts               # 📘 Tipos TypeScript para navegação
│
└── README.md                            # Este arquivo
```

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **React Native** | Framework para desenvolvimento mobile multiplataforma |
| **Expo** | Plataforma que facilita o desenvolvimento React Native |
| **React Navigation** | Biblioteca de navegação (Tab + Stack) |
| **TypeScript** | Superset JavaScript com tipagem estática |
| **Context API** | Gerenciamento de estado global do React |
| **AsyncStorage** | Persistência local de dados |
| **Ionicons** | Biblioteca de ícones |

---

## 🎯 Hooks Utilizados

### useState
- Gerenciamento de estado local dos formulários
- Controle de validação em tempo real
- Estados de loading e erro

### useContext
- Acesso ao estado global de receitas
- Compartilhamento de dados entre componentes
- Funções para adicionar/remover receitas

### useEffect
- Carregamento inicial de receitas do AsyncStorage
- Persistência automática de dados
- Limpeza de recursos

### useNavigation
- Navegação programática entre telas
- Acesso aos parâmetros de navegação
- Controle do stack de navegação


---

## ✅ Validações Implementadas

### Nome da Receita
| Regra | Status |
|-------|--------|
| Não pode estar vazio | ✅ |
| Deve ter pelo menos 1 caractere | ✅ |
| Mensagem de erro exibida | ✅ |

### Tempo de Preparo
| Regra | Status |
|-------|--------|
| Não pode estar vazio | ✅ |
| Deve ser um número | ✅ |
| Deve ser maior que zero | ✅ |
| Aceita apenas valores numéricos | ✅ |
| Mensagem de erro exibida | ✅ |

### Ingredientes
- Campo opcional
- Se vazio, salva como "Não especificado"

### Reservar na Geladeira
- Switch booleano (true/false)
- Valor padrão: false
- Sem validação necessária

---

## 🎓 Requisitos Acadêmicos Atendidos

### Navegação (4 pontos)
- [x] Tab Navigation com 2 abas funcionais
- [x] Stack Navigation para tela de detalhes
- [x] Navegação fluida e intuitiva

### Formulário e Validação (4 pontos)
- [x] Campo "Nome da Receita" (obrigatório)
- [x] Campo "Ingredientes" (área de texto)
- [x] Campo "Tempo de Preparo" (numérico)
- [x] Campo "Reservar na geladeira" (booleano)
- [x] Validação com useState
- [x] Nome não vazio
- [x] Tempo de preparo numérico e positivo

### Vídeo e Imagens (2 pontos)
- [ ] Vídeo demonstrativo do app funcionando
- [ ] Screenshots das principais telas
- [ ] Documentação de como executar

**Total**: 10 pontos

---

## 🐛 Solução de Problemas

### Erro: "Unable to resolve module"
```bash
# Limpe o cache e reinstale
rm -rf node_modules
npm install
npx expo start -c
```

### Erro: "java.lang.String cannot be cast to java.lang.Boolean"
- Este erro foi corrigido na versão atual
- Certifique-se de estar usando a versão mais recente do código

### App não abre no emulador
```bash
# Verifique se o emulador está rodando
adb devices

# Reinicie o Expo
npx expo start -c
```

### Mudanças não aparecem
```bash
# Limpe o cache do Expo
npx expo start -c

# Ou pressione 'r' no terminal para reload
```

---

## 📚 Recursos de Aprendizado

- [Documentação React Native](https://reactnative.dev/)
- [Documentação Expo](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [React Hooks](https://react.dev/reference/react)

---

## 👨‍💻 Desenvolvimento

Este projeto foi desenvolvido como trabalho acadêmico para demonstrar:

- ✅ Conhecimento em React Native e Expo
- ✅ Implementação de navegação complexa (Tab + Stack)
- ✅ Uso correto de Hooks do React
- ✅ Formulários com validação robusta
- ✅ Gerenciamento de estado com Context API
- ✅ TypeScript para type safety
- ✅ Boas práticas de UI/UX
- ✅ Código limpo e organizado

---

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais.

---


