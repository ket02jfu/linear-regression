// Модель линейной регрессии для простейшего случая с одной независимой переменной
function linearEquation(yi, xi, number){
    // y = b0 + b1 * x1

    // yi - зависимая переменная, 
    // xi - независимая переменная, 
    // bar{x} - среднее значение независимой переменной,
    // bar{y} - среднее значение зависимой переменной,
    // b0 - коэффициент смещения (интерсепт), 
    // b1 - коэффициент наклона системы координат 

    // b1 = ( ∑((xi - bar{x}) - (yi - bar{y})) ) / ( ∑((xi - bar{x})^2) )
    // b0 = y - b1 * bar{x}
    // result: y = b0 + b1 * x1 (значение независимой переменной для n значения наблюдения)

    let b1 = calcB1(xi, yi);

    let b0 = (yi.reduce((acc, curr) => acc + curr) / yi.length) - b1 * xi.reduce((acc, curr) => acc + curr) / xi.length

    let result = b0 + b1 * number;
    console.log("коэффициент наклона b1: " + b1,"\nкоэффициент смещения системы b0: " + b0);
    console.log("результат из числа " + number + ": " + result);
}

const calcB1 = (x, y) => {
    const xMean = x.reduce((acc, curr) => acc + curr) / x.length;
    const yMean = y.reduce((acc, curr) => acc + curr) / y.length;
      
    const numerator = x.reduce((acc, curr, index) => acc + ((curr - xMean) * (y[index] - yMean)), 0);
    const denominator = x.reduce((acc, curr) => acc + ((curr - xMean) ** 2), 0);
      
    return numerator / denominator;
}

let x1 = [10, 17, 20];
let y = [80, 83, 85];
let number = 30;

linearEquation(y, x1, number)