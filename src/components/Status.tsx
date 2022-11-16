import { Heading } from "./Heading";

type StatusProps = {
  status: "loading" | "success" | "error"; // type union
};

export const Status = ({ status }: StatusProps) => {
  let message;
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data fetched Successfully!";
  } else if (status === "error") {
    message = "Error Fetching Data";
  }

  return (
    <div>
      <h2>Status - {message}</h2>
      <Heading>Placeholder text</Heading>
    </div>
  );
};
