const UserById = ({ params, searchParams }: any) => {
  return (
    <div>
      <pre>{JSON.stringify({ params }, null, 2)}</pre>
      <pre>{JSON.stringify({ searchParams }, null, 2)}</pre>
      Running User By Id
    </div>
  );
};

export default UserById;
