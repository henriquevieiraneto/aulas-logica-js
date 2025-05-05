function verificarAprovacao(nota) {
    /**
     * Verifica se um aluno foi aprovado ou reprovado com base na sua nota.
     *
     * @param {number} nota - A nota do aluno (um valor numérico).
     * @returns {string} Uma string indicando se o aluno foi "Aprovado" ou "Reprovado".
     */
    if (nota > 7) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
  
 