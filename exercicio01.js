// Crie uma variavel que seja um array de um objeto possua os seguntes pares: chave e valor

// nome da vaiavel => users

// valores => um objeto com os valores login, password, cursos, sendo cursos um array com dois valores

// reendenizar no console a seguinte frase com o primeiro user do array 'Meu login é ${login}, minha senha é ${password} e faço os cursos ${cursos [x] e [y]}' 

const users = [
    {
      login: 'usuario123',
      password: '@senhaSegura123',
      cursos: ['TIIN', 'Games']
    },
    {
      login: 'outroUsuario',
      password: 'outraSenha',
      cursos: ['Design', 'Games']
    }
  ];
  
  console.log(`Meu login é ${users[0].login}, minha senha é ${users[0].password} e faço os cursos de ${users[0].cursos[0]} e ${users[0].cursos[1]}`);