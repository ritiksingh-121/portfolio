function Divider() {
  return (
    <div className="relative w-full flex justify-center">
      {/* glow */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px w-2/3
                      bg-red-800 dark:bg-red-900
                      blur-xl opacity-40 dark:opacity-60" />

      {/* sharp line */}
      <div className="relative h-px w-2/3
                      bg-gradient-to-r
                      from-transparent
                      via-red-800 dark:via-red-900
                      to-transparent" />
    </div>
  );
}

export default Divider;
