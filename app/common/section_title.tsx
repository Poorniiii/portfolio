export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-8">
      {title}
    </h2>
  );
}
