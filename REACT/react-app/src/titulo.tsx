function Titulo() {
  const nombre = "Wilmer";
  if (nombre) {
    return <p>Hola {nombre}</p>;
  }
  return <p>Hola mundo</p>;
}
export default Titulo;
