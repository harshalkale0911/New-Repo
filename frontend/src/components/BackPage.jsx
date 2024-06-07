 
 
 
const BackPage = () => {
  const book = {
    title: "harry's things ",
    author: "harshal",
    coverImages: [
      { url: "https://cdn.pixabay.com/photo/2024/02/27/00/13/heliconia-8599119_1280.jpg", description: "Cover Image 1" },
    ],
    user: "Username1234",
    createdAt: new Date().toLocaleDateString() 
  };

  return (
   <h1>this is BackPage</h1>
   <book/>
  );
};

export default BackPage;
