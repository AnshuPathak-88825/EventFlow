import axios, { AxiosResponse, AxiosError } from "axios";
export const FetchData = async (url: string): Promise<any> => {
  try {
    const response = await axios(url);
    return response.data;
  } catch (error) {
    const axiosError: any = error;
    throw new Error("Error feteching data");
  }
};
export const PostData = async (Option: any, Url: string): Promise<any> => {
  try {

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.post(Url, Option, config);
    console.log(response);
    return response;

  } catch (error) {
    console.log("getting error in post request");
    throw new Error("Getting error");
  }
};
export const PutData = async (info: any, Url: string): Promise<any> => {
  try {
    const Option = {
      url: Url,
      data: info
    };
    console.log(Option);
    const proxy = "/api/proxy/put";
    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await axios.put(proxy, Option, config);
    console.log(response);
    return response;

  } catch (error) {
    console.log("getting error in post request");
  }
};
export const Deletedata = async (info: any, Url: string): Promise<any> => {
  const proxy = "/api/proxy/delete";
  try {
    const Option = {
      url: Url,
      data: info
    };
    console.log("hllo");
    const response = await axios.delete(proxy, { data: Option });
    console.log(response);
    console.log("hello");
    return response;
  } catch (error) {
    console.log("error");
    return "error";
  }

}