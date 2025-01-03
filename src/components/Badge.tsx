const Badge = ({ tag }: { tag: string }) => {
  return (
    <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400">
      {tag}
    </span>
  );
};

export default Badge;
