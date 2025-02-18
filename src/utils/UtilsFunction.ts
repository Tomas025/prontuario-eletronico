export function calcularIdade(dataNascimento: string): number {
  const nascimento = new Date(dataNascimento);
  const hoje = new Date();

  let idade = hoje.getFullYear() - nascimento.getFullYear();
  const mesAtual = hoje.getMonth();
  const diaAtual = hoje.getDate();

  const mesNascimento = nascimento.getMonth();
  const diaNascimento = nascimento.getDate();

  // Se o aniversário ainda não ocorreu este ano, subtrai 1 da idade
  if (
    mesAtual < mesNascimento ||
    (mesAtual === mesNascimento && diaAtual < diaNascimento)
  ) {
    idade--;
  }

  return idade;
}
