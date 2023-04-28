import { api } from "../../../lib/axios";

export const getPost = async (spotId: number, setPosts: CallableFunction) => {
    await api.get(`/post?spotId=${spotId}`)
        .then((response: any) => response.data)
        .then((data: { [key: string]: {} }) => setPosts(data));
};
