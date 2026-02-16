const xScale = d3.scaleBand();
const colorScale = d3.scaleOrdinal();

const defineScales = (data) => {
  const formats = data.columns.filter(c => c !== "year");

  xScale
    .domain(data.map(d => d.year))
    .range([0, innerWidth])
    .paddingInner(0.2);

  colorScale
    .domain(formatsInfo.map(f => f.id))
    .range(formatsInfo.map(f => f.color));
};
