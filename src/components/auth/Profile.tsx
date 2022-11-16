export type ProfileProps = {
  name: string;
};

export const Profile = ({ name }: ProfileProps) => {
  <div>private profile component. Name is {name}</div>;
};
