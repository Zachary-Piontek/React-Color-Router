import { useParams } from 'react-router-dom';

export default function RGB() {
  const { r, g, b } = useParams();

  return (
    <>
      <div style={{ backgroundColor: `${r}${g}${b}` }}>
        <h1>{`R - ${r} G - ${g} B - ${b}`}</h1>
      </div>
    </>
  );
}