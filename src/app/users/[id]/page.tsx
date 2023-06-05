import axios from "axios";
import Button from "@/components/Button";
import Message from "./Message";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
const UserById = async ({ params, searchParams }: any) => {
  console.log("Fetching users details...", params, searchParams);
  let response;
  try {
    response = await api.get(`users/${params.id}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  return (
    <div>
      <pre>{JSON.stringify(response?.data, null, 2)}</pre>
      <h1> Running User By Id</h1>
    </div>
  );
};

export default UserById;
