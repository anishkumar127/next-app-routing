import axios from "axios";
import { Metadata } from "next";
const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

const getUser = async (id: number) => {
  let response;
  try {
    response = await api.get(`users/${id}`, {
      next: {
        relavalidate: 10,
      },
    });
  } catch (error) {
    console.error(error);
  }
  return response?.data;
};

export const generateMetadata = async ({ params }: any) => {
  const user = await getUser(params.id);
  return {
    title: user?.username,
  };
};

const UserById = async ({ params, searchParams }: any) => {
  const user = await getUser(params.id);
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <h1> Running User By Id</h1>
    </div>
  );
};

export default UserById;
