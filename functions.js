// função para buscar a marca que mais possui modelos
export function buscaMaior(cars) {
    let maiorQuantidade = Math.max(...cars.map(i => i.models.length))
    let marcasMaiores = cars.filter(i => i.models.length === maiorQuantidade).map(i => i.brand)
    return marcasMaiores.sort();
}

// função para buscar a marca que menos possui modelos
export function buscaMenor(cars) {
    let menorQuantidade = Math.min(...cars.map(i => i.models.length))
    let marcasMenores = cars.filter(i => i.models.length === menorQuantidade).map(i => i.brand)
    return marcasMenores.sort();
}

// função para buscar as marcas com mais modelos, limitado por um número
export function buscaRankMaiores(cars, rank) {
    let rankMaiores = cars.map(i => [i.brand, i.models.length])
    rankMaiores.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    return rankMaiores.slice(0, rank);
}

// função para buscar as marcas com menos modelos, limitado por um número
export function buscaRankMenores(cars, rank) {
    let rankMenores = cars.map(i => [i.brand, i.models.length])
    rankMenores.sort((a, b) => a[1] - b[1] || a[0].localeCompare(b[0]));
    return rankMenores.slice(0, rank);
}

//função para buscar todos os modelos da marca informada em uma lista
export function buscaMarca(cars, brand) {
    let carro = cars.find(i => i.brand.toLowerCase() === brand.toLowerCase())
    let modelosMarca = carro ? carro.models : []
    return modelosMarca;
}