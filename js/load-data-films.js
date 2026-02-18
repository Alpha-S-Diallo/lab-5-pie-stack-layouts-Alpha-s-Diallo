d3.csv("../data/films.csv", d3.autoType).then(filmsData => {
    const genres = [...new Set(filmsData.map(d => d.genre))].sort();
    const years = [...new Set(filmsData.map(d => d.year))].sort((a, b) => a - b);
  
    const wideData = years.map(year => {
      const row = { year };
  
      genres.forEach(g => {
        const match = filmsData.find(d => d.year === year && d.genre === g);
        row[g] = match ? match.gross : 0;
      });
  
      return row;
    });
  
    wideData.columns = ["year", ...genres];
  
    formatsInfo.splice(0);
    formatsInfo.push(...genres.map(g => ({ id: g })));
  
    defineScales(wideData);
    drawStackedBars(wideData);
    drawStreamGraph(wideData);
    addLegend();
  });