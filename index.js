function rankeada (vitoria, derrota) {
    let saldoRankeada = vitoria - derrota;
    let nivelRankeada = '';
    if (vitoria < 10) nivelRankeada = 'Ferro';
    if (vitoria >= 10 && vitoria <= 20) nivelRankeada = 'Bronze';
    if (vitoria >= 20 && vitoria <= 50) nivelRankeada = 'Prata';
    if (vitoria >= 50 && vitoria <= 80) nivelRankeada = 'Ouro';
    if (vitoria >= 80 && vitoria <= 90) nivelRankeada = 'Diamante';
    if (vitoria >= 90 && vitoria <= 100) nivelRankeada = 'Lendário';
    if (vitoria >= 101) nivelRankeada = 'Imortal';
    return `O Herói está com saldo de ${saldoRankeada} e está no nível ${nivelRankeada}.`;
}

console.log(rankeada(32, 15))
