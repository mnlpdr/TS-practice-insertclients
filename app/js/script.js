const repositorioPessoas = new RepositorioPessoas();
const conta1 = new Conta('1', 100);
const conta2 = new Conta('2', 200);
const conta3 = new Conta('3', 300);
const conta4 = new Conta('4', 400);
const conta5 = new Conta('5', 500);
const conta6 = new Conta('6', 600);
const conta7 = new Conta('7', 700);
const conta8 = new Conta('8', 800);
const conta9 = new Conta('9', 900);
const cliente1 = new Cliente('Cliente A', 10, new Date('01/01/2001'), '111.111.111-11');
const cliente2 = new Cliente('Cliente B', 20, new Date('02/02/2002'), '222.222.222-22');
const cliente3 = new Cliente('Cliente C', 30, new Date('03/03/2003'), '333.333.333-33');
const empresa1 = new Empresa('Empresa X', 1, new Date('10/01/2010'), '11.111.111/0001-11');
const empresa2 = new Empresa('Empresa Y', 2, new Date('20/02/2020'), '22.222.222/0002-22');
const empresa3 = new Empresa('Empresa Z', 3, new Date('30/03/2030'), '33.333.333/0003-33');
cliente1.acrescentarConta(conta1);
cliente2.acrescentarConta(conta2);
cliente3.acrescentarConta(conta3);
empresa1.acrescentarConta(conta4);
empresa1.acrescentarConta(conta7);
empresa2.acrescentarConta(conta5);
empresa2.acrescentarConta(conta8);
empresa3.acrescentarConta(conta6);
empresa3.acrescentarConta(conta9);
repositorioPessoas.adicionar(cliente1);
repositorioPessoas.adicionar(cliente2);
repositorioPessoas.adicionar(cliente3);
repositorioPessoas.adicionar(empresa1);
repositorioPessoas.adicionar(empresa2);
repositorioPessoas.adicionar(empresa3);
repositorioPessoas.pessoas
    .forEach(pessoa => {
    console.log('Pessoa: ' + pessoa.nome +
        ' |-- Saldo Total: ' + pessoa.saldoTotalContas() +
        ' |-- Média Saldos: ' + pessoa.mediaSaldoContas());
});
empresa1.removerConta('4');
console.log(empresa2.pesquisarConta('5'));
