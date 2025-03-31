export default function Footer() {
  return (
    <div className="flex items-center justify-center gap-4 lg:justify-start">
      <span className="text-sm font-semibolds tracking-widest text-gray-400 sm:text-base">
        Powered by{" "}
        <a
          href="https://plataforma.salvatore.academy/course/frontend-web-intermediario"
          className="underline"
        >
          salvatore.academy ➡️
        </a>
      </span>
    </div>
  );
}
