const margin = {top: 50, right: 0, bottom: 50, left: 70};
const width = 900;
const height = 350;
const innerWidth = width - margin.left - margin.right;
const innerHeight = height - margin.top - margin.bottom;

const formatsInfo = [
  {id: "vinyl", label: "Vinyl", color: "#76B6C2"},
  {id: "eight_track", label: "8-Track", color: "#4CDDF7"},
  {id: "cassette", label: "Cassette", color: "#20B9BC"},
  {id: "cd", label: "CD", color: "#2F8999"},
  {id: "download", label: "Download", color: "#E39F94"},
  {id: "streaming", label: "Streaming", color: "#ED7864"},
  {id: "other", label: "Other", color: "#ABABAB"},
];


const genresInfo = [
  {id: "Action", color: "#e63946"},
  {id: "Adventure", color: "#2a9d8f"},
  {id: "Comedy", color: "#e9c46a"},
  {id: "Drama", color: "#457b9d"},
  {id: "Horror", color: "#6a0572"},
  {id: "Thriller or Suspense", color: "#f4a261"},
  {id: "Romantic Comedy", color: "#e76f51"},
  {id: "Musical", color: "#2ec4b6"},
  {id: "Documentary", color: "#a8dadc"},
];