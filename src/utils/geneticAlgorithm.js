const getSortMethodByOptimum = (optimum) => {
  if (optimum === 'min') {
    return (a, b) => a.y - b.y;
  }
  return (a, b) => b.y - a.y;
};

// Функция поиска оптимума (максимума/минимума) функции F(X) на интервале [A,B]
// с использованием генетического алгоритма.
// Параметры:
// F - функция, которую нужно оптимизировать
// A - левая граница интервала
// B - правая граница интервала
// N - количество особей в популяции
// M - количество поколений
// P - вероятность мутации
// Q - количество особей, которые переходят в следующее поколение
// R - количество особей, которые могут мутировать
// optimum - тип оптимума (min - минимум, max - максимум)

const geneticAlgorithm = (F, A, B, N, M, P, Q, R, optimum) => {
  // Инициализация популяции
  let population = [];
  const allPopulations = [];
  const sortMethod = getSortMethodByOptimum(optimum);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < N; i++) {
    const x = A + Math.random() * (B - A);
    const y = F(x);
    population.push({ x, y });
  }
  allPopulations.push(population);
  // Основной цикл
  for (let i = 0; i < M; i++) {
    // Сортировка популяции по возрастанию или убыванию значения функции
    population.sort(sortMethod);
    // Выборка Q особей, которые переходят в следующее поколение
    const nextPopulation = population.slice(0, Q);
    // Выборка R особей, которые могут мутировать
    const mutationPopulation = population.slice(Q, Q + R);
    // Мутация
    for (const individual of mutationPopulation) {
      if (Math.random() < P) {
        individual.x = A + Math.random() * (B - A);
        individual.y = F(individual.x);
      }
    }
    // Скрещивание
    while (nextPopulation.length < N) {
      const parent1 = population[Math.floor(Math.random() * population.length)];
      const parent2 = population[Math.floor(Math.random() * population.length)];
      const child = {
        x: (parent1.x + parent2.x) / 2,
        y: F((parent1.x + parent2.x) / 2),
      };
      nextPopulation.push(child);
    }

    allPopulations.push(nextPopulation);
    population = nextPopulation;
  }

  return allPopulations;
};

export default geneticAlgorithm;
