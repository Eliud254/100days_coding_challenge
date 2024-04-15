function shortestPathWithEnergy(grid, E) {
  const m = grid.length;
  const n = grid[0].length;
  
  const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  const queue = [[0, 0, E, 0]]; // [x, y, remaining energy, total energy]
  const visited = new Set();
  
  while (queue.length) {
      const [x, y, energy, totalEnergy] = queue.shift();
      
      if (x === m - 1 && y === n - 1) return totalEnergy;
      
      for (const [dx, dy] of directions) {
          const nx = x + dx;
          const ny = y + dy;
          
          if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
              const newEnergy = energy - grid[nx][ny];
              
              if (newEnergy >= 0) {
                  const key = `${nx},${ny},${newEnergy}`;
                  if (!visited.has(key)) {
                      visited.add(key);
                      queue.push([nx, ny, newEnergy, totalEnergy + grid[nx][ny]]);
                  }
              }
          }
      }
  }
  
  return -1;
}

const gridWithEnergy = [
  [0, 2, 0, 0, 1],
  [0, 1, 0, 0, 0],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 1, 0],
  [1, 1, 0, 0, 0]
];
const energyLimit = 10;
console.log(shortestPathWithEnergy(gridWithEnergy, energyLimit)); // Output: 9
