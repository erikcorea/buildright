export function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-3xl font-bold text-white sm:text-4xl">{value}</p>
      <p className="mt-1 text-sm text-brand-100/70">{label}</p>
    </div>
  );
}
