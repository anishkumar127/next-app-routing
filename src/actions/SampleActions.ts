"use server";

export async function SampleActions(message: string) {
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        message: "success",
      });
    }, 2000);
  });
  console.log(response);
  return response;
}