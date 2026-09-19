import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="text-3xl font-semibold">No vendor by that name.</h1>
      <p className="mt-2 text-ink-300">Try the directory or run an assessment.</p>
      <Link href="/" className="mt-6 inline-block text-teal-300">
        Back to HANNO
      </Link>
    </div>
  );
}
