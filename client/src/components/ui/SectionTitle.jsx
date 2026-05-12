export default function SectionTitle({
  label,
  title,
  description,
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

      <div>

        <p className="text-[#C8A96B] font-semibold uppercase tracking-[0.3em]">

          {label}

        </p>

        <h2 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-[#111827] max-w-3xl">

          {title}

        </h2>

      </div>

      {description && (

        <p className="text-lg leading-8 text-gray-600 max-w-xl">

          {description}

        </p>

      )}

    </div>
  );
}