export default function CardResult(props) {
  return (
    <>
      <section className="relative h-28 border bg-zinc-100 rounded p-3">
        <h2 className="text-zinc-600">{props.title}</h2>
        <p className="absolute right-3 bottom-4 text-3xl font-bold">
          Rp 5.000.000
        </p>
      </section>
    </>
  );
}
