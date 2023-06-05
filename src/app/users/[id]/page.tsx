import Button from "@/components/Button";
import Message from "./Message";

const UserById = ({ params, searchParams }: any) => {
  console.log("hey");
  return (
    <div>
      <Message>
        <pre>{JSON.stringify({ params }, null, 2)}</pre>
      </Message>
      <Message>
        <pre>{JSON.stringify({ searchParams }, null, 2)}</pre>
      </Message>
      <Button>
        <button>Click Me</button>
      </Button>
      <h1> Running User By Id</h1>
    </div>
  );
};

export default UserById;
