type OscarProps = {
  children: React.ReactNode;
};

export const Oscar = ({ children }: OscarProps) => {
  return (
    <div>
      <h2>{children}</h2>
    </div>
  );
};
