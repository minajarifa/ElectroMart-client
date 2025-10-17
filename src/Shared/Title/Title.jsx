export default function Title({ subheding, heading }) {
  return (
    <div className="my-5 font-bold text-center">
      <h2 className="m-3 text-xl">{subheding}</h2>
      <h2 className="m-3 text-3xl">{heading}</h2>
      <hr />
    </div>
  );
}
