export const PageLoader = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 rounded-full border-2 border-brand-200 border-t-brand-600 animate-spin" />
        <p className="text-sm text-ink-500">Loading...</p>
      </div>
    </div>
  );
};
