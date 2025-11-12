interface IImage{
    id: string;
    name: string;
    src: string;
    category: "photo" | "vector";
    likes: number;
    shares: number;
}