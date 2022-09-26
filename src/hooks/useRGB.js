import { useParams } from 'react-router-dom';

export default function RGB() {
  const { r, g, b } = useParams();

  return (
    <>
      <div className='main' style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
        <h1>{`rgb(${r},${g},${b})`}</h1>
      </div>
    </>
  );
}