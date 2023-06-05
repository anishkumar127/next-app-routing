import axios from "axios";
import Message from "./[id]/Message";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
const page = async () => {
  let response;
  try {
    response = await api.get("users");
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  return (
    <div>
      Running users page
      <Message>{response?.data.length}</Message>
      {response?.data.map((item) => (
        <Message key={item.id}>{item.email}</Message>
      ))}
    </div>
  );
};

export default page;
