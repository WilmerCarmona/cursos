function Titulo() {
  const nombre = "Nicolas";
  if (nombre) {
    return <p>Hola {nombre}</p>;
  }
  return <p>Hola mundo</p>;
}
export default Titulo;
