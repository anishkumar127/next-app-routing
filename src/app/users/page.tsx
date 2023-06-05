import axios from "axios";
import Message from "./[id]/Message";
import Link from "next/link";
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

  console.log("Fetching Response");
  return (
    <div>
      Running users page
      {response?.data.map((item: any) => (
        <div key={item.id}>
          <Link prefetch={true} href={`/users/${item.id}`}>
            {item.email}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default page;
